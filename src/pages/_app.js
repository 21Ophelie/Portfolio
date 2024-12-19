import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import '@/styles/globals.css'
import { Montserrat } from 'next/font/google';
import Head from 'next/head'
import I18nProvider from "next-translate/I18nProvider";
import { LanguageWrapper } from '@/wrappers/LanguageWrapper';
import { i18nConfig } from "../../i18n";
import commonFR from "../../locales/fr/common.json";
import commonEN from "../../locales/en/common.json";

const montserratFont = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont',
});

export const mont = montserratFont.variable;

export default function App({ Component, pageProps, router }) {

  const lang = i18nConfig.locales.includes(String(router.query.locale))
    ? String(router.query.locale)
    : i18nConfig.defaultLocale;

  return (
    <>
      <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${mont} font-mont bg-gradient-to-tr from-black to-tertiary w-full min-h-screen`}> 
        <I18nProvider
          lang={lang}
          namespaces={{ common: lang === "fr" ? commonFR : commonEN }}
        >
          <LanguageWrapper>
            <NavBar/>
            <Component {...pageProps} />
            <Footer></Footer>
          </LanguageWrapper>
        </I18nProvider>
      </main>
    </>
  )
}