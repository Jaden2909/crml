import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/share/1Hpu8PYWSc/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://twitter.com/carmelcare"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
            >
              <i className="fab fa-x-twitter"></i> {/* X icon */}
            </a>
            <a
              href="https://www.instagram.com/carmelmedicalanddentalcare?utm_source=qr&igsh=a2VrY242ZHVuOGJ4"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://linkedin.com/company/carmelcare"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://youtube.com/carmelcare"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <ul className="footer-bottom-links">
          <li><a href="/terms-of-service">Terms of Service</a></li>
          <li><a href="/privacy-policy">Privacy Policy</a></li>
        </ul>
        <p>© {new Date().getFullYear()} <a href="https://paupetsoft.com/">paupetsoft.com</a>. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
