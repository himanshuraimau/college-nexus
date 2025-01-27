"use client"

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import SelectForm from '../../components/SelectForm'
import { fetchSubjects } from '../../lib/fetchSubjects'
import { GridBackgroundDemo } from '@/components/Hero'

interface Subject {
    year: number
    semester: number
    subject: string
    branch: string
    resources: {
        notes: Record<string, string>
        question_bank: Record<string, string>
        pyqs: {
            internals: Record<string, string>
            final_exam: string
        }
    }
}

const ResourcePage: React.FC = () => {
    const [subjects, setSubjects] = useState<Subject[]>([])
    const router = useRouter()

    useEffect(() => {
        const loadSubjects = async () => {
            const subjects = await fetchSubjects()
            setSubjects(subjects)
        }

        loadSubjects()
    }, [])

    const handleFormSubmit = (formData: { year: string; branch: string; semester: string }) => {
        router.push(`/resources/${formData.year}/${formData.semester}/${formData.branch}`)
    }

    return (
        <div className="min-h-screen pt-8 relative overflow-hidden ">
            
            <div className="absolute inset-0 bg-[url('/leaves.svg')] opacity-5"></div>
            <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
            <div className="absolute top-40 right-10 w-64 h-64 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-32 left-20 w-64 h-64 bg-blue-300/20 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl font-black text-center mb-16"
                >
                    <span className="relative">
                        <span className="absolute -inset-1 bg-[var(--nav-hover)]/10 blur-xl rounded-lg"></span>
                        <span className="relative text-white text-glow">
                            Find Your Resources
                        </span>
                    </span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <SelectForm onSubmit={handleFormSubmit} />
                </motion.div>
            </div>
        </div>
    )
}

export default ResourcePage