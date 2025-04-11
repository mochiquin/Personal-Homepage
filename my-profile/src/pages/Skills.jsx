// pages/Skills.jsx
import { useState } from 'react';
import '../styles/Skills.css';

const Skills = () => {
  // 技能数据
  const skillsData = {
    frontend: [
      { name: "HTML5", level: 95, icon: "fab fa-html5" },
      { name: "CSS3/SASS", level: 90, icon: "fab fa-css3-alt" },
      { name: "JavaScript", level: 90, icon: "fab fa-js" },
      { name: "React", level: 85, icon: "fab fa-react" },
      { name: "Vue.js", level: 80, icon: "fab fa-vuejs" },
      { name: "TypeScript", level: 75, icon: "fas fa-code" },
      { name: "Redux", level: 80, icon: "fas fa-database" },
      { name: "Next.js", level: 70, icon: "fas fa-forward" }
    ],
    backend: [
      { name: "Node.js", level: 80, icon: "fab fa-node-js" },
      { name: "Express", level: 75, icon: "fas fa-server" },
      { name: "MongoDB", level: 70, icon: "fas fa-database" },
      { name: "Firebase", level: 85, icon: "fas fa-fire" },
      { name: "REST API", level: 90, icon: "fas fa-plug" },
      { name: "GraphQL", level: 65, icon: "fas fa-project-diagram" }
    ],
    design: [
      { name: "Figma", level: 85, icon: "fab fa-figma" },
      { name: "Adobe XD", level: 80, icon: "fas fa-pencil-ruler" },
      { name: "Photoshop", level: 75, icon: "fas fa-paint-brush" },
      { name: "Illustrator", level: 70, icon: "fas fa-bezier-curve" },
      { name: "UI/UX Design", level: 85, icon: "fas fa-desktop" },
      { name: "Responsive Design", level: 95, icon: "fas fa-mobile-alt" }
    ],
    tools: [
      { name: "Git/GitHub", level: 90, icon: "fab fa-git-alt" },
      { name: "Webpack", level: 75, icon: "fas fa-box-open" },
      { name: "npm/yarn", level: 85, icon: "fab fa-npm" },
      { name: "VS Code", level: 95, icon: "fas fa-code" },
      { name: "Chrome DevTools", level: 90, icon: "fas fa-bug" },
      { name: "Terminal", level: 80, icon: "fas fa-terminal" }
    ]
  };

  // 项目经验数据
  const experienceData = [
    {
      title: "响应式网站开发",
      description: "设计和开发适应各种设备的现代化响应式网站，提供卓越的用户体验。",
      icon: "fas fa-laptop-code"
    },
    {
      title: "单页应用(SPA)开发",
      description: "使用React和Vue创建高性能、交互丰富的单页应用程序。",
      icon: "fas fa-file-code"
    },
    {
      title: "UI/UX设计",
      description: "创建直观、美观且用户友好的界面，专注于用户体验和交互设计。",
      icon: "fas fa-paint-brush"
    },
    {
      title: "移动应用开发",
      description: "使用React Native开发跨平台移动应用，提供原生应用体验。",
      icon: "fas fa-mobile-alt"
    }
  ];

  // 激活的技能类别
  const [activeCategory, setActiveCategory] = useState("frontend");

  return (
    <div className="skills">
      {/* 页面标题 */}
      <section className="skills-header">
        <div className="skills-header-content">
          <h1 className="heading-xl">我的技能</h1>
          <p>专业技能与工作经验</p>
        </div>
      </section>

      {/* 技能概览 */}
      <section className="skills-showcase section">
        <div className="container">
          <div className="skills-tabs">
            <div className="tabs-header">
              {Object.keys(skillsData).map((category) => (
                <button
                  key={category}
                  className={`tab-btn ${activeCategory === category ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category === 'frontend' && '前端开发'}
                  {category === 'backend' && '后端开发'}
                  {category === 'design' && '设计能力'}
                  {category === 'tools' && '开发工具'}
                </button>
              ))}
            </div>
            
            <div className="tabs-content">
              <div className="tab-pane active">
                <div className="skills-grid">
                  {skillsData[activeCategory].map((skill, index) => (
                    <div className="skill-item" key={index}>
                      <div className="skill-icon">
                        <i className={skill.icon}></i>
                      </div>
                      <div className="skill-info">
                        <h3>{skill.name}</h3>
                        <div className="skill-level">
                          <div className="skill-bar">
                            <div 
                              className="skill-progress" 
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                          <span className="skill-percentage">{skill.level}%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 专业领域 */}
      <section className="expertise-section section">
        <div className="container">
          <div className="section-header">
            <h2 className="heading-lg">专业领域</h2>
            <p>我的专业知识和服务</p>
          </div>
          
          <div className="expertise-grid">
            {experienceData.map((item, index) => (
              <div className="expertise-card" key={index}>
                <div className="expertise-icon">
                  <i className={item.icon}></i>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 工作流程 */}
      <section className="workflow-section section">
        <div className="container">
          <div className="section-header">
            <h2 className="heading-lg">工作流程</h2>
            <p>我如何将想法转变为现实</p>
          </div>
          
          <div className="workflow-steps">
            <div className="workflow-step">
              <div className="step-number">01</div>
              <div className="step-content">
                <h3>需求分析</h3>
                <p>深入了解项目需求和目标，与客户密切沟通以确保全面理解项目愿景。</p>
              </div>
            </div>
            
            <div className="workflow-step">
              <div className="step-number">02</div>
              <div className="step-content">
                <h3>概念设计</h3>
                <p>创建原型和线框图，设计用户界面和体验，确定项目的整体风格和方向。</p>
              </div>
            </div>
            
            <div className="workflow-step">
              <div className="step-number">03</div>
              <div className="step-content">
                <h3>开发实现</h3>
                <p>使用最合适的技术栈进行开发，确保代码质量和性能优化。</p>
              </div>
            </div>
            
            <div className="workflow-step">
              <div className="step-number">04</div>
              <div className="step-content">
                <h3>测试与优化</h3>
                <p>进行全面测试，修复问题，优化用户体验和性能，确保产品质量。</p>
              </div>
            </div>
            
            <div className="workflow-step">
              <div className="step-number">05</div>
              <div className="step-content">
                <h3>部署与维护</h3>
                <p>将项目部署到生产环境，提供持续的支持和维护服务。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 技能统计 */}
      <section className="skills-stats section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">5+</div>
              <div className="stat-label">年工作经验</div>
            </div>
            
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">完成项目</div>
            </div>
            
            <div className="stat-item">
              <div className="stat-number">30+</div>
              <div className="stat-label">满意客户</div>
            </div>
            
            <div className="stat-item">
              <div className="stat-number">20+</div>
              <div className="stat-label">技术工具</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA部分 */}
      <section className="skills-cta section">
        <div className="container">
          <div className="cta-content">
            <h2 className="heading-lg">准备好开始你的项目了吗？</h2>
            <p>我可以帮助你将想法变为现实，打造出色的数字体验。</p>
            <a href="/contact" className="btn btn-accent">联系我</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;