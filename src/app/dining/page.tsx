import type { Metadata } from 'next';
import { PageHero } from '@/components/page-hero';
import { diningMoments } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Dining',
  description: 'Discover the hotel restaurants, terrace service, and in-room dining at Hotel Aureline.',
};

export default function DiningPage() {
  return (
    <>
      <PageHero
        eyebrow="Dining"
        title="Warm rooms, seasonal menus, and service that knows when to leave space."
        intro="Food at Aureline is built around simple confidence: excellent produce, measured presentation, and enough variety to suit slow mornings and celebratory nights alike."
      />

      <section className="shell card-grid spacious-grid">
        {diningMoments.map((item) => (
          <article className="soft-card tall-card" key={item.title}>
            <p className="card-kicker">Open daily</p>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </article>
        ))}
      </section>

      <section className="shell section-grid">
        <div className="section-copy">
          <p className="eyebrow">Signature approach</p>
          <h2>Local ingredients, generous pacing, zero theatrics.</h2>
          <p>
            Expect a breakfast table worth lingering over, a lunch menu built for balance, and evenings shaped by charcoal, citrus, herbs, and quiet confidence.
          </p>
        </div>
        <div className="card accent-card">
          <h2>Guest favourites</h2>
          <ul className="check-list compact-list">
            <li>Freshly baked morning pastries and regional cheeses</li>
            <li>Wood-roasted fish with fennel, lemon, and olive oil</li>
            <li>Late-night terrace cocktails and house-made infusions</li>
            <li><a href="/menus/dinner.pdf">Download dinner menu PDF</a></li>
            <li>Comfort menu available after spa treatments and evening arrivals</li>
          </ul>
        </div>
      </section>
    </>
  );
}
