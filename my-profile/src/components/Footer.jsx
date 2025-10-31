// components/Footer.jsx
// A responsive footer component with navigation, social media links, and contact information
// Modified with unique class names and dark theme

import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="portfolio-footer">
      <div className="portfolio-footer-container">
        <div className="portfolio-footer-top">
          <div className="portfolio-footer-logo">
            <span>Silin</span>Li
          </div>

          <div className="portfolio-footer-links">
            <div className="portfolio-footer-nav">
              <h3>Navigation</h3>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/skills">Skills</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            <div className="portfolio-footer-social">
              <h3>Social Media</h3>
              <ul>
                <li><a href="https://github.com/mochiquin" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li><a href="https://www.artstation.com/pelosolar" target="_blank" rel="noopener noreferrer">Artstation</a></li>
              </ul>
            </div>

            <div className="portfolio-footer-contact">
              <h3>Contact</h3>
              <ul>
                <li>sili70583@gmail.com</li>
                <li>+61 435 566 271</li>
                <li>Adelaide</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="portfolio-footer-bottom">
          <p>&copy; {currentYear} Silin Li. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;