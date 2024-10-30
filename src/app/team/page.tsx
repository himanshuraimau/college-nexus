import Image from "next/image"
import { Github, Linkedin, Twitter, Globe } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { teamMembers } from "./team_members"


export default function Team() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-amber-800">Our Team</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {teamMembers.map((member, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm hover:shadow-md transition-shadow duration-300">
              <CardHeader className="text-center p-4">
                <Image
                  src={member.photo}
                  alt={member.name}
                  width={80}
                  height={80}
                  className="rounded-full mx-auto mb-2"
                />
                <CardTitle className="text-lg font-semibold text-amber-800">{member.name}</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="space-y-1 text-sm">
                  <p className="text-amber-700">{member.branch}</p>
                  <p className="text-amber-600">Year: {member.year}</p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {member.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="bg-amber-100 text-amber-800 text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-center space-x-3 mt-3">
                    <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-amber-700 hover:text-amber-900">
                      <Github className="w-4 h-4" />
                    </a>
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-amber-700 hover:text-amber-900">
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-amber-700 hover:text-amber-900">
                      <Twitter className="w-4 h-4" />
                    </a>
                    <a href={member.website} target="_blank" rel="noopener noreferrer" className="text-amber-700 hover:text-amber-900">
                      <Globe className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}