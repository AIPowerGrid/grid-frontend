## Overview

The Grid Frontend is built with the following stack:

- Framework - [Next.js 16](https://nextjs.org/)
- Language - [TypeScript](https://www.typescriptlang.org)
- Styling - [Tailwind CSS](https://tailwindcss.com)
- Components - [Shadcn-ui](https://ui.shadcn.com)
- Schema Validations - [Zod](https://zod.dev)
- State Management - [Zustand](https://zustand-demo.pmnd.rs)
- Search params state manager - [Nuqs](https://nuqs.47ng.com/)
- Auth - [Auth.js](https://authjs.dev/)
- Tables - [Tanstack Tables](https://ui.shadcn.com/docs/components/data-table)
- Forms - [React Hook Form](https://ui.shadcn.com/docs/components/form)
- Command+k interface - [kbar](https://kbar.vercel.app/)
- Linting - [ESLint](https://eslint.org)
- Pre-commit Hooks - [Husky](https://typicode.github.io/husky/)
- Formatting - [Prettier](https://prettier.io)

## Getting Started

> [!NOTE]  
> We are using **Next 16** with **React 19**, follow these steps:

Clone the repo:

```
git clone https://github.com/AIPowerGrid/grid-frontend.git
```

- `pnpm install` ( we have legacy-peer-deps=true added in the .npmrc)
- Create a `.env.local` file by copying the example environment file:
  `cp env.example.txt .env.local`
- Add the required environment variables to the `.env.local` file.
- `pnpm run dev`

You should now be able to access the application at http://localhost:3000.

## Architecture

The console is a Next.js backend-for-frontend for Grid core. Browser components
call same-origin `/api` handlers; those server handlers attach the authenticated
Grid session key. Accounts, API keys, usage, workers, validator scorecards, and
payouts live in Grid core. The console does not require direct database access.

Production currently deploys on Vercel. The checked-in Cloudflare/OpenNext import
is incomplete and is not a supported deploy path until its package, Worker
configuration, build, and runtime smoke tests are committed together.

### Validator Account Pairing

The released local operator app creates and keeps a dedicated validator signer
and scoped key on the node. A personal wallet or Console-created key is not
required to start a node.

The new Console pairing flow is under review, not a public enablement. It pairs
an existing node with an existing human account for private status visibility.
The human approves in the Console, compares a code, then confirms separately in
the local app. No node keys, payout rights, account merges, or economic authority
are transferred. Core migration `0030`, the node client, and a supervised canary
must land before enabling Core's default-off `VALIDATOR_PAIRING_ENABLED` flag.

Run `pnpm build`, `pnpm test:auth-smoke`, and `pnpm test:validator-pairing` for
local verification. `pnpm test:validator-pairing --ui` starts a test-only mock
Core/sign-in fixture for browser QA; it uses no real accounts or production keys.
See [validator DOX](src/features/validators/AGENTS.md) for contracts and rollout
gates. Preview.12 does not yet contain local-app pairing controls.
