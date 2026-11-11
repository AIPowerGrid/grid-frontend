# Sign-in Wallet Choice: Production Deployment

## Artifact

- Approved scope: the owner's go-ahead on 2026-11-11 to build the sign-in
  wallet picker.
- Environment: `https://console.aipowergrid.io`.
- Source: merged PR43, `508226d2351b06e63dabb4397aee0b948bd4faf1`.
- Immutable Vercel deployment: `dpl_2cstz9N58Ra7P7PrNPCQ3MfwUa3g`.
- Build URL: `https://grid-frontend-o30lb5jql-ai-power-grids-projects.vercel.app`.
- Promoted: November 11, 2026, about 20:03 UTC.
- Previous deployment: `dpl_Hhejtqqh3vuri7yQgwU4uFyry62M` (source `1e706f3`).

Built remotely from a clean detached checkout of the merged source, staged
with `--skip-domain`, then promoted. The production alias resolved to the
recorded deployment afterwards.

## Change

"Connect Wallet" lists the wallets that announce themselves (EIP-6963) and
asks which to use when there is more than one. One wallet signs in directly.
The legacy `window.ethereum` slot is used only when no wallet announces
itself. The button is shared by the sign-in page and the API-key, OAuth
consent, worker-enrollment and validator step-up prompts.

## Verification

- PR43 checks passed, including the new `pnpm test:wallet-picker` browser
  test with fake wallets.
- After promotion: `/` and `/api-doc` returned 200, anonymous
  `/dashboard/funding` returned 302, the session endpoint 200, an unknown path 404.

## Not done

- Not tried with real wallet extensions, and no real wallet sign-in was
  performed on production after the change.

## Rollback

`vercel promote https://grid-frontend-k2hq32ygq-ai-power-grids-projects.vercel.app --scope ai-power-grids-projects`
restores the previous build, which picks MetaMask or the first wallet.

## Follow-up: switch to Base before signing (same day)

- Source: merged PR45, `35484913a20e132ad6da84d7e4d87145c5a64caa`.
- Immutable Vercel deployment: `dpl_DA1G1Saygb6AkVFs6VgrxhTDRj7R`
  (`https://grid-frontend-31ur44gif-ai-power-grids-projects.vercel.app`),
  promoted about 21:15 UTC. Previous: `dpl_2cstz9N58Ra7P7PrNPCQ3MfwUa3g`.
- Why: a builder signing in with a second linked wallet got "the chain ID
  does not match the provided chain ID for verification". Core's sign-in
  message names Base, and his wallet was on another network. The owner
  forwarded the report; the fix was deployed on that basis.
- Change: wallet sign-in asks the chosen wallet to make Base active before
  requesting the challenge, and says so plainly if the user declines.
- Checks: PR45 checks passed, including the extended wallet browser test;
  after promotion the same five URL checks as above returned the same codes.
- Not done: not reproduced or confirmed with the reporter's real wallet.
- Rollback:
  `vercel promote https://grid-frontend-o30lb5jql-ai-power-grids-projects.vercel.app --scope ai-power-grids-projects`.
