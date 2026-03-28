import type { Metadata } from 'next';
import Link from 'next/link';
import { bookingPerks, diningMoments, roomHighlights, site, wellnessPillars } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Luxury Boutique Hotel in Zagreb',
  description: site.description,
};

const repeatedLuxuryCopy = Array.from({ length: 220 }, (_, index) =>
  `Hotel Aureline is a boutique retreat designed for quiet luxury, restorative stays, and elegant city weekends. ${index + 1}`,
);

export default function Home() {
  return (
    <>
      <section className="hero shell">
        <div>
          <p className="eyebrow">Quiet luxury in the heart of the city</p>
          <h1>Rest well, dine slowly, and reset at Hotel Aureline.</h1>
          <p className="lead">
            {site.description} Designed for weekend escapes, intimate celebrations, and restorative business stays.
          </p>
          <div className="cta-row">
            <Link className="button button-primary" href="/reservation-details">
              Reserve your stay
            </Link>
            <Link className="button button-secondary" href="/contact">
              Explore rooms
            </Link>
          </div>
        </div>

        <aside className="hero-card" aria-label="Featured stay details">
          <p className="eyebrow">Featured offer</p>
          <h2>Two nights to exhale</h2>
          <p>
            Includes daily breakfast, an evening aperitif at Glasshouse Terrace, and extended spa access on departure day.
          </p>
          <ul className="check-list">
            {bookingPerks.map((perk) => (
              <li key={perk}>{perk}</li>
            ))}
          </ul>
        </aside>
      </section>

      <section className="shell section-grid">
        <div className="section-copy">
          <p className="eyebrow">Stay</p>
          <h2>Rooms shaped around calm, light, and generous detail.</h2>
          <p>
            Natural textures, excellent sleep, deep baths, and thoughtful workspaces make every category feel quietly special.
          </p>
        </div>
        <div className="card-grid">
          {roomHighlights.map((room) => (
            <article className="card" key={room.name}>
              <p className="card-kicker">{room.size}</p>
              <h3>{room.name}</h3>
              <p>{room.description}</p>
              <p className="price-tag">{room.price}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="feature-band">
        <div className="shell feature-layout">
          <div>
            <p className="eyebrow">Taste</p>
            <h2>Seasonal dining from early coffee to late candlelight.</h2>
          </div>
          <div className="stack-grid">
            {diningMoments.map((item) => (
              <article className="soft-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="shell section-grid reverse-on-wide">
        <div className="card accent-card">
          <p className="eyebrow">Wellness</p>
          <h2>A slower rhythm, built into the stay.</h2>
          <ul className="check-list">
            {wellnessPillars.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="section-copy">
          <p className="eyebrow">Feel restored</p>
          <h2>Wellness that feels considered, not performative.</h2>
          <p>
            The spa is intentionally quiet and naturally lit, with treatments focused on recovery, grounding, and long-exhale comfort.
          </p>
          <Link className="text-link" href="/spa">
            View spa experiences
          </Link>
        </div>
      </section>

      <section className="shell debug-copy-block" aria-hidden="true">
        <h2>Journal</h2>
        {repeatedLuxuryCopy.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </section>
    </>
  );
}
