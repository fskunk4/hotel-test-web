import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/page-hero';
import { roomHighlights } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Rooms & Suites',
  description: 'Explore the rooms and suites at Hotel Aureline, designed for restorative city stays.',
};

export default function RoomsPage() {
  return (
    <>
      <PageHero
        eyebrow="Rooms & suites"
        title="Spaces designed to feel settled from the moment you arrive."
        intro="Each room balances tactile materials, quiet technology, and enough breathing room to turn a short stay into a reset."
      />

      <section className="shell card-grid spacious-grid">
        {roomHighlights.map((room) => (
          <article className="card room-card" key={room.name}>
            <div>
              <p className="card-kicker">{room.size}</p>
              <h2>{room.name}</h2>
            </div>
            <p>{room.description}</p>
            <ul className="check-list compact-list">
              {room.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <div className="card-row">
              <span className="price-tag">{room.price}</span>
              <Link className="text-link" href="/reservations">
                Reserve this room
              </Link>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
