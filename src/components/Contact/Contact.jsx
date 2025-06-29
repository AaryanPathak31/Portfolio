// src/components/Contact/Contact.jsx
import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    emailjs.init("9c9UABgvXx_XjFIfd");
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.sendForm(
      "service_5buonrg", 
      "template_5gqsi34", 
      e.target
    ).then(() => {
      setShowSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    }).catch((error) => {
      console.error('Email send failed:', error);
    });
  };

  return (
    <section className="contact-section">
      <div 
        className="section-header" 
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <h3>Get In Touch</h3>
        <p>Have a project in mind or just want to say hello? Drop me a message</p>
      </div>

      <div 
        className="contact-grid" 
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0" 
        data-aos-duration="1500"
      >
        <div className="info-card">
          <h3>Contact info</h3>
          
          <div className="contact-item">
            <p>Email</p>
            <a href="mailto:aaryan.pathak3108@gmail.com">aaryan.pathak3108@gmail.com</a>
          </div>

          <div className="contact-item">
            <p>Phone</p>
            <a href="tel:+919654614295">9212236691</a>
          </div>

          <div className="contact-item">
            <p>Location</p>
            New Delhi,India
          </div>

          <div className="social-link">
            <p>Contact with me</p>
            <a href="https://github.com/AaryanPathak31" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/aaryanpathak4" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://leetcode.com/u/AaryanPathak/" target="_blank" rel="noopener noreferrer">Leetcode</a>
          </div>
        </div>

        <div className="info-card">
          <div className="info-card-content">
            <h3>Send Message</h3>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name" 
                  required 
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email" 
                  required 
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <input 
                  type="text" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Subject" 
                  required 
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <textarea 
                  name="message" 
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message" 
                  required 
                  className="form-control"
                />
              </div>

              <button type="submit" className="message-btn">
                Send Message
              </button>

              {showSuccess && (
                <div className="success-message">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
