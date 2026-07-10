# app - console routes and pages

## Purpose

Next.js App Router surfaces for sign-in, authenticated account/worker controls,
public payout transparency, and the hosted API reference.

## Ownership

- `(auth)/(signin)/` - Google, GitHub, and wallet sign-in entry page.
- `dashboard/` - protected account pages: overview, API keys, usage, rewards,
  settings, validators, and workers.
- `payouts/` - public worker payout transparency and live redacted jobs.
- `api-doc/` - Scalar API reference backed by `public/swagger.json`.
- `api/` - server route handlers, owned by `api/AGENTS.md`.
- Root layout/globals - metadata, providers, fonts, and global styling.

## Local Contracts

- `/dashboard/:path*` requires Auth.js through `src/proxy.ts`.
- Public pages must not depend on a session or expose account IDs/private job
  data. Public payout data contains only already-public wallets/transactions and
  aggregate fields supplied by core.
- `public/swagger.json` is a generated/snapshotted API contract. Refresh it from
  `grid-core`'s `grid_api.main:app` when endpoints change; never hand-document
  old Horde routes in the UI. The schema paths already include `/v1`, so the
  Scalar server URL remains the API origin without another `/v1` suffix.

## Work Guidance

- Keep route components thin and put domain UI under `src/features`.
- Use same-origin `/api` calls from client components and `gridFetch` from
  server-side code.

## Verification

- `pnpm lint`
- `pnpm build`
- Manually verify unauthenticated dashboard redirect and public `/payouts`.

## Child DOX Index

- [api/AGENTS.md](api/AGENTS.md) - BFF and Grid proxy handlers.
