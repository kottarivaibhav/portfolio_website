import React, { useState } from 'react';
import '../App.css'; // Ensure your CSS is imported

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky-header">
      <div className="container m-auto px-5 py-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-extrabold text-2xl">Vaibhav Kottari's Portfolio</h1>
          </div>
          <button className="menu-toggle" onClick={toggleMenu}>
            <span className="menu-icon">&#9776;</span> {/* Hamburger icon */}
          </button>
          <div className={`nav-links ${isMenuOpen ? 'open' : 'closed'}`}>
            <ul className="flex flex-col gap-4">
              <li>
                <a className="text-white hover:text-black cursor-pointer" href="#Projects">Projects</a>
              </li>
              <li>
                <a className="text-white hover:text-black cursor-pointer" href="#Technology">Technologies</a>
              </li>
              <li>
                <a className="text-white hover:text-black cursor-pointer" href="#About">About Me</a>
              </li>
              <li>
                <a className="text-white hover:text-black cursor-pointer" href="#Experiences">Experiences</a>
              </li>
              <li>
                <a className="text-white hover:text-black cursor-pointer" href="#Certifications">Certifications</a>
              </li>
              <li>
                <a className="text-white hover:text-black cursor-pointer" href="#FeedbackForm">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
