// pages/About.jsx
import { useEffect, useState } from 'react';
import '../styles/About.css';
import backgroundImage from '../assets/2.jpg';

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

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero-section">
        <div className="about-hero-content">
          <div className="about-hero-title-container">
            <h1 className="about-hero-title">SILIN LI</h1>
            <div className="about-hero-subtitle">CREATOR | DEVELOPER | DESIGNER</div>
          </div>
          <div className="about-scroll-prompt">
            <span>Scroll to explore</span>
            <div className="about-scroll-arrow"></div>
          </div>
        </div>
        <div className="about-hero-overlay"></div>
        <div className="about-hero-bg" style={{backgroundImage: "url('../assets/hero-bg.jpg')"}}></div>
      </section>
      
      {/* About Section - Kojima Inspired Vertical Text */}
      <section className="about-info-section">
        {/* About Header with white line */}
        <div className="about-header-container">
          <div className="about-container">
            <h2 className="about-header-title">ABOUT</h2>
            <div className="about-header-line"></div>
          </div>
        </div>
        
        {/* Redesigned About Content with background image and vertical text */}
        <div className="about-background" style={{backgroundImage: `url(${backgroundImage})`}}>
          <div className="about-content-container">
            <div className="about-content">
              <div className="about-vertical-text">
                <p className="about-text-line">I am a passionate creator specializing in 3D design,</p>
                <p className="about-text-line">frontend development, and UI/UX design.</p>
                <p className="about-text-line">I craft unique digital experiences by combining</p>
                <p className="about-text-line">technical expertise with design aesthetics.</p>
                <p className="about-text-line">I excel at transforming complex design concepts</p>
                <p className="about-text-line">into intuitive user interfaces with immersive 3D elements.</p>
                <p className="about-text-line">With user experience at the core of my approach,</p>
                <p className="about-text-line">each project becomes an opportunity to blend creativity,</p>
                <p className="about-text-line">technology, and three-dimensional thinking.</p>
              </div>
              
              <div className="about-profile-section">
                <div className="about-profile-image">
                  <img src="../assets/2.jpg" alt="Silin Li" />
                </div>
                
                <div className="about-contact-info">
                  <div className="about-info-item">
                    <span className="about-info-label">Email</span>
                    <span className="about-info-value">sili50783@gmail.com</span>
                  </div>
                  
                  <div className="about-info-item">
                    <span className="about-info-label">Location</span>
                    <span className="about-info-value">Adelaide, Australia</span>
                  </div>
                </div>
                
                <div className="about-social">
                  <a href="https://github.com/mochiquin" target="_blank" rel="noopener noreferrer">GitHub</a>
                  <a href="https://www.linkedin.com/in/silin-li-9956462a9" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  <a href="https://www.artstation.com/pelosolar" target="_blank" rel="noopener noreferrer">ArtStation</a>
                </div>
                
                <div className="about-signature">
                  <h3>SILIN LI</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Timeline Section */}
      <section className="about-timeline-section">
        <div className="about-timeline-container">
          <div className="about-timeline-header">
            <h2 className="about-section-title">JOURNEY</h2>
            <div className="about-section-line"></div>
          </div>
          
          <div className="about-timeline">
            {timelineData.map((item, index) => (
              <div 
                className={`about-timeline-item ${scrollPosition > 800 + (index * 100) ? 'visible' : ''}`} 
                key={index}
              >
                <div className="about-timeline-year">{item.year}</div>
                <div className="about-timeline-connector">
                  <div className="about-timeline-dot"></div>
                  <div className="about-timeline-line"></div>
                </div>
                <div className="about-timeline-content">
                  <h3 className="about-timeline-title">{item.title}</h3>
                  <p className="about-timeline-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Skills Section - using about- prefix to avoid conflicts */}
      <section className="about-skills-section">
        <div className="about-skills-container">
          <div className="about-skills-header">
            <h2 className="about-section-title">EXPERTISE</h2>
            <div className="about-section-line"></div>
          </div>
          
          <div className="about-skills-grid">
            {skillsData.map((skill, index) => (
              <div 
                className={`about-skill-card ${scrollPosition > 1200 + (index * 100) ? 'visible' : ''}`} 
                key={index}
              >
                <h3 className="about-skill-title">{skill.category}</h3>
                <p className="about-skill-description">{skill.description}</p>
                <ul className="about-skill-list">
                  {skill.skills.map((item, i) => (
                    <li key={i} className="about-skill-item">{item}</li>
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