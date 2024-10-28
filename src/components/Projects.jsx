import React from 'react';
import { PROJECTS } from '../constants';

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">Projects</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {PROJECTS.map((project, index) => (
          <div key={index} className="max-w-xs text-center shadow-lg p-4 rounded-lg bg-neutral-800">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-2xl font-semibold text-cyan-300">{project.title}</h3>
            <p className="mt-2 text-neutral-400">{project.description}</p>
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="text-sm bg-cyan-900 px-2 py-1 rounded-full text-cyan-100">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
