# src/lib — shared server infrastructure

## Purpose

Cross-cutting server building blocks: authentication, the Grid v1 HTTP client, account
provisioning helpers, search parameters, and small shared utilities.

## Ownership

- `auth.ts` / `auth.config.ts` — Auth.js setup. Providers: Google, GitHub, and
  strict EIP-4361 Web3/SIWE. The Core-issued message is signed verbatim and binds
  the wallet, Console origin, Base chain, issuance, expiry, and nonce.
  Google/SIWE proof or a namespaced app subject is exchanged for a
  short-lived Core token stored in the httpOnly JWT (`gridAccessToken`); the
  session exposes only `gridAccountId`.
- `grid-api.ts` — `GRID_API_BASE` + `gridFetch` (cached `fetch` wrapper) and v1 response
  types. The single client for the grid v1 service.
- `grid-account.ts` — server-side Grid account/session provisioning helpers.
- `safe-callback-url.ts` — same-origin post-auth navigation guard. Use it for
  any browser-controlled Auth.js callback; Web3 sign-in redirects manually.
- `oauth-authorization.ts` - strict public display, decision, request-capability,
  redirect, and error schemas for the remote-agent consent flow.
- `validator-pairing.ts` - shared Zod display schemas and safe error messages.
  Contains no credentials or signing logic; strips node-only payloads at the
  BFF. Core remains authoritative for proof, ownership and state transitions.
- `searchparams.ts` — nuqs URL search-param parsers. `utils.ts` — `cn` + misc helpers.

## Local Contracts

- The Core user token and Console service key never leave the server. The user
  token lives in the JWT and route handlers forward it; do not expose either via
  `session`.
- Token refresh must preserve the session's canonical `gridAccountId`. If a
  service exchange returns a different account, fail closed and require a new
  proof-backed login; never move a live Console session to another balance.
- `resolveGridKey` never follows a service-exchange redirect. Callers may pass
  an abort signal; validator pairing includes refresh in its ten-second Core
  deadline instead of timing only the later metadata request.
- `gridSession` / wallet verify **soft-fail** (return `null`): a grid outage degrades key
  features but must not break sign-in.
- `grid-api.ts` is the only place that constructs grid URLs/headers — route handlers call
  through it, not raw `fetch`, for cached reads.
- There is no local DB layer. New account work goes through Grid v1.
- Browser-controlled auth callbacks are restricted to `/dashboard` routes or
  `/oauth/authorize` with exactly one valid `oauth_req_` capability; never
  permit an arbitrary same-origin API or action path as a callback.

## Work Guidance

—

## Verification

—

## Child DOX Index

- None — leaf.
