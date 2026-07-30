import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import http from 'node:http';
import { encode } from 'next-auth/jwt';

const appOrigin = 'http://127.0.0.1:18794';
const coreOrigin = 'http://127.0.0.1:18795';
const authSecret = 'test-auth-secret-is-at-least-32-characters';
const cookieName = 'authjs.session-token';
const accountId = '00000000-0000-0000-0000-000000000123';
const otherAccountId = '00000000-0000-0000-0000-000000000999';
const providerId = 'google_test-user';
let exchangeAccountId = accountId;
let exchangeCalls = 0;
let creditCalls = 0;
let expectedCreditToken = '';

const credits = {
  account_id: accountId,
  promotional: {
    remaining_micro: 0,
    remaining_usd: 0,
    active: false
  },
  free: {
    remaining_micro: 0,
    remaining_usd: 0,
    daily_cap_usd: 0,
    active: false
  },
  paid: { balance_micro: 20_000, balance_usd: 0.02 },
  total_spendable_micro: 20_000,
  total_spendable_usd: 0.02,
  total_preview_usd: 0.02,
  charging_enabled: false,
  charging_mode: 'off'
};

function json(response, status, value) {
  response.writeHead(status, { 'content-type': 'application/json' });
  response.end(JSON.stringify(value));
}

const core = http.createServer(async (request, response) => {
  const chunks = [];
  for await (const chunk of request) chunks.push(chunk);
  const body = chunks.length
    ? JSON.parse(Buffer.concat(chunks).toString('utf8'))
    : {};

  if (request.url === '/v1/auth/service/exchange') {
    assert.equal(request.method, 'POST');
    assert.equal(request.headers.apikey, 'console-service-test-key');
    assert.equal(body.subject, providerId);
    exchangeCalls += 1;
    return json(response, 200, {
      access_token: 'refreshed-console-token',
      account_id: exchangeAccountId,
      expires_in: 900
    });
  }
  if (request.url === '/v1/account/credits') {
    assert.equal(request.method, 'GET');
    assert.equal(request.headers.apikey, expectedCreditToken);
    creditCalls += 1;
    return json(response, 200, credits);
  }
  return json(response, 404, { detail: 'not found' });
});

await new Promise((resolve) => core.listen(18795, '127.0.0.1', resolve));
const app = spawn(
  process.execPath,
  [
    'node_modules/next/dist/bin/next',
    'start',
    '--hostname',
    '127.0.0.1',
    '--port',
    '18794'
  ],
  {
    env: {
      ...process.env,
      AUTH_SECRET: authSecret,
      NEXTAUTH_SECRET: authSecret,
      AUTH_TRUST_HOST: 'true',
      NEXTAUTH_URL: appOrigin,
      GRID_API_BASE: coreOrigin,
      GRID_SERVICE_API_KEY: 'console-service-test-key'
    },
    stdio: ['ignore', 'pipe', 'pipe']
  }
);

let appOutput = '';
app.stdout.on('data', (chunk) => {
  appOutput += chunk.toString();
});
app.stderr.on('data', (chunk) => {
  appOutput += chunk.toString();
});

async function waitForApp() {
  for (let attempt = 0; attempt < 80; attempt += 1) {
    try {
      const response = await fetch(`${appOrigin}/api/account/credits`);
      if (response.status === 404) return;
    } catch {}
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  throw new Error(`Console app did not start:\n${appOutput}`);
}

async function sessionCookie(token) {
  const value = await encode({
    token,
    secret: authSecret,
    salt: cookieName,
    maxAge: 60 * 60
  });
  return `${cookieName}=${value}`;
}

async function readCredits(cookie) {
  return fetch(`${appOrigin}/api/account/credits`, {
    headers: cookie ? { cookie } : {}
  });
}

try {
  await waitForApp();

  const anonymous = await readCredits();
  assert.equal(anonymous.status, 404);
  assert.equal(exchangeCalls, 0);
  assert.equal(creditCalls, 0);

  expectedCreditToken = 'session-console-token';
  const currentCookie = await sessionCookie({
    provider_id: providerId,
    gridAccountId: accountId,
    gridAccessToken: expectedCreditToken,
    gridAccessTokenExpiresAt: Date.now() + 10 * 60 * 1000
  });
  const current = await readCredits(currentCookie);
  assert.equal(current.status, 200);
  assert.deepEqual(await current.json(), credits);
  assert.equal(exchangeCalls, 0);
  assert.equal(creditCalls, 1);

  expectedCreditToken = 'refreshed-console-token';
  const expiredCookie = await sessionCookie({
    provider_id: providerId,
    gridAccountId: accountId,
    gridAccessToken: 'expired-console-token',
    gridAccessTokenExpiresAt: Date.now() - 1
  });
  const refreshed = await readCredits(expiredCookie);
  assert.equal(refreshed.status, 200);
  assert.deepEqual(await refreshed.json(), credits);
  assert.equal(exchangeCalls, 1);
  assert.equal(creditCalls, 2);

  exchangeAccountId = otherAccountId;
  const mismatched = await readCredits(expiredCookie);
  assert.equal(mismatched.status, 404);
  assert.equal(exchangeCalls, 2);
  assert.equal(creditCalls, 2);

  console.log('Console canonical-account auth/credits smoke passed');
} finally {
  app.kill('SIGTERM');
  core.close();
}
