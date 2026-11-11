# Dependency Update and Offline Access: Production Deployment

## Artifact

- Approved scope: the owner's go-live for OAuth refresh tokens.
- Environment: `https://console.aipowergrid.io`.
- Source: merged PR39, `1ad6ed29e0111f564acccebdc2428522341d7dc6`.
- Immutable Vercel deployment: `dpl_3uLDcoCKjdnST5FPRb2x1jd6P1L7`.
- Build URL: `https://grid-frontend-k685tqfxu-ai-power-grids-projects.vercel.app`.
- Promoted: November 11, 2026, 01:37 UTC.
- Previous deployment: `dpl_GJ8fKCArScCLqcJyzoAJiLsswt2V` (source `98e96a4`,
  September 9).

Built remotely from a clean detached checkout of the exact merged source,
using the existing Vercel project and production environment. `--skip-domain`
staged the build; explicit promotion followed Ready. The production alias was
then inspected and resolved to the recorded immutable deployment.

## Changes

- Production dependencies: `next` 16.3.3 to 16.4.1, `axios` to ^1.20.0,
  `sharp` to 0.35.5, `zod` 3 to ^4.6.6, `@scalar/nextjs-api-reference` to
  ^0.12.17, and pnpm overrides for four transitive packages. The audit gate
  had failed on `master` with 3 critical and 19 high advisories; three
  moderate advisories remain.
- The OAuth consent view accepts `offline_access` and shows it as "Stay
  signed in". Core enabled refresh tokens after this promotion.
- The only other commit since the previous artifact (`98e96a4`) is its
  documentation record (#32).

## Verification

- All PR39 checks passed: audit, formatting, strict lint, build, and the auth,
  funding-recovery, key-management, OAuth-consent, validator-pairing and
  validator-compensation browser tests.
- Vercel reported Next.js 16.4.1, sharp 0.35.5 and pnpm 9.15.9, and compiled
  successfully.
- After promotion: `/`, `/api-doc` and `/swagger.json` returned 200; anonymous
  `/oauth/authorize`, `/dashboard/funding` and `/dashboard/api-key` returned
  302 to sign-in with their callback; an unknown path returned 404; the
  session endpoint returned 200.

## Not done

- No signed-in check was performed. Sign-in, the funding page, key management
  and a real consent screen showing "Stay signed in" still need the owner.
- The staged build could not be smoke-tested before promotion because Vercel
  deployment protection guards non-production URLs.
- There is no page for listing and ending OAuth sessions.

## Rollback

`vercel promote https://grid-frontend-6h5axh6pm-ai-power-grids-projects.vercel.app --scope ai-power-grids-projects`
restores the previous build, including its vulnerable dependencies, and
removes the `offline_access` consent line; disable Core's
`GRID_OAUTH_REFRESH_TOKENS_ENABLED` with it.
