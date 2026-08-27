# validators - onboarding, account visibility and evidence

## Purpose

Help operators install the released local app, optionally associate an existing
node with their human account, and inspect aggregate evidence without inventing
validator economic authority or model-quality guarantees.

## Ownership

- `components/validator-onboarding.tsx` - released local-app setup guidance;
  do not restore manual private-key/API-key entry as the default.
- `components/validator-pairing.tsx` - protected, expiring approval page.
- `components/pairing-step-up.tsx` - existing Google/SIWE sign-in buttons with
  a same-origin return path. Login never executes a pending action.
- `components/linked-validators.tsx` - authenticated current associations and
  exact-association removal with confirmation.
- `components/validator-scorecards-view.tsx` - existing aggregate health and
  evidence dimensions; private node links do not affect public aggregates.
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

- `pnpm lint:strict`, `pnpm format:check`, `pnpm build`.
- `pnpm test:auth-smoke` and `pnpm test:validator-pairing` after the build.
- `pnpm test:validator-pairing --ui` starts an isolated mock Core and Console
  with a fake local sign-in fixture. The fixture is test-process-only and never
  part of deployed App Router code. Stop it after browser QA.
- Verify pending -> approved -> separately confirmed -> linked; expired,
  unavailable, fresh-login, remove/cancel states; reload recovery; 320px and
  desktop layouts. Mock confirmation is not proof of real node signing.
- Real Windows/Linux pairing, end-to-end signature verification, and the
  production canary remain coordinated rollout gates, not Console smoke claims.

## Child DOX Index

- None - leaf.
