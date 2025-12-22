/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: true,
    },
    // Optimize images
    images: {
        remotePatterns: [
            { hostname: '**' }
        ],
    },
};

export default nextConfig;
