// src/components/About.js
import React from 'react';
import { motion } from 'framer-motion';
import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from '../constants';

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-12">
      <h2 className="my-16 text-center text-5xl font-semibold tracking-wide">
        About <span className="text-neutral-500">Me</span>
      </h2>
      <div className="flex flex-wrap items-center">
        {/* Left side with image */}
        <motion.div
          className="w-full lg:w-1/2 lg:p-12 flex justify-center"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src={aboutImg} 
            alt="About Me" 
            className="rounded-2xl shadow-2xl max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
          />
        </motion.div>

        {/* Right side with text */}
        <motion.div
          className="w-full lg:w-1/2 lg:p-12"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="max-w-lg mx-auto lg:mx-0 space-y-6 text-lg leading-relaxed text-center lg:text-left text-neutral-300">
            {ABOUT_TEXT.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4">{paragraph}</p>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
