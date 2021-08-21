import 'tailwindcss/tailwind.css';
import '../styles/background.css';

import { DefaultSeo } from 'next-seo';
import Head from 'next/head';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel='icon' type='image/svg+xml' href='/beb.svg' />
      </Head>
      <DefaultSeo
        titleTemplate='%s - Blue Eyed Blondes Against Usher Syndrome'
        description='Brittany Huellen and Kailyn Huellen were both born with Usher Syndrome 1B. Together, along with their family, they have been fighting against the disease to find a cure for retinitis pigmentosa and profound deafness.'
      />
      <Component {...pageProps} />
    </>
  );
};

export default App;
