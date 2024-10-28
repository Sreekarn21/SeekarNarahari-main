// src/components/Certificates.js
import React from 'react';

const certificates = [
  {
    title: 'IBM Machine Learning Specialization',
    institution: 'IBM',
    year: '2024',
    description: 'A comprehensive program covering machine learning concepts and applications.',
    link: 'https://www.coursera.org/account/accomplishments/specialization/QGFREWVQK7VO'
  },
  {
    title: 'Robotic Process Automation',
    institution: 'Various Providers',
    year: '2024',
    description: 'An introduction to RPA tools and their applications in automating business processes efficiently.',
    link: 'https://certificates.automationanywhere.com/0ea07042-725f-46a6-8f5a-5cf83275f9aa'
  },
];

const Certificates = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Certificates</h1>
      <div>
        {certificates.map((cert, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-neutral-400">{cert.year}</p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">{cert.title} - <span className="text-sm text-purple-100">{cert.institution}</span></h6>
              <p className="text-neutral-300">{cert.description}</p>
              <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">View Certificate</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
