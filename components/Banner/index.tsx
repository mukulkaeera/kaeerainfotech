import React, { useState } from 'react';
import styles from './index.module.scss';
import Link from 'next/link';
import Image from 'next/image';

const Banner = ({ src, title, description }: any) => {
  const [isVideoError, setIsVideoError] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(false);
  return (
    <div className={styles.banner}>
      {/* {!isVideoError && ( */}
      <video
        className={styles.video}
        autoPlay
        loop
        muted
        preload="auto"
      
        onError={() => {
          setIsVideoError(true); // Set error state on video load failure
          setIsImageVisible(true); // Show image on video error
        }}
        onLoadedData={() => setIsImageVisible(false)} // Hide image when video loads
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* )} */}
      {/* {isImageVisible && ( // Show image only if video error or video is not loaded
        <Image
          className={styles.video}
          src={src} // Use the provided fallback image URL
          alt="Fallback image"
          // layout="responsive"
          width={1280} // Adjust width as needed
          height={700} // Adjust height as needed
          style={{ height: '100%' }}
          priority
        />
      )} */}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>
          {title}
        </h1>  <div className={styles.titleLine}></div>
        <p className={styles.description}>
          {description}
          {/* Kaeera Infotechnology is your one-stop company for all your needs. Whether you need digital marketing or consultation services information technology. We realise that in the current world with technology being the core then a strong online platform is key to business success. */}
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
