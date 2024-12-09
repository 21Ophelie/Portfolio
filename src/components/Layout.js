import React from 'react'

const Layout = ({children, className=""}) => {
  return (
    <div className={`w-full h-full inline-block z-0 p-4 px-16 sm:px-2 ${className}`}
    >
        {children}
    </div>
  )
}

export default Layout