'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import SubjectCard from './SubjectCard'
import { Card } from "@/components/ui/card"
import { motion } from 'framer-motion'
import { Book, GraduationCap, Calendar, Folder } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

interface Resource {
    notes: Record<string, string>
    question_bank: Record<string, string>
    pyqs: {
        internals: Record<string, string>
        final_exam: string
    }
}

interface Subject {
    year: number
    semester: number
    subject: string
    branch: string
    resources: Resource
}

const FilteredSubjects: React.FC<{ subjects: Subject[] }> = ({ subjects }) => {
    const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null)
    const router = useRouter()

    const handleSubjectClick = (subject: Subject) => {
        setSelectedSubject(subject)
    }

    const handleBackToResources = () => {
        router.push('/resources')
    }

    return (
        <div>
            <motion.button 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8 px-6 py-3 bg-gradient-to-r from-[var(--resources-gradient-from)] to-[var(--resources-gradient-to)] text-white rounded-full button-glow transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[var(--resources-gradient-from)]"
                onClick={handleBackToResources}
            >
                Back to Resources
            </motion.button>

            {selectedSubject ? (
                <SubjectCard subject={selectedSubject} onBack={() => setSelectedSubject(null)} />
            ) : (
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {subjects.length > 0 ? (
                        subjects.map((subject, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <Card 
                                    className="group relative bg-[var(--nav-bg)] backdrop-blur-md border border-[var(--nav-border)] hover:shadow-xl transition-all duration-300 overflow-hidden rounded-xl cursor-pointer"
                                    onClick={() => handleSubjectClick(subject)}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-b from-[var(--nav-hover)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="relative p-6">
                                        <h3 className="text-xl font-bold text-white mb-2">
                                            {subject.subject}
                                        </h3>
                                        <div className="flex items-center text-white/90 mb-1">
                                            <GraduationCap className="w-4 h-4 mr-2" />
                                            <p className="text-sm">{subject.branch}</p>
                                        </div>
                                        <div className="flex items-center text-white/90 mb-1">
                                            <Calendar className="w-4 h-4 mr-2" />
                                            <p className="text-sm">Year: {subject.year}, Semester: {subject.semester}</p>
                                        </div>
                                        <div className="mt-4">
                                            <h4 className="text-sm font-semibold text-white mb-2">Available Resources:</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {Object.keys(subject.resources).map((resourceType, idx) => (
                                                    <Badge 
                                                        key={idx}
                                                        className="bg-gradient-to-r from-[var(--resources-gradient-from)]/10 to-[var(--resources-gradient-to)]/10 hover:from-[var(--resources-gradient-from)]/20 hover:to-[var(--resources-gradient-to)]/20 text-[var(--resources-gradient-from)] transition-colors duration-300"
                                                    >
                                                        {resourceType.replace('_', ' ')}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                        <button
                                            className="mt-6 w-full py-2 px-4 bg-gradient-to-r from-[var(--resources-gradient-from)] to-[var(--resources-gradient-to)] text-white rounded-full hover:from-[var(--resources-gradient-from)] hover:to-[var(--resources-gradient-to)] transition-colors duration-300 flex items-center justify-center"
                                        >
                                            <Folder className="w-4 h-4 mr-2" />
                                            View Resources
                                        </button>
                                    </div>
                                </Card>
                            </motion.div>
                        ))
                    ) : (
                        <p className="text-center text-white text-glow col-span-full">No resources found for the selected criteria.</p>
                    )}
                </div>
            )}
        </div>
    )
}

export default FilteredSubjects