// src/components/Hero/Hero.jsx
import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <main>
      <div
        className="title-section"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <h1>SOFTWARE DEVELOPER</h1>
        <h2>WEB DEV</h2>
        <div className="location">
          <p>
            Student
            <br />
            of
            <br />
            SRM
          </p>
        </div>
      </div>

      <div className="bio-section" data-aos="fade-up" data-aos-duration="1500">
        <p className="bio">
          WITH <span style={{ color: "#76b0ab" }}>A STRONG FOUNDATION</span> IN
          COMPUTER SCIENCE, I’VE BEEN BUILDING PROJECTS THAT COMBINE
          FUNCTIONALITY WITH SEAMLESS AND INTUITIVE{" "}
          <span style={{ color: "#842626" }}>USER EXPERIENCES.</span>
        </p>
      </div>

      <div
        className="scroll-down"
        data-aos="fade-up"
        data-aos-duration="1500"
      ></div>

      <spline-viewer
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0"
        data-aos-duration="3000"
        className="planet-3D"
        url="https://prod.spline.design/udmO4mcBTG5eACRO/scene.splinecode"
      />
    </main>
  );
};

export default Hero;
