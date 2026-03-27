import Link from 'next/link';
import { navigation, site } from '@/lib/site';

export function Header() {
  return (
    <header className="site-header">
      <div className="shell nav-wrap">
        <Link href="/" className="brand">
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
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
