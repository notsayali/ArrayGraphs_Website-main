/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
       unoptimized: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true
    },
    exportPathMap: async function (
        defaultPathMap,
        { dev, dir, outDir, distDir, buildId }
    ) {
        return {
            '/': { page: '/' },
            '/about': { page: '/about' },
            '/visionmission': { page: '/visionmission' },
            '/brand': { page: '/brand' },
            '/blog': { page: '/blog' },
            '/contact': { page: '/contact' },
        }
    },
}

module.exports = nextConfig