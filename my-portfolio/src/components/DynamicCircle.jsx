// DynamicCircle.jsx
import { useEffect, useRef } from 'react';

const DynamicCircle = () => {
  const circleRef = useRef(null);
  
  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!circleRef.current) return;
      
      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;
      
      // 计算鼠标位置相对于圆环的角度
      const rect = circleRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // 计算角度 (0-360度)
      const angle = Math.atan2(clientY - centerY, clientX - centerX) * (180 / Math.PI);
      const normalizedAngle = (angle + 360) % 360;
      
      // 更新SVG圆环的旋转角度
      circleRef.current.style.transform = `translateY(-50%) rotate(${normalizedAngle}deg)`;
      
      // 调整缺口大小 - 鼠标离圆环越近，缺口越小
      const dx = clientX - centerX;
      const dy = clientY - centerY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const maxDistance = Math.max(innerWidth, innerHeight) / 2;
      const gapSize = 40 + (distance / maxDistance) * 120; // 缺口大小在40-160之间变化
      
      // 获取SVG中的圆形元素并更新其dasharray
      const circleElement = circleRef.current.querySelector('circle');
      if (circleElement) {
        const circumference = 2 * Math.PI * 90; // 2πr，r=90
        circleElement.setAttribute('stroke-dasharray', `${circumference - gapSize} ${gapSize}`);
      }
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    // 添加一些小光点动画
    const addLightPoints = () => {
      const circle = circleRef.current;
      if (!circle) return;
      
      const circumference = 2 * Math.PI * 90;
      const count = 5; // 光点数量
      
      for (let i = 0; i < count; i++) {
        const point = document.createElement('div');
        point.className = 'light-point';
        point.style.animationDelay = `${i * 0.7}s`;
        
        // 随机位置
        const angle = (i / count) * 2 * Math.PI;
        const x = 90 * Math.cos(angle) + 100;
        const y = 90 * Math.sin(angle) + 100;
        
        point.style.left = `${x / 2}%`;
        point.style.top = `${y / 2}%`;
        
        circle.appendChild(point);
      }
    };
    
    addLightPoints();
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <div className="hero-circle" ref={circleRef}>
      <svg className="circle-svg" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <circle 
          cx="100" 
          cy="100" 
          r="90" 
          fill="none" 
          stroke="rgba(255, 255, 255, 0.2)" 
          strokeWidth="2"
          strokeDasharray="480 80" // 初始缺口大小
        />
      </svg>
      {/* 添加额外的装饰元素 */}
      <svg className="circle-decoration" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <circle 
          cx="100" 
          cy="100" 
          r="70" 
          fill="none" 
          stroke="rgba(255, 255, 255, 0.1)" 
          strokeWidth="1"
          strokeDasharray="6 4"
        />
      </svg>
    </div>
  );
};

export default DynamicCircle;