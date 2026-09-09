// SPDX-FileCopyrightText: 2026 AI Power Grid
// SPDX-License-Identifier: AGPL-3.0-or-later
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { randomBytes } from 'node:crypto';
import { once } from 'node:events';
import { mkdir } from 'node:fs/promises';
import http from 'node:http';
import { resolve } from 'node:path';
import { encode } from 'next-auth/jwt';
import { chromium } from 'playwright';

const origin = 'http://127.0.0.1:18914';
const secret = randomBytes(32).toString('hex');
const userToken = randomBytes(24).toString('hex');
const receiptStorageName = 'aipg.pendingDeposit.v1';
const txHash = `0x${'a'.repeat(64)}`;
const accountId = '00000000-0000-0000-0000-000000000123';
const artifacts = resolve(process.env.QA_ARTIFACTS ?? '/tmp/aipg-funding-qa');
const calls = [];
const mockErrors = [];
let claimStatuses = [];
const config = {
  chain: { id: 8453, name: 'Base' },
  linked_wallet: null,
  linked_wallets: [],
  terms: {},
  assets: [
    {
      asset: 'USDC',
      enabled: true,
      treasury: `0x${'2'.repeat(40)}`,
      token_address: `0x${'3'.repeat(40)}`,
      decimals: 6,
      price_micro: 1_000_000,
      minimum_credit_micro: 10_000,
      maximum_credit_micro: 100_000_000,
      status: 'live'
    }
  ]
};
const credits = {
  account_id: accountId,
  paid: { balance_micro: 10_000_000, balance_usd: 10 },
  charging_mode: 'on',
  charging_enabled: true
};
function json(res, status, body) {
  res.writeHead(status, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(body));
}
const core = http.createServer(async (req, res) => {
  try {
    const path = new URL(req.url, origin).pathname;
    if (path.startsWith('/v1/account/'))
      assert.equal(req.headers.apikey, userToken);
    if (path === '/v1/account/deposits/config') return json(res, 200, config);
    if (path === '/v1/account/credits') return json(res, 200, credits);
    if (path === '/v1/account/deposits')
      return json(res, 200, { deposits: [] });
    if (path === '/v1/account/deposits/claim') {
      assert.equal(req.method, 'POST');
      const chunks = [];
      for await (const chunk of req) chunks.push(chunk);
      const body = JSON.parse(Buffer.concat(chunks).toString());
      assert.deepEqual(body, { tx_hash: txHash });
      calls.push(body);
      const status = claimStatuses.shift();
      assert.ok(status, 'Unexpected claim or automatic retry');
      return json(
        res,
        status,
        status === 200
          ? {
              asset: 'USDC',
              tx_hash: txHash,
              deposit_id: 1,
              amount: '10',
              amount_usd: 10,
              credited: false,
              already_claimed: true
            }
          : {
              detail:
                status === 425
                  ? 'Still confirming'
                  : 'Receipt check unavailable'
            }
      );
    }
    return json(res, 404, { detail: 'Fixture route not configured' });
  } catch (error) {
    mockErrors.push(error.message);
    return json(res, 500, { detail: 'Fixture assertion failed' });
  }
});
await new Promise((accept, reject) => {
  core.once('error', reject);
  core.listen(18915, '127.0.0.1', accept);
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
      ...process.env,
      AUTH_SECRET: secret,
      NEXTAUTH_SECRET: secret,
      AUTH_TRUST_HOST: 'true',
      NEXTAUTH_URL: origin,
      GRID_API_BASE: 'http://127.0.0.1:18915',
      GRID_SERVICE_API_KEY: randomBytes(24).toString('hex')
    },
    stdio: ['ignore', 'pipe', 'pipe']
  }
);
let logs = '';
for (const stream of [app.stdout, app.stderr])
  stream.on('data', (chunk) => {
    logs = (logs + chunk).slice(-10_000);
  });
let browser;
try {
  let ready = false;
  for (let attempt = 0; attempt < 80; attempt++) {
    if (app.exitCode !== null) throw new Error(`Console exited: ${logs}`);
    try {
      if ((await fetch(origin, { signal: AbortSignal.timeout(1000) })).ok) {
        ready = true;
        break;
      }
    } catch {
      /* Bounded startup polling. */
    }
    await new Promise((accept) => setTimeout(accept, 250));
  }
  assert.ok(ready, `Console did not start: ${logs}`);
  browser = await chromium.launch({ headless: true });
  await mkdir(artifacts, { recursive: true });
  let fixtureCookies;
  for (const [identity, width] of [
    ['google', 1440],
    ['wallet', 375]
  ]) {
    const token = await encode({
      token: {
        sub: `funding-${identity}`,
        provider_id: `${identity}_funding-test`,
        name: 'Funding test',
        gridAccountId: accountId,
        gridAccessToken: userToken,
        gridAccessTokenExpiresAt: Date.now() + 1_800_000
      },
      secret,
      salt: 'authjs.session-token',
      maxAge: 3600
    });
    const context = await browser.newContext({
      viewport: { width, height: 900 }
    });
    await context.route('**/*', (route) =>
      new URL(route.request().url()).origin === origin
        ? route.continue()
        : route.abort()
    );
    await context.addCookies([
      {
        name: 'authjs.session-token',
        value: token,
        url: origin,
        httpOnly: true,
        sameSite: 'Lax'
      }
    ]);
    await context.addInitScript(() => {
      window.walletCalls = [];
      window.ethereum = {
        request: async ({ method }) => {
          window.walletCalls.push(method);
          throw new Error('Receipt recovery must not invoke a wallet');
        }
      };
    });
    const page = await context.newPage();
    page.setDefaultTimeout(15_000);
    const errors = [];
    page.on('pageerror', (error) => errors.push(error.message));
    await page.goto(`${origin}/dashboard/funding`);
    await page.getByRole('heading', { name: 'Credits & Funding' }).waitFor();
    await page.evaluate(
      ({ key, hash }) =>
        localStorage.setItem(
          key,
          JSON.stringify({ asset: 'USDC', txHash: hash })
        ),
      { key: receiptStorageName, hash: txHash }
    );
    const before = calls.length;
    await page.reload();
    await page.getByRole('button', { name: 'Retry credit' }).waitFor();
    assert.equal(calls.length, before, 'Reload must not claim automatically');
    claimStatuses = [425, 503];
    await page.getByRole('button', { name: 'Retry credit' }).click();
    await page
      .getByText('Receipt check unavailable', { exact: true })
      .waitFor();
    assert.equal(calls.length, before + 2);
    await page.reload();
    await page.getByRole('button', { name: 'Retry credit' }).waitFor();
    assert.equal(calls.length, before + 2);
    assert.deepEqual(
      JSON.parse(
        await page.evaluate(
          (key) => localStorage.getItem(key),
          receiptStorageName
        )
      ),
      { asset: 'USDC', txHash }
    );
    await page.screenshot({
      path: `${artifacts}/pending-${width}.png`,
      fullPage: true
    });
    claimStatuses = [200];
    await page.getByRole('button', { name: 'Retry credit' }).click();
    await page.getByText('Credits added', { exact: true }).waitFor();
    await page
      .getByRole('button', { name: 'Retry credit' })
      .waitFor({ state: 'hidden' });
    assert.equal(
      await page.evaluate(
        (key) => localStorage.getItem(key),
        receiptStorageName
      ),
      null
    );
    assert.deepEqual(await page.evaluate(() => window.walletCalls), []);
    await page.reload();
    await page.getByRole('heading', { name: 'Credits & Funding' }).waitFor();
    assert.equal(calls.length, before + 3);
    assert.deepEqual(errors, []);

    await page.evaluate(
      (key) => localStorage.setItem(key, 'broken-json'),
      receiptStorageName
    );
    await page.reload();
    await page.getByRole('heading', { name: 'Credits & Funding' }).waitFor();
    assert.equal(
      await page.evaluate(
        (key) => localStorage.getItem(key),
        receiptStorageName
      ),
      null
    );
    assert.deepEqual(errors, []);

    await page.evaluate(
      ({ key, hash }) =>
        localStorage.setItem(
          key,
          JSON.stringify({ asset: 'USDC', txHash: hash })
        ),
      { key: receiptStorageName, hash: txHash }
    );
    await context.addInitScript((key) => {
      const original = Storage.prototype.removeItem;
      Storage.prototype.removeItem = function (name) {
        if (name === key)
          throw new DOMException('Fixture cleanup failure', 'SecurityError');
        return original.call(this, name);
      };
    }, receiptStorageName);
    for (let attempt = 0; attempt < 2; attempt++) {
      await page.reload();
      await page.getByRole('button', { name: 'Retry credit' }).waitFor();
      claimStatuses = [200];
      await page.getByRole('button', { name: 'Retry credit' }).click();
      await page.getByText('Credits added', { exact: true }).waitFor();
      await page
        .getByText('Payment receipt storage unavailable', { exact: true })
        .waitFor();
      await page
        .getByRole('button', { name: 'Retry credit' })
        .waitFor({ state: 'hidden' });
    }
    assert.equal(calls.length, before + 5);
    assert.deepEqual(await page.evaluate(() => window.walletCalls), []);
    assert.deepEqual(errors, []);

    // Storage denial must not throw from the component's recovery error handler.
    await context.addInitScript((key) => {
      for (const method of ['getItem', 'setItem', 'removeItem']) {
        const original = Storage.prototype[method];
        Storage.prototype[method] = function (name, ...args) {
          if (name.startsWith(key))
            throw new DOMException('Fixture storage denial', 'SecurityError');
          return original.call(this, name, ...args);
        };
      }
    }, receiptStorageName);
    await page.reload();
    await page
      .getByText('Payment receipt storage unavailable', { exact: true })
      .waitFor();
    assert.deepEqual(errors, []);
    assert.deepEqual(await page.evaluate(() => window.walletCalls), []);
    assert.equal(calls.length, before + 5);
    assert.equal(
      await page.getByRole('button', { name: 'Pay with USDC' }).isDisabled(),
      true
    );
    await page.screenshot({
      path: `${artifacts}/storage-denied-${width}.png`,
      fullPage: true
    });
    fixtureCookies = await context.cookies();
    await context.close();
  }

  // Simulate storage becoming unwritable only after a payable wallet is ready.
  const address = `0x${'1'.repeat(40)}`;
  config.linked_wallet = address;
  config.linked_wallets = [address];
  const context = await browser.newContext();
  await context.route('**/*', (route) =>
    new URL(route.request().url()).origin === origin
      ? route.continue()
      : route.abort()
  );
  await context.addCookies(fixtureCookies);
  await context.addInitScript((wallet) => {
    window.walletCalls = [];
    window.ethereum = {
      request: async ({ method }) => {
        window.walletCalls.push(method);
        if (method === 'eth_accounts' || method === 'eth_requestAccounts')
          return [wallet];
        if (method === 'wallet_switchEthereumChain') return null;
        if (method === 'eth_chainId') return '0x2105';
        if (method === 'eth_getBalance') return '0xde0b6b3a7640000';
        if (method === 'eth_call')
          return `0x${(100_000_000).toString(16).padStart(64, '0')}`;
        throw new Error(`Unexpected wallet call: ${method}`);
      }
    };
  }, address);
  const page = await context.newPage();
  page.setDefaultTimeout(15_000);
  await page.goto(`${origin}/dashboard/funding`);
  await page
    .getByRole('button', { name: 'Connect wallet', exact: true })
    .last()
    .click();
  await page
    .getByRole('button', { name: 'Browser wallet', exact: true })
    .click();
  await page.getByPlaceholder('0.00').fill('1');
  const pay = page.getByRole('button', { name: 'Pay with USDC' });
  await page.waitForFunction(() =>
    [...document.querySelectorAll('button')].some(
      (button) =>
        button.textContent.includes('Pay with USDC') && !button.disabled
    )
  );
  await page.evaluate((key) => {
    window.walletCalls = [];
    const original = Storage.prototype.setItem;
    Storage.prototype.setItem = function (name, ...args) {
      if (name.startsWith(key))
        throw new DOMException('Fixture storage full', 'QuotaExceededError');
      return original.call(this, name, ...args);
    };
  }, receiptStorageName);
  const beforePreflight = calls.length;
  await pay.click();
  await page
    .getByText('Payment receipt storage unavailable', { exact: true })
    .waitFor();
  assert.equal(await pay.isDisabled(), true);
  assert.deepEqual(await page.evaluate(() => window.walletCalls), []);
  assert.equal(calls.length, beforePreflight);
  await context.close();
  assert.deepEqual(mockErrors, []);
  console.log(
    'Funding recovery passed: Google/wallet fixture sessions, desktop/mobile reload, 425/503 retry, already-credited receipt, malformed receipt, cleanup failure, storage denial, and payable-wallet preflight. Recovery and denied-payment attempts make zero wallet calls.'
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
  core.closeAllConnections();
  await new Promise((accept) => core.close(accept));
}
