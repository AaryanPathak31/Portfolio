// src/components/Projects/Projects.jsx
import React, { useEffect } from 'react';
import './Projects.css';

const Projects = () => {
  useEffect(() => {
    const videos = [
      document.getElementById('projectVideo1'),
      document.getElementById('projectVideo2'),
      document.getElementById('projectVideo3'),
      document.getElementById('projectVideo4')
    ].filter(Boolean);

    videos.forEach(video => {
      const handleMouseOver = () => {
        // Handle the promise returned by play()
        const playPromise = video.play();
        
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              // Autoplay started successfully
            })
            .catch(error => {
              // Autoplay was prevented - this is expected behavior
              console.log('Autoplay prevented:', error);
            });
        }
      };
      
      const handleMouseOut = () => {
        video.pause();
      };
      
      video.addEventListener('mouseover', handleMouseOver);
      video.addEventListener('mouseout', handleMouseOut);
      
      return () => {
        video.removeEventListener('mouseover', handleMouseOver);
        video.removeEventListener('mouseout', handleMouseOut);
      };
    });
  }, []);

  return (
    <section className="projects-section">
      <h3 
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        My Projects
      </h3>

      <div 
        className="slider" 
        style={{
          '--width': '60rem',
          '--height': '40rem',
          '--quantity': 4,
        }}
      >
        <div className="list">
          <div className="item" style={{'--position': 1}}>
            <video 
              id="projectVideo1" 
              loop 
              playsInline 
              muted
              src="assets\videos\project-1.mp4" 
            />
          </div>
          <div className="item" style={{'--position': 2}}>
            <video 
              id="projectVideo2" 
              loop 
              playsInline 
              muted
              src="assets\videos\project-2.mp4" 
            />
          </div>
          <div className="item" style={{'--position': 3}}>
            <video 
              id="projectVideo3" 
              loop 
              playsInline 
              muted
              src="assets\videos\project-3.mkv" 
            />
          </div>
          {/* <div className="item" style={{'--position': 4}}>
            <video 
              id="projectVideo4" 
              loop 
              playsInline 
              muted
              src="assets\videos\project-4.mp4" 
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
