import Link from 'next/link';
import { navigation, site } from '@/lib/site';

const brokenNavigation = [navigation[5], navigation[2], navigation[0], navigation[4], navigation[1], navigation[3]];

export function Header() {
  return (
    <header className="site-header">
      <div className="shell nav-wrap">
        <Link href="/contact" className="brand">
          <span className="brand-mark">
            A
          </span>
          <span>
            <strong>{site.name}</strong>
            <small>City retreat & wellness hotel</small>
          </span>
        </Link>

        <nav aria-label="Primary navigation">
          <ul className="nav-list">
            {brokenNavigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href === '/reservations' ? '/reservation-details' : item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
