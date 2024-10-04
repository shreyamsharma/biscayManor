import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';
import logo from '../assets/biscay-manor.png';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubNav, setActiveSubNav] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setActiveSubNav(null);
  };

  const toggleSubNav = (index) => {
    if (window.innerWidth <= 960) {
      setActiveSubNav(activeSubNav === index ? null : index);
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.topNav}>
        <Link to="/contact" className={styles.topNavLink}>Contact</Link>
        <Link to="/careers" className={styles.topNavLink}>Careers</Link>
      </div>
      <div className={styles.navbarContainer}>
        <Link to="/" className={styles.navbarLogo}>
          <img src={logo} alt="Logo" />
        </Link>
        <button 
          className={styles.menuButton} 
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          <span className={styles.menuIcon}></span>
        </button>
        <ul className={`${styles.navMenu} ${isOpen ? styles.active : ''}`}>
          <li className={styles.navItem}>
            <Link to="/" className={styles.navLink} onClick={toggleMenu}>Home</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/about" className={styles.navLink} onClick={() => toggleSubNav(0)}>
              About
            </Link>
            <ul className={`${styles.subNav} ${activeSubNav === 0 ? styles.active : ''}`}>
              <li><Link to="/about/history" className={styles.subNavItem} onClick={toggleMenu}>Our History</Link></li>
              <li><Link to="/about/team" className={styles.subNavItem} onClick={toggleMenu}>Our Team</Link></li>
            </ul>
          </li>
          <li className={styles.navItem}>
            <Link to="/services" className={styles.navLink} onClick={() => toggleSubNav(1)}>
              Services
            </Link>
            <ul className={`${styles.subNav} ${activeSubNav === 1 ? styles.active : ''}`}>
              <li><Link to="/services/service1" className={styles.subNavItem} onClick={toggleMenu}>Service 1</Link></li>
              <li><Link to="/services/service2" className={styles.subNavItem} onClick={toggleMenu}>Service 2</Link></li>
            </ul>
          </li>
          <li className={styles.navItem}>
            <Link to="/locations" className={styles.navLink} onClick={toggleMenu}>Locations</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/news" className={styles.navLink} onClick={toggleMenu}>News</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;