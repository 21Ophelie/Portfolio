import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'



const contact = () => {

  function search(formData) {
    const query = formData.get("message");
    alert(`Merci '${query}' pour votre message !`);
  }
  
  return (
  
    <>
    <Head>
        <title>Ophelie | Contact page</title>
        <meta name="contact" content="contact"/>
    </Head>
    <main className='flex flex-col items-center justify-center w-full text-light'>
        <Layout>
            <AnimatedText text="How can I help you ?" className='font-bold text-light text-8xl mb-12 w-full text-center'/>
            <form  action={search}>
              <label>
                Votre message :
                <textarea type="text" name="message" />
              </label>
              <label>
                Votre prénom :
                <input type="text" name="name" />
              </label>
              <label>
                Votre email :
                <input type="mail" name="email" />
              </label>
              <button type="submit" value="Envoyer" />
            </form>
        </Layout>
    </main>
    </>
  )
}

export default contact