import React from 'react';

const RightNav = ({ open }) => {
  return (
    <ul className={`list-none flex flex-row space-x-4 md:space-x-6 lg:space-x-8 ${open ? 'flex-col fixed top-0 right-0 h-screen w-72 bg-[#0D2538] pt-14 transform transition-transform duration-300 ease-in-out' : 'hidden md:flex'}`}>
      <li className="py-4 px-2 md:py-0 md:px-0 text-white md:text-gray-800 hover:text-blue-500 transition-colors duration-200">
        <a href="#Projects">Projects</a>
      </li>
      <li className="py-4 px-2 md:py-0 md:px-0 text-white md:text-gray-800 hover:text-blue-500 transition-colors duration-200">
        <a href="#Technology">Technology</a>
      </li>
      <li className="py-4 px-2 md:py-0 md:px-0 text-white md:text-gray-800 hover:text-blue-500 transition-colors duration-200">
        <a href="#About">About Me</a>
      </li>
      <li className="py-4 px-2 md:py-0 md:px-0 text-white md:text-gray-800 hover:text-blue-500 transition-colors duration-200">
        <a href="#Experiences">Experiences</a>
      </li>
      <li className="py-4 px-2 md:py-0 md:px-0 text-white md:text-gray-800 hover:text-blue-500 transition-colors duration-200">
        <a href="#Certifications">Certifications</a>
      </li>
      <li className="py-4 px-2 md:py-0 md:px-0 text-white md:text-gray-800 hover:text-blue-500 transition-colors duration-200">
        <a href="#FeedbackForm">Contact us</a>
      </li>
    </ul>
  );
};

export default RightNav;