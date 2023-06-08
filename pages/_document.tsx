import { Html, Head, Main, NextScript } from 'next/document';
import Footer from '../components/Footer';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='font-roboto'>
        <Main />
        <Footer />
        <NextScript />
      </body>
    </Html>
  )
}
