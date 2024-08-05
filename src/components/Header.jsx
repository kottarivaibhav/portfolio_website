import React, { useState, useEffect } from 'react';
import '../App.css'; // Ensure your CSS is imported

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='header-1'>
      <div className="container m-auto px-5 py-4">
        <div className="flex justify-between ">
          <div className="logo">
            <h1 className="font-extrabold text-2xl" id="#home"><a href='#home'>Vaibhav Kottari - <span className='text-large'>My personal Website </span></a></h1>
          </div>
          <button className="menu-toggle" onClick={toggleMenu}>
            <span className="menu-icon">&#9776;</span> {/* Hamburger icon */}
          </button>
          <nav className={`nav-links ${isMenuOpen ? 'open' : 'closed'}`}>
            <ul className="flex flex-col gap-4">
              <li><a className="nav-link" href="#Projects">Projects</a></li>
              <li><a className="nav-link" href="#Technology">Technologies</a></li>
              <li><a className="nav-link" href="#About">About Me</a></li>
              <li><a className="nav-link" href="#Experiences">Experiences</a></li>
              <li><a className="nav-link" href="#Certifications">Certifications</a></li>
              <li><a className="nav-link" href="#FeedbackForm">Contact Us</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
