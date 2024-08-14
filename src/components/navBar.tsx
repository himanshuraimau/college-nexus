"use client"
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-nav text-white p-4 " >
      <div className="pl-15 pr-15 container mx-auto flex items-center justify-between">
        
          <div className="text-xl font-bold">CollegeNexus</div>

          <div className="flex justify-evenly space-x-4">
            <div>Resources</div>
            <div>News</div>
            <div>Network</div>
          </div>

        {/* Hamburger Menu (for mobile) */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white p-2">
          <div>Mobile Menu Items Here</div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
