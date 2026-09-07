# Validator Consent: Dark Production Deployment

## Deployed Artifact

- Date: September 7, 2026, approximately 20:29-20:32 UTC.
- Environment: production, `https://console.aipowergrid.io`.
- Approved scope: sole maintainer's supported-validator-beta deployment goal;
  no compensation budget or payment activation approval.
- Source: `28dbf5f348a077ed7ed163ea8e081a1eae5445a1`, merged PR27.
- Immutable Vercel deployment: `dpl_7VSPXoHtntn5Nxg9qDK9HJ5peiNu`.
- Build URL: `https://grid-frontend-kwws4sy4b-ai-power-grids-projects.vercel.app`.
- Rollback: `dpl_FxmvjkJHnYQECssrUrZNqrgNNE4p`, the previously selected
  `grid-frontend-59neol88x-ai-power-grids-projects.vercel.app` deployment.
- Core dependency: `874f74071d9768d66d8031e2095ace10498dbd0d`, Alembic `0039`.
- No Console database, migration or environment change. Consent uses the
  existing `aipg.validator.compensation.recipient.v1` contract.

Built from a clean detached checkout of the exact merged source. Vercel used
the existing production environment, skipped dependency resolution against the
unchanged lockfile, compiled Next.js and completed TypeScript checks. The build
was staged with `--skip-domain`, reached Ready, then was explicitly promoted.
The staged URL required Vercel SSO, so it did not provide an anonymous app-route
test before promotion. No deployment protection was disabled.

## Verification

- All PR27 checks passed, including the compensation contract and BFF suite.
- Required Core PR128 CI previously passed the actual PostgreSQL/Core/Auth.js/
  node handoff, including lost-confirmation-response recovery. This is test
  infrastructure proof, not a production human-wallet journey.
- Production homepage and auth-provider endpoint returned HTTP 200.
- An anonymous well-formed payout page request returned Auth.js's HTTP 302 to
  the local login page with the exact callback preserved, `no-store` and
  `no-referrer`. An initial probe expected 307; source inspection confirmed
  `Response.redirect` defaults to 302, and the corrected contract check passed.
- Anonymous well-formed compensation BFF read: HTTP 401.
- Malformed request ID: HTTP 404. Cross-origin approval request: HTTP 403.
- Private read-only Core audit confirmed `0039`, all 21 existing validator
  identity/review/qualification bindings preserved, environment unchanged,
  observer and compensation flags disabled, and zero rows in all six
  compensation tables. No consent request or reward allocation was created.

## Remaining Boundaries

This deploy makes the matching page available; it does not activate recipient
consent, account pairing, a compensation campaign, validator transfers, or any
scoring authority. Live human consent still needs a supervised check after the
appropriate Core gate is deliberately authorized. Do not count anonymous HTTP
checks as proof of Google login, a browser-extension signature, mobile-wallet
support, or payment delivery.

Rollback promotes the recorded previous Vercel deployment. Keep Core's operator
and sender gates off; retain all Core schema and recorded state.
