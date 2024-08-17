/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript:{
        ignoreBuildErrors: true
    },
    eslint:{
        ignoreDuringBuilds: true,
        ignoreBuildErrors: true
    }
};

export default nextConfig;
