# validator-pairings - private Console proxy

## Ownership

`_shared.ts` supplies bounded transport, no-store responses, and same-origin JSON
mutation checks for this subtree and `../account/validators/`.

| Browser route                               | Core target                           | Permission                      |
| ------------------------------------------- | ------------------------------------- | ------------------------------- |
| GET `/api/validator-pairings/{id}`          | `/v1/account/validator-pairings/{id}` | Fresh account.manage user proof |
| POST `/api/validator-pairings/{id}/approve` | Same Core path plus `/approve`        | Fresh account.manage user proof |
| GET `/api/account/validators`               | `/v1/account/validators`              | account.read user token         |
| POST `/api/account/validators/{id}/unlink`  | Same Core path plus `/unlink`         | Fresh account.manage user proof |

## Boundaries

- Derive the Core user token only from the encrypted Auth.js session through
  `getSessionToken` / `resolveGridKey`. Ignore inbound API keys and Bearer tokens.
  Canonical-account mismatch on token refresh fails closed.
- Core enforces user-token kind, Google/SIWE freshness, ownership and lifecycle.
  A refresh does not acquire account-manage permission. Preserve 401/403 for
  explicit reauthentication; never fall back to the Console service key.
- Validate `vpa_` plus 64 lowercase hex and `val_` plus 32 lowercase hex before
  constructing fixed upstream paths. Never accept a destination URL/account ID.
- Writes require exact Origin against request protocol/Host, same-origin
  Fetch Metadata when present, and JSON. Do not trust X-Forwarded-Host or allow
  same-site subdomains. The edge must keep its normal Host routing validation.
- Approve body is strictly `{}`. Unlink body is strictly `{pairing_id}`. Read
  at most 256 bytes, including chunked bodies. No browser-supplied signature.
- Core transport is no-store, ten-second timeout including token refresh,
  no redirects, max 64 KiB metadata JSON.
  Validate and allowlist response fields; strip node signing payload, accounts,
  signatures and any future credentials. Require `economic_effect: none`.
- Sanitize errors rather than relaying driver/HTML/upstream credential data.
  Preserve 401/403/404/409/429/503; other upstream failures become 502.
- All proxy responses use no-store and no-referrer. There is no public pairing
  inspection endpoint, local database, cache, or browser credential persistence.

## Verification

`pnpm build` then `pnpm test:validator-pairing`. The production-server smoke
uses a local mock Core to check auth, origin/content/body gates, field filtering,
canonical refresh, explicit mutations, bounded failures, and protected-page
headers. Core's real Postgres/signature tests remain a separate required gate.

## Child DOX Index

- None - leaf.
