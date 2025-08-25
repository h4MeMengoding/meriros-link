// Image sitemap for better image SEO
import { getServerSideSitemap } from 'next-sitemap'

export const getServerSideProps = async (ctx) => {
  const baseUrl = 'https://rosvo.ilhame.id'
  
  // Define all your images with proper metadata
  const imageFields = [
    {
      loc: `${baseUrl}/image-sitemap.xml`,
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: 0.8,
      images: [
        {
          loc: `${baseUrl}/logo.png`,
          caption: 'Logo SMAN 11 Semarang - Meriros Yearbook',
          title: 'SMAN 11 Semarang Logo',
          geoLocation: 'Semarang, Indonesia'
        },
        {
          loc: `${baseUrl}/banner.png`,
          caption: 'Banner Meriros Yearbook 2024 SMAN 11 Semarang',
          title: 'Meriros Yearbook Banner',
          geoLocation: 'Semarang, Indonesia'
        },
        {
          loc: `${baseUrl}/meriros.png`,
          caption: 'Meriros Yearbook 2024 - Koleksi Foto Siswa SMAN 11 Semarang',
          title: 'Meriros Yearbook Collection',
          geoLocation: 'Semarang, Indonesia'
        },
        {
          loc: 'https://i.imgur.com/Ahwfq56.jpeg',
          caption: 'Cover Yearbook SMAN 11 Semarang 2024',
          title: 'Yearbook Cover 2024',
          geoLocation: 'Semarang, Indonesia'
        }
      ]
    }
  ]

  // Add class-specific images if available
  const classPages = [
    'ips-1', 'ips-2', 'ips-3', 'ips-4', 'ips-5',
    'mipa-1', 'mipa-2', 'mipa-3', 'mipa-4', 'mipa-5', 'mipa-6', 'mipa-7'
  ]

  classPages.forEach(className => {
    const classTitle = className.toUpperCase().replace('-', ' ')
    imageFields.push({
      loc: `${baseUrl}/kelas/${className}`,
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: 0.9,
      images: [
        {
          loc: `${baseUrl}/logo.png`,
          caption: `Logo untuk halaman kelas ${classTitle} - SMAN 11 Semarang`,
          title: `${classTitle} - SMAN 11 Semarang`,
          geoLocation: 'Semarang, Indonesia'
        }
      ]
    })
  })

  return getServerSideSitemap(ctx, imageFields)
}

// Default export to prevent next.js errors
export default function ImageSitemap() {}
