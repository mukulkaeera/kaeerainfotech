// Navbar.js
import React from 'react';
import styles from './index.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}></div>
            <div className={styles.contact}>
                <a href="mailto:info@kaeerainfotechnology.in" className={styles.icon}>
                    <FontAwesomeIcon icon={faEnvelope} className={styles.iconImg} /> info@kaeerainfotechnology.in
                </a>
                <a href="tel:+918595646886" className={styles.icon}>
                    <FontAwesomeIcon icon={faPhone} className={styles.iconImg} /> +918595646886
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
