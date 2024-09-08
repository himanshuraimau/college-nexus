"use client";
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-400 to-indigo-600 text-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between p-5">
        <div className="text-2xl font-extrabold tracking-wide cursor-pointer">
          <Link href="/">CollegeNexus</Link>
        </div>
        <div className="hidden md:flex space-x-8 text-lg font-medium">
          <Link href="/resources" className="hover:text-blue-200 transition duration-300">Resources</Link>
          <Link href="/news" className="hover:text-blue-200 transition duration-300">News</Link>
          <Link href="/network" className="hover:text-blue-200 transition duration-300">Network</Link>
        </div>

        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <svg className="w-6 h-6 transition transform rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-6 h-6 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gradient-to-b from-blue-400 to-indigo-600 text-white transition-all duration-300">
          <div className="flex flex-col p-4 space-y-2">
            <Link href="/resources" className="block py-2 px-4 hover:bg-white hover:text-blue-600 rounded transition duration-300">Resources</Link>
            <Link href="/news" className="block py-2 px-4 hover:bg-white hover:text-blue-600 rounded transition duration-300">News</Link>
            <Link href="/network" className="block py-2 px-4 hover:bg-white hover:text-blue-600 rounded transition duration-300">Network</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;