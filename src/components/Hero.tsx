"use client"

import { useRouter } from "next/navigation"
import { Leaf, Cloud, Newspaper, Users } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"

const NatureHeroSection = () => {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-b from-[var(--hero-gradient-from)] to-[var(--hero-gradient-to)] flex items-center justify-center overflow-hidden relative">
      <div className="absolute inset-0 opacity-[0.03]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight text-white text-glow">
            <span className="bg-clip-text bg-gradient-to-r from-[var(--hero-text-gradient-from)] to-[var(--hero-text-gradient-to)]">
              Discover, Learn, and Connect
            </span>
          </h1>
          <p className="text-lg md:text-xl text-[var(--hero-text-color)] mb-12 max-w-xl leading-relaxed">
            Access a wealth of resources, stay updated with the latest news, and build your network with us.
          </p>
          <div className="flex flex-wrap justify-center gap-4 w-3/5 md:w-auto">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-[var(--workshop-gradient-from)] to-[var(--workshop-gradient-to)] text-white transition-all duration-300 rounded-full px-8 py-4 text-lg font-semibold flex items-center space-x-3 button-glow"
                onClick={() => router.push("/workshop")}
              >
                <Leaf className="w-5 h-5" />
                <span>Workshop</span>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-[var(--resources-gradient-from)] to-[var(--resources-gradient-to)] text-white hover:from-[var(--resources-gradient-from)] hover:to-[var(--resources-gradient-to)] transition-all duration-300 shadow-lg hover:shadow-xl rounded-full px-8 py-4 text-lg font-semibold flex items-center space-x-3 button-glow"
                onClick={() => router.push("/resources")}
              >
                <Cloud className="w-5 h-5" />
                <span>Resources</span>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-[var(--news-gradient-from)] to-[var(--news-gradient-to)] text-white hover:from-[var(--news-gradient-from)] hover:to-[var(--news-gradient-to)] transition-all duration-300 shadow-lg hover:shadow-xl rounded-full px-8 py-4 text-lg font-semibold flex items-center space-x-3 button-glow"
                onClick={() => router.push("/news")}
              >
                <Newspaper className="w-5 h-5" />
                <span>News</span>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-[var(--team-gradient-from)] to-[var(--team-gradient-to)] text-white hover:from-[var(--team-gradient-from)] hover:to-[var(--team-gradient-to)] transition-all duration-300 shadow-lg hover:shadow-xl rounded-full px-8 py-4 text-lg font-semibold flex items-center space-x-3 button-glow"
                onClick={() => router.push("/team")}
              >
                <Users className="w-5 h-5" />
                <span>Team</span>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[var(--hero-gradient-from)] to-transparent"></div>
    </div>
  )
}

export default NatureHeroSection