import React, { useEffect, useRef, useState } from "react";
import "./Team.css";

const doctors = [
  {
    name: "Dr. Suja Francis",
    image: "./doctor1.png",
  },
  {
    name: "Dr. Anisha Jenny",
    image: "./doctor2.png",
  },
  {
    name: "Dr Jini P M",
    image: "./doctor3.png",
  },
  {
    name: "Dr Annu Pandey",
    image: "./doctor4.png",
  },
  {
    name: "Dr Rohit Prasad",
    image: "./doctor5.png",
  },
  {
    name: "Dr Chris Deepak",
    image: "./doctor6.png",
  },
  {
    name: "Dr K. Ranjan R Bhat",
    image: "./doctor7.png",
  },
  {
    name: "Dr Ansha Aravind",
    image: "./doctor8.png",
  },
  {
    name: "Dr Darene Krupa Wilson",
    image: "./doctor9.png",
  },
  {
    name: "Dr Anju Sarah Jacob",
    image: "./doctor10.png",
  },
  {
    name: "Dr Aathira Sharon",
    image: "./doctor11.png",
  },
  {
    name: "Dr Shankar S",
    image: "./doctor12.png",
  },
];

const Team = () => {
  const contentRef = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (!contentRef.current) return;
      const top = contentRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      setVisible(top < windowHeight - 100);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="team" className="team-section">
      <h2 className={`fade-content ${visible ? "visible" : ""}`} ref={contentRef}>
        Our Expert Team
      </h2>
      <div className="carousel-container">
        <div className="carousel-track">
          {doctors.map((doc, idx) => (
            <div
              key={idx}
              className={`team-card fade-content ${visible ? "visible" : ""}`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <img src={doc.image} alt={doc.name} className="team-image" />
              <h3 className="team-name">{doc.name}</h3>
              <p className="team-role"><em>{doc.specialty}</em></p>
              <p className="team-bio">{doc.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
