// pages/About.jsx
import React from 'react';
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

  // Skills data
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

  // Design principles
  const designPrinciples = [
    {
      number: '01',
      title: 'User-Centric Approach',
      description: 'Placing user needs at the core of all design decisions to create intuitive and accessible interfaces.'
    },
    {
      number: '02',
      title: '3D Immersion',
      description: 'Integrating thoughtful 3D elements to enhance engagement and create memorable digital experiences.'
    },
    {
      number: '03',
      title: 'Cutting-Edge Technology',
      description: 'Embracing new technologies and exploring innovative solutions while maintaining practicality and performance.'
    }
  ];
  
  // Smooth scroll function
  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="modernist-container">
      {/* Main grid container */}
      <div className="about-grid">
        {/* Name block */}
        <div className="name-block">
          <h1 className="name">SILIN LI</h1>
          <div className="scroll-indicator" onClick={() => scrollToElement('journey')}>
            <span>SCROLL TO EXPLORE</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4V20M12 20L18 14M12 20L6 14" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Title block */}
        <div className="title-block">
          <div className="title-content">
            <h2 className="profession">3D Designer</h2>
            <div className="separator"></div>
            <h2 className="profession">Frontend Developer</h2>
            <div className="separator"></div>
            <h2 className="profession">UI/UX Designer</h2>
          </div>
        </div>

        {/* Profile image */}
        <div className="profile-image-block">
          <div className="profile-image-container">
            <img src="/assets/1.jpg" alt="Silin Li" className="profile-image" />
          </div>
          <div className="image-caption">Portfolio — 2025</div>
        </div>

        {/* Bio block */}
        <div className="bio-block">
          <p className="bio-text">
            I am a passionate creator specializing in 3D design, frontend development, and UI/UX design. I craft unique and engaging digital experiences by combining technical expertise with design aesthetics.
          </p>
          <p className="bio-text">
            I excel at transforming complex design concepts into intuitive user interfaces with immersive 3D elements. With user experience at the core of my approach, each project becomes an opportunity to blend creativity, technology, and three-dimensional thinking.
          </p>
        </div>

        {/* Contact block */}
        <div className="contact-block">
          <div className="contact-item">
            <span className="contact-label">Email</span>
            <span className="contact-value">sili50783@gmail.com</span>
          </div>
          <div className="contact-item">
            <span className="contact-label">Telephone</span>
            <span className="contact-value">0435566271</span>
          </div>
          <div className="contact-item">
            <span className="contact-label">Location</span>
            <span className="contact-value">Adelaide, Australia</span>
          </div>
          <div className="resume-download">
            <a href="/resume.pdf" download className="download-button">
              Download Resume [PDF]
            </a>
          </div>
        </div>

        {/* Social links */}
        <div className="social-block">
          <div className="social-title">CONNECT</div>
          <div className="social-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
              LinkedIn
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
              Instagram
            </a>
            <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="social-link">
              Behance
            </a>
          </div>
        </div>

        {/* Journey timeline */}
        <div className="journey-block" id="journey">
          <div className="journey-title">MY JOURNEY</div>
          <div className="timeline">
            {timelineData.map((item, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-content">
                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Design philosophy */}
        <div className="philosophy-block">
          <div className="philosophy-title">DESIGN PHILOSOPHY</div>
          <div className="philosophy-text">
            I believe design is not just about aesthetics, but a powerful tool for solving problems. My goal is to create work that is both beautiful and functional, where every element has a purpose.
          </div>
          <div className="principles-list">
            {designPrinciples.map((principle, index) => (
              <div className="principle-item" key={index}>
                <div className="principle-number">{principle.number}</div>
                <div className="principle-content">
                  <h3 className="principle-title">{principle.title}</h3>
                  <p className="principle-description">{principle.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills and expertise */}
        <div className="skills-block">
          <div className="skills-title">EXPERTISE</div>
          <div className="skills-grid">
            {skillsData.map((skill, index) => (
              <div className="skill-card" key={index}>
                <div className="skill-header">
                  <h3 className="skill-category">{skill.category}</h3>
                </div>
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
      </div>

      {/* Footer */}
      <footer className="footer-section">
        <div className="footer-copyright">© 2025 SILIN LI. ALL RIGHTS RESERVED.</div>
        <div className="footer-note">DESIGNED WITH MODERNIST PRINCIPLES</div>
      </footer>
    </div>
  );
};

export default About;