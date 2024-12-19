import React, { useEffect, useRef } from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import profilPic from '../../../public/images/profile/dev-pic-light.png'
import Image from 'next/image'
import HireMe from '@/components/HireMe'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import { useI18n } from "@/hooks/useI18n";

const AnimatedNumbers = ({value}) => {

    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000});
    const isInView = useInView(ref, {once: true});

    useEffect(() => {
      if(isInView) {
        motionValue.set(value)
      }
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        })
    }, [springValue, value])
    
    return <span ref={ref}></span>
}

function About() {
    const { t } = useI18n('common');
  return (
    <>
    <Head>
        <title>Ophelie | About and services page</title>
        <meta name="description" content="any descr"/>
    </Head>
    <main className='flex flex-col items-center justify-center w-full text-light'>
        <Layout>
            <AnimatedText text={t('about_title')} className="!text-8xl pb-12 lg:!text-6xl"/>
            <div className='grid w-full grid-cols-8 md:flex flex-col gap-16 text-primary flex-wrap'>
                <div className='col-span-5 flex flex-col justify-between'>
                    <div className=' bg-light/80 p-10 rounded-2xl'>
                        <h2 className='mb-4 text-lg font-bold uppercase text-primary'>{t('about_me_title')}</h2>
                        <div className='font-medium text-justify gap-5 flex flex-col'>
                            <div>{t('about_me_1')}</div>
                            <div>{t('about_me_2')}</div>
                            <div>{t('about_me_3')}</div>
                        </div>
                    </div>
                   
                </div>

                <div className='col-span-3 relative flex flex-col-reverse'>
                    <div className='absolute h-full w-full rounded-2xl border-1 border-solid 
                                    backdrop-blur-md bg-light/20 '>
                    </div>
                    <div className='z-30 relative self-end'>
                            <Image src={profilPic} alt="Profile picture" priority 
                            className='rounded-[0.5rem]' 
                            width={275}
                            />
                    </div>
                </div>                         
               
            </div>

            <div className='flex flex-row justify-around text-light flex-wrap my-10' >
                        <div className='my-4 flex flex-col items-center justify-center'>
                            <span className='inline-block text-7xl font-bold lg:text-6xl sm:text-5xl'>
                                <AnimatedNumbers value="3"/>+
                            </span>
                            <h2 className='font-medium capitalize text-xl lg:text-base sm:text-sm text-light/75'>{t('about_years_exp')}</h2>
                        </div>
                        <div className='my-4 flex flex-col items-center justify-center'>
                            <span className='inline-block text-7xl lg:text-6xl sm:text-5xl font-bold'>
                                <AnimatedNumbers value="9"/>+
                            </span>
                            <h2 className='font-medium capitalize text-xl lg:text-base sm:text-sm text-light/75'>{t('about_languages')}</h2>
                        </div>
                    </div>

            <div className='col-span-2 flex flex-col  bg-primary p-10 rounded-2xl '>
                    <div flex flex-row >
                        <h2 className='mb-4 text-lg font-bold uppercase text-light/75'>{t('about_services_title')}</h2>
                        
                        <div className='font-medium text-justify gap-16 flex flex-row justify-start flex-wrap'>
                            <div>
                                <div className='font-bold'>{t('about_services_web')}</div>
                                <ul className='pl-3 pt-2 flex gap-2 flex-col'>
                                <li><strong>&#10004; {t('about_services_responsive_label')}</strong> {t('about_services_responsive_description')}</li>
                                <li><strong>&#10004; {t('about_services_custom_label')}</strong>{t('about_services_custom_description')}</li>
                                <li><strong>&#10004; {t('about_services_ecommerce_label')}</strong>{t('about_services_ecommerce_description')}</li>
                                <li><strong>&#10004; {t('about_services_cms_label')}</strong>{t('about_services_cms_description')}</li>
                                <li><strong>&#10004; {t('about_services_seo_label')}</strong>{t('about_services_seo_description')}</li>
                                </ul>
                            </div>
                            <div>
                                <div className='font-bold'>{t('about_services_software')}</div>
                                <ul className='pl-3 pt-2 flex gap-2 flex-col'>
                                    <li><strong>&#10004; {t('about_services_app_label')}</strong> {t('about_services_app_description')}</li>
                                    <li><strong>&#10004; {t('about_services_api_label')}</strong>{t('about_services_api_description')}</li>
                                    <li><strong>&#10004; {t('about_services_db_label')}</strong>{t('about_services_db_description')}</li>
                                    <li><strong>&#10004; {t('about_services_support_label')}</strong>{t('about_services_support_description')}</li>
                                </ul>
                            </div>
                            
                        </div>
                        <div className='m-auto text-center mt-10 relative'>
                            <div>
                                {t('about_services_conclusion')}
                            </div>
                        
                            <HireMe/>   
                           
                        </div>   
                                
                                  
                    </div>

                </div>
         
        </Layout>
        <div  className='lgmin:hidden'>                    
            <HireMe/>  
        </div>
    </main>
    </>
  )
}

export default About