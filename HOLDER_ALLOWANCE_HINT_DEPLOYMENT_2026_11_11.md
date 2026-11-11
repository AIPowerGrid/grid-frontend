# Holder Allowance Hint: Production Deployment

## Artifact

- Approved scope: the owner's go-ahead on 2026-11-11 to put the AIPG holder
  allowance live.
- Environment: `https://console.aipowergrid.io`.
- Source: merged PR41, `1e706f30b90dc4182fbb6b33121cfbd72fe658b3`.
- Immutable Vercel deployment: `dpl_Hhejtqqh3vuri7yQgwU4uFyry62M`.
- Build URL: `https://grid-frontend-k2hq32ygq-ai-power-grids-projects.vercel.app`.
- Promoted: November 11, 2026, about 17:25 UTC.
- Previous deployment: `dpl_3uLDcoCKjdnST5FPRb2x1jd6P1L7` (source `1ad6ed2`).

Built remotely from a clean detached checkout of the merged source, staged
with `--skip-domain`, then promoted. The production alias resolved to the
recorded deployment afterwards.

## Change

The dashboard balance card shows one line under "Free today", built only from
Core's `free.holder_tiers` and `free.holder_bonus_usd`: what a holder receives
today, or what holding would add. Core enabled the tiers just before this
promotion (grid-core release `6564c295`).

## Verification

- PR41 checks passed (one earlier run failed on a hosted-runner DNS outage
  while installing browsers).
- After promotion: `/` and `/api-doc` returned 200, anonymous
  `/dashboard/funding` returned 302, the session endpoint 200, an unknown path
  404.

## Not done

- The new line has not been seen in a signed-in browser.

## Rollback

`vercel promote https://grid-frontend-k685tqfxu-ai-power-grids-projects.vercel.app --scope ai-power-grids-projects`
restores the previous build; only the hint line disappears.
