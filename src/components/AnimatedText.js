import { animate, motion } from 'framer-motion'
import React from 'react'

const quote = {
    initial: {
        opacity:1
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.08
        }
    }
}

const singleWord = {
    initial: {
        opacity:0,
        y:50
    },
    animate: {
        opacity: 1,
        y:0,
        transition: {
            duration: 1
        }
    }
}

const AnimatedText = ({text, className=""}) => {
  return (
    <div className='w-full mx-auto py-2 px-6 sm:px-2 flex items-center justify-center text-center overflow-hidden'>
        <motion.h1 className={`inline-block text-light font-bold capitalize text-8l ${className}`}
            variants={quote} initial="initial" animate="animate"
        >
            {
                text.split(" ").map((word, index) => 
                <motion.span key={word + '-' + index} className='inline-block'
                variants={singleWord}>
                    {word}&nbsp;
                </motion.span>
                )
                
            }
        </motion.h1>
    </div>
  )
}

export default AnimatedText