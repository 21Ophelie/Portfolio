import Skills from '@/components/Skills'
import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import AnimatedText from '@/components/AnimatedText'
import { useI18n } from '@/hooks/useI18n'

function Resume() {
  const { t } = useI18n('common');
  return (
    <>
    <Head>
        <title>Ophelie | Resume page</title>
        <meta name="resume" content="experiences and skills"/>
    </Head>
    <main className='flex flex-col items-center justify-center w-full text-light'>
        <Layout>
            <AnimatedText text={t('resume_title')} className='font-bold text-light text-8xl lg:text-6xl mb-12 w-full text-center'/>
            <Experience/>
            <Education/>
            <Skills/>
        </Layout>
    </main>
    </>
  )
}

export default Resume