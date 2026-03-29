import { Star } from 'lucide-react';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    initials: 'JH',
    name: 'James Hartley',
    role: 'Managing Director, Hartley Engineering Ltd',
    text: 'ExpertsUtility completely transformed our energy procurement strategy. Within three months, we\'d reduced our combined electricity and gas spend by over a third. The process was effortless from our side — they handled absolutely everything.',
  },
  {
    initials: 'SR',
    name: 'Sarah Rahman',
    role: 'Operations Manager, Rahman Hospitality Group',
    text: 'I had no idea we could switch our business water supplier. After ExpertsUtility reviewed our account, we saved nearly £1,400 in the first year alone. The consultant was incredibly professional and kept us informed throughout.',
  },
  {
    initials: 'DK',
    name: 'David Kim',
    role: 'Founder, Kim Retail Solutions',
    text: 'The business finance team secured us a £150k growth loan at a rate our bank simply couldn\'t match. Fast, straightforward, and genuinely tailored to our situation. We\'ll be returning clients for all our future requirements.',
  },
];

export default function Testimonials() {
  return (
    <section className={styles.section} id="testimonials">
      <div className={styles.inner}>
        <div className={`${styles.header} fade-up`}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>Client Testimonials</div>
          <h2 className="section-title">
            Trusted by Businesses <em>Across the UK</em>
          </h2>
        </div>

        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <div key={i} className={`${styles.card} fade-up`}>
              <div className={styles.stars}>
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={13} fill="currentColor" />
                ))}
              </div>
              <span className={styles.quote}>&ldquo;</span>
              <p className={styles.text}>{t.text}</p>
              <div className={styles.author}>
                <div className={styles.avatar}>{t.initials}</div>
                <div>
                  <div className={styles.name}>{t.name}</div>
                  <div className={styles.role}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
