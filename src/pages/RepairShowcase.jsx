import React, { useEffect } from "react";
import styles from "./RepairShowcase.module.css";
import { useNavigate } from "react-router-dom";
import {
  FaMobileAlt,
  FaBatteryHalf,
  FaDatabase,
  FaHeadphonesAlt,
  FaNetworkWired,
  FaCloud,
   FaBullseye,
  FaSearch,
  FaTools,
  FaCogs
} from "react-icons/fa";

const RepairShowcase = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.querySelector(
        `.${styles.repairHeroSection}`
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
    <div className={styles.repairWrapper}>
      {/* HERO */}
      <section className={styles.repairHeroSection}>
        <div className={styles.repairHeroOverlay}>
          <div className={styles.repairHeroContent}>
            <div className={styles.repairHeroText}>
              <p className={styles.repairSmallHeading}>
                AFFORDABLE IS NOT JUST A NAME.
              </p>

              <h1>
                IT'S A <span>PROMISE.</span>
              </h1>

              <p>
                Professional phone and computer repair services with quick
                turnaround times and affordable pricing.
              </p>

              <button onClick={() => navigate("/page")}>
                Services
              </button>
            </div>

            <div className={styles.repairHeroImage}>
              <img
                src="/phones.png"
                alt="Repair Technician"
              />
            </div>
          </div>
        </div>
      </section>

      {/* BLUE STRIP */}
      <section className={styles.repairCtaStrip}>
        <div className={styles.repairCtaIcon}>
          <FaMobileAlt />
        </div>

        <div className={styles.repairCtaText}>
          <h3>DO YOU NEED A PHONE & COMPUTER REPAIR ?</h3>

          <p>
            Expert diagnosis and repair solutions for all mobile phones,
            tablets and computers.
          </p>
        </div>

        <button>9834358565</button>
      </section>

      {/* ABOUT US COMPONENT */}
      
       <section className={styles.missionWrap}>
      <div className={styles.missionContainer}>
        {/* MISSION */}

        <div className={styles.missionSection}>
          <div className={styles.missionContent}>
            <span className={styles.missionTag}>
              OUR MISSION
            </span>

            <h2>
              Delivering Technology That Drives
              Business Success
            </h2>

            <p>
              To deliver reliable, secure, and forward-thinking
              IT infrastructure management that empowers
              businesses to operate without technical
              boundaries. We focus on building long-term
              partnerships through innovative solutions,
              proactive support, and dependable service.
            </p>
          </div>

          <div className={styles.missionIconBox}>
            <FaBullseye />
          </div>
        </div>

        {/* APPROACH */}

        <div className={styles.blueprintHeader}>
          <span>OUR PROCESS</span>

          <h2>The Blueprint of Our Approach</h2>

          <p>
            A structured methodology that ensures every
            solution is aligned with your business goals,
            optimized for performance, and managed for
            long-term reliability.
          </p>
        </div>

        <div className={styles.blueprintGrid}>
          {/* CARD 1 */}

          <div className={styles.blueprintCard}>
            <div className={styles.blueprintIcon}>
              <FaSearch />
            </div>

            <h3>Assess</h3>

            <p>
              We analyze your current infrastructure,
              identify vulnerabilities, evaluate system
              performance, and uncover opportunities for
              improved efficiency and security.
            </p>
          </div>

          {/* CARD 2 */}

          <div className={styles.blueprintCard}>
            <div className={styles.blueprintIcon}>
              <FaTools />
            </div>

            <h3>Optimize</h3>

            <p>
              We implement scalable networking, cloud,
              virtualization, and infrastructure solutions
              tailored to your operational requirements,
              budget, and future growth plans.
            </p>
          </div>

          {/* CARD 3 */}

          <div className={styles.blueprintCard}>
            <div className={styles.blueprintIcon}>
              <FaCogs />
            </div>

            <h3>Manage</h3>

            <p>
              Through proactive monitoring, responsive
              desktop support, preventive maintenance,
              and continuous optimization, we ensure your
              systems perform at their best.
            </p>
          </div>
        </div>
      </div>
    </section>
    
{/* HOW CAN WE HELP */}
<section className={styles.repairHelpSection}>
  <div className={styles.repairHelpText}>
    <h2>HOW CAN WE HELP YOUR BUSINESS GROW?</h2>

    <p>
      We provide comprehensive IT infrastructure, networking, cloud, and
      technical support services designed to keep your business running
      efficiently. Our experienced professionals help organizations improve
      security, optimize performance, reduce downtime, and implement
      scalable technology solutions that support long-term growth and
      operational success.
    </p>

    <div className={styles.repairFeatureGrid}>
      <div>
        <FaMobileAlt />
        <span>Hardware Support</span>
      </div>

      <div>
        <FaBatteryHalf />
        <span>System Maintenance</span>
      </div>

      <div>
        <FaDatabase />
        <span>Data Backup & Recovery</span>
      </div>

      <div>
        <FaHeadphonesAlt />
        <span>Technical Support</span>
      </div>

      <div>
        <FaNetworkWired />
        <span>Network Infrastructure</span>
      </div>

      <div>
        <FaCloud />
        <span>Cloud Solutions</span>
      </div>
    </div>
  </div>

  <div className={styles.repairPhoneImage}>
    <img
      src="/layer.png"
      alt="Technology Solutions"
    />
  </div>
</section>

      {/* BOTTOM BANNER */}
      <section className={styles.repairBottomBanner}>
        <div className={styles.repairBannerImage}>
          <img
            src="/setting.png"
            alt="Devices"
          />
        </div>

        <div className={styles.repairBannerContent}>
          <h2>WANT TO REPAIR YOUR SMARTPHONE?</h2>

          <p>
            We are here to help you manage every repair problem with expert
            support and affordable pricing.
          </p>
        </div>
      </section>
    </div>
  );
};

export default RepairShowcase;