/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://rosvo.ilhame.id',
    generateRobotsTxt: false, // Disable karena sudah ada robots.txt manual di public/
    generateIndexSitemap: true, // Enable untuk membuat sitemap-0.xml
    sitemapSize: 7000,
    changefreq: 'daily',
    priority: 0.7,
    autoLastmod: true,
    exclude: [
        '/api/*',
        '/server-sitemap.xml',
        '/404',
        '/bataltotal',
        '/redirect-to-yt',
        '/soon'
    ],
    // URL untuk server-side sitemap
    additionalSitemaps: [
        'https://rosvo.ilhame.id/server-sitemap.xml',
    ],
    additionalPaths: async (config) => {
        const result = []
        
        // Define all class pages with proper metadata
        const classPages = [
            'ips-1', 'ips-2', 'ips-3', 'ips-4', 'ips-5',
            'mipa-1', 'mipa-2', 'mipa-3', 'mipa-4', 'mipa-5', 'mipa-6', 'mipa-7'
        ]
        
        // Add class pages with high priority
        classPages.forEach(className => {
            result.push({
                loc: `/kelas/${className}`,
                changefreq: 'weekly',
                priority: 0.9,
                lastmod: new Date().toISOString(),
            })
        })
        
        return result
    },
    transform: async (config, path) => {
        // Custom priority and changefreq based on path
        const customConfig = {
            loc: path,
            changefreq: config.changefreq,
            priority: config.priority,
            lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
        }
        
        // Higher priority for main pages
        if (path === '/') {
            customConfig.priority = 1.0
            customConfig.changefreq = 'daily'
        }
        
        // High priority for class pages
        if (path.includes('/kelas/')) {
            customConfig.priority = 0.9
            customConfig.changefreq = 'weekly'
        }
        
        return customConfig
    },
}