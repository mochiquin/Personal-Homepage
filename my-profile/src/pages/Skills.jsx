import { useState } from 'react';
import '../styles/Skills.css';

const Skills = () => {
  // Skills data
  const skillsData = {
    frontend: [
      { name: "HTML5", level: 95, icon: "fab fa-html5" },
      { name: "CSS3/SASS", level: 90, icon: "fab fa-css3-alt" },
      { name: "JavaScript", level: 30, icon: "fab fa-js" },
      { name: "React", level: 85, icon: "fab fa-react" },
      { name: "Vue.js", level: 80, icon: "fab fa-vuejs" },
      { name: "TypeScript", level: 75, icon: "fas fa-code" },
      { name: "Next.js", level: 70, icon: "fas fa-forward" }
    ],
    design: [
      { name: "Blender", level: 85, icon: "fas fa-cube" },
      { name: "C4D", level: 80, icon: "fas fa-3d-rotation" },
      { name: "Octane Render", level: 85, icon: "fas fa-photo-video" },
      { name: "UI/UX Design", level: 85, icon: "fas fa-desktop" },
      { name: "Figma", level: 90, icon: "fab fa-figma" }
    ]
  };

  // Professional experience data
  const experienceData = [
    {
      title: "Concept Design",
      description: "Creating innovative design concepts for digital products with a focus on aesthetics and usability.",
      icon: "fas fa-lightbulb"
    },
    {
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces using modern frontend technologies.",
      icon: "fas fa-laptop-code"
    },
    {
      title: "Web Development",
      description: "Developing modern websites that are optimized for performance, accessibility, and user experience.",
      icon: "fas fa-globe"
    }
  ];

  // Active skill category
  const [activeCategory, setActiveCategory] = useState("frontend");

  return (
    // Use a wrapper div with skills class for full-width background
    <div className="skills">
      {/* Wrap content in skills-container for styles */}
      <div className="skills-container">
        {/* Page header */}
        <section className="skills-header">
          <div className="skills-header-content">
            <h1 className="heading-xl">My Skills</h1>
            <p>Professional Skills & Work Experience</p>
          </div>
        </section>

        {/* Skills overview */}
        <section className="skills-showcase skills-section">
          <div className="skills-tabs">
            <div className="skills-tabs-header">
              {Object.keys(skillsData).map((category) => (
                <button
                  key={category}
                  className={`skills-tab-btn ${activeCategory === category ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category === 'frontend' && 'Frontend Development'}
                  {category === 'design' && 'Design Skills'}
                </button>
              ))}
            </div>

            <div className="skills-tabs-content">
              <div className="skills-tab-pane active">
                <div className="skills-grid">
                  {skillsData[activeCategory].map((skill, index) => (
                    <div className="skills-item" key={index}>
                      <div className="skills-item-icon">
                        <i className={skill.icon}></i>
                      </div>
                      <div className="skills-item-info">
                        <h3>{skill.name}</h3>
                        <div className="skills-level">
                          <div className="skills-bar">
                            <div
                              className="skills-progress"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                          <span className="skills-percentage">{skill.level}%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Areas of expertise */}
        <section className="skills-expertise skills-section">
          <div className="skills-section-header">
            <h2 className="heading-lg">Areas of Expertise</h2>
            <p>My professional knowledge and services</p>
          </div>

          <div className="skills-expertise-grid">
            {experienceData.map((item, index) => (
              <div className="skills-expertise-card" key={index}>
                <div className="skills-expertise-icon">
                  <i className={item.icon}></i>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Workflow */}
        <section className="skills-workflow skills-section">
          <div className="skills-section-header">
            <h2 className="heading-lg">Workflow</h2>
            <p>How I turn ideas into reality</p>
          </div>

          <div className="skills-workflow-steps">
            <div className="skills-workflow-step">
              <div className="skills-step-number">01</div>
              <div className="skills-step-content">
                <h3>Requirements Analysis</h3>
                <p>In-depth understanding of project requirements and goals, close communication with clients to ensure comprehensive understanding of the project vision.</p>
              </div>
            </div>

            <div className="skills-workflow-step">
              <div className="skills-step-number">02</div>
              <div className="skills-step-content">
                <h3>Concept Design</h3>
                <p>Creating prototypes and wireframes, designing user interfaces and experiences, determining the overall style and direction of the project.</p>
              </div>
            </div>

            <div className="skills-workflow-step">
              <div className="skills-step-number">03</div>
              <div className="skills-step-content">
                <h3>Development</h3>
                <p>Using the most appropriate technology stack for development, ensuring code quality and performance optimization.</p>
              </div>
            </div>

            <div className="skills-workflow-step">
              <div className="skills-step-number">04</div>
              <div className="skills-step-content">
                <h3>Testing & Optimization</h3>
                <p>Conducting comprehensive testing, fixing issues, optimizing user experience and performance, ensuring product quality.</p>
              </div>
            </div>

            <div className="skills-workflow-step">
              <div className="skills-step-number">05</div>
              <div className="skills-step-content">
                <h3>Deployment & Maintenance</h3>
                <p>Deploying the project to production environment, providing continuous support and maintenance services.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills statistics */}
        <section className="skills-stats skills-section">
          <div className="skills-stats-grid">
            <div className="skills-stat-item">
              <div className="skills-stat-number">2+</div>
              <div className="skills-stat-label">Years of Experience</div>
            </div>

            <div className="skills-stat-item">
              <div className="skills-stat-number">10+</div>
              <div className="skills-stat-label">Completed Projects</div>
            </div>

            <div className="skills-stat-item">
              <div className="skills-stat-number">30+</div>
              <div className="skills-stat-label">Satisfied Clients</div>
            </div>

            <div className="skills-stat-item">
              <div className="skills-stat-number">12+</div>
              <div className="skills-stat-label">Tools & Technologies</div>
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section className="skills-cta skills-section">
          <div className="skills-cta-content">
            <h2 className="heading-lg">Ready to start your project?</h2>
            <p>I can help turn your ideas into reality and create outstanding digital experiences.</p>
            <a href="/contact" className="skills-btn-accent">Contact Me</a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Skills;