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

const SubjectCard: React.FC<{ subject: Subject; onBack: () => void }> = ({ subject, onBack }) => {
    return (
        <div className="p-8 bg-gradient-to-br from-indigo-100 to-purple-100 shadow-xl rounded-2xl">
            <div className="flex items-center justify-between mb-8">
                <button
                    onClick={onBack}
                    className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:-translate-y-1"
                >
                    ← Back
                </button>
                <h1 className="text-4xl font-bold text-indigo-800 text-center flex-grow">{subject.subject}</h1>
                <div className="w-24"></div> {/* This empty div balances the layout */}
            </div>
            
            <div className="flex justify-center space-x-8 mb-8 text-lg">
                <div className="bg-white px-6 py-3 rounded-full shadow-md">
                    <span className="font-semibold text-indigo-600">Year:</span> {subject.year}
                </div>
                <div className="bg-white px-6 py-3 rounded-full shadow-md">
                    <span className="font-semibold text-indigo-600">Semester:</span> {subject.semester}
                </div>
                <div className="bg-white px-6 py-3 rounded-full shadow-md">
                    <span className="font-semibold text-indigo-600">Branch:</span> {subject.branch}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <ResourceSection title="Notes" items={subject.resources.notes} />
                <ResourceSection title="Question Bank" items={subject.resources.question_bank} />
                <div>
                    <h3 className="text-2xl font-semibold mb-4 text-indigo-800">Previous Year Questions (PYQs)</h3>
                    <ResourceSection title="Internals" items={subject.resources.pyqs.internals} />
                    <div className="mt-4">
                        <h4 className="text-xl font-semibold mb-2 text-indigo-700">Final Exam</h4>
                        <a 
                            href={subject.resources.pyqs.final_exam} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-indigo-600 hover:text-indigo-800 hover:underline transition duration-300"
                        >
                            Final Exam PYQ
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ResourceSection: React.FC<{ title: string; items: Record<string, string> }> = ({ title, items }) => (
    <div>
        <h3 className="text-2xl font-semibold mb-4 text-indigo-800">{title}</h3>
        <ul className="space-y-2">
            {Object.entries(items).map(([module, link]) => (
                <li key={module}>
                    <a 
                        href={link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-indigo-600 hover:text-indigo-800 hover:underline transition duration-300"
                    >
                        {module}
                    </a>
                </li>
            ))}
        </ul>
    </div>
);

export default SubjectCard;