import React, { useState } from 'react'
import { FiMenu } from "react-icons/fi";
import {Link} from 'react-router-dom'
const Nav = () => {
  const [open,setOpen] = useState(false)
  return (
    <nav className='bg-white h-[70px]  w-full
    py-[2rem]  flex gap-5 items-center 
    justify-between px-[1rem] md:px-[3rem] z-50 relative'>
      <header>
<a  href='/' className='text-xl font-bold'>Desk.com</a>
      </header>
     <div className={`flex absolute transition-all md:left-0 w-[15rem] px-[2rem] md:px-0 md:w-auto top-4 md:top-0 h-screen md:h-0
     md:relative md:flex items-start md:items-center gap-[4rem] md:gap-[5rem] 
     md:flex-row 
     flex-col justify-center md:justify-between
      bg-white  md:shadow-none md:bg-transparent ${open?'left-0':'-left-[40rem]'}`}> 

     <ul className='flex md:flex-row flex-col  gap-8 nav-items'>
        <l1><Link to="/">Home</Link></l1>
        <l1><Link to="about">About Us</Link></l1>
        <l1><Link to="/blog">Blog</Link></l1>
        <l1><Link to="/">Community</Link></l1>
        
      </ul>

      <div className='flex flex-start flex-col md:flex-row gap-8'> 
        <button className=' flex items-start justify-start  text-xl md:text-lg font-thin'>Login</button>
        <button className='flex text-xl font-medium justify-center items-center w-34 
         px-5 bg-black h-10 rounded-3xl text-white'>Get Started</button>
      </div>
     </div>

     <div className='md:hidden block text-black cursor-pointer hover:rotate-90 transition-all hover:transition-all'   onClick={()=> setOpen(!open)}>
   <span className='text-2xl'>  <FiMenu />
   </span>
     </div>
    </nav>
  )
}

export default Nav
