// components/Timeline.js
import styles from './index.module.scss';

const Timeline = () => {
  return (
    <div className={styles.timeline}>
      <h2>Our Journey</h2>
      <p>Here’s how we started:</p>
      <ul>
        <li>2010 - Company Founded</li>
        <li>2015 - Expanded to New Markets</li>
        <li>2020 - Launched New Products</li>
      </ul>
    </div>
  );
};

export default Timeline;
