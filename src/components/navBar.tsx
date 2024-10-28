"use client"

import * as React from "react"
import Link from "next/link"
import { SunMedium, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const navItems = ["Workshop","Resources","Team"]

  return (
    <div className="relative ">
      {/* Background div that spans full width and connects with hero section */}
      <div className="absolute top-0 left-0 w-full h-28 " />
      
      {/* Navbar content */}
      <div className="relative">
        <div className="container mx-auto pt-4">
          <div className="relative left-1/2 -translate-x-1/2 z-50 w-full max-w-[60%]">
            <nav className="bg-white/70 backdrop-blur-sm rounded-full border border-amber-200/30 shadow-lg">
              <div className="px-6">
                <div className="flex items-center justify-between h-12">
                  {/* Logo section */}
                  <Link 
                    href="/" 
                    className="flex items-center space-x-2 text-lg font-bold relative group"
                  >
                    <span className="bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent">
                      CollegeNexus
                    </span>
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-amber-600 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </Link>

                  {/* Desktop Navigation */}
                  <div className="hidden md:flex items-center space-x-6">
                    {navItems.map((item) => (
                      <Link
                        key={item}
                        href={`/${item.toLowerCase()}`}
                        className="relative text-sm text-amber-800 hover:text-amber-900 transition-colors group"
                      >
                        {item}
                        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-amber-600 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                      </Link>
                    ))}
                    <Button 
                      variant="ghost" 
                      size="icon"
                      className="rounded-full h-8 w-8 hover:bg-amber-100/80 text-amber-700"
                    >
                      <SunMedium className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Mobile Navigation */}
                  <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild className="md:hidden">
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-amber-700">
                        <Menu className="h-4 w-4" />
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-64 bg-gradient-to-br from-amber-50 to-orange-50">
                      <div className="flex flex-col space-y-4 mt-8">
                        {navItems.map((item) => (
                          <Link
                            key={item}
                            href={`/${item.toLowerCase()}`}
                            onClick={() => setIsOpen(false)}
                            className="px-4 py-2 text-amber-800 hover:bg-amber-100 rounded-md transition-colors"
                          >
                            {item}
                          </Link>
                        ))}
                      </div>
                    </SheetContent>
                  </Sheet>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar