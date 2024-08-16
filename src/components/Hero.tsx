"use client";
import { useRouter } from 'next/navigation';

const HeroSection = () => {
    const router = useRouter();

    return (
        <div className="h-full flex flex-col items-center justify-center  bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg shadow-lg text-center">
            <h1 className="text-5xl font-extrabold text-white mb-8 leading-tight">
                Discover, Learn, and Connect
            </h1>
            <p className="text-lg text-white mb-12 max-w-xl">
                Access a wealth of resources, stay updated with the latest news, and build your network with us.
            </p>
            <div className="flex space-x-6">
                <button
                    className="relative px-8 py-4 text-lg font-semibold text-indigo-600 bg-white rounded-full shadow-md hover:bg-gray-100 transition-transform transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-indigo-300"
                    onClick={() => router.push('/resources')}
                >
                    Resources
                    <span className="absolute -inset-px bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full blur-lg opacity-20"></span>
                </button>
                <button
                    className="relative px-8 py-4 text-lg font-semibold text-indigo-600 bg-white rounded-full shadow-md hover:bg-gray-100 transition-transform transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-indigo-300"
                    onClick={() => router.push('/news')}
                >
                    News
                    <span className="absolute -inset-px bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full blur-lg opacity-20"></span>
                </button>
                <button
                    className="relative px-8 py-4 text-lg font-semibold text-indigo-600 bg-white rounded-full shadow-md hover:bg-gray-100 transition-transform transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-indigo-300"
                    onClick={() => router.push('/network')}
                >
                    Network
                    <span className="absolute -inset-px bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full blur-lg opacity-20"></span>
                </button>
            </div>
        </div>
    );
};

export default HeroSection;
