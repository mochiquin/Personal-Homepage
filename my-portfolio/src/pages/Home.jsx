// pages/Home.jsx
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import heroBg from '../assets/hero-bg.jpg'; // 导入背景图片
import DynamicCircle from '../components/DynamicCircle';
import projectImage from '../assets/2.jpg';
const Home = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  
  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!heroRef.current || !textRef.current) return;
      
      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;
      
      // 计算鼠标位置相对于窗口中心的比例
      const moveX = (clientX - innerWidth / 2) / (innerWidth / 2) * -15;
      const moveY = (clientY - innerHeight / 2) / (innerHeight / 2) * -15;
      
      // 应用视差效果
      textRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="home">
      {/* 英雄区域 */}
      <section className="hero" ref={heroRef} style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="hero-content">
          <div className="hero-text" ref={textRef}>
            <h1 className="hero-heading">
              <span>Creation</span>
              <span>design</span>
              <span>develop</span>
            </h1>
            <p className="hero-subheading">
              未来感 x 风格 x 前卫设计
            </p>
            <div className="hero-cta">
              <Link to="/projects" className="btn">查看作品</Link>
              <Link to="/contact" className="btn btn-accent">联系我</Link>
            </div>
          </div>
        </div>
        <div className="hero-overlay"></div>
        <DynamicCircle />
        <div className="scroll-indicator">
          <span>向下滚动</span>
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* 介绍区域 */}
      <section className="intro section">
        <div className="container">
          <div className="intro-content">
            <div className="intro-title">
              <h2 className="heading-lg" data-text="ABOUT">Web designer</h2>
              <div className="line"></div>
            </div>
            <div className="intro-text">
              <p>融合设计与科技，创造超越时代的数字体验。我专注于开发具有前卫美学和卓越功能的网站和应用程序。</p>
              <Link to="/about" className="text-link">了解更多 <span>→</span></Link>
            </div>
          </div>
        </div>
      </section>

      {/* 项目区域 */}
      <section className="featured-projects section">
        <div className="container">
          <div className="section-header">
            <h2 className="heading-lg">精选项目</h2>
            <p>探索我的创意历程和技术实现</p>
          </div>
          
          <div className="projects-grid">
            <div className="project-card featured">
              <div className="project-image">
              <img src="/assets/2.jpg" alt="未来科技官网项目展示图" />
                <div className="project-overlay">
                  <div className="project-meta">
                    <span className="project-category">Web开发</span>
                    <h3 className="project-title">未来科技官网</h3>
                    <p className="project-description">结合最新技术和创新设计的企业网站</p>
                    <Link to="/projects" className="btn">查看详情</Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="project-card">
              <div className="project-image">
                <img src="/assets/3.jpg" alt="项目二" />
                <div className="project-overlay">
                  <div className="project-meta">
                    <span className="project-category">UI/UX设计</span>
                    <h3 className="project-title">电子商务平台</h3>
                    <p className="project-description">现代化的购物体验设计</p>
                    <Link to="/projects" className="btn">查看详情</Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="project-card">
              <div className="project-image">
                <img src="/assets/1.jpg" alt="项目三" />
                <div className="project-overlay">
                  <div className="project-meta">
                    <span className="project-category">移动应用</span>
                    <h3 className="project-title">生活方式APP</h3>
                    <p className="project-description">帮助用户追踪日常活动的应用程序</p>
                    <Link to="/projects" className="btn">查看详情</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="section-footer">
            <Link to="/projects" className="btn btn-accent">查看全部项目</Link>
          </div>
        </div>
      </section>

      {/* 技能区域 */}
      <section className="skills-overview section">
        <div className="container">
          <div className="skills-content">
            <div className="skills-text">
              <h2 className="heading-lg">技术 & 专长</h2>
              <p>将创意转化为现实需要精湛的技术。这些是我熟练掌握的工具和技能。</p>
              <Link to="/skills" className="btn">探索我的技能</Link>
            </div>
            
            <div className="skills-showcase">
              <div className="skill-category">
                <h3>前端开发</h3>
                <div className="skill-tags">
                  <span className="skill-tag">React</span>
                  <span className="skill-tag">Vue</span>
                  <span className="skill-tag">JavaScript</span>
                  <span className="skill-tag">CSS3</span>
                  <span className="skill-tag">HTML5</span>
                </div>
              </div>
              
              <div className="skill-category">
                <h3>后端技术</h3>
                <div className="skill-tags">
                  <span className="skill-tag">Node.js</span>
                  <span className="skill-tag">Express</span>
                  <span className="skill-tag">MongoDB</span>
                  <span className="skill-tag">RESTful API</span>
                </div>
              </div>
              
              <div className="skill-category">
                <h3>设计工具</h3>
                <div className="skill-tags">
                  <span className="skill-tag">Figma</span>
                  <span className="skill-tag">Adobe XD</span>
                  <span className="skill-tag">Photoshop</span>
                  <span className="skill-tag">Illustrator</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 联系区域 */}
      <section className="contact-cta section">
        <div className="container">
          <div className="cta-content">
            <h2 className="heading-lg">准备好开始你的项目了吗？</h2>
            <p>让我们一起将你的想法变为现实</p>
            <Link to="/contact" className="btn btn-accent">联系我</Link>
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