// pages/Home.jsx
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import portfolioHeroBg from '../assets/hero-bg.jpg'; // Import background image
import DynamicCircle from '../components/DynamicCircle';


const PortfolioHome = () => {
  const portfolioHeroRef = useRef(null);
  const portfolioTextRef = useRef(null);

  useEffect(() => {
    const handlePortfolioMouseMove = (event) => {
      if (!portfolioHeroRef.current || !portfolioTextRef.current) return;

      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;

      // Calculate mouse position relative to window center
      const portfolioMoveX = (clientX - innerWidth / 2) / (innerWidth / 2) * -15;
      const portfolioMoveY = (clientY - innerHeight / 2) / (innerHeight / 2) * -15;

      // Apply parallax effect
      portfolioTextRef.current.style.transform = `translate(${portfolioMoveX}px, ${portfolioMoveY}px)`;
    };

    document.addEventListener('mousemove', handlePortfolioMouseMove);

    return () => {
      document.removeEventListener('mousemove', handlePortfolioMouseMove);
    };
  }, []);

  return (
    <div className="portfolio-home">
      {/* Hero Section */}
      <section className="portfolio-hero" ref={portfolioHeroRef} style={{ backgroundImage: `url(${portfolioHeroBg})` }}>
        <div className="portfolio-hero-content">
          <div className="portfolio-hero-text" ref={portfolioTextRef}>
            <h1 className="portfolio-hero-heading">
              <span>Creation</span>
              <span>Design</span>
              <span>Develop</span>
            </h1>

            <p className="portfolio-hero-subheading">
              Classic × Fashion × Futuristic Design
            </p>

            <div className="portfolio-hero-cta">
              <Link to="/projects" className="portfolio-btn">View Projects</Link>
              <Link to="/contact" className="portfolio-btn portfolio-btn-accent">Contact Me</Link>
            </div>
          </div>
        </div>
        <div className="portfolio-hero-overlay"></div>
        {/* <DynamicCircle /> */}
        <div className="portfolio-scroll-indicator">
          <span>Scroll Down</span>
          <div className="portfolio-scroll-arrow"></div>
        </div>
      </section>

      {/* Spacer Div - Prevents content overlap */}
      <div className="portfolio-spacer"></div>


      {/* Intro Section */}
      <section className="portfolio-intro portfolio-section">
        <div className="portfolio-container">
          <div className="portfolio-intro-content">
            <div className="portfolio-intro-title">
              <h2 className="heading-lg" data-text="ABOUT">Digital Artist & Designer</h2>
              <div className="portfolio-line"></div>
            </div>

            <div className="portfolio-intro-text">
              <p>
                Blending artistic vision with technical expertise to create captivating digital illustrations.
              </p>

              <p>
                I specialize in realistic-style artwork and interactive digital experiences with a focus on detail and atmosphere.
              </p>

              <Link to="/about" className="portfolio-text-link">Learn More <span>→</span></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="portfolio-featured-projects portfolio-section">
        <div className="portfolio-container">
          <div className="portfolio-section-header">
            <h2 className="heading-lg">Featured Projects</h2>
            <p>Explore my artistic journey and illustration portfolio</p>
            <br />
          </div>

          <div className="portfolio-projects-grid">
            <div className="portfolio-project-card portfolio-featured">
              <div className="portfolio-project-image">
                <img src="/assets/2.jpg" alt="Atomic Heart Illustration" />
                <div className="portfolio-project-overlay">
                  <div className="portfolio-project-meta">
                    <span className="portfolio-project-category">Digital Illustration</span>
                    <div className="portfolio-project-meta-header">
                      <h3 className="portfolio-project-title">Atomic Heart</h3>
                      <Link to="/projects" className="portfolio-btn">View Details</Link>
                    </div>
                    <p className="portfolio-project-description">
                      Fan art illustration inspired by the Atomic Heart game universe, showcasing detailed character rendering and atmospheric environment design.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="portfolio-project-card">
              <div className="portfolio-project-image">
                <img src="/assets/3.jpg" alt="Realistic Portrait Illustration" />
                <div className="portfolio-project-overlay">
                  <div className="portfolio-project-meta">
                    <span className="portfolio-project-category">Realistic Illustration</span>
                    <div className="portfolio-project-meta-header">
                      <h3 className="portfolio-project-title">Character Study</h3>
                      <Link to="/projects" className="portfolio-btn">View Details</Link>
                    </div>
                    <p className="portfolio-project-description">
                      Hyper-realistic character portrait with detailed lighting and texturing
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="portfolio-project-card">
              <div className="portfolio-project-image">
                <img src="/assets/1.jpg" alt="Realistic Environment Illustration" />
                <div className="portfolio-project-overlay">
                  <div className="portfolio-project-meta">
                    <span className="portfolio-project-category">Environment Art</span>
                    <div className="portfolio-project-meta-header">
                      <h3 className="portfolio-project-title">Scenic Landscape</h3>
                      <Link to="/projects" className="portfolio-btn">View Details</Link>
                    </div>
                    <p className="portfolio-project-description">
                      Photorealistic environmental illustration with atmospheric lighting
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="portfolio-section-footer">
            <br />
            <Link to="/projects" className="portfolio-btn portfolio-btn-accent">View All Projects</Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="portfolio-skills-overview portfolio-section">
        <div className="portfolio-container">
          <div className="portfolio-skills-content">
            <div className="portfolio-skills-text">
              <h2 className="heading-lg">Skills & Expertise</h2>
              <p>Bringing artistic visions to life requires both creative talent and technical proficiency. These are the tools and techniques I've mastered.</p>
              <Link to="/skills" className="portfolio-btn">Explore My Skills</Link>
            </div>

            <div className="portfolio-skills-showcase">
              <div className="portfolio-skill-category">
                <h3>Digital Illustration</h3>
                <div className="portfolio-skill-tags">
                  <span className="portfolio-skill-tag">Concept Art</span>
                  <span className="portfolio-skill-tag">Character Design</span>
                  <span className="portfolio-skill-tag">Environment Art</span>
                  <span className="portfolio-skill-tag">Realistic Rendering</span>
                  <span className="portfolio-skill-tag">Digital Painting</span>
                </div>
              </div>

              <div className="portfolio-skill-category">
                <h3>3D & Visual Design</h3>
                <div className="portfolio-skill-tags">
                  <span className="portfolio-skill-tag">Blender</span>
                  <span className="portfolio-skill-tag">Cinema 4D</span>
                  <span className="portfolio-skill-tag">OC Rendering</span>
                  <span className="portfolio-skill-tag">3D Modeling</span>
                  <span className="portfolio-skill-tag">Texture Creation</span>
                </div>
              </div>

              <div className="portfolio-skill-category">
                <h3>Web & Interactive</h3>
                <div className="portfolio-skill-tags">
                  <span className="portfolio-skill-tag">React</span>
                  <span className="portfolio-skill-tag">JavaScript</span>
                  <span className="portfolio-skill-tag">CSS3</span>
                  <span className="portfolio-skill-tag">Photoshop</span>
                  <span className="portfolio-skill-tag">Illustrator</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="portfolio-contact-cta portfolio-section">
        <div className="portfolio-container">
          <div className="portfolio-cta-content">
            <h2 className="heading-lg">Ready to Start Your Project?</h2>
            <p>Let's turn your ideas into reality together</p>
            <Link to="/contact" className="portfolio-btn portfolio-btn-accent">Contact Me</Link>
          </div>
          <div className="portfolio-cta-decoration">
            <div className="portfolio-decoration-circle"></div>
            <div className="portfolio-decoration-line"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioHome;