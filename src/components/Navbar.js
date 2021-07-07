import React, {useState} from 'react'
import styled from 'styled-components'
import {NavLink, Link} from 'react-router-dom'
import SearchInput from './SearchInput'
import Menu from './Menu'


const Navbar = () => {


    const [searchOpen, setSearchOpen]=useState(false)
    const [menuOpen, setMenuOpen]=useState(false)

    const toggleMenu = ()=>{
        setMenuOpen(!menuOpen)
        console.log(menuOpen)

    }

    const searchOpenFunc =()=>{

        setSearchOpen(true)

}


const closeSearch =()=>{
    setSearchOpen(false)

}

    return (
        <div className='w-full bg-black h-16  flex flex-row  justify-between gap-5 px-5 py-3'>
            <Header className=' w-20 h-6 '>

<Link className='w-full h-full  cursor-pointer' to='/'><img className='w-full h-full ' src="https://res.cloudinary.com/austinogiza/image/upload/v1625685328/on_platform_logo_dark_xevjko.svg" alt="youtube music logo" /></Link>
            </Header>

<Header className={`${searchOpen ? "max-w-2xl w-full": "max-w-md w-full"} `}>
{searchOpen ?

<>

<SearchInput click={closeSearch}/>
</>:

<>
<ul className=' flex flex-row justify-between mx-3.5'>

    <li className=' font-bold text-xl text-gray-500'><NavLink activeClassName='text-white' to='/' exact>Home</NavLink></li>
    
    <li  className=' font-bold text-xl  text-gray-500'><NavLink activeClassName='text-white' exact to='/explore'>Explore</NavLink></li>
    
    <li  className='font-bold text-xl text-gray-500'><NavLink activeClassName='text-white' exact to="/library/playlists" >Library</NavLink></li>
    <li onClick={searchOpenFunc}  className='font-bold text-xl text-gray-500'><p className='cursor-pointer focus:text-white hover:text-white transition flex flex-row'><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-3.5  mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
</svg> Search</p></li>
</ul>


</>

}

</Header>

<Header onClick={toggleMenu} className='rounded-full  justify-self-end'>
 <div className='w-6 h-6 cursor-pointer rounded-full'>
 <img className=' w-full h-full rounded-full' src="https://res.cloudinary.com/austinogiza/image/upload/v1625685328/unnamed_3_cx2cok.jpg" alt="youtube user avi" />
 </div>
</Header>

{menuOpen && <Menu/>

}

        </div>
    )
}


const Header = styled.div``

export default Navbar
