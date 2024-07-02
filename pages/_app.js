import { useState, useEffect } from "react";
import useDarkMode from "use-dark-mode";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import Layout from "../components/Layout";
import GlobalStyle from "../styles/GlobalStyle";
import { darkTheme, lightTheme } from "../styles/theme.config";
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
    const darkMode = useDarkMode(false, { storageKey: null, onChange: null });
    const [isMounted, setIsMounted] = useState(false);

    const theme = darkMode.value ? darkTheme : lightTheme;

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <>
            <ThemeProvider theme={theme}>
                <Head>
                    <meta content="width=device-width, initial-scale=1" name="viewport" />
                    <Script async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7454960383043781"
                    crossOrigin="anonymous"/>
                    <link
                        rel="icon"
                        href="/logo.jpg"
                        type="image/jpg"
                        sizes="48x48"
                    />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
                </Head>
                <GlobalStyle />
                <Layout>
                    <DefaultSeo
                        canonical={SEO.openGraph.url}
                        {...SEO}
                        additionalMetaTags={[{
                            name: 'keywords',
                            content: SEO.openGraph.keywords,
                        },
                        {
                            name: 'twitter:image',
                            content: SEO.openGraph.images[0].url
                        },
                        {
                            name: 'twitter:title',
                            content: SEO.openGraph.title,
                        },
                        {
                            name: 'twitter:description',
                            content: SEO.openGraph.description,
                        },
                        {
                            httpEquiv: 'x-ua-compatible',
                            content: 'IE=edge; chrome=1'
                        }]}
                    />
                    {isMounted && <Component {...pageProps} />}
                </Layout>
                <SpeedInsights />
            </ThemeProvider>
        </>
    );
}

export default MyApp;
