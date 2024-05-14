import React from 'react'
import { CircularText } from './Icons'
import Link from 'next/link'
import { motion } from 'framer-motion';

const MotionLink = motion(Link);
const HireMe = () => {
  return (
    <div className='fixed right-14 bottom-4 flex items-center justify-center overflow-hidden'>
        <div className='w-48 h-auto flex items-center justify-center relative'>
            <CircularText className={"fill-dark animate-spin-slow"}></CircularText>
            <MotionLink 
                href="mailto:ophelie.deschaux@gmail.com" 
                className='w-24 h-24 text-dark bg-primary bg- flex items-center 
                rounded-full justify-center absolute text-center
                left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-base font-semibold'
                 
                whileHover={{
                    backgroundColor:[
                        "#C4FCF0",
                        "#62b9a7",
                        "#00755D",
                        "#80AE85",
                        "#FFE7AD",
                        "#B3C19F",
                        "#669B90",
                        "#95CCC0",
                        "#C4FCF0",
                       ],
                    transition: { duration:1, repeat:Infinity }
                }}
            >
                <span className='p-2 font-bold text-sm'>CONTACT ME</span>
            </MotionLink>
           


        </div>
    </div>
  )
}

export default HireMe