// pages/Contact.jsx
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-container">
        {/* Page header */}
        <section className="contact-header">
          <div className="contact-header-content">
            <h1 className="heading-xl">Contact Me</h1>
            <p>Let's collaborate and create something amazing together</p>
          </div>
        </section>

        {/* Contact information */}
        <section className="contact-main">
          <div className="contact-content">
            <div className="contact-info">
              <h2>Contact Information</h2>
              <p className="info-description">
                If you have any questions or project inquiries, feel free to contact me. I'll get back to you as soon as possible.
              </p>

              <div className="info-items">
                <div className="info-item">
                  <div className="info-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="info-content">
                    <h3>Email</h3>
                    <p>sili50783@gmail.com</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="info-content">
                    <h3>Location</h3>
                    <p>Adelaide, Australia</p>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <h3>Social Media</h3>
                <div className="social-icons">
                  <a href="https://github.com/mochiquin" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/silin-li-9956462a9" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="https://www.artstation.com/pelosolar" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <i className="fab fa-artstation"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ section */}
        <section className="faq-section">
          <div className="section-header">
            <h2 className="heading-lg">Frequently Asked Questions</h2>
            <p>Here are some common questions clients ask</p>
          </div>

          <div className="faq-grid">
            <div className="faq-item">
              <h3>How do you charge for your services?</h3>
              <p>My fees are typically project-based, depending on the complexity, time requirements, and features needed. I also offer hourly rates for maintenance and minor modifications.</p>
            </div>

            <div className="faq-item">
              <h3>How long does a project take to complete?</h3>
              <p>Project timelines vary based on complexity. A simple website typically takes 2-4 weeks, while a complex website or application might require 2-3 months. I'll provide a clear timeline before starting your project.</p>
            </div>

            <div className="faq-item">
              <h3>Do you offer website maintenance services?</h3>
              <p>Yes, I offer website maintenance services including content updates, feature additions, security updates, and performance optimizations. We can set up a regular maintenance plan based on your needs.</p>
            </div>

            <div className="faq-item">
              <h3>What is your project workflow like?</h3>
              <p>My workflow includes: initial consultation and requirement analysis, proposal and quote, design phase, development implementation, testing and feedback, final delivery, and ongoing support. I maintain close communication throughout each phase.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;