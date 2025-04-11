// src/pages/Projects.js
import { useState } from 'react';
import { projects } from '../data/projects';
import '../styles/Projects.css';

function Projects() {
  const [filter, setFilter] = useState('all');
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.technologies.includes(filter));
    
  return (
    <div className="projects-container">
      <section className="projects-intro">
        <h1>我的项目作品</h1>
        <p>这里展示了我最近完成的一些项目。每个项目都展示了我的技能和解决问题的能力。</p>
      </section>
      
      <section className="projects-filter">
        <button 
          className={filter === 'all' ? 'active' : ''} 
          onClick={() => setFilter('all')}
        >
          全部
        </button>
        <button 
          className={filter === 'React' ? 'active' : ''} 
          onClick={() => setFilter('React')}
        >
          React
        </button>
        <button 
          className={filter === 'Vue' ? 'active' : ''} 
          onClick={() => setFilter('Vue')}
        >
          Vue
        </button>
        {/* 添加更多筛选按钮 */}
      </section>
      
      <section className="projects-grid">
        {filteredProjects.map(project => (
          <div className="project-card" key={project.id}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies.map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-sm">
                  查看代码
                </a>
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">
                  在线演示
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Projects;