import Head from 'next/head'

export default function ClassPageSEO({ className, students = [] }) {
  const classTitle = className.toUpperCase().replace('-', ' ')
  const baseUrl = 'https://rosvo.ilhame.id'
  
  // Generate structured data untuk halaman kelas
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": `Yearbook Kelas ${classTitle} - SMAN 11 Semarang`,
    "description": `Koleksi foto yearbook siswa kelas ${classTitle} SMAN 11 Semarang tahun 2024. Dokumentasi lengkap kegiatan dan portrait siswa.`,
    "url": `${baseUrl}/kelas/${className}`,
    "about": {
      "@type": "EducationalOrganization",
      "name": "SMAN 11 Semarang",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Semarang",
        "addressRegion": "Jawa Tengah",
        "addressCountry": "Indonesia"
      }
    },
    "mainEntity": {
      "@type": "ImageGallery",
      "name": `Galeri Foto Kelas ${classTitle}`,
      "description": `Kumpulan foto yearbook dan dokumentasi kegiatan kelas ${classTitle}`,
      "numberOfItems": students.length || 0
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": baseUrl
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Kelas",
          "item": `${baseUrl}/kelas`
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": `Kelas ${classTitle}`,
          "item": `${baseUrl}/kelas/${className}`
        }
      ]
    },
    "publisher": {
      "@type": "EducationalOrganization",
      "name": "SMAN 11 Semarang",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/logo.png`
      }
    },
    "datePublished": "2024-01-01",
    "dateModified": new Date().toISOString().split('T')[0],
    "inLanguage": "id-ID"
  }

  // Generate FAQ structured data
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `Apa itu yearbook kelas ${classTitle}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Yearbook kelas ${classTitle} adalah koleksi foto dan dokumentasi kegiatan siswa kelas ${classTitle} SMAN 11 Semarang tahun ajaran 2023/2024.`
        }
      },
      {
        "@type": "Question",
        "name": "Bagaimana cara mengakses foto yearbook?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Foto yearbook dapat diakses melalui website resmi Meriros dengan mengklik kelas yang diinginkan. Semua foto telah dikurasi dan diorganisir berdasarkan kelas."
        }
      },
      {
        "@type": "Question",
        "name": "Apakah foto dapat didownload?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ya, foto yearbook dapat didownload untuk keperluan pribadi dengan tetap memperhatikan hak cipta dan etika penggunaan."
        }
      }
    ]
  }

  return (
    <Head>
      <title>{`Yearbook Kelas ${classTitle} - SMAN 11 Semarang | Meriros 2024`}</title>
      <meta 
        name="description" 
        content={`Koleksi foto yearbook siswa kelas ${classTitle} SMAN 11 Semarang 2024. Dokumentasi lengkap kegiatan dan portrait siswa kelas ${classTitle}.`} 
      />
      <meta 
        name="keywords" 
        content={`yearbook ${classTitle}, foto siswa ${classTitle}, SMAN 11 Semarang, yearbook 2024, kelas ${classTitle}, siswa semarang, dokumentasi sekolah`} 
      />
      
      {/* Open Graph */}
      <meta property="og:title" content={`Yearbook Kelas ${classTitle} - SMAN 11 Semarang`} />
      <meta property="og:description" content={`Koleksi foto yearbook siswa kelas ${classTitle} SMAN 11 Semarang 2024`} />
      <meta property="og:url" content={`${baseUrl}/kelas/${className}`} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="id_ID" />
      <meta property="og:site_name" content="Meriros Yearbook 2024" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`Yearbook Kelas ${classTitle} - SMAN 11 Semarang`} />
      <meta name="twitter:description" content={`Koleksi foto yearbook siswa kelas ${classTitle} SMAN 11 Semarang 2024`} />
      
      {/* Additional SEO */}
      <meta name="author" content="SMAN 11 Semarang" />
      <meta name="category" content="Education, Photography, Yearbook" />
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta name="rating" content="General" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={`${baseUrl}/kelas/${className}`} />
      
      {/* Alternate languages */}
      <link rel="alternate" hrefLang="id" href={`${baseUrl}/kelas/${className}`} />
      <link rel="alternate" hrefLang="x-default" href={`${baseUrl}/kelas/${className}`} />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      
      {/* FAQ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqData),
        }}
      />
    </Head>
  )
}
