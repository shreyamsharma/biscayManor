import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Home.module.css';

const reviews = [
  { id: 1, text: "Brightwater has been a wonderful home for me. The staff is caring and the community is vibrant!", author: "Jane D.", rating: 5 },
  { id: 2, text: "I love the independence I have here, coupled with the peace of mind of having support when needed.", author: "Robert S.", rating: 4 },
  { id: 3, text: "The amenities are top-notch and there's always something fun to do. I'm so glad I chose Brightwater!", author: "Mary L.", rating: 5 },
];

const HomePage = () => {
  const [currentReview, setCurrentReview] = useState(0);

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

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const goToReview = (index) => {
    setCurrentReview(index);
  };

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
          <div className={styles.amenityItem}>
            <img src="/path-to-icon.png" alt="Dining" />
            <h3>Fine Dining</h3>
            <p>Enjoy chef-prepared meals in our elegant dining room.</p>
          </div>
          {/* Add more amenity items */}
        </div>
      </section>

      <section className={styles.reviews}>
        <h2>What Our Residents Say</h2>
        <div className={styles.reviewSlideshow}>
          <button onClick={prevReview} className={styles.arrowButton}>&#8592;</button>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentReview}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className={styles.reviewContent}
            >
              <p className={styles.reviewText}>{reviews[currentReview].text}</p>
              <p className={styles.reviewAuthor}>- {reviews[currentReview].author}</p>
              <div className={styles.starRating}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < reviews[currentReview].rating ? styles.starFilled : styles.starEmpty}>
                    ★
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
          <button onClick={nextReview} className={styles.arrowButton}>&#8594;</button>
        </div>
        <div className={styles.reviewPagination}>
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => goToReview(index)}
              className={`${styles.paginationButton} ${currentReview === index ? styles.active : ''}`}
            />
          ))}
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