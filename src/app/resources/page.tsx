"use client";
import SelectForm from '@/components/SelectForm';
import SubjectCard from '@/components/SubjectCard';
import { useState } from 'react';

const ResourcePage = () => {
    const [selectedData, setSelectedData] = useState<any[]>([]);

    const handleFormSubmit = (formData: { year: string; branch: string; semester: string }, data: any) => {
        const filteredData = data.filter((item: any) => 
            item.year === formData.year &&
            item.branch === formData.branch &&
            item.semester === formData.semester
        );
        setSelectedData(filteredData);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-background">
            <SelectForm onSubmit={handleFormSubmit} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
                {selectedData.map((subject, index) => (
                    <SubjectCard key={index} subject={subject} />
                ))}
            </div>
        </div>
    );
};

export default ResourcePage;
