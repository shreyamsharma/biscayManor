import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './Footer.module.css';

// This is needed to fix the default icon issue with Leaflet in React
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const Footer = () => {
  const position = [40.7128, -74.0060]; // Replace with your actual coordinates

  return (
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
          <div className={styles.mapContainer}>
            <MapContainer center={position} zoom={13} style={{ height: '200px', width: '100%' }}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={position} />
            </MapContainer>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; 2024 Sunshine Assisted Living. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;