// pages/Home.jsx
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import heroBg from '../assets/hero-bg.jpg'; // Import background image
import DynamicCircle from '../components/DynamicCircle';


const Home = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  
  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!heroRef.current || !textRef.current) return;
      
      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;
      
      // Calculate mouse position relative to window center
      const moveX = (clientX - innerWidth / 2) / (innerWidth / 2) * -15;
      const moveY = (clientY - innerHeight / 2) / (innerHeight / 2) * -15;
      
      // Apply parallax effect
      textRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero" ref={heroRef} style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="hero-content">
          <div className="hero-text" ref={textRef}>
            <h1 className="hero-heading">
              <span>Creation</span>
              <span>Design</span>
              <span>Develop</span>
            </h1>
            
            <p className="hero-subheading">
              Futuristic × Stylish × Avant-garde Design
            </p>
            
            <div className="hero-cta">
              <Link to="/projects" className="btn">View Projects</Link>
              <Link to="/contact" className="btn btn-accent">Contact Me</Link>
            </div>
          </div>
        </div>
        <div className="hero-overlay"></div>
        <DynamicCircle />
        <div className="scroll-indicator">
          <span>Scroll Down</span>
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="intro section">
        <div className="container">
          <div className="intro-content">
            <div className="intro-title">
              <h2 className="heading-lg" data-text="ABOUT">Digital Artist & Designer</h2>
              <div className="line"></div>
            </div>
            
            <div className="intro-text">
              <p>
                Blending artistic vision with technical expertise to create captivating digital illustrations.
              </p>
              
              <p>
                I specialize in realistic-style artwork and interactive digital experiences with a focus on detail and atmosphere.
              </p>
              
              <Link to="/about" className="text-link">Learn More <span>→</span></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="featured-projects section">
        <div className="container">
          <div className="section-header">
            <h2 className="heading-lg">Featured Projects</h2>
            <p>Explore my artistic journey and illustration portfolio</p>
            <br />
          </div>
          
          <div className="projects-grid">
            <div className="project-card featured">
              <div className="project-image">
                <img src="/assets/2.jpg" alt="Atomic Heart Illustration" />
                <div className="project-overlay">
                  <div className="project-meta">
                    <span className="project-category">Digital Illustration</span>
                    <div className="project-meta-header">
                      <h3 className="project-title">Atomic Heart</h3>
                      <Link to="/projects" className="btn">View Details</Link>
                    </div>
                    <p className="project-description">
                      Fan art illustration inspired by the Atomic Heart game universe, showcasing detailed character rendering and atmospheric environment design.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="project-card">
              <div className="project-image">
                <img src="/assets/3.jpg" alt="Realistic Portrait Illustration" />
                <div className="project-overlay">
                  <div className="project-meta">
                    <span className="project-category">Realistic Illustration</span>
                    <div className="project-meta-header">
                      <h3 className="project-title">Character Study</h3>
                      <Link to="/projects" className="btn">View Details</Link>
                    </div>
                    <p className="project-description">
                      Hyper-realistic character portrait with detailed lighting and texturing
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="project-card">
              <div className="project-image">
                <img src="/assets/1.jpg" alt="Realistic Environment Illustration" />
                <div className="project-overlay">
                  <div className="project-meta">
                    <span className="project-category">Environment Art</span>
                    <div className="project-meta-header">
                      <h3 className="project-title">Scenic Landscape</h3>
                      <Link to="/projects" className="btn">View Details</Link>
                    </div>
                    <p className="project-description">
                      Photorealistic environmental illustration with atmospheric lighting
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="section-footer">
            <br />
            <Link to="/projects" className="btn btn-accent">View All Projects</Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-overview section">
        <div className="container">
          <div className="skills-content">
            <div className="skills-text">
              <h2 className="heading-lg">Skills & Expertise</h2>
              <p>Bringing artistic visions to life requires both creative talent and technical proficiency. These are the tools and techniques I've mastered.</p>
              <Link to="/skills" className="btn">Explore My Skills</Link>
            </div>
            
            <div className="skills-showcase">
              <div className="skill-category">
                <h3>Digital Illustration</h3>
                <div className="skill-tags">
                  <span className="skill-tag">Concept Art</span>
                  <span className="skill-tag">Character Design</span>
                  <span className="skill-tag">Environment Art</span>
                  <span className="skill-tag">Realistic Rendering</span>
                  <span className="skill-tag">Digital Painting</span>
                </div>
              </div>
              
              <div className="skill-category">
                <h3>3D & Visual Design</h3>
                <div className="skill-tags">
                  <span className="skill-tag">Blender</span>
                  <span className="skill-tag">Cinema 4D</span>
                  <span className="skill-tag">OC Rendering</span>
                  <span className="skill-tag">3D Modeling</span>
                  <span className="skill-tag">Texture Creation</span>
                </div>
              </div>
              
              <div className="skill-category">
                <h3>Web & Interactive</h3>
                <div className="skill-tags">
                  <span className="skill-tag">React</span>
                  <span className="skill-tag">JavaScript</span>
                  <span className="skill-tag">CSS3</span>
                  <span className="skill-tag">Photoshop</span>
                  <span className="skill-tag">Illustrator</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-cta section">
        <div className="container">
          <div className="cta-content">
            <h2 className="heading-lg">Ready to Start Your Project?</h2>
            <p>Let's turn your ideas into reality together</p>
            <Link to="/contact" className="btn btn-accent">Contact Me</Link>
          </div>
          <div className="cta-decoration">
            <div className="decoration-circle"></div>
            <div className="decoration-line"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;