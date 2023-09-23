import React from "react";
import "../Styles/AboutMe.css";
import aboutme from "../images/profilephoto.png";

const AboutMe = () => {
  return (
    <div className="about-me-div">
      <h1 className="about-me-heading">About Me</h1>
      <h1 className="about-me-description">
        I am passionate about Full Stack Development and excel in using a
        diverse skill set that includes Express, React, Node, Power Apps, Power
        Automate, and TIBCO. I have experience in designing elegant user
        interfaces, building robust back-end services, and creating RESTful
        APIs. I have been recognized for my work in developing projects using
        generative AI and for creating enterprise applications. I am a quick
        learner and can effectively apply my knowledge. Apart from coding, I
        also enjoy designing, sketching cars and dancing. If there's an
        opportunity to contribute to a revolutionary project, I'm eager to
        discuss it.
        <br />
        <br />
        <br />
        <button
          className="about-me-button"
          role="link"
          onClick={() => {
            window.open(
              "https://www.linkedin.com/in/ameyaawatade/",
              "_blank",
              "noreferrer"
            );
          }}
        >
          More Details
        </button>
      </h1>
      <img className="about-me-photo" src={aboutme} alt="about me" />
    </div>
  );
};

export default AboutMe;
