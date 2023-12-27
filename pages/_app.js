import { useState, useEffect } from "react"
import useDarkMode from "use-dark-mode"
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import Layout from "../components/Layout";
import GlobalStyle from "../styles/GlobalStyle";
import { darkTheme, lightTheme } from "../styles/theme.config";
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';

function MyApp({ Component, pageProps }) {
    const darkMode = useDarkMode(false, { storageKey: null, onChange: null })
    const [isMounted, setIsMounted] = useState(false)

    const [theme, setTheme] = useState("dark")

    const themeToggler = () => {
        theme === "dark" ? setTheme("lightTheme") : setTheme("dark")
    }
    // const theme = darkMode.value ? darkTheme : lightTheme;

    useEffect(() => {
        setIsMounted(true);
    }, [])

    return (
        <>
            <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
                <Head>
                    <meta content="width=device-width, initial-scale=1" name="viewport" />
                    <link
                        rel="icon"
                        href="/logo.jpg"
                        type="image/jpg"
                        sizes="48x48"
                    />

                </Head>
                <button onClick={() => themeToggler()}>Theme</button>
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
            </ThemeProvider>
        </>

    )
}
export default MyApp