import React from 'react'
import About from './About/About';
import Service from './Service/Service';
import Blog from './Blog/Blog';
import Contact from './Contact/Contact';
import Index from './Homepage/index'
import Vision from './Vision/Vision';
import AboutPage from './AboutPage';
 
const LandingPage = () => {
  return (
    <div>
      <Index/>
      <About mt={'mt-[7rem]'}/>
      <AboutPage/>
      <Blog/>
      <Vision/>
      <Service/>
      <Contact/>
    </div>
  )
}

export default LandingPage
