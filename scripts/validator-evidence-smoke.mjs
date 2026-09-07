// SPDX-FileCopyrightText: 2026 AI Power Grid
// SPDX-License-Identifier: AGPL-3.0-or-later
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { once } from 'node:events';
import { mkdir } from 'node:fs/promises';
import http from 'node:http';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { encode } from 'next-auth/jwt';

const { chromium } = await import(
  process.env.PLAYWRIGHT_MODULE
    ? pathToFileURL(resolve(process.env.PLAYWRIGHT_MODULE)).href
    : 'playwright'
);
const origin = 'http://127.0.0.1:18904';
const secret = 'evidence-local-fixture-secret-only';
const userToken = 'evidence-local-user-token';
const artifacts = resolve(process.env.QA_ARTIFACTS ?? '/tmp/aipg-evidence-qa');
let mode = 'current';
let forwarded = 0;
const mockErrors = [];
const row = {
  subject_type: 'worker',
  subject_id: 'synthetic-worker',
  worker_id: 'synthetic-worker',
  model: 'synthetic-model',
  modality: 'text',
  capability: 'echo',
  score_dimension: 'protocol_conformance',
  quality_eligible: false,
  quality_score: null,
  total: 10,
  healthy: 8,
  slow: 1,
  failed: 1,
  healthy_rate: 0.8,
  slow_rate: 0.1,
  failed_rate: 0.1,
  avg_latency_ms: 1234,
  avg_score: 0.8,
  first_seen: '2026-09-07T01:00:00Z',
  last_seen: '2026-09-07T01:59:59Z',
  authority: 'authoritative',
  quorum_status: 'accepted'
};
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
    votes_with_probe_time: 4,
    latest_completed_at: '2026-09-07T00:00:00Z',
    age_seconds: 7200
  },
  uncertainty: { confidence_interval: null, reasons: ['probe_time_missing'] }
};
function scorecards() {
  return {
    items:
      mode === 'empty'
        ? []
        : [{ ...row, ...(mode === 'legacy' ? {} : metadata) }],
    count: mode === 'empty' ? 0 : 1,
    window_hours: 168,
    limit: 100,
    economic_effect: 'none',
    authority: 'all',
    ...(mode === 'legacy'
      ? {}
      : {
          generated_at: '2026-09-07T02:00:00Z',
          rate_basis: 'attestation_votes',
          window_basis: 'attestation_received_at'
        })
  };
}
const core = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  try {
    if (req.url.startsWith('/v1/account/validator-scorecards')) {
      assert.equal(req.headers.apikey, userToken);
      forwarded++;
      res.statusCode = mode === 'unavailable' ? 503 : 200;
      return res.end(
        JSON.stringify(
          mode === 'unavailable' ? { error: 'unavailable' } : scorecards()
        )
      );
    }
    if (req.url.startsWith('/v1/validator/assignments/health')) {
      if (mode.startsWith('health-')) {
        res.statusCode =
          mode === 'health-denied'
            ? 403
            : mode === 'health-malformed'
              ? 200
              : 503;
        return res.end(mode === 'health-malformed' ? 'not-json' : '{}');
      }
      return res.end(
        JSON.stringify({
          quorum: { pending: 0, accepted: 1, disputed: 0, finalized: 0 },
          probe: {},
          recent: [],
          economic_effect: 'none'
        })
      );
    }
    if (req.url.includes('/validators')) {
      return res.end(JSON.stringify({ nodes: [], economic_effect: 'none' }));
    }
    res.statusCode = 404;
    res.end(JSON.stringify({ error: 'fixture route not configured' }));
  } catch (error) {
    mockErrors.push(error.message);
    res.statusCode = 500;
    res.end('{}');
  }
});
await new Promise((accept, reject) => {
  core.once('error', reject);
  core.listen(18905, '127.0.0.1', accept);
});
const app = spawn(
  process.execPath,
  [
    'node_modules/next/dist/bin/next',
    'start',
    '--hostname',
    '127.0.0.1',
    '--port',
    '18904'
  ],
  {
    env: {
      ...process.env,
      AUTH_SECRET: secret,
      NEXTAUTH_SECRET: secret,
      AUTH_TRUST_HOST: 'true',
      NEXTAUTH_URL: origin,
      GRID_API_BASE: 'http://127.0.0.1:18905',
      GRID_SERVICE_API_KEY: 'evidence-local-service-token'
    },
    stdio: ['ignore', 'pipe', 'pipe']
  }
);
let logs = '';
app.stdout.on('data', (chunk) => {
  logs = (logs + chunk).slice(-10000);
});
app.stderr.on('data', (chunk) => {
  logs = (logs + chunk).slice(-10000);
});
let browser;
try {
  let ready = false;
  for (let attempt = 0; attempt < 60; attempt++) {
    if (app.exitCode !== null) throw new Error(`Console exited: ${logs}`);
    try {
      const response = await fetch(origin, {
        signal: AbortSignal.timeout(1000)
      });
      if (response.ok) {
        ready = true;
        break;
      }
    } catch {
      /* Startup polling only; bounded below. */
    }
    await new Promise((accept) => setTimeout(accept, 500));
  }
  assert.ok(ready, `Console did not start: ${logs}`);
  const token = await encode({
    token: {
      sub: 'evidence-test',
      provider_id: 'google_evidence-test',
      name: 'Local evidence test',
      email: 'operator@example.test',
      gridAccountId: '00000000-0000-0000-0000-000000000123',
      gridAccessToken: userToken,
      gridAccessTokenExpiresAt: Date.now() + 1800000
    },
    secret,
    salt: 'authjs.session-token',
    maxAge: 3600
  });
  const anonymous = await fetch(`${origin}/api/validator/scorecards`);
  assert.notEqual(anonymous.status, 200);
  const proxied = await fetch(`${origin}/api/validator/scorecards`, {
    headers: { cookie: `authjs.session-token=${token}` }
  });
  assert.equal(proxied.status, 200);
  assert.deepEqual(await proxied.json(), scorecards());
  browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  await context.addCookies([
    {
      name: 'authjs.session-token',
      value: token,
      url: origin,
      httpOnly: true,
      sameSite: 'Lax'
    }
  ]);
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await mkdir(artifacts, { recursive: true });
  for (const width of [1440, 768, 375, 320]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(`${origin}/dashboard/validators`);
    const samples = page.getByRole('button', {
      name: 'Evidence limits for synthetic-worker'
    });
    await samples.waitFor();
    const table = page.getByRole('table').filter({ has: samples });
    assert.match(
      await table.innerText(),
      /10 votes[\s\S]*2 groups[\s\S]*5 registered validators/
    );
    assert.match(await table.innerText(), /2h at snapshot/);
    assert.match(await table.innerText(), /4 \/ 10 votes with probe time/);
    assert.match(await table.innerText(), /Some probe times missing/);
    await samples.scrollIntoViewIfNeeded();
    await samples.focus();
    await page.keyboard.press('Enter');
    const detail = page.getByRole('dialog');
    await detail.waitFor();
    assert.match(await detail.innerText(), /Independent samples: unknown/);
    assert.match(
      await detail.innerText(),
      /Confidence interval: not estimated/
    );
    const box = await detail.boundingBox();
    assert.ok(
      box.x >= 0 && box.x + box.width <= width,
      `Popover overflow at ${width}`
    );
    assert.ok(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth
      ),
      `Page overflow at ${width}`
    );
    await page.screenshot({
      path: `${artifacts}/evidence-${width}.png`,
      animations: 'disabled'
    });
    const section = page.getByRole('heading', {
      name: 'Scorecards',
      exact: true
    });
    const sectionBox = await section.boundingBox();
    assert.ok(
      sectionBox.x >= 0 && sectionBox.x < width,
      `Section scrolled offscreen at ${width}`
    );
    await page.keyboard.press('Escape');
    await detail.waitFor({ state: 'hidden' });
  }
  mode = 'legacy';
  await page.getByRole('button', { name: 'Refresh', exact: true }).click();
  await page.getByText('Probe age unknown', { exact: true }).waitFor();
  assert.ok(
    await page.getByText('Unknown groups', { exact: true }).isVisible()
  );
  assert.ok(
    await page
      .getByText('Unknown registered validators', { exact: true })
      .isVisible()
  );
  for (const healthMode of [
    'health-denied',
    'health-unavailable',
    'health-malformed'
  ]) {
    mode = healthMode;
    await page.getByRole('button', { name: 'Refresh', exact: true }).click();
    await page
      .getByText('Node assignment health is unavailable for this account.', {
        exact: true
      })
      .waitFor();
    await page
      .getByRole('button', { name: 'Evidence limits for synthetic-worker' })
      .waitFor();
    assert.equal(
      await page.getByText('Pending evidence', { exact: true }).count(),
      0
    );
    assert.equal(
      await page
        .getByRole('heading', { name: 'Audit worker compensation' })
        .count(),
      0
    );
    assert.equal(
      await page.getByRole('heading', { name: 'Probe Group Health' }).count(),
      0
    );
  }
  mode = 'empty';
  await page.getByRole('button', { name: 'Refresh', exact: true }).click();
  await page
    .getByText('No validator evidence in this window yet.', { exact: true })
    .waitFor();
  mode = 'unavailable';
  await page.getByRole('button', { name: 'Refresh', exact: true }).click();
  await page
    .getByText('Validator scorecards are unavailable right now.')
    .first()
    .waitFor();
  assert.deepEqual(errors, []);
  assert.deepEqual(mockErrors, []);
  assert.ok(forwarded >= 8);
  console.log(
    `Evidence proxy + UI passed: account-read endpoint, 4 viewports, keyboard details, legacy/empty/error, optional denied/unavailable/malformed node health. Screenshots: ${artifacts}`
  );
} finally {
  if (browser) await browser.close();
  if (app.exitCode === null) {
    const exited = once(app, 'exit');
    app.kill('SIGTERM');
    const killTimer = setTimeout(() => app.kill('SIGKILL'), 5000);
    await exited;
    clearTimeout(killTimer);
  }
  await new Promise((accept) => core.close(accept));
}
