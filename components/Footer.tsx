import Link from 'next/link';
import { Zap, Phone, Mail, Clock, MapPin, Share2, Globe, MessageCircle, Users } from 'lucide-react';
import styles from './Footer.module.css';

const services = [
  'Electricity & Gas Contracts',
  'Water Contracts',
  'Payment Solutions',
  'Business Finance',
];

const company = [
  { label: 'About Us', href: '#' },
  { label: 'Our Team', href: '#' },
  { label: 'Case Studies', href: '#' },
  { label: 'Contact', href: '#contact' },
];

const legal = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Cookie Policy', href: '#' },
  { label: 'Complaints Procedure', href: '#' },
];

const socials = [
  { href: '#', label: 'Globe', icon: <Globe size={16} /> },
  { href: '#', label: 'Share', icon: <Share2 size={16} /> },
  { href: '#', label: 'Message', icon: <MessageCircle size={16} /> },
  { href: '#', label: 'Community', icon: <Users size={16} /> },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <Link href="#home" className={styles.logo}>
            <Zap size={18} className={styles.logoIcon} />
            <span>Experts<em>Utility</em></span>
          </Link>
          <p className={styles.brandText}>
            Expert business consultancy helping UK companies reduce overheads, access funding,
            and streamline operations — all under one roof.
          </p>
          <div className={styles.socials}>
            {socials.map((s) => (
              <a key={s.label} href={s.href} aria-label={s.label} className={styles.social}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className={styles.col}>
          <h5 className={styles.colTitle}>Services</h5>
          <ul>
            {services.map((s) => (
              <li key={s}><a href="#services" className={styles.colLink}>{s}</a></li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <h5 className={styles.colTitle}>Company</h5>
          <ul>
            {company.map((c) => (
              <li key={c.label}><a href={c.href} className={styles.colLink}>{c.label}</a></li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <h5 className={styles.colTitle}>Legal</h5>
          <ul>
            {legal.map((l) => (
              <li key={l.label}><a href={l.href} className={styles.colLink}>{l.label}</a></li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.contact}>
        <div className={styles.contactItem}>
          <Phone size={14} className={styles.contactIcon} />
          <span>0800 000 0000</span>
        </div>
        <div className={styles.contactItem}>
          <Mail size={14} className={styles.contactIcon} />
          <span>hello@expertsutility.com</span>
        </div>
        <div className={styles.contactItem}>
          <Clock size={14} className={styles.contactIcon} />
          <span>Mon – Fri, 9am – 6pm</span>
        </div>
        <div className={styles.contactItem}>
          <MapPin size={14} className={styles.contactIcon} />
          <span>London, United Kingdom</span>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} ExpertsUtility Ltd. All rights reserved. Registered in England &amp; Wales.</span>
        <div className={styles.bottomLinks}>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Cookies</a>
        </div>
      </div>
    </footer>
  );
}
