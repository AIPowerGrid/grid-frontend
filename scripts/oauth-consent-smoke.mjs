// SPDX-FileCopyrightText: 2026 AI Power Grid
// SPDX-License-Identifier: AGPL-3.0-or-later

import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { once } from 'node:events';
import http from 'node:http';
import { encode } from 'next-auth/jwt';

const appOrigin = 'http://127.0.0.1:18904';
const coreOrigin = 'http://127.0.0.1:18905';
const authSecret = 'oauth-consent-local-test-secret-only';
const cookieName = 'authjs.session-token';
const accountId = '00000000-0000-0000-0000-000000000321';
const capability = `oauth_req_${'a'.repeat(43)}`;
const otherCapability = `oauth_req_${'b'.repeat(43)}`;
const apiPath = `/api/oauth/authorization?request=${capability}`;
const pagePath = `/oauth/authorize?request=${capability}`;
let responseMode = 'normal';
let overrideStatus = 0;
let expectedToken = 'oauth-test-user-token';
let exchangeAccount = accountId;
let followedRedirects = 0;
const calls = [];
const mockErrors = [];

async function cookie(overrides = {}) {
  const value = await encode({
    token: {
      sub: 'oauth-test-user',
      provider_id: 'google_oauth-test-user',
      name: 'Local OAuth test',
      email: 'operator@example.test',
      gridAccountId: accountId,
      gridAccessToken: 'oauth-test-user-token',
      gridAccessTokenExpiresAt: Date.now() + 30 * 60 * 1000,
      ...overrides
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

function view() {
  if (responseMode === 'bad-view') {
    return {
      client_id: 'client_test',
      client_name: 'Test agent',
      redirect_host: 'agent.example',
      resource: 'https://api.aipowergrid.io',
      scopes: ['account.manage'],
      expires_in: 300,
      api_key: 'DO_NOT_RETURN_CORE_SECRET'
    };
  }
  return {
    client_id: 'client_test',
    client_name: 'Test agent',
    redirect_host: 'agent.example',
    resource: 'https://api.aipowergrid.io',
    scopes: ['account.read', 'inference.submit'],
    expires_in: 300
  };
}

const core = http.createServer(async (request, response) => {
  try {
    if (request.url === '/unexpected-redirect') {
      followedRedirects += 1;
      return json(response, 500, {});
    }
    const chunks = [];
    for await (const chunk of request) chunks.push(chunk);
    const body = chunks.length
      ? JSON.parse(Buffer.concat(chunks).toString('utf8'))
      : undefined;
    if (request.url === '/v1/auth/service/exchange') {
      assert.equal(request.headers.apikey, 'oauth-test-service-key');
      assert.deepEqual(body, { subject: 'google_oauth-test-user' });
      return json(response, 200, {
        account_id: exchangeAccount,
        access_token: 'refreshed-oauth-token',
        expires_in: 900
      });
    }
    if (!request.url?.startsWith('/v1/oauth/authorization/')) {
      return json(response, 404, {});
    }
    calls.push({ path: request.url, method: request.method, body });
    assert.equal(request.headers.apikey, 'oauth-test-service-key');
    assert.equal(request.headers['x-grid-user-token'], expectedToken);
    assert.equal(request.headers.authorization, undefined);
    if (overrideStatus) {
      return json(response, overrideStatus, {
        detail: 'DO_NOT_RETURN_CORE_ERROR'
      });
    }
    if (responseMode === 'redirect') {
      response.writeHead(302, {
        Location: `${coreOrigin}/unexpected-redirect`
      });
      return response.end();
    }
    if (responseMode === 'oversized') {
      return json(response, 200, { padding: 'x'.repeat(40_000) });
    }
    if (responseMode === 'malformed')
      return response.end('<html>not json</html>');
    if (request.url.endsWith('/inspect')) {
      assert.equal(request.method, 'POST');
      assert.deepEqual(body, { request: capability });
      return json(response, 200, view());
    }
    assert.equal(request.url, '/v1/oauth/authorization/decision');
    assert.equal(request.method, 'POST');
    assert.deepEqual(body, {
      request: capability,
      approve: responseMode !== 'deny'
    });
    const redirectTo =
      responseMode === 'bad-redirect'
        ? 'javascript:alert(1)'
        : responseMode === 'credential-redirect'
          ? 'https://user:pass@agent.example/callback'
          : responseMode === 'fragment-redirect'
            ? 'https://agent.example/callback#token'
            : responseMode === 'loopback'
              ? 'http://127.0.0.1:39211/callback?code=test'
              : `https://agent.example/callback?${responseMode === 'deny' ? 'error=access_denied' : 'code=test'}`;
    return json(response, 200, { redirect_to: redirectTo });
  } catch (error) {
    mockErrors.push(error);
    json(response, 500, { error: 'mock assertion failed' });
  }
});

await new Promise((resolve, reject) => {
  core.once('error', reject);
  core.listen(18905, '127.0.0.1', resolve);
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
      AUTH_SECRET: authSecret,
      NEXTAUTH_SECRET: authSecret,
      AUTH_TRUST_HOST: 'true',
      NEXTAUTH_URL: appOrigin,
      GRID_API_BASE: coreOrigin,
      GRID_SERVICE_API_KEY: 'oauth-test-service-key'
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
let currentCookie = await cookie();

function request(route, init = {}) {
  return fetch(`${appOrigin}${route}`, {
    ...init,
    headers: { cookie: currentCookie, ...init.headers },
    signal: AbortSignal.timeout(15_000),
    redirect: 'manual'
  });
}

function post(body = {}, headers = {}) {
  return request('/api/oauth/authorization', {
    method: 'POST',
    headers: {
      Origin: appOrigin,
      'Sec-Fetch-Site': 'same-origin',
      'Content-Type': 'application/json',
      ...headers
    },
    body: typeof body === 'string' ? body : JSON.stringify(body)
  });
}

async function status(response, expected) {
  assert.equal(response.status, expected);
  assert.equal(response.headers.get('cache-control'), 'no-store');
  assert.equal(response.headers.get('referrer-policy'), 'no-referrer');
  const text = await response.text();
  assert.ok(
    !/DO_NOT_RETURN|oauth-test-user-token|oauth-test-service-key/.test(text)
  );
  return JSON.parse(text);
}

try {
  let ready = false;
  for (let attempt = 0; attempt < 100; attempt++) {
    try {
      if ((await fetch(`${appOrigin}${apiPath}`)).status === 401) {
        ready = true;
        break;
      }
    } catch {
      // Bounded startup retry against the local production server.
    }
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  assert.ok(ready, `Console failed to start: ${appOutput}`);

  await status(
    await request(apiPath, {
      headers: {
        cookie: '',
        apikey: 'forged',
        authorization: 'Bearer forged'
      }
    }),
    401
  );
  await status(
    await post(
      { request: capability, approve: true },
      { cookie: '', apikey: 'forged' }
    ),
    401
  );
  assert.equal(calls.length, 0);

  for (const origin of ['', 'null', 'https://evil.example']) {
    await status(
      await post(
        { request: capability, approve: true },
        { Origin: origin, 'X-Forwarded-Host': 'evil.example' }
      ),
      403
    );
  }
  await status(
    await post(
      { request: capability, approve: true },
      { 'Sec-Fetch-Site': 'cross-site' }
    ),
    403
  );
  await status(
    await post(
      { request: capability, approve: true },
      { 'Content-Type': 'text/plain' }
    ),
    415
  );
  for (const body of [
    '{',
    JSON.stringify({ request: capability }),
    JSON.stringify({ request: capability, approve: true, extra: true }),
    JSON.stringify({ request: otherCapability, approve: 'yes' }),
    JSON.stringify({ request: capability, approve: true, pad: 'x'.repeat(600) })
  ]) {
    await status(await post(body), 400);
  }
  await status(await request('/api/oauth/authorization?request=invalid'), 400);
  assert.equal(calls.length, 0, 'rejected requests must never reach Core');

  const inspected = await status(await request(apiPath), 200);
  assert.equal(inspected.client_name, 'Test agent');
  assert.deepEqual(inspected.scopes, ['account.read', 'inference.submit']);
  assert.equal(calls.at(-1).path, '/v1/oauth/authorization/inspect');

  const approved = await status(
    await post({ request: capability, approve: true }),
    200
  );
  assert.equal(
    approved.redirect_to,
    'https://agent.example/callback?code=test'
  );
  responseMode = 'deny';
  const denied = await status(
    await post({ request: capability, approve: false }),
    200
  );
  assert.equal(
    denied.redirect_to,
    'https://agent.example/callback?error=access_denied'
  );
  responseMode = 'loopback';
  await status(await post({ request: capability, approve: true }), 200);

  for (const code of [400, 401, 403, 404, 409, 410, 413, 415, 429, 503]) {
    overrideStatus = code;
    await status(await request(apiPath), code);
    await status(await post({ request: capability, approve: true }), code);
  }
  overrideStatus = 500;
  await status(await request(apiPath), 502);
  overrideStatus = 0;

  for (const mode of ['bad-view', 'redirect', 'oversized', 'malformed']) {
    responseMode = mode;
    await status(await request(apiPath), 502);
  }
  for (const mode of [
    'bad-redirect',
    'credential-redirect',
    'fragment-redirect'
  ]) {
    responseMode = mode;
    await status(await post({ request: capability, approve: true }), 502);
  }
  responseMode = 'normal';

  currentCookie = await cookie({ gridAccessTokenExpiresAt: Date.now() - 1 });
  expectedToken = 'refreshed-oauth-token';
  await status(await request(apiPath), 200);
  exchangeAccount = '00000000-0000-0000-0000-000000000999';
  const beforeMismatch = calls.length;
  await status(await request(apiPath), 401);
  assert.equal(calls.length, beforeMismatch, 'account mismatch fails closed');
  currentCookie = await cookie();
  expectedToken = 'oauth-test-user-token';

  const page = await request(pagePath);
  assert.equal(page.status, 200);
  assert.equal(page.headers.get('cache-control'), 'no-store');
  assert.equal(page.headers.get('referrer-policy'), 'no-referrer');
  assert.equal(page.headers.get('x-frame-options'), 'DENY');
  assert.equal(
    page.headers.get('content-security-policy'),
    "frame-ancestors 'none'"
  );
  const anonymousPage = await request(pagePath, { headers: { cookie: '' } });
  assert.ok([302, 307].includes(anonymousPage.status));
  assert.ok(
    anonymousPage.headers
      .get('location')
      ?.includes(encodeURIComponent(pagePath))
  );

  assert.equal(mockErrors.length, 0, String(mockErrors[0] ?? ''));
  assert.equal(
    followedRedirects,
    0,
    'credentials must never follow a Core redirect'
  );
  console.log(
    'OAuth consent auth, origin, body, schema, redirect, refresh and privacy gates passed'
  );
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
