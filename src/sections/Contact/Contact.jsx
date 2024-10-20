import React from 'react';
import styles from './ContactStyles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Using the envelope icon

function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">You can just say Hi</h1>
      <div className={styles.contactInfo}>
        <FontAwesomeIcon icon={faEnvelope} className={styles.gmailIcon} />
        <span className={styles.gmailText}> : shresthasameerman@gmail.com</span>
      </div>
    </section>
  );
}

export default Contact;
