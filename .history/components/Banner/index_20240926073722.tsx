import React from 'react';
import styles from './index.module.scss';
import Link from 'next/link';

const Banner = () => {
  return (
    <div className={styles.banner}>
      <video className={styles.video} autoPlay loop muted preload="auto">
        <source src="https://videos.pexels.com/video-files/3163534/3163534-uhd_2560_1440_30fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>
          Kaeera InfoTechnology - Complate Digital Marketing and consultation Agency.
        </h1>
        <p className={styles.description}>
          Kaeera Infotechnology is your one-stop company for all your needs. Whether you need digital marketing or consultation services information technology. We realise that in the current world with technology being the core then a strong online platform is key to business success.
          {/* Explore an exciting range of services that enhance user experience and engage your audience like never before. From subtle transitions to bold effects, discover how web & app applications can transform your web presence. */}
        </p>
        <button className={styles.button}>
          <Link href="/services" style={{ textDecoration: "none", color: "white" }}>
            Get Started
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Banner;
