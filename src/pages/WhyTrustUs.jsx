import "./WhyTrustUs.css";
import { FaUserShield, FaAward, FaHandshake } from "react-icons/fa";

export default function WhyTrustUs() {
  return (
    <section className="trust-section">
      <div className="container">

        <div className="row align-items-center g-5">

          {/* LEFT CONTENT */}
          <div className="col-lg-6 trust-content">

            <span className="trust-tag">WHY TRUST US</span>

            <h2>
              When You Need IT Support  
              <span> We Are Always Here</span>
            </h2>

            <p>
              Viresani Technologies Pvt Ltd delivers reliable,
              professional and affordable IT repair services
              trusted by businesses and individuals.
            </p>

            <div className="trust-box">
              <FaUserShield />
              <div>
                <h5>Certified Technicians</h5>
                <p>
                  Our experts are trained to repair laptops,
                  desktops and hardware professionally.
                </p>
              </div>
            </div>
         <br></br>
            <div className="trust-box">
              <FaAward />
              <div>
                <h5>Quality Assurance</h5>
                <p>
                  Every device is tested thoroughly before
                  final delivery.
                </p>
              </div>
            </div>
         <br></br>
            <div className="trust-box">
              <FaHandshake />
              <div>
                <h5>Your Trusted Partner</h5>
                <p>
                  We build long-term relationships with
                  honest service and support.
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT IMAGES */}
          <div className="col-lg-6 trust-images">

            <div className="img-main">
              <img src="/Images/technician.jpg" alt="repair" />
            </div>

            <div className="img-sub">
              <img src="/Images/about-one-img-1.jpg" alt="technician" />
            </div>

            <div className="connector"></div>

          </div>

        </div>
      </div>
    </section>
  );
}
