"use client";

import React from 'react';

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

const SubjectCard: React.FC<{ subject: Subject }> = ({ subject }) => {
    return (
        <div className="p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4">{subject.subject}</h2>
            <p className="text-gray-700 mb-2">Year: {subject.year}</p>
            <p className="text-gray-700 mb-2">Branch: {subject.branch}</p>
            <p className="text-gray-700 mb-2">Semester: {subject.semester}</p>

            <div className="mt-4">
                <h3 className="font-semibold text-lg mb-2">Resources:</h3>
                
                {/* Displaying notes */}
                <div className="mb-4">
                    <h4 className="font-semibold">Notes:</h4>
                    {Object.entries(subject.resources.notes).map(([module, link]) => (
                        <p key={module} className="text-blue-500 hover:underline">
                            <a href={link} target="_blank" rel="noopener noreferrer">{module}</a>
                        </p>
                    ))}
                </div>

                {/* Displaying question bank */}
                <div className="mb-4">
                    <h4 className="font-semibold">Question Bank:</h4>
                    {Object.entries(subject.resources.question_bank).map(([module, link]) => (
                        <p key={module} className="text-blue-500 hover:underline">
                            <a href={link} target="_blank" rel="noopener noreferrer">{module}</a>
                        </p>
                    ))}
                </div>

                {/* Displaying PYQs */}
                <div className="mb-4">
                    <h4 className="font-semibold">Previous Year Questions (PYQs):</h4>
                    <div>
                        <h5 className="font-semibold">Internals:</h5>
                        {Object.entries(subject.resources.pyqs.internals).map(([internal, link]) => (
                            <p key={internal} className="text-blue-500 hover:underline">
                                <a href={link} target="_blank" rel="noopener noreferrer">{internal}</a>
                            </p>
                        ))}
                    </div>
                    <div>
                        <h5 className="font-semibold">Final Exam:</h5>
                        <p className="text-blue-500 hover:underline">
                            <a href={subject.resources.pyqs.final_exam} target="_blank" rel="noopener noreferrer">Final Exam PYQ</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubjectCard;