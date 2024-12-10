import React, {useRef} from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from "./LiIcon"
import AnimatedText from './AnimatedText'

const Details = ({position, company, companyLink, time, address, title, work }) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-left justify-between'>
           <LiIcon reference={ref} />
            <motion.div
            initial={{y:50}}
            whileInView={{y:0}}    
            transition={{duration:0.5, type:"spring"}}
            >
                <h3 className='capitalize font-bold text-2xl flex flex-wrap'>
                    {position}&nbsp;<a 
                        href={companyLink} 
                        target="_blank"
                        className='underline capitalize'>@{company}</a>
                    </h3>
                <span className='capitalize font-medium text-white/75'>{time} | {address}</span>
                <div className='capitalize font-bold'>{title}</div>
                <p className='font-medium w-full'>
                    {work}
                </p>

            </motion.div>
        </li>
    )    
}

const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll( 
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    );
  return (
    <div className='my-8'>
        <h2 className='font-bold text-primary bg-light/75 backdrop-blur rounded-lg text-6xl py-2 lg:text-4xl mb-12 w-full text-center'>
            Experiences</h2>
            

        <div ref={ref} className='w-[75%] mx-auto relative md:w-full md:mx-0'>
            <motion.div 
                style={{scaleY: scrollYProgress}}
                className='absolute left-14 top-0 w-[4px] h-full bg-primary origin-top' />
            <ul w-full flex flex-col items-start justify-between ml-4>                
                <Details
                        position="Software engineer" 
                        company="Infotel" 
                        companyLink="https://insoft-infotel.com/"
                        time="March 2021 - October 2024" 
                        address="Toulouse, France" 
                        work="Work as a full-stack developper on Arcsys, an archiving software. 
                        Technical environment: Front-end (Typescript, Angular), REST API, Back-end (Java), Build (Jenkins)."
                    />
                    <Details
                        position="Searcher in a Laboratory" 
                        company="Technological University of Dublin" 
                        companyLink="https://www.tudublin.ie/"
                        time="Summer 2020 (Internship)" 
                        address="Dublin, Irlande (Full remote)" 
                        title="Detection and Prevention of Falls"                        
                        work="Implementation of a solution that collects data via Bluetooth to detect if a person is experiencing a medical emergency and is falling. Implementation of voice interaction. Technical environment: Python, Linux. Tools: Heart rate sensor (Polar OH1+) and motion sensor (BBC micro
                        )."
                    />
                    <Details
                        position="Searcher in a Laboratory" 
                        company="Hubert Curien Laboratory" 
                        companyLink="https://laboratoirehubertcurien.univ-st-etienne.fr/en/"
                        time="January 2019 - February 2019 (Internship)" 
                        address="Saint-Etienne, France" 
                        title="Study on Classification Performance"
                        work="Development of a solution for image classification using a convolutional neural network (deep learning) with the aim of comparing classification results with those of an embedded system.
                        Technical environment: C++
                        "
                    />
                    <Details
                        position="Software engineer" 
                        company="A-SIS" 
                        companyLink="https://www.a-sis.com/"
                        time="April 2019 - June 2019 (Internship)" 
                        address="Saint-Etienne, France" 
                        title="Database Update with GUI"
                        work="Propose, develop, and implement a solution for updating databases. Research on the Year 2038 bug.
                        Technical environment: C++, Qt"
                    />
            </ul>
        </div>
    </div>
  )
}

export default Experience