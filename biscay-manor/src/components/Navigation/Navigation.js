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
            <Link to="/amenities" className={styles.navLink} onClick={() => toggleSubNav(0)}>
              Amenities
            </Link>
            <ul className={`${styles.subNav} ${activeSubNav === 0 ? styles.active : ''}`}>
              <li><Link to="/amenities/dining" className={styles.subNavItem} onClick={toggleMenu}>Dining</Link></li>
              <li><Link to="/amenities/fitness" className={styles.subNavItem} onClick={toggleMenu}>Fitness Center</Link></li>
              <li><Link to="/amenities/spa" className={styles.subNavItem} onClick={toggleMenu}>Spa</Link></li>
            </ul>
          </li>
          <li className={styles.navItem}>
            <Link to="/services" className={styles.navLink} onClick={() => toggleSubNav(1)}>
              Services
            </Link>
            <ul className={`${styles.subNav} ${activeSubNav === 1 ? styles.active : ''}`}>
              <li><Link to="/services/concierge" className={styles.subNavItem} onClick={toggleMenu}>Concierge</Link></li>
              <li><Link to="/services/events" className={styles.subNavItem} onClick={toggleMenu}>Event Planning</Link></li>
              <li><Link to="/services/transportation" className={styles.subNavItem} onClick={toggleMenu}>Transportation</Link></li>
            </ul>
          </li>
          <li className={styles.navItem}>
            <Link to="/contact" className={styles.navLink} onClick={toggleMenu}>Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;