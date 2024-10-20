import styles from './FooterStyles.module.css';

function Footer() {
  // Get the current year
  const currentYear = new Date().getFullYear();

  return (
    <section id="footer" className={styles.container}>
      <p>
        &copy; {currentYear} Sameer Man Shrestha<br />
        All rights reserved.
      </p>
    </section>
  );
}

export default Footer;