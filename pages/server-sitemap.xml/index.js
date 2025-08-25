// pages/server-sitemap.xml/index.js
import { getServerSideSitemap } from 'next-sitemap'

export const getServerSideProps = async (ctx) => {
    // Method to source urls from cms
    const urls = [
        'https://rosvo.ilhame.id',
        'https://rosvo.ilhame.id/kelas/ips-1',
        'https://rosvo.ilhame.id/kelas/ips-2',
        'https://rosvo.ilhame.id/kelas/ips-3',
        'https://rosvo.ilhame.id/kelas/ips-4',
        'https://rosvo.ilhame.id/kelas/ips-5',
        'https://rosvo.ilhame.id/kelas/mipa-1',
        'https://rosvo.ilhame.id/kelas/mipa-2',
        'https://rosvo.ilhame.id/kelas/mipa-3',
        'https://rosvo.ilhame.id/kelas/mipa-4',
        'https://rosvo.ilhame.id/kelas/mipa-5',
        'https://rosvo.ilhame.id/kelas/mipa-6',
        'https://rosvo.ilhame.id/kelas/mipa-7'
    ]

    const fields = urls.map(url => ({
        loc: url,
        lastmod: new Date().toISOString(),
        changefreq: url === 'https://rosvo.ilhame.id' ? 'daily' : 'weekly',
        priority: url === 'https://rosvo.ilhame.id' ? 1.0 : 0.9
    }))

    return getServerSideSitemap(ctx, fields)
}

// Default export to prevent next.js errors
export default function Sitemap() {}
