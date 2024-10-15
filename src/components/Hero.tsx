"use client"

import { useRouter } from "next/navigation"
import { Sunrise } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"

const HeroSection = () => {
  const router = useRouter()

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-amber-50 via-amber-100 to-orange-200 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 20 }}
          >
            <Sunrise className="w-28 h-28 text-amber-600 mb-8" />
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-amber-900 mb-8 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-orange-600">
              Discover, Learn, and Connect
            </span>
          </h1>
          <p className="text-lg md:text-xl text-amber-800 mb-12 max-w-xl">
            Access a wealth of resources, stay updated with the latest news, and build your network with us.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <Button
              size="lg"
              className="bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 rounded-full"
              onClick={() => router.push("/resources")}
            >
              Resources
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-amber-600 text-amber-600 hover:bg-amber-100 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 rounded-full"
              onClick={() => router.push("/news")}
            >
              News
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="text-amber-600 hover:bg-amber-100 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 rounded-full"
              onClick={() => router.push("/network")}
            >
              Network
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default HeroSection