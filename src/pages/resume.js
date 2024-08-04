import Skills from '@/components/Skills'
import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import AnimatedText from '@/components/AnimatedText'

const resume = () => {
  return (
    <>
    <Head>
        <title>Ophelie | Resume page</title>
        <meta name="resume" content="experiences and skills"/>
    </Head>
    <main className='flex flex-col items-center justify-center w-full text-light'>
        <Layout>
            <AnimatedText text="My resume" className='font-bold text-light text-8xl mb-12 w-full text-center'/>
            <Experience/>
            <Education/>
            <Skills/>
        </Layout>
    </main>
    </>
  )
}

export default resume