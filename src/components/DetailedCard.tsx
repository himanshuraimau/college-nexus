"use client";
import React from 'react';

interface ResourceLinks {
    notes: Record<string, string>;
    question_bank: Record<string, string>;
    pyqs: {
        internals: Record<string, string>;
        final_exam: string;
    };
}

const DetailedCard = ({ subject, resources }: { subject: string; resources: ResourceLinks }) => {
    return (
        <div className="p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4">{subject}</h2>
            <div className="space-y-4">
                <div>
                    <h3 className="text-xl font-semibold">Notes</h3>
                    {Object.keys(resources.notes).map((module, idx) => (
                        <a key={idx} href={resources.notes[module]} target="_blank" className="block text-primary hover:underline">
                            {module} Notes
                        </a>
                    ))}
                </div>
                <div>
                    <h3 className="text-xl font-semibold">Question Bank</h3>
                    {Object.keys(resources.question_bank).map((module, idx) => (
                        <a key={idx} href={resources.question_bank[module]} target="_blank" className="block text-primary hover:underline">
                            {module} Question Bank
                        </a>
                    ))}
                </div>
                <div>
                    <h3 className="text-xl font-semibold">Previous Year Questions (PYQs)</h3>
                    {Object.keys(resources.pyqs.internals).map((internal, idx) => (
                        <a key={idx} href={resources.pyqs.internals[internal]} target="_blank" className="block text-primary hover:underline">
                            {internal} Internal PYQ
                        </a>
                    ))}
                    <a href={resources.pyqs.final_exam} target="_blank" className="block text-primary hover:underline">
                        Final Exam PYQ
                    </a>
                </div>
            </div>
        </div>
    );
};

export default DetailedCard;
