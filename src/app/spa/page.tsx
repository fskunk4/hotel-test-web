import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/page-hero';
import { wellnessPillars } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Spa & Wellness',
  description: 'Explore spa rituals, recovery spaces, and wellness facilities at Hotel Aureline.',
};

export default function SpaPage() {
  return (
    <>
      <PageHero
        eyebrow="Spa & wellness"
        title="A quiet floor dedicated to recovery, warmth, and long exhale energy."
        intro="The wellness experience is included for resident guests and designed to feel spacious, grounded, and useful rather than busy or over-programmed."
      />

      <section className="shell section-grid">
        <div className="card accent-card">
          <h2>Included spaces</h2>
          <ul className="check-list compact-list">
            {wellnessPillars.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="section-copy">
          <p className="eyebrow">Treatments</p>
          <h2>Massage, skin therapy, and guided recovery tailored to your stay.</h2>
          <p>
            Therapists adapt pressure, pace, and product selection to travel fatigue, post-training recovery, or simple switch-off mode.
          </p>
          <Link className="text-link" href="/reservations">
            Add wellness time to your booking
          </Link>
        </div>
      </section>

      <section className="shell card-grid spacious-grid">
        {[
          ['Arrival Reset', 'A 45-minute massage and herbal steam sequence designed for travellers.'],
          ['Deep Rest Ritual', 'Ninety minutes of bodywork, warm oils, and guided decompression.'],
          ['Morning Recovery', 'Mobility, infrared warmth, and a nutrient-focused breakfast pairing.'],
        ].map(([title, text]) => (
          <article className="soft-card tall-card" key={title}>
            <p className="card-kicker">Wellness menu</p>
            <h2>{title}</h2>
            <p>{text}</p>
          </article>
        ))}
      </section>
    </>
  );
}
