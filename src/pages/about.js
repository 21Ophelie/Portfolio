import React, { useEffect, useRef } from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import profilPic from '../../public/images/profile/dev33.png'
import Image from 'next/image'
import { useInView, useMotionValue, useSpring } from 'framer-motion'

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

const about = () => {
  return (
    <>
    <Head>
        <title>Ophelie | About page</title>
        <meta name="description" content="any descr"/>
    </Head>
    <main className='flex flex-col items-center justify-center w-full'>
        <Layout className='pt-16'>
            <AnimatedText text="About"/>
            <div className='grid w-full grid-cols-8 gap-16 text-light'>
                <div className='col-span-3 flex flex-col items-start justify-start'>
                    <h2 className='mb-4 text-lg font-bold uppercase text-light/75'>Biography</h2>
                    <p className='font-medium'>
                        Hi, I'm CodeBucks, a web developer and UI/UX designer with a passion for creating beautiful, functional, 
                        and user-centered digital experiences. With 4 years of experience in the field. I am always looking for 
                        new and innovative ways to bring my clients' visions to life.
                    </p>
                    <p className='my-4 font-medium'>                        
                        I believe that design is about more than just making things look pretty – it's about solving problems and 
                        creating intuitive, enjoyable experiences for users. 
                    </p>
                    <p className='font-medium'>
                        Whether I'm working on a website, mobile app, or 
                        other digital product, I bring my commitment to design excellence and user-centered thinking to 
                        every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
                    </p>
                </div>
              
                <div className='col-span-3 relative absoltute rounded-2xl border-8 border-solid border-light'>
                    <Image src={profilPic} alt="Profile picture" className='w-full h-auto rounded-[0.5rem] pt-4 bg-primary'/>
                </div>

                <div className='col-span-2 flex flex-col justify-between'>

                    <div className='flex-col items-end justify-center'>
                        <span className='inline-block text-7xl font-bold'>
                            <AnimatedNumbers value="3"/>+
                        </span>
                        <h2 className='font-medium capitalize text-xl text-light/75'>years of experience</h2>
                    </div>
                    <div className='flex-col items-end justify-center'>
                        <span className='inline-block text-7xl font-bold'>
                            <AnimatedNumbers value="9"/>+
                        </span>
                        <h2 className='font-medium capitalize text-xl text-light/75'>programming languages known</h2>
                    </div>
                </div>
            </div>

        </Layout>

    </main>
    </>
  )
}

export default about