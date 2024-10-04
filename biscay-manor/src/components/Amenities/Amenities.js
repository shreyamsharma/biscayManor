import React from 'react';
import styles from './Amenities.module.css';

const Amenities = () => (
  <div className={styles.amenities}>
    <h1>Our Amenities</h1>
    <div className={styles.amenitiesGrid}>
      <div className={styles.amenityCard}>
        <h2>Dining</h2>
        <p>Enjoy delicious, nutritious meals in our restaurant-style dining room.</p>
      </div>
      <div className={styles.amenityCard}>
        <h2>Activities</h2>
        <p>Participate in a wide range of social and recreational activities.</p>
      </div>
      <div className={styles.amenityCard}>
        <h2>Wellness Center</h2>
        <p>Stay active and healthy with our state-of-the-art fitness equipment and classes.</p>
      </div>
      <div className={styles.amenityCard}>
        <h2>Beautiful Gardens</h2>
        <p>Relax in our landscaped gardens and outdoor seating areas.</p>
      </div>
    </div>
  </div>
);

export default Amenities;