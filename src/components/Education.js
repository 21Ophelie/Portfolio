import React, {useRef} from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from "./LiIcon"
import AnimatedText from './AnimatedText';

const Details = ({position, company, companyLink, time, address, title, work }) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
           <LiIcon reference={ref} />
            <motion.div
            initial={{y:50}}
            whileInView={{y:0}}    
            transition={{duration:0.5, type:"spring"}}
            >
                <h3 className='capitalize font-bold text-2xl'>
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

const Education = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll( 
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    );
  return (
    <div className='my-32'>
        <h2 className='font-bold text-6xl py-2 lg:text-4xl mb-12 w-full bg-light/75 backdrop-blur rounded-lg text-primary text-center'>
            Education
        </h2>

        <div ref={ref} className='w-[75%] mx-auto relative md:w-full md:mx-0'>
            <motion.div 
                style={{scaleY: scrollYProgress}}
                className='absolute left-14 top-0 w-[4px] h-full bg-primary origin-top' />
            <ul w-full flex flex-col items-start justify-between ml-4>                
                <Details
                        position="Erasmus student" 
                        company="Università di Padova" 
                        companyLink="https://www.unipd.it/en/"
                        time="September 2020 - March 2021" 
                        address="Padova, Italie" 
                        work="Major in Computer science and Machine Learning (AI)"
                    />
                    <Details
                        position="Graduate student" 
                        company="Telecom Saint-Etienne" 
                        companyLink="https://www.telecom-st-etienne.fr/en/"
                        time="September 2018 - October 2021" 
                        address="Saint-Etienne, France" 
                        title="Master Degree from Engineering School"
                        work="Major in computer science and image processing"
                    />
                    <Details
                        position="Undergraduate student" 
                        company="IUT of Saint Etienne." 
                        companyLink="https://www.iut.univ-st-etienne.fr/en/index.html"
                        time="September 2016 - June 2018" 
                        address="Saint-Etienne, France" 
                        title="Two-years technical Degree (DUT GEII)"
                        work="Major in computer science and electronic science"
                    />
                    <Details
                        position="High school student" 
                        company="Lycée Georges Brassens" 
                        companyLink="https://georges-brassens.ent.auvergnerhonealpes.fr/"
                        time="Septembre 2013 - July 2016" 
                        address="Rive-de-Gier, France" 
                        title="High School Degree"
                        work="Major in science"
                    />
            </ul>
        </div>
    </div>
  )
}

export default Education