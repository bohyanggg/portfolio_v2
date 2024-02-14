import React from "react";

// import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Contact.scss";

const Contact = () => {
  return (
    <>
      <h4> Get in Touch</h4>
      <h2 className="head-text"><span>Contact Me</span></h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:bohyang@hotmail.com" className="p-text">
            bohyang@hotmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <p className="mobile-num">
            +65 96862086
          </p>
        </div>
      </div>

      <div className="app__social">
        <div>
          <a
            href="https://www.linkedin.com/in/bohyanggg/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
        <div>
          <a
            href="https://github.com/bohyanggg"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </div>
        <div>
          <a
            href="https://www.instagram.com/bohyanggg/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      <footer>
        <p className="p-text">© 2023 Hsieh Boh Yang</p>
      </footer>
    </>
  );
};

export default AppWrap(
  MotionWrap(Contact, "app__footer"),
  "contact",
  "app__primarybg"
);
