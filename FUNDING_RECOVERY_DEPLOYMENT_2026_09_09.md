# Funding Recovery: Production Deployment

## Artifact

- Approved scope: the sole maintainer's demand-billing rollout goal.
- Environment: `https://console.aipowergrid.io`.
- Source: merged PR31, `98e96a4c30f20c6f236049731122c622c0bf680e`.
- Immutable Vercel deployment: `dpl_GJ8fKCArScCLqcJyzoAJiLsswt2V`.
- Build URL: `https://grid-frontend-6h5axh6pm-ai-power-grids-projects.vercel.app`.
- Deployment window: September 9, 2026, 18:07-18:10 UTC.
- Previous deployment: `dpl_EhYyjjNvVv4Uq3TC7qjCfCmfM86W`.
- Core dependency unchanged: `ad5a12572ab3539bd0e4ca3d4d396ee819b7197d`,
  Alembic `0040`. No Console database, migration or configuration-schema change.

Built remotely from a clean detached checkout of the exact merged source,
using the existing Vercel project and production environment. `--skip-domain`
staged the build; explicit promotion followed Ready. The production alias was
then inspected and resolved to the recorded immutable deployment.

## Changes

Pending funding receipts survive reloads and retry the original transaction.
Storage failures warn instead of crashing the page or hiding a successful
credit. A writable-storage preflight blocks new payments before wallet calls;
if storage fails after broadcast, the in-memory receipt remains recoverable
while the page is open. This does not promise persistence when storage fails:
the warning asks the user to retain the transaction link and keep the tab open.
Core remains the authority for ownership, transfer verification and deduplication.

Next.js is patched to `16.3.3`, Sharp to `0.35.4`, with reviewed transitive
dependency bounds. Vercel confirmed both versions, used the existing lockfile
without dependency resolution and completed compilation and typechecking.
Vercel reported pnpm `9.15.9`; local verification used `9.15.5` and Node
`22.23.2`. The broad Node engine range remains a follow-up, not a runtime pin.

## Verification

- All PR31 checks passed, including required Console CI, CodeQL, tracked-tree
  and full-history secret scans and infrastructure-string checks.
- Local build, lint, formatting, existing auth/key/OAuth/pairing/compensation
  checks and CSS variants passed. Production dependency audit reported no known
  vulnerabilities at verification time.
- The required Playwright test uses the production Next server with loopback
  Core fixtures and synthetic Google/wallet sessions. Desktop and mobile cases
  cover receipt reload, 425/503 retry, already-credited completion, corrupt
  storage, denied storage and failed cleanup. Recovery performs no wallet calls.
  A connected, funded wallet fixture also proves write failure after page load
  blocks a new payment before additional wallet calls.
- After promotion, the existing signed-in browser retained its session on
  reload, displayed the purchased balance and the previously credited funding
  receipt, and exposed the payment-wallet button normally.
- Anonymous funding-page access returned 302 to login with its callback.
  Anonymous deposit GET and POST returned 404 `No grid account`, without
  exposing receipts or forwarding an authenticated claim.

No new transfer, generation charge, credit grant or wallet connection was
performed for this deployment. Browser fixtures do not prove a new live OAuth
ceremony, real wallet signature or failed-storage event in the owner's browser.
The separate Core canary already verified duplicate claiming of the existing
production deposit without changing the balance.

## Rollback And Remaining Gates

The previous deployment is recorded for incident analysis, but it contains the
superseded Next.js/Sharp versions. Prefer a patched forward recovery; do not
silently restore known vulnerable dependencies to production.

Core charging remains allowlisted. This Console deployment does not enable
global charging, daily-free credits, new promotional campaigns, unverified
generation routes, worker payouts or validator rewards. Preserve the Core
generation-path allowlist and prospective paid-work reward cutoff on rollback.
The remaining demand launch gates, including lifecycle failure coverage and
the observation window, remain owned by Core's launch runbook.
