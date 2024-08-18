import React from 'react'

const Footer = () => {
  return (
    <section className=' mt-[9rem] relative   w-full h-full lg:h-[20rem] footer '>
     <div className='w-full px-[1rem] md:px-[4rem] h-full  py-[3rem]  
     grid grid-cols-1 gap-8 place-content-center lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2'>
<div className="footer-items">
    <h3>Site Roadmap</h3>
    <ul className="footer-links">
        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Community</a></li>
        <li><a href="/">Blog</a></li>
     
    </ul>
</div>
<div className="footer-items">
    <h3>Services</h3>
    <ul className="footer-links">
        <li><a href="/">Content Writting</a></li>
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
    <h3>Subscribe for newsLetter</h3>
    <form action="">
        <input type="text" placeholder='email address' className='w-full h-[2.5rem] px-3 rounded-lg 
        border-none outline-neutral-900 outline outline-2 text-lg text-gray-300' />
    </form>
</div>
     </div>

<p className='flext justify-center items-center text-lg text-center px-[1rem] sm:px-[3rem]'>Copyright @ Desk.com 2024</p>

    </section>
  )
}

export default Footer
