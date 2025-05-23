import React, { useEffect, useRef, useState } from "react";
import "./Contact.css";

const Contact = () => {
  const contentRef = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (!contentRef.current) return;
      const top = contentRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (top < windowHeight - 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="contact" className="contact-section">
      <h2 ref={contentRef} className={`fade-content ${visible ? "visible" : ""}`}>Get in Touch</h2>
      <form className={`fade-content ${visible ? "visible" : ""}`}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="5" required></textarea>

        <button type="submit">Send Message</button>
      </form>
      <div className={`contact-info fade-content ${visible ? "visible" : ""}`}>
        <p><strong>Address:</strong> #109, 1st Floor, Carmel Complex, Geddalahalli, Kothanur Post, Hennur Road, Bangalore</p>
        <p><strong>Phone:</strong> +91 98765 43210</p>
        <p><strong>Email:</strong> contact@carmelcare.in</p>
      </div>
    </section>
  );
};

export default Contact;
