"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Sparkles,
  Calendar,
  MapPin,
  Github,
  CheckCheck,
  CheckCircle
} from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { weeklyTopics } from "./topics";

const WorkshopSection = () => {
  const router = useRouter();

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden relative ">
      {/* Background elements */}
     
      <div className="absolute inset-0 bg-[url('/leaves.svg')] opacity-[0.03]"></div>
      <div className="absolute top-20 left-10 w-64 h-64 bg-[var(--nav-hover)]/20 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
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
            transition={{
              delay: 0.2,
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            className="relative mb-8 group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-400 rounded-full blur-2xl opacity-30 group-hover:opacity-40 transition-opacity duration-300"></div>
            <div className="relative">
             
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
                <span className="absolute -inset-1 bg-[var(--nav-hover)]/10 blur-xl rounded-lg"></span>
                <span className="relative text-white text-glow">
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
              <div className="flex items-center gap-2 bg-[var(--nav-bg)]/80 backdrop-blur-sm px-4 py-2 rounded-full text-white">
                <Calendar className="w-4 h-4" />
                <span>Every Saturday</span>
              </div>
              <div className="flex items-center gap-2 bg-[var(--nav-bg)]/80 backdrop-blur-sm px-4 py-2 rounded-full text-white">
                <MapPin className="w-4 h-4" />
                <span>SIT College, CSE Building</span>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-[var(--hero-text-color)] max-w-xl mx-auto leading-relaxed"
            >
              Join us every Saturday (excluding holidays) to learn and practice
              essential skills in Web Dev, CP, DevOps, Open Source, and
              Generative AI!
            </motion.p>
          </div>

          {/* CTA Button - Moved above the syllabus outline */}

          <Button
            className="mb-12 rounded-lg px-8 py-6 text-lg font-semibold bg-gradient-to-r from-[var(--workshop-gradient-from)] to-[var(--workshop-gradient-to)] text-white button-glow transition-all duration-300"
            onClick={() =>
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSeDl4jWr8uZyOsDUp_ozx0MBg-mTiPFoSCgArLSRSVvnXVNRw/viewform",
                "_blank"
              )
            }
          >
            <span className="flex items-center justify-center">
              Register for the Workshop
              <Sparkles className="w-5 h-5 ml-2" />
            </span>
          </Button>
          

          {/* Syllabus Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="w-full max-w-6xl mx-auto bg-[var(--hero-gradient-from)]"
          >
            <div className="bg-[var(--nav-bg)]/90 backdrop-blur-md p-8 rounded-2xl border border-[var(--nav-border)] shadow-xl">
              <h2 className="text-2xl font-bold text-white text-glow mb-6 flex items-center gap-3 border-b border-[var(--nav-border)] pb-4">
                <span className="w-1 h-6 bg-gradient-to-b from-green-500 to-blue-500 rounded-full"></span>
                Syllabus Outline
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {weeklyTopics.map(({ topic, icon: Icon,covered }, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i }}
                  >
                    <Link href={`/workshop/${topic}`}>
                    <Card className="bg-[var(--nav-bg)]/80 backdrop-blur-sm border-[var(--nav-border)] hover:shadow-lg transition-all duration-300 group">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg text-white flex items-center gap-2">
                          <div className="p-2 bg-blue-200 rounded-full group-hover:bg-white-200 transition-colors">
                            <Icon className="w-5 h-5 text-blue-600" />
                          </div>
                          Week {i + 1}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-white">{topic} {covered ? <CheckCircle className="w-8 h-8 text-blue-500" /> : null}</p>
                      </CardContent>
                    </Card>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};



export default WorkshopSection;
