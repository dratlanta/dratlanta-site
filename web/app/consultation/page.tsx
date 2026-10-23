import ConsultPlanner from '@/components/ConsultPlanner';
import Photo from '@/components/Photo';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import PageNote from '@/components/PageNote';
import { SITE, pageMeta } from '@/lib/site';
import { pageGraph } from '@/lib/schema';

const META = {
  title: 'Get a Photo Estimate in Metro Atlanta | Dr. Atlanta',
  description: 'Upload your photos for a preliminary quote within 24 hours, or request a virtual consultation with Dr. Atlanta. Final pricing requires an in-person exam and X-rays.',
  path: '/consultation/',
};
export const metadata = pageMeta(META);

export default function Consultation() {
  return (
    <>
      <JsonLd data={pageGraph({ path: META.path, name: META.title, description: META.description })} />
      <section className="band" style={{ paddingTop: 'clamp(56px, 8vw, 120px)', paddingBottom: 'var(--rhythm-s)' }}>
        <div className="wrap grid">
          <div className="c-1-11">
            <h1>
              <span className="rise"><span>Your smile, reviewed.</span></span>
              <span className="rise"><span style={{ ['--d' as string]: '0.1s' }}>A quote within 24 hours.</span></span>
              <span className="rise"><span style={{ ['--d' as string]: '0.2s' }}><em>Zero pressure.</em></span></span>
            </h1>
          </div>
          <div className="c-8-13 fade-in" style={{ alignSelf: 'end' }}>
            <p className="lede">
              Submit your goals and clear photos. Dr. Atlanta will personally review your completed intake and email a preliminary quote within 24 hours. You can also request a virtual consultation after submitting.
            </p>
          </div>
        </div>
      </section>

      <section className="wrap" style={{ paddingBottom: 'var(--rhythm)' }}>
        <ConsultPlanner />
      </section>

      <section className="on-ink band">
        <div className="wrap grid">
          <div className="c-1-4">
            <Photo src="/photos/consult-screen.webp" alt="Dr. Ennuson walking a patient through images on screen" width={1024} height={1535} sizes="(max-width: 960px) 100vw, 33vw" />
          </div>
          <div className="c-5-13">
            <h2 style={{ marginBottom: 'clamp(32px, 5vw, 64px)', maxWidth: '12em' }}>What happens next.</h2>
          <ol className="steps" style={{ listStyle: 'none', gridTemplateColumns: 'repeat(2, 1fr)' }}>
            <li className="step">
              <h3>Share your goals</h3>
              <p>Complete the intake and upload clear photos of your smile. Include recent X-rays if you have them.</p>
            </li>
            <li className="step">
              <h3>Choose your next step</h3>
              <p>Choose a photo estimate or request a virtual consultation. Virtual appointments are arranged by email and held through Google Meet.</p>
            </li>
            <li className="step">
              <h3>Your preliminary estimate</h3>
              <p>Dr. Atlanta reviews your completed intake and clear photos and emails a preliminary quote within 24 hours. You can ask about monthly payment options when you reply.</p>
            </li>
            <li className="step">
              <h3>Confirm in person</h3>
              <p>Before treatment, an in-person exam and necessary X-rays confirm the recommendations and final price. We will explain any changes so you can decide how to proceed.</p>
            </li>
          </ol>
          </div>
        </div>
      </section>

      <section className="band" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <div className="grid" style={{ marginBottom: 'clamp(28px, 4vw, 44px)' }}>
            <div className="c-1-6"><h2>When you visit.</h2></div>
            <div className="c-7-13" style={{ alignSelf: 'end' }}><p className="lede">{SITE.practice}, {SITE.street}, {SITE.city}, {SITE.region} {SITE.postal}. A fixed practice in metro Atlanta you can walk into. <Link className="link" href="/contact/">Directions and contact</Link>.</p></div>
          </div>
          <div className="gal3">
            <figure><Photo src="/photos/reception.webp" alt="The reception desk" width={1024} height={1535} ratio="4 / 5" sizes="(max-width: 960px) 100vw, 33vw" /><figcaption>Reception</figcaption></figure>
            <figure><Photo src="/photos/treatment-room.webp" alt="A treatment room" width={1024} height={1535} ratio="4 / 5" sizes="(max-width: 960px) 100vw, 33vw" /><figcaption>Treatment room</figcaption></figure>
            <figure><Photo src="/photos/operatory-light.webp" alt="Dr. Ennuson adjusting the operatory light" width={1024} height={1535} ratio="4 / 5" position="50% 30%" sizes="(max-width: 960px) 100vw, 33vw" /><figcaption>Operatory</figcaption></figure>
          </div>
        </div>
      </section>

      <section className="band" style={{ paddingBottom: 0 }}>
        <div className="wrap grid">
          <div className="c-1-5">
            <h2>For your in-person visit.</h2>
          </div>
          <div className="c-6-13">
            <dl className="facts">
              <div><dt>Bring</dt><dd>Photographs of smiles you like and smiles you do not. They say more than adjectives.</dd></div>
              <div><dt>Bring</dt><dd>Any X-rays from the last year, or ask your dentist to send them. Otherwise they are taken here.</dd></div>
              <div><dt>Bring</dt><dd>Records of previous cosmetic work, especially if it was done abroad or you are unhappy with it.</dd></div>
              <div><dt>Leave with</dt><dd>An honest answer on whether veneers suit you, and what else would work if they do not.</dd></div>
              <div><dt>Leave with</dt><dd>A shade direction chosen against your skin in daylight.</dd></div>
              <div><dt>Leave with</dt><dd>The number of visits and the full price in writing. Full-arch is $8,999, the same as <Link className="link" href="/pricing/">the pricing page</Link>.</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap grid">
          <div className="c-1-5">
            <h2>“What if I hate them?”</h2>
            <aside className="aside">
              <p className="aside-k">Ready to start?</p>
              <a className="link" href="/consultation/#book">Get a 24-hour quote</a>
              <p className="small">No obligation, no pressure, real answers.</p>
            </aside>
          </div>
          <div className="c-6-13">
            <p className="lede">
              You will never wake up to a permanent smile you have not seen. The design is proven twice before porcelain exists: a wax-up
              you can hold, then trial temporaries you wear in real life — work, photographs, dinner. Only a design you have approved is made.
            </p>
            <p style={{ marginTop: 20 }}>If the trial is not right, we change the design. That is not a favor. It is the process.</p>
          </div>
        </div>
      </section>
      <PageNote />
    </>
  );
}
