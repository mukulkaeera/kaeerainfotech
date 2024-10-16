import React from 'react'
import Introdiv from '../../components/Introdiv'
import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'
import MissionStatement from '../../components/Missionstatement'
import TeamMembers from '../../components/Teammembers'
import Timeline from '../../components/Timeline'
import Aboutus from '../../components/Aboutus'
import ContactCTA from '../../components/Contactctc'
import Footer from '../../components/Footer'
import lottieImage from '../../images/lottie-home-pic1.webp';
import Head from 'next/head'

function index() {
    return (
        <div>
            <Head>
                <title>About Us</title>
                <meta name="description" content="At Kaeera Ventures, we provide comprehensive digital marketing solutions tailored to your business needs. Explore our services to enhance your online presence!" />
                <meta name="keywords" content="Digital Marketing, SEO, Social Media, Online Presence, Kaeera Ventures" />
                <meta name="author" content="Kaeera Ventures" />
                <meta property="og:url" content="https://www.kaeerainfotechnology.com/" />
            </Head>
            {/* <Navbar /> */}
            <Hero />
            <Introdiv  image={lottieImage} head="We love Kaeera Infotechnology"  data="What we provide Our company Kaeera provides SEO, content marketing, social media management and Pay Per Click advertising solutions. By being particular with details collected and managed, every campaign is designed to generate the most out of it in terms of traffic and conversion. Where we terminate by marketing, our consultation services include analyses and solutions for improving your whole business."/>
            {/* <TeamMembers /> */}
            <MissionStatement />
            <Aboutus/>
            {/* <Timeline />     */}
            {/* <ContactCTA /> */}
            {/* <Footer/> */}
        </div>
    )
}

export default index
