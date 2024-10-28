// src/components/About.js
import React from 'react';
import { motion } from 'framer-motion';
import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from '../constants';

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h2>
      <div className="flex flex-wrap">
        {/* Left side with image */}
        <motion.div
          className="w-full lg:w-1/2 lg:p-8"
          initial={{ opacity: 0, x: -100 }} // Starts from left with opacity 0
          animate={{ opacity: 1, x: 0 }} // Moves to center with opacity 1
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center">
            <img src={aboutImg} alt="about" className="rounded-lg shadow-lg max-w-xs lg:max-w-sm" />
          </div>
        </motion.div>

        {/* Right side with text */}
        <motion.div
          className="w-full lg:w-1/2 lg:p-8"
          initial={{ opacity: 0, x: 100 }} // Starts from right with opacity 0
          animate={{ opacity: 1, x: 0 }} // Moves to center with opacity 1
          transition={{ duration: 0.8, delay: 0.2 }} // Delay for smoother effect
        >
          <div className="flex justify-center lg:justify-start">
            <p className="max-w-lg text-center lg:text-left">
              {ABOUT_TEXT}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
