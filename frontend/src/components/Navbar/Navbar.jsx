import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { BsFillMoonStarsFill } from "react-icons/bs";
import { motion } from 'framer-motion';

import resume from '../../assets/HsiehBohYang_Resume.pdf'
import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [darkMode, setDarkMode] = useState(false); 

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <h1 className="">BOHYANG</h1>
      </div>
      <ul className="app__navbar-links">
        {['home', 'about', 'skills', 'work', 'contact'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.2, ease: 'linear' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['home', 'about', 'skills', 'work', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={resume} target="_blank"
                  rel="noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </div>

      {/* <div className="app__navbar-toggle">
        <BsFillMoonStarsFill
          onClick={() => setDarkMode(!darkMode)}
          style={{ cursor: 'pointer',fontSize: '1.5rem', alignContent: 'center' }}
        />
      </div> */}

      <div className='resume'>
        <a
          href={resume} target="_blank"
          rel="noreferrer"
        >
          <button type="button">Resume</button>
        </a>
      </div>

    </nav>
  );
};

export default Navbar;
