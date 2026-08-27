// SPDX-FileCopyrightText: 2026 AI Power Grid
// SPDX-License-Identifier: AGPL-3.0-or-later

import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { once } from 'node:events';
import http from 'node:http';
import { encode } from 'next-auth/jwt';

const appOrigin = 'http://127.0.0.1:18894';
const coreOrigin = 'http://127.0.0.1:18895';
const authSecret = 'validator-pairing-local-test-secret-only';
const cookieName = 'authjs.session-token';
const accountId = '00000000-0000-0000-0000-000000000123';
const pairingId = `vpa_${'a'.repeat(64)}`;
const otherPairingId = `vpa_${'b'.repeat(64)}`;
const validatorId = `val_${'1'.repeat(32)}`;
const signer = `0x${'2'.repeat(40)}`;
const path = `/api/validator-pairings/${pairingId}`;
const nodePath = `/api/account/validators/${validatorId}/unlink`;
const pagePath = `/dashboard/connect-validator/${pairingId}`;
const ui = process.argv.includes('--ui');
let state = 'pending';
let replyMode = 'normal';
let overrideStatus = 0;
let expiresAt = Math.floor(Date.now() / 1000) + 600;
let expectedToken = 'pairing-test-user-token';
let exchangeAccount = accountId;
let exchangeMode = 'normal';
let nodeLinked = false;
let followedRedirects = 0;
const calls = [];
const mockErrors = [];

async function cookie(overrides = {}) {
  const value = await encode({
    token: {
      sub: 'pairing-test-user',
      provider_id: 'google_pairing-test-user',
      name: 'Local validator test',
      email: 'operator@example.test',
      gridAccountId: accountId,
      gridAccessToken: 'pairing-test-user-token',
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
  return {
    pairing_id: replyMode === 'wrong-id' ? otherPairingId : pairingId,
    validator_id: validatorId,
    signing_wallet: signer,
    status: state,
    expires_at: expiresAt,
    economic_effect: replyMode === 'economic' ? 'rewards' : 'none',
    ...(state !== 'pending' ? { comparison_code: '12AB34CD' } : {}),
    payload: { node_account_id: 'DO_NOT_RETURN_NODE_PAYLOAD' },
    api_key: 'DO_NOT_RETURN_NODE_KEY'
  };
}

function nodes() {
  const node = {
    validator_id: validatorId,
    pairing_id: pairingId,
    signing_wallet: signer,
    status: 'active',
    software_version: 'v0.1.0-preview.12',
    last_heartbeat: new Date().toISOString(),
    linked_at: new Date().toISOString(),
    signature: 'DO_NOT_RETURN_SIGNATURE'
  };
  return {
    nodes:
      replyMode === 'too-many'
        ? Array(101).fill(node)
        : nodeLinked
          ? [node]
          : [],
    economic_effect: 'none',
    api_key: 'DO_NOT_RETURN_NODE_KEY'
  };
}

const core = http.createServer(async (request, response) => {
  try {
    if (request.url === '/unexpected-redirect') {
      followedRedirects += 1;
      return json(response, 500, {});
    }
    // Optional isolated UI fixture. It exists only in this test process, never
    // in the Console build, and issues a fake local session without real OAuth.
    if (ui && request.url?.startsWith('/__test/')) {
      if (request.url === '/__test/login') {
        response.writeHead(302, {
          'Set-Cookie': `${await cookie()}; HttpOnly; SameSite=Lax; Path=/`,
          Location: `${appOrigin}${pagePath}`
        });
        return response.end();
      }
      if (request.method === 'POST') {
        if (request.url === '/__test/confirm') {
          state = 'linked';
          nodeLinked = true;
        }
        if (request.url === '/__test/reset') {
          state = 'pending';
          nodeLinked = false;
          overrideStatus = 0;
          expiresAt = Math.floor(Date.now() / 1000) + 600;
        }
        if (request.url === '/__test/expire') {
          expiresAt = Math.floor(Date.now() / 1000) - 1;
        }
        if (request.url === '/__test/reauth') overrideStatus = 403;
        if (request.url === '/__test/off') overrideStatus = 503;
        response.writeHead(302, { Location: '/__test/' });
        return response.end();
      }
      response.writeHead(200, { 'Content-Type': 'text/html' });
      return response.end(
        `<h1>Local pairing test fixture</h1><p>No production accounts or keys.</p><a href="/__test/login">Open Console test session</a>${['confirm', 'reset', 'expire', 'reauth', 'off'].map((action) => `<form method="post" action="/__test/${action}"><button>${action}</button></form>`).join('')}`
      );
    }
    const chunks = [];
    for await (const chunk of request) chunks.push(chunk);
    const body = chunks.length
      ? JSON.parse(Buffer.concat(chunks).toString('utf8'))
      : undefined;
    if (request.url === '/v1/auth/service/exchange') {
      assert.equal(request.headers.apikey, 'pairing-test-service-token');
      assert.equal(body.subject, 'google_pairing-test-user');
      if (exchangeMode === 'redirect') {
        response.writeHead(302, {
          Location: `${coreOrigin}/unexpected-redirect`
        });
        return response.end();
      }
      if (exchangeMode === 'timeout') {
        const timer = setTimeout(() => json(response, 503, {}), 11_000);
        response.on('close', () => clearTimeout(timer));
        return;
      }
      return json(response, 200, {
        access_token: 'refreshed-pairing-token',
        account_id: exchangeAccount,
        expires_in: 900
      });
    }
    if (!request.url?.startsWith('/v1/account/validator'))
      return json(response, 404, {});
    calls.push({ path: request.url, method: request.method, body });
    assert.equal(request.headers.apikey, expectedToken);
    assert.equal(request.headers.authorization, undefined);
    if (overrideStatus)
      return json(response, overrideStatus, {
        detail: 'DO_NOT_RETURN_ERROR_KEY'
      });
    if (replyMode === 'redirect') {
      response.writeHead(302, {
        Location: `${coreOrigin}/unexpected-redirect`
      });
      return response.end();
    }
    if (replyMode === 'timeout') {
      const timer = setTimeout(() => json(response, 200, view()), 11_000);
      response.on('close', () => clearTimeout(timer));
      return;
    }
    if (replyMode === 'oversized')
      return json(response, 200, { padding: 'x'.repeat(70_000) });
    if (replyMode === 'malformed') return response.end('<html>Not JSON</html>');
    if (request.url === '/v1/account/validators')
      return json(response, 200, nodes());
    if (request.url === `/v1/account/validators/${validatorId}/unlink`) {
      assert.equal(request.method, 'POST');
      assert.deepEqual(body, { pairing_id: pairingId });
      nodeLinked = false;
      return json(response, 200, {
        status: 'unlinked',
        validator_id: validatorId
      });
    }
    if (request.url.endsWith('/approve')) {
      assert.equal(request.method, 'POST');
      assert.deepEqual(body, {});
      state = 'approved';
    }
    if (expiresAt <= Math.floor(Date.now() / 1000))
      return json(response, 409, {});
    return json(response, 200, view());
  } catch (error) {
    mockErrors.push(error);
    json(response, 500, { error: 'mock assertion failed' });
  }
});

await new Promise((resolve, reject) => {
  core.once('error', reject);
  core.listen(18895, '127.0.0.1', resolve);
});
const app = spawn(
  process.execPath,
  [
    'node_modules/next/dist/bin/next',
    'start',
    '--hostname',
    '127.0.0.1',
    '--port',
    '18894'
  ],
  {
    env: {
      ...process.env,
      AUTH_SECRET: authSecret,
      NEXTAUTH_SECRET: authSecret,
      AUTH_TRUST_HOST: 'true',
      NEXTAUTH_URL: appOrigin,
      GRID_API_BASE: coreOrigin,
      GRID_SERVICE_API_KEY: 'pairing-test-service-token'
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
function post(route, body = {}, headers = {}) {
  return request(route, {
    method: 'POST',
    headers: {
      Origin: appOrigin,
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
  const body = await response.text();
  assert.ok(
    !/DO_NOT_RETURN|pairing-test-user-token|pairing-test-service-token/.test(
      body
    )
  );
  return JSON.parse(body);
}

try {
  let ready = false;
  for (let attempt = 0; attempt < 100; attempt++) {
    try {
      if ((await fetch(`${appOrigin}/api/account/validators`)).status === 401) {
        ready = true;
        break;
      }
    } catch {
      /* Bounded startup retry; never a production request. */
    }
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  assert.ok(ready, `Console failed to start: ${appOutput}`);
  if (ui) {
    console.log(`Local pairing fixture: ${coreOrigin}/__test/`);
    console.log(`Console: ${appOrigin}${pagePath}`);
    await new Promise((resolve) => {
      const timer = setTimeout(resolve, 30 * 60 * 1000);
      process.once('SIGINT', () => {
        clearTimeout(timer);
        resolve();
      });
      process.once('SIGTERM', () => {
        clearTimeout(timer);
        resolve();
      });
    });
  } else {
    await status(
      await request(path, {
        headers: {
          cookie: '',
          apikey: 'forged',
          authorization: 'Bearer forged'
        }
      }),
      401
    );
    await status(await post(`${path}/approve`, {}, { cookie: '' }), 401);
    assert.equal(calls.length, 0);

    for (const origin of [
      '',
      'null',
      'https://evil.example',
      'http://localhost:18894'
    ]) {
      await status(
        await post(
          `${path}/approve`,
          {},
          { Origin: origin, 'X-Forwarded-Host': 'evil.example' }
        ),
        403
      );
    }
    await status(
      await post(`${path}/approve`, {}, { 'Sec-Fetch-Site': 'cross-site' }),
      403
    );
    await status(
      await post(`${path}/approve`, {}, { 'Content-Type': 'text/plain' }),
      415
    );
    for (const body of [
      '{',
      JSON.stringify({ account_id: accountId }),
      JSON.stringify({ data: 'x'.repeat(300) })
    ])
      await status(await post(`${path}/approve`, body), 400);
    await status(await request('/api/validator-pairings/invalid'), 404);
    await status(
      await post('/api/account/validators/invalid/unlink', {
        pairing_id: pairingId
      }),
      404
    );
    await status(
      await post(nodePath, {
        pairing_id: pairingId,
        operator_account_id: accountId
      }),
      400
    );
    await status(
      await request(`${path}/approve`, {
        method: 'POST',
        headers: { Origin: appOrigin, 'Content-Type': 'application/json' },
        duplex: 'half',
        body: new ReadableStream({
          start(controller) {
            controller.enqueue(new TextEncoder().encode('{"extra":"'));
            controller.enqueue(
              new TextEncoder().encode(`${'x'.repeat(400)}"}`)
            );
            controller.close();
          }
        })
      }),
      400
    );
    assert.equal(calls.length, 0, 'rejected requests must never reach Core');

    const pending = await status(
      await request(path, {
        headers: { apikey: 'ignored', authorization: 'Bearer ignored' }
      }),
      200
    );
    assert.equal(pending.status, 'pending');
    assert.equal(pending.payload, undefined);
    assert.equal(calls.at(-1).method, 'GET');
    assert.equal(state, 'pending', 'reads do not approve');
    assert.equal((await request(`${path}/approve`)).status, 405);
    const approved = await status(await post(`${path}/approve`), 200);
    assert.equal(approved.status, 'approved');
    assert.equal(approved.comparison_code, '12AB34CD');
    assert.equal(nodeLinked, false, 'Console approval cannot confirm the node');
    await status(await post(`${path}/approve`), 200);

    for (const code of [401, 403, 404, 409, 429, 503]) {
      overrideStatus = code;
      await status(await request(path), code);
      await status(await post(`${path}/approve`), code);
    }
    overrideStatus = 500;
    await status(await request(path), 502);
    overrideStatus = 0;
    for (const mode of [
      'wrong-id',
      'economic',
      'redirect',
      'oversized',
      'malformed',
      'timeout'
    ]) {
      replyMode = mode;
      await status(await request(path), 502);
    }
    replyMode = 'normal';

    state = 'linked';
    nodeLinked = true;
    const linked = await status(await request('/api/account/validators'), 200);
    assert.equal(linked.nodes.length, 1);
    assert.equal(linked.nodes[0].signature, undefined);
    replyMode = 'too-many';
    await status(await request('/api/account/validators'), 502);
    replyMode = 'normal';
    overrideStatus = 403;
    await status(await post(nodePath, { pairing_id: pairingId }), 403);
    assert.equal(nodeLinked, true);
    overrideStatus = 0;
    await status(await post(nodePath, { pairing_id: pairingId }), 200);
    assert.equal(nodeLinked, false);
    await status(await post(nodePath, { pairing_id: pairingId }), 200);

    currentCookie = await cookie({ gridAccessTokenExpiresAt: Date.now() - 1 });
    expectedToken = 'refreshed-pairing-token';
    const beforeRefreshFailures = calls.length;
    exchangeMode = 'redirect';
    await status(await request('/api/account/validators'), 401);
    exchangeMode = 'timeout';
    await status(await request('/api/account/validators'), 502);
    assert.equal(calls.length, beforeRefreshFailures);
    exchangeMode = 'normal';
    await status(await request('/api/account/validators'), 200);
    overrideStatus = 403;
    await status(await post(`${path}/approve`), 403);
    overrideStatus = 0;
    exchangeAccount = '00000000-0000-0000-0000-000000000999';
    const beforeMismatch = calls.length;
    await status(await request('/api/account/validators'), 401);
    assert.equal(
      calls.length,
      beforeMismatch,
      'canonical account mismatch fails closed'
    );
    currentCookie = await cookie();
    expectedToken = 'pairing-test-user-token';

    const page = await request(pagePath);
    assert.equal(page.status, 200);
    assert.equal(page.headers.get('referrer-policy'), 'no-referrer');
    assert.equal(page.headers.get('x-frame-options'), 'DENY');
    assert.equal(
      page.headers.get('content-security-policy'),
      "frame-ancestors 'none'"
    );
    assert.ok((await page.text()).includes('Link validator'));
    const anonymousPage = await request(pagePath, { headers: { cookie: '' } });
    assert.ok([302, 307].includes(anonymousPage.status));
    assert.equal(mockErrors.length, 0, String(mockErrors[0] ?? ''));
    assert.equal(
      followedRedirects,
      0,
      'neither user nor service credentials may follow a redirect'
    );
    console.log(
      'Validator pairing auth, origin, body, privacy, lifecycle proxy, refresh, timeout and page gates passed'
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
