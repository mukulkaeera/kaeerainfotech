import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faCode, faDesktop } from '@fortawesome/free-solid-svg-icons';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import styles from './index.module.scss';
import Image from 'next/image';

const MobileAppDevelopment = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1>Mobile App Development Services in Noida</h1>
        <p>Your partner in crafting bespoke mobile applications.</p>
      </div>

      <div className={styles.services}>
        {/* Android Mobile App Development */}
        <div className={styles.serviceSection}>
          <Image src='https://mobulous.s3.ap-south-1.amazonaws.com/Web/images/Services/Mobile-Development/Services-Icons-1.svg' alt='Android Development' height={100} width={100} />
          <h3>Android Mobile App Development</h3>
          <p>
            To build bespoke Android apps, it requires in-depth knowledge and expertise. Holding extensive industry experience in Android Mobile App Development, we transform business ideas into thriving mobile apps.
          </p>
        </div>

        {/* iOS Mobile App Development */}
        <div className={styles.serviceSection}>
          <Image src='https://mobulous.s3.ap-south-1.amazonaws.com/Web/images/Services/Mobile-Development/Services-Icons-2.svg' alt='iOS Development' height={100} width={100} />
          <h3>iOS Mobile App Development</h3>
          <p>
            From ideation to implementation, we offer complete iOS mobile application development services in Noida, India. We help your business grow and become more profitable.
          </p>
        </div>

        {/* Mobile App Design */}
        <div className={styles.serviceSection}>
          <Image src='https://mobulous.s3.ap-south-1.amazonaws.com/Web/images/Services/Mobile-Development/Services-Icons-2.svg' alt='Mobile App Design' height={100} width={100} />
          <h3>Mobile App Design</h3>
          <p>
            UI/UX design is the soul of the best apps. We create groundbreaking mobile app solutions with intuitive design and smooth functionality, ensuring your brand is well represented.
          </p>
        </div>

        {/* Cross-Platform Mobile App Development */}
        <div className={styles.serviceSection}>
          <Image src='https://mobulous.s3.ap-south-1.amazonaws.com/Web/images/Services/Mobile-Development/Services-Icons-2.svg' alt='Cross-Platform Development' height={100} width={100} />
          <h3>Cross-Platform Mobile App Development</h3>
          <p>
            Greater market penetration with a tight budget is achievable. We develop cross-platform mobile applications using the latest technologies to delight your end-users.
          </p>
        </div>

        {/* Progressive Web App Development */}
        <div className={styles.serviceSection}>
          <Image src='https://mobulous.s3.ap-south-1.amazonaws.com/Web/images/Services/Mobile-Development/Services-Icons-5.svg' alt='Progressive Web Apps' height={100} width={100} />
          <h3>Progressive Web App Development</h3>
          <p>
            Our Progressive Web Applications ensure smooth performance and a native-like experience. We provide high-end development solutions to meet all your business needs.
          </p>
        </div>

        {/* Native Mobile App Development */}
        <div className={styles.serviceSection}>
          <Image src='https://mobulous.s3.ap-south-1.amazonaws.com/Web/images/Services/Mobile-Development/Services-Icons-6.svg' alt='Native App Development' height={100} width={100} />
          <h3>Native Mobile App Development</h3>
          <p>
            We develop fast, responsive, and high-performing native apps for both Android and iOS, ensuring a massive number of potential users for your app.
          </p>
        </div>
      </div>

      <div className={styles.footer}>
        <p>Contact us today to start your project!</p>
        {/* <button className={styles.contactButton}>Get in Touch</button> */}
      </div>
    </div>
  );
};

export default MobileAppDevelopment;
