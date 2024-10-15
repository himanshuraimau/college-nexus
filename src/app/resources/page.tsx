"use client";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import SelectForm from '../../components/SelectForm';
import { fetchSubjects } from '../../lib/fetchSubjects';

interface Subject {
    year: number;
    semester: number;
    subject: string;
    branch: string;
    resources: {
        notes: Record<string, string>;
        question_bank: Record<string, string>;
        pyqs: {
            internals: Record<string, string>;
            final_exam: string;
        };
    };
}

const ResourcePage: React.FC = () => {
    const [subjects, setSubjects] = useState<Subject[]>([]);
    const router = useRouter();

    useEffect(() => {
        const loadSubjects = async () => {
            const subjects = await fetchSubjects();
            setSubjects(subjects);
        };

        loadSubjects();
    }, []);

    const handleFormSubmit = (formData: { year: string; branch: string; semester: string }) => {
        router.push(`/resources/${formData.year}/${formData.semester}/${formData.branch}`);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-amber-100 to-orange-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-4xl font-bold text-center mb-8 text-amber-900">Find Your Resources</h1>
                <div className="rounded-lg shadow-md p-6">
                    <SelectForm onSubmit={handleFormSubmit} />
                </div>
            </div>
        </div>
    );
};

export default ResourcePage;