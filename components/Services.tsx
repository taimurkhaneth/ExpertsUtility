import { Zap, Droplets, CreditCard, TrendingUp, ArrowRight } from 'lucide-react';
import styles from './Services.module.css';

const services = [
  {
    num: '01',
    Icon: Zap,
    title: 'Electricity & Gas Contracts',
    body: 'We conduct a comprehensive market analysis across all leading UK energy suppliers to secure fixed, flexible, or hybrid contracts tailored precisely to your business\'s consumption profile and risk appetite.',
    features: [
      'Full supplier market comparison',
      'Fixed & flexible contract options',
      'Ongoing contract management',
      'Renewal alerts and re-procurement',
      'Smart meter & AMR support',
    ],
  },
  {
    num: '02',
    Icon: Droplets,
    title: 'Water Contracts',
    body: 'Since the UK water market deregulated, businesses can now switch water supplier. We identify the most competitive rates and manage the transition with minimal disruption to your daily operations.',
    features: [
      'Business water market comparison',
      'Sewerage and drainage review',
      'Bill validation and dispute resolution',
      'Water efficiency audits',
      'Seamless switching management',
    ],
  },
  {
    num: '03',
    Icon: CreditCard,
    title: 'Card Machines & Payment Solutions',
    body: 'Modern payment infrastructure shouldn\'t cost a fortune. We implement reliable, fully integrated payment systems — from countertop terminals to online gateways — with transparent, competitive transaction rates.',
    features: [
      'Countertop, portable & mobile terminals',
      'Online payment gateway integration',
      'POS system advisory',
      'Competitive transaction rate negotiation',
      '24/7 technical support included',
    ],
  },
  {
    num: '04',
    Icon: TrendingUp,
    title: 'Business Finance',
    body: 'Whether you need working capital, equipment finance, a commercial mortgage, or a growth loan, we connect you with the right funding solution from our panel of trusted UK lenders and financial institutions.',
    features: [
      'Business loans & working capital',
      'Invoice & asset finance',
      'Commercial property mortgages',
      'Merchant cash advances',
      'Fast decision, minimal paperwork',
    ],
  },
];

export default function Services() {
  return (
    <section className={styles.section} id="services">
      <div className={styles.header}>
        <div className="section-tag" style={{ justifyContent: 'center' }}>Our Services</div>
        <h2 className="section-title" style={{ textAlign: 'center' }}>
          Everything Your Business <em>Needs to Thrive</em>
        </h2>
        <p className="section-body" style={{ margin: '0 auto', textAlign: 'center' }}>
          Four specialised service areas, one dedicated consultancy. We handle the procurement
          complexity so you can focus on running your business.
        </p>
      </div>

      <div className={styles.grid}>
        {services.map((s) => {
          const { Icon } = s;
          return (
            <div key={s.num} className={`${styles.card} fade-up`}>
              <div className={styles.cardNum}>{s.num}</div>
              <div className={styles.iconWrap}>
                <Icon size={22} />
              </div>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardBody}>{s.body}</p>
              <ul className={styles.features}>
                {s.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <a href="#contact" className={styles.link}>
                Get a Quote <ArrowRight size={14} />
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
