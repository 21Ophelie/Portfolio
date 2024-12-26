import React from 'react'
import { motion, useScroll } from 'framer-motion'

const LiIcon = ({reference}) => {
    const {scrollYProgress} = useScroll( 
        {
            target: reference,
            offset: ["center end", "center center"]
        }
    );
  return (
    <figure className='absolute left-0 sm:left-[-38px] stroke-primary'>
        <svg className='-rotate-90' width="75" height="75" viewBox='0 0 100 100' >
            <circle cx="75" cy="75" r="10" className='stroke-primary stroke-1 fill-light'/>
            <motion.circle cx="75" cy="75" r="10" className='stroke-[6px] fill-light'
            style = {{
                pathLength: scrollYProgress
            }}/>
            <circle cx="75" cy="75" r="4" className='stroke-light fill-light'/>
        </svg>
    </figure>
  )
}

export default LiIcon