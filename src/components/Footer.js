import React from 'react'
import Layout from './Layout'
import Link from 'next/link'
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid text-light border-light font-medium text-lg'>
        <Layout className='py-8 flex items-center justify-between'>
            <span>{new Date().getFullYear()} &copy; All Rights reserved.</span>
            <div>
              Portfolio inspired by&nbsp;
              <motion.a 
                className='underline underline-offset-2' 
                href="https://devdreaming.com/"  target="(_blank)"
                whileHover={{y:-2, transition: { duration:1 }}}>
                  <span>CodeBucks</span>                   
              </motion.a>
            </div>
            <div>Have a good day <span className='text-primary text-2xl px-1'>&#9728;</span> </div>
        </Layout>
    </footer>
  )
}

export default Footer