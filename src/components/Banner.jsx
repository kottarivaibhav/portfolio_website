import React from 'react';
import profile from '../assets/Profile.png';
import profile_small from '../assets/small.png';
import Github from '../assets/github-mark-white.svg';
import Instagram from '../assets/instagram.svg';
import LinkedIn from '../assets/linkedin.svg';

const BannerSection = () => {
  return (
    <section className='banner'>
      <div className='container mx-auto flex flex-col md:flex-row items-center px-4 md:px-6 lg:px-10 py-8 md:py-12'>
        {/* Text Content */}
        <div className='flex-1 mb-8 md:mb-0 text-center md:text-left'>
          <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold heading'>
            Hello! I am Vaibhav Kottari
          </h2>
          <h2 className='text-xl md:text-2xl lg:text-3xl font-bold mt-2 gradient-text'>
            Aspiring Computer Science Engineer
          </h2>
          <p className='mt-4 mr-20 text-base md:text-lg lg:text-xl  text-justify'>
            A Computer Science Engineering Final Year student at St Joseph Engineering College, Mangalore, passionate about Web Development. I am always curious to learn new things and explore new technologies. I am dedicated to honing my skills in web development, including HTML, CSS, JavaScript, React, and Flask. I am eager to apply my knowledge and enthusiasm in a collaborative, innovative environment, contributing to dynamic, user-centric web applications.
          </p>
          <div className='flex justify-center md:justify-start mt-6'>
            <button className="px-6 py-3 bg-gradient-to-t from-blue-500 to-cyan-500 rounded-full text-white font-semibold shadow-md hover:from-blue-700 hover:to-cyan-700">
              <a href='https://drive.google.com/file/d/1qClnG-k_sjDXnpNTv7FncxPW-lWCio1q/view?usp=sharing' target="_blank" rel="noopener noreferrer">
                Download Resume
              </a>
            </button>
          </div>
          <ul className='flex justify-center md:justify-start gap-6 mt-4 ml-0 md:ml-5'>
        <li>
          <a href='https://github.com/kottarivaibhav' target="_blank" rel="noopener noreferrer">
            <img src={Github} className='w-8 h-8 md:w-10 md:h-10 hover:scale-110 transition-transform duration-200' alt="Github" />
          </a>
        </li>
        <li>
          <a href='https://www.instagram.com/__vaibhavkottari__?utm_source=qr' target="_blank" rel="noopener noreferrer">
            <img src={Instagram} className='w-8 h-8 md:w-10 md:h-10 hover:scale-110 transition-transform duration-200' alt="Instagram" />
          </a>
        </li>
        <li>
          <a href='https://www.linkedin.com/in/vaibhav-kottari/' target="_blank" rel="noopener noreferrer">
            <img src={LinkedIn} className='w-8 h-8 md:w-10 md:h-10 hover:scale-110 transition-transform duration-200' alt="LinkedIn" />
          </a>
        </li>
      </ul>
        </div>

        {/* Image Content */}
        <div className='relative flex-2 flex justify-center items-center'>
          <img src={profile} alt='profile' className='relative z-10 w-3/4 md:w-6/7 lg:w-1/2 max-w-xs md:max-w-sm lg:max-w-md mr-5 mb-6 ml-2' />
          <img src={profile_small} alt='circle' className='absolute top-1/2 right-4 transform -translate-y-1/2 w-1/6 md:w-1/8 lg:w-1/10 opacity-50' />
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
