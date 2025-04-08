// components/Footer.jsx
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-logo">
            <span>YOUR</span>NAME
          </div>
          
          <div className="footer-links">
            <div className="footer-nav">
              <h3>导航</h3>
              <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/about">关于</Link></li>
                <li><Link to="/projects">项目</Link></li>
                <li><Link to="/skills">技能</Link></li>
                <li><Link to="/contact">联系</Link></li>
              </ul>
            </div>
            
            <div className="footer-social">
              <h3>社交媒体</h3>
              <ul>
                <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li><a href="https://behance.net" target="_blank" rel="noopener noreferrer">Behance</a></li>
              </ul>
            </div>
            
            <div className="footer-contact">
              <h3>联系方式</h3>
              <ul>
                <li>email@example.com</li>
                <li>+86 123 4567 8900</li>
                <li>中国，城市</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} YOUR NAME. 版权所有</p>
          <div className="footer-bottom-links">
            <a href="#">隐私政策</a>
            <a href="#">服务条款</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;