import React from 'react'

const Nav = () => {
  return (
    <nav className='bg-white h-[70px] 
    py-[2rem]  flex gap-5 items-center 
    justify-between px-[3rem]'>
      <header>
<a  href='/' className='text-xl font-bold'>Hike.com</a>
      </header>
     <div className='flex items-center gap-[5rem] justify-between'> 
     <ul className='flex gap-8 nav-items'>
        <l1><a href="/">About Us</a></l1>
        <l1><a href="/">Trails</a></l1>
        <l1><a href="/">Guides</a></l1>
        <l1><a href="/">Community</a></l1>
        <l1><a href="/">Blog</a></l1>
      </ul>

      <div className='flex gap-8'> 
        <button className='text-xl font-bold'>Login</button>
        <button className='flex justify-center items-center w-34 
         px-5 bg-black h-10 rounded-3xl text-white'>Get Started</button>
      </div>
     </div>
    </nav>
  )
}

export default Nav
