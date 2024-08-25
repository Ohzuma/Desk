import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <section className=' mt-[9rem] relative  bg-white w-full h-full lg:h-[20rem] footer '>
     <div className='w-full px-[2rem] md:px-[4rem] h-full  py-[3rem]  
     grid grid-cols-1 place-items-start gap-8 place-content-start lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2'>
<div className="footer-items">
    <h3>Site Roadmap</h3>
    <ul className="footer-links">
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/about'}>About</Link></li>
        <li><Link to={'/'}>Community</Link></li>
        <li><Link to={'/blog'}>Blog</Link></li>
     
    </ul>
</div>
<div className="footer-items">
    <h3>Services</h3>
    <ul className="footer-links">
        <li><Link to={'/'}>Content Writting</Link></li>
        <li><a href="/">Advertisement</a></li>
        <li><a href="/">Graphic Design</a></li>
        <li><a href="/">Web Developement</a></li>
    </ul>
</div>
<div className="footer-items">
    <h3>Useful Links</h3>
<ul className="footer-links">
        <li><a href="/">Get Started</a></li>
        <li><a href="/">Login</a></li>
        <li><a href="/">Help</a></li>
        <li><a href="/">Community</a></li>
 
    </ul>
</div>
<div className="footer-items">
    <h3>Search For Article</h3>
    <form action="" className='flex  justify-center items-center w-full h-[3rem] mb-1 border-2 rounded-full border-black  '>
  <input type="text" name="search" id="search" placeholder='Search...'
  className='w-full h-full bg-white   placeholder:text-black/90 rounded-full px-3 text-lg focus:outline-none'  />
    <button type='submit' className='bg-black text-white flex justify-center items-center text-2xl 
 rounded-full h-[3rem] w-[4rem] border-none outline-none '><BiSearch/></button>
</form>
</div>
     </div>

<p className='flext justify-center items-center text-lg text-center px-[1rem] sm:px-[3rem]'>Copyright @ Desk.com 2024</p>

    </section>
  )
}

export default Footer
