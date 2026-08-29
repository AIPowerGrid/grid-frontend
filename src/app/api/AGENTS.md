# src/app/api — server route handlers (the BFF / grid proxy)

## Purpose

Same-origin server endpoints the browser calls. Most are thin proxies that
attach the user's short-lived Core token and forward to grid v1; a few read
aggregated public stats. This layer keeps user and service credentials out of
browser JavaScript.

## Ownership

- `auth/[...nextauth]/` — Auth.js handler. `auth/nonce/` — requests a complete
  origin/address/Base-bound EIP-4361 challenge from Core; the browser signs the
  returned message verbatim.
- `account/`, `account/keys/`, `account/keys/[keyId]/` — account + API-key CRUD;
  pull the Core user token from the Auth.js JWT and forward to `/v1/account*`.
- `account/credits/` — the signed-in account's spendable credits (free daily +
  promotional + paid pockets; forwards the Core token to `/v1/account/credits`).
- `account/deposits/` — signed-in Base funding config, immutable receipts, and
  USDC/AIPG/conversion-backed ETH claim forwarding. The browser never receives
  the Core token; ETH must not proxy to the buffered direct-ETH pilot.
- `account/identities/wallet/{nonce,link}/` — session-gated proof-of-both wallet
  linking; the BFF never exposes the Core user token.
- `worker-enrollments/[enrollmentId]/` — public safe-intent read plus
  session-gated prepare/approve proxies. Validate IDs, addresses, and signatures;
  never proxy manager poll secrets or candidate worker credentials to the browser.
- `validator-pairings/[pairingId]/` and `approve/` - authenticated inspect and
  approval of an existing node's optional account-visibility request. Owned by
  `validator-pairings/AGENTS.md`, including shared transport rules.
- `account/validators/` and `[validatorId]/unlink/` - private associated-node
  listing and exact-pairing removal; use that same validator-pairing transport.
- `oauth/authorization/` - protected consent inspection and approve/deny BFF.
  It sends the scoped Console service key plus the user's Core token only from
  the server, requires same-origin strict JSON for decisions, and accepts only
  bounded/schema-valid Core responses.
- `account/jobs/` — operator trust view (my workers' jobs + den + proof) via
  `/v1/account/jobs`.
- `account/payout-preference/` — set payout asset / AIPG slice via the
  session-gated `/v1/account/payout-preference`.
- `payouts/public/`, `jobs/recent/`, and `network/status/` — PUBLIC no-auth
  proxies for aggregate payouts, the redacted live-jobs feed, and the
  privacy-safe whole-network status contract.
- `openai/v1/chat/completions/`, `openai/v1/completions/`, `openai/v1/models/` —
  OpenAI-compatible passthrough; `chat/completions` streams SSE straight through.
- `generate-text/`, `generate-image/` — dashboard playground generation proxies.
- `models/`, `models-count/`, `workers/`, `workers-count/`, `historical-stats/`,
  `text-gen-stats/`, `image-gen-stats/` — public stats/registry reads via `gridFetch`.
- `validator/scorecards/` and `validator/assignments/health/` — authed proxies
  for aggregate validator evidence and assignment workflow health;
  informational only, no raw evidence, independent-quorum claim, or economic
  effects. Preserve bounded `limit` and `since_hours` filters so the console's
  selected evidence window matches Core's aggregate health window.
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
- Worker-enrollment proxy calls must use the shared bounded timeout and return a
  no-store `502` when Core is unavailable. Never leave a pairing request hanging.
- OAuth authorization routes never follow Core redirects. They return only
  redacted error text and schema-valid consent metadata or an HTTPS/native-
  loopback redirect. All responses are no-store and no-referrer.

## Work Guidance

- New proxy route: read key from JWT (authed) or pass through inbound auth (OpenAI-compat),
  call `GRID_API_BASE`, return upstream status + body. Validate path params before calling out.

## Verification

- `pnpm test:auth-smoke`, `pnpm test:oauth-consent`, and
  `pnpm test:validator-pairing` after `pnpm build`.

## Child DOX Index

- [validator-pairings/AGENTS.md](validator-pairings/AGENTS.md) - bounded private
  account-pairing proxies and cross-origin protection.
- [oauth/AGENTS.md](oauth/AGENTS.md) - bounded OAuth consent proxy and response
  contracts.
