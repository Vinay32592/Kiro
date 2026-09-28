/*
  Navbar.tsx
  ----------
  Sticky navigation bar with:
  - Logo on the left
  - Nav links in the center (desktop)
  - "Reserve a Table" CTA button on the right
  - Hamburger menu for mobile
  - Background becomes solid when user scrolls down
*/

import { useState, useEffect } from 'react';
import './Navbar.css';

// Each nav link needs a label and the section id it scrolls to
interface NavLink {
  label: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { label: 'Home',     href: '#hero'    },
  { label: 'About',   href: '#about'   },
  { label: 'Dishes',  href: '#dishes'  },
  { label: 'Menu',    href: '#menu'    },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Hours',   href: '#hours'   },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  // Track whether the page has been scrolled (to change navbar bg)
  const [scrolled, setScrolled] = useState(false);
  // Track whether the mobile menu is open
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Listen for scroll events and flip the `scrolled` flag
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    // Clean up the listener when this component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close the mobile menu whenever a link is clicked
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">

        {/* ── Logo ── */}
        <a href="#hero" className="navbar__logo" onClick={handleLinkClick}>
          <span className="navbar__logo-icon">🌶</span>
          <span className="navbar__logo-text">
            Spice <em>Garden</em>
          </span>
        </a>

        {/* ── Desktop Nav Links ── */}
        <ul className="navbar__links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="navbar__link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* ── CTA Button (desktop) ── */}
        <a href="#contact" className="btn btn-primary navbar__cta">
          Reserve a Table
        </a>

        {/* ── Hamburger Button (mobile only) ── */}
        <button
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {/* Three bars that animate into an X */}
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* ── Mobile Dropdown Menu ── */}
      <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}>
        <ul>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="navbar__mobile-link" onClick={handleLinkClick}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="btn btn-primary navbar__mobile-cta" onClick={handleLinkClick}>
              Reserve a Table
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
