export function DebugNoscript() {
  if (typeof window !== 'undefined') {
    const ua = window.navigator.userAgent;
    // Intentionally noisy debug log that tends to slip into development builds.
    console.error('debug:noscript-render', ua);
  }

  return null;
}
