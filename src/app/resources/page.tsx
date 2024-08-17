"use client";

import { useEffect, useState } from 'react';
import SelectForm from '../../components/SelectForm';
import SubjectCard from '../../components/SubjectCard';

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

const ResourcePage: React.FC = () => {
    const [subjects, setSubjects] = useState<Subject[]>([]);
    const [selectedData, setSelectedData] = useState<Subject[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchSubjects = async () => {
            try {
                const response = await fetch('/sub.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setSubjects(data.subjects);
                console.log('Fetched subjects:', data.subjects);
            } catch (error) {
                console.error('Error fetching subjects:', error);
                setError('Failed to fetch subjects');
            } finally {
                setLoading(false);
            }
        };

        fetchSubjects();
    }, []);

    const handleFormSubmit = (formData: { year: string; branch: string; semester: string }) => {
        const year = parseInt(formData.year, 10);
        const filteredSubjects = subjects.filter((subject) =>
            subject.year === year &&
            subject.branch === formData.branch &&
            subject.semester === parseInt(formData.semester, 10)
        );

        console.log('Filtered subjects:', filteredSubjects);
        setSelectedData(filteredSubjects);
    };

    if (loading) return <p className="text-center text-gray-700">Loading...</p>;
    if (error) return <p className="text-center text-gray-700">{error}</p>;

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-4xl font-bold text-center mb-8">Find Your Resources</h1>
                <SelectForm onSubmit={handleFormSubmit} />
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {selectedData.length > 0 ? (
                        selectedData.map((subject, idx) => (
                            <SubjectCard key={idx} subject={subject} />
                        ))
                    ) : (
                        <p className="text-center text-gray-700 col-span-full">Please select your year, branch, and semester to view resources.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ResourcePage;
