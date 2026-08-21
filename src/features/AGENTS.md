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
- `funding/` — explicit EIP-6963 payment-wallet selection, verified account
  wallet binding, Base balance/gas preflight, guarded asset availability,
  automatic on-chain claim, and immutable deposit history.
- `workers/` — worker list plus device-enrollment approval. The browser signs
  only Core's exact delegation message and locally confirms the recovered
  signer before approval. `profile/` — profile view + create form (`utils/form-schema.ts`).
- `validators/` — validator onboarding plus aggregate evidence scorecards and
  assignment health. Onboarding requires a linked wallet, issues a one-time
  validator-purpose key with the exact validator scopes, and links to the public
  release gate, which exposes downloads only after the matching Core migration
  and verified preview release are live.
  Preview and assignment-bound evidence must be visually distinct. The page
  separates probe completion, accepted signed evidence, worker pass, quorum,
  and finalization, and shows aggregate validator liveness without identities.
  Network health may show bounded agreement/dispute rates, worker/model
  coverage, and software-version cohorts. Keep registered, participating, and
  independently verified operator counts visibly separate.
  Shared 3-of-5 groups prove distinct registrations, not independent operators,
  and have no live routing, payout, reward, strike, or slash authority.
- `settings/` — settings view + username-change section.
  Linked identities use Core-issued nonces and exact-purpose wallet signatures;
  the browser never chooses the destination account independently.

## Local Contracts

- Features compose shared primitives from `src/components/ui/` (shadcn); do not fork base
  components here.
- Browser data access goes through same-origin `/api` routes (never the grid key or grid base
  URL directly). Server components may use `gridFetch` from `src/lib/grid-api.ts`.
- Worker enrollment must verify Core's canonical delegation fields and message
  locally before opening the wallet signature prompt.
- Validator key plaintext is displayed once and must never be stored in browser
  persistence or logged. Do not offer onboarding until the canonical account has
  a linked wallet; the node's signing wallet must match it during registration.
- Forms use React Hook Form + Zod schemas (e.g. `profile/utils/form-schema.ts`).
- Funding may use any wallet that Core has verified on the canonical account.
  The funding selector renders only assets Core marks enabled; disabled future
  rails may remain in Core's configuration for operators but must not be
  advertised as launch options.
  Browser balance checks improve UX only; Core receipt verification remains
  authoritative for sender, token, treasury, amount, confirmations, and
  idempotency. After broadcast, persist the asset and public transaction hash
  until Core credits it. Recovery must retry that same hash and must never
  resend the payment. Preflight against Core's advisory remaining daily
  capacity before opening the wallet; Core's locked cap check remains final.

## Work Guidance

—

## Verification

—

## Child DOX Index

- None — leaf.
