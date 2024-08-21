import React from 'react'
import About from '../LandingPage/About/About'
import Vision from '../LandingPage/Vision/Vision'
import { ProfileCard } from '../Component/Card'
import pic from '../Asset/img/developer.jpeg'


const AboutPage = () => {
  return (
    <section className='px-[1rem] sm:px-[3rem] py-[3rem] '>
    <div className=' flex flex-col  gap-[3rem] '>
<h1 className='text-2xl font-bold flex 
 text-black text-center justify-center items-center'>About Us</h1>
 <About/>
 
<div className='mt-[5rem]'>

<h1 className='text-2xl font-bold flex 
 text-black text-center justify-center items-center mb-[3rem]'>Our Team</h1>
    <div className='grid grid-cols-1 md:grid-cols-3  gap-y-8
    lg:grid-cols-3 gap-2 md:gap-5 place-content-center justify-items-center place-items-center '>
       <ProfileCard pic={pic} name={'John Doe'} 
       desc={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, quo?'}
       fb={'@johnDoe'}
       ig={'@Doejohn1'}
       x={'@johndoe001'}
       />

<ProfileCard pic={pic} name={'John Doe'} 
       desc={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, quo?'}
       fb={'@johnDoe'}
       ig={'@Doejohn1'}
       x={'@johndoe001'}
       />

<ProfileCard pic={pic} name={'John Doe'} 
       desc={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, quo?'}
       fb={'@johnDoe'}
       ig={'@Doejohn1'}
       x={'@johndoe001'}
       />
       </div>
</div>

<Vision/>
    </div>
    </section>
  )
}

export default AboutPage
