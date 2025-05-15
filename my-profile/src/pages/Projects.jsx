import { useState } from 'react';
import '../styles/Projects.css';

const Projects = () => {
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
    },
    {
      id: 3,
      title: "E-commerce Dashboard",
      description: "An admin dashboard for e-commerce businesses with sales analytics, inventory management, and customer insights using modern web technologies.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      codeUrl: "https://github.com/yourusername/ecommerce-dashboard",
      demoUrl: "https://dashboard-demo.yourwebsite.com",
      image: "/images/dashboard-project.jpg"
    },
    {
      id: 4,
      title: "Mobile Weather App",
      description: "A sleek weather application for iOS and Android that provides real-time forecasts, radar maps, and weather alerts with a beautiful UI.",
      technologies: ["React Native", "JavaScript", "API Integration"],
      codeUrl: "https://github.com/yourusername/weather-app",
      demoUrl: "https://weatherapp.yourwebsite.com",
      image: "/images/weather-app.jpg"
    }
  ];

  // Categories for filtering
  const categories = [
    { name: 'all', label: 'All Projects' },
    { name: 'React', label: 'React' },
    { name: 'Digital Art', label: 'Digital Art' },
    { name: 'JavaScript', label: 'JavaScript' }
  ];

  // State for active filter
  const [activeFilter, setActiveFilter] = useState('all');

  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.technologies.includes(activeFilter));

  return (
    <div className="projects">
      <div className="projects-container">
        {/* Page header */}
        <section className="projects-header">
          <div className="projects-header-content">
            <h1 className="heading-xl">My Projects</h1>
            <p>Here are some of my recent projects showcasing my skills and problem-solving abilities.</p>
          </div>
        </section>

        {/* Projects showcase */}
        <section className="projects-showcase">
          {/* Filter tabs */}
          <div className="projects-tabs">
            <div className="projects-tabs-header">
              {categories.map((category) => (
                <button
                  key={category.name}
                  className={`projects-tab-btn ${activeFilter === category.name ? 'active' : ''}`}
                  onClick={() => setActiveFilter(category.name)}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Projects grid */}
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <div className="project-item" key={project.id}>
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-details">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech, index) => (
                      <span className="project-tech-tag" key={index}>{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a
                      href={project.codeUrl}
                      className="project-link-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Code
                    </a>
                    <a
                      href={project.demoUrl}
                      className="project-link-btn project-link-btn-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA section */}
        <section className="projects-cta">
          <div className="projects-cta-content">
            <h2 className="heading-lg">Interested in collaborating?</h2>
            <p>Let's work together to bring your ideas to life with creative solutions.</p>
            <a href="/contact" className="projects-btn-accent">Contact Me</a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;