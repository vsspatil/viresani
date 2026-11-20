import React, { useEffect } from "react";
import styles from "./ServicesPage.module.css";
import Services from "./Services";

const ServicesPage = () => {
  useEffect(() => {
    const handleScroll = () => {
      const hero = document.querySelector(
        `.${styles.servicePageHeroSection}`
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
      {/* HERO SECTION */}
      <section className={styles.servicePageHeroSection}>
        <div className={styles.servicePageHeroOverlay}>
          <div className={styles.servicePageHeroContent}>
            <h1>Our Services</h1>

            <p>
              Home <span>/</span> Services
            </p>
          </div>
        </div>
      </section>

      {/* EXISTING SERVICES COMPONENT */}
      <Services />
    </>
  );
};

export default ServicesPage;