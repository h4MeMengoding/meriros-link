// Script untuk mengintegrasikan komponen SEO ke halaman existing
const fs = require('fs')
const path = require('path')

const pagesDir = path.join(__dirname, '..', 'pages', 'kelas')

async function integrateSEO() {
  console.log('🔧 Mengintegrasikan komponen SEO ke halaman kelas...\n')
  
  try {
    const files = fs.readdirSync(pagesDir)
    const jsFiles = files.filter(file => file.endsWith('.js'))
    
    console.log(`📄 Ditemukan ${jsFiles.length} file halaman kelas:`)
    
    jsFiles.forEach(file => {
      const filePath = path.join(pagesDir, file)
      const className = file.replace('.js', '')
      console.log(`   ✅ ${className}`)
      
      // Baca content file
      const content = fs.readFileSync(filePath, 'utf8')
      
      // Check apakah sudah ada import ClassPageSEO
      if (!content.includes('ClassPageSEO')) {
        console.log(`   📝 File ${file} perlu ditambahkan ClassPageSEO import`)
      }
      
      // Check apakah sudah ada import Breadcrumb
      if (!content.includes('Breadcrumb')) {
        console.log(`   📝 File ${file} perlu ditambahkan Breadcrumb import`)
      }
    })
    
    console.log('\n🎯 Rekomendasi Integrasi:')
    console.log('1. Tambahkan import ClassPageSEO di setiap halaman kelas:')
    console.log('   import ClassPageSEO from "../../components/ClassPageSEO"')
    console.log('')
    console.log('2. Tambahkan import Breadcrumb:')
    console.log('   import Breadcrumb from "../../components/Breadcrumb"')
    console.log('')
    console.log('3. Tambahkan komponen dalam JSX:')
    console.log('   <ClassPageSEO className="nama-kelas" students={siswa} />')
    console.log('   <Breadcrumb />')
    console.log('')
    console.log('4. Update _app.js untuk menambahkan SEOTracking globally')
    
    console.log('\n📈 Manfaat Integrasi:')
    console.log('✅ Structured data untuk setiap halaman kelas')
    console.log('✅ Breadcrumb navigation untuk better UX')
    console.log('✅ FAQ structured data untuk featured snippets')
    console.log('✅ Enhanced meta tags untuk setiap kelas')
    console.log('✅ Better internal linking structure')
    
  } catch (error) {
    console.error('❌ Error:', error.message)
  }
}

integrateSEO()
