# oauth - private remote-agent consent proxy

## Purpose

Server-only Console bridge for inspecting and deciding Core-issued OAuth
authorization requests without exposing service or user credentials.

## Ownership

- `authorization/route.ts` - GET inspection and POST approve/deny.
- `authorization/_shared.ts` - session resolution, same-origin/body guards,
  bounded Core transport, redacted errors, and private response headers.

## Local Contracts

- `request` is an opaque `oauth_req_` capability with the exact configured
  shape. Do not decode it, persist it, log it, or accept it in another field.
- POST requires the Console's exact origin, same-origin fetch metadata when
  present, strict JSON, a 512-byte maximum, and the exact decision schema.
- Core receives the scoped Console service key and the user's short-lived Core
  token server-side. Neither may enter a browser response or log.
- Fetches are bounded, no-store, and `redirect: error`. Successful responses
  must pass the display/redirect schema; failures expose only stable local text.
- Final redirects are HTTPS or native loopback HTTP with no credentials or
  fragment. Core remains authoritative for request expiry, replay, client,
  scopes, account proof, and decision state.

## Verification

Run `pnpm build` followed by `pnpm test:oauth-consent`.

## Child DOX Index

- None - leaf.
