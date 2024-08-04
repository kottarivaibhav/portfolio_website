// src/components/ProjectsSection.jsx

import React from 'react';
import project1 from '../assets/Project_1.png'; // Update the import paths as needed
import project2 from '../assets/Project_2.png';
import project3 from '../assets/Project_3.png';

const ProjectSection = () => {
  return (
    <section className='mt-4 mr-3 p-6' id='Projects'>
      <div className='container mx-auto px-4'>
        <h2 className="text-4xl font-bold underline-header">Projects</h2>
        <div className='flex flex-col md:flex-row gap-5 mt-5 mr-2'>
          <div className='flex-1 border rounded-md p-5 flex flex-col'>
            <img src={project1} alt='project1' className="w-full h-48 object-cover mb-4" />
            <h3 className="text-2xl font-semibold mt-7">College Event Management System</h3>
            <p className="text-gray-400 mt-2">This project was part of my DBMS mini project where I developed a system for managing college events. I used HTML, CSS, and JavaScript for the front-end and PHP for the back-end along with MySQL.</p>
            <div className="mt-auto flex mt-12 gap-2">
              <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                <a href='https://github.com/kottarivaibhav/dbms_mini_project' target='_blank' rel='noopener noreferrer'>Live preview</a>
              </button>
              <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                <a href='https://github.com/kottarivaibhav/dbms_mini_project' target='_blank' rel='noopener noreferrer'>Checkout GitHub</a>
              </button>
            </div>
          </div>
          <div className='flex-1 border rounded-md p-5 flex flex-col'>
            <img src={project2} alt='project2' className="w-full h-48 object-cover mb-4" />
            <h3 className="text-2xl font-semibold mt-8">Little Lemon Restaurant</h3>
            <p className="text-gray-400 text-sm mt-2">This was my Capstone Project from Meta Front End Developer Path. I used React Framework for this Project.</p>
            <div className="mt-auto flex mt-12 gap-2">
              <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                <a href='https://kottarivaibhav.github.io/meta_front_end_developer_capstone/' target='_blank' rel='noopener noreferrer'>Live preview</a>
              </button>
              <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                <a href='https://github.com/kottarivaibhav/meta_front_end_developer_capstone' target='_blank' rel='noopener noreferrer'>Checkout GitHub</a>
              </button>
            </div>
          </div>
          <div className='flex-1 border rounded-md p-5 flex flex-col'>
            <img src={project3} alt='project3' className="w-full h-48 object-cover mb-4" />
            <h3 className="text-2xl font-semibold mt-8">Pizza E-commerce</h3>
            <p className="text-gray-400 text-sm mt-2">Responsive HTML/CSS layout for online Pizza ordering website using HTML5, CSS3 (SCSS)</p>
            <div className="mt-auto flex mt-12 gap-2">
              <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                <a href='https://kottarivaibhav.github.io/Ecommerce_PizzaStore/' target='_blank' rel='noopener noreferrer'>Live Preview</a>
              </button>
              <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                <a href='#' target='_blank' rel='noopener noreferrer'>Checkout GitHub</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
