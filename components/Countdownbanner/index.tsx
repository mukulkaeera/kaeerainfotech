import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faCamera, faUsers, faHeart, faThumbsUp, faComments } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import download from '../../images/download (1).svg';

interface Icon {
    icon: any; // Replace with the appropriate type if needed
    label: string;
}

const icons: Icon[] = [
    { icon: faVideo, label: 'Watch Videos' },
    { icon: faCamera, label: 'Capture Moments' },
    { icon: faUsers, label: 'Join Community' },
    { icon: faHeart, label: 'Show Love' },
    { icon: faThumbsUp, label: 'Give Feedback' },
    { icon: faComments, label: 'Start Conversations' }
];

const CounterWithImages: React.FC = () => {
    const [count, setCount] = useState<number>(0);
    const [inView, setInView] = useState<boolean>(false);
    const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
    const [currentIconIndex, setCurrentIconIndex] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIconIndex(prevIndex => (prevIndex + 1) % icons.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById('counter-section');
            const rect = section?.getBoundingClientRect();
            if (rect) {
                setInView(rect.top <= window.innerHeight && rect.bottom >= 0);
            } else {
                setInView(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        let timer: NodeJS.Timeout | null = null;
        if (inView && count < 500) {
            timer = setInterval(() => {
                setCount(prevCount => (prevCount < 500 ? prevCount + 1 : 500));
            }, 10);
        }
        return () => {
            if (timer) clearInterval(timer);
        };
    }, [inView, count]);

    return (
        <div className={styles.container} id="counter-section">
            <div
                className={`${styles.iconBox} ${styles.leftIcon}`}
                onMouseEnter={() => setHoveredIcon(icons[currentIconIndex].label)}
                onMouseLeave={() => setHoveredIcon(null)}
            >
                <FontAwesomeIcon icon={icons[currentIconIndex].icon} className={styles.icon} />
                <div className={`${styles.popup} ${hoveredIcon === icons[currentIconIndex].label ? styles.visible : ''}`}>
                    {icons[currentIconIndex].label}
                </div>
            </div>

            <div className={styles.counterContainer}>
                <div className={styles.counterBox}>
                    <h2 className={styles.counter}>{count}+</h2>
                    <p className={styles.description}>Happy Users</p>
                    <p className={styles.randomText}>Join our community and experience amazing features!</p>
                </div>
            </div>

            <div className={styles.rightIconContainer}>
                <Image
                    src={download}
                    alt="Kaeera Company"
                    width={350}
                    height={450}
                    className={styles.rightIcon}
                />
            </div>
        </div>
    );
};

export default CounterWithImages;
