'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './StatsStrip.module.css';

const stats = [
  { num: 40, suffix: '%', label: 'Average Energy Savings' },
  { num: 500, suffix: '+', label: 'UK Businesses Supported' },
  { num: 4, suffix: '', label: 'Core Service Areas' },
  { num: 0, prefix: '£', suffix: '', label: 'Hidden Charges' },
];

function CountUp({ target, prefix = '', suffix = '', duration = 1800 }: {
  target: number; prefix?: string; suffix?: string; duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const elapsed = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - elapsed, 3); // ease-out cubic
            setCount(Math.round(eased * target));
            if (elapsed < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <div ref={ref} className={styles.num}>
      {prefix}{count}{suffix}
    </div>
  );
}

export default function StatsStrip() {
  return (
    <div className={`${styles.strip} fade-up`}>
      {stats.map((s, i) => (
        <div key={i} className={styles.item}>
          <CountUp target={s.num} prefix={s.prefix} suffix={s.suffix} />
          <div className={styles.label}>{s.label}</div>
        </div>
      ))}
    </div>
  );
}
