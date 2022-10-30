import "./FooterStyles.css";

import React from "react";

import { FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>shlomo hamelch 48.</p>
              <p>haifa.</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              0549330466
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              abay400@gmail.com
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>about the company</h4>
          <p>
            this is me Abayneh Asaye. Full Stack Developer i enjoy to creating a
            web apps and you can to contact me any time
          </p>
          <div className="social">
              <FaGithub
            size={30}
            style={{ color: "#fff", marginRight: "1rem" }}
          />
              <FaLinkedin
            size={30}
            style={{ color: "#fff", marginRight: "1rem" }}
          />
          <FaTwitter
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
