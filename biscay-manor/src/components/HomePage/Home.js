import React, { useEffect } from 'react';
import styles from './Home.module.css';

const HomePage = () => {
  useEffect(() => {
    // Smooth scrolling effect
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <div className={styles.homePage}>
      <section className={styles.hero}>
        <h1>Independent Living at Brightwater</h1>
        <p>Experience the freedom and comfort of independent living in our vibrant community.</p>
        <a href="#learn-more" className={styles.ctaButton}>Learn More</a>
      </section>

      <section id="learn-more" className={styles.infoSection}>
        <h2>Welcome to Brightwater Independent Living</h2>
        <p>Discover a lifestyle that combines independence with the right amount of support.</p>
        {/* Add more content here */}
      </section>

      <section className={styles.amenities}>
        <h2>Our Amenities</h2>
        <div className={styles.amenityGrid}>
          {/* Add amenity items here */}
          <div className={styles.amenityItem}>
            <img src="/path-to-icon.png" alt="Dining" />
            <h3>Fine Dining</h3>
            <p>Enjoy chef-prepared meals in our elegant dining room.</p>
          </div>
          {/* Add more amenity items */}
        </div>
      </section>

      <section className={styles.gallery}>
        <h2>Photo Gallery</h2>
        <div className={styles.photoGrid}>
          {/* Add photo gallery items here */}
        </div>
      </section>

      <section className={styles.cta}>
        <h2>Ready to Learn More?</h2>
        <p>Contact us today to schedule a tour or get more information.</p>
        <a href="#contact" className={styles.ctaButton}>Contact Us</a>
      </section>
    </div>
  );
};

export default HomePage;