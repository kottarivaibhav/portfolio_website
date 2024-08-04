import React from 'react';
import '../App.css'; // Ensure your CSS is imported

const Header = () => {
  return (
    <header>
      <div className="container m-auto px-5 py-4">
        <div className="flex justify-between">
          <div>
            <h1 className="font-extrabold text-2xl">Vaibhav Kottari's Portfolio</h1>
          </div>
          <div className="flex justify-between items-center">
            <ul className="flex gap-4">
              <li>
                <a className="text-white hover:text-black cursor-pointer" href="#Projects">Projects</a>
              </li>
              <li>
                <a className="text-white hover:text-black cursor-pointer" href="#Technology">Technologies</a>
              </li>
              <li>
                <a className="text-white hover:text-black cursor-pointer" href="#About">About Me</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
