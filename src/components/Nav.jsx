import React from 'react';
import Button from './Button';

const Nav = () => {
  return (
    <div className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto h-18 flex items-center justify-between">
        <div className="text-xl flex items-center  font-bold text-black">
          <span>
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="m14 18l-6-6l6-6l1.4 1.4l-4.6 4.6l4.6 4.6z"/></svg>

          </span>
          Dipesh
        </div>
        <Button classes="rounded-md">Buy now</Button>
      </div>
    </div>
  );
};

export default Nav;
