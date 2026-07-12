# src/lib — shared server infrastructure

## Purpose

Cross-cutting server building blocks: authentication, the Grid v1 HTTP client, account
provisioning helpers, search parameters, and small shared utilities.

## Ownership

- `auth.ts` / `auth.config.ts` — Auth.js setup. Providers: Google, GitHub, and
  Web3/SIWE. Google/SIWE proof or a namespaced app subject is exchanged for a
  short-lived Core token stored in the httpOnly JWT (`gridAccessToken`); the
  session exposes only `gridAccountId`.
- `grid-api.ts` — `GRID_API_BASE` + `gridFetch` (cached `fetch` wrapper) and v1 response
  types. The single client for the grid v1 service.
- `grid-account.ts` — server-side Grid account/session provisioning helpers.
- `searchparams.ts` — nuqs URL search-param parsers. `utils.ts` — `cn` + misc helpers.

## Local Contracts

- The Core user token and Console service key never leave the server. The user
  token lives in the JWT and route handlers forward it; do not expose either via
  `session`.
- `gridSession` / wallet verify **soft-fail** (return `null`): a grid outage degrades key
  features but must not break sign-in.
- `grid-api.ts` is the only place that constructs grid URLs/headers — route handlers call
  through it, not raw `fetch`, for cached reads.
- There is no local DB layer. New account work goes through Grid v1.

## Work Guidance

—

## Verification

—

## Child DOX Index

- None — leaf.
