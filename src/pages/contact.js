import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import { motion } from 'framer-motion';


const contact = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = formData.name;

    console.log('Form submitted:', formData);
    formData.name='';
    formData.message='';
    formData.email='';
    setFormData({ ...formData});
    alert(`Thank you'${query}' for your message !`); 
  }

  const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
    });
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  
  // Handle input change
  const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
  };
  
  // Check if all required fields are filled
  useEffect(() => {
    const form = document.querySelector('form');
      setIsButtonDisabled(!form.checkValidity()); // Check HTML5 form validity
    }, [formData]);
  
  
  return (
  
    <>
    <Head>
        <title>Ophelie | Contact page</title>
        <meta name="contact" content="contact"/>
    </Head>
    <main className='flex flex-col items-center justify-center w-full text-light'>
        <Layout>
            <AnimatedText text="How can I help you ?" className='font-bold text-light text-8xl mb-12 w-full text-center'/>
            
            <div className='flex px-20 py-10 mx-10 bg-light/50 backdrop-blur rounded-2xl sm:mx-0 sm:px-5'>
              <form onSubmit={handleSubmit} 
                className='w-full flex flex-col gap-10'>
                <label className='flex flex-col'>
                  <span>
                  Message :
                  </span>                  
                  <textarea required 
                    value={formData.message}
                    onChange={handleChange}
                    placeholder='Tell me about your project! Briefly describe your project requirements, goals, and timeline' type="text" name="message" className='text-dark rounded-2xl  h-40 p-3'  style={{resize: 'none' }} />
                </label>
                <div className='flex flex-row w-full gap-5 sm:flex-col'>
                  <label className='w-full'>
                    Name :
                    <input required type="text" name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      className='text-dark w-full rounded-2xl p-3' />
                  </label>
                  <label className='w-full'>
                    Email :
                    <input required type="mail" name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      className='text-dark w-full rounded-2xl p-3' />
                  </label>
                </div>
               
                <motion.button type="submit" 
                  disabled={isButtonDisabled}
                  className={`rounded-2xl w-24 justify-center flex self-center px-3 py-3
                    ${isButtonDisabled ? 'bg-gray-400 cursor-not-allowed' :  'bg-tertiary'
                    }
                  `}
                  
                  whileHover={!isButtonDisabled ? {
                    backgroundColor:[
                        "#5b0045",
                        "#2f6674",
                        "#a25107",
                        "#a29607",
                        "#71115a",
                        "#5b0045",
                      ],
                    transition: { duration:1, repeat:Infinity }
                  } : {}}
                >
                  Send
                </motion.button>
              </form>
            </div>
            
        </Layout>
    </main>
    </>
  )
}

export default contact