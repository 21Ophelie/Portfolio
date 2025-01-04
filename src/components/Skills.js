import React from 'react'
import { motion } from 'framer-motion'
import { useI18n } from '@/hooks/useI18n';
import { useState, useEffect } from 'react';

const Skill = ({name, x, y, color='light', textColor='primary'}) => {

    const [adjustedY, setAdjustedY] = useState(y);

    useEffect(() => {
        const updateValues = () => {
            if (window.matchMedia("(max-width: 479px)").matches) {
                let addValue = parseFloat(y) * 0.1 ;
                if ( parseFloat(y) < 0) {
                    addValue = -addValue-2;
                } else {
                    addValue = -addValue+2;
                }
                setAdjustedY(parseFloat(y) * (window.innerHeight / 100) + addValue * (window.innerHeight / 100));
            } else {
                setAdjustedY(y);
            }
        };

        // Initial check
        updateValues();

        // Add event listener for window resize
        window.addEventListener("resize", updateValues);

        // Cleanup event listener on component unmount
        return () => window.removeEventListener("resize", updateValues);
    }, [y]);


    return (
        <motion.div 
            className={`flex py-3 px-6 items-center justify-center rounded-full font-semibold bg-${color} backdrop-blur text-${textColor} p-8 
            shadow-${color} lg:text-sm md:text-xs xs:text-[10px] cursor-pointer absolute`}
           
            whileHover={{scale:1.05}}
            initial={{x:0, y:0}}
            whileInView={{x:x, y:adjustedY}}
            transition={{duration:1.5}}
            viewport={{once:true}}
        >
            {name}
        </motion.div>
    )
}

function Skills() {

  const { t } = useI18n('common');
  return (
    <>
        <h2 className='text-primary bg-light/75 backdrop-blur rounded-lg font-bold text-6xl py-2 lg:text-4xl my-8 mb-16 xs:mb-12 w-full text-center'>Skills</h2>
        <div className='w-full h-screen lg:h-[80vh] sm:h-[55vh] xs:h-[45vh] relative flex items-center justify-center rounded-full bg-circularLight lg:bg-lgCircularLight mt-4 mb-11'>
            <Skill name={t('resume_skills_css')} x="-26vw" y="-17vw"/>
            <Skill name={t('resume_skills_html')} x="-8vw" y="-8vw" />
            <Skill name={t('resume_skills_reactjs')} x="18vw" y="-21vw" />
            <Skill name={t('resume_skills_typescript')} x="0vw" y="0vw" />
            <Skill name={t('resume_skills_nextjs')} x="-23vw" y="0vw" />
            <Skill name={t('resume_skills_angular')} x="23vw" y="-7vw" />
            <Skill name={t('resume_skills_figma')} x="8vw" y="-13vw" />
            <Skill name={t('resume_skills_java')} x="-13vw" y="11vw" />
            <Skill name={t('resume_skills_rest_api')} x="-30vw" y="19vw" />
            <Skill name={t('resume_skills_wordpress')} x="13vw" y="20vw" />

            <Skill name={t('resume_skills_active_listening')} x="-32vw" y="-9vw" color="primary" textColor="light" />
            < Skill name={t('resume_skills_teamwork')} x="32vw" y="-13vw" color="primary" textColor="light" />
            <Skill name={t('resume_skills_creativity')} x="-10vw" y="19vw" color="primary" textColor="light" />
            <Skill name={t('resume_skills_flexibility')} x="-35vw" y="9vw" color="primary" textColor="light" />
            <Skill name={t('resume_skills_management')} x="13vw" y="11vw" color="primary" textColor="light" />
            <Skill name={t('resume_skills_motivation')} x="-8vw" y="-21vw" color="primary" textColor="light" />
            <Skill name={t('resume_skills_planning')} x="33vw" y="17vw" color="primary" textColor="light" />
        </div>       
    
    </>
  )
}

export default Skills