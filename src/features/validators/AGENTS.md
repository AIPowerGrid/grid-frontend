# validators - onboarding, account visibility and evidence

## Purpose

Help operators install the released local app, optionally associate an existing
node with their human account, and inspect aggregate evidence without inventing
validator economic authority or model-quality guarantees.

## Ownership

- `components/validator-onboarding.tsx` - released local-app setup guidance;
  do not restore manual private-key/API-key entry as the default.
- `components/validator-pairing.tsx` - protected, expiring approval page.
- `components/validator-compensation.tsx` - private payout destination review.
  Explicit wallet connect/prepare precedes a separate signature action; loading,
  polling, reload and reauthentication never sign. Reconstruct the exact v1
  consent, re-read before signing, and recheck selected account/Base chain before
  and after the wallet prompt. Changed Console identity invalidates pending work.
  Core verifies EOA/EIP-1271 signatures and ownership; a wallet response alone
  is not approval. No transaction or token approval is requested.
  This version discovers injected EIP-6963/legacy browser wallets; WalletConnect
  mobile/Safe-app embedding is not implemented. Display that limitation, not a
  dead connector. The payout recipient need not be the Console login wallet.
- `components/pairing-step-up.tsx` - existing Google/SIWE sign-in buttons with
  a same-origin return path. Login never executes a pending action.
- `components/linked-validators.tsx` - authenticated current associations and
  exact-association removal with confirmation.
- `components/validator-scorecards-view.tsx` - existing aggregate health and
  evidence dimensions; private node links do not affect public aggregates.
- `components/scorecard-context.tsx` and `evidence-context.ts` - bounded
  display of Core's additive sampling and completed-probe timing metadata.
  Legacy/malformed metadata stays unknown, never zero or recently probed.
- Shared bounded display schemas: `src/lib/validator-pairing.ts`.
- `src/hooks/use-breadcrumbs.tsx` uses a short consent-page label rather than
  displaying the opaque pairing ID in navigation.
- Server proxies: `src/app/api/validator-pairings/` and
  `src/app/api/account/validators/`.

## Pairing Contract

The Core implementation is default off. This Console work is not a production
enablement, and preview.12 does not include local-app pairing controls. Coordinate
Core migration `0030`, both clients, a reviewed node release, and a supervised
canary before enabling `VALIDATOR_PAIRING_ENABLED`. Running an unpaired node
continues to work. Existing nodes retain their dedicated account, signer, and key.

1. A node starts a ten-minute opaque request in its local app.
2. `/dashboard/connect-validator/{pairing_id}` loads authenticated metadata.
   Core requires a recent Google/SIWE proof; GitHub alone cannot approve.
3. The human explicitly approves the displayed node for the current account.
4. The page displays Core's comparison code and polls at five-second intervals.
   The operator must compare it and explicitly confirm in the local app.
5. Only Core's `linked` status is success. Expiry/errors offer the linked-node
   list and explicit retry; no auto-approval, signing, or account merging.
6. Removal posts the displayed exact `pairing_id` after confirmation. A changed
   association is not silently removed. Reauthentication requires another click.

The human account gains private visibility only: node ID, signer, registration
status, version, and heartbeat. Registration `active` is not an online-health
claim. Never expose the node-only signing payload, key, private account ID,
signature, or operator association in public health/evidence views.

The association does not grant validator control, recovery, stake, payout
rights, quorum seats, or independent-operator status. Removing it does not stop
the node or change keys, balances, payout wallets, or evidence history.

## Verification

- `pnpm test:validator-compensation` and, after build,
  `pnpm test:validator-compensation-smoke`. For browser coverage set
  `PLAYWRIGHT_MODULE` to an external Playwright module entry when running the
  smoke. It uses synthetic Core data, generated wallet signatures and temporary
  Auth.js cookies only; no real payment or Google login. Test 320/390/1280px,
  explicit separate prepare/sign, reload without signing, and node-confirmation
  status. Screenshots go to `QA_ARTIFACTS` or `/tmp/aipg-compensation-console-qa`.
- Compensation remains unreleased/default-off pending Core/node/Console
  integration, native qualification and approved pilot budget. A collected
  wallet signature still requires local node consent and maintainer review;
  it is not a finalized payment.

- `pnpm lint:strict`, `pnpm format:check`, `pnpm build`.
- `pnpm test:auth-smoke` and `pnpm test:validator-pairing` after the build.
- `pnpm test:validator-evidence` exercises the sampling/timing display contract.
- After building, `node scripts/validator-evidence-smoke.mjs` uses Playwright
  against a loopback-only mock Core and the production Console build. Supply
  `PLAYWRIGHT_MODULE` as an absolute module entry path if Playwright is external
  to the repo; no dependency or lockfile changes are required. Screenshots go
  to `QA_ARTIFACTS` (default `/tmp/aipg-evidence-qa`). Tests cover token forwarding,
  anonymous rejection, metadata passthrough, 1440/768/375/320px layouts,
  keyboard-accessible details, legacy/empty/error states, and stop both servers.
  Synthetic sessions/data exist only in the test process, not production code.
- `pnpm test:validator-pairing --ui` starts an isolated mock Core and Console
  with a fake local sign-in fixture. The fixture is test-process-only and never
  part of deployed App Router code. Stop it after browser QA.
- Verify pending -> approved -> separately confirmed -> linked; expired,
  unavailable, fresh-login, remove/cancel states; reload recovery; 320px and
  desktop layouts. Mock confirmation is not proof of real node signing.
- Real Windows/Linux pairing, end-to-end signature verification, and the
  production canary remain coordinated rollout gates, not Console smoke claims.

## Scorecard Interpretation

- Rates summarize attestation votes, not independent trials or model identity.
  Keep votes, retained assignments, probe groups, and registered validators
  distinct. Counts across rows can overlap; do not sum them into network-wide
  independent sample counts. Missing or contradictory counts display Unknown.
- `probe_freshness` uses completed Core assignment time. Its age is measured
  at Core's snapshot, not a continuously refreshed clock. Show timestamp
  coverage as timed votes / total, including partial coverage. Receipt time
  (`last_seen`) remains separately labeled; never substitute it for probe time.
- Independent samples and confidence intervals are not established by this
  contract. The UI must not derive a confidence score from vote volume, quorum,
  registration count, or passing rate. Evidence details state correlated-vote,
  operator-independence and non-random workload limitations.
- This is read-only display work. It does not enable fidelity assignments,
  establish operator independence, change compensation, or authorize penalties.
- Redacted scorecards use Core's account-read endpoint, so a Google-only or
  service-refreshed account needs no wallet or registered node. Private node
  health is optional: denial, outage or malformed JSON must not hide valid
  scorecards or fabricate zero counts, a dark budget, or empty node history.
  Hide unavailable node-only sections and display an unavailable status.

## Child DOX Index

- None - leaf.
