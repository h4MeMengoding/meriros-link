// Analytics and SEO tracking component
import Script from 'next/script'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function SEOTracking() {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      // Track page views for SEO analytics
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', 'G-MVB6Z6HZE5', {
          page_path: url,
        })
      }
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-MVB6Z6HZE5"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-MVB6Z6HZE5', {
            page_path: window.location.pathname,
            send_page_view: true,
            anonymize_ip: true,
            cookie_flags: 'max-age=7200;secure;samesite=strict'
          });
        `}
      </Script>

      {/* Core Web Vitals tracking */}
      <Script id="web-vitals" strategy="afterInteractive">
        {`
          function sendToGoogleAnalytics({name, delta, value, id}) {
            gtag('event', name, {
              event_category: 'Web Vitals',
              event_label: id,
              value: Math.round(name === 'CLS' ? delta * 1000 : delta),
              non_interaction: true,
            });
          }
          
          if ('web-vitals' in window) {
            import('web-vitals').then(({getFCP, getFID, getFCLS, getLCP, getTTFB}) => {
              getFCP(sendToGoogleAnalytics);
              getFID(sendToGoogleAnalytics);
              getFCLS(sendToGoogleAnalytics);
              getLCP(sendToGoogleAnalytics);
              getTTFB(sendToGoogleAnalytics);
            });
          }
        `}
      </Script>

      {/* Structured Data for Organization */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "SMAN 11 Semarang",
            "alternateName": "SMA Negeri 11 Semarang",
            "url": "https://rosvo.ilhame.id",
            "logo": "https://rosvo.ilhame.id/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "areaServed": "ID",
              "availableLanguage": "Indonesian"
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Jl. Pemuda",
              "addressLocality": "Semarang",
              "addressRegion": "Jawa Tengah",
              "postalCode": "50132",
              "addressCountry": "ID"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": -7.0052,
              "longitude": 110.4381
            },
            "sameAs": [
              "https://www.instagram.com/sman11semarang/",
              "https://www.youtube.com/@sman11semarang"
            ]
          })
        }}
      />
    </>
  )
}
