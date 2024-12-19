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
    const { t } = useI18n('common');
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
            {t('resume_experiences_title')}</h2>
            

        <div ref={ref} className='w-[75%] mx-auto relative md:w-full md:mx-0'>
            <motion.div 
                style={{scaleY: scrollYProgress}}
                className='absolute left-14 top-0 w-[4px] h-full bg-primary origin-top' />
            <ul w-full flex flex-col items-start justify-between ml-4>                
                <Details
                        position={t('resume_exp_infotel_position')}
                        company={t('resume_exp_infotel_company')}
                        companyLink="https://insoft-infotel.com/"
                        time={t('resume_exp_infotel_time')}
                        address={t('resume_exp_infotel_address')}
                        work={t('resume_exp_infotel_work')}
                    />
                    <Details
                        position={t('resume_exp_tud_position')}
                        company={t('resume_exp_tud_company')}
                        companyLink="https://www.tudublin.ie/"
                        time={t('resume_exp_tud_time')}
                        title={t('resume_exp_tud_title')}
                        address={t('resume_exp_tud_address')}
                        work={t('resume_exp_tud_work')}
                    />
                    <Details
                        position={t('resume_exp_hc_position')}
                        company={t('resume_exp_hc_company')}
                        companyLink="https://laboratoirehubertcurien.univ-st-etienne.fr/en/"
                        time={t('resume_exp_hc_time')}
                        title={t('resume_exp_hc_title')}
                        address={t('resume_exp_hc_address')}
                        work={t('resume_exp_hc_work')}
                    />
                    <Details
                        position={t('resume_exp_asis_position')}
                        company={t('resume_exp_asis_company')}
                        companyLink="https://www.a-sis.com/"
                        time={t('resume_exp_asis_time')}
                        title={t('resume_exp_asis_title')}
                        address={t('resume_exp_asis_address')}
                        work={t('resume_exp_asis_work')}
                    />
            </ul>
        </div>
    </div>
  )
}

export default Experience