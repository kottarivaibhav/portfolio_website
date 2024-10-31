import React from 'react';
import Burger from './Burger'; // Assuming you have a Burger component for the menu icon

const Navbar = () => {
  return (
    <header className="w-full h-14 bg-[#7ce0fc] border-b-2 border-gray-200 px-5 flex justify-between items-center sticky top-0 z-50 font-sans text-base text-gray-800">
      <div className="logo py-3 text-xl font-bold text-gray-800">
        <h1>Portfolio Website</h1>
      </div>
      <Burger />
    </header>
  );
};

export default Navbar;