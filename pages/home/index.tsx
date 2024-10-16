import React from 'react';
import Head from 'next/head'; // Import Head from next/head
import Banner from '../../components/Banner';
import Introdiv from '../../components/Introdiv';
import Countdown from '../../components/Countdownbanner';
import Services from '../../components/Services';
import BlogList from '../../components/Bloglist';
import lottieImage from '../../images/lottie-home-pic1.webp';
import Company from '../../components/Company';
import WebDevelopment from '../../components/Web';
// import moduleName from '../../public/video/'
function Index() {
  return (
    <div>
      <Head>
        <title>Digital Marketing Consultant Service | Kaeera Infotechnology</title>
        <meta name="description" content="Kaeera Infotechnology famous for Best Digital Marketing and Consultant Service in US, UK and India since 16 years before. Book Now to Make your Business build and top rank in SERP." />
        <meta name="author" content="Kaeera Ventures" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Kaeera Ventures | Your Digital Marketing Partner" />
        <meta property="og:description" content="Explore our digital marketing solutions to enhance your business's online presence!" />
        <meta property="og:url" content="https://www.kaeerainfotechnology.com/" />
      </Head>
      {/* <Top/> */}
      <Banner src="/video/bg.mp4" title="Kaeera InfoTechnology - Complete Digital Marketing and consultation Agency." description=" Kaeera Infotechnology is your one-stop company for all your needs. Whether you need digital marketing or consultation services information technology. We realise that in the current world with technology being the core then a strong online platform is key to business success." />
      <Introdiv head="Why Connect Us" image={lottieImage} data="Kaeera dishes out SEO solutions alongside content marketing, social media management and Pay Per Click advertising services. Being finicky about collected details and managed minutiae, every campaign gets crafted with an eye towards maximizing traffic and conversion yield. We wrap up our marketing efforts by providing bespoke analyses and innovative solutions that boost your entire business operation." />
      <Countdown />
      <Services />
      <WebDevelopment />
      <BlogList />
    </div>
  );
}

export default Index;
