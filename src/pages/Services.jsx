import "./Services.css";
import {
  FaMicrosoft,
  FaCloud,
  FaUserShield,
  FaServer,
  FaDesktop,
  FaLayerGroup,
  FaNetworkWired,
  FaWifi,
  FaLock,
  FaChartLine,
  FaHeadset,
  FaLaptop,
  FaMobileAlt,
  FaShieldVirus,
  FaCogs,
  FaDatabase,
  FaExchangeAlt,
  FaUserCog
} from "react-icons/fa";

export default function Services() {
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

  {
    icon: <FaDesktop />,
    title: "Desktop Virtualization (VDI)",
    text: "Provide secure remote desktop access and centralized desktop management for hybrid teams working from any location."
  },

  {
    icon: <FaLayerGroup />,
    title: "Infrastructure Resource Optimization",
    text: "Consolidate aging systems, improve resource allocation, and enhance overall infrastructure performance while reducing operational costs."
  },

  {
    icon: <FaNetworkWired />,
    title: "Network Support & Configuration",
    text: "Ensure reliable connectivity through professional network setup, troubleshooting, optimization, maintenance, and security management."
  },

  {
    icon: <FaNetworkWired />,
    title: "Network Design & Deployment",
    text: "Custom network architecture and deployment for routers, switches, firewalls, structured cabling, and enterprise-grade connectivity."
  },

  {
    icon: <FaWifi />,
    title: "Secure Wi-Fi Solutions",
    text: "Deploy fast, stable, and secure wireless networks with advanced authentication, guest access controls, and coverage optimization."
  },

  {
    icon: <FaLock />,
    title: "VPN & Remote Access Solutions",
    text: "Enable employees to securely connect to company resources using encrypted VPN technologies and remote access platforms."
  },

  {
    icon: <FaChartLine />,
    title: "Continuous Network Monitoring",
    text: "Monitor infrastructure performance in real time to identify bottlenecks, reduce downtime, and prevent security incidents."
  },

  {
    icon: <FaHeadset />,
    title: "End-User & Desktop Support",
    text: "Comprehensive technical support for users including troubleshooting, software assistance, hardware diagnostics, and issue resolution."
  },

  {
    icon: <FaUserCog />,
    title: "Professional Helpdesk Support",
    text: "Fast and reliable remote or on-site assistance for day-to-day technical issues affecting productivity and business operations."
  },

  {
    icon: <FaLaptop />,
    title: "OS Deployment & System Updates",
    text: "Efficient operating system deployment, patch management, upgrades, and configuration for Windows and macOS environments."
  },

  {
    icon: <FaMobileAlt />,
    title: "Device Management Services",
    text: "Manage, track, secure, and maintain desktops, laptops, tablets, and mobile devices across your organization."
  },

  {
    icon: <FaShieldVirus />,
    title: "Malware & Virus Protection",
    text: "Detect, remove, and prevent malware threats while strengthening endpoint security and protecting sensitive business data."
  }
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

      </div>
    </section>
  );
}
