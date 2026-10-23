import Link from 'next/link';
import { SITE, pageMeta } from '@/lib/site';

export const metadata = pageMeta({
  title: 'Request received | Dr. Atlanta Cosmetic Dentistry',
  description: 'Your request was received. Check your email for your next step.',
  path: '/thank-you/',
  noindex: true,
});

export default function ThankYou() {
  return (
    <section className="band" style={{ paddingTop: 'clamp(56px, 8vw, 120px)' }}>
      <div className="wrap grid">
        <div className="c-1-8">
          <h1>
            <span className="rise"><span>Got it.</span></span>
            <span className="rise"><span style={{ ['--d' as string]: '0.1s' }}><em>Your next step starts by email.</em></span></span>
          </h1>
        </div>
        <div className="c-8-13" style={{ alignSelf: 'end' }}>
          <p className="lede">If you chose a photo estimate, expect a preliminary quote within 24 hours of submitting your completed intake and clear photos. If you requested a virtual consultation, we will email you to arrange a time and send your Google Meet link once confirmed.</p>
          <div className="btn-row" style={{ marginTop: 28 }}>
            <Link className="btn solid" href="/results/">See the cases</Link>
            <Link className="btn" href="/pricing/">What it costs</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
  
