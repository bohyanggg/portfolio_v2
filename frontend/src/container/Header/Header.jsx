import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';

const Header = () => (
  <div className="app__header app__flex">
    {/* <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Hey there, I am</p>
            <h1 className="head-text">Boh Yang</h1>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <p className="p-text">Web Developer</p>
          <p className="p-text">Freelancer</p>
        </div>
      </div>
    </motion.div> */}
    <div className='home__container container grid'>
      <div className='home__content grid'>
        <div className="home__social">
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

        <div className='home__img'></div>

        {/* <div className='ANOTHERDIV TO REMOVE'>
          <div className="app__header-badge">
            <div className="app__flex">
              <span>👋</span>
              <div style={{ marginLeft: 20 }}>
                <p className="p-text">Hey there, I am</p>
                <h1 className="head-text">Boh Yang</h1>
              </div>
            </div>
          </div>

          <h3 className='home__subtitle'>Fullstack Developer</h3>
          <p className='home__description'>
            I'm a penultimate year computer science undergrad at Nanyang Technological University, Singapore. 
          </p>
        </div> */}

        <div className='home__data'>
          <p className='p-text'>Hey there, I am</p>
          <h1 className='home__title'>Boh Yang
            <span>👋</span>
          </h1>
          <h3 className='home__subtitle'>Fullstack Developer</h3>
          <p className='home__description'>
            I'm a penultimate year computer science undergrad at Nanyang Technological University, Singapore.
          </p>

          <a href="#contact" className="button button--flex">
            <button type="button" className="p-text">Say Hello</button>
          </a>
        </div>


      </div>
    </div>

    {/* <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img src={images.profile} alt="profile_bg" />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div> */}
    
  </div>
);

export default AppWrap(Header, 'home', 'app__primarybg');
