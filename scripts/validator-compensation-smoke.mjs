// SPDX-FileCopyrightText: 2026 AI Power Grid
// SPDX-License-Identifier: AGPL-3.0-or-later
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { once } from 'node:events';
import { createHash } from 'node:crypto';
import http from 'node:http';
import { mkdir } from 'node:fs/promises';
import { encode } from 'next-auth/jwt';
import { Wallet, verifyMessage, toUtf8String } from 'ethers';

const appOrigin = 'http://127.0.0.1:18914',
  coreOrigin = 'http://127.0.0.1:18915';
const authSecret = 'validator-compensation-isolated-test-only',
  userToken = 'comp-test-user-token';
const accountId = '00000000-0000-4000-8000-000000000123';
const id = `vpc_${'c'.repeat(64)}`,
  path = `/api/validator-compensation/${id}`,
  pagePath = `/dashboard/validator-payout/${id}`;
const wallet = Wallet.createRandom();
let state = 'awaiting_wallet',
  prepared = false,
  mode = 'normal',
  calls = 0,
  approves = 0,
  signs = 0,
  redirected = 0;
let observedToken,
  mockErrors = [];
const proof = {
  schema: 'aipg.validator.compensation.recipient.v1',
  audience: 'https://api.aipowergrid.io',
  campaign_id: 'pilot-test',
  contract_hash: 'a'.repeat(64),
  allocation_hash: 'b'.repeat(64),
  operator_group_id: 'opg_testoperator',
  account_id: accountId,
  validator_id: `val_${'1'.repeat(32)}`,
  signing_wallet: `0x${'2'.repeat(40)}`,
  chain_id: 8453,
  token_address: '0xa1c0decafe3e9bf06a5f29b7015cd373a9854608',
  asset: 'AIPG',
  decimals: 18,
  amount_atomic: '100000000000000000001',
  recipient: wallet.address.toLowerCase(),
  issued_at: new Date().toISOString(),
  expires_at: new Date(Date.now() + 3600_000).toISOString()
};
const sorted = Object.fromEntries(
  Object.entries(proof).sort(([a], [b]) => a.localeCompare(b))
);
const review_hash = createHash('sha256')
  .update(JSON.stringify(sorted))
  .digest('hex');
const message = `AI Power Grid validator compensation payout consent\nReward: 100.000000000000000001 AIPG on Base (chain 8453)\nDestination: ${proof.recipient}\nAuthorize only the exact earned allocation below to this Base recipient.\nThis is not a token approval, login, or authorization for other rewards.\n\n${JSON.stringify(sorted, null, 2)}`;
const json = (res, status, value) => {
  res.writeHead(status, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(value));
};
function view() {
  return {
    schema: 'aipg.validator.compensation.operator.v1',
    request_id: id,
    allocation_hash: proof.allocation_hash,
    status: state,
    payment_authorized: false,
    expires_at: proof.expires_at,
    approval_url: `https://console.aipowergrid.io/dashboard/validator-payout/${id}`,
    ...(prepared ? { consent: proof, message, review_hash } : {}),
    api_key: 'DO_NOT_EXPOSE',
    signature: 'DO_NOT_EXPOSE'
  };
}
const core = http.createServer(async (req, res) => {
  try {
    if (req.url === '/redirect') {
      redirected++;
      return json(res, 200, {});
    }
    if (!req.url?.startsWith('/v1/account/validator-compensation/requests/'))
      return json(res, 404, {});
    calls++;
    observedToken = req.headers.apikey;
    assert.equal(observedToken, userToken);
    if (mode === 'denied') return json(res, 403, { detail: 'DO_NOT_EXPOSE' });
    if (mode === 'offline') return json(res, 503, { detail: 'DO_NOT_EXPOSE' });
    if (mode === 'redirect') {
      res.writeHead(302, { Location: coreOrigin + '/redirect' });
      return res.end();
    }
    if (mode === 'huge') return json(res, 200, { padding: 'a'.repeat(20001) });
    if (mode === 'wrong')
      return json(res, 200, { ...view(), request_id: `vpc_${'d'.repeat(64)}` });
    const chunks = [];
    for await (const chunk of req) chunks.push(chunk);
    const body = chunks.length
      ? JSON.parse(Buffer.concat(chunks).toString())
      : null;
    assert.ok(
      req.url.startsWith(`/v1/account/validator-compensation/requests/${id}`)
    );
    if (req.url.endsWith('/prepare')) {
      assert.deepEqual(body, { recipient: proof.recipient });
      prepared = true;
    }
    if (req.url.endsWith('/approve')) {
      assert.equal(body.review_hash, review_hash);
      assert.equal(
        verifyMessage(message, body.signature).toLowerCase(),
        proof.recipient
      );
      state = 'awaiting_node';
      approves++;
    }
    json(res, 200, view());
  } catch (err) {
    mockErrors.push(err);
    json(res, 500, { detail: 'mock failure' });
  }
});
await new Promise((resolve, reject) => {
  core.once('error', reject);
  core.listen(18915, '127.0.0.1', resolve);
});
const app = spawn(
  process.execPath,
  [
    'node_modules/next/dist/bin/next',
    'start',
    '--hostname',
    '127.0.0.1',
    '--port',
    '18914'
  ],
  {
    env: {
      PATH: process.env.PATH,
      HOME: process.env.HOME,
      NODE_ENV: 'production',
      AUTH_SECRET: authSecret,
      NEXTAUTH_SECRET: authSecret,
      AUTH_TRUST_HOST: 'true',
      NEXTAUTH_URL: appOrigin,
      GRID_API_BASE: coreOrigin
    },
    stdio: ['ignore', 'pipe', 'pipe']
  }
);
let output = '';
for (const stream of [app.stdout, app.stderr])
  stream.on('data', (chunk) => {
    output = (output + chunk).slice(-4000);
  });
const cookieName = 'authjs.session-token';
const cookieValue = await encode({
  token: {
    sub: 'test-user',
    provider_id: 'google_test-user',
    name: 'Test operator',
    email: 'operator@example.test',
    gridAccountId: accountId,
    gridAccessToken: userToken,
    gridAccessTokenExpiresAt: Date.now() + 1800_000
  },
  secret: authSecret,
  salt: cookieName,
  maxAge: 3600
});
const request = (url, init = {}) =>
  fetch(appOrigin + url, {
    ...init,
    headers: { cookie: `${cookieName}=${cookieValue}`, ...init.headers },
    signal: AbortSignal.timeout(15000),
    redirect: 'manual'
  });
const post = (suffix, body, headers = {}) =>
  request(path + suffix, {
    method: 'POST',
    headers: {
      Origin: appOrigin,
      'Content-Type': 'application/json',
      ...headers
    },
    body: typeof body === 'string' ? body : JSON.stringify(body)
  });
async function expect(response, status) {
  assert.equal(response.status, status);
  assert.equal(response.headers.get('cache-control'), 'no-store');
  assert.equal(response.headers.get('referrer-policy'), 'no-referrer');
  const text = await response.text();
  assert.ok(!/DO_NOT_EXPOSE|comp-test-user-token/.test(text));
  return JSON.parse(text);
}
let browser;
try {
  for (let i = 0; i < 80; i++) {
    try {
      await fetch(appOrigin, { signal: AbortSignal.timeout(500) });
      break;
    } catch {
      if (app.exitCode !== null) throw new Error(output);
      await new Promise((r) => setTimeout(r, 250));
    }
  }
  const anonymous = await fetch(appOrigin + path);
  await expect(anonymous, 401);
  assert.equal(calls, 0);
  await expect(await request(path), 200);
  assert.equal(observedToken, userToken);
  for (const headers of [
    { Origin: 'https://evil.test' },
    { Origin: 'null' },
    { 'sec-fetch-site': 'cross-site' },
    { 'Content-Type': 'text/plain' },
    { 'Content-Encoding': 'gzip' }
  ]) {
    const before = calls;
    await expect(
      await post('/prepare', { recipient: proof.recipient }, headers),
      headers['Content-Type'] || headers['Content-Encoding'] ? 415 : 403
    );
    assert.equal(calls, before);
  }
  for (const body of [
    { recipient: proof.recipient, account_id: accountId },
    { recipient: 'bad' },
    'a'.repeat(20001)
  ])
    await expect(await post('/prepare', body), 400);
  await expect(await post('/prepare', { recipient: proof.recipient }), 200);
  assert.equal(approves, 0);
  for (const variant of ['denied', 'offline', 'redirect', 'huge', 'wrong']) {
    mode = variant;
    await expect(
      await request(path),
      variant === 'denied' ? 403 : variant === 'offline' ? 503 : 502
    );
  }
  assert.equal(redirected, 0);
  mode = 'normal';
  const page = await request(pagePath);
  assert.equal(page.status, 200);
  assert.equal(page.headers.get('referrer-policy'), 'no-referrer');
  assert.equal(page.headers.get('x-frame-options'), 'DENY');
  if (process.env.PLAYWRIGHT_MODULE) {
    const { chromium } = await import(process.env.PLAYWRIGHT_MODULE);
    browser = await chromium.launch({ headless: true });
    const context = await browser.newContext();
    await context.addCookies([
      {
        name: cookieName,
        value: cookieValue,
        url: appOrigin,
        httpOnly: true,
        sameSite: 'Lax'
      }
    ]);
    await context.exposeFunction(
      'walletRequest',
      async ({ method, params }) => {
        if (method === 'eth_requestAccounts' || method === 'eth_accounts')
          return [wallet.address];
        if (method === 'eth_chainId') return '0x2105';
        if (method === 'wallet_switchEthereumChain') return null;
        if (method === 'personal_sign') {
          assert.equal(toUtf8String(params[0]), message);
          signs++;
          return wallet.signMessage(message);
        }
        throw new Error('Unexpected wallet method');
      }
    );
    await context.addInitScript(() => {
      window.ethereum = { request: (args) => window.walletRequest(args) };
    });
    const tab = await context.newPage(),
      errors = [];
    tab.on('pageerror', (e) => errors.push(e.message));
    await tab.goto(appOrigin + pagePath);
    await tab.getByLabel('Payout wallet', { exact: true }).waitFor();
    assert.equal(signs, 0);
    await tab
      .getByLabel('Payout wallet', { exact: true })
      .selectOption('injected-0');
    await tab
      .getByRole('button', { name: 'Connect payout wallet', exact: true })
      .click();
    await tab
      .getByRole('button', { name: 'Approve payout destination', exact: true })
      .waitFor();
    assert.equal(signs, 0);
    const artifacts =
      process.env.QA_ARTIFACTS || '/tmp/aipg-compensation-console-qa';
    await mkdir(artifacts, { recursive: true });
    for (const width of [320, 390, 1280]) {
      await tab.setViewportSize({ width, height: 900 });
      assert.ok(
        await tab.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth
        )
      );
      await tab.screenshot({
        path: `${artifacts}/review-${width}.png`,
        fullPage: true
      });
    }
    await tab.reload();
    await tab.getByLabel('Payout wallet', { exact: true }).waitFor();
    assert.equal(signs, 0);
    assert.equal(
      await tab
        .getByRole('button', {
          name: 'Approve payout destination',
          exact: true
        })
        .count(),
      0
    );
    await tab
      .getByLabel('Payout wallet', { exact: true })
      .selectOption('injected-0');
    await tab
      .getByRole('button', { name: 'Connect payout wallet', exact: true })
      .click();
    await tab
      .getByRole('button', { name: 'Approve payout destination', exact: true })
      .click();
    await tab
      .getByText(
        'Wallet approved. Confirm the same amount and destination in your validator app.'
      )
      .waitFor();
    assert.equal(signs, 1);
    assert.equal(approves, 1);
    await tab.reload();
    await tab
      .getByText(
        'Wallet approved. Confirm the same amount and destination in your validator app.'
      )
      .waitFor();
    assert.equal(signs, 1);
    assert.deepEqual(errors, []);
  } else {
    await expect(
      await post('/approve', {
        review_hash,
        signature: await wallet.signMessage(message)
      }),
      200
    );
    assert.equal(approves, 1);
  }
  assert.deepEqual(mockErrors, []);
  console.log(
    'Compensation BFF/session/bounds/privacy/signature smoke passed. Synthetic Core, not production proof.'
  );
} finally {
  await browser?.close();
  if (app.exitCode === null) {
    const ended = once(app, 'exit');
    app.kill('SIGTERM');
    await ended;
  }
  core.closeAllConnections();
  await new Promise((resolve) => core.close(resolve));
}
