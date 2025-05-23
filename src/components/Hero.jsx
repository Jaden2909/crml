import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            Welcome to <br />
            <span>Carmel</span> Dental Clinic
          </h1>

          <p>
            Our clinic isn’t just where teeth get fixed. It’s where confidence is built, comfort is prioritized, and technology meets expertise. Explore our range of services — each crafted with precision, care, and a touch of innovation.
          </p>

          <a href="#contact" className="hero-button">
            Book an Appointment
          </a>
          <br />
          <a href="#services" className="hero-button">
            Explore Our Services
          </a>
        </div>

        <div className="hero-image">
          <img src="/hero.jpeg" alt="Hero" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
