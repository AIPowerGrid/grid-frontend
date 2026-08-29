# src/features — per-route feature UI

## Purpose

The client/server UI for each dashboard area, grouped one folder per route. App Router pages
in `src/app/dashboard/<area>/` stay thin and render the matching feature here.

## Ownership

- `auth/` — sign-in view + provider buttons (Google, GitHub, Web3). Drives `src/lib/auth`.
- `oauth/` - explicit remote-agent consent UI. Displays only Core-validated
  client/scopes/destination data, requires a separate approve or deny action,
  and offers fresh Google/wallet proof when Core rejects stale authority.
- `overview/` — dashboard home widgets (pie/area/bar graphs, recent models, quick start,
  about-grid) with skeleton variants for the parallel routes under `dashboard/overview/`.
- `api-key/` — API-key view + account-keys management UI. Create/revoke failures
  remain visible; missing or stale proof offers the existing Google and wallet
  sign-in controls. A creation rejected with 401/403 may be remembered in
  tab-local storage and retried once after fresh proof, only for the same
  canonical account; consume the intent before sending. Revocation, login,
  list refresh, account changes, and uncertain failures never retry a mutation.
  Core still decides account-management authority; the UI does not elevate a
  service-refreshed read token or treat a failed revocation as success.
- `api-usage/` — usage/metering view. `rewards/` — wallet rewards view.
- `funding/` — explicit EIP-6963 payment-wallet selection, verified account
  wallet binding, Base balance/gas preflight, guarded asset availability,
  automatic on-chain claim, and immutable deposit history.
- `workers/` — worker list plus device-enrollment approval. The browser signs
  only Core's exact delegation message and locally confirms the recovered
  signer before approval. `profile/` — profile view + create form (`utils/form-schema.ts`).
- `validators/` — local-app onboarding, optional private account association,
  aggregate evidence scorecards, and assignment health. Owned in its own
  AGENTS.md. The released app creates a dedicated node identity and scoped key
  locally; no manual Console key or personal wallet is required. The Console
  never generates, receives, or stores the validator private key.
  Account pairing is a separate, default-off Core feature pending coordinated
  node-client release and canary; it grants visibility, not node control.
  Preview and assignment-bound evidence must be visually distinct. The page
  separates probe completion, accepted signed evidence, worker pass, quorum,
  and finalization, and shows aggregate validator liveness without identities.
  Network health may show bounded agreement/dispute rates, worker/model
  coverage, and software-version cohorts. Keep registered, participating, and
  independently verified operator counts visibly separate. A probe group's
  distinct-registration quorum and reviewed independent-operator quorum are
  separate signals; never present the former as the latter.
  Scorecard rows must render Core's evidence dimension (`availability`,
  `protocol_conformance`, `capability`, `quality`, or `fidelity`) and visibly
  mark generated canaries as not quality-rated. Never turn `avg_score` from a
  protocol/capability canary into a model-quality claim.
  The validator health view also renders Core's paid-audit policy and current
  UTC-day den budget. Keep target-worker compensation visibly separate from
  validator rewards and evidence authority; never infer enabled state locally.
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
- Validator account pairing requires explicit Console approval followed by an
  explicit confirmation on the node. Never auto-approve on login or poll,
  request a node private key, or treat account association as ownership,
  recovery, payout delegation, or operator independence.
- OAuth consent never treats login as approval and never exposes the Console
  service key, Core user token, wallet key, or a reusable Grid API key. The
  browser receives only bounded consent metadata and a validated final redirect.
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

- [validators/AGENTS.md](validators/AGENTS.md) - onboarding, private pairing,
  and evidence-view contracts.
