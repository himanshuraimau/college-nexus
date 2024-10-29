"use client"

import { useRouter } from "next/navigation"
import { Leaf, Sun, Cloud, Wind, Sunrise, Newspaper, Users } from "lucide-react"
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
          <div className="flex flex-wrap justify-center gap-4 w-3/5 md:w-auto">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white hover:from-green-500 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl rounded-full px-8 py-4 text-lg font-semibold flex items-center space-x-3"
                onClick={() => router.push("/workshop")}
              >
                <Leaf className="w-5 h-5" />
                <span>Workshop</span>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-400 to-green-500 text-white hover:from-blue-500 hover:to-green-600 transition-all duration-300 shadow-lg hover:shadow-xl rounded-full px-8 py-4 text-lg font-semibold flex items-center space-x-3"
                onClick={() => router.push("/resources")}
              >
                <Cloud className="w-5 h-5" />
                <span>Resources</span>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-400 to-pink-500 text-white hover:from-purple-500 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl rounded-full px-8 py-4 text-lg font-semibold flex items-center space-x-3"
                onClick={() => router.push("/news")}
              >
                <Newspaper className="w-5 h-5" />
                <span>News</span>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl rounded-full px-8 py-4 text-lg font-semibold flex items-center space-x-3"
                onClick={() => router.push("/team")}
              >
                <Users className="w-5 h-5" />
                <span>Team</span>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-blue-200 to-transparent"></div>
    </div>
  )
}

export default NatureHeroSection