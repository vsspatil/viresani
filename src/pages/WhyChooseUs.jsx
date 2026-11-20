import "./WhyChooseUs.css";
import { FaUserCog, FaClock, FaCheckCircle } from "react-icons/fa";

export default function WhyChooseUs() {
  return (
    <section className="why-section">
  <div className="container">

    {/* SECTION TITLE */}
    <div className="why-section-header">
      <span className="why-subtitle">
        Why Choose Us?
      </span>

      <h2 className="why-main-title">
        Technology should power your business,
        not slow it down.
      </h2>

      <p className="why-description">
        We don’t just fix problems; we partner with you to build a
        secure, scalable, and efficient digital environment.
      </p>
    </div>

    <div className="row g-4">

          {/* CARD 1 */}
          <div className="col-lg-4 col-md-6">
            <div className="why-card">
              <div className="icon-box">
                <FaUserCog />
              </div>

              <h4>Certified Expertise</h4>
              <p>Our team consists of industry veterans specializing in Microsoft ecosystems, networking, and virtualization.
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="col-lg-4 col-md-6">
            <div className="why-card">
              <div className="icon-box">
                <FaClock />
              </div>

              <h4>24/7 Service Support</h4>
              <p>
                We are available round-the-clock to ensure smooth performance
                and uninterrupted business operations.
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="col-lg-4 col-md-6">
            <div className="why-card">
              <div className="icon-box">
                <FaCheckCircle />
              </div>

              <h4>Tailored Solutions</h4>
              <p>
             Whether you are a small business or an enterprise, our services scale with your needs.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
