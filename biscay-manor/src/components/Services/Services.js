import React from 'react';
import styles from './Services.module.css';

const Services = () => (
  <div className={styles.services}>
    <h1>Our Services</h1>
    <div className={styles.servicesGrid}>
      <div className={styles.serviceCard}>
        <div className={styles.serviceIcon}>🏠</div>
        <h2 className={styles.serviceTitle}>Assisted Living</h2>
        <p className={styles.serviceDescription}>Personalized care and support for daily living activities.</p>
      </div>
      <div className={styles.serviceCard}>
        <div className={styles.serviceIcon}>🧠</div>
        <h2 className={styles.serviceTitle}>Memory Care</h2>
        <p className={styles.serviceDescription}>Specialized care for residents with Alzheimer's and dementia.</p>
      </div>
      <div className={styles.serviceCard}>
        <div className={styles.serviceIcon}>🌿</div>
        <h2 className={styles.serviceTitle}>Respite Care</h2>
        <p className={styles.serviceDescription}>Short-term care options for caregivers who need a break.</p>
      </div>
    </div>
  </div>
);

export default Services;