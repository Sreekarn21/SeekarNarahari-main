// src/components/Hero.js
import React, { useEffect, useState } from 'react';
import profilepic from "../assets/profilepic.jpg";

const jobRoles = [
  { title: "Data Science Intern", description: "Specialized in data analysis and model building to extract actionable insights." },
  { title: "RPA Developer", description: "Automates repetitive tasks to improve efficiency using robotic process automation tools." },
  { title: "Software Developer", description: "Creates and maintains robust, scalable applications to solve complex business problems." },
];

const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % jobRoles.length);
    }, 8000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={{ scrollSnapAlign: "start", scrollBehavior: "smooth", paddingBottom: "4rem" }}>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {/* Text Section */}
        <div style={{ width: "100%", paddingLeft: "20px" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h1 style={{ paddingBottom: "10px", fontSize: "3rem", fontWeight: "300", marginTop: "10px" }}>Sreekar Simha Narahari</h1>
            <div 
              style={{
                background: "linear-gradient(to right, #F472B6, #7C3AED, #9D4EDD)",
                WebkitBackgroundClip: "text",
                color: "transparent",
                fontSize: "2rem",
                transition: "all 0.5s",
              }}
            >
              {jobRoles[currentRoleIndex].title}
            </div>
            <p 
              style={{
                marginTop: "0.5rem",
                maxWidth: "40rem",
                color: "#A0AEC0",
                fontSize: "1rem",
                textAlign: "center"
              }}
            >
              {jobRoles[currentRoleIndex].description}
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div style={{ width: "100%", display: "flex", justifyContent: "center", paddingTop: "20px" }}>
          <div 
            style={{
              position: "relative",
              borderRadius: "50%",
              border: "8px solid #F472B6",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              animation: "spin 20s linear infinite",
              width: "320px", 
              height: "320px",
              overflow: "hidden",
            }}
          >
            <img 
              src={profilepic} 
              alt="Sreekar Simha Narahari" 
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "50%",
              }} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
