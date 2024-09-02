"use client";
import { useRouter } from 'next/navigation';
import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

const HeroSection = () => {
    const router = useRouter();

    return (
        <BackgroundBeamsWithCollision>
            <div className="h-full flex flex-col items-center pt-[10%] text-center relative z-20">
                <h1 className="text-5xl md:text-7xl font-extrabold text-black dark:text-white mb-8 leading-tight">
                    Discover, Learn, and Connect
                </h1>
                <p className="text-lg md:text-xl text-black dark:text-white mb-12 max-w-xl">
                    Access a wealth of resources, stay updated with the latest news, and build your network with us.
                </p>
                <div className="flex space-x-6">
                    <button
                        className="relative px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r  rounded-full shadow-md bg-indigo-600 hover:bg-indigo-500 transition-transform transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-pink-400"
                        onClick={() => router.push('/resources')}
                    >
                        Resources
                    </button>
                    <button
                        className="relative px-8 py-4 text-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-full shadow-md transition-transform transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-pink-400"
                        onClick={() => router.push('/news')}
                    >
                        News
                    </button>
                    <button
                        className="relative px-8 py-4 text-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-full shadow-md  transition-transform transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-pink-400"
                        onClick={() => router.push('/network')}
                    >
                        Network
                    </button>
                </div>
            </div>
        </BackgroundBeamsWithCollision>
    );
};

export default HeroSection;
