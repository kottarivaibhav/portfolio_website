// src/components/BannerSection.jsx

import React from 'react';
import profile from '../assets/Photo.png'
import profile_small from '../assets/small.png'// Update the import paths as needed

const BannerSection = () => {
  return (
    <section className=' mt-5'>
      <div className=' container m-auto px-10 py-16 flex gap-8 '>
        <div>
          <h2 className=' font-bold text-5xl heading'>Hello ! I am Vaibhav Kottari</h2>
          <h2 className=' font-bold text-4xl mt-1 gradient-text'>Aspiring Computer Science Engineer</h2>
          <p className='mt-5 text-gray-400'>
            <span className='block'>A Student of Computer Science Engineering at St Joseph Engineering College, Mangalore,</span>
            <span className='block'>who is passionate about Data Science and development. I am always curious to learn new things and explore new technologies.</span>
          </p>
          <button className="px-8 shadow-gray-500 shadow-md py-5 mt-5 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
            <a href='https://drive.google.com/file/d/141XIq1fIzTFQ9n48vpMmrKcl93Ezpn5d/view?usp=sharing' target="_blank" rel="noopener noreferrer">
              Download resume
            </a>
          </button>
        </div>
        <div className='relative'>
          <img src={profile} alt='profile' width={400} className='relative z-10 py-4' />
          <img src={profile_small} alt='circle' className='absolute top-1 left-75 z-125 bottom-55 ' />
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
