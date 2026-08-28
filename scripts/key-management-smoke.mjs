// SPDX-FileCopyrightText: 2026 AI Power Grid
// SPDX-License-Identifier: AGPL-3.0-or-later

import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { once } from 'node:events';
import http from 'node:http';
import { encode } from 'next-auth/jwt';

const appOrigin = 'http://127.0.0.1:18896';
const coreOrigin = 'http://127.0.0.1:18897';
const authSecret = 'key-management-local-test-secret-only';
const cookieName = 'authjs.session-token';
const accountId = '00000000-0000-0000-0000-000000000123';
const keyId = 'abcdef123456';
const keyPath = `/api/account/keys/${keyId}`;
const ui = process.argv.includes('--ui');
let overrideStatus = 0;
let exchangeCalls = 0;
let writes = 0;
const calls = [];
const mockErrors = [];
const keys = [
  {
    id: keyId,
    label: 'test-laptop',
    created: null,
    last_used: null,
    revoked: false
  }
];

async function cookie(fresh = false, expired = false) {
  const value = await encode({
    token: {
      sub: 'key-test-user',
      provider_id: 'google_key-test-user',
      name: 'Local key test',
      email: 'operator@example.test',
      gridAccountId: accountId,
      gridAccessToken: fresh ? 'key-test-fresh-proof' : 'key-test-read-only',
      gridAccessTokenExpiresAt: expired ? Date.now() - 1 : Date.now() + 600_000
    },
    secret: authSecret,
    salt: cookieName,
    maxAge: 3600
  });
  return `${cookieName}=${value}`;
}

function json(response, status, value) {
  response.writeHead(status, { 'Content-Type': 'application/json' });
  response.end(JSON.stringify(value));
}

const core = http.createServer(async (request, response) => {
  try {
    // Local-only fixture: the test server, not the production app, issues the
    // fake session. No real OAuth, account, API key, or paid job is involved.
    if (ui && request.url?.startsWith('/__test/')) {
      if (['/__test/stale', '/__test/fresh'].includes(request.url)) {
        response.writeHead(302, {
          'Set-Cookie': `${await cookie(request.url.endsWith('/fresh'))}; HttpOnly; SameSite=Lax; Path=/`,
          Location: `${appOrigin}/dashboard/api-key`
        });
        return response.end();
      }
      if (request.method === 'POST') {
        overrideStatus = request.url === '/__test/unavailable' ? 503 : 0;
        response.writeHead(302, { Location: '/__test/' });
        return response.end();
      }
      response.writeHead(200, { 'Content-Type': 'text/html' });
      return response.end(`<h1>Local key-management fixture</h1>
        <p>No production accounts. Successful mutations: ${writes}.</p>
        <a href="/__test/stale">Open stale-proof session</a><br>
        <a href="/__test/fresh">Open fresh-proof session</a>
        <form method="post" action="/__test/unavailable"><button>Core unavailable</button></form>
        <form method="post" action="/__test/normal"><button>Core normal</button></form>`);
    }
    const chunks = [];
    for await (const chunk of request) chunks.push(chunk);
    const body = chunks.length
      ? JSON.parse(Buffer.concat(chunks).toString('utf8'))
      : {};
    if (request.url === '/v1/auth/service/exchange') {
      assert.equal(request.headers.apikey, 'key-test-service-token');
      assert.equal(body.subject, 'google_key-test-user');
      exchangeCalls++;
      return json(response, 200, {
        access_token: 'key-test-read-only',
        account_id: accountId,
        expires_in: 900
      });
    }
    if (!request.url?.startsWith('/v1/account')) return json(response, 404, {});
    const token = request.headers.apikey;
    assert.ok(['key-test-fresh-proof', 'key-test-read-only'].includes(token));
    assert.equal(request.headers.authorization, undefined);
    calls.push({ method: request.method, path: request.url, token });
    if (request.method === 'GET' && request.url === '/v1/account') {
      return json(response, 200, {
        account_id: accountId,
        username: 'Local test',
        wallet: '',
        keys
      });
    }
    if (overrideStatus)
      return json(response, overrideStatus, { detail: 'mock upstream error' });
    if (token !== 'key-test-fresh-proof')
      return json(response, 403, {
        detail: 'Account proof is stale; sign in again'
      });
    if (request.method === 'POST' && request.url === '/v1/account/keys') {
      writes++;
      keys.push({
        id: 'feed12345678',
        label: body.label,
        created: null,
        last_used: null,
        revoked: false
      });
      return json(response, 200, {
        api_key: 'local-fixture-key-not-a-credential'
      });
    }
    if (
      request.method === 'DELETE' &&
      request.url === `/v1/account/keys/${keyId}`
    ) {
      writes++;
      keys[0].revoked = true;
      return json(response, 200, { revoked: true });
    }
    return json(response, 404, {});
  } catch (error) {
    mockErrors.push(error);
    return json(response, 500, { error: 'mock assertion failed' });
  }
});

await new Promise((resolve, reject) => {
  core.once('error', reject);
  core.listen(18897, '127.0.0.1', resolve);
});
const app = spawn(
  process.execPath,
  [
    'node_modules/next/dist/bin/next',
    'start',
    '--hostname',
    '127.0.0.1',
    '--port',
    '18896'
  ],
  {
    env: {
      ...process.env,
      AUTH_SECRET: authSecret,
      NEXTAUTH_SECRET: authSecret,
      AUTH_TRUST_HOST: 'true',
      NEXTAUTH_URL: appOrigin,
      GRID_API_BASE: coreOrigin,
      GRID_SERVICE_API_KEY: 'key-test-service-token'
    },
    stdio: ['ignore', 'pipe', 'pipe']
  }
);
let appOutput = '';
app.stdout.on('data', (chunk) => {
  appOutput = (appOutput + chunk).slice(-16_000);
});
app.stderr.on('data', (chunk) => {
  appOutput = (appOutput + chunk).slice(-16_000);
});

async function request(path, session = '', method = 'GET') {
  return fetch(`${appOrigin}${path}`, {
    method,
    headers: {
      cookie: session,
      Origin: appOrigin,
      'Content-Type': 'application/json'
    },
    ...(method === 'POST'
      ? { body: JSON.stringify({ label: 'new-test-key' }) }
      : {}),
    signal: AbortSignal.timeout(15_000),
    redirect: 'manual'
  });
}

try {
  let ready = false;
  for (let attempt = 0; attempt < 100; attempt++) {
    try {
      if ((await request('/api/account')).status === 404) {
        ready = true;
        break;
      }
    } catch {
      /* Bounded local-server startup retry. */
    }
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  assert.ok(ready, `Console failed to start: ${appOutput}`);
  if (ui) {
    console.log(`Local key fixture: ${coreOrigin}/__test/`);
    await new Promise((resolve) => {
      const timer = setTimeout(resolve, 30 * 60 * 1000);
      for (const signal of ['SIGINT', 'SIGTERM'])
        process.once(signal, () => {
          clearTimeout(timer);
          resolve();
        });
    });
  } else {
    assert.equal((await request('/api/account/keys', '', 'POST')).status, 404);
    assert.equal((await request(keyPath, '', 'DELETE')).status, 404);
    assert.equal(calls.length, 0);
    assert.equal(exchangeCalls, 0);
    const stale = await cookie();
    const fresh = await cookie(true);
    const expired = await cookie(false, true);
    assert.equal((await request('/api/account', stale)).status, 200);
    for (const session of [stale, expired]) {
      assert.equal(
        (await request('/api/account/keys', session, 'POST')).status,
        403
      );
      assert.equal((await request(keyPath, session, 'DELETE')).status, 403);
      assert.equal(writes, 0);
      assert.equal(keys[0].revoked, false);
    }
    assert.equal(
      exchangeCalls,
      2,
      'service refresh cannot upgrade recent-proof authority'
    );
    for (const code of [401, 403, 429, 503]) {
      overrideStatus = code;
      assert.equal(
        (await request('/api/account/keys', fresh, 'POST')).status,
        code
      );
      assert.equal((await request(keyPath, fresh, 'DELETE')).status, code);
      assert.equal(writes, 0);
    }
    overrideStatus = 0;
    assert.equal((await request('/api/account', fresh)).status, 200);
    assert.equal(writes, 0, 'sign-in and reads never retry a mutation');
    const created = await request('/api/account/keys', fresh, 'POST');
    assert.equal(created.status, 200);
    assert.equal(
      (await created.json()).api_key,
      'local-fixture-key-not-a-credential'
    );
    assert.equal(writes, 1);
    assert.equal((await request(keyPath, fresh, 'DELETE')).status, 200);
    assert.equal(keys[0].revoked, true);
    assert.equal(writes, 2);
    assert.equal(mockErrors.length, 0, String(mockErrors[0] ?? ''));
    console.log(
      'Key-management anonymous, fresh-proof, service-refresh, failure and explicit-mutation smoke passed'
    );
  }
} finally {
  if (app.exitCode === null && app.signalCode === null) {
    const exited = once(app, 'exit');
    app.kill('SIGTERM');
    const killTimer = setTimeout(() => app.kill('SIGKILL'), 5000);
    await exited;
    clearTimeout(killTimer);
  }
  core.closeAllConnections();
  await new Promise((resolve) => core.close(resolve));
}
