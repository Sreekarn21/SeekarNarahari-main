// src/components/Navbar.js
import React from 'react';
import logo from "../assets/logo.png";
import { FaLinkedin, FaGithub, FaInstagram, FaTwitterSquare } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-10 flex items-center justify-between py-6 px-4">  
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" className="h-10 w-auto" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https:www.linkedin.com/in/sreekar-simha-narahari-798b39249" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Sreekarn21" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/sreekar_narahari/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://x.com/sreekar05297142" target="_blank" rel="noopener noreferrer">
          <FaTwitterSquare />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
