import React from 'react'
import Navbar from  '../components/Navbar'

const Layout = ({children}) => {
    return (
   <div className='bg-black min-h-screen  w-full h-full'>
<Navbar/>
{children}

   </div>
    )
}

export default Layout
