import React from 'react'
import About from '../LandingPage/About/About'
import Vision from '../LandingPage/Vision/Vision'
import { ProfileCard } from '../Component/Card'
import pic from '../Asset/img/developer.jpeg'
import { Button } from '../Component/Button'
import { AiTwotoneInfoCircle } from "react-icons/ai";

const AboutPage = () => {
  return (
    <section className='px-1 sm:px-[1rem] lg:px-[3rem] py-[1rem] '>
    <div className=' flex flex-col  gap-[3rem] '>
{/* <h1 className='text-2xl font-bold flex 
 text-black text-center justify-center items-center'>About Us</h1>
 <About/> */}
 <section className='px-[1rem] sm:px-[3rem]  '>
   <header className='flex flex-col items-center justify-center py-[3rem]'>
       <h1 className='text-3xl font-bold flex items-center gap-5'> <span><AiTwotoneInfoCircle /></span> About Us <span><AiTwotoneInfoCircle /></span></h1>
       <p className='text-lg text-center'>Get to know more about us</p>
       </header>
   
     <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center place-content-center justify-items-center'>
        <div className=' h-[25rem] w-full md:h-[30rem]  rounded-lg'>
            <img src={pic} alt="about our company" className='h-full w-full rounded-[1rem] object-cover' />
        </div>
        <div className='flex flex-col gap-5'>
            <h1 className='text-3xl font-bold'>About us</h1>
            <p className='text-lg break-all'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Quo deserunt blanditiis ex cum repudiandae et, distinctio
                 fugit quidem obcaecati molestias numquam perspiciatis delectus 
                 similique natus quae veritatis, magnam soluta quia officia iure
                  cumque, debitis facere! A, ipsum? Cupiditate, molestias 
                fuga! Tempore reprehenderit error dolorum rem, laborum omnis vel 
                ab. Beatae.</p>
               <Button   text={'Join Our Community'}/>
        </div>
     </div>
    </section>
<div className='mt-[5rem]'>

<h1 className='text-2xl font-bold flex 
 text-black text-center justify-center items-center mb-[3rem]'>Our Team</h1>
    <div className='grid grid-cols-1 md:grid-cols-2  gap-y-8 px-2 gap-5
    lg:grid-cols-3  md:gap-5 place-content-center justify-items-center place-items-center '>
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
