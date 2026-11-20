import "./Servo.css";
import { Link } from "react-router-dom";
import {
  FaMicrosoft,
  FaExchangeAlt,
  FaCogs,
  FaServer,
  FaUserShield,
  FaCloud
} from "react-icons/fa";

export default function Servo() {
  const data = [
   {
       icon:  <FaMicrosoft />,
       title: "Microsoft Services & Cloud Solutions",
       text: "Leverage Microsoft technologies to improve productivity, collaboration, security, and business continuity with expert implementation and support."
     },
   
     {
       icon: <FaExchangeAlt />,
       title: "Microsoft 365 Migration & Management",
       text: "Seamlessly migrate to Microsoft 365 including Teams, Outlook, Exchange, and SharePoint with ongoing administration and user support."
     },
   
     {
       icon: <FaCloud />,
       title: "Azure Cloud Architecture",
       text: "Design and deploy scalable Azure cloud environments with secure hosting, backup solutions, disaster recovery, and performance optimization."
     },
   
     {
       icon: <FaUserShield />,
       title: "Identity & Access Management",
       text: "Protect critical business resources using Microsoft Entra ID, Multi-Factor Authentication, access policies, and secure identity management."
     },
   
     {
       icon: <FaServer />,
       title: "Virtualization Platforms",
       text: "Reduce infrastructure costs and improve efficiency through modern virtualization technologies for servers, desktops, and enterprise workloads."
     },
   
     {
       icon:  <FaCogs />,
       title: "Server Virtualization Services",
       text: "Implement VMware vSphere, ESXi, and Microsoft Hyper-V solutions to maximize hardware utilization and simplify infrastructure management."
     },
  ];

  return (
    <section className="unique-services">
      <div className="container">

        {/* HEADER */}
        <div className="unique-head">
          <span className="section-tag">SERVICES</span>
          <h2 className="section-title">Next-Gen IT Services For Your Business</h2>
          <p className="section-sub">
            Viresani Technologies Pvt Ltd delivers future-ready
            IT repair, networking and hardware solutions.
          </p>
        </div>

        {/* GRID */}
        <div className="unique-grid">
          {data.map((item, i) => (
            <div className="unique-card" key={i}>
              <div className="icon-wrap">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
{/* VIEW MORE BUTTON */}
<div className="unique-btn-wrap">
  <Link to="/page" className="unique-view-btn">
    View More Services
  </Link>
</div>
      </div>
    </section>
  );
}
