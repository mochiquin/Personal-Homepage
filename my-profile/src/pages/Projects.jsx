// src/pages/Projects.js
import { useState } from 'react';
import '../styles/Projects.css';

function Projects() {
  const [filter, setFilter] = useState('all');
  
  // Project data
  const projects = [
    {
      id: 1,
      title: "Personal Portfolio Website",
      description: "A responsive portfolio website built with React to showcase my projects and skills. Features include dark/light mode, smooth animations, and a contact form.",
      technologies: ["React", "JavaScript", "CSS", "HTML"],
      codeUrl: "https://github.com/yourusername/portfolio-website",
      demoUrl: "https://yourwebsite.com",
      image: "/images/portfolio-project.jpg"
    },
    {
      id: 2,
      title: "Atomic Heart Illustrations",
      description: "A collection of digital illustrations inspired by the Atomic Heart game. Created using professional design tools with attention to detail and art direction.",
      technologies: ["Photoshop", "Illustrator", "Digital Art"],
      codeUrl: "https://github.com/yourusername/atomic-heart-illustrations",
      demoUrl: "https://behance.net/yourusername/atomic-heart",
      image: "/images/atomic-heart-illustrations.jpg"
    }
  ];
  
  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.technologies.includes(filter));
    
  return (
    <div className="projects-page-container">
      <div className="projects-page-header">
        <h1>My Projects</h1>
        <p>Here are some of my recent projects showcasing my skills and problem-solving abilities.</p>
      </div>
      
      <div className="projects-filter-buttons">
        <button 
          className={filter === 'all' ? 'active' : ''} 
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button 
          className={filter === 'React' ? 'active' : ''} 
          onClick={() => setFilter('React')}
        >
          React
        </button>
        <button 
          className={filter === 'Digital Art' ? 'active' : ''} 
          onClick={() => setFilter('Digital Art')}
        >
          Digital Art
        </button>
        <button 
          className={filter === 'JavaScript' ? 'active' : ''} 
          onClick={() => setFilter('JavaScript')}
        >
          JavaScript
        </button>
      </div>
      
      <div className="projects-grid-layout">
        {filteredProjects.map(project => (
          <div className="project-item-card" key={project.id}>
            <div className="project-item-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-item-content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="project-item-technologies">
                {project.technologies.map(tech => (
                  <span className="project-tech-tag" key={tech}>{tech}</span>
                ))}
              </div>
              <div className="project-item-links">
                <a href={project.codeUrl} className="project-link-btn" target="_blank" rel="noopener noreferrer">
                  View Code
                </a>
                <a href={project.demoUrl} className="project-link-btn project-link-btn-primary" target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;