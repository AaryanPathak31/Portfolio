// src/components/Footer/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <h3>©️2025, Made by Aaryan Pathak</h3>
      <div className="box-icons">
        <a href="https://leetcode.com/u/AaryanPathak/" target="_blank" rel="noopener noreferrer">
          <i className='bx bx-user'></i>
        </a>
        <a href="https://github.com/AaryanPathak31" target="_blank" rel="noopener noreferrer">
          <i className='bx bxl-github'></i>
        </a>
        <a href="https://www.linkedin.com/in/aaryanpathak4" target="_blank" rel="noopener noreferrer">
          <i className='bx bxl-linkedin-square'></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
