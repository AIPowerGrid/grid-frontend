// SPDX-FileCopyrightText: 2026 AI Power Grid
// SPDX-License-Identifier: AGPL-3.0-or-later

// Sign-in wallet choice, in a real browser against the built app.
// Local fixtures only: fake wallets, no Core, no account, no signature.

import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { once } from 'node:events';
import { chromium } from 'playwright';

const appOrigin = 'http://127.0.0.1:18906';
const authSecret = 'wallet-picker-local-test-secret-only';
const ADDRESSES = {
  Alpha: '0x00000000000000000000000000000000000000a1',
  Beta: '0x00000000000000000000000000000000000000b2',
  Legacy: '0x00000000000000000000000000000000000000c3'
};

const app = spawn(
  process.execPath,
  [
    'node_modules/next/dist/bin/next',
    'start',
    '--hostname',
    '127.0.0.1',
    '--port',
    '18906'
  ],
  {
    env: {
      ...process.env,
      AUTH_SECRET: authSecret,
      NEXTAUTH_SECRET: authSecret,
      AUTH_TRUST_HOST: 'true',
      NEXTAUTH_URL: appOrigin,
      GRID_API_BASE: 'http://127.0.0.1:9',
      GRID_SERVICE_API_KEY: 'wallet-picker-test-service-token'
    },
    stdio: ['ignore', 'pipe', 'pipe']
  }
);
let appOutput = '';
for (const stream of [app.stdout, app.stderr]) {
  stream.on('data', (chunk) => {
    appOutput = (appOutput + chunk).slice(-16_000);
  });
}

async function waitForApp() {
  for (let attempt = 0; attempt < 120; attempt += 1) {
    if (app.exitCode !== null) throw new Error(`app exited: ${appOutput}`);
    try {
      if ((await fetch(appOrigin)).status < 500) return;
    } catch {
      /* not listening yet */
    }
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  throw new Error(`app did not start: ${appOutput}`);
}

// Installed in the page before any app script runs.
function installWallets({ announced, legacy, addresses }) {
  const make = (name) => ({
    walletName: name,
    request: async ({ method }) => {
      window.__walletCalls.push(`${name}:${method}`);
      if (method === 'eth_requestAccounts' || method === 'eth_accounts') {
        return [addresses[name]];
      }
      if (method === 'eth_chainId') return '0x2105';
      throw new Error(`unsupported ${method}`);
    }
  });
  window.__walletCalls = [];
  const providers = announced.map((name) => ({ name, provider: make(name) }));
  if (legacy) window.ethereum = make('Legacy');
  const announce = () =>
    providers.forEach(({ name, provider }) =>
      window.dispatchEvent(
        new CustomEvent('eip6963:announceProvider', {
          detail: Object.freeze({
            info: { uuid: `uuid-${name}`, name: `${name} Wallet` },
            provider
          })
        })
      )
    );
  window.addEventListener('eip6963:requestProvider', announce);
}

async function scenario(browser, wallets, run) {
  const context = await browser.newContext();
  const page = await context.newPage();
  const nonceBodies = [];
  await page.addInitScript(installWallets, {
    ...wallets,
    addresses: ADDRESSES
  });
  // Stop at the challenge request: which address asks for it is the proof.
  await page.route('**/api/auth/nonce', async (route) => {
    nonceBodies.push(JSON.parse(route.request().postData() ?? '{}'));
    await route.fulfill({ status: 503, body: '{}' });
  });
  await page.goto(appOrigin, { waitUntil: 'networkidle' });
  const connect = page.getByRole('button', { name: 'Connect Wallet' });
  await connect.waitFor();
  try {
    await run({ page, connect, nonceBodies });
  } finally {
    await context.close();
  }
}

let browser;
try {
  await waitForApp();
  browser = await chromium.launch({ headless: true });

  // Two announced wallets (plus a legacy slot): the user chooses, by name.
  await scenario(
    browser,
    { announced: ['Alpha', 'Beta'], legacy: true },
    async ({ page, connect, nonceBodies }) => {
      await connect.click();
      const group = page.getByRole('group', { name: 'Choose a wallet' });
      await group.waitFor();
      const names = await group.getByRole('button').allTextContents();
      assert.deepEqual(names, ['Alpha Wallet', 'Beta Wallet', 'Cancel']);
      assert.deepEqual(await page.evaluate(() => window.__walletCalls), []);

      await group.getByRole('button', { name: 'Cancel' }).click();
      await group.waitFor({ state: 'detached' });
      assert.equal(nonceBodies.length, 0);

      await connect.click();
      await page.getByRole('button', { name: 'Beta Wallet' }).click();
      await page
        .getByText('Failed to fetch authentication challenge')
        .waitFor();
      assert.equal(nonceBodies.length, 1);
      assert.equal(nonceBodies[0].address.toLowerCase(), ADDRESSES.Beta);
      const calls = await page.evaluate(() => window.__walletCalls);
      assert.ok(calls.includes('Beta:eth_requestAccounts'));
      assert.ok(
        calls.every((call) => call.startsWith('Beta:')),
        calls.join()
      );
    }
  );

  // One announced wallet: no extra step.
  await scenario(
    browser,
    { announced: ['Alpha'], legacy: true },
    async ({ page, connect, nonceBodies }) => {
      await connect.click();
      await page
        .getByText('Failed to fetch authentication challenge')
        .waitFor();
      assert.equal(nonceBodies[0].address.toLowerCase(), ADDRESSES.Alpha);
      assert.equal(
        await page.getByRole('group', { name: 'Choose a wallet' }).count(),
        0
      );
    }
  );

  // Only the legacy slot: still works.
  await scenario(
    browser,
    { announced: [], legacy: true },
    async ({ page, connect, nonceBodies }) => {
      await connect.click();
      await page
        .getByText('Failed to fetch authentication challenge')
        .waitFor();
      assert.equal(nonceBodies[0].address.toLowerCase(), ADDRESSES.Legacy);
    }
  );

  // No wallet at all: a plain message, no request.
  await scenario(
    browser,
    { announced: [], legacy: false },
    async ({ page, connect, nonceBodies }) => {
      await connect.click();
      await page.getByText('Please install MetaMask').waitFor();
      assert.equal(nonceBodies.length, 0);
    }
  );

  console.log(
    'Wallet-picker choice, cancel, single-wallet, legacy and no-wallet smoke passed'
  );
} finally {
  await browser?.close();
  if (app.exitCode === null && app.signalCode === null) {
    const exited = once(app, 'exit');
    app.kill('SIGTERM');
    const killTimer = setTimeout(() => app.kill('SIGKILL'), 5000);
    await exited;
    clearTimeout(killTimer);
  }
}
