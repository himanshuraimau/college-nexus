"use client"

import Image from "next/image"
import { Github, Linkedin, Twitter, Globe } from "lucide-react"
import { motion } from "framer-motion"
import { teamMembers } from "./team_members"

export default function Team() {
  return (
    <div className="min-h-screen pt-8 relative overflow-hidden">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="group relative bg-white shadow-lg rounded-2xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-blue-100 opacity-50"></div>
                
                <div className="relative p-6">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-blue-400 rounded-full transform rotate-45"></div>
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      className="rounded-full object-cover z-10 relative"
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-center mb-2 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600">
                    {member.name}
                  </h3>
                  
                  <p className="text-green-700 text-center font-medium">{member.branch}</p>
                  <p className="text-green-600 text-center text-sm">Year: {member.year}</p>

                  <div className="flex flex-wrap gap-2 justify-center mt-4">
                    {member.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-green-200 to-blue-200 text-green-800 rounded-full transform transition-transform duration-300 hover:scale-110"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-center space-x-3 mt-6">
                    {[
                      { icon: Github, link: member.github, label: "GitHub" },
                      { icon: Linkedin, link: member.linkedin, label: "LinkedIn" },
                      { icon: Twitter, link: member.twitter, label: "Twitter" },
                      { icon: Globe, link: member.website, label: "Website" }
                    ].map((social, i) => (
                      <motion.a
                        key={i}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name}'s ${social.label}`}
                        className="p-2 rounded-full bg-gradient-to-r from-green-400 to-blue-400 text-white transition-all duration-300 hover:from-green-500 hover:to-blue-500"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <social.icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>
                </div>

                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-green-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}