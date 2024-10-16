import React from 'react';
import App from 'next/app';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import dotenv from 'dotenv';
import Head from 'next/head';
import KL from '../images/KL logo - Copy.png'; // Make sure the path is correct
import './globals.css'
dotenv.config();

class MyApp extends App {
  static async getInitialProps({ Component, ctx }: any) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <div>
        <Head>
          <link rel="icon" href={KL.src} />
          <link rel="apple-touch-icon" href={KL.src} />
          <meta name="description" content="Kaeera ventures your all IT requirements will be fullfilled." />
          {/* Add any other head elements you want */}
        </Head>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    );
  }
}

export default MyApp;
