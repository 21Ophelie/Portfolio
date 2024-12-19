import React, {useRef} from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from "./LiIcon"
import { useI18n } from '@/hooks/useI18n'

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
                <h3 className='capitalize font-bold text-2xl flex flex-wrap '>
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
    const { t } = useI18n('common');
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
            {t('resume_education_title')}
        </h2>

        <div ref={ref} className='w-[75%] mx-auto relative md:w-full md:mx-0'>
            <motion.div 
                style={{scaleY: scrollYProgress}}
                className='absolute left-14 top-0 w-[4px] h-full bg-primary origin-top' />
            <ul w-full flex flex-col items-start justify-between ml-4>                
                <Details
                        position={t('resume_education_padova_position')} 
                        company={t('resume_education_padova_company')} 
                        companyLink="https://www.unipd.it/en/"
                        time={t('resume_education_padova_time')} 
                        address={t('resume_education_padova_address')} 
                        work={t('resume_education_padova_work')} 
                    />
                    <Details
                        position={t('resume_education_telecom_position')} 
                        company={t('resume_education_telecom_company')}  
                        companyLink="https://www.telecom-st-etienne.fr/en/"
                        time={t('resume_education_telecom_time')} 
                        address={t('resume_education_telecom_address')} 
                        title={t('resume_education_telecom_title')}
                        work={t('resume_education_telecom_work')} 
                    />
                    <Details
                        position={t('resume_education_iut_position')} 
                        company={t('resume_education_iut_company')} 
                        companyLink="https://www.iut.univ-st-etienne.fr/en/index.html"
                        time={t('resume_education_iut_time')} 
                        address={t('resume_education_iut_address')} 
                        title={t('resume_education_iut_title')}
                        work={t('resume_education_iut_work')} 
                    />
                    <Details
                        position={t('resume_education_hs_position')} 
                        company={t('resume_education_hs_company')} 
                        companyLink="https://georges-brassens.ent.auvergnerhonealpes.fr/"
                        time={t('resume_education_hs_time')} 
                        address={t('resume_education_hs_address')} 
                        title={t('resume_education_hs_title')}
                        work={t('resume_education_hs_work')} 
                    />
            </ul>
        </div>
    </div>
  )
}

export default Education