import { NextSeo } from 'next-seo';
import Head from 'next/head';
import seoData from '../next-seo.config';

export default function Seo({ page }) {
    const { title, excerpt, slug, coverImage } = page;
    
    // Generate structured data for better SEO
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Website",
        "name": "Meriros Yearbook 24",
        "description": seoData.openGraph.description,
        "url": seoData.openGraph.url,
        "image": seoData.openGraph.images[0].url,
        "publisher": {
            "@type": "Organization",
            "name": "SMAN 11 Semarang",
            "url": seoData.openGraph.url
        },
        "inLanguage": "id-ID",
        "potentialAction": {
            "@type": "SearchAction",
            "target": `${seoData.openGraph.url}/kelas/{search_term_string}`,
            "query-input": "required name=search_term_string"
        }
    };

    // If it's a class page, add more specific structured data
    if (slug && slug.includes('/kelas/')) {
        structuredData["@type"] = "CollectionPage";
        structuredData.mainEntity = {
            "@type": "ImageGallery",
            "name": `${title} - Yearbook Photos`,
            "description": `Koleksi foto yearbook kelas ${title}`,
        };
    }

    return (
        <>
            <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(structuredData),
                    }}
                />
                <link rel="alternate" type="application/rss+xml" title="RSS" href="/feed.xml" />
                <meta name="theme-color" content="#000000" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
                <link rel="canonical" href={`${seoData.openGraph.url}${slug || ''}`} />
                <meta name="generator" content="Next.js" />
            </Head>
            <NextSeo
                title={title}
                titleTemplate={`%s | ${seoData.openGraph.title}`}
                defaultTitle={seoData.openGraph.title}
                description={seoData.openGraph.description}
                canonical={`${seoData.openGraph.url}${slug || ''}`}
                openGraph={{
                    type: 'website',
                    url: `${seoData.openGraph.url}${slug || ''}`,
                    title: `${title}`,
                    description: `${seoData.openGraph.description}`,
                    locale: 'id_ID',
                    images: [
                        {
                            width: 1200,
                            height: 630,
                            url: coverImage || seoData.openGraph.images[0].url,
                            alt: `${title} - Meriros Yearbook 24`,
                        },
                    ],
                    site_name: 'Meriros Yearbook 24',
                }}
                twitter={{
                    handle: '@smanse11smg',
                    site: '@smanse11smg',
                    cardType: 'summary_large_image',
                }}
                additionalMetaTags={[
                    {
                        name: 'keywords',
                        content: `${seoData.openGraph.keywords}, ${title}`
                    },
                    {
                        name: 'author',
                        content: 'SMAN 11 Semarang'
                    },
                    {
                        name: 'robots',
                        content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
                    },
                    {
                        name: 'twitter:image',
                        content: coverImage || seoData.openGraph.images[0].url
                    },
                    {
                        httpEquiv: 'x-ua-compatible',
                        content: 'IE=edge'
                    },
                    {
                        name: 'format-detection',
                        content: 'telephone=no'
                    },
                    {
                        name: 'geo.region',
                        content: 'ID-JT'
                    },
                    {
                        name: 'geo.placename',
                        content: 'Semarang'
                    },
                    {
                        name: 'geo.position',
                        content: '-7.0052;110.4381'
                    },
                    {
                        name: 'ICBM',
                        content: '-7.0052, 110.4381'
                    }
                ]}
                robotsProps={{
                    nosnippet: false,
                    notranslate: false,
                    noimageindex: false,
                    noarchive: false,
                    maxSnippet: -1,
                    maxImagePreview: 'large',
                    maxVideoPreview: -1,
                }}
            />
        </>
    );
}