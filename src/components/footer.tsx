import Link from 'next/link';
import { navigation, site } from '@/lib/site';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <p className="eyebrow">{site.name}</p>
          <p>{site.description}</p>
        </div>

        <div>
          <h2>Visit</h2>
          <ul className="stack-list">
            <li>{site.address}</li>
            <li>
              <a href={`tel:${site.phone.replace(/\s+/g, '')}`}>{site.phone}</a>
            </li>
            <li>
              <a href="mailto:stay@hotelaureline.co">stay@hotelaureline.co</a>
            </li>
          </ul>
        </div>

        <div>
          <h2>Explore</h2>
          <ul className="stack-list">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
