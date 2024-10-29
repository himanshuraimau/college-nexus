"use client"

import { useRouter } from "next/navigation"
import { Leaf, Sun, Cloud, Wind, Sunrise } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"

const NatureHeroSection = () => {
  const router = useRouter()

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-b from-green-100 to-blue-100 flex items-center justify-center overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('/leaves.svg')] opacity-10"></div>
      <motion.div 
        className="absolute top-10 left-10 text-green-300"
        animate={{ rotate: 360 }}
        transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
      >
        <Wind className="w-16 h-16" />
      </motion.div>
      <motion.div 
        className="absolute bottom-10 right-10 text-yellow-300"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Sun className="w-24 h-24" />
      </motion.div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 20 }}
            className="relative mb-8"
          >
            <Sunrise className="w-28 h-28 text-green-600 filter drop-shadow" />
            <Cloud className="absolute -top-4 -right-4 w-12 h-12 text-blue-300" />
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600">
              Discover, Learn, and Connect
            </span>
          </h1>
          <p className="text-lg md:text-xl text-green-800 mb-12 max-w-xl leading-relaxed">
            Access a wealth of resources, stay updated with the latest news, and build your network with us.
          </p>
          <div className="grid grid-cols-2 gap-4 md:flex md:space-x-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 rounded-full px-6 py-3 text-lg font-semibold flex items-center space-x-2 group"
              onClick={() => router.push("/workshop")}
            >
              <Leaf className="w-5 h-5 group-hover:animate-wiggle" />
              <span>Workshop</span>
            </Button>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 rounded-full px-6 py-3 text-lg font-semibold flex items-center space-x-2 group"
              onClick={() => router.push("/resources")}
            >
              <Cloud className="w-5 h-5 group-hover:animate-bounce" />
              <span>Resources</span>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-green-600 text-green-700 hover:bg-green-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 rounded-full px-6 py-3 text-lg font-semibold"
              onClick={() => router.push("/news")}
            >
              News
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="text-blue-700 hover:bg-blue-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 rounded-full px-6 py-3 text-lg font-semibold flex items-center space-x-2 group"
              onClick={() => router.push("/team")}
            >
              <Sun className="w-5 h-5 group-hover:animate-spin-slow" />
              <span>Team</span>
            </Button>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-blue-200 to-transparent"></div>
    </div>
  )
}

export default NatureHeroSection