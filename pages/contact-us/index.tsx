import React, { useState } from 'react';
import styles from './index.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Head from 'next/head';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        alert('Your message has been sent!');

        // Reset the form
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
        });
    };

    return (
        <>
            <Head>
                <title>Contact Us</title>
                <meta name="description" content="At Kaeera Ventures, we provide comprehensive digital marketing solutions tailored to your business needs." />
                <meta name="keywords" content="Digital Marketing, SEO, Social Media, Online Presence, Kaeera Ventures" />
                <meta name="author" content="Kaeera Ventures" />
                <meta property="og:title" content="Kaeera Ventures | Your Digital Marketing Partner" />
                <meta property="og:description" content="Explore our digital marketing solutions to enhance your business's online presence!" />
                <meta property="og:url" content="https://www.kaeerainfotechnology.com/" />
            </Head>
            <div className={styles.container}>
                <h1 className={styles.title}>Get in Touch</h1>
                <div className={styles.infoSection}>
                    <a href="mailto:info@kaeerainfotechnology.in" style={{ textDecoration: "none", color: "white" }}>
                        <div className={styles.contactCard}>
                            <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
                            <h2>Email Us</h2>
                            <p>info@kaeerainfotechnology.in</p>
                            <p>We respond within 24 hours.</p>
                        </div>
                    </a>
                    <a href="tel:+918595646886" style={{ textDecoration: "none", color: "white" }}>
                        <div className={styles.contactCard}>
                            <FontAwesomeIcon icon={faPhone} className={styles.icon} />
                            <h2>Call Us</h2>
                            <p>+91 8595646886</p>
                            <p>Available 9 AM - 5 PM (Mon - Fri)</p>
                        </div>
                    </a>
                    <div className={styles.contactCard}>
                        <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.icon} />
                        <h2>Visit Us</h2>
                        <p>Floor-2, E-160, Noida</p>
                        <p>Open for visits: Mon - Fri</p>
                    </div>
                    <div className={styles.contactCard}>
                        <FontAwesomeIcon icon={faClock} className={styles.icon} />
                        <h2>Office Hours</h2>
                        <p>Mon - Fri: 9 AM - 5 PM</p>
                        <p>Sat - Sun: Closed</p>
                    </div>
                </div>

                {/* Google Maps Embed */}
                <div className={styles.mapSection}>
                    <form className={styles.contactForm} onSubmit={handleSubmit}>
                        <h2>Send us a Message</h2>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                        <button type="submit" className={styles.submitbtn}>
                            Send Message
                        </button>
                    </form>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35X02.2518509867878!2d77.38409947457242!3d28.62221298455095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef46bcc26ca1%3A0x847cf9da74f0d54d!2sKaeera%20Infotechnology!5e0!3m2!1sen!2sin!4v1727347402268!5m2!1sen!2sin"
                        width="900"
                        height="450"
                        className={styles.map}
                        // style={{ border: 0 ,width:"700px"}}
                        // allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">

                    </iframe>



                </div>
                <div className={styles.socialMedia}>
                    <h2>Follow Us</h2>
                    <div className={styles.socialIcons}>
                        <a href="https://www.linkedin.com/company/kaeera-infotechnology-pvt-ltd/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} className={styles.socialIcon} />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactPage;
