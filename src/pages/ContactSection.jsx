import "./ContactSection.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import { useState } from "react";


export default function ContactSection() {
  const [showPopup, setShowPopup] = useState(false);

const [formData, setFormData] = useState({
  name: "",
  company: "",
  email: "",
  service: "",
  message: "",
});
const clearForm = () => {
  setFormData({
    name: "",
    company: "",
    email: "",
    service: "",
    message: "",
  });

  setErrors({});
};
const [errors, setErrors] = useState({});
const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};
const validateForm = () => {
  const newErrors = {};

  if (!formData.name.trim()) {
    newErrors.name = "Name is required";
  } else if (formData.name.trim().length < 3) {
    newErrors.name = "Name must be at least 3 characters";
  }

  if (!formData.company.trim()) {
    newErrors.company = "Company name is required";
  }

  if (!formData.email.trim()) {
    newErrors.email = "Email is required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
  ) {
    newErrors.email = "Enter a valid email address";
  }

  if (!formData.service) {
    newErrors.service = "Please select a service";
  }

  if (!formData.message.trim()) {
    newErrors.message = "Message is required";
  } else if (formData.message.trim().length < 10) {
    newErrors.message =
      "Message must be at least 10 characters";
  }

  setErrors(newErrors);

  return Object.keys(newErrors).length === 0;
};

const handleSubmit = (e) => {
  e.preventDefault();

  if (validateForm()) {
    setShowPopup(true);
  }
};

const sendWhatsApp = () => {
  const text = `
Name: ${formData.name}
Company: ${formData.company}
Email: ${formData.email}
Service: ${formData.service}

Message:
${formData.message}
`;

  window.open(
    `https://wa.me/919834358565?text=${encodeURIComponent(text)}`,
    "_blank"
  );

  // Clear form
  clearForm();

  // Close popup
  setShowPopup(false);
};

const sendEmail = () => {
  const subject = encodeURIComponent(
    `New Inquiry - ${formData.service}`
  );

  const body = encodeURIComponent(
`Name: ${formData.name}

Company: ${formData.company}

Email: ${formData.email}

Service: ${formData.service}

Message:
${formData.message}`
  );

  const isMobile =
    /Android|iPhone|iPad|iPod/i.test(
      navigator.userAgent
    );

  if (isMobile) {
    // Mobile → open email app
    window.location.href =
      `mailto:support@viresani.in?subject=${subject}&body=${body}`;
  } else {
    // Desktop → open Gmail in browser
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=support@viresani.in&su=${subject}&body=${body}`,
      "_blank"
    );
  }

 clearForm();
setShowPopup(false);
};


  return (
    <section className="contact-section">
      <div className="container">
        <div className="row g-5">

          {/* LEFT INFO */}
          <div className="col-lg-4">
            <div className="contact-info">

              <div className="info-item">
                <FaMapMarkerAlt />
                <div>
                  <h6>Office Address</h6>
                  <p>OZONE VILLAS , Wagholi, Haveli, Pune- 412207, Maharashtra</p>
                </div>
              </div>

              <div className="info-item">
                <FaPhoneAlt />
                <div>
                  <h6> Call to Action</h6>
                  <p>+91 9834358565</p>
                </div>
              </div>

              <div className="info-item">
                <FaEnvelope />
                <div>
                  <h6>Email Us</h6>
                  <p>support@viresani.in</p>
                </div>
              </div>

           

              {/* MAP */}
              <div className="info-map">
                <iframe
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3117.03943458831!2d73.97471357417118!3d18.582563167279677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c300f4008461%3A0xb87b7296b54a7065!2sOzone%20Villas!5e1!3m2!1sen!2sin!4v1779256119163!5m2!1sen!2sin"
                  loading="lazy"
                ></iframe>
              </div>

            </div>
          </div>

          {/* FORM */}
          <div className="col-lg-8">
            <div className="contact-form">

              <h3>Get In Touch</h3>
              <p>
                Don't wait for a system crash to find out your IT needs an upgrade. Let’s build a more resilient business together.
              </p>

             <form onSubmit={handleSubmit}>
  <div className="form-grid">

    <div>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
      />
      {errors.name && (
        <div className="error-text">{errors.name}</div>
      )}
    </div>

    <div>
      <input
        type="text"
        name="company"
        placeholder="Company Name"
        value={formData.company}
        onChange={handleChange}
      />
      {errors.company && (
        <div className="error-text">{errors.company}</div>
      )}
    </div>

    <div>
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
      />
      {errors.email && (
        <div className="error-text">{errors.email}</div>
      )}
    </div>

    <div>
      <select
        name="service"
        value={formData.service}
        onChange={handleChange}
      >
        <option value="">
          How can we help you?
        </option>

        <option>
          Microsoft Services
        </option>

        <option>
          Networking
        </option>

        <option>
          Support
        </option>

        <option>
          Virtualization
        </option>

        <option>
          Other
        </option>
      </select>

      {errors.service && (
        <div className="error-text">
          {errors.service}
        </div>
      )}
    </div>

    <div className="full">
      <textarea
        rows="5"
        name="message"
        placeholder="Tell us about your requirement..."
        value={formData.message}
        onChange={handleChange}
      ></textarea>

      {errors.message && (
        <div className="error-text">
          {errors.message}
        </div>
      )}
    </div>
  </div>

  <button type="submit" className="send-btn">
    Continue
  </button>
</form>
            </div>
          </div>

        </div>
      </div>

      {showPopup && (
  <div className="contact-modal">
    <div className="contact-modal-box">

      <button
        className="close-modal"
        onClick={() => setShowPopup(false)}
      >
        ×
      </button>

      <h4>Choose Contact Method</h4>

      <p>
        How would you like to send your enquiry?
      </p>

      <div className="modal-actions">
        <button
          className="whatsapp-btn"
          onClick={sendWhatsApp}
        >
          WhatsApp
        </button>

        <button
          className="email-btn"
          onClick={sendEmail}
        >
          Email
        </button>
      </div>
    </div>
  </div>
)}
    </section>
  );
}
