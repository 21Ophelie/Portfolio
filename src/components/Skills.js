import React from 'react'
import { motion } from 'framer-motion'

const Skill = ({name, x, y, color='light', textColor='primary'}) => {
    return (
        <motion.div 
            className={`flex py-3 px-6 items-center justify-center rounded-full font-semibold bg-${color} backdrop-blur text-${textColor} p-8 shadow-${color} lg:text-sm md:text-xs cursor-pointer absolute`}
           
            whileHover={{scale:1.05}}
            initial={{x:0, y:0}}
            whileInView={{x:x, y:y}}
            transition={{duration:1.5}}
            viewport={{once:true}}
        >
            {name}
        </motion.div>
    )
}

const Skills = () => {
  return (
    <>
        <h2 className='text-primary bg-light/75 backdrop-blur rounded-lg font-bold text-6xl py-2 lg:text-4xl my-8 mb-16 w-full text-center'>Skills</h2>
        <div className='w-full h-screen lg:h-[80vh] sm:h-[55vh] xs:h-[50vh] relative flex items-center justify-center rounded-full bg-circularLight lg:bg-lgCircularLight mt-4'>
            <Skill name="CSS" x="-26vw" y="-17vw"/>
            <Skill name="HTML" x="-8vw" y="-8vw"/>
            <Skill name="TypeScript" x="18vw" y="-21vw"/>
            <Skill name="ReactJS" x="0vw" y="0vw"/>
            <Skill name="NextJS" x="-23vw" y="0vw"/>
            <Skill name="Angular" x="23vw" y="-7vw"/>
            <Skill name="Figma" x="8vw" y="-13vw"/>
            <Skill name="Java" x="-13vw" y="11vw"/>
            <Skill name="REST API" x="-30vw" y="19vw"/>
            <Skill name="WordPress" x="13vw" y="20vw"/>

            <Skill name="Active Listening" x="-32vw" y="-9vw" color="primary" textColor="light"/>
            <Skill name="Teamwork" x="32vw" y="-13vw" color="primary" textColor="light"/>
            <Skill name="Creativity" x="-10vw" y="19vw" color="primary" textColor="light"/>
            <Skill name="Flexibility" x="-35vw" y="9vw" color="primary" textColor="light"/>
            <Skill name="Stress Management" x="13vw" y="11vw" color="primary" textColor="light"/>
            <Skill name="Motivation" x="-8vw" y="-21vw" color="primary" textColor="light"/>
            <Skill name="Attention to Detail" x="32vw" y="2vw" color="primary" textColor="light"/>
            <Skill name="Planning" x="33vw" y="17vw" color="primary" textColor="light"/>
        </div>       
    
    </>
  )
}

export default Skills