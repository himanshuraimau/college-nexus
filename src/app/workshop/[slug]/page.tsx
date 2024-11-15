"use client"

import { FC } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Notebook, GraduationCap, Video, CheckCircle, XCircle } from 'lucide-react'
import Link from "next/link"

// Import the weeklyTopics array and topicResources here
import { weeklyTopics } from "../topics"
import { topicResources } from "../topics"

interface Resource {
  title: string
  url: string
}

interface TopicResources {
  notes: Resource[]
  assignments: Resource[]
  extraResources: Resource[]
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
  <div className="space-y-2">
    <h3 className="flex items-center space-x-2 font-semibold text-green-700">
      <Icon className="w-5 h-5" />
      <span>{title}</span>
    </h3>
    <ul className="space-y-1">
      {resources.map((resource, index) => (
        <li key={index}>
          <Link href={resource.url} className="block w-full p-2 rounded-md bg-gradient-to-r from-green-100 to-blue-100 hover:from-green-200 hover:to-blue-200 text-green-800 transition-colors duration-300">
            {resource.title}
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

const SingleTopicResources: FC<PageProps> = ({ params }) => {
  const decodedSlug = decodeURIComponent(params.slug)
  const topic = weeklyTopics.find(t => t.topic === decodedSlug)
  const resources = topicResources[decodedSlug]

  if (!topic || !resources) {
    return <div>Topic not found</div>
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-green-600">
          {topic.topic}
        </h1>

        <Card className="bg-white shadow-lg rounded-xl overflow-hidden">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <topic.icon className="w-6 h-6 text-green-600" />
                <span className="text-green-600">
                  {topic.topic}
                </span>
              </div>
              {topic.covered ? (
                <CheckCircle className="w-6 h-6 text-green-500" />
              ) : (
                <XCircle className="w-6 h-6 text-red-500" />
              )}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <ResourceList title="Notes" icon={Notebook} resources={resources.notes} />
              <ResourceList title="Assignments" icon={GraduationCap} resources={resources.assignments} />
              <ResourceList title="Extra Resources" icon={Video} resources={resources.extraResources} />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default SingleTopicResources