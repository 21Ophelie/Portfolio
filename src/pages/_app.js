import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import '@/styles/globals.css'
import { Montserrat } from 'next/font/google';
import Head from 'next/head'

const montserratFont = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont',
});

export const mont = montserratFont.variable;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${mont} font-mont bg-gradient-to-tr from-black to-tertiary w-full min-h-screen`}> 
        <NavBar/>
        <Component {...pageProps} />
        <Footer></Footer>
      </main>
    </>
  )
}
