import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faCheckCircle, faMobileAlt, faShieldAlt, faLaptopCode, faUserShield } from '@fortawesome/free-solid-svg-icons';
import styles from './index.module.scss';

const WebDevelopment = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>WHY ENGAGE Kaeera Infotechnology</h1>
        <h2>TIS Offers Top Web Development Services in Noida</h2>
        <p>Boost Your Business With Our High-Quality Interactive Web Applications</p>
        {/* <button className={styles.estimateButton}>Get Free Estimate</button> */}
      </div>

      <div className={styles.features}>
        {/* Certified Web Developers */}
        <div className={styles.featureCard}>
          <FontAwesomeIcon icon={faCheckCircle} className={styles.icon} />
          <h3>Certified Web Developers</h3>
          <p>
            Our team consists of highly experienced, certified, and technically skilled web developers, ensuring the best web applications.
          </p>
        </div>

        {/* Superior User Interface */}
        <div className={styles.featureCard}>
          <FontAwesomeIcon icon={faMobileAlt} className={styles.icon} />
          <h3>Superior User Interface</h3>
          <p>
            We create responsive and customizable user interfaces to maximize visitor interaction and session time.
          </p>
        </div>

        {/* Adherence to Quality Standards */}
        <div className={styles.featureCard}>
          <FontAwesomeIcon icon={faShieldAlt} className={styles.icon} />
          <h3>Adherence to Quality Standards</h3>
          <p>
            We adhere to the best practices in web development to provide the highest level of quality deliverables.
          </p>
        </div>

        {/* Minimal Support Maintenance */}
        <div className={styles.featureCard}>
          <FontAwesomeIcon icon={faLaptopCode} className={styles.icon} />
          <h3>Minimal Support Maintenance</h3>
          <p>
            Our web applications require minimal or zero support & maintenance due to our rigorous development processes.
          </p>
        </div>

        {/* Dynamic Technology */}
        <div className={styles.featureCard}>
          <FontAwesomeIcon icon={faRocket} className={styles.icon} />
          <h3>Dynamic Technology</h3>
          <p>
            We write clean, W3C validated code compatible with multiple platforms and browsers, ensuring flexibility and scalability.
          </p>
        </div>

        {/* Security Assurance */}
        <div className={styles.featureCard}>
          <FontAwesomeIcon icon={faUserShield} className={styles.icon} />
          <h3>Security Assurance</h3>
          <p>
            Our team stays updated with the latest security technologies to implement effective measures in all projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WebDevelopment;
