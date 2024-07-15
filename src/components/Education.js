import React, {useRef} from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from "./LiIcon"

const Details = ({position, company, companyLink, time, address, work }) => {
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
                        className='text-primary capitalize'>@{company}</a>
                    </h3>
                <span className='capitalize font-medium text-white/75'>{time} | {address}</span>
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
    <div className='my-4'>
        <h2 className='font-bold text-8xl mb-12 w-full text-center'>
            Education
        </h2>

        <div ref={ref} className='w-[75%] mx-auto relative'>
            <motion.div 
                style={{scaleY: scrollYProgress}}
                className='absolute left-14 top-0 w-[4px] h-full bg-light origin-top' />
            <ul w-full flex flex-col items-start justify-between ml-4>                
                <Details
                        position="Software engineer" 
                        company="Infotel" 
                        companyLink="https://insoft-infotel.com/"
                        time="March 2021 - October 2024" 
                        address="Toulouse, France" 
                        work="Work as a full-stack developper on Arcsys, an archiving software. Front-end (Typescript, Angular), REST API, Back-end (Java), Build (Jenkins)."
                    />
                    <Details
                        position="Searcher in a Laboratory" 
                        company="Technological University of Dublin" 
                        companyLink="https://www.tudublin.ie/"
                        time="Summer 2020 (Internship)" 
                        address="Dublin, Irlande (Full remote)" 
                        title="Détection et prévention de chutes"
                        work="Mise en place d'une solution informatique récupérant des données 
                        via Bluetooth afin de pouvoir détecter si une personne fait un malaise. Mise 
                        en place d'une interaction vocale.
                        Environnement technique : Python, Linux
                        Outils : Détecteur de fréquence cardiaque (polar OH1+) et de mouvement 
                        (BBC micro:bit)."
                    />
                    <Details
                        position="Searcher in a Laboratory" 
                        company="Hubert Curien Laboratory" 
                        companyLink="https://laboratoirehubertcurien.univ-st-etienne.fr/en/"
                        time="January 2019 - February 2019 (Internship)" 
                        address="Saint-Etienne, France" 
                        title="Étude sur les performances de classification"
                        work="Élaboration d'une solution informatique pour la classification 
                        d'images avec un réseau de neurones convolutifs (deep learning) dans l'objectif de comparer 
                        les résultats de classification avec ceux d'un système embarqué.
                        Environnement technique : C++
                        "
                    />
                    <Details
                        position="Software engineer" 
                        company="A-SIS" 
                        companyLink="https://www.a-sis.com/"
                        time="April 2019 - June 2019 (Internship)" 
                        address="Saint-Etienne, France" 
                        title= "Mise à jour des bases de données avec IHM"
                        work="Proposer, développer et appliquer une solution informatique pour 
                        la mise à jour de bases de données. Recherche sur le bug de l'an 2038.
                        Environnement technique : C++, Qt"
                    />
            </ul>
        </div>
    </div>
  )
}

export default Education