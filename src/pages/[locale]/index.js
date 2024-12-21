import Layout from '@/components/Layout'
import Head from 'next/head'
import AnimatedText from '@/components/AnimatedText'
import Image from 'next/image'
import girl1 from '../../../public/images/svgs/girl1.svg'
import { ReactTyped } from "react-typed";
import { useI18n } from "@/hooks/useI18n";

export default function Home() {
  const { t } = useI18n('common');
  return (
    <>
      <Head>
        <title>Ophelie | Portfolio</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className='relative flex items-center justify-center text-light w-full'>

      <div className='w-full pb-0 sm:px-0
                           rounded-lg backdrop-blur-md'>
        <Layout className='pt-0'>
          <div className='mx-auto relative pd-10 flex flex-row items-center self-center justify-center'>
            <AnimatedText text={t('home_welcome')} 
            className="!text-8xl mx-auto justify-self-center items-center self-center flex flex-wrap justify-center 
              lg:!text-6xl sm:!text-5xl xs:!text-4xl !text-left"/>
          </div>
          <div className='mt-8 px-8 sm:px-2 bg-center'>
                <Image src={girl1} alt="drawing" className='w-full' style={{justifySelf: 'center' }} />
          </div>             
              
          <div className='absolute top-60 xs:top-48 left-1/4 right-1/4 flex bg-light/75 backdrop-blur px-5 py-3 mx-6 rounded-2xl items-center self-center mt-2
            xl:left-60 xl:right-60 lg:left-40 lg:right-40 md:right-32 md:left-32 sm:right-16 sm:left-16 xs:left-3 xs:right-3 md:py-2 sm:py-1'>

            <ReactTyped className='my-4 font-semibold text-primary text-3xl lg:text-2xl md:text-xl sm:text-lg xs:text-sm ml-2 sm:m-2'
                            strings={[
                              t('home_description_software'),
                              t('home_description_web'),
                              t('home_description_fs'),
                              t('home_description_UIUX'),
                              t('home_description_kf'),
                              t('home_description_singing')
                            ]}
                            typeSpeed={40}
                            backSpeed={50}
                            loop
                        />
          </div>
        </Layout>
        </div>
      </main>
    </>
  )
}

