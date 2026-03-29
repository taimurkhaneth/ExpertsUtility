import { FileText, Search, CheckSquare, Cog } from 'lucide-react';
import styles from './HowItWorks.module.css';

const steps = [
  {
    num: '1',
    Icon: FileText,
    title: 'Submit Your Enquiry',
    body: 'Complete our short form or call us directly. A dedicated consultant will be assigned to your account within one business day.',
  },
  {
    num: '2',
    Icon: Search,
    title: 'We Assess & Compare',
    body: 'We review your current contracts, consumption data, and business requirements, then run a comprehensive comparison across the full market.',
  },
  {
    num: '3',
    Icon: CheckSquare,
    title: 'You Choose Your Solution',
    body: 'We present you with a clear, jargon-free shortlist of the best options available. You make the final decision — no pressure, no obligation.',
  },
  {
    num: '4',
    Icon: Cog,
    title: 'We Manage Everything',
    body: 'From paperwork and supplier liaison to setup and go-live confirmation, we handle the entire transition process on your behalf.',
  },
];

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how">
      <div className={styles.inner}>
        <div className={`${styles.header} fade-up`}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>How It Works</div>
          <h2 className="section-title">
            Simple. Transparent. <em>Effective.</em>
          </h2>
          <p className="section-body" style={{ margin: '0 auto', textAlign: 'center' }}>
            Our end-to-end process is designed to be completely frictionless. We do the heavy
            lifting — you reap the rewards.
          </p>
        </div>

        <div className={styles.steps}>
          <div className={styles.connector} />
          {steps.map((s, i) => {
            const { Icon } = s;
            return (
              <div key={i} className={`${styles.step} fade-up`}>
                <div className={styles.stepTop}>
                  <div className={styles.circle}>
                    <span>{s.num}</span>
                  </div>
                </div>
                <div className={styles.stepIcon}>
                  <Icon size={18} />
                </div>
                <h4 className={styles.stepTitle}>{s.title}</h4>
                <p className={styles.stepBody}>{s.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
