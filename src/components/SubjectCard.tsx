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
            {/* Displaying some example resource links */}
            <div>
                <h3 className="font-semibold">Resources:</h3>
                <p className="text-gray-600">Notes:</p>
                {Object.entries(subject.resources.notes).map(([module, link]) => (
                    <p key={module} className="text-blue-500 hover:underline">
                        <a href={link} target="_blank" rel="noopener noreferrer">{module}</a>
                    </p>
                ))}
                {/* You can add similar sections for question_bank and pyqs */}
            </div>
        </div>
    );
};

export default SubjectCard;
