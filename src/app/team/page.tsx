"use client"

import Image from "next/image"
import { Github, Linkedin, Twitter, Globe } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { teamMembers } from "./team_members"

export default function Team() {
  return (
    <div className="h-full pt-8 relative overflow-hidden">
      {/* Background elements matching workshop page */}
      <div className="absolute inset-0 bg-[url('/leaves.svg')] opacity-5"></div>
      <div className="absolute top-20 left-10 w-64 h-64 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-10 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-32 left-20 w-64 h-64 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-black text-center mb-16"
        >
          <span className="relative">
            <span className="absolute -inset-1 bg-white/50 blur-xl rounded-lg"></span>
            <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-teal-500 to-blue-600">
              Our Team
            </span>
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group relative bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 overflow-hidden rounded-xl">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-green-50/50 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative p-6 text-center">
                  {/* Large circular image with gradient border */}
                  <div className="relative mx-auto w-48 h-48 mb-6 rounded-full overflow-hidden ring-2 ring-offset-4 ring-green-500/20 group-hover:ring-green-500/40 transition-all duration-300">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      className="object-cover transform group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-600">
                    {member.name}
                  </h3>
                  
                  <p className="text-green-700 mt-2 font-medium">{member.branch}</p>
                  <p className="text-green-600 text-sm">Year: {member.year}</p>

                  {/* Skills with animated hover */}
                  <div className="flex flex-wrap gap-2 justify-center mt-4">
                    {member.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        className="bg-gradient-to-r from-green-100 to-blue-100 hover:from-green-200 hover:to-blue-200 text-green-800 transition-colors duration-300"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  {/* Social links with hover effects */}
                  <div className="flex justify-center space-x-4 mt-6">
                    {[
                      { icon: Github, link: member.github },
                      { icon: Linkedin, link: member.linkedin },
                      { icon: Twitter, link: member.twitter },
                      { icon: Globe, link: member.website }
                    ].map((social, i) => (
                      <a
                        key={i}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-green-50 hover:bg-green-100 text-green-600 hover:text-green-700 transition-colors duration-300"
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}