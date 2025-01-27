'use client'

import { FC } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Notebook, GraduationCap, Video, CheckCircle, XCircle, ExternalLink } from 'lucide-react'
import Link from "next/link"
import { motion } from "framer-motion"



import { weeklyTopics} from "../topics"
import { topicResources } from "../topics"



interface Resource {
  title: string
  url: string
}

interface PageProps {
  params: {
    slug: string
  }
}

const ResourceList: FC<{ title: string; icon: React.ElementType; resources: Resource[] }> = ({
  title,
  icon: Icon,
  resources,
}) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="space-y-4"
  >
    <h3 className="flex items-center space-x-3 font-semibold text-white text-glow text-lg">
      <div className="p-2 rounded-lg bg-[rgba(56,189,248,0.1)]">
        <Icon className="w-6 h-6 text-[var(--nav-hover)]" />
      </div>
      <span>{title}</span>
    </h3>
    <ul className="space-y-3">
      {resources.map((resource, index) => (
        <motion.li 
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Link 
            href={resource.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group flex items-center justify-between w-full p-4 rounded-xl bg-[var(--nav-bg)]/80 hover:bg-[var(--nav-bg)] text-white text-glow transition-all duration-300 border border-[var(--nav-border)] button-glow"
          >
            <span className="font-medium">{resource.title}</span>
            <ExternalLink className="w-5 h-5 text-blue-600 transform transition-transform group-hover:rotate-12" />
          </Link>
        </motion.li>
      ))}
    </ul>
  </motion.div>
)

const SingleTopicResources: FC<PageProps> = ({ params }) => {
  const decodedSlug = decodeURIComponent(params.slug)
  const topic = weeklyTopics.find(t => t.topic === decodedSlug)
  const resources = topicResources[decodedSlug as keyof typeof topicResources]

  if (!topic || !resources) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md"
        >
          <Card className="shadow-xl border-red-200">
            <CardContent className="p-8">
              <div className="flex flex-col items-center space-y-4">
                <XCircle className="w-16 h-16 text-red-500" />
                <h1 className="text-2xl font-bold text-red-600">Topic Not Found</h1>
                <p className="text-red-500 text-center">The requested topic could not be found.</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-16 bg-[var(--bg)]">
      <div className="container mx-auto px-4 max-w-4xl">
       
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="bg-[var(--card-bg)]/90 backdrop-blur-lg shadow-xl rounded-2xl overflow-hidden border border-[var(--card-border)]">
            <CardHeader className="bg-gradient-to-r from-[rgba(56,189,248,0.1)] to-[rgba(56,189,248,0.1)] p-6">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-xl bg-[var(--card-bg)]/80 shadow-sm">
                    <topic.icon className="w-8 h-8 text-[var(--nav-hover)]" />
                  </div>
                  <span className="text-2xl font-bold text-white text-glow">
                    {topic.topic}
                  </span>
                </div>
                <div className="p-2 rounded-full bg-[var(--card-bg)]/80">
                  {topic.covered ? (
                    <CheckCircle className="w-8 h-8 text-blue-500" />
                  ) : (
                    <XCircle className="w-8 h-8 text-red-500" />
                  )}
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-12">
                <ResourceList title="Notes" icon={Notebook} resources={resources.notes} />
                <ResourceList title="Assignments" icon={GraduationCap} resources={resources.assignments} />
                <ResourceList title="Extra Resources" icon={Video} resources={resources.extraResources} />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

export default function Component({ params = { slug: 'React Basics' } }: PageProps) {
  return <SingleTopicResources params={params} />
}


