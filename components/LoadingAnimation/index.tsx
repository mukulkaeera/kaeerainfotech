// src/components/LoadingAnimation.jsx
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import styles from './index.module.scss';

const LoadingAnimation = () => {
    const [loading, setLoading] = useState(true);
    const [showText, setShowText] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowText(true); // Show text after the line expansion
        }, 0); // Time to wait before showing the text

        const loadingTimer = setTimeout(() => {
            setLoading(false); // End loading after 2 seconds
        }, 1000); // Duration of the loading animation

        return () => {
            clearTimeout(timer);
            clearTimeout(loadingTimer);
        };
    }, []);

    return (
        <div className={styles.loadingContainer}>
            <div className={`${styles.dot} ${loading ? styles.expanding : ''}`} />
            {showText && (
                <div className={styles.textContainer}>
                    <FontAwesomeIcon icon={faMobileAlt} className={styles.icon} />
                    <h1 className={styles.welcomeText}>Welcome to Kaeera Infotechnology</h1>
                </div>
            )}
        </div>
    );
};

export default LoadingAnimation;
