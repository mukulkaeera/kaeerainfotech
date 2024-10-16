// index.jsx
import React from 'react';
import styles from './index.module.scss';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faBullhorn, faSearch, faUserFriends, faClipboardList } from '@fortawesome/free-solid-svg-icons';

function Index() {
  return (
    <div className={styles.container}>
      <video autoPlay loop muted className={styles.videoBackground}>
        <source src="https://videos.pexels.com/video-files/8686395/8686395-uhd_2560_1440_30fps.mp4" type="video/mp4" />
      </video>
      <div className={styles.imageContainer}>
        <Image
          src={"https://images.pexels.com/photos/12149150/pexels-photo-12149150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
          alt='Digital'
          width={500}
          height={500}
          className={styles.img}
        />
        <Image
          src={"https://images.pexels.com/photos/5453837/pexels-photo-5453837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
          alt='Digital'
          width={500}
          height={500}
          className={styles.img}
        />
      </div>
      <div className={styles.right}>
        <h1>Everything You Need</h1>
        <ul className={styles.servicesList}>
          <li>
            <FontAwesomeIcon icon={faCode} size="lg" />
            <div>
              <strong>Web App Development</strong>
              <p>Building scalable and efficient web applications tailored to your needs.</p>
            </div>
          </li>
          <li>
            <FontAwesomeIcon icon={faBullhorn} size="lg" />
            <div>
              <strong>Digital Marketing</strong>
              <p>Enhancing your online presence through targeted marketing strategies.</p>
            </div>
          </li>
          <li>
            <FontAwesomeIcon icon={faSearch} size="lg" />
            <div>
              <strong>SEO</strong>
              <p>Optimizing your website for better visibility in search engines.</p>
            </div>
          </li>
          <li>
            <FontAwesomeIcon icon={faUserFriends} size="lg" />
            <div>
              <strong>US Staffing</strong>
              <p>Providing skilled professionals to meet your business needs.</p>
            </div>
          </li>
          <li>
            <FontAwesomeIcon icon={faUserFriends} size="lg" />
            <div>
              <strong>Cloud Services</strong>
              <p>Cloud services refer to a broad range of services delivered over the internet, offering scalable and flexible resources for computing, storage</p>
            </div>
          </li>
          <li>
            <FontAwesomeIcon icon={faClipboardList} size="lg" />
            <div>
              <strong>Staffing Solutions</strong>
              <p>Customized staffing solutions to enhance your workforce.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Index;
