// RSS Feed for better SEO and content discovery
export async function generateRSSFeed() {
  const site_url = 'https://rosvo.ilhame.id'
  
  const classPages = [
    'ips-1', 'ips-2', 'ips-3', 'ips-4', 'ips-5',
    'mipa-1', 'mipa-2', 'mipa-3', 'mipa-4', 'mipa-5', 'mipa-6', 'mipa-7'
  ]

  const feedXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Meriros Yearbook 24</title>
    <link>${site_url}</link>
    <description>SMAN 11 Semarang Yearbook Photos - Koleksi foto yearbook siswa SMAN 11 Semarang tahun 2024</description>
    <language>id-ID</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${site_url}/feed.xml" rel="self" type="application/rss+xml"/>
    <managingEditor>info@rosvo.hame.my.id (SMAN 11 Semarang)</managingEditor>
    <webMaster>info@rosvo.hame.my.id (SMAN 11 Semarang)</webMaster>
    <copyright>© 2024 SMAN 11 Semarang</copyright>
    <category>Education</category>
    <category>Photography</category>
    <category>Yearbook</category>
    
    ${classPages
      .map((className) => {
        const classTitle = className.toUpperCase().replace('-', ' ')
        return `
    <item>
      <title>Yearbook Kelas ${classTitle}</title>
      <link>${site_url}/kelas/${className}</link>
      <description>Koleksi foto yearbook siswa kelas ${classTitle} SMAN 11 Semarang 2024</description>
      <pubDate>${new Date().toUTCString()}</pubDate>
      <guid>${site_url}/kelas/${className}</guid>
      <category>Yearbook</category>
      <category>Kelas ${classTitle}</category>
    </item>`
      })
      .join('')}
  </channel>
</rss>`

  return feedXml
}

export default async function handler(req, res) {
  if (req.method === 'GET') {
    res.setHeader('Content-Type', 'text/xml; charset=utf-8')
    res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate')
    
    const xml = await generateRSSFeed()
    res.status(200).send(xml)
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}
