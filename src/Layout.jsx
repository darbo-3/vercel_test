import React from 'react'

const Layout = ({children}) => {
  return (
    <div className='min-h-screen  bg-gradient-to-r  from-slate-900 via-sky-950 to-slate-900 text-white'>
        {children}
    </div>
  )
}

export default Layout