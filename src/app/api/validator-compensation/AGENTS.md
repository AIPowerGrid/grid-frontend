# Validator Compensation BFF

## Purpose And Ownership

`[requestId]/` reads an existing private payout request. `prepare/` selects an
exact Base recipient; `approve/` forwards its exact consent hash/signature.
`_shared.ts` owns this bounded transport. Core owns identity, recent proof,
pairing, allocation, signature verification and all state transitions.

## Contract

- Accept only `vpc_` plus 64 lowercase hex request IDs; never accept an account,
  allocation or node identity from the browser as authorization.
- Resolve the current account-bound Core user token only on the server.
  Mutations require exact same-origin JSON; encoded bodies are rejected.
  Read bodies within ten seconds, at most 256 bytes for prepare and 20 KB for
  approval. The larger limit accommodates EIP-1271 wallet signatures.
- Token refresh and Core request share a ten-second deadline; never follow
  redirects. Require JSON, at most 20 KB, and validate the full v1 consent and
  canonical message/hash through `src/lib/validator-compensation.ts`.
- Strip unrecognized response fields. Consent contains the node's private
  account/control-group commitments because they are signed; never publish
  them in scorecards, diagnostics, URLs or logs. Never forward stored signatures
  or credentials in responses. Fixed errors only, no-store/no-referrer always.
- These routes collect recipient approval only. They never confirm as a node,
  bind a recipient, create a campaign, transfer tokens, or enable compensation.
- Core PR127/migration 0039 is default off. Coordinated deployment, complete
  Core/Console/node integration and explicit pilot approval remain required.

## Verification

`pnpm test:validator-compensation` checks canonical Python JSON compatibility,
exact integer amounts and malformed contracts. After building,
`pnpm test:validator-compensation-smoke` exercises real Next/Auth.js routes
against synthetic Core: token forwarding, anonymous/cross-origin rejection,
body bounds, unknown/wrong request, unavailable service, redirect refusal,
privacy headers, field stripping and actual EOA signature recovery.
Neither test proves Core ownership, EIP-1271 RPC, or database concurrency.

## Child DOX Index

None; this guide owns the routes below it.
