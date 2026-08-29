export interface PendingKeyCreation {
  accountId: string;
  label: string;
}

export const PENDING_KEY_CREATION_KEY: string;

export function rememberPendingKeyCreation(
  storage: Storage,
  intent: PendingKeyCreation,
  now?: number
): void;

export function takePendingKeyCreation(
  storage: Storage,
  now?: number
): PendingKeyCreation | null;

export function clearPendingKeyCreation(storage: Storage): void;
