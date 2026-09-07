// SPDX-FileCopyrightText: 2026 AI Power Grid
// SPDX-License-Identifier: AGPL-3.0-or-later

export interface EvidenceMetadata {
  sampling?: unknown;
  probe_freshness?: unknown;
  uncertainty?: unknown;
}

function record(value: unknown): Record<string, unknown> {
  return value !== null && typeof value === 'object' && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : {};
}

function count(
  value: unknown,
  ceiling = Number.MAX_SAFE_INTEGER
): number | null {
  return typeof value === 'number' &&
    Number.isSafeInteger(value) &&
    value >= 0 &&
    value <= ceiling
    ? value
    : null;
}

export function evidenceContext(item: EvidenceMetadata, total: number) {
  const sampling = record(item.sampling);
  const freshness = record(item.probe_freshness);
  const votes = count(total);
  const consistent =
    votes !== null && count(sampling.attestation_votes) === votes;
  const boundCount = (value: unknown) =>
    consistent ? count(value, votes ?? 0) : null;
  const timedVotes = boundCount(freshness.votes_with_probe_time);
  const timestamp = freshness.latest_completed_at;
  const hasProbeTime =
    freshness.basis === 'core_completed_assignment' &&
    timedVotes !== null &&
    timedVotes > 0 &&
    typeof timestamp === 'string' &&
    Number.isFinite(Date.parse(timestamp)) &&
    typeof freshness.age_seconds === 'number' &&
    Number.isFinite(freshness.age_seconds) &&
    freshness.age_seconds >= 0;

  // This contract does not establish independent trials or calibrated CIs.
  // Never infer either from distinct registrations, high pass rates or counts.
  return {
    votes,
    assignments: boundCount(sampling.distinct_assignments),
    groups: boundCount(sampling.distinct_probe_groups),
    validators: boundCount(sampling.distinct_registered_validators),
    ungrouped: boundCount(sampling.votes_without_group),
    unregistered: boundCount(sampling.votes_without_registered_validator),
    timedVotes,
    latestProbe: hasProbeTime ? timestamp : null,
    ageSeconds: hasProbeTime ? (freshness.age_seconds as number) : null,
    partialTiming: timedVotes !== null && votes !== null && timedVotes < votes,
    timingIssue: Array.isArray(record(item.uncertainty).reasons)
      ? (record(item.uncertainty).reasons as unknown[]).includes(
          'probe_time_in_future'
        )
      : false
  };
}

export function evidenceCount(value: number | null): string {
  return value === null ? 'Unknown' : value.toLocaleString('en-US');
}

export function probeAge(seconds: number | null): string {
  if (seconds === null) return 'Probe age unknown';
  if (seconds < 60) return 'Under 1m at snapshot';
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m at snapshot`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)}h at snapshot`;
  return `${Math.floor(seconds / 86400)}d at snapshot`;
}
