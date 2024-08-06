import React, { useState } from 'react';
import '../App.css'; // Ensure your CSS is imported

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header-1 shadow-md">
      <div className="container m-auto px-5 py-4 flex justify-between items-center">
        <div className="logo">
          <h1 className="font-extrabold text-2xl">
            <a href="#home">My Personal Website</a>
          </h1>
        </div>
        <button onClick={toggleMenu} className="text-3xl md:hidden focus:outline-none">
          &#9776;
        </button>
        <ul className={`absolute top-16 left-0  md:static md:flex md:flex-row md:gap-8 md:items-center ${isOpen ? 'block' : 'contents'} `}>
          <li><a className="nav-link" href="#Projects">Projects</a></li>
          <li><a className="nav-link" href="#Technology">Technologies</a></li>
          <li><a className="nav-link" href="#About">About Me</a></li>
          <li><a className="nav-link" href="#Experiences">Experiences</a></li>
          <li><a className="nav-link" href="#Certifications">Certifications</a></li>
          <li><a className="nav-link" href="#FeedbackForm">Contact Us</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
