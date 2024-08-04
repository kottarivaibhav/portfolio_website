// src/components/Footer.jsx

import React from 'react';
import Github from '../assets/github-mark-white.svg'; // Adjust the path according to your project structure
import Instagram from '../assets/instagram.svg'; // Adjust the path according to your project structure
import LinkedIn from '../assets/linkedin.svg'; // Adjust the path according to your project structure


const Footer = () => {
  return (
    <footer>
      <div className='container m-auto flex flex-col items-center p-3'>
        <div>
          {/* You can add a footer message or logo here if needed */}
          
        </div>
        <div className='text-center'>
          <p className='text-sm'></p>
        </div>
        <ul className='flex gap-4 mt-2 mb-1 space-x-4'>
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
        <p className='text-2xl font-mono'>
          Copyright @ 2024 | Designed by Vaibhav Ramachandra Kottari
        </p>
      </div>
    </footer>
  );
};

export default Footer;
