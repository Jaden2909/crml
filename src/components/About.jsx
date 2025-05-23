import React, { useEffect, useRef, useState } from 'react';
import './About.css';

const About = () => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [imageTranslateY, setImageTranslateY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!containerRef.current) return;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const rect = containerRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;

          if (rect.top < windowHeight * 0.9) {
            setIsVisible(true);
          }

          // Image moves upward slower than scroll
          const translateY = Math.min(0, -rect.top * 0.3);
          setImageTranslateY(translateY);

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initial trigger

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="about" ref={containerRef} className="about-wrapper">
      <div className={`about-section ${isVisible ? 'fade-in' : ''}`}>
        <div className="about-text-container">
          <h2 className="about-heading">Our Story</h2>
          <p className="about-paragraph">
            Founded in 2013, Carmel Medical and Dental Clinic began with a simple yet powerful vision—delivering care with compassion,
            faith, and integrity. What started as a dental practice has grown into a trusted multi-specialty center serving over 13,000
            patients. With a focus on personalized care and strong one-on-one relationships, our team of expert consultants ensures the
            highest quality treatment across dental, medical, pediatric, physiotherapy, homeopathy, and counseling services.
          </p>
        </div>
      </div>

      <div
        className="about-image-container"
        style={{ transform: `translateY(${imageTranslateY}px)` }}
      >
        <img src="./about-image.jpg" alt="Carmel Clinic" className="about-image-full" />
      </div>
    </section>
  );
};

export default About;
