# src/app/api — server route handlers (the BFF / grid proxy)

## Purpose

Same-origin server endpoints the browser calls. Most are thin proxies that
attach the user's short-lived Core token and forward to grid v1; a few read
aggregated public stats. This layer keeps user and service credentials out of
browser JavaScript.

## Ownership

- `auth/[...nextauth]/` — Auth.js handler. `auth/nonce/` — proxies the grid SIWE nonce.
- `account/`, `account/keys/`, `account/keys/[keyId]/` — account + API-key CRUD;
  pull the Core user token from the Auth.js JWT and forward to `/v1/account*`.
- `account/credits/` — the signed-in account's spendable credits (free daily +
  promotional + paid pockets; forwards the Core token to `/v1/account/credits`).
- `account/identities/wallet/{nonce,link}/` — session-gated proof-of-both wallet
  linking; the BFF never exposes the Core user token.
- `account/jobs/` — operator trust view (my workers' jobs + den + proof) via
  `/v1/account/jobs`.
- `account/payout-preference/` — set payout asset / AIPG slice via the
  session-gated `/v1/account/payout-preference`.
- `payouts/public/` and `jobs/recent/` — PUBLIC no-auth proxies for the
  transparency page (aggregate payouts + the redacted live-jobs feed).
- `openai/v1/chat/completions/`, `openai/v1/completions/`, `openai/v1/models/` —
  OpenAI-compatible passthrough; `chat/completions` streams SSE straight through.
- `generate-text/`, `generate-image/` — dashboard playground generation proxies.
- `models/`, `models-count/`, `workers/`, `workers-count/`, `historical-stats/`,
  `text-gen-stats/`, `image-gen-stats/` — public stats/registry reads via `gridFetch`.
- `validator/scorecards/` and `validator/assignments/health/` — authed proxies
  for aggregate validator evidence and assignment/quorum health; informational
  only, no raw evidence or economic effects.
- `sentry/workerRewards/[address]/` — wallet earnings via grid v1 (validates `0x` address).

## Local Contracts

- **Credential handling:** read the Core user token from the JWT via `getToken`
  and send it as the `apikey` header. OpenAI-compatible routes may forward an
  inbound user credential. Never log or return these credentials.
- **Forward, don't reshape:** OpenAI/proxy routes pass body and status through unchanged
  (stream SSE with `Cache-Control: no-cache`). Reshape only where a view needs it (see
  `workers/`), and degrade gracefully (return `[]`/`502` on upstream failure) rather than 500.
- **Stats reads** use `gridFetch` (cached, `revalidate`); do not bypass it with raw `fetch`.
- Do not add direct-database routes. Grid core owns persistence and authorization.

## Work Guidance

- New proxy route: read key from JWT (authed) or pass through inbound auth (OpenAI-compat),
  call `GRID_API_BASE`, return upstream status + body. Validate path params before calling out.

## Verification

—

## Child DOX Index

- None — leaf.
