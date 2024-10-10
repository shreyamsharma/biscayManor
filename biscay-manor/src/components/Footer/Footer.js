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
      <div className={styles.footerSection}>
        <h3>Our Location</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2628.3625505372793!2d-123.72479002320298!3d48.79405877132352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548f4f3fb5984839%3A0xee613513ba827cea!2sBiscay%20Manor!5e0!3m2!1sen!2sca!4v1728604157880!5m2!1sen!2sca" width="600" height="450" style="border:0;"
          width="110%"
          height="200"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
    <div className={styles.footerBottom}>
      <p>&copy; 2024 Sunshine Assisted Living. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;