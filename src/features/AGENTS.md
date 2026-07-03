# src/features — per-route feature UI

## Purpose

The client/server UI for each dashboard area, grouped one folder per route. App Router pages
in `src/app/dashboard/<area>/` stay thin and render the matching feature here.

## Ownership

- `auth/` — sign-in view + provider buttons (Google, GitHub, Web3). Drives `src/lib/auth`.
- `overview/` — dashboard home widgets (pie/area/bar graphs, recent models, quick start,
  about-grid) with skeleton variants for the parallel routes under `dashboard/overview/`.
- `api-key/` — API-key view + account-keys management UI.
- `api-usage/` — usage/metering view. `rewards/` — wallet rewards view.
- `workers/` — worker list view. `profile/` — profile view + create form (`utils/form-schema.ts`).
- `validators/` — aggregate validator evidence scorecards plus
  assignment/quorum health. Preview evidence and assignment-bound authoritative
  evidence must be visually distinct; never present either as live routing,
  payout, strike, or slash authority.
- `settings/` — settings view + username-change section.

## Local Contracts

- Features compose shared primitives from `src/components/ui/` (shadcn); do not fork base
  components here.
- Browser data access goes through same-origin `/api` routes (never the grid key or grid base
  URL directly). Server components may use `gridFetch` from `src/lib/grid-api.ts`.
- Forms use React Hook Form + Zod schemas (e.g. `profile/utils/form-schema.ts`).

## Work Guidance

—

## Verification

—

## Child DOX Index

- None — leaf.
