import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Innovation</title>
        <link rel="shortcut icon" href="logo-white.svg" type="image/x-icon" />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
