/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
        // ssr and displayName are configured by default
        styledComponents: true,
    },
    optimizeFonts: false,
    
    // Enhanced image optimization for better SEO
    images: {
        domains: ['i.imgur.com', 'rosvo.hame.my.id'],
        formats: ['image/webp', 'image/avif'],
    },
    
    // Compress and optimize output
    compress: true,
    
    // SEO-friendly headers
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'DENY',
                    },
                    {
                        key: 'X-XSS-Protection',
                        value: '1; mode=block',
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'strict-origin-when-cross-origin',
                    },
                ],
            },
            {
                source: '/sitemap.xml',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=86400, s-maxage=86400',
                    },
                ],
            },
            {
                source: '/robots.txt',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=86400, s-maxage=86400',
                    },
                ],
            },
        ]
    },
    
    // SEO-friendly redirects and rewrites
    async rewrites() {
        return [
            {
                source: '/(links|lnk|l)',
                destination: '/',
            },
            {
                source: '/feed.xml',
                destination: '/api/feed.xml',
            },
        ]
    },
    
    // Redirects for better SEO
    async redirects() {
        return [
            {
                source: '/home',
                destination: '/',
                permanent: true,
            },
            {
                source: '/index',
                destination: '/',
                permanent: true,
            },
        ]
    },
    
    // Generate static files at build time for better SEO
    trailingSlash: false,
    
    // Enable experimental features for better performance
    experimental: {
        // optimizeCss: true, // Disable karena menyebabkan error critters
        scrollRestoration: true,
    },
}

module.exports = nextConfig
