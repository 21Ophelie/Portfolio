import React from 'react'
import { motion } from 'framer-motion'

const Skill = ({name, x, y, color='secondary'}) => {
    return (
        <motion.div 
            className={`flex py-3 px-6 items-center justify-center rounded-full font-semibold bg-${color} text-light p-8 shadow-${color} cursor-pointer absolute`}
           
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
        <h2 className='font-bold text-8xl my-8 w-full text-center'>Skills</h2>
        <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>
            <Skill name="Web" x="0" y="0"/>
            <Skill name="CSS" x="-5vw" y="-10vw"/>
            <Skill name="HTML" x="-15vw" y="3vw"/>
            <Skill name="TypeScript" x="20vw" y="6vw"/>
            <Skill name="ReactJS" x="-10vw" y="10vw"/>
            <Skill name="NextJS" x="-27vw" y="-13vw"/>
            <Skill name="Angular" x="15vw" y="-12vw"/>
            <Skill name="Figma" x="34vw" y="-5vw"/>
            <Skill name="Tailwind CSS" x="3vw" y="-18vw"/>
            <Skill name="Java" x="-25vw" y="13vw"/>
            <Skill name="REST API" x="-31vw" y="-20vw"/>
            <Skill name="Documentation" x="18vw" y="19vw"/>

            <Skill name="Active Listening" x="-32vw" y="5vw" color="primary"/>
            <Skill name="Teamwork" x="35vw" y="-17vw" color="primary"/>
            <Skill name="Creativity" x="-30vw" y="20vw" color="primary"/>
            <Skill name="Multitasking" x="5vw" y="10vw" color="primary"/>
            <Skill name="Flexibility" x="-40vw" y="-5vw" color="primary"/>
            <Skill name="Stress Management" x="20vw" y="-1vw" color="primary"/>
            <Skill name="Motivation" x="-14vw" y="-16vw" color="primary"/>
            <Skill name="Attention to Detail" x="-20vw" y="-5vw" color="primary"/>
            <Skill name="Planning" x="36vw" y="12vw" color="primary"/>
            <Skill name="Positivity +=+" x="-7vw" y="18vw" color="primary"/>
        </div>       
    
    </>
  )
}

export default Skills