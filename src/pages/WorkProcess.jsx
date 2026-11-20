import "./WorkProcess.css";
import { FaLaptop, FaPaperPlane, FaTools, FaTruck } from "react-icons/fa";

export default function WorkProcess() {
  const steps = [
    {
      icon: <FaLaptop />,
      title: "Device Issue",
      text: "Identify and diagnose your laptop or system problem."
    },
    {
      icon: <FaPaperPlane />,
      title: "Send To Us",
      text: "Drop your device at our service center or request pickup."
    },
    {
      icon: <FaTools />,
      title: "Fast Fixing",
      text: "Our experts repair using genuine spare parts."
    },
    {
      icon: <FaTruck />,
      title: "Quick Return",
      text: "Receive your device fully tested & ready to use."
    }
  ];

  return (
    <section className="process-section">
      <div className="process-overlay"></div>

      <div className="container">

        <div className="process-head">
          <span>WORK PROCESS</span>
          <h2>How We Fix Your Device</h2>
          <p>
            Simple, transparent and professional repair process
            designed for customer convenience.
          </p>
        </div>

        <div className="process-grid">
          {steps.map((s, i) => (
            <div className="process-card" key={i}>
              <div className="step-icon">{s.icon}</div>
              <h4>{s.title}</h4>
              <p>{s.text}</p>
              <span className="step-no">0{i + 1}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
