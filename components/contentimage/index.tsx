import React from 'react';
import styles from './index.module.scss';
import Image from 'next/image';

const ContentImageSection = ({ image, title, description, imagePosition }:any) => {
  return (
    <div className={styles.container}>
      {imagePosition === 'left' && (
        <div className={styles.imageContainer}>
          <Image
            src={image}
            alt={title}
            layout="responsive"
            width={500}
            height={500}
            className={styles.image}
            priority
          />
        </div>
      )}
      <div className={styles.contentContainer}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
      {imagePosition === 'right' && (
        <div className={styles.imageContainer}>
          <Image
            src={image}
            alt={title}
            layout="responsive"
            width={500}
            height={500}
            className={styles.image}
            priority
          />
        </div>
      )}
    </div>
  );
};

export default ContentImageSection;
