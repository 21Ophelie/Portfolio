import React, { useState } from 'react'
import { Link } from './_shared/Link';
import { useRouter } from 'next/router';
import SearchBar from './SearchBar'
import { GithubIcon, LinkedInIcon } from './Icons';
import { motion } from 'framer-motion';
import { LanguageSwitcher } from './LanguageSwitcher';
import { i18nConfig } from '../../i18n';
import { useRouteRedirect } from '@/hooks/useRouteRedirect';
import { useI18n } from '@/hooks/useI18n';

const CustomLink = ({ href, title, className = "" }) => {
    const router = useRouter();

    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`h-[2px] inline-block bg-light absolute left-0 -bottom-0.5
            group-hover:w-full transition-[width] ease duration-300
            ${router.asPath === '/' + router.query['locale'] + (String(href).length > 1 ? href : '') ? 'w-full' : 'w-0'}
            `}>
                &nbsp;
            </span>
        </Link>

    )
}

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
    const router = useRouter();
    const { redirect } = useRouteRedirect();

    const handleClick = () => {
        toggle();
        redirect(href);
    }

    return (
        <button href={href} className={`${className} relative group my-2`} onClick={handleClick}>
            {title}
            <span className={`
            h-[2px] inline-block bg-light absolute left-0 -bottom-0.5
            group-hover:w-full transition-[width] ease duration-300
            ${router.asPath === '/' + router.query['locale'] + (String(href).length > 1 ? href : '') ? 'w-full' : 'w-0'}
            `}>
                &nbsp;
            </span>
        </button>

    )
}

function NavBar() {

    const { t } = useI18n('common');
    const [isOpen, setIsOpen] = useState(false);
    const handleMenuClick = () => {
        setIsOpen(!isOpen);
    }
    return (
        <header className='w-full text-light px-32 lg:px-5 xs:px-2 py-8 font-medium flex items-center justify-between relative lg:fixed
            lg:z-50'>

            <button className='flex-col justify-center items-center hidden lg:flex' 
                    onClick={handleMenuClick}>
                <span className={`bg-other block h-0.5 w-6 rounded-sm transition-all duration-300
                 ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-other block h-0.5 w-6 rounded-sm my-0.5 transition-all duration-300 
                    ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-other block h-0.5 w-6 rounded-sm transition-all duration-300
                 ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </button>

            <div className='w-full flex justify-between items-center lg:hidden'>
                <nav>
                    <CustomLink href="/" title={t('navbar_home')} className='text-light mr-4' />
                    <CustomLink href="/about" title={t('navbar_about')} className='mx-4' />
                    <CustomLink href="/resume" title={t('navbar_resume')} className='mx-4' />
                    <CustomLink href="/contact" title={t('navbar_contact')} className='ml-4' />
                </nav>
                <nav>
                    <div style={{ display: "flex", gap: "1rem" }}>
                        {i18nConfig.locales.map((locale) => (
                        <LanguageSwitcher key={locale} locale={locale} />
                        ))}
                    </div>
                </nav>
                <nav className='flex items-center justify-center flex-wrap'>
                    <motion.a href="https://fr.linkedin.com/in/ophelie-deschaux" target="(_blank)"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className='w-6 mr-3'>
                        <LinkedInIcon />
                    </motion.a>
                    <motion.a href="https://github.com/21Ophelie" target="(_blank)"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className='w-7 mx-3'>
                        <GithubIcon />
                    </motion.a>
                </nav>
            </div>
         {
            isOpen ? 
            <div className='z-30 min-w-[50vw] flex flex-col justify-between items-center 
            fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            bg-light/20 rounded-lg backdrop-blur-md py-32'>
                <nav className='flex flex-col items-center justify-center'>
                    <CustomMobileLink href="/" title={t('navbar_home')} className='' toggle={handleMenuClick}/>
                    <CustomMobileLink href="/about" title={t('navbar_about')} className='' toggle={handleMenuClick}/>
                    <CustomMobileLink href="/resume" title={t('navbar_resume')} className='' toggle={handleMenuClick}/>
                    <CustomMobileLink href="/contact" title={t('navbar_contact')} className='' toggle={handleMenuClick}/>
                </nav>
                <nav>
                    <div style={{ display: "flex", gap: "1rem" }}>
                        {i18nConfig.locales.map((locale) => (
                        <LanguageSwitcher key={locale} locale={locale} />
                        ))}
                    </div>
                </nav>
                <nav className='flex items-center justify-center flex-wrap mt-2'>
                    <motion.a href="https://fr.linkedin.com/in/ophelie-deschaux" target="(_blank)"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className='w-6 mr-3 bg-tertiary rounded-full sm:mx-1'>
                        <LinkedInIcon />
                    </motion.a>
                    <motion.a href="https://github.com/21Ophelie" target="(_blank)"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className='w-6 mx-3 bg-tertiary rounded-full sm:mx-1'>
                        <GithubIcon />
                    </motion.a>
                </nav>
            </div> : null
         }

            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                <SearchBar />
            </div>
        </header>
    )
}

export default NavBar