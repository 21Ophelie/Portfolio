import React from 'react'

const Layout = ({children, className=""}) => {
  return (
    <div className={`w-full h-full z-0 p-4 px-16 lg:px-12 md:px-8 xs:px-5 lg:mt-16 ${className}`}
    >
        {children}
    </div>
  )
}

export default Layout