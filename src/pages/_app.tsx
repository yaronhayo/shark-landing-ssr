import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* Global site meta */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#0ea5e9" />
        <link rel="icon" href="/favicon.ico" />
        {/* Preload Inter font */}
        <link rel="preload" href="/fonts/inter-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </Head>
      {/* Google Tag Manager, Analytics, Clarity (all deferred for performance) */}
      <Script src="https://www.googletagmanager.com/gtm.js?id=GTM-MWSJ6K4Q" strategy="afterInteractive" />
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-9T1QFQJZ3Y" strategy="afterInteractive" />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-9T1QFQJZ3Y');
        `}
      </Script>
      <Script src="https://www.clarity.ms/tag/rh1ma4rkhk" strategy="afterInteractive" />
      <Component {...pageProps} />
    </>
  );
}
