# src/lib — shared server infrastructure

## Purpose

Cross-cutting server building blocks: authentication, the grid v1 HTTP client, the Postgres
pool, and small shared utilities.

## Ownership

- `auth.ts` / `auth.config.ts` — Auth.js (NextAuth) setup. Providers: Google, GitHub, and
  Web3/SIWE. On login, provisions a grid account + session API key via grid v1 and stashes it
  in the httpOnly JWT (`gridApiKey`); the session only ever exposes `gridAccountId`, never the
  key. `auth.config.ts` is also imported by `src/proxy.ts` (the route gate).
- `grid-api.ts` — `GRID_API_BASE` + `gridFetch` (cached `fetch` wrapper) and v1 response
  types. The single client for the grid v1 service.
- `db.ts` — **legacy** Postgres pool + `users`/`user_roles` helpers (SSL on by default).
  Used only by the two legacy `/api` routes; being retired.
- `searchparams.ts` — nuqs URL search-param parsers. `utils.ts` — `cn` + misc helpers.

## Local Contracts

- The grid API key never leaves the server: it lives in the JWT, is read in route handlers,
  and is forwarded to the grid. Do not expose it via `session`.
- `gridSession` / wallet verify **soft-fail** (return `null`): a grid outage degrades key
  features but must not break sign-in.
- `grid-api.ts` is the only place that constructs grid URLs/headers — route handlers call
  through it, not raw `fetch`, for cached reads.
- `db.ts` is frozen: no new tables or callers. New account work goes through grid v1.

## Work Guidance

—

## Verification

—

## Child DOX Index

- None — leaf.
