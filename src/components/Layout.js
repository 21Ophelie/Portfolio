import React from 'react'

const Layout = ({children, className=""}) => {
  return (
    <div className={`w-full h-full z-0 p-4 px-16 xs:px-10 lg:mt-16 ${className}`}
    >
        {children}
    </div>
  )
}

export default Layout