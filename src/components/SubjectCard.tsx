"use client";
import React from 'react';

const SubjectCard = ({ subject }: { subject: any }) => {
    return (
        <div className="p-6 bg-white shadow-md rounded-lg">
            <img src={subject.logo} alt={subject.name} className="h-16 w-16 mb-4" />
            <h2 className="text-2xl font-bold mb-4">{subject.name}</h2>
            <p className="text-gray-700">{subject.description}</p>
        </div>
    );
};

export default SubjectCard;
