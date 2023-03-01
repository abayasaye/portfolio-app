import "./AboutContentStyles.css";

import React from "react";
import { Link } from "react-router-dom";

import skillsImg from '../../assets/skills.webp'
import skillsImg2 from '../../assets/skills2.webp'
const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I</h1>
        <p>
          Im a Full Stack Developer. I create responsive secure websites for my
          clients.
        </p>
        <Link to="/Contact">
            <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
            <div className="img-stack top">
                <img src={skillsImg} className="img" alt="true"/>
            </div>
            <div className="img-stack bottom">
                <img src={skillsImg2} className="img" alt="true"/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
