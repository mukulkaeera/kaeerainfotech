// components/ContactCTA.js
import Link from 'next/link';
import styles from './index.module.scss';

const ContactCTA = () => {
  return (
    <div className={styles.cta}>
      <h2>Want to Know More?</h2>
      <p>Feel free to reach out to us for any inquiries.</p>
      <Link href="/contact" className={styles.ctaButton}>Contact Us</Link>
    </div>
  );
};

export default ContactCTA;
