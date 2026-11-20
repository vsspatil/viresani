import { useState } from "react";
import "./LatestProjects.css";

const projects = [
  {
    id: 1,
    title: "Hardware Update",
    category: "Hardware",
    image: "/Images/harware-update.jpg"
  },
  {
    id: 2,
    title: "RAM / Memory Upgrade",
    category: "Software",
    image: "/Images/ram.webp"
  },
  {
    id: 3,
    title: "Charging Issues Fix",
    category: "Repair",
    image: "/Images/charging12.jpg"
  },
  {
    id: 4,
    title: "Data Recovery Service",
    category: "Data",
    image: "/Images/data-recovery.jpg"
  },
  {
    id: 5,
    title: "Laptop Motherboard Repair",
    category: "Repair",
    image: "/Images/laptop-motherboard.webp"
  },
  {
    id: 6,
    title: "System Optimization",
    category: "Software",
    image: "/Images/optimization.jpg"
  }
];

export default function LatestProjects() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter(p => p.category === active);

  return (
    <section className="projects-section">
      <div className="container">

        {/* HEADER */}
        <div className="projects-head">
          <span>LATEST PROJECT</span>
          <h2>Our Latest Projects</h2>
        </div>

        {/* FILTER TABS */}
        <div className="projects-tabs">
          {["All", "Repair", "Software", "Data", "Hardware"].map(tab => (
            <button
              key={tab}
              className={active === tab ? "active" : ""}
              onClick={() => setActive(tab)}
            >
              {tab === "Data" ? "Data Recovery" : tab}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="projects-grid">
          {filtered.map(item => (
            <div className="project-card" key={item.id}>
              <div className="img-box">
                <img src={item.image} alt={item.title} />
              </div>

              <div className="project-info">
                <span>{item.category}</span>
                <h4>{item.title}</h4>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
