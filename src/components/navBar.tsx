"use client";
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-nav text-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between p-5">
        <div className="text-2xl font-extrabold tracking-wide cursor-pointer">
          College<span className="text-primary">Nexus</span>
        </div>
        
        <div className="hidden md:flex space-x-8 text-lg font-medium">
          <a href="#" className="hover:text-primary transition duration-300">Resources</a>
          <a href="#" className="hover:text-primary transition duration-300">News</a>
          <a href="#" className="hover:text-primary transition duration-300">Network</a>
        </div>

        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white text-nav">
          <div className="flex flex-col p-4 space-y-2">
            <a href="#" className="block py-2 px-4 hover:bg-gray-200 rounded">Resources</a>
            <a href="#" className="block py-2 px-4 hover:bg-gray-200 rounded">News</a>
            <a href="#" className="block py-2 px-4 hover:bg-gray-200 rounded">Network</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
