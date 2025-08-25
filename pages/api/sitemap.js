// pages/api/sitemap.js
export default function handler(req, res) {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/xml')
    
    // Generate dynamic sitemap
    const staticPaths = [
        '',
        '/kelas/ips-1',
        '/kelas/ips-2', 
        '/kelas/ips-3',
        '/kelas/ips-4',
        '/kelas/ips-5',
        '/kelas/mipa-1',
        '/kelas/mipa-2',
        '/kelas/mipa-3',
        '/kelas/mipa-4',
        '/kelas/mipa-5',
        '/kelas/mipa-6',
        '/kelas/mipa-7'
    ]
    
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
            xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
            xmlns:xhtml="http://www.w3.org/1999/xhtml"
            xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
            xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
        ${staticPaths
            .map((url) => {
                const priority = url === '' ? '1.0' : url.includes('/kelas/') ? '0.9' : '0.8'
                const changefreq = url === '' ? 'daily' : 'weekly'
                
                return `
            <url>
                <loc>https://rosvo.ilhame.id${url}</loc>
                <lastmod>${new Date().toISOString()}</lastmod>
                <changefreq>${changefreq}</changefreq>
                <priority>${priority}</priority>
            </url>`
            })
            .join('')}
    </urlset>`
    
    res.end(sitemap)
}
