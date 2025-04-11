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
            <span>YOUR</span>NAME
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
                <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li><a href="https://behance.net" target="_blank" rel="noopener noreferrer">Behance</a></li>
              </ul>
            </div>
            
            <div className="portfolio-footer-contact">
              <h3>Contact</h3>
              <ul>
                <li>email@example.com</li>
                <li>+86 123 4567 8900</li>
                <li>City, Country</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="portfolio-footer-bottom">
          <p>&copy; {currentYear} YOUR NAME. All Rights Reserved</p>
          <div className="portfolio-footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;