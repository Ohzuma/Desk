import React, { useEffect, useState } from 'react'
import { BiSearch } from 'react-icons/bi';
import { FiMenu } from "react-icons/fi";
import {Link} from 'react-router-dom'



const Nav = () => {
  const [open,setOpen] = useState(false)
  return (
    <nav className='bg-white h-[70px] shadow-xl  w-full   
    py-[2rem]  flex gap-5 items-center 
    justify-between px-3 md:px-[3rem] fixed top-0  z-[999]'>
      <header>
<a  href='/' className='text-xl font-bold'>Desk.com</a>
      </header>
     <div className={`flex absolute z-[999] transition-all lg:left-0 w-[15rem] px-[2rem] lg:px-0 lg:w-auto top-4 lg:top-0 h-screen lg:h-0
     lg:relative lg:flex items-start lg:items-center gap-[4rem] lg:gap-[5rem] 
     lg:flex-row 
     flex-col justify-center lg:justify-between
      bg-white  lg:shadow-none lg:bg-transparent ' ${open?'left-0':'-left-[40rem]'}`}> 

     <ul className='flex lg:flex-row flex-col  gap-8 nav-items'>
     <form action="" className='hidden relative  justify-center items-center max-w-[20rem] w-full md:w-[20rem] h-[2.5rem] mb-1 border-2 rounded-full border-black  '>
  <input type="text" name="search" id="search" placeholder='Search...'
  className='w-full h-full bg-white outline-none border-none  placeholder:text-black/90 rounded-full px-3 text-lg focus:outline-none'  />
    <button type='submit' className='bg-black text-white  flex justify-center items-center text-2xl 
 rounded-full h-[2.5rem] w-[5rem] border-none outline-none '><BiSearch/></button>
</form>
        <l1  onClick={()=> setOpen(false)} ><Link to="/">Home</Link></l1>
        <l1  onClick={()=> setOpen(false)} ><Link to="/article">Articles</Link></l1>
        <l1  onClick={()=> setOpen(false)} ><Link to="https://chat.whatsapp.com/DYhdoyXLbJb6p4brUGWH0f" target='_blank'>Community</Link></l1>
        
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
