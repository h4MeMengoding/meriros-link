import WebLinks from '../components/WebLinks';
import Seo from '../components/Seo';
import seoData from '../next-seo.config';
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';


export default function Home() {
  const page = {
    title: seoData.openGraph.title,
    excerpt: 'home',
    slug: '/',
    coverImage: 'https://i.imgur.com/Ahwfq56.jpg'
  };
  return (
    <>
      <Seo page={page} />
      <WebLinks />
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-MVB6Z6HZE5" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-MVB6Z6HZE5');
        `}
      </Script>
      <SpeedInsights />
      <Analytics />
    </>
  )
}

