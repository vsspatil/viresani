import "./AboutUs.css";
import { FaTools, FaNetworkWired, FaLaptop } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function AboutUs() {
  const navigate = useNavigate();
  return (
    <section className="about-section">
      <div className="container">
        <div className="row align-items-center g-5">

          {/* LEFT IMAGES */}
          <div className="col-lg-6 about-images">
            <div className="main-img">
              <img src="/Images/01.jpg" alt="repair" />
              <span className="badge-exp">25+ Years Experience</span>
            </div>

          </div>

          {/* RIGHT CONTENT */}
          <div className="col-lg-6 about-content">

            <span className="subtitle">ABOUT US</span>

            <h2>
              We Provide Quality <span>IT Repair & Support</span> Services
            </h2>

            <p>
              <strong>Viresani Technologies Pvt Ltd</strong> is a trusted IT
              service provider specializing in laptop & computer repairing,
              networking, maintenance, and AMC services. We deliver reliable
              solutions tailored for businesses and individuals.
            </p>

            <div className="feature">
              <FaLaptop />
              <div>
                <h5>Sales & Refurbished Systems</h5>
                <p>
                  New laptops, desktops, refurbished systems with warranty
                  and best pricing.
                </p>
              </div>
            </div>

            <div className="feature">
              <FaTools />
              <div>
                <h5>Repair & AMC Services</h5>
                <p>
                  Professional laptop, desktop repair and annual maintenance
                  contracts.
                </p>
              </div>
            </div>

            <div className="feature">
              <FaNetworkWired />
              <div>
                <h5>Office & Networking Setup</h5>
                <p>
                  Complete office IT setup, server configuration, LAN & WiFi
                  solutions.
                </p>
              </div>
            </div>

            <p className="extra">
              We also deal in memory cards, pen drives, computer accessories,
              new hardware sales, purchasing & buyback of systems.
            </p>

            <button className="about-btn" onClick={() => navigate("/about")}>Discover More</button>

          </div>

        </div>
      </div>
    </section>
  );
}
