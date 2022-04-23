import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import { ThemeProvider } from 'next-themes';

import Container from 'components/Container';

import './../styles/global.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
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
