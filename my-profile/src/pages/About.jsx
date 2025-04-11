// pages/About.jsx
import React, { useEffect, useState } from 'react';
import '../styles/About.css';

const About = () => {
  // Timeline data
  const timelineData = [
    {
      year: '2025',
      title: 'Freelance Developer',
      description: 'Started working as an independent developer, focusing on creating unique digital experiences with 3D elements.'
    },
    {
      year: '2024',
      title: 'Post-Graduate',
      description: 'Completed post-graduate studies in Computing and Innovation, specializing in web development, 3D design, and UI/UX design.'
    },
    {
      year: '2020',
      title: 'University',
      description: 'Studied New Energy at Shanghai University of Electric Power.'
    },
  ];

  // Skills data for the skills section
  const skillsData = [
    {
      category: '3D Design',
      icon: 'cube',
      description: 'Creating immersive 3D models, animations, and interactive elements.',
      skills: ['Blender', 'C4D', 'Octane render', '3D Modeling', 'Animation']
    },
    {
      category: 'Frontend',
      icon: 'code',
      description: 'Building responsive, performant, and visually appealing websites.',
      skills: ['HTML/CSS/JavaScript', 'React', 'Next.js', 'Responsive Design', 'Performance Optimization']
    },
    {
      category: 'UI/UX',
      icon: 'paint-brush',
      description: 'Designing intuitive interfaces and seamless user experiences.',
      skills: ['Figma', 'Adobe XD', 'Prototyping', 'Wireframing', 'User Research']
    }
  ];

  // State for scroll animation
  const [scrollPosition, setScrollPosition] = useState(0);
  
  // Handle scroll event to track scroll position
  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Smooth scroll function
  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="kojima-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-title-container">
            <h1 className="hero-title">SILIN LI</h1>
            <div className="hero-subtitle">CREATOR | DEVELOPER | DESIGNER</div>
          </div>
          <div className="scroll-prompt">
            <span>Scroll to explore</span>
            <div className="scroll-arrow"></div>
          </div>
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-bg" style={{backgroundImage: "url('../assets/hero-bg.jpg')"}}></div>
      </section>
      
      {/* About Section - Kojima Inspired Vertical Text */}
      <section className="about-section">
        {/* About Header with white line */}
        <div className="about-header-container">
          <div className="about-container">
            <h2 className="about-header-title">ABOUT</h2>
            <div className="about-header-line"></div>
          </div>
        </div>
        
        {/* Redesigned About Content with background image and vertical text */}
        <div className="kojima-about-background">
          <div className="kojima-about-container">
            <div className="kojima-about-content">
              <div className="kojima-vertical-text">
                <p className="kojima-text-line">I am a passionate creator specializing in 3D design,</p>
                <p className="kojima-text-line">frontend development, and UI/UX design.</p>
                <p className="kojima-text-line">I craft unique digital experiences by combining</p>
                <p className="kojima-text-line">technical expertise with design aesthetics.</p>
                <p className="kojima-text-line">I excel at transforming complex design concepts</p>
                <p className="kojima-text-line">into intuitive user interfaces with immersive 3D elements.</p>
                <p className="kojima-text-line">With user experience at the core of my approach,</p>
                <p className="kojima-text-line">each project becomes an opportunity to blend creativity,</p>
                <p className="kojima-text-line">technology, and three-dimensional thinking.</p>
              </div>
              
              <div className="kojima-profile-section">
                <div className="kojima-profile-image">
                  <img src="../assets/2.jpg" alt="Silin Li" />
                </div>
                
                <div className="kojima-contact-info">
                  <div className="kojima-info-item">
                    <span className="kojima-info-label">Email</span>
                    <span className="kojima-info-value">sili50783@gmail.com</span>
                  </div>
                  
                  <div className="kojima-info-item">
                    <span className="kojima-info-label">Location</span>
                    <span className="kojima-info-value">Adelaide, Australia</span>
                  </div>
                </div>
                
                <div className="kojima-social">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  <a href="https://behance.net" target="_blank" rel="noopener noreferrer">Behance</a>
                </div>
                
                <div className="kojima-signature">
                  <h3>SILIN LI</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Timeline Section */}
      <section className="timeline-section">
        <div className="timeline-container">
          <div className="timeline-header">
            <h2 className="section-title">JOURNEY</h2>
            <div className="section-line"></div>
          </div>
          
          <div className="timeline">
            {timelineData.map((item, index) => (
              <div 
                className={`timeline-item ${scrollPosition > 800 + (index * 100) ? 'visible' : ''}`} 
                key={index}
              >
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-connector">
                  <div className="timeline-dot"></div>
                  <div className="timeline-line"></div>
                </div>
                <div className="timeline-content">
                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="skills-section">
        <div className="skills-container">
          <div className="skills-header">
            <h2 className="section-title">EXPERTISE</h2>
            <div className="section-line"></div>
          </div>
          
          <div className="skills-grid">
            {skillsData.map((skill, index) => (
              <div 
                className={`skill-card ${scrollPosition > 1200 + (index * 100) ? 'visible' : ''}`} 
                key={index}
              >
                <h3 className="skill-title">{skill.category}</h3>
                <p className="skill-description">{skill.description}</p>
                <ul className="skill-list">
                  {skill.skills.map((item, i) => (
                    <li key={i} className="skill-item">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;