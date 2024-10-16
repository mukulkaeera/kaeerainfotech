import React from 'react';
import styles from './index.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faMobileAlt, faShoppingCart, faSearch, faRocket, faUsers } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const services = [
    {
        icon: faCode,
        title: "Custom Web Development",
        description: "Tailored solutions that meet your unique business needs.",
        image: "https://images.pexels.com/photos/5182713/pexels-photo-5182713.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" // Web development
    },
    {
        icon: faMobileAlt,
        title: "Responsive Design",
        description: "Websites that look great on any device, from mobile to desktop.",
        image: "https://images.pexels.com/photos/3861965/pexels-photo-3861965.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" // Responsive design
    },
    {
        icon: faShoppingCart,
        title: "E-commerce Solutions",
        description: "Build your online store and reach customers worldwide.",
        image: "https://images.pexels.com/photos/5869344/pexels-photo-5869344.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" // E-commerce
    },
    {
        icon: faSearch,
        title: "SEO Optimization",
        description: "Boost your visibility and rank higher in search engines.",
        image: "https://images.pexels.com/photos/3278813/pexels-photo-3278813.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" // SEO
    },
    {
        icon: faRocket,
        title: "Digital Marketing",
        description: "Comprehensive strategies to enhance your online presence.",
        image: "https://images.pexels.com/photos/669611/pexels-photo-669611.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" // Digital Marketing
    },
    {
        icon: faUsers,
        title: "Social Media Management",
        description: "Engage your audience with effective social media strategies.",
        image: "https://images.pexels.com/photos/1181705/pexels-photo-1181705.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" // Social Media
    },
];

const Company = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Kaeera Infotechnology</h1>
                <p>Your Partner in Innovative Web Development Solutions</p>
            </div>
            <div className={styles.services}>
                <h2>Our Services</h2>
                <div className={styles.serviceList}>
                    {services.map((service, index) => (
                        <div className={styles.serviceItem} key={index}>
                            <img src={service.image} alt={service.title} className={styles.serviceImage} />
                            <div className={styles.iconContainer}>
                                <FontAwesomeIcon icon={service.icon} className={styles.icon} />
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.footer}>
                <p>Contact us today to get started on your next project!</p>
                <button className={styles.contactButton}>
                    <Link href={"/contact"} style={{ textDecoration: "none" }}>Get in Touch</Link></button>
            </div>
        </div>
    );
};

export default Company;
