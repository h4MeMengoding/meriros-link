import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Breadcrumb() {
  const router = useRouter()
  const pathSegments = router.asPath.split('/').filter(segment => segment)
  
  // Generate breadcrumb items
  const breadcrumbItems = [
    { name: 'Home', href: '/' }
  ]
  
  let currentPath = ''
  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}`
    
    // Convert path segments to readable names
    let name = segment
    if (segment === 'kelas') {
      name = 'Kelas'
    } else if (segment.includes('ips-')) {
      name = `IPS ${segment.split('-')[1]}`
    } else if (segment.includes('mipa-')) {
      name = `MIPA ${segment.split('-')[1]}`
    }
    
    breadcrumbItems.push({
      name: name,
      href: currentPath
    })
  })

  // Structured data for breadcrumb
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://rosvo.ilhame.id${item.href}`
    }))
  }

  if (breadcrumbItems.length <= 1) {
    return null // Don't show breadcrumb on homepage
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <nav aria-label="Breadcrumb" className="breadcrumb-nav">
        <ol className="breadcrumb-list">
          {breadcrumbItems.map((item, index) => (
            <li key={item.href} className="breadcrumb-item">
              {index < breadcrumbItems.length - 1 ? (
                <>
                  <Link href={item.href} className="breadcrumb-link">
                    {item.name}
                  </Link>
                  <span className="breadcrumb-separator"> / </span>
                </>
              ) : (
                <span className="breadcrumb-current" aria-current="page">
                  {item.name}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
      
      <style jsx>{`
        .breadcrumb-nav {
          margin: 1rem 0;
          font-size: 0.875rem;
        }
        
        .breadcrumb-list {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        
        .breadcrumb-item {
          display: flex;
          align-items: center;
        }
        
        .breadcrumb-link {
          color: #6b7280;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        
        .breadcrumb-link:hover {
          color: #374151;
          text-decoration: underline;
        }
        
        .breadcrumb-separator {
          margin: 0 0.5rem;
          color: #9ca3af;
        }
        
        .breadcrumb-current {
          color: #374151;
          font-weight: 500;
        }
        
        @media (max-width: 640px) {
          .breadcrumb-nav {
            font-size: 0.75rem;
          }
          
          .breadcrumb-separator {
            margin: 0 0.25rem;
          }
        }
      `}</style>
    </>
  )
}
