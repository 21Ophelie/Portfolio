import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';


function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = formData.name;

    // Prepare the email data for the confirmation
    const emailParams = {
      client_name: formData.name,
      client_email: formData.email,
      client_number: formData.number,
      message: formData.message,
    };

    setIsSending(true);

    // Send email using EmailJS (confirmation email)
    emailjs
      .send(serviceID, templateID, emailParams, publicKey)
      .then((response) => {
        setIsSending(false);
        alert(`Thank you ${query} for your message !`); 
        formData.name='';
        formData.message='';
        formData.email='';
        formData.number='';
        setFormData({ ...formData});
      })
      .catch((error) => {
        setIsSending(false);
        alert(`fail`); 
      });

  }

  // EmailJS Config
  const serviceID = 'service_wc385zk';
  const templateID = 'template_nea4fxd';
  const publicKey = 'LXsOml0BmwlHm5kSW';

  const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
      number: ''
    });
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isSending, setIsSending] = useState(false);
  
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
    <main className='flex flex-col items-center justify-center w-full text-light '>
        <Layout>
            <AnimatedText text="How can I help you ?" className='font-bold text-light text-8xl mb-12 w-full text-center lg:!text-6xl'/>
            
            <div className='flex px-20 py-10 mx-48 bg-light/50 backdrop-blur rounded-2xl lg:mx-6 sm:px-8 sm:mx-0'>
              <form onSubmit={handleSubmit} 
                className='w-full flex flex-col gap-8'>
                <label className='flex flex-col gap-2'>
                  <span>
                  Message :
                  </span>                  
                  <textarea required 
                    value={formData.message}
                    onChange={handleChange}
                    placeholder='Tell me about your project! Briefly describe your project requirements, goals, and timeline' type="text" name="message" 
                    className='text-dark rounded-2xl  h-40 p-3 text-sm'  style={{resize: 'none' }} />
                </label>
                <div className='flex flex-row w-full gap-5 sm:flex-col'>
                  <label className='w-full gap-2'>
                    <span>Name :</span>                    
                    <input required type="text" name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      className='text-dark w-full rounded-2xl p-3 text-sm ' />
                  </label>
                  <label className='w-full gap-2'>
                    <span>Email :</span>
                    <input required type="mail" name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      className='text-dark w-full rounded-2xl p-3 text-sm' />
                  </label>
                </div>
               
                <motion.button type="submit" 
                  disabled={isButtonDisabled || isSending}
                  title={isButtonDisabled ? 'Please fill in your name, email, and message' : ''}
                  className={`rounded-2xl w-24 justify-center flex self-center px-3 py-3 mt-2
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
                  {isSending ? 'Sending...' : 'Send'}
                </motion.button>
              </form>
            </div>
            
        </Layout>
    </main>
    </>
  )
}

export default Contact