"use client";
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-nav text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className='text-white flex items-center justify-center'>
            Resources
        </div>
        </div>
    </nav>
  );
};

export default Navbar;
