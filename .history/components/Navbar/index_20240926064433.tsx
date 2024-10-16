import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './index.module.scss';
import Image from 'next/image';
import KL from '../../images/KL logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
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
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
        </li>
        <li className={styles.navItem} onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
          <a>Services</a>
          {dropdownOpen && (
            <ul className={styles.dropdownMenu}>
              <li><Link href="/services/web-development">Web Development</Link></li>
              <li><Link href="/services/app-development">App Development</Link></li>
              <li><Link href="/services/us-staffing">US Staffing</Link></li>
              <li><Link href="/services/digital-marketing">Digital Marketing</Link></li>
            </ul>
          )}
        </li>
        <li className={styles.navItem}>
          <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
