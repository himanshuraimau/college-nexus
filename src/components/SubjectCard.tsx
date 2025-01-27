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
        <Card className="p-4 sm:p-8 bg-[var(--nav-bg)] backdrop-blur-md border border-[var(--nav-border)] shadow-xl rounded-3xl overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--nav-hover)]/5 to-transparent opacity-50"></div>
            <div className="relative z-10">
                <div className="flex flex-col sm:flex-row items-center justify-between mb-6 sm:mb-12">
                    <button
                        onClick={onBack}
                        className="mb-4 sm:mb-0 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-green-400 flex items-center text-sm sm:text-base"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back
                    </button>
                    <h1 className="text-3xl sm:text-5xl font-extrabold text-white text-glow text-center flex-grow">
                        {subject.subject}
                    </h1>
                    <div className="hidden sm:block w-32"></div>
                </div>
                
                <div className="flex flex-wrap justify-center gap-4 mb-6 sm:mb-12">
                    <InfoBadge icon={<Calendar className="w-4 h-4 sm:w-5 sm:h-5" />} label="Year" value={subject.year} />
                    <InfoBadge icon={<Book className="w-4 h-4 sm:w-5 sm:h-5" />} label="Semester" value={subject.semester} />
                    <InfoBadge icon={<GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />} label="Branch" value={subject.branch} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-12">
                    <ResourceSection title="Notes" items={subject.resources.notes} icon={<FileText className="w-5 h-5 sm:w-6 sm:h-6" />} />
                    <ResourceSection title="Question Bank" items={subject.resources.question_bank} icon={<HelpCircle className="w-5 h-5 sm:w-6 sm:h-6" />} />
                    <div>
                        <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-white flex items-center">
                            <FileQuestion className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
                            Previous Year Questions (PYQs)
                        </h3>
                        <ResourceSection title="Internals" items={subject.resources.pyqs.internals} />
                        <div className="mt-4 sm:mt-6">
                            <h4 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-white flex items-center">
                                <FileQuestion className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                                Final Exam
                            </h4>
                            <a 
                                href={subject.resources.pyqs.final_exam} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-green-600 hover:text-green-800 hover:underline transition duration-300 flex items-center text-sm sm:text-base"
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
    <Badge className="px-3 sm:px-6 py-2 sm:py-3 bg-[var(--nav-hover)]/10 text-white text-glow flex items-center space-x-1 sm:space-x-2 text-sm sm:text-lg hover:bg-[var(--nav-hover)]/20">
        {icon}
        <span>{label}:</span>
        <span>{value}</span>
    </Badge>
)

const ResourceSection: React.FC<{ title: string; items: Record<string, string>; icon?: React.ReactNode }> = ({ title, items, icon }) => (
    <div className="bg-[var(--nav-bg)]/50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-md border border-[var(--nav-border)]">
        <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-white text-glow flex items-center">
            {icon && <span className="mr-2 sm:mr-3">{icon}</span>}
            {title}
        </h3>
        <ul className="space-y-2 sm:space-y-3">
            {Object.entries(items).map(([module, link]) => (
                <li key={module}>
                    <a 
                        href={link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-green-600 hover:text-green-800 hover:underline transition duration-300 flex items-center text-sm sm:text-base"
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