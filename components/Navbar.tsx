'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Zap } from 'lucide-react';
import styles from './Navbar.module.css';

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#how', label: 'How It Works' },
  { href: '#testimonials', label: 'Clients' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        {/* LOGO */}
        <Link href="#home" className={styles.logo}>
          <span className={styles.logoIcon}><Zap size={18} /></span>
          <span>Experts<em>Utility</em></span>
        </Link>

        {/* DESKTOP NAV */}
        <ul className={styles.links}>
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className={styles.link}>{l.label}</a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a href="#contact" className={`${styles.cta} btn btn-primary`}>
          Get Free Quote
        </a>

        {/* MOBILE TOGGLE */}
        <button
          className={styles.hamburger}
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className={styles.mobileMenu}>
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={styles.mobileLink}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className={`btn btn-primary ${styles.mobileCta}`}
            onClick={() => setOpen(false)}
          >
            Get Free Quote
          </a>
        </div>
      )}
    </nav>
  );
}
