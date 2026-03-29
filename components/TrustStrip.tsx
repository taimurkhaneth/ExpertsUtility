import { ShieldCheck, Award, Star, Users, Clock } from 'lucide-react';
import styles from './TrustStrip.module.css';

const items = [
  { icon: <ShieldCheck size={15} />, label: 'FCA Regulated Partners' },
  { icon: <Award size={15} />, label: 'Ofgem Accredited' },
  { icon: <ShieldCheck size={15} />, label: 'No Hidden Fees' },
  { icon: <Users size={15} />, label: 'UK-Based Consultants' },
  { icon: <Star size={15} />, label: '5-Star Rated Service' },
];

export default function TrustStrip() {
  return (
    <div className={`${styles.strip} fade-up`}>
      <div className={styles.inner}>
        {items.map((item, i) => (
          <div key={i} className={styles.item}>
            <span className={styles.icon}>{item.icon}</span>
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}
