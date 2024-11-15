"use client"

import { FC } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Notebook, GraduationCap, Video, CheckCircle, XCircle, ExternalLink } from 'lucide-react'
import Link from "next/link"
import { motion } from "framer-motion"


import { weeklyTopics, WeeklyTopic } from "../topics"
import { topicResources, TopicResources } from "../topics"

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
  <div className="space-y-3">
    <h3 className="flex items-center space-x-2 font-semibold text-green-700">
      <Icon className="w-5 h-5" />
      <span>{title}</span>
    </h3>
    <ul className="space-y-2">
      {resources.map((resource, index) => (
        <motion.li 
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Link href={resource.url} target="_blank" rel="noopener noreferrer" 
                className="flex items-center justify-between w-full p-3 rounded-md bg-gradient-to-r from-green-50 to-blue-50 hover:from-green-100 hover:to-blue-100 text-green-800 transition-all duration-300 shadow-sm hover:shadow-md">
            <span>{resource.title}</span>
            <ExternalLink className="w-4 h-4 text-green-600" />
          </Link>
        </motion.li>
      ))}
    </ul>
  </div>
)

const SingleTopicResources: FC<PageProps> = ({ params }) => {
  const decodedSlug = decodeURIComponent(params.slug)
  const topic = weeklyTopics.find(t => t.topic === decodedSlug) as WeeklyTopic | undefined
  const resources = topicResources[decodedSlug as keyof typeof topicResources] as TopicResources | undefined

  if (!topic || !resources) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardContent className="p-6">
            <h1 className="text-2xl font-bold text-center text-red-600">Topic not found</h1>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-12  ">
      <div className="container mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600"
        >
          {topic.topic}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="bg-white/80 backdrop-filter backdrop-blur-lg shadow-xl rounded-xl overflow-hidden border border-green-100">
            <CardHeader className="bg-gradient-to-r from-green-100 to-blue-100">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <topic.icon className="w-8 h-8 text-green-600" />
                  <span className="text-2xl font-semibold text-green-800">
                    {topic.topic}
                  </span>
                </div>
                {topic.covered ? (
                  <CheckCircle className="w-8 h-8 text-green-500" />
                ) : (
                  <XCircle className="w-8 h-8 text-red-500" />
                )}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-8">
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

export default SingleTopicResources