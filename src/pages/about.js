import React, { useEffect, useRef } from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import profilPic from '../../public/images/profile/dev-pic-light.png'
import Image from 'next/image'
import HireMe from '@/components/HireMe'
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
        <title>Ophelie | About and services page</title>
        <meta name="description" content="any descr"/>
    </Head>
    <main className='flex flex-col items-center justify-center w-full text-light'>
        <Layout>
            <AnimatedText text="Who I Am & What I Do" className="!text-8xl pb-12 lg:!text-6xl"/>
            <div className='grid w-full grid-cols-8 md:flex flex-col gap-16 text-primary flex-wrap'>
                <div className='col-span-5 flex flex-col justify-between'>
                    <div className=' bg-light/80 p-10 rounded-2xl'>
                        <h2 className='mb-4 text-lg font-bold uppercase text-primary'>About me</h2>
                        <div className='font-medium text-justify gap-5 flex flex-col'>
                            <div> Hi, I&apos;m Ophélie, a french web and software developer with 3 years of experience. 
                                I specialize in creating high-quality, user-friendly digital solutions. 
                                I&apos;m passionate about code, efficient design, and solving problems.</div>
                            <div>When I&apos;m not coding, you can find me running, practising Kung Fu or playing music, 
                                always looking for inspiration and new challenges. </div>
                            <div>I&apos;m dedicated to continuous learning and growth, 
                                and I&apos;m excited to bring my expertise to your next project.</div>
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
                            <h2 className='font-medium capitalize text-xl lg:text-base sm:text-sm text-light/75'>years of experience</h2>
                        </div>
                        <div className='my-4 flex flex-col items-center justify-center'>
                            <span className='inline-block text-7xl lg:text-6xl sm:text-5xl font-bold'>
                                <AnimatedNumbers value="9"/>+
                            </span>
                            <h2 className='font-medium capitalize text-xl lg:text-base sm:text-sm text-light/75'>programming languages known</h2>
                        </div>
                    </div>

            <div className='col-span-2 flex flex-col  bg-primary p-10 rounded-2xl '>
                    <div flex flex-row >
                        <h2 className='mb-4 text-lg font-bold uppercase text-light/75'>What I offer</h2>
                        
                        <div className='font-medium text-justify gap-16 flex flex-row justify-start flex-wrap'>
                            <div>
                                <div className='font-bold'>
                                Web Development
                                </div>
                                <ul className='pl-3 pt-2 flex gap-2 flex-col'>
                                <li><strong>&#10004; Responsive Design:</strong> Websites that work on all devices.</li>
                                <li>&#10004; Custom Websites: Tailored to your brand and needs.</li>
                                <li>&#10004; E-commerce: Secure and scalable online stores.</li>
                                <li>&#10004; CMS Integration: Easy website management with WordPress.</li>
                                <li>&#10004; SEO Optimization: Improve your website&apos;s search engine visibility.</li>
                                </ul>
                            </div>
                            <div>
                                <div className='font-bold'>Software Development</div>
                                <ul className='pl-3 pt-2 flex gap-2 flex-col'>
                                <li>&#10004; Custom Applications: Software solutions for your business.</li>
                                <li>&#10004; API Development: Seamless system integration.</li>
                                <li>&#10004; Database Management: Secure and organized data.</li>
                                <li>&#10004; Maintenance & Support: Keeping your software running smoothly.</li>
                                </ul>
                            </div>
                            
                        </div>
                        <div className='m-auto text-center mt-10 relative'>
                            <div>
                            Let&apos;s work together to bring your ideas to life !
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

export default about