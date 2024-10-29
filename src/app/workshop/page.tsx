"use client"

import { useRouter } from "next/navigation"
import { Leaf, Sparkles, Calendar, MapPin, Github, Code, FileJson, Server, Database, Boxes, GitBranch, Globe, Bot, Cpu, Braces } from "lucide-react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const WorkshopSection = () => {
  const router = useRouter()

  const weeklyTopics = [
    { topic: "Git and GitHub", icon: Github },
    { topic: "HTML & CSS", icon: Code },
    { topic: "JavaScript Basics", icon: Braces },
    { topic: "Advanced JavaScript", icon: FileJson },
    { topic: "JavaScript Projects & Advanced Concepts", icon: Boxes },
    { topic: "Competitive Programming & DSA", icon: Cpu },
    { topic: "Node.js", icon: Server },
    { topic: "HTTP & Server Fundamentals", icon: Globe },
    { topic: "Databases (SQL)", icon: Database },
    { topic: "Express.js", icon: Server },
    { topic: "Backend Project", icon: Boxes },
    { topic: "React Basics & Projects", icon: Boxes },
    { topic: "Advanced React & Projects", icon: Boxes },
    { topic: "Advanced Git & Deployment", icon: GitBranch },
    { topic: "Open Source Contributions", icon: Github },
    { topic: "Next.js", icon: Server },
    { topic: "Generative AI Projects", icon: Bot }
  ]

  return (
    <div className="min-h-[calc(100vh-4rem)]  flex items-center justify-center overflow-hidden relative">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 bg-[url('/leaves.svg')] opacity-5"></div>
      <div className="absolute top-20 left-10 w-64 h-64 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-10 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-32 left-20 w-64 h-64 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <div className="container mx-auto px-4 relative z-10 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center"
        >
          {/* Logo/Icon Section with decorative elements */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 20 }}
            className="relative mb-8 group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-400 rounded-full blur-2xl opacity-30 group-hover:opacity-40 transition-opacity duration-300"></div>
            <div className="relative">
              <Leaf className="w-20 h-20 text-green-600 animate-float" />
              <Sparkles className="w-6 h-6 text-blue-400 absolute -top-2 -right-2 animate-pulse" />
            </div>
          </motion.div>

          {/* Header Section */}
          <div className="space-y-6 mb-12">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-black leading-tight"
            >
              <span className="relative">
                <span className="absolute -inset-1 bg-white/50 blur-xl rounded-lg"></span>
                <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-teal-500 to-blue-600">
                  College Nexus Workshop
                </span>
              </span>
            </motion.h1>

            {/* Info badges */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-green-800">
                <Calendar className="w-4 h-4" />
                <span>Every Saturday</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-green-800">
                <MapPin className="w-4 h-4" />
                <span>SIT College, CSE Building</span>
              </div>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-green-800 max-w-xl mx-auto leading-relaxed"
            >
              Join us every Saturday (excluding holidays) to learn and practice essential skills in Web Dev, CP, DevOps, Open Source, and Generative AI!
            </motion.p>
          </div>

          {/* Syllabus Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="w-full max-w-6xl mx-auto"
          >
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <h2 className="text-2xl font-bold text-green-800 mb-6 flex items-center gap-3 border-b border-green-100 pb-4">
                <span className="w-1 h-6 bg-gradient-to-b from-green-500 to-blue-500 rounded-full"></span>
                Syllabus Outline
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {weeklyTopics.map(({ topic, icon: Icon }, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i }}
                  >
                    <Card className="bg-gradient-to-br from-green-50 to-blue-50 border-green-200 hover:shadow-lg transition-all duration-300 group">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg text-green-700 flex items-center gap-2">
                          <div className="p-2 bg-green-100 rounded-full group-hover:bg-green-200 transition-colors">
                            <Icon className="w-5 h-5 text-green-600" />
                          </div>
                          Week {i + 1}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-green-900">{topic}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-full 
                     hover:from-green-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl 
                     transform hover:-translate-y-1 hover:scale-105 active:scale-95"
            onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSeDl4jWr8uZyOsDUp_ozx0MBg-mTiPFoSCgArLSRSVvnXVNRw/viewform", "_blank")}
          >
            Sign Up for the Workshop
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}

// Add these animations to your global CSS
const style = `
@keyframes blob {
  0% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0px, 0px) scale(1); }
}
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}
.animate-blob {
  animation: blob 7s infinite;
}
.animate-float {
  animation: float 6s ease-in-out infinite;
}
.animation-delay-2000 {
  animation-delay: 2s;
}
.animation-delay-4000 {
  animation-delay: 4s;
}
`

export default WorkshopSection