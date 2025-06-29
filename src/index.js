import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import 'boxicons/css/boxicons.min.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
AOS.init({
  duration: 1500,
  easing: 'linear',
});
// Remove this line



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
