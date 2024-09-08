"use client";
import { useRouter } from 'next/navigation';
import React from "react";

const HeroSection = () => {
    const router = useRouter();

    return (
        <div className='h-screen bg-gradient-to-br from-blue-300 via-blue-600 to-indigo-600'>
            <div className="flex flex-col items-center pt-[10%] text-center relative z-20">
                <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 leading-tight">
                    Discover, Learn, and Connect
                </h1>
                <p className="text-lg md:text-xl text-white mb-12 max-w-xl">
                    Access a wealth of resources, stay updated with the latest news, and build your network with us.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                    <button
                        className="px-8 py-4 text-lg font-semibold text-blue-600 bg-white rounded-full shadow-md hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
                        onClick={() => router.push('/resources')}
                    >
                        Resources
                    </button>
                    <button
                        className="px-8 py-4 text-lg font-semibold text-blue-600 bg-white rounded-full shadow-md hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
                        onClick={() => router.push('/news')}
                    >
                        News
                    </button>
                    <button
                        className="px-8 py-4 text-lg font-semibold text-blue-600 bg-white rounded-full shadow-md hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
                        onClick={() => router.push('/network')}
                    >
                        Network
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;