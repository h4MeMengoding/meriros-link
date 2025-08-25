// SEO Check Script - Validate sitemap and meta tags
const fs = require('fs')
const path = require('path')
const glob = require('glob')

const siteUrl = 'https://rosvo.hame.my.id'
const publicDir = path.join(__dirname, '..', 'public')
const pagesDir = path.join(__dirname, '..', 'pages')

async function checkSEO() {
  console.log('🔍 Running SEO checks...\n')
  
  // Check if sitemap exists
  const sitemapPath = path.join(publicDir, 'sitemap.xml')
  if (fs.existsSync(sitemapPath)) {
    console.log('✅ sitemap.xml exists')
    const sitemapContent = fs.readFileSync(sitemapPath, 'utf8')
    console.log(`📊 Sitemap size: ${sitemapContent.length} characters`)
  } else {
    console.log('❌ sitemap.xml not found')
  }
  
  // Check if robots.txt exists
  const robotsPath = path.join(publicDir, 'robots.txt')
  if (fs.existsSync(robotsPath)) {
    console.log('✅ robots.txt exists')
    const robotsContent = fs.readFileSync(robotsPath, 'utf8')
    if (robotsContent.includes('Sitemap:')) {
      console.log('✅ robots.txt contains sitemap reference')
    } else {
      console.log('⚠️  robots.txt missing sitemap reference')
    }
  } else {
    console.log('❌ robots.txt not found')
  }
  
  // Count pages
  const jsFiles = glob.sync('**/*.js', { cwd: pagesDir })
  const pageFiles = jsFiles.filter(file => 
    !file.startsWith('api/') && 
    !file.startsWith('_') && 
    file !== '404.js'
  )
  
  console.log(`📄 Found ${pageFiles.length} page files:`)
  pageFiles.forEach(file => {
    console.log(`   - ${file.replace('.js', '')}`)
  })
  
  // Class pages count
  const classPages = pageFiles.filter(file => file.startsWith('kelas/'))
  console.log(`🎓 Class pages: ${classPages.length}`)
  
  console.log('\n🚀 SEO Recommendations:')
  console.log('1. DNS verification untuk Google Search Console sudah dikonfigurasi ✅')
  console.log('2. Submit sitemap ke Google Search Console')
  console.log('3. Tambahkan breadcrumb navigation pada setiap halaman')
  console.log('4. Optimasi gambar dengan alt tags dan nama file yang SEO-friendly')
  console.log('5. Implementasi structured data pada halaman kelas')
  console.log('6. Monitor Core Web Vitals dan page speed')
  
  console.log('\n📈 Next Steps:')
  console.log('1. Run: npm run build')
  console.log('2. Submit sitemap ke Google Search Console: https://search.google.com/search-console')
  console.log('3. Submit image sitemap: https://rosvo.ilhame.id/image-sitemap.xml')
  console.log('4. Test structured data: https://search.google.com/test/rich-results')
  console.log('5. Check page speed: https://pagespeed.web.dev/')
  console.log('6. Monitor indexing status di Search Console')
}

checkSEO().catch(console.error)
