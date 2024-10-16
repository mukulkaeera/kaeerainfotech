import React from 'react';
import Link from 'next/link';
import styles from './index.module.scss';

const Custom404: React.FC = () => {
    return (
        <div className={styles.errorContainer}>
            <h1 className={styles.errorTitle}>404</h1>
            <p className={styles.errorMessage}>Oops! Page Not Found.</p>
            <p className={styles.errorDescription}>
                The page you are looking for does not exist.
            </p>
            <Link href="/" className={styles.backLink}>
                Go back to Home
            </Link>
            <div className={styles.animationContainer}>
                <div className={styles.cloud}></div>
                <div className={styles.cloud}></div>
                <div className={styles.bird}></div>
            </div>
        </div>
    );
};

export default Custom404;
