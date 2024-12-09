import Layout from '@/components/Layout'
import Head from 'next/head'
import profilePic from '../../public/images/profile/dev3.png'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import { DeveloperPic, LinkArrow } from '@/components/Icons'
import HireMe from '@/components/HireMe'
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg'
import girl1 from '../../public/images/svgs/girl1.svg'
import { ReactTyped } from "react-typed";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ophelie | Portfolio</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className='relative flex items-center justify-center text-light w-full'>

      <div className='w-full pb-0 sm:px-0
                           rounded-lg backdrop-blur-md'>
        <Layout className='pt-0'>

          <div className='mx-auto relative pd-10 flex flex-row items-center self-center justify-center'>
            <AnimatedText text="Hello, I'm Ophélie !" 
            className="!text-8xl mx-auto justify-self-center items-center self-center flex flex-wrap justify-center lg:!text-6xl !text-left"/>
          </div>
          <div className='mt-8 px-8 sm:px-2 bg-center'>
                <Image src={girl1} alt="drawing"  style={{width: '99% !important', justifySelf: 'center' }} />
          </div>             
              
          <div className=' absolute top-48 left-1/3 right-1/3 flex bg-light/75 backdrop-blur px-5 py-3 mx-6 rounded-2xl items-center self-center mt-2
            xl:left-60 xl:right-60 lg:left-40 lg:right-40 md:right-32 md:left-32 sm:right-16 sm:left-16 xs:left-3 xs:right-3'>

            <ReactTyped className='my-4 font-semibold text-primary text-3xl md:text-2xl sm:text-lg ml-2 sm:m-2'
                            strings={[
                              "I'm a software developer",
                              "I'm a web developer",
                              "I'm a full-stack developer",
                              "I'm an UI/UX designer",
                              "I do Kung Fu",
                              "I love singing"
                            ]}
                            typeSpeed={40}
                            backSpeed={50}
                            loop
                        />
        
              
                {/* <div className='flex items-center self-start mt-2'>
                  <Link 
                    className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold
                    hover:bg-light hover:text-dark border border-solid border-transparent hover:boder-dark" 
                    download={true}
                    href="/dummy.pdf" target={"_blank"}>
                      Resume <LinkArrow className="w-6 ml-1"/>
                  </Link>
                  <Link href="mailto:ophelie.deschaux@gmail.com" target={"_blank"}
                    className="ml-4 text-lg font-medium capitalize text-dark underline"
                  >Contact</Link>
                </div>*/}
          </div>





        </Layout>
        </div>
      </main>
    </>
  )
}

