import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);

  // Close dropdown when clicking a link and scroll to section
  const handleLinkClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Listen for scroll to toggle transparent navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsTransparent(window.scrollY < 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isTransparent ? "transparent" : ""}`}>
      <div className="navbar-logo">
        <img src="/public/logo.png" alt="CarmelCare Logo" />
      </div>
      <ul className={`navbar-links ${isOpen ? "mobile" : ""}`}>
        <li>
          <a href="#hero" onClick={(e) => handleLinkClick(e, "#hero")}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={(e) => handleLinkClick(e, "#about")}>
            About
          </a>
        </li>
        <li>
          <a href="#team" onClick={(e) => handleLinkClick(e, "#team")}>
            Team
          </a>
        </li>
        <li>
          <a href="#services" onClick={(e) => handleLinkClick(e, "#services")}>
            Services
          </a>
        </li>
        <li>
          <a href="#contact" onClick={(e) => handleLinkClick(e, "#contact")}>
            Contact
          </a>
        </li>
      </ul>

      <button
        className={`hamburger ${isOpen ? "open" : ""}`}
        aria-label="Toggle menu"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span />
        <span />
      </button>
    </nav>
  );
};

export default Navbar;
