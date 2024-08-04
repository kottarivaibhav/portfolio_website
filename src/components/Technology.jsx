// src/components/TechnologiesSection.jsx

import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaGithub, FaJava, FaPython } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiMicrosoftazure, SiMysql } from 'react-icons/si';

const TechnSection = () => {
  return (
    <section className='mt-4 mr-3 p-6' id='Technology'>
      <div className='container m-auto px-10 '>
        <h2 className="text-4xl font-bold underline-header">Technologies Known</h2>
      </div>
      <div className='mt-6'>
        <div className='container m-auto px-10'>
          <div className='flex flex-wrap items-center'>
            <div className='flex flex-col items-center w-1/5 p-2 custom-icon'>
              <FaHtml5 className='text-6xl' />
              <span className='mt-2'>HTML</span>
            </div>
            <div className='flex flex-col items-center w-1/5 p-2 custom-icon-1'>
              <FaCss3Alt className='text-6xl' />
              <span className='mt-2'>CSS</span>
            </div>
            <div className='flex flex-col items-center w-1/5 p-2 custom-icon'>
              <SiTailwindcss className='text-6xl' />
              <span className='mt-2'>Tailwind CSS</span>
            </div>
            <div className='flex flex-col items-center w-1/5 p-2 custom-icon-1'>
              <FaReact className='text-6xl' />
              <span className='mt-2'>React</span>
            </div>
            <div className='flex flex-col items-center w-1/5 p-2 custom-icon'>
              <FaGithub className='text-6xl' />
              <span className='mt-2'>GitHub</span>
            </div>
            <div className='flex flex-col items-center w-1/5 p-2 custom-icon'>
              <SiJavascript className='text-6xl' />
              <span className='mt-2'>JavaScript</span>
            </div>
            <div className='flex flex-col items-center w-1/5 p-2 custom-icon-1'>
              <FaJava className='text-6xl' />
              <span className='mt-2'>Java</span>
            </div>
            <div className='flex flex-col items-center w-1/5 p-2 custom-icon'>
              <SiMicrosoftazure className='text-6xl' />
              <span className='mt-2'>Azure</span>
            </div>
            <div className='flex flex-col items-center w-1/5 p-2 custom-icon-1'>
              <FaPython className='text-6xl' />
              <span className='mt-2'>Python</span>
            </div>
            <div className='flex flex-col items-center w-1/5 p-2 custom-icon'>
              <SiMysql className='text-6xl' />
              <span className='mt-2'>MySQL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnSection;
