# DOX framework

- DOX is a hierarchy of AGENTS.md files that carry the durable contracts for this repo.
- Agents must follow the DOX chain on every edit.

## Core Contract

- AGENTS.md files are binding work contracts for their subtrees.
- Any work product must stay understandable from the nearest AGENTS.md plus every parent above it.

## Read Before Editing

1. Read this root AGENTS.md.
2. Identify every path you expect to touch.
3. Walk from repo root to each target, reading every AGENTS.md on the way.
4. The nearest AGENTS.md is the local contract; parents hold repo-wide rules.
5. If docs conflict, the closer doc controls local detail, but no child may weaken DOX.

Do not rely on memory — re-read the applicable chain in-session before editing.

## Update After Editing

Every meaningful change requires a DOX pass before the task is done. Update the closest
owning AGENTS.md when a change affects: purpose/scope/ownership; durable structure,
contracts, or workflows; inputs/outputs/permissions/side-effects; or the Child DOX Index.
Remove stale text immediately. Refresh affected parent and child indexes.

## Style

Concise, current, operational. Stable contracts, not diary entries. Broad rules in parents,
concrete detail in children. Delete stale notes instead of explaining history.

---

# grid-frontend — the grid dashboard + BFF

## Purpose

The web console for the AI Power Grid: account/login, API-key management, usage + rewards
stats, worker/model views, and hosted API reference. A Next.js 16 App Router app (React 19,
TypeScript). It is mostly a **backend-for-frontend**: its `/api` route handlers proxy the
grid v1 service (`grid-core`/`grid_api`) and never expose the user's grid API key to the
browser. Deployed on Vercel.

## Ownership

- **`src/app/`** — App Router. `api/` = server route handlers (the BFF); owned in its own
  AGENTS.md. `dashboard/` = authed pages (parallel routes under `overview/`). `(auth)/` =
  sign-in. `api-doc/` = hosted OpenAPI reference (Scalar route over `/swagger.json`).
- **`src/lib/`** — shared server infra: Auth.js config, grid v1 client, Postgres pool.
  Owned in its own AGENTS.md.
- **`src/features/`** — per-route feature UI (one folder per dashboard area). Owned in its
  own AGENTS.md.
- **`src/components/`** — shared/presentational UI (shadcn `ui/`, layout, kbar, providers).
- **`src/hooks/`, `src/constants/`, `types/`** — shared hooks, static nav/data, global types.
- **`src/middleware.ts`** — Auth.js route gate for `/dashboard/:path*`.
- **`public/`** — static assets. **Root config** — `next.config.js`, `tailwind.config.js`,
  `tsconfig.json`, `env.example.txt`, `vercel.json`.

## Local Contracts

- **Inherit org engineering standards:** `/Users/j/fix-axios-vuln/aipg-documentation/engineering-standards/`
  (core + `git.md` + `typescript.md`). The rules below are grid-frontend specializations.
- **Secrets stay server-side.** The grid API key lives only in the httpOnly Auth.js JWT.
  Browser code must call same-origin `/api/...` routes; those routes attach the key and
  forward to `GRID_API_BASE`. Never ship the key, `GRID_INTERNAL_TOKEN`, or DB creds to a
  client component.
- **The grid v1 API is the source of truth** for accounts, keys, stats, workers, models, and
  rewards (`src/lib/grid-api.ts`, default `https://api.aipowergrid.io`). New data needs come
  from grid v1 endpoints, not new local tables.
- **Legacy Postgres is being retired.** `src/lib/db.ts` talks directly to the legacy horde
  `users`/`user_roles` tables (used only by `update-username` and `generate-api-key`). Do not
  add new direct-DB routes — route new account work through grid v1.
- **Auth providers:** Google, GitHub, and Web3/SIWE (`src/lib/auth.config.ts`). Login
  provisions a grid account + session key via grid v1; it soft-fails (key features degrade)
  rather than blocking sign-in.
- **`src/middleware.ts`** gates `/dashboard/:path*` — unauthenticated requests redirect to `/`.

## Work Guidance

- New dashboard area → page in `src/app/dashboard/<area>/`, UI in `src/features/<area>/`,
  shared primitives from `src/components/ui/`.
- Talking to the grid from a page/server component → use `gridFetch` (`src/lib/grid-api.ts`).
  Talking to it from the browser → add/extend an `/api` proxy route.
- Use the `@/` path alias (maps to `src/`). Validate forms with Zod + React Hook Form.
- `pnpm install` requires `legacy-peer-deps=true` (already in `.npmrc`); Node >= 20.9, pnpm >= 9.

## Verification

- `pnpm lint` (ESLint, `eslint-config-next`) and `pnpm format:check` (Prettier).
- `pnpm build` must succeed (typecheck runs in build). No unit test suite exists yet.
- Husky + lint-staged run Prettier on staged files pre-commit.

## Child DOX Index

- [src/app/api/AGENTS.md](src/app/api/AGENTS.md) — server route handlers (the BFF / grid proxy).
- [src/lib/AGENTS.md](src/lib/AGENTS.md) — auth, grid v1 client, Postgres pool.
- [src/features/AGENTS.md](src/features/AGENTS.md) — per-route feature UI.
