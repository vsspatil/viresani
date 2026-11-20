import React, { useEffect } from "react";
import styles from "./ContactHero.module.css";
import ContactSection from "./ContactSection"; // Import your existing ContactSection

const Contact = () => {
  useEffect(() => {
    const handleScroll = () => {
      const hero = document.querySelector(
        `.${styles.contactHeroSection}`
      );

      if (hero) {
        hero.style.backgroundPositionY = `${
          window.pageYOffset * 0.5
        }px`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className={styles.contactHeroSection}>
        <div className={styles.contactHeroOverlay}>
          <div className={styles.contactHeroContent}>
            <h1>Contact Us</h1>

            <p>
              Home <span>/</span> Contact Us
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section appears below Hero */}
      <ContactSection />
    </>
  );
};

export default Contact;