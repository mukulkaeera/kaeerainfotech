import React, { useEffect, useState } from "react";
import style from "./index.module.scss"; // Assuming you have SCSS modules configured
import carddata from "../../data/cardata"; // Assuming you have data imported correctly
import ServiceIntro from "../../components/Serviceintro";
import Head from "next/head";
import Link from "next/link";

const Cards = () => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    // Trigger animation on component mount
    setAnimated(true);

    // Optional: If you still want to listen to scroll, you can keep this
    const handleScroll = () => {
      if (window.scrollY >= 10 && !animated) {
        setAnimated(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [animated]);

  return (
    <>
      <Head>
        <title>Services</title>
        <meta name="description" content="At Kaeera Ventures, we provide comprehensive digital marketing solutions tailored to your business needs. Explore our services to enhance your online presence!" />
        <meta name="keywords" content="Digital Marketing, SEO, Social Media, Online Presence, Kaeera Ventures" />
        <meta name="author" content="Kaeera Ventures" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Kaeera Ventures | Your Digital Marketing Partner" />
        <meta property="og:description" content="Explore our digital marketing solutions to enhance your business's online presence!" />
        <meta property="og:url" content="https://www.kaeerainfotechnology.com" />
      </Head>
      <ServiceIntro />
      <div className={style.service_card}>
        <div className={style.service_top}>
          <h1 className={style.service}>services</h1>
          <div className={style.under}></div>
          <div className={style.checkservice}>
            <p>Check our Services</p>
          </div>
          <div className={style.webtech}>
            <p>
              Kaeera Infotechnology provides turn-key digital marketing services, which means we offer everything your business needs to execute its marketing strategy. Explore our services now to get started!
            </p>
          </div>
        </div>
        <div className={style.cardlist}>
          {carddata.map((card, id) => (
            <div className={`${style.card} ${animated ? style.animated : ""}`} key={id}>
              <div className={style.card_img}>
                <img src={card.image} className={style.image} alt="done" />
              </div>
              <div className={style.header}>
                <h1 className={style.title}>{card.title}</h1>
                <div className={style.content}>{card.description}</div>
              </div>
              <Link href={"/contact-us"} style={{ display: 'flex', justifyContent: "center", textDecoration: "none" }}><button className={style.reachUsButton}>Reach Us</button></Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cards;
