import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import {
  FaLaptop,
  FaNetworkWired,
  FaTools,
  FaBuilding,
} from "react-icons/fa";

import "swiper/css";
import "./HeroCarousel.css";

export default function HeroCarousel() {
  const navigate = useNavigate();
  const services = [
    {
      bg: "s1",
      icon: <FaLaptop />,
      title: "Laptop & Desktop Repair",
      desc:
        "We provide complete laptop and desktop repair services including motherboard repair, hardware replacement, operating system installation, software troubleshooting, virus removal, performance optimization and preventive maintenance for homes, offices and businesses.",
    },
    {
      bg: "s2",
      icon: <FaNetworkWired />,
      title: "Networking Solutions",
      desc:
        "Our networking experts design and implement secure LAN, WAN and WiFi infrastructures with router setup, firewall configuration, server installation, network monitoring and connectivity optimization to ensure uninterrupted business operations.",
    },
    {
      bg: "s3",
      icon: <FaTools />,
      title: "AMC & Maintenance",
      desc:
        "Our Annual Maintenance Contract services include regular inspections, software updates, hardware diagnostics, security checks, preventive maintenance and technical support to maximize system performance and reduce downtime.",
    },
    {
      bg: "s4",
      icon: <FaBuilding />,
      title: "Office IT Setup",
      desc:
        "We deliver complete office IT infrastructure solutions including desktops, laptops, printers, servers, networking devices, surveillance systems, cloud integration and ongoing technical support tailored to your business requirements.",
    },
  ];

  return (
    <section className="hero">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 4000 }}
        loop
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div className={`slide ${service.bg}`}>
              <div className="overlay"></div>

              <div className="service-content">

                <div className="title-row">
                  <div className="icon-box">
                    {service.icon}
                  </div>

                  <h2>{service.title}</h2>
                </div>

                <p>{service.desc}</p>

                <button onClick={() => navigate("/page")}>Read More</button>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}