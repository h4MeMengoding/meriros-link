// Dynamic server sitemap for additional URLs
import { getServerSideSitemap } from 'next-sitemap'

export const getServerSideProps = async (ctx) => {
  // Define all your dynamic routes here
  const classPages = [
    'ips-1', 'ips-2', 'ips-3', 'ips-4', 'ips-5',
    'mipa-1', 'mipa-2', 'mipa-3', 'mipa-4', 'mipa-5', 'mipa-6', 'mipa-7'
  ]

  const fields = []

  // Add homepage with highest priority
  fields.push({
    loc: 'https://rosvo.ilhame.id',
    lastmod: new Date().toISOString(),
    changefreq: 'daily',
    priority: 1.0,
  })

  // Add class pages
  classPages.forEach(className => {
    fields.push({
      loc: `https://rosvo.ilhame.id/kelas/${className}`,
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: 0.9,
    })
  })

  // Add alternative home routes
  const homeAliases = ['/links', '/lnk', '/l']
  homeAliases.forEach(alias => {
    fields.push({
      loc: `https://rosvo.ilhame.id${alias}`,
      lastmod: new Date().toISOString(),
      changefreq: 'daily',
      priority: 0.8,
    })
  })

  return getServerSideSitemap(ctx, fields)
}

// Default export to prevent next.js errors
export default function ServerSitemap() {}
