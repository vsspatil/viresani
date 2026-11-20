import "./Footer.css";
import { 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
   FaHome,
  FaCogs,
  FaInfoCircle
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-overlay"></div>

      <div className="container footer-grid">

        {/* BRAND */}
        <div className="footer-box">
          <h3>Viresani Technologies</h3>
          <p>
            Your trusted IT service partner for
            repair, networking, AMC and hardware solutions.
          </p>

          <div className="social">
            <a href="#"><FaFacebookF/></a>
            <a href="#"><FaTwitter/></a>
            <a href="#"><FaLinkedinIn/></a>
            <a href="#"><FaInstagram/></a>
          </div>
        </div>

        {/* CONTACT */}
        <div className="footer-box">
          <h4>Contact</h4>

          <p><FaPhoneAlt/> +91 9834358565</p>
          <p><FaEnvelope/> support@viresani.in</p>
          <p><FaMapMarkerAlt/> OZONE VILLAS , Wagholi, Haveli, Pune- 412207, Maharashtra</p>
        </div>
 {/* CONTACT */}
       <div className="footer-box">
  <h4>Quick Links</h4>

  <p>
     <FaHome />
    <Link to="/"> Home</Link>
  </p>

  <p>
    <FaInfoCircle />
    <Link to="/about"> About</Link>
  </p>
  <p>
    <FaCogs/>
    <Link to="/page"> Services</Link>
  </p>
</div>
      </div>

      <div className="footer-bottom">
  © {new Date().getFullYear()} Viresani Technologies Pvt Ltd | All Rights Reserved
</div>

    </footer>
  );
}
