import React from 'react'
import Layout from './Layout'
import { motion } from 'framer-motion';
import { useI18n } from '@/hooks/useI18n';


function Footer() {
  const { t } = useI18n('common');
  return (
    <footer className='w-full border-t-2 border-solid text-light border-light font-medium text-base lg:text-sm sm:text-xs xs:text-[10px]'>
        <Layout className='py-8 mt-8 gap-4 lg:mt-6 sm:mt-0 sm:!px-8 flex items-center justify-between'>
            <span>{new Date().getFullYear()} &copy; {t('footer_rights')}</span>
            <div>
              {t('footer_inspired')}&nbsp;
              <motion.a 
                className='underline underline-offset-2' 
                href="https://devdreaming.com/"  target="(_blank)"
                whileHover={{y:-2, transition: { duration:1 }}}>
                  <span>CodeBucks</span>                   
              </motion.a>
            </div>
            <div>{t('footer_goodday')}<span className='text-primary text-2xl px-1'>&#9728;</span> </div>
        </Layout>
    </footer>
  )
}

export default Footer