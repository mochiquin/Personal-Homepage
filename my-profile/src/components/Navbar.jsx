// components/Navbar.jsx
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  useEffect(() => {
    // Close menu when route changes
    setMenuOpen(false);
  }, [location]);

  // Handle menu toggle
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${isHome && !scrolled ? 'on-hero' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span>YOUR</span>NAME
        </Link>

        <div className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
          <ul className="navbar-links">
            <li>
              <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
                About
              </Link>
            </li>
            <li>
              <Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/skills" className={location.pathname === '/skills' ? 'active' : ''}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className={`menu-toggle ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <div className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;