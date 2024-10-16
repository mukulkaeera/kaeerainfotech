// components/ServiceIntro.js
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faBullhorn } from '@fortawesome/free-solid-svg-icons';
import style from "./index.module.scss";
import Image from "next/image";

const ServiceIntro = () => {
    const [animated, setAnimated] = useState(false);

    useEffect(() => {
        // Trigger animation on component mount
        setAnimated(true);
    }, []);

    return (
        <div className={`${style.intro} ${animated ? style.animated : ""}`}>
            <div className={style.backgroundOverlay}>
                <h1 className={style.title}>
                    <FontAwesomeIcon icon={faRocket} className={style.icon} /> Welcome to Our Services
                </h1>
                <p className={style.description}>
                    <FontAwesomeIcon icon={faBullhorn} className={style.icon} /> At Kaeera Infotechnology, we provide comprehensive digital marketing solutions tailored to your business needs.
                </p>
                <p className={style.description}>
                    Explore our wide range of services designed to enhance your online presence and drive results!
                </p>
            </div>

        </div>
    );
};

export default ServiceIntro;
