import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './index.module.scss';
import Image from 'next/image';
import KL from '../../images/Klwithoutbg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faMobileAlt, faBriefcase, faBullhorn, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleScroll = () => setScrolled(window.scrollY > 50);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setDropdownOpen(false); // Close dropdown on desktop resize
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleServiceClick = (event:any) => {
    if (isMobile) {
      event.preventDefault(); // Prevent navigation on mobile
      setDropdownOpen(prev => !prev); // Toggle dropdown
    }
  };

  const handleMouseEnter = () => {
    if (!isMobile) {
      setDropdownOpen(true); // Open dropdown on hover
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setDropdownOpen(false); // Close dropdown on mouse leave
    }
  };

  // Close dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event:any) => {
      const dropdownMenu = document.getElementById('dropdownMenu');
      if (dropdownMenu && !dropdownMenu.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
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
        {/* Mobile Services Button */}
        {isMobile ? (
          <li className={styles.navItem}>
            <Link href="/services" onClick={handleServiceClick} style={{ display: "flex", alignItems: "center" }}>
              Services
            </Link>
            {dropdownOpen && (
              <ul id="dropdownMenu" className={styles.dropdownMenu}>
                <li className={styles.dropdownItem} onClick={() => setDropdownOpen(false)}>
                  <FontAwesomeIcon icon={faCode} className={styles.icon} />
                  <Link href="/services/single/web-development" onClick={() => setIsOpen(false)} className={router.pathname === '/services/web-development' ? styles.active : ''}>Web Development</Link>
                </li>
                <li className={styles.dropdownItem} onClick={() => setDropdownOpen(false)}>
                  <FontAwesomeIcon icon={faMobileAlt} className={styles.icon} />
                  <Link href="/services/single/app-development" onClick={() => setIsOpen(false)} className={router.pathname === '/services/app-development' ? styles.active : ''}>App Development</Link>
                </li>
                <li className={styles.dropdownItem} onClick={() => setDropdownOpen(false)}>
                  <FontAwesomeIcon icon={faBriefcase} className={styles.icon} />
                  <Link href="/services/single/us-staffing" onClick={() => setIsOpen(false)} className={router.pathname === '/services/us-staffing' ? styles.active : ''}>All Staffing Solutions</Link>
                </li>
                <li className={styles.dropdownItem} onClick={() => setDropdownOpen(false)}>
                  <FontAwesomeIcon icon={faBullhorn} className={styles.icon} />
                  <Link href="/services/single/digital-marketing" onClick={() => setIsOpen(false)} className={router.pathname === '/services/digital-marketing' ? styles.active : ''}>Digital Marketing</Link>
                </li>
              </ul>
            )}
          </li>
        ) : (
          // Desktop Services Button
          <li className={styles.navItem} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Link href="/services" style={{ display: "flex", alignItems: "center" }}>
              Services
              <FontAwesomeIcon icon={faChevronDown} className={`${styles.chevronIcon} ${dropdownOpen ? styles.rotate : ''}`} />
            </Link>
            {dropdownOpen && (
            <ul className={styles.dropdownMenu}>
              <li className={styles.dropdownItem}  onClick={() => setDropdownOpen(false)}>
                <FontAwesomeIcon icon={faCode} className={styles.icon} />
                <Link href="/services/single/web-development" onClick={() => setIsOpen(false)} className={router.pathname === '/services/web-development' ? styles.active : ''}>Web Development</Link>
                <Image src="https://www.simplilearn.com/ice9/free_resources_article_thumb/is_web_development_good_career.jpg" alt="Web Development" width={50} height={50} className={styles.dropdownImage} />
              </li>
              <li className={styles.dropdownItem}  onClick={() => setDropdownOpen(false)}>
                <FontAwesomeIcon icon={faMobileAlt} className={styles.icon} />
                <Link href="/services/single/app-development" onClick={() => setIsOpen(false)} className={router.pathname === '/services/app-development' ? styles.active : ''}>App Development</Link>
                <Image src="https://images.spiceworks.com/wp-content/uploads/2023/10/12122423/mobile-app-development.jpg" alt="App Development" width={50} height={50} className={styles.dropdownImage} />
              </li>
              <li className={styles.dropdownItem}   onClick={() => setDropdownOpen(false)}>
                <FontAwesomeIcon icon={faBriefcase} className={styles.icon} />
                <Link href="/services/single/us-staffing" onClick={() => setIsOpen(false)} className={router.pathname === '/services/us-staffing' ? styles.active : ''}>All Staffing Solutions</Link>
                <Image src="https://media.licdn.com/dms/image/v2/C4E0BAQFuV4epXca7Pg/company-logo_200_200/company-logo_200_200/0/1630597316518?e=2147483647&v=beta&t=msAFJQUdN0BcgBspVPKBLV70KwcEBqLICFpmFTpTUaE" alt="US Staffing" width={50} height={50} className={styles.dropdownImage} />
              </li>
              <li className={styles.dropdownItem}   onClick={() => setDropdownOpen(false)}>
                <FontAwesomeIcon icon={faBullhorn} className={styles.icon} />
                <Link href="/services/single/digital-marketing" onClick={() => setIsOpen(false)} className={router.pathname === '/services/digital-marketing' ? styles.active : ''}>Digital Marketing</Link>
                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTREqPmxoenWLMAHjtjy2oORWJ3CW_jUfcqsw&s" alt="Digital Marketing" width={50} height={50} className={styles.dropdownImage} />
              </li>
            </ul>
          )}
          </li>
        )}
         <li className={styles.navItem}>
          <Link href="/carrier" onClick={() => setIsOpen(false)} className={router.pathname === '/carrier' ? styles.active : ''}>Carrers</Link>
        </li>
         <li className={styles.navItem}>
          <Link href="/blogs" onClick={() => setIsOpen(false)} className={router.pathname === '/blogs' ? styles.active : ''}>blogs</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/about" onClick={() => setIsOpen(false)} className={router.pathname === '/about' ? styles.active : ''}>About</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/contact-us" onClick={() => setIsOpen(false)} className={router.pathname === '/contact' ? styles.active : ''}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
