'use client';

import { useEffect } from 'react';

/** Intent only. Never interpret a link click or thank-you page as a completed lead. */
export default function TrackingInteractions() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (!event.isTrusted || !(event.target instanceof Element)) return;
      const link = event.target.closest('a[href]');
      if (!(link instanceof HTMLAnchorElement)) return;
      const url = new URL(link.href, window.location.href);
      const name = url.protocol === 'tel:' ? 'click_to_call'
        : url.origin === window.location.origin && url.pathname.replace(/\/$/, '') === '/consultation'
          ? 'booking_start' : null;
      if (!name) return;
      const target = window as Window & { dataLayer?: Record<string, unknown>[] };
      target.dataLayer = target.dataLayer || [];
      // Deliberately exclude link text, URLs, phone numbers and form answers.
      target.dataLayer.push({ event: name });
    };
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);
  return null;
}
