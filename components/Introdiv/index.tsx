// components/TextImageSection.js

import React from 'react';
import styles from './index.module.scss';
import Image from 'next/image';
import support from '../../images/client-support.png'
import custom from '../../images/custom-website-design-why-box.png'
import professional from '../../images/professional-team.png'
import quality from '../../images/quality-service.png'
// Ensure the image path is correct

const TextImageSection = ({ image, data, head }: any) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src={image}
            alt="Kaeera Ventures Animation"
            width={500}
            height={500}
            className={styles.image}
            priority
          />
        </div>
        {/* <div></div> */}
        <div className={styles.textContainer}>
          <h2 className={styles.title}>{head}</h2>
          <p className={styles.description}>
            {data}
          </p>
          <div className={styles.flex}>
            <div className={styles.card}>
              <Image src={professional} alt="Professional" className={styles.image} />
              <p>Professional Teams</p>
            </div>
            <div className={styles.card}>
              <Image src={custom} alt="Customise" className={styles.image} />
              <p>Customise Web Design</p>
            </div>
            <div className={styles.card}>
              <Image src={quality} alt="quality" className={styles.image} />
              <p>All Quality Services</p>
            </div>
            <div className={styles.card}>
              <Image src={support} alt="support" className={styles.image} />
              <p>24×7 Customer Supports</p>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default TextImageSection;
