'use client';

import { ArrowRight, Phone, ChevronDown } from 'lucide-react';
import FloatingIcons from './FloatingIcons';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={`${styles.hero} grid-pattern`} id="home">
      {/* Gradient background */}
      <div className={styles.bg} />

      {/* Floating icon canvas */}
      <FloatingIcons />

      {/* Animated ring decorations */}
      <div className={styles.ring1} />
      <div className={styles.ring2} />
      <div className={styles.ring3} />

      {/* Glow orbs */}
      <div className={styles.orb1} />
      <div className={styles.orb2} />

      <div className={styles.content}>
        <div className={styles.eyebrow}>
          <span className={styles.line} />
          UK Business Consultancy
          <span className={styles.line} />
        </div>

        <h1 className={styles.h1}>
          Save Your Business Money on{' '}
          <em className={styles.em}>Energy, Finance</em>
          {' & Payment Solutions'}
        </h1>

        <p className={styles.sub}>
          We support UK businesses in reducing electricity and gas costs, optimising water
          contracts, securing business finance, and implementing efficient payment solutions —
          all through one trusted consultancy.
        </p>

        <div className={styles.actions}>
          <a href="#contact" className={`${styles.btnPrimary} btn btn-primary`}>
            Get a Free Quote <ArrowRight size={16} />
          </a>
          <a href="tel:+448000000000" className={`btn btn-outline ${styles.btnPhone}`}>
            <Phone size={16} /> Speak to an Expert
          </a>
        </div>

        {/* Scroll cue */}
        <div className={styles.scrollCue}>
          <span>Scroll to explore</span>
          <ChevronDown size={16} className={styles.chevron} />
        </div>
      </div>
    </section>
  );
}
