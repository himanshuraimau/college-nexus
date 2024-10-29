"use client";

import { useState } from 'react';
import { Leaf, ChevronDown } from 'lucide-react';

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
            case '1': return [1, 2];
            case '2': return [3, 4];
            case '3': return [5, 6];
            case '4': return [7, 8];
            default: return [];
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({ year, branch, semester });
    };

    const semesters = getSemesters();

    return (
        <div className="flex items-center justify-center w-full max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="flex flex-col p-8 shadow-xl w-full space-y-6 rounded-2xl bg-white/80 backdrop-blur-sm">
                <h2 className="text-3xl font-bold mb-6 text-center text-green-700 flex items-center justify-center">
                    <Leaf className="w-8 h-8 mr-2 text-green-600" />
                    Select Your Resources
                </h2>
                
                {['year', 'branch', 'semester'].map((field) => (
                    <div key={field} className="relative">
                        <select
                            className="appearance-none w-full p-4 border border-green-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 bg-green-50 transition-all duration-200 hover:bg-green-100 text-green-900"
                            value={field === 'year' ? year : field === 'branch' ? branch : semester}
                            onChange={(e) => {
                                if (field === 'year') setYear(e.target.value);
                                else if (field === 'branch') setBranch(e.target.value);
                                else setSemester(e.target.value);
                            }}
                            required
                        >
                            <option value="">Select {field.charAt(0).toUpperCase() + field.slice(1)}</option>
                            {field === 'year' && ['1st Year', '2nd Year', '3rd Year', '4th Year'].map((yr, index) => (
                                <option key={index} value={index + 1}>{yr}</option>
                            ))}
                            {field === 'branch' && ['CSE', 'ECE && ETE && EEE', 'CIVIL', 'MECH', 'CHEM'].map((br) => (
                                <option key={br} value={br}>{br}</option>
                            ))}
                            {field === 'semester' && semesters.map((sem) => (
                                <option key={sem} value={sem}>{sem}</option>
                            ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-green-700">
                            <ChevronDown className="h-4 w-4" />
                        </div>
                    </div>
                ))}

                <div className='flex justify-center items-center'>
                    <button
                        type="submit"
                        className="px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-green-500 to-blue-500 rounded-full shadow-lg hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-green-300"
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
                    color: #065f46;
                    padding: 10px;
                }
                select option:hover,
                select option:focus,
                select option:active {
                    background-color: #d1fae5;
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