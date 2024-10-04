import React from 'react';
import styles from './Contact.module.css';

const Contact = () => (
  <div className={styles.contact}>
    <h1>Contact Us</h1>
    <form className={styles.contactForm}>
      <div className={styles.formGroup}>
        <label htmlFor="name" className={styles.label}>Name:</label>
        <input type="text" id="name" name="name" required className={styles.input} />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email" className={styles.label}>Email:</label>
        <input type="email" id="email" name="email" required className={styles.input} />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="message" className={styles.label}>Message:</label>
        <textarea id="message" name="message" required className={styles.textarea}></textarea>
      </div>
      <button type="submit" className={styles.submitButton}>Send Message</button>
    </form>
  </div>
);

export default Contact;