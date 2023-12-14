import WebLinks from '../components/WebLinks';
import Seo from '../components/Seo';
import seoData from '../next-seo.config';
// import Script from "next/script";


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
      {/* <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} /> */}
    </>
  )
}

