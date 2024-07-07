import Skills from '@/components/Skills'
import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'

const resume = () => {
  return (
    <>
    <Head>
        <title>Ophelie | Resume page</title>
        <meta name="resume" content="experiences and skills"/>
    </Head>
    <main className='flex flex-col items-center justify-center w-full text-light'>
        <Layout>
            <Skills/>
        </Layout>
    </main>
    </>
  )
}

export default resume