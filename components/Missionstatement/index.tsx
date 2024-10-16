// components/MissionStatement.js
import { useEffect, useRef, useState } from 'react';
import styles from './index.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faShieldAlt, faHandsHelping, faStar } from '@fortawesome/free-solid-svg-icons';

const MissionStatement = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const missionRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (missionRef.current) {
      const { top } = missionRef.current.getBoundingClientRect();
      if (top < window.innerHeight && top > 0) {
        setIsVisible(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={missionRef} className={styles.mission}>
      <div className={`${styles.content} ${isVisible ? styles.visible : ''}`}>
        <h2 className={styles.title}>Our Mission</h2>
        <p className={styles.description}>
          To provide exceptional IT services that enhance the lives of our customers through innovative solutions.
        </p>
        <div className={styles.icons}>
          <FontAwesomeIcon className={styles.icon} icon={faLightbulb} />
          <FontAwesomeIcon className={styles.icon} icon={faShieldAlt} />
          <FontAwesomeIcon className={styles.icon} icon={faHandsHelping} />
          <FontAwesomeIcon className={styles.icon} icon={faStar} />
        </div>
      </div>
    </div>
  );
};

export default MissionStatement;
