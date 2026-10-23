'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SITE } from '@/lib/site';

/* Pages that are already the destination, or are fine print, end without the invitation. */
const QUIET = ['/consultation', '/thank-you', '/privacy-policy', '/terms-of-service', '/accessibility', '/lab'];

/** The last thing on every page before the footer: one invitation, said once, the same everywhere. */
export default function ClosingCta() {
  const path = usePathname() ?? '/';
  if (QUIET.some((p) => path.startsWith(p))) return null;
  return (
    <section className="cta" aria-labelledby="cta-h">
      <div className="wrap cta-in">
        <h2 id="cta-h" className="cta-h">
          Start with your photos.
          <em>A personal review. Within 24 hours.</em>
        </h2>
        <div className="cta-side">
          <p className="cta-lede">
            Upload your photos and tell us your goals. Choose a preliminary estimate by email or request a virtual consultation. Final pricing requires an exam and necessary X-rays.
          </p>
          <div className="btn-row">
            <Link className="btn solid cta-btn" href="/consultation/">Get a 24-hour quote</Link>
            <a className="btn" href="/pricing/">Monthly payment options</a>
          </div>
          <p className="cta-fine">Photo estimates and virtual consultations &nbsp;·&nbsp; {SITE.city}, {SITE.region} &nbsp;·&nbsp; Serving metro Atlanta</p>
        </div>
      </div>
    </section>
  );
}
  
