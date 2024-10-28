import React from 'react';
import { FaPython } from 'react-icons/fa';
import { SiC } from 'react-icons/si';
import { SiMongodb } from 'react-icons/si';
import { BiLogoPostgresql } from 'react-icons/bi';
import { SiMysql } from 'react-icons/si'; // Importing MySQL icon

const Technologies = () => {
  // Define the wave animation style
  const waveAnimationStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    animation: 'wave 1.5s ease-in-out infinite',
  };

  // Define keyframes for wave animation
  const keyframes = `
    @keyframes wave {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-10px);
      }
    }

    @keyframes scaleUp {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.1);
      }
      100% {
        transform: scale(1);
      }
    }
  `;

  return (
    <div className="pb-24">
      <style>{keyframes}</style> {/* Inject keyframes into the document */}
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div style={{ ...waveAnimationStyle, border: '4px solid gray', borderRadius: '12px', padding: '16px', animation: 'scaleUp 1s ease-in-out infinite' }}>
          <FaPython className="text-7xl text-yellow-500" />
        </div>
        <div style={{ ...waveAnimationStyle, border: '4px solid gray', borderRadius: '12px', padding: '16px', animation: 'scaleUp 1s ease-in-out infinite' }}>
          <SiC className="text-7xl text-white" />
        </div>
        <div style={{ ...waveAnimationStyle, border: '4px solid gray', borderRadius: '12px', padding: '16px', animation: 'scaleUp 1s ease-in-out infinite' }}>
          <SiMongodb className="text-7xl text-green-600" />
        </div>
        <div style={{ ...waveAnimationStyle, border: '4px solid gray', borderRadius: '12px', padding: '16px', animation: 'scaleUp 1s ease-in-out infinite' }}>
          <BiLogoPostgresql className="text-7xl text-gray-600" />
        </div>
        <div style={{ ...waveAnimationStyle, border: '4px solid gray', borderRadius: '12px', padding: '16px', animation: 'scaleUp 1s ease-in-out infinite' }}>
          <SiMysql className="text-7xl text-orange-500" />
        </div>
      </div>
    </div>
  );
}

export default Technologies;
