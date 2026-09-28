/*
  Footer.tsx
  ----------
  Site footer with:
  - Logo + tagline
  - Quick links
  - Menu preview links
  - Newsletter email input
  - Copyright bar
*/

import './Footer.css';

const QUICK_LINKS = [
  { label: 'Home',     href: '#hero'    },
  { label: 'About Us', href: '#about'  },
  { label: 'Dishes',  href: '#dishes'  },
  { label: 'Menu',    href: '#menu'    },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

const MENU_LINKS = [
  { label: 'Starters',      href: '#menu' },
  { label: 'Main Course',   href: '#menu' },
  { label: 'Breads & Rice', href: '#menu' },
  { label: 'Desserts',      href: '#menu' },
  { label: 'Drinks',        href: '#menu' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">

        {/* ── Top row ── */}
        <div className="footer__top">

          {/* Brand column */}
          <div className="footer__brand">
            <a href="#hero" className="footer__logo">
              <span>🌶</span>
              <span className="footer__logo-text">Spice <em>Garden</em></span>
            </a>
            <p className="footer__tagline">
              Bringing the authentic flavours of India to your table since 1999.
              Every dish crafted with love, tradition, and the finest spices.
            </p>
            <div className="footer__socials">
              <a href="#" aria-label="Instagram" className="footer__social">📷</a>
              <a href="#" aria-label="Facebook"  className="footer__social">👍</a>
              <a href="#" aria-label="Twitter"   className="footer__social">🐦</a>
              <a href="#" aria-label="YouTube"   className="footer__social">▶️</a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__col">
            <h4 className="footer__col-title">Quick Links</h4>
            <ul className="footer__links">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="footer__link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Menu */}
          <div className="footer__col">
            <h4 className="footer__col-title">Our Menu</h4>
            <ul className="footer__links">
              {MENU_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="footer__link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer__col">
            <h4 className="footer__col-title">Stay Updated</h4>
            <p className="footer__newsletter-text">
              Subscribe for seasonal menus, exclusive offers, and event invites.
            </p>
            <form
              className="footer__newsletter"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Your email address"
                aria-label="Email for newsletter"
                required
              />
              <button type="submit" className="btn btn-primary footer__newsletter-btn">
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Divider */}
        <div className="footer__divider" />

        {/* ── Bottom bar ── */}
        <div className="footer__bottom">
          <p className="footer__copy">
            © {year} Spice Garden. All rights reserved.
          </p>
          <div className="footer__bottom-links">
            <a href="#" className="footer__bottom-link">Privacy Policy</a>
            <a href="#" className="footer__bottom-link">Terms of Service</a>
            <a href="#" className="footer__bottom-link">Cookie Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
