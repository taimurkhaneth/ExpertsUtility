'use client';

import { useState } from 'react';
import { Phone, Mail, Clock, MapPin, Send } from 'lucide-react';
import styles from './Contact.module.css';

const contactItems = [
  { icon: <Phone size={17} />, label: 'Phone', value: '0800 000 0000' },
  { icon: <Mail size={17} />, label: 'Email', value: 'hello@expertsutility.com' },
  { icon: <Clock size={17} />, label: 'Office Hours', value: 'Monday – Friday, 9:00am – 6:00pm' },
  { icon: <MapPin size={17} />, label: 'Registered Office', value: 'London, United Kingdom' },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className={styles.section} id="contact">
      <div className={styles.grid}>
        {/* Left info */}
        <div className={`${styles.info} fade-up`}>
          <div className="section-tag">Get in Touch</div>
          <h2 className="section-title">
            Start Saving Today — <em>It&apos;s Free</em>
          </h2>
          <p className="section-body">
            Complete the form and a dedicated consultant will contact you within two business
            hours to begin your free assessment. There is no obligation, no fees, and no
            pressure.
          </p>
          <div className={styles.contactDetails}>
            {contactItems.map((c, i) => (
              <div key={i} className={styles.contactItem}>
                <div className={styles.contactIcon}>{c.icon}</div>
                <div className={styles.contactText}>
                  <p className={styles.contactLabel}>{c.label}</p>
                  <p className={styles.contactValue}>{c.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right form */}
        <div className={`${styles.formWrap} fade-up`}>
          <div className={styles.formAccent} />
          <h3 className={styles.formTitle}>Request Your Free Quote</h3>
          <p className={styles.formSub}>We&apos;ll respond within 2 business hours</p>

          {submitted ? (
            <div className={styles.success}>
              <Send size={32} className={styles.successIcon} />
              <h4>Thank you!</h4>
              <p>Your request has been received. A consultant will be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.row}>
                <div className={styles.group}>
                  <label>First Name</label>
                  <input type="text" placeholder="John" required />
                </div>
                <div className={styles.group}>
                  <label>Last Name</label>
                  <input type="text" placeholder="Smith" required />
                </div>
              </div>

              <div className={styles.group}>
                <label>Business Name</label>
                <input type="text" placeholder="Your Company Ltd" required />
              </div>

              <div className={styles.row}>
                <div className={styles.group}>
                  <label>Phone Number</label>
                  <input type="tel" placeholder="07700 000000" required />
                </div>
                <div className={styles.group}>
                  <label>Email Address</label>
                  <input type="email" placeholder="john@company.co.uk" required />
                </div>
              </div>

              <div className={styles.group}>
                <label>Service Required</label>
                <select required>
                  <option value="">Select a service...</option>
                  <option>Electricity &amp; Gas Contracts</option>
                  <option>Water Contracts</option>
                  <option>Card Machines &amp; Payment Solutions</option>
                  <option>Business Finance</option>
                  <option>Multiple Services</option>
                </select>
              </div>

              <div className={styles.group}>
                <label>Annual Spend (Approximate)</label>
                <select>
                  <option value="">Select a range...</option>
                  <option>Under £5,000</option>
                  <option>£5,000 – £25,000</option>
                  <option>£25,000 – £100,000</option>
                  <option>Over £100,000</option>
                </select>
              </div>

              <div className={styles.group}>
                <label>Additional Notes</label>
                <textarea placeholder="Tell us briefly about your requirements..." />
              </div>

              <button type="submit" className={styles.submit}>
                Submit Free Quote Request <Send size={15} />
              </button>

              <p className={styles.disclaimer}>
                By submitting this form you agree to be contacted by an ExpertsUtility
                consultant. We will never share your information with third parties.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
