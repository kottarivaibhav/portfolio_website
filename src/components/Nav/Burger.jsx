import React, { useState } from 'react';
import RightNav from './RightNav';

const Burger = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={`fixed top-4 right-5 z-20 flex flex-col justify-around items-center w-8 h-8 cursor-pointer md:hidden ${open ? 'open' : ''}`}
        onClick={() => setOpen(!open)}
      >
        <div
          className={`w-8 h-1 bg-${open ? 'gray-300' : 'gray-800'} rounded transform transition-transform duration-300 ${open ? 'rotate-45' : ''}`}
        />
        <div
          className={`w-8 h-1 bg-${open ? 'gray-300' : 'gray-800'} rounded transform transition-transform duration-300 ${open ? 'translate-x-full opacity-0' : ''}`}
        />
        <div
          className={`w-8 h-1 bg-${open ? 'gray-300' : 'gray-800'} rounded transform transition-transform duration-300 ${open ? '-rotate-45' : ''}`}
        />
      </div>
      <RightNav open={open} />
    </>
  );
};

export default Burger;