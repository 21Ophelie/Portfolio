import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useI18n } from '@/hooks/useI18n';

function Contact() {

  const { t } = useI18n('common');
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
        alert(`${t(contact_message_sent_1)} ${query} ${t(contact_message_sent_1)}`); 
        formData.name='';
        formData.message='';
        formData.email='';
        formData.number='';
        setFormData({ ...formData});
      })
      .catch((error) => {
        setIsSending(false);
        alert(t(contact_fail)); 
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
            <AnimatedText text={t('contact_title')} className='font-bold text-light text-8xl mb-12 lg:mb-4 w-full text-center lg:!text-7xl sm:!text-6xl xs:!text-5xl'/>
            
            <div className='flex px-20 py-10 mx-48 bg-light/50 backdrop-blur rounded-2xl lg:mx-6 sm:px-8 sm:mx-0'>
              <form onSubmit={handleSubmit} 
                className='w-full flex flex-col gap-8'>
                <label className='flex flex-col gap-2'>
                  <span>
                    {t('contact_message_label')}
                  </span>                  
                  <textarea required 
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t('contact_message_placeholder')} type="text" name="message" 
                    className='text-dark rounded-2xl  h-40 p-3 text-sm'  style={{resize: 'none' }} />
                </label>
                <div className='flex flex-row w-full gap-5 sm:flex-col'>
                  <label className='w-full gap-2'>
                    <span>{t('contact_name_label')}</span>                    
                    <input required type="text" name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      className='text-dark w-full rounded-2xl p-3 text-sm ' />
                  </label>
                  <label className='w-full gap-2'>
                    <span>{t('contact_email_label')}</span>
                    <input required type="mail" name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      className='text-dark w-full rounded-2xl p-3 text-sm' />
                  </label>
                </div>
               
                <motion.button type="submit" 
                  disabled={isButtonDisabled || isSending}
                  title={isButtonDisabled ? t('contact_error') : ''}
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
                  {isSending ? t('contact_sending_button') : t('contact_send_button')}
                </motion.button>
              </form>
            </div>
            
        </Layout>
    </main>
    </>
  )
}

export default Contact