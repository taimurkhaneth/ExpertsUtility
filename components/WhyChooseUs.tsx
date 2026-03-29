import { Zap, Network, Settings, Eye } from 'lucide-react';
import styles from './WhyChooseUs.module.css';

const features = [
  {
    icon: <Zap size={20} />,
    title: 'Reduce Energy Costs by Up to 40%',
    body: 'We compare all leading UK energy suppliers and negotiate on your behalf to secure the most competitive tariffs available in the market.',
  },
  {
    icon: <Network size={20} />,
    title: 'Trusted Network of UK Suppliers',
    body: 'Access our vetted network of financial providers, energy suppliers, and payment technology partners — relationships built over years of industry expertise.',
  },
  {
    icon: <Settings size={20} />,
    title: 'Fast Approvals & Seamless Process',
    body: 'Our streamlined, hassle-free process ensures rapid approvals and smooth transitions so your business operations are never disrupted.',
  },
  {
    icon: <Eye size={20} />,
    title: 'Fully Transparent — No Hidden Charges',
    body: 'Clear pricing, honest advice, and no surprise fees. We believe in building long-term relationships founded on complete transparency.',
  },
];

const breakdown = [
  { label: 'Electricity & Gas', value: '£5,200', saving: '38% saved', pct: 78 },
  { label: 'Water Contracts', value: '£1,800', saving: '29% saved', pct: 58 },
  { label: 'Payment Solutions', value: '£2,600', saving: '22% saved', pct: 44 },
  { label: 'Business Finance', value: '£2,800', saving: 'Optimised', pct: 56 },
];

export default function WhyChooseUs() {
  return (
    <section className={`${styles.section} section`} id="why">
      <div className={styles.grid}>
        {/* Left */}
        <div className="fade-up">
          <div className="section-tag">Why Choose Us</div>
          <h2 className="section-title">
            A Smarter Way to <em>Run Your Business</em>
          </h2>
          <p className="section-body">
            We take the complexity out of business procurement. From energy to finance, our
            consultants leverage deep market knowledge and supplier relationships to deliver
            real, measurable savings for your business.
          </p>

          <div className={styles.features}>
            {features.map((f, i) => (
              <div key={i} className={styles.featureItem}>
                <div className={styles.featureIcon}>{f.icon}</div>
                <div className={styles.featureText}>
                  <h4>{f.title}</h4>
                  <p>{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — savings card */}
        <div className={`${styles.visual} fade-up`}>
          <div className={styles.card}>
            <div className={styles.cardAccent} />
            <div className={styles.savingsDisplay}>
              <div className={styles.savingsLabel}>Estimated Annual Savings</div>
              <div className={styles.savingsAmount}>£12,400</div>
              <div className={styles.savingsSub}>for a typical mid-size UK business</div>
            </div>
            <div className={styles.breakdown}>
              {breakdown.map((b, i) => (
                <div key={i} className={styles.breakdownRow}>
                  <div className={styles.breakdownMeta}>
                    <span className={styles.breakdownLabel}>{b.label}</span>
                    <div className={styles.breakdownRight}>
                      <span className={styles.breakdownValue}>{b.value}</span>
                      &nbsp;
                      <span className={styles.breakdownSaving}>▲ {b.saving}</span>
                    </div>
                  </div>
                  <div className={styles.progressBar}>
                    <div className={styles.progressFill} style={{ width: `${b.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
