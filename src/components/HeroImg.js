import "./HeroImgStyles.css";

import React from "react";

import IntoImg from "../assets/intro-img.jpg";
import { Link } from "react-router-dom";
const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntoImg} alt="introImg" />
      </div>
      <div className="content">
        <p>HI , I'M ABAYNEH ASAYE</p>
        <img className="myimg" src={IntoImg} />
        <h1>A Full Stack Developer.</h1>
        <div>
            <Link to="/project" className="btn">PROJECTS</Link>
            <Link to="/contact" className="btn btn-light">CONTACT</Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
