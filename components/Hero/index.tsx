// components/Hero.js
import styles from './index.module.scss';

const Hero = () => {
  return (
    <section className={styles.hero}>
     
      <div className={styles.overlay}>
        <h1 className={styles.title}>About Us</h1>
      </div>
    </section>
  );
};

export default Hero;
