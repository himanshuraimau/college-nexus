"use client"

import React from 'react'
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Book, GraduationCap, Calendar, FileText, HelpCircle, FileQuestion, ArrowLeft } from 'lucide-react'

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

const SubjectCard: React.FC<{ subject: Subject; onBack: () => void }> = ({ subject, onBack }) => {
    return (
        <Card className="p-8 bg-white/80 backdrop-blur-sm shadow-xl rounded-3xl overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-b from-green-50/50 to-blue-50/50 opacity-50"></div>
            <div className="relative z-10">
                <div className="flex items-center justify-between mb-12">
                    <button
                        onClick={onBack}
                        className="px-6 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-green-400 flex items-center"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back
                    </button>
                    <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-teal-500 to-blue-600 text-center flex-grow">
                        {subject.subject}
                    </h1>
                    <div className="w-32"></div>
                </div>
                
                <div className="flex justify-center space-x-8 mb-12">
                    <InfoBadge icon={<Calendar className="w-5 h-5" />} label="Year" value={subject.year} />
                    <InfoBadge icon={<Book className="w-5 h-5" />} label="Semester" value={subject.semester} />
                    <InfoBadge icon={<GraduationCap className="w-5 h-5" />} label="Branch" value={subject.branch} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <ResourceSection title="Notes" items={subject.resources.notes} icon={<FileText className="w-6 h-6" />} />
                    <ResourceSection title="Question Bank" items={subject.resources.question_bank} icon={<HelpCircle className="w-6 h-6" />} />
                    <div>
                        <h3 className="text-2xl font-semibold mb-6 text-green-800 flex items-center">
                            <FileQuestion className="w-6 h-6 mr-3" />
                            Previous Year Questions (PYQs)
                        </h3>
                        <ResourceSection title="Internals" items={subject.resources.pyqs.internals} />
                        <div className="mt-6">
                            <h4 className="text-xl font-semibold mb-3 text-green-700 flex items-center">
                                <FileQuestion className="w-5 h-5 mr-2" />
                                Final Exam
                            </h4>
                            <a 
                                href={subject.resources.pyqs.final_exam} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-green-600 hover:text-green-800 hover:underline transition duration-300 flex items-center"
                            >
                                <FileText className="w-4 h-4 mr-2" />
                                Final Exam PYQ
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    )
}

const InfoBadge: React.FC<{ icon: React.ReactNode; label: string; value: number | string }> = ({ icon, label, value }) => (
    <Badge className="px-6 py-3 bg-transparent text-green-800 flex items-center space-x-2 text-lg hover:bg-white">
        {icon}
        <span className="">{label}:</span>
        <span>{value}</span>
    </Badge>
)

const ResourceSection: React.FC<{ title: string; items: Record<string, string>; icon?: React.ReactNode }> = ({ title, items, icon }) => (
    <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-md">
        <h3 className="text-2xl font-semibold mb-6 text-green-800 flex items-center">
            {icon && <span className="mr-3">{icon}</span>}
            {title}
        </h3>
        <ul className="space-y-3">
            {Object.entries(items).map(([module, link]) => (
                <li key={module}>
                    <a 
                        href={link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-green-600 hover:text-green-800 hover:underline transition duration-300 flex items-center"
                    >
                        <FileText className="w-4 h-4 mr-2" />
                        {module}
                    </a>
                </li>
            ))}
        </ul>
    </div>
)

export default SubjectCard