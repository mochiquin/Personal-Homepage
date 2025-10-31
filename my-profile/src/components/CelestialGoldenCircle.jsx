// CelestialGoldenCircle.jsx
import { useEffect, useRef } from 'react';
import '../styles/CelestialGoldenCircle.css';

const CelestialGoldenCircle = () => {
  const circleRef = useRef(null);
  
  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!circleRef.current) return;
      
      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;
      
      // 获取圆环的位置信息
      const rect = circleRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // 计算角度 (0-360度)
      const angle = Math.atan2(clientY - centerY, clientX - centerX) * (180 / Math.PI);
      const normalizedAngle = (angle + 360) % 360;
      
      // 鼠标移动时，圆环只进行微妙的转动，保持古典优雅感
      circleRef.current.style.transform = `translateY(-50%) rotate(${normalizedAngle / 20}deg)`;
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <div className="celestial-golden-circle" ref={circleRef}>
      <svg className="celestial-svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* 金色渐变 */}
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e6c460" />
            <stop offset="50%" stopColor="#ffd700" />
            <stop offset="100%" stopColor="#d4af37" />
          </linearGradient>
          
          {/* 发光效果 */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          {/* 金属质感 */}
          <pattern id="goldTexture" patternUnits="userSpaceOnUse" width="10" height="10">
            <rect width="10" height="10" fill="url(#goldGradient)" fillOpacity="0.2" />
          </pattern>
        </defs>
        
        {/* 主圆环 - 密集的小线条构成 */}
        <circle 
          cx="250" 
          cy="250" 
          r="180" 
          fill="none" 
          stroke="url(#goldGradient)" 
          strokeWidth="2"
          filter="url(#glow)"
        />
        
        {/* 放射状线条 - 模拟图片中的放射效果 */}
        {Array.from({ length: 60 }).map((_, i) => {
          const angle = (i * 6) * Math.PI / 180;
          const x1 = 250 + Math.cos(angle) * 180;
          const y1 = 250 + Math.sin(angle) * 180;
          const x2 = 250 + Math.cos(angle) * 230;
          const y2 = 250 + Math.sin(angle) * 230;
          return (
            <line 
              key={`ray-${i}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="url(#goldGradient)"
              strokeWidth={i % 5 === 0 ? "1.5" : "0.75"}
              filter="url(#glow)"
            />
          );
        })}
        
        {/* 圆环小圆点 - 类似图片中线条上的圆环 */}
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = (i * 15) * Math.PI / 180;
          // 随机决定圆环的距离
          const distance = (i % 3 === 0) ? 210 : (i % 2 === 0 ? 195 : 225);
          const cx = 250 + Math.cos(angle) * distance;
          const cy = 250 + Math.sin(angle) * distance;
          return (
            <circle 
              key={`circle-${i}`}
              cx={cx}
              cy={cy}
              r={i % 5 === 0 ? 4 : 3}
              fill="none"
              stroke="url(#goldGradient)"
              strokeWidth="1"
              filter="url(#glow)"
            />
          );
        })}
        
        {/* 内部密集线条圆环 - 模拟图片中间的密集效果 */}
        {Array.from({ length: 120 }).map((_, i) => {
          const angle = (i * 3) * Math.PI / 180;
          const x1 = 250 + Math.cos(angle) * 140;
          const y1 = 250 + Math.sin(angle) * 140;
          const x2 = 250 + Math.cos(angle) * 170;
          const y2 = 250 + Math.sin(angle) * 170;
          return (
            <line 
              key={`inner-ray-${i}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="url(#goldGradient)"
              strokeWidth="0.5"
              filter="url(#glow)"
              opacity={0.8}
            />
          );
        })}
        
        {/* 装饰性恒星点 */}
        {Array.from({ length: 18 }).map((_, i) => {
          const angle = (i * 20) * Math.PI / 180;
          const cx = 250 + Math.cos(angle) * 135;
          const cy = 250 + Math.sin(angle) * 135;
          return (
            <circle 
              key={`star-${i}`}
              cx={cx}
              cy={cy}
              r="1"
              fill="#fff7d6"
              filter="url(#glow)"
            />
          );
        })}
        
        {/* 内部圆环 */}
        <circle 
          cx="250" 
          cy="250" 
          r="120" 
          fill="none" 
          stroke="url(#goldGradient)" 
          strokeWidth="1"
          filter="url(#glow)"
        />
        
        {/* 中心小装饰圆环 */}
        <circle 
          cx="250" 
          cy="250" 
          r="30" 
          fill="none" 
          stroke="url(#goldGradient)" 
          strokeWidth="0.75"
          filter="url(#glow)"
        />
      </svg>
    </div>
  );
};

export default CelestialGoldenCircle;