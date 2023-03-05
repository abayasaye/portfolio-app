import "./HeroImgStyles.css";

import React from "react";

import IntoImg from "../assets/intro-img.jpg";
import { Link } from "react-router-dom";
import TypeWriterEffect from 'react-typewriter-effect';


const HeroImg = () => {
  const myRef = document.querySelector('.scrollable-div')
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntoImg} alt="introImg" />
      </div>
      <div className="content">
        <p>HI , I'M ABAYNEH ASAYE</p>
        <img className="myimg" src={IntoImg} />
        <h1>A Full Stack Developer.</h1>
<TypeWriterEffect
   textStyle={{
     fontFamily: 'Red Hat Display',
     color: '#3F3D56',
    //  fontWeight: 500,
   }}
   startDelay={2000}
   cursorColor="#3F3D56"
   multiText={[
     'Hey there, a full Stack development paction',
     'it consist of two types...',
     'Single text display and multi text display',
     'Fonts can be customized.',
     'The type speed can be customized as well',
   ]}
   multiTextDelay={1000}
   typeSpeed={30}
   loop={true}
 />
        <div>
            <Link to="/project" className="btn">PROJECTS</Link>
            <Link to="/contact" className="btn btn-light">CONTACT</Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
