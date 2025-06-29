// src/components/About/About.jsx
import React, { useEffect } from "react";
import "./About.css";

const About = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".card");

    const handleMouseMove = (e, card) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--x", `${e.clientX - rect.left}px`);
      card.style.setProperty("--y", `${e.clientY - rect.top}px`);
    };

    cards.forEach((card) => {
      const mouseMoveHandler = (e) => handleMouseMove(e, card);
      card.addEventListener("mousemove", mouseMoveHandler);

      return () => {
        card.removeEventListener("mousemove", mouseMoveHandler);
      };
    });
  }, []);

  const handleContactClick = () => {
    const contactSection = document.querySelector(".contact-section");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="about-section">
      <h1
        className="about-title"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        About Me
      </h1>

      <div className="bento-grid">
        <div
          className="card intro"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1500"
        >
          <h2 className="card-title">HI THERE, I'M Aaryan Pathak</h2>
          <p className="card-text">
            Hi, I'm Aaryan Pathak, a passionate Computer Science undergrad from
            SRM Institute of Science and Technology with a strong foundation in
            full-stack development, AI, and cybersecurity. I love building
            creative projects like sentiment analysis apps and animated landing
            pages, and I'm always eager to learn and solve real-world problems.
          </p>
          <img src="assets\images\gradient.png" alt="" className="background-img" />
          <div className="model-box">
            <spline-viewer
              className="info-3D"
              url="https://prod.spline.design/Jinc-BccdIA87nsW/scene.splinecode"
            />
          </div>
        </div>

        <div
          className="card tech"
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1500"
        >
          <h2 className="card-title">TECH STACK</h2>
          <p className="card-text">
            I specialize in a diverse range of programming languages,
            frameworks, and development tools that empower me to build robust,
            scalable, and high-performing applications. My core tech stack
            includes HTML, CSS, JavaScript, ReactJs, Java,C/C++, and Git,
            along with proficiency in Data Structures and Algorithms for
            efficient problem-solving. I also have experience with Node.js,
            Express.js, and MongoDB for backend development, and I'm familiar
            with AI concepts and cybersecurity practices. My passion for coding
            drives me to continuously learn and adapt to new technologies.
          </p>
          <img src="assets\images\gradient 2.png" alt="" className="background-img" />
          <img src="assets\images\skills group.png" alt="" className="skills-group" />
        </div>

        <div className="card time" data-aos="fade-up" data-aos-duration="1500">
          <h2 className="card-title">
            Fresher and B.Tech Student from SRM INSTITUTE OF SCIENCE AND
            TECHNOLOGY
          </h2>
          <p className="card-text">
            I'm a B.Tech Computer Science student at SRM Institute of Science
            and Technology, sharpening my skills in software development,
            artificial intelligence, and web development.
          </p>
          <img
            src="assets\images\gradient3&4.png"
            alt=""
            className="background-img"
          />
          <button className="btn" onClick={handleContactClick}>
            <i className="bx bx-send"></i> CONTACT ME
          </button>
        </div>

        <div
          className="card passion"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <h2 className="card-title">PASSION FOR CODING</h2>
          <p className="card-text">
            Solving problems and building solutions through code. Programming is
            my profession—it's my passion.
          </p>
          <img
            src="assets\images\gradient3&4.png"
            alt=""
            className="background-img"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
