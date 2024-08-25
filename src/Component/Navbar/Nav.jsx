import React, { useEffect, useState } from 'react'
import { FiMenu } from "react-icons/fi";
import {Link} from 'react-router-dom'
const Nav = () => {



  const [open,setOpen] = useState(false)

  return (
    <nav className='bg-white h-[70px]  w-full relative
    py-[2rem]  flex gap-5 items-center 
    justify-between px-[1rem] md:px-[3rem] z-50 '>
      <header>
<a  href='/' className='text-xl font-bold'>Desk.com</a>
      </header>
     <div className={`flex absolute transition-all lg:left-0 w-[15rem] px-[2rem] lg:px-0 lg:w-auto top-4 lg:top-0 h-screen lg:h-0
     lg:relative lg:flex items-start lg:items-center gap-[4rem] lg:gap-[5rem] 
     lg:flex-row 
     flex-col justify-center lg:justify-between
      bg-white  lg:shadow-none lg:bg-transparent ${open?'left-0':'-left-[40rem]'}`}> 

     <ul className='flex lg:flex-row flex-col  gap-8 nav-items'>
        <l1  onClick={()=> setOpen(false)} ><Link to="/">Home</Link></l1>
        {/* <l1><Link to="about">About Us</Link></l1> */}
        <l1  onClick={()=> setOpen(false)} ><Link to="/blog">Articles</Link></l1>
        <l1  onClick={()=> setOpen(false)} ><Link to="/">Community</Link></l1>
        
      </ul>

      <div className='flex flex-start flex-col lg:flex-row gap-8'> 
        <Link onClick={()=> setOpen(false)} to={'/login'} className=' flex items-start justify-start  text-xl md:text-lg font-thin'>Login</Link>
        <Link  onClick={()=> setOpen(false)}  to={'/signup'} className='flex text-lg font-medium justify-center items-center w-34 
         px-5 bg-black h-10 rounded-3xl text-white'>Get Started</Link>
      </div>
     </div>

     <div id='hamburger' className='lg:hidden  block text-black cursor-pointer'   onClick={()=> setOpen(!open)}>
   <span className='text-2xl hamburger'>  <FiMenu />
   </span>
     </div>
    </nav>
  )
}

export default Nav
