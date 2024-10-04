import React from 'react';
import styles from './Gallery.module.css';

const Gallery = () => (
  <div className={styles.gallery}>
    <h1>Our Gallery</h1>
    <div className={styles.imageGrid}>
      {/* Replace these with actual images */}
      <img src="https://via.placeholder.com/300x200" alt="Facility exterior" className={styles.galleryImage} />
      <img src="https://via.placeholder.com/300x200" alt="Dining area" className={styles.galleryImage} />
      <img src="https://via.placeholder.com/300x200" alt="Resident room" className={styles.galleryImage} />
      <img src="https://via.placeholder.com/300x200" alt="Activity room" className={styles.galleryImage} />
      <img src="https://via.placeholder.com/300x200" alt="Garden" className={styles.galleryImage} />
      <img src="https://via.placeholder.com/300x200" alt="Fitness center" className={styles.galleryImage} />
    </div>
  </div>
);

export default Gallery;