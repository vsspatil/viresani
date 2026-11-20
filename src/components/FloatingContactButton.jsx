import { FaWhatsapp } from "react-icons/fa";
import "./FloatingContactButton.css";

export default function FloatingWhatsApp() {

  // WhatsApp number without spaces, +, or special characters
  const whatsappNumber = "919834358565";

  // Optional default message
  const message = "Hello, I want to know more information.";

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-float"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}