// pages/Contact.jsx
import { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  // 表单状态
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  
  // 处理输入变化
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // 清除对应字段的错误
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  
  // 验证表单
  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) {
      errors.name = '请输入您的姓名';
    }
    
    if (!formData.email.trim()) {
      errors.email = '请输入您的邮箱';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = '请输入有效的邮箱地址';
    }
    
    if (!formData.subject.trim()) {
      errors.subject = '请输入主题';
    }
    
    if (!formData.message.trim()) {
      errors.message = '请输入消息内容';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  // 处理表单提交
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      setSubmitError(false);
      
      try {
        // 这里可以添加实际的表单提交逻辑
        // 例如使用fetch或axios向后端API发送数据
        console.log('发送表单数据:', formData);
        
        // 模拟API请求
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } catch (error) {
        console.error('表单提交错误:', error);
        setSubmitError(true);
      } finally {
        setIsSubmitting(false);
      }
    }
  };
  
  // 重置表单状态
  const resetForm = () => {
    setSubmitSuccess(false);
    setSubmitError(false);
  };

  return (
    <div className="contact">
      {/* 页面标题 */}
      <section className="contact-header">
        <div className="contact-header-content">
          <h1 className="heading-xl">联系我</h1>
          <p>让我们一起合作，创造精彩</p>
        </div>
      </section>

      {/* 联系信息和表单 */}
      <section className="contact-main section">
        <div className="container">
          <div className="contact-container">
            <div className="contact-info">
              <h2>联系方式</h2>
              <p className="info-description">
                如果您有任何问题或项目需求，请随时与我联系。我会尽快回复您的消息。
              </p>
              
              <div className="info-items">
                <div className="info-item">
                  <div className="info-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="info-content">
                    <h3>邮箱</h3>
                    <p>your.email@example.com</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div className="info-content">
                    <h3>电话</h3>
                    <p>+86 123 4567 8900</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="info-content">
                    <h3>地址</h3>
                    <p>中国，城市，地址</p>
                  </div>
                </div>
              </div>
              
              <div className="social-links">
                <h3>社交媒体</h3>
                <div className="social-icons">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="contact-form-container">
              <h2>发送消息</h2>
              
              {submitSuccess ? (
                <div className="form-success">
                  <div className="success-icon">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <h3>消息已发送!</h3>
                  <p>感谢您的留言。我会尽快与您联系。</p>
                  <button className="btn btn-accent" onClick={resetForm}>
                    发送新消息
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-grid">
                    <div className="form-group">
                      <label htmlFor="name">姓名</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={formErrors.name ? 'error' : ''}
                      />
                      {formErrors.name && <span className="error-message">{formErrors.name}</span>}
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="email">邮箱</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={formErrors.email ? 'error' : ''}
                      />
                      {formErrors.email && <span className="error-message">{formErrors.email}</span>}
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject">主题</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={formErrors.subject ? 'error' : ''}
                    />
                    {formErrors.subject && <span className="error-message">{formErrors.subject}</span>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">消息</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      className={formErrors.message ? 'error' : ''}
                    ></textarea>
                    {formErrors.message && <span className="error-message">{formErrors.message}</span>}
                  </div>
                  
                  {submitError && (
                    <div className="form-error">
                      <p>发送消息时出现错误。请稍后再试。</p>
                    </div>
                  )}
                  
                  <button 
                    type="submit" 
                    className="btn btn-accent" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <i className="fas fa-spinner fa-spin"></i> 发送中...
                      </>
                    ) : '发送消息'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 常见问题 */}
      <section className="faq-section section">
        <div className="container">
          <div className="section-header">
            <h2 className="heading-lg">常见问题</h2>
            <p>以下是一些客户经常问的问题</p>
          </div>
          
          <div className="faq-grid">
            <div className="faq-item">
              <h3>您如何计费？</h3>
              <p>我的收费通常按项目基础计算，具体取决于项目复杂程度、所需时间和功能需求。我也提供小时计费方式用于维护和小型修改。</p>
            </div>
            
            <div className="faq-item">
              <h3>项目开发周期有多长？</h3>
              <p>项目周期因复杂度而异。一个简单的网站通常需要2-4周，而功能复杂的网站或应用可能需要2-3个月。我会在项目开始前提供明确的时间表。</p>
            </div>
            
            <div className="faq-item">
              <h3>您是否提供网站维护服务？</h3>
              <p>是的，我提供网站维护服务，包括内容更新、功能添加、安全更新和性能优化等。可以根据您的需求制定定期维护计划。</p>
            </div>
            
            <div className="faq-item">
              <h3>合作流程是怎样的？</h3>
              <p>我的合作流程包括：初步沟通和需求分析、提案和报价、设计阶段、开发实现、测试和反馈、最终交付和后续支持。每个阶段都会与您保持密切沟通。</p>
            </div>
          </div>
        </div>
      </section>

    
    </div>
  );
};

export default Contact;