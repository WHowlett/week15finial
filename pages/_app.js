import Head from 'next/head';
import '../styles/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Wayne Portfolio</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
