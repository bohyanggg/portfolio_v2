import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";
import { urlFor, client } from "../../client";

const About = () => {
  // const [abouts, setAbouts] = useState([]);

  // useEffect(() => {
  //   const query = '*[_type == "abouts"]';

  //   client.fetch(query).then((data) => {
  //     setAbouts(data);
  //   });
  // }, []);

  return (
    <>
      <h2 className="head-text">More <span>About</span> Me</h2>

      <div className="app__about-container">
        <p>
          I am a self-motivated and passionate individual who is always eager to take on new challenges. With a keen eye for detail, I am 
          committed to delivering high-quality results in all that I do!
        </p>
        <br></br>
        <p>
          My 3 years of computer science studies, coupled with my internship experiences, has provided me with a strong foundation 
          in software engineering as well as data science, both of which I have a keen interest in!
        </p>
        <br></br>
        <p>
          With a positive attitude and a growth mindset, I hope to be able to make meaningful contributions to society and achieve great things!
        </p>

      </div>

      {/* <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div> */}
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__primarybg"
);
