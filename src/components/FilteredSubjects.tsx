'use client';

import React, { useState } from 'react';
import SubjectCard from './SubjectCard';
import { Card, CardDescription, CardTitle } from './ui/card-hover-effect';


interface Resource {
    notes: Record<string, string>;
    question_bank: Record<string, string>;
    pyqs: {
        internals: Record<string, string>;
        final_exam: string;
    };
}

interface Subject {
    year: number;
    semester: number;
    subject: string;
    branch: string;
    resources: Resource;
}

const FilteredSubjects: React.FC<{ subjects: Subject[] }> = ({ subjects }) => {
    const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const handleSubjectClick = (subject: Subject) => {
        setSelectedSubject(subject);
    };

    return (
        <div>
            {selectedSubject ? (
                <SubjectCard subject={selectedSubject} onBack={() => setSelectedSubject(null)} />
            ) : (
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {subjects.length > 0 ? (
                        subjects.map((subject, idx) => (
                            <div
                                key={idx}
                                className="relative group block p-2 h-full w-full cursor-pointer"
                                onClick={() => handleSubjectClick(subject)}
                                onMouseEnter={() => setHoveredIndex(idx)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                {hoveredIndex === idx && (
                                    <div className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl transition-opacity duration-150" />
                                )}
                                <Card>
                                    <CardTitle>{subject.subject}</CardTitle>
                                    <CardDescription>
                                        Year: {subject.year}<br />
                                        Branch: {subject.branch}<br />
                                        Semester: {subject.semester}
                                    </CardDescription>
                                </Card>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-700 col-span-full">No resources found for the selected criteria.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default FilteredSubjects;
