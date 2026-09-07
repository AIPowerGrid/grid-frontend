// SPDX-FileCopyrightText: 2026 AI Power Grid
// SPDX-License-Identifier: AGPL-3.0-or-later
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import ts from 'typescript';

const source = await readFile(
  new URL('../src/features/validators/evidence-context.ts', import.meta.url),
  'utf8'
);
const { outputText } = ts.transpileModule(source, {
  compilerOptions: {
    target: ts.ScriptTarget.ES2022,
    module: ts.ModuleKind.ES2022
  }
});
const { evidenceContext, evidenceCount, probeAge } = await import(
  `data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`
);
const metadata = {
  sampling: {
    attestation_votes: 10,
    distinct_assignments: 10,
    distinct_probe_groups: 2,
    distinct_registered_validators: 5,
    votes_without_group: 0,
    votes_without_registered_validator: 0,
    independent_sample_count: null
  },
  probe_freshness: {
    basis: 'core_completed_assignment',
    votes_with_probe_time: 10,
    latest_completed_at: '2026-09-07T00:00:00Z',
    age_seconds: 7200
  }
};

test('votes, groups and registrations remain separate; no CI is derived', () => {
  const result = evidenceContext(metadata, 10);
  assert.equal(result.votes, 10);
  assert.equal(result.groups, 2);
  assert.equal(result.validators, 5);
  assert.equal(result.ageSeconds, 7200);
  assert.equal(result.partialTiming, false);
  assert.equal('confidence' in result, false);
});

test('legacy, null and malformed metadata remain unknown, not zero', () => {
  for (const value of [undefined, null, [], 'bad', 9]) {
    const result = evidenceContext(
      { sampling: value, probe_freshness: value, uncertainty: value },
      10
    );
    assert.equal(result.votes, 10);
    assert.equal(result.groups, null);
    assert.equal(result.timedVotes, null);
    assert.equal(result.latestProbe, null);
    assert.equal(result.ageSeconds, null);
    assert.equal(evidenceCount(result.groups), 'Unknown');
  }
});

test('invalid or contradictory sample counts cannot create a sample claim', () => {
  for (const value of [-1, 1.5, NaN, Infinity, '2', 11]) {
    const result = evidenceContext(
      {
        ...metadata,
        sampling: { ...metadata.sampling, distinct_probe_groups: value }
      },
      10
    );
    assert.equal(result.groups, null);
  }
  assert.equal(evidenceContext(metadata, 9).groups, null);
  assert.equal(evidenceContext(metadata, Infinity).votes, null);
  assert.equal(evidenceCount(0), '0');
});

test('partial timing describes only the timestamped subset', () => {
  const result = evidenceContext(
    {
      ...metadata,
      probe_freshness: { ...metadata.probe_freshness, votes_with_probe_time: 4 }
    },
    10
  );
  assert.equal(result.timedVotes, 4);
  assert.equal(result.partialTiming, true);
  assert.equal(result.ageSeconds, 7200);
});

test('receipt time, malformed time and future-age errors do not imply freshness', () => {
  for (const override of [
    { basis: 'attestation_received_at' },
    { votes_with_probe_time: 0 },
    { latest_completed_at: 'broken' },
    { age_seconds: -1 },
    { age_seconds: Infinity },
    { age_seconds: null }
  ]) {
    const result = evidenceContext(
      {
        ...metadata,
        probe_freshness: { ...metadata.probe_freshness, ...override }
      },
      10
    );
    assert.equal(result.ageSeconds, null);
    assert.equal(result.latestProbe, null);
  }
  const result = evidenceContext(
    { uncertainty: { reasons: ['probe_time_in_future'] } },
    10
  );
  assert.equal(result.timingIssue, true);
});

test('age is explicitly snapshot-relative, not a live freshness assertion', () => {
  assert.equal(probeAge(null), 'Probe age unknown');
  assert.equal(probeAge(0), 'Under 1m at snapshot');
  assert.equal(probeAge(60), '1m at snapshot');
  assert.equal(probeAge(3600), '1h at snapshot');
  assert.equal(probeAge(86400), '1d at snapshot');
});
