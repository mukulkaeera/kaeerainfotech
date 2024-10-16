import React from 'react';
import styles from './index.module.scss';
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.contact}>
                <h4 className={styles.footerHeading}>Contact Us</h4>
                <p className={styles.contactDetail}>  <a href="tel:+918595646886" style={{ textDecoration: "none", color: "white" }}>  +91 8595646886</a></p>
                <p className={styles.contactDetail}> <a href="mailto:info@kaeerainfotechnology.in" style={{ textDecoration: "none", color: "white" }}> info@kaeerainfotechnology.in</a></p>
            </div>
            <div className={styles.links}>
                <h4 className={styles.footerHeading}> Quick Links</h4>
                <ul className={styles.linkList}>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/services">Services</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/contact-us">Contact us</Link></li>
                </ul>
            </div>
            <div className={styles.description}>
                <h4 className={styles.footerHeading}>About Us</h4>
                <p className={styles.aboutText}>Kaeera Infotechnology is a forward-thinking IT company specializing in innovative technology solutions. We empower businesses with cutting-edge software, cloud services, and data analytics to drive growth and enhance efficiency.</p>
                <Link href="/about" className={styles.readMore}>Read more</Link>
            </div>
        </footer>
    );
};

export default Footer;
