// pages/About.jsx
import '../styles/About.css';

const About = () => {
  // 时间线数据
  const timelineData = [
    {
      year: '2023',
      title: '独立开发者',
      description: '开始作为独立开发者工作，专注于创建独特的数字体验。'
    },
    {
      year: '2022',
      title: '高级前端开发',
      description: '在科技公司担任高级前端开发，负责大型电子商务平台重构。'
    },
    {
      year: '2020',
      title: '开始职业生涯',
      description: '在数字机构获得第一份工作，参与多个客户项目的开发。'
    },
    {
      year: '2019',
      title: '大学毕业',
      description: '获得计算机科学学士学位，专注于人机交互和网页设计。'
    }
  ];

  return (
    <div className="about">
      {/* 页面标题 */}
      <section className="about-header">
        <div className="about-header-content">
          <h1 className="heading-xl">关于我</h1>
          <div className="about-header-line"></div>
        </div>
      </section>

      {/* 个人简介 */}
      <section className="about-intro section">
        <div className="container">
          <div className="about-intro-content">
            <div className="about-image">
              <img src="/images/profile.jpg" alt="个人照片" />
              <div className="about-image-decoration"></div>
            </div>
            
            <div className="about-bio">
              <h2>我是 <span className="highlight">你的名字</span></h2>
              <h3>前端开发师 & UI/UX设计师</h3>
              
              <p>
                我是一位充满激情的前端开发者和设计师，专注于创建独特、引人入胜的数字体验。我结合技术专长和设计美感，打造既美观又功能强大的网站和应用。
              </p>
              
              <p>
                我热衷于将复杂的设计理念转化为直观的用户界面，始终以用户体验为核心。每个项目都是一次将创意和技术结合的机会，我享受这个过程带来的挑战和成就感。
              </p>
              
              <div className="about-details">
                <div className="about-detail">
                  <span className="detail-label">姓名</span>
                  <span className="detail-value">你的名字</span>
                </div>
                
                <div className="about-detail">
                  <span className="detail-label">邮箱</span>
                  <span className="detail-value">email@example.com</span>
                </div>
                
                <div className="about-detail">
                  <span className="detail-label">电话</span>
                  <span className="detail-value">+86 123 4567 8900</span>
                </div>
                
                <div className="about-detail">
                  <span className="detail-label">所在地</span>
                  <span className="detail-value">中国，城市</span>
                </div>
              </div>
              
              <div className="about-social">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <i className="fab fa-behance"></i>
                </a>
              </div>
              
              <a href="/resume.pdf" download className="btn btn-accent">
                下载简历
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 我的旅程 */}
      <section className="about-journey section">
        <div className="container">
          <div className="section-header">
            <h2 className="heading-lg">我的旅程</h2>
            <p>追寻梦想的历程</p>
          </div>
          
          <div className="timeline">
            {timelineData.map((item, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-dot"></div>
                <div className="timeline-date">{item.year}</div>
                <div className="timeline-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 理念和价值观 */}
      <section className="about-philosophy section">
        <div className="container">
          <div className="philosophy-content">
            <div className="philosophy-text">
              <h2 className="heading-lg">我的设计理念</h2>
              <p>
                我相信设计不仅仅是表面的美感，而是解决问题的强大工具。我的目标是创造既美观又实用的作品，每个元素都有其目的，共同构建出优秀的用户体验。
              </p>
              <p>
                我坚持以下设计原则：
              </p>
              <ul className="philosophy-list">
                <li>
                  <span className="list-number">01</span>
                  <div>
                    <h3>用户为中心</h3>
                    <p>始终将用户需求置于设计决策的核心，创造直观且易用的界面。</p>
                  </div>
                </li>
                <li>
                  <span className="list-number">02</span>
                  <div>
                    <h3>注重细节</h3>
                    <p>精心打磨每个细节，因为优秀的用户体验往往在细节中体现。</p>
                  </div>
                </li>
                <li>
                  <span className="list-number">03</span>
                  <div>
                    <h3>前沿技术</h3>
                    <p>拥抱新技术，探索创新解决方案，但始终保持实用性。</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="philosophy-image">
              <img src="/images/design-philosophy.jpg" alt="设计理念" />
            </div>
          </div>
        </div>
      </section>

      {/* 个人爱好 */}
      <section className="about-interests section">
        <div className="container">
          <div className="section-header">
            <h2 className="heading-lg">个人爱好</h2>
            <p>工作之外的我</p>
          </div>
          
          <div className="interests-grid">
            <div className="interest-card">
              <div className="interest-icon">
                <i className="fas fa-camera"></i>
              </div>
              <h3>摄影</h3>
              <p>热爱捕捉生活中的瞬间和美景，尤其喜欢街头摄影和风景摄影。</p>
            </div>
            
            <div className="interest-card">
              <div className="interest-icon">
                <i className="fas fa-book"></i>
              </div>
              <h3>阅读</h3>
              <p>喜欢阅读设计、科技和科幻小说类书籍，从中获取灵感和创意。</p>
            </div>
            
            <div className="interest-card">
              <div className="interest-icon">
                <i className="fas fa-hiking"></i>
              </div>
              <h3>户外活动</h3>
              <p>享受徒步旅行和露营，与自然接触能够刷新思维和激发创造力。</p>
            </div>
            
            <div className="interest-card">
              <div className="interest-icon">
                <i className="fas fa-gamepad"></i>
              </div>
              <h3>游戏</h3>
              <p>热衷于独立游戏，欣赏其中独特的艺术风格和创新的交互设计。</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;