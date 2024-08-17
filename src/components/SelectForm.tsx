"use client";
import { useState } from 'react';

interface FormData {
    year: string;
    branch: string;
    semester: string;
}

interface SelectFormProps {
    onSubmit: (formData: FormData, data: any) => void;
}

const SelectForm: React.FC<SelectFormProps> = ({ onSubmit }) => {
    const [year, setYear] = useState<string>('');
    const [branch, setBranch] = useState<string>('');
    const [semester, setSemester] = useState<string>('');

    const getSemesters = () => {
        switch (year) {
            case '1':
                return ['1st Semester', '2nd Semester'];
            case '2':
                return ['3rd Semester', '4th Semester'];
            case '3':
                return ['5th Semester', '6th Semester'];
            case '4':
                return ['7th Semester', '8th Semester'];
            default:
                return [];
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const res = await fetch('/sub.json');
        const data = await res.json();
        onSubmit({ year, branch, semester }, data);
    };

    const semesters = getSemesters();

    return (
        <div className="flex items-center justify-center h-full pt-[5%]">
            <form onSubmit={handleSubmit} className="flex flex-col bg-white p-8 shadow-lg rounded-lg max-w-md w-full space-y-4">
                <h2 className="text-2xl font-semibold mb-6 text-center">Select Your Resources</h2>
                
                <select
                    className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    required
                >
                    <option value="">Select Year</option>
                    <option value="1">1st Year</option>
                    <option value="2">2nd Year</option>
                    <option value="3">3rd Year</option>
                    <option value="4">4th Year</option>
                </select>

                <select
                    className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    value={branch}
                    onChange={(e) => setBranch(e.target.value)}
                    required
                >
                    <option value="">Select Branch</option>
                    <option value="CSE">CSE</option>
                    <option value="ECE">ECE</option>
                    <option value="Civil">Civil</option>
                    <option value="Mechanical">Mechanical</option>
                </select>

                <select
                    className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    value={semester}
                    onChange={(e) => setSemester(e.target.value)}
                    required
                >
                    <option value="">Select Semester</option>
                    {semesters.map((sem, index) => (
                        <option key={index} value={sem}>{sem}</option>
                    ))}
                </select>

                <div className='flex flex-col justify-center items-center'>
                    <button
                        type="submit"
                        className="px-8 py-2 text-lg font-semibold text-white bg-indigo-500 rounded-full shadow-md hover:bg-indigo-400 transition-transform transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-indigo-300"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SelectForm;
