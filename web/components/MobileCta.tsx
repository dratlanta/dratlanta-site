import Link from 'next/link';
export default function MobileCta() {
  return (
    <div className="mcta">
      <Link className="call" href="/pricing/">Monthly options</Link>
      <Link className="book" href="/consultation/#book">Get a 24-hour quote</Link>
    </div>
  );
}
  
