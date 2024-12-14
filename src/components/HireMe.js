import React from 'react'
import { CircularText } from './Icons'
import Link from 'next/link'
import { motion } from 'framer-motion';

const MotionLink = motion(Link);
const HireMe = () => {
  return (
    <div className='z-40 absolute bottom-2 right-10 flex overflow-hidden items-center justify-center lg:right-6 lg:bottom-auto lg:-top-0'>
        <div className='w-48 lg:w-[90px] overflow-hidden h-auto flex items-center justify-center relative'>
            <CircularText className={"fill-light animate-spin-slow"}></CircularText>
            <MotionLink 
                href="mailto:ophelie.deschaux@gmail.com" 
                className='w-24 h-24 lg:w-12 lg:h-12 text-light bg-other flex items-center 
                rounded-full justify-center absolute text-center
                left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-base font-semibold'
                 
                whileHover={{
                    backgroundColor:[
                        "#a29607",
                        "#2f6674",
                        "#a25107",
                        "#5b0045",
                        "#71115a",
                        "#a29607",
                       ],
                    transition: { duration:1, repeat:Infinity }
                }}
            >
            <span className='p-2 font-bold text-sm lg:text-xs lg:text-[9px]'>Contact me</span>
            </MotionLink>
        </div>
    </div>
  )
}

export default HireMe