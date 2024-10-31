import React from 'react';
import project1 from '../assets/Project_1.png'; // Update the import paths as needed
import project2 from '../assets/Project_2.png';
import project3 from '../assets/summarizer.png';
import project4 from '../assets/Project_4.png'; // Update the import path for the fourth project

const ProjectSection = () => {
  return (
    <section className='mt-4 mr-3 p-6 bg-gradient-animation' id='Projects'>
      <div className='container mx-auto px-4'>
        <h2 className="text-4xl font-bold underline-header text-center">Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-5'>
          {/* Project 1 */}
          <div className='flex flex-col border rounded-md p-5'>
            <img src={project4} alt='project4' className="w-full h-48 object-cover mb-4" />
            <div className="flex flex-col flex-grow">
              <h3 className="text-2xl font-semibold mt-4">Sentiment Analysis</h3>
              <p className="text-gray-400 text-sm mt-2 flex-grow">This project is a web application for sentiment analysis. It allows users to input text and receive a sentiment analysis score indicating whether the sentiment is positive, negative, or neutral.</p>
              <div className="mt-auto flex gap-2">
                <button className="flex-1 text-sm mt-2 py-4 px-2 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700 transform transition-transform duration-300 hover:scale-105">
                  <a href='https://sentiment-analysis-ngla.onrender.com/' target='_blank' rel='noopener noreferrer'>Live Preview</a>
                </button>
                <button className="flex-1 text-sm mt-1 py-2 px-2 border rounded-full hover:border-blue-500 hover:text-blue-500 transform transition-transform duration-300 hover:scale-105">
                  <a href='https://github.com/kottarivaibhav/Sentiment_Analysis' target='_blank' rel='noopener noreferrer'>Checkout GitHub</a>
                </button>
              </div>
            </div>
          </div>
          {/* Project 2 */}
          
          <div className='flex flex-col border rounded-md p-5'>
            <img src={project1} alt='project1' className="w-full h-48 object-cover mb-4" />
            <div className="flex flex-col flex-grow">
              <h3 className="text-2xl font-semibold mt-4">Event Management</h3>
              <p className="text-gray-400 text-sm mt-2 flex-grow">This project was part of my DBMS mini project where I developed a system for managing college events.</p>
              <div className="mt-auto flex gap-2">
                <button className="flex-1 text-sm mt-2 py-4 px-2 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700 transform transition-transform duration-300 hover:scale-105">
                  <a href='https://github.com/kottarivaibhav/dbms_mini_project' target='_blank' rel='noopener noreferrer'>Live preview</a>
                </button>
                <button className="flex-1 text-sm mt-1 py-2 px-2 border rounded-full hover:border-blue-500 hover:text-blue-500 transform transition-transform duration-300 hover:scale-105">
                  <a href='https://github.com/kottarivaibhav/dbms_mini_project' target='_blank' rel='noopener noreferrer'>Checkout GitHub</a>
                </button>
              </div>
            </div>
          </div>
          {/* Project 3 */}
          <div className='flex flex-col border rounded-md p-5'>
            <img src={project3} alt='project3' className="w-full h-48 object-cover mb-4" />
            <div className="flex flex-col flex-grow">
              <h3 className="text-2xl font-semibold mt-4">AI-Summarizer</h3>
              <p className="text-gray-400 text-sm mt-2 flex-grow">AI Summarizer is a Generative AI application that uses the RapidAPI to summarize articles. This tool is built with React, Vite, Redux Toolkit, and Tailwind CSS. </p>
              <div className="mt-auto flex gap-2">
                <button className="flex-1 text-sm mt-2 py-4 px-2 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700 transform transition-transform duration-300 hover:scale-105">
                  <a href='https://ai-summarizer-101.netlify.app/' target='_blank' rel='noopener noreferrer'>Live Preview</a>
                </button>
                <button className="flex-1 text-sm mt-1 py-2 px-2 border rounded-full hover:border-blue-500 hover:text-blue-500 transform transition-transform duration-300 hover:scale-105">
                  <a href='https://github.com/kottarivaibhav/ai_summarizer' target='_blank' rel='noopener noreferrer'>Checkout GitHub</a>
                </button>
              </div>
            </div>
          </div>
          {/* Project 4 */}
          <div className='flex flex-col border rounded-md p-5'>
            <img src={project2} alt='project2' className="w-full h-48 object-cover mb-4" />
            <div className="flex flex-col flex-grow">
              <h3 className="text-2xl font-semibold mt-4">Little Lemon Restaurant</h3>
              <p className="text-gray-400 text-sm mt-2 flex-grow">This was my Capstone Project from Meta Front End Developer Path. I used React Framework for this Project.</p>
              <div className="mt-auto flex gap-2">
                <button className="flex-1 text-sm mt-2 py-4 px-2 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700 transform transition-transform duration-300 hover:scale-105">
                  <a href='https://kottarivaibhav.github.io/meta_front_end_developer_capstone/' target='_blank' rel='noopener noreferrer'>Live preview</a>
                </button>
                <button className="flex-1 text-sm mt-1 py-2 px-2 border rounded-full hover:border-blue-500 hover:text-blue-500 transform transition-transform duration-300 hover:scale-105">
                  <a href='https://github.com/kottarivaibhav/meta_front_end_developer_capstone' target='_blank' rel='noopener noreferrer'>Checkout GitHub</a>
                </button>
              </div>
            </div>
          </div>
          
          
        </div>
      </div>
    </section>
  );
};



export default ProjectSection;
