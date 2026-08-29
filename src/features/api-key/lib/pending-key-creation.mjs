// SPDX-FileCopyrightText: 2026 AI Power Grid
// SPDX-License-Identifier: AGPL-3.0-or-later

export const PENDING_KEY_CREATION_KEY = 'aipg.console.pending-key-creation.v1';

const VERSION = 1;
const MAX_AGE_MS = 10 * 60 * 1000;
const MAX_LABEL_LENGTH = 64;
const MAX_ACCOUNT_ID_LENGTH = 128;

/**
 * Remember a rejected key-creation intent immediately before step-up auth.
 * The intent contains no credential and remains local to the current tab.
 *
 * @param {Storage} storage
 * @param {{ accountId: string, label: string }} intent
 * @param {number} [now]
 */
export function rememberPendingKeyCreation(storage, intent, now = Date.now()) {
  const accountId = String(intent.accountId ?? '').trim();
  const label = String(intent.label ?? '').trim();
  if (
    !accountId ||
    accountId.length > MAX_ACCOUNT_ID_LENGTH ||
    !label ||
    label.length > MAX_LABEL_LENGTH
  ) {
    throw new Error('Invalid pending key creation');
  }
  storage.setItem(
    PENDING_KEY_CREATION_KEY,
    JSON.stringify({ version: VERSION, accountId, label, createdAt: now })
  );
}

/**
 * Consume before sending so reloads and React remounts cannot duplicate a write.
 *
 * @param {Storage} storage
 * @param {number} [now]
 * @returns {{ accountId: string, label: string } | null}
 */
export function takePendingKeyCreation(storage, now = Date.now()) {
  const raw = storage.getItem(PENDING_KEY_CREATION_KEY);
  storage.removeItem(PENDING_KEY_CREATION_KEY);
  if (!raw) return null;
  try {
    const value = JSON.parse(raw);
    const age = now - Number(value?.createdAt);
    if (
      value?.version !== VERSION ||
      typeof value.accountId !== 'string' ||
      !value.accountId ||
      value.accountId.length > MAX_ACCOUNT_ID_LENGTH ||
      typeof value.label !== 'string' ||
      !value.label ||
      value.label.length > MAX_LABEL_LENGTH ||
      !Number.isFinite(age) ||
      age < -30_000 ||
      age > MAX_AGE_MS
    ) {
      return null;
    }
    return { accountId: value.accountId, label: value.label };
  } catch {
    return null;
  }
}

/** @param {Storage} storage */
export function clearPendingKeyCreation(storage) {
  storage.removeItem(PENDING_KEY_CREATION_KEY);
}
