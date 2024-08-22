"use client";

import { useState } from 'react';

interface FormData {
    year: string;
    branch: string;
    semester: string;
}

interface SelectFormProps {
    onSubmit: (formData: FormData) => void;
}

const SelectForm: React.FC<SelectFormProps> = ({ onSubmit }) => {
    const [year, setYear] = useState<string>('');
    const [branch, setBranch] = useState<string>('');
    const [semester, setSemester] = useState<string>('');

    const getSemesters = () => {
        switch (year) {
            case '1':
                return [1, 2];
            case '2':
                return [3, 4];
            case '3':
                return [5, 6];
            case '4':
                return [7, 8];
            default:
                return [];
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        console.log('Form submitted',year, branch, semester);
        e.preventDefault();
        onSubmit({ year, branch, semester });

    };

    const semesters = getSemesters();

    return (
        <div className="flex items-center justify-center w-full max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="flex flex-col bg-white p-8 shadow-xl w-full space-y-6 rounded-2xl">
                <h2 className="text-3xl font-bold mb-6 text-center text-indigo-600">Select Your Resources</h2>
                
                <div className="relative">
                    <select
                        className="appearance-none w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-50 transition-all duration-200 hover:bg-gray-100 text-gray-700"
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
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                        </svg>
                    </div>
                </div>

                <div className="relative">
                    <select
                        className="appearance-none w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-50 transition-all duration-200 hover:bg-gray-100 text-gray-700"
                        value={branch}
                        onChange={(e) => setBranch(e.target.value)}
                        required
                    >
                        <option value="">Select Branch</option>
                        <option value="CSE">CSE</option>
                        <option value="ECE && ETE && EEE">ECE/ETE/EEE</option>
                        <option value="CIVIL">CIVIL</option>
                        <option value="MECH">MECH</option>
                        <option value="CHEM">CHEM</option>

                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                        </svg>
                    </div>
                </div>

                <div className="relative">
                    <select
                        className="appearance-none w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-50 transition-all duration-200 hover:bg-gray-100 text-gray-700"
                        value={semester}
                        onChange={(e) => setSemester(e.target.value)}
                        required
                    >
                        <option value="">Select Semester</option>
                        {semesters.map((sem, index) => (
                            <option key={index} value={sem}>{sem}</option>
                        ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                        </svg>
                    </div>
                </div>

                <div className='flex justify-center items-center'>
                    <button
                        type="submit"
                        className="px-8 py-3 text-lg font-semibold text-white bg-indigo-600 rounded-full shadow-lg hover:bg-indigo-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-indigo-300"
                    >
                        Submit
                    </button>
                </div>
            </form>
            <style jsx>{`
                select {
                    -webkit-appearance: none;
                    -moz-appearance: none;
                    appearance: none;
                }
                select::-ms-expand {
                    display: none;
                }
                select option {
                    background-color: white;
                    color: #4a5568;
                    padding: 10px;
                }
                select option:hover,
                select option:focus,
                select option:active {
                    background-color: #EDF2F7;
                }
                @media screen and (-webkit-min-device-pixel-ratio:0) {
                    select {
                        padding-right: 30px;
                    }
                }
            `}</style>
        </div>
    );
};

export default SelectForm;
