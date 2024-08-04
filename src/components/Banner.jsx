// src/components/BannerSection.jsx

import React from 'react';
import profile from '../assets/Profile.png';
import profile_small from '../assets/small.png'; // Update the import paths as needed
import Github from '../assets/github-mark-white.svg';
import Instagram from '../assets/instagram.svg';
import LinkedIn from '../assets/linkedin.svg';

const BannerSection = () => {
  return (
    <section className='banner'>
  <div className='container mx-auto flex flex-col md:flex-row items-center'>
    <div className='flex-1 p-9 mb-9'>
      
      <h2 className=' font-bold text-5xl heading'>Hello ! I am Vaibhav Kottari</h2>
          <h2 className=' font-bold text-4xl mt-1 gradient-text'>Aspiring Computer Science Engineer</h2>
      <p className='mt-4 mr-0 text-center md:text-left'>
      A Computer Science Engineering student at St Joseph Engineering College, Mangalore, passionate about Data Science and development. I am always curious to learn new things and explore new technologies. I am dedicated to honing my skills in web development, including HTML, CSS, JavaScript, React, and Flask. I am eager to apply my knowledge and enthusiasm in a collaborative, 
      innovative environment, contributing to dynamic, user-centric web applications.
      </p>
      <button className="px-8 shadow-gray-500 shadow-md py-5 mt-5 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
            <a href='https://drive.google.com/file/d/141XIq1fIzTFQ9n48vpMmrKcl93Ezpn5d/view?usp=sharing' target="_blank" rel="noopener noreferrer">
              Download resume
            </a>
          </button>
      <ul className='flex gap-4 mt-4 ml-3'>
        <li>
          <a href='https://github.com/kottarivaibhav' target="_blank" rel="noopener noreferrer">
            <img src={Github} className='w-10' alt="Github" />
          </a>
        </li>
        <li>
          <a href='https://www.instagram.com/__vaibhavkottari__?utm_source=qr' target="_blank" rel="noopener noreferrer">
            <img src={Instagram} className='w-10' alt="Instagram" />
          </a>
        </li>
        <li>
          <a href='https://www.linkedin.com/in/vaibhav-kottari/' target="_blank" rel="noopener noreferrer">
            <img src={LinkedIn} className='w-10' alt="LinkedIn" />
          </a>
        </li>
      </ul>
    </div>
    <div className='relative flex-1 flex justify-center '>
      <img src={profile} alt='profile' width={400} className='relative z-10 py-4' />
      <img src={profile_small} alt='circle' className='absolute top-1 left-75 z-125 bottom-55 ' />
    </div>
    
  </div>
</section>
  );
};

export default BannerSection;

{/*
  
  <section className=' mt-5'>
      <div className=' container m-auto px-10 py-16 flex gap-8 '>
        <div>
          <h2 className=' font-bold text-5xl heading'>Hello ! I am Vaibhav Kottari</h2>
          <h2 className=' font-bold text-4xl mt-1 gradient-text'>Aspiring Computer Science Engineer</h2>
          <p className='mt-5 text-gray-400'>
            <span className='block'>A Computer Science Engineering student at St Joseph Engineering College, Mangalore, passionate about Data Science and development. I am always curious to learn new things and explore new technologies. I am dedicated to honing my skills in web development, including HTML, CSS, JavaScript, React, and Flask. I am eager to apply my knowledge and enthusiasm in a collaborative, 
              innovative environment, contributing to dynamic, user-centric web applications.</span>
           
          </p>
          <button className="px-8 shadow-gray-500 shadow-md py-5 mt-5 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
            <a href='https://drive.google.com/file/d/141XIq1fIzTFQ9n48vpMmrKcl93Ezpn5d/view?usp=sharing' target="_blank" rel="noopener noreferrer">
              Download resume
            </a>
          </button>
          <ul className='flex gap-4 ml-3 mt-4 mb-1'>
            <li>
              <a href='https://github.com/kottarivaibhav' target="_blank" rel="noopener noreferrer">
                <img src={Github} className='w-10' alt="GitHub" />
              </a>
            </li>
            <li>
              <a href='https://www.instagram.com/__vaibhavkottari__?utm_source=qr' target="_blank" rel="noopener noreferrer">
                <img src={Instagram} className='w-10' alt="Instagram" />
              </a>
            </li>
            <li>
              <a href='https://www.linkedin.com/in/vaibhav-kottari/' target="_blank" rel="noopener noreferrer">
                <img src={LinkedIn} className='w-10' alt="LinkedIn" />
              </a>
            </li>
          </ul>
        </div>
        <div className='relative'>
          <img src={profile} alt='profile' width={400} className='relative z-10 py-4' />
          <img src={profile_small} alt='circle' className='absolute top-1 left-75 z-125 bottom-55 ' />
        </div>
      </div>
    </section>
    
    */}