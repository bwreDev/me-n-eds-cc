import Hero from '../components/Hero';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Me-n-Ed&apos;s Central Coast</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='author' content='Colton Bonner' />
        <meta
          name='description'
          content="Me-n-Ed's of the Central Coast brings you the San Joaquin classic pizzeria to locations up and down the central coast. Come have a slice with us! All locations are officially open in Nipomo, Santa Maria, and Pismo."
        />
        <meta property='og:title' content="Me-n-Ed's Central Coast" />
        <meta
          property='og:description'
          content="Me-n-Ed's of the Central Coast brings you the San Joaquin classic pizzeria to locations up and down the central coast. Come have a slice with us! All locations are officially open in Nipomo, Santa Maria, and Pismo."
        />
        <meta property='og:image' content='/images/me-n-eds-crafthouse.png' />
        <meta property='og:url' content='' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/images/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/images/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/images/favicon-16x16.png'
        />
        <link rel='manifest' href='/images/site.webmanifest' />
      </Head>
      <Hero />
    </>
  );
}
