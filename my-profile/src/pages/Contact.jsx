// pages/Contact.jsx
import { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  // Form state
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

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error for the field being changed
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Validate form
  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = 'Please enter your name';
    }

    if (!formData.email.trim()) {
      errors.email = 'Please enter your email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      errors.subject = 'Please enter a subject';
    }

    if (!formData.message.trim()) {
      errors.message = 'Please enter your message';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);
      setSubmitError(false);

      try {
        // Here you can add your actual form submission logic
        // For example, using fetch or axios to send data to a backend API
        console.log('Sending form data:', formData);

        // Simulate API request
        await new Promise(resolve => setTimeout(resolve, 1500));

        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } catch (error) {
        console.error('Form submission error:', error);
        setSubmitError(true);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  // Reset form state
  const resetForm = () => {
    setSubmitSuccess(false);
    setSubmitError(false);
  };

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

        {/* Contact information and form */}
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
                    <p>your.email@example.com</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div className="info-content">
                    <h3>Phone</h3>
                    <p>+86 123 4567 8900</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="info-content">
                    <h3>Location</h3>
                    <p>China, City, Address</p>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <h3>Social Media</h3>
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
              <h2>Send Message</h2>

              {submitSuccess ? (
                <div className="form-success">
                  <div className="success-icon">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <h3>Message Sent!</h3>
                  <p>Thank you for your message. I'll contact you shortly.</p>
                  <button className="btn btn-accent" onClick={resetForm}>
                    Send New Message
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-grid">
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
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
                      <label htmlFor="email">Email</label>
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
                    <label htmlFor="subject">Subject</label>
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
                    <label htmlFor="message">Message</label>
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
                      <p>An error occurred while sending your message. Please try again later.</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="btn btn-accent"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <i className="fas fa-spinner fa-spin"></i> Sending...
                      </>
                    ) : 'Send Message'}
                  </button>
                </form>
              )}
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