"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from "framer-motion"


const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const navItems = ["Workshop", "AcadBlogs", "Resources", "Team"]

  return (
    <div className="relative">
      <div className="top-0 left-0 right-0 z-50 px-4">
        <nav className="bg-[var(--nav-bg)]/80 backdrop-blur-md rounded-2xl shadow-lg px-4 py-2">
          <div className="flex items-center gap-12">
            <Link
              href="/"
              className="text-2xl pt-1 font-semibold relative group"
            >
              <span className="text-white pl-2 text-glow bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                CollegeNexus
              </span>
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </Link>

            <div className="hidden md:flex items-center space-x-6 pt-2 text-md">
              {navItems.map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="relative group px-3 rounded-lg text-white/90 hover:text-white transition-all duration-300"
                >
                  <span className="relative z-10">
                    {item}
                  </span>
                  <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </Link>
              ))}
            </div>

            <button
              className="md:hidden ml-auto relative group p-2 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-4 right-4 bg-[var(--nav-bg)]/95 backdrop-blur-md rounded-xl shadow-lg overflow-hidden z-50"
          >
            <div className="md:hidden py-4 flex flex-col items-stretch">
              {navItems.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="block px-6 py-3 text-white/90 hover:text-white relative group"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="relative z-10">{item}</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-300" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Navbar

