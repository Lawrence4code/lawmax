import Head from 'next/head';
import Script from 'next/script';
import { ThemeProvider } from 'next-themes';

import Container from 'components/Container';

import './../styles/global.css';
import 'tailwindcss/tailwind.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', ${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS});
        `}
      </Script>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Enter description here." />
      </Head>
      <ThemeProvider attribute="class">
        <Container>
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
