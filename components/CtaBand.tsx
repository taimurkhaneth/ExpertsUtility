import { ArrowRight, Phone } from 'lucide-react';
import styles from './CtaBand.module.css';

export default function CtaBand() {
  return (
    <div className={`${styles.band} fade-up`}>
      <div className={styles.inner}>
        <div className={styles.text}>
          <h2 className={styles.title}>
            Ready to Reduce Costs and Improve Your Business Operations?
          </h2>
          <p className={styles.sub}>
            Get your free, no-obligation quote today. Our consultants are available Monday to
            Friday, 9am–6pm. We typically respond within two hours.
          </p>
        </div>
        <div className={styles.actions}>
          <a href="#contact" className={`btn btn-dark ${styles.btn}`}>
            Get Free Quote <ArrowRight size={15} />
          </a>
          <a href="tel:+448000000000" className={`btn btn-ghost-dark ${styles.btn}`}>
            <Phone size={15} /> Call Now
          </a>
        </div>
      </div>
    </div>
  );
}
