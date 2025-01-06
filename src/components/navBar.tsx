"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from "framer-motion"
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const navItems = ["Workshop","AcadBlogs", "Resources", "Team"]

  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-full h-28" />
      
      <div className="relative">
        <div className="container mx-auto pt-4">
          <nav className="bg-white/70 backdrop-blur-sm rounded-full border border-green-200/30 shadow-lg px-8 py-3">
            <div className="flex items-center justify-between">
              <Link 
                href="/" 
                className="text-lg font-bold relative group"
              >
                <span className="bg-gradient-to-r from-green-700 to-blue-600 bg-clip-text text-transparent">
                  CollegeNexus
                </span>
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-green-600 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </Link>

              <div className="hidden md:flex items-center space-x-6">
                {navItems.map((item) => (
                  <Link
                    key={item}
                    href={`/${item.toLowerCase()}`}
                    className="relative text-md text-green-800 hover:text-green-900 transition-colors group"
                  >
                    {item}
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-green-600 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </Link>
                ))}
              </div>

              <div className="hidden md:flex items-center space-x-4">
                <SignedOut>
                  <SignInButton>
                  </SignInButton>
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </div>

              <button
                className="md:hidden text-green-700 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </nav>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-white/90 backdrop-blur-md shadow-lg rounded-b-3xl overflow-hidden z-50"
          >
            <div className="md:hidden container mx-auto py-4 flex flex-col items-center space-y-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="block py-3 px-6 text-green-800 hover:bg-green-100 transition-colors rounded-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
              <SignedOut>
                <SignInButton/>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Navbar

