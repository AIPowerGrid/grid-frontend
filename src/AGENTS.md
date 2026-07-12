# src - console application source

## Purpose

All Next.js application code for authentication, public transparency, protected
console pages, same-origin Grid proxies, and shared UI.

## Ownership

- `app/` - routes, layouts, pages, and BFF handlers. Owned by `app/AGENTS.md`.
- `features/` - domain UI for keys, usage, rewards, workers, settings,
  validators, auth, and overview. Owned by `features/AGENTS.md`.
- `lib/` - Auth.js and Grid server clients. Owned by `lib/AGENTS.md`.
- `components/` - shared layout, navigation, providers, and UI primitives.
- `hooks/`, `constants/`, `proxy.ts` - shared hooks/data and dashboard auth gate.

## Local Contracts

- Browser code calls same-origin `/api` routes; the bounded Console service key
  stays in server env and short-lived Core user tokens stay in the encrypted
  Auth.js JWT and route-handler code.
- `proxy.ts` protects `/dashboard/:path*`. Public payout transparency remains
  outside that matcher.
- There is no application database client in `src`; Grid core owns accounts,
  keys, usage, workers, validator scorecards, and payouts.
- Preserve loading, empty, degraded-upstream, and unauthorized states across
  every console feature.

## Work Guidance

- New domain pages use `app/dashboard/<domain>` plus `features/<domain>`.
- New browser data requirements get a narrow route under `app/api` that calls
  Grid core; do not expose upstream credentials to client components.

## Verification

- `pnpm lint`
- `pnpm format:check`
- `pnpm build`

## Child DOX Index

- [app/AGENTS.md](app/AGENTS.md) - routes and pages.
- [app/api/AGENTS.md](app/api/AGENTS.md) - server-side BFF routes.
- [features/AGENTS.md](features/AGENTS.md) - domain UI.
- [lib/AGENTS.md](lib/AGENTS.md) - auth and Grid client.
