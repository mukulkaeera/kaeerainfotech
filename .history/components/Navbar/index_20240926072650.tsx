import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'; // Import useRouter
import styles from './index.module.scss';
import Image from 'next/image';
import KL from '../../images/KL logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faMobileAlt, faBriefcase, faBullhorn, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter(); // Get the router object

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  const handleDropdownToggle = (state:any) => {
    setDropdownOpen(state);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>
        <Link href="/">
          <Image src={KL} alt="Logo" height={100} width={100} loading="lazy" className={styles.logo} />
        </Link>
      </div>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={`${styles.line} ${isOpen ? styles.active : ''}`} />
        <div className={`${styles.line} ${isOpen ? styles.active : ''}`} />
        <div className={`${styles.line} ${isOpen ? styles.active : ''}`} />
      </div>
      <ul className={`${styles.navList} ${isOpen ? styles.open : ''}`}>
        <li className={styles.navItem}>
          <Link href="/" onClick={() => setIsOpen(false)} className={router.pathname === '/' ? styles.active : ''}>Home</Link>
        </li>
        <li 
          className={styles.navItem} 
          onMouseEnter={() => handleDropdownToggle(true)} 
          onMouseLeave={() => handleDropdownToggle(false)}
        >
          <Link href="/services" style={{ display: "flex", alignItems: "center" }}>
            Services
            <FontAwesomeIcon
              icon={faChevronDown}
              className={`${styles.chevronIcon} ${dropdownOpen ? styles.rotate : ''}`}
            />
          </Link>
          {dropdownOpen && (
            <ul className={styles.dropdownMenu}>
              <li className={styles.dropdownItem}>
                <FontAwesomeIcon icon={faCode} className={styles.icon} />
                <Link href="/services/web-development" onClick={() => setIsOpen(false)} className={router.pathname === '/services/web-development' ? styles.active : ''}>Web Development</Link>
                <Image src="/images/webdev.jpg" alt="Web Development" width={50} height={50} className={styles.dropdownImage} />
              </li>
              <li className={styles.dropdownItem}>
                <FontAwesomeIcon icon={faMobileAlt} className={styles.icon} />
                <Link href="/services/app-development" onClick={() => setIsOpen(false)} className={router.pathname === '/services/app-development' ? styles.active : ''}>App Development</Link>
                <Image src="/images/appdev.jpg" alt="App Development" width={50} height={50} className={styles.dropdownImage} />
              </li>
              <li className={styles.dropdownItem}>
                <FontAwesomeIcon icon={faBriefcase} className={styles.icon} />
                <Link href="/services/us-staffing" onClick={() => setIsOpen(false)} className={router.pathname === '/services/us-staffing' ? styles.active : ''}>US Staffing</Link>
                <Image src="/images/usstaffing.jpg" alt="US Staffing" width={50} height={50} className={styles.dropdownImage} />
              </li>
              <li className={styles.dropdownItem}>
                <FontAwesomeIcon icon={faBullhorn} className={styles.icon} />
                <Link href="/services/digital-marketing" onClick={() => setIsOpen(false)} className={router.pathname === '/services/digital-marketing' ? styles.active : ''}>Digital Marketing</Link>
                <Image src="/images/digitalmarketing.jpg" alt="Digital Marketing" width={50} height={50} className={styles.dropdownImage} />
              </li>
            </ul>
          )}
        </li>
        <li className={styles.navItem}>
          <Link href="/about" onClick={() => setIsOpen(false)} className={router.pathname === '/about' ? styles.active : ''}>About</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/contact" onClick={() => setIsOpen(false)} className={router.pathname === '/contact' ? styles.active : ''}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
