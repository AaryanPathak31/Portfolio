// src/components/Header/Header.jsx
import React from 'react';
import './Header.css';

const Header = () => {
  const handleContactClick = () => {
    const contactSection = document.querySelector('.contact-section');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header 
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <div className="logo">Aaryan Pathak</div>
      <button className="contact-btn" onClick={handleContactClick}>
        Contact
      </button>
    </header>
  );
};

export default Header;
