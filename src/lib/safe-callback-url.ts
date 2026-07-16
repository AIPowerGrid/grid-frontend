/** Keep post-auth navigation on this Console origin. */
export function safeCallbackUrl(value: string | null | undefined): string {
  if (!value || !value.startsWith('/') || value.startsWith('//')) {
    return '/dashboard';
  }
  try {
    const parsed = new URL(value, 'https://console.aipowergrid.io');
    if (parsed.origin !== 'https://console.aipowergrid.io') return '/dashboard';
    if (
      parsed.pathname !== '/dashboard' &&
      !parsed.pathname.startsWith('/dashboard/')
    ) {
      return '/dashboard';
    }
    return `${parsed.pathname}${parsed.search}${parsed.hash}`;
  } catch {
    return '/dashboard';
  }
}
