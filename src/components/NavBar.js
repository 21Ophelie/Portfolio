import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import SearchBar from './SearchBar'
import { MailIcon, GithubIcon, LinkedInIcon } from './Icons';
import { motion } from 'framer-motion';

const CustomLink = ({ href, title, className="" }) => {
    const router = useRouter();

    return (
        <Link href={{href}} className={`${className} relative group`}>
            {title}
            <span className={`h-[1px] inline-block bg-light absolute left-0 -bottom-0.5
            group-hover:w-full transition-[width] ease duration-300
            ${router.asPath === href ? 'w-full': 'w-0'}
            `}>
                &nbsp;
            </span>
        </Link>

    )
}

function NavBar() {
  return (
    <header className='w-full text-light px-32 py-8 font-medium flex items-center justify-between'>
        <nav>
            <CustomLink href="/" title="Home" className='mr-4' />
            <CustomLink href="/about" title="About" className='mx-4' />
            <CustomLink href="/projects" title="Projects" className='mx-4' />
            <CustomLink href="/articles" title="Contact" className='ml-4'/>
        </nav>
        <nav className='flex items-center justify-center flex-wrap'>
            <motion.a href="https://fr.linkedin.com/in/ophelie-deschaux" target="(_blank)"
                whileHover={{y:-2}} 
                whileTap={{scale:0.9}}
                className='w-6 mr-3'>
                <LinkedInIcon/>
            </motion.a>
            <motion.a href="https://github.com/21Ophelie" target="(_blank)"  
                whileHover={{y:-2}} 
                whileTap={{scale:0.9}}
                className='w-6 mx-3'>
                <GithubIcon/>
            </motion.a>
        </nav>
        <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
            <SearchBar/>
        </div>
    </header>
  )
}

export default NavBar