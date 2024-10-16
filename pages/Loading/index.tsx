import React from 'react';
import styles from './index.module.scss';

const Loader = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.spinner}></div>
      <div className={styles.text}>Loading...</div>
    </div>
  );
};

export default Loader;
