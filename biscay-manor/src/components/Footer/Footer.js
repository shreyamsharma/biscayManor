import React from 'react';
import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerContent}>
      <div className={styles.footerSection}>
        <h3>Contact Us</h3>
        <p>123 Care Lane, Sunshine City, ST 12345</p>
        <p>Phone: (555) 123-4567</p>
        <p>Email: info@sunshineassisted.com</p>
      </div>
      <div className={styles.footerSection}>
        <h3>Quick Links</h3>
        <ul>
          <li><a href="/about">About Us</a></li>
          <li><a href="/careers">Careers</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
        </ul>
      </div>
      <div className={styles.footerSection}>
        <h3>Follow Us</h3>
        <div className={styles.socialIcons}>
          <a href="https://facebook.com" className={styles.socialIcon} aria-label="Facebook">FB</a>
          <a href="https://twitter.com" className={styles.socialIcon} aria-label="Twitter">TW</a>
          <a href="https://instagram.com" className={styles.socialIcon} aria-label="Instagram">IG</a>
        </div>
      </div>
    </div>
    <div className={styles.footerBottom}>
      <p>&copy; 2024 Sunshine Assisted Living. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;