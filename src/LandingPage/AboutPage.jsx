import React from 'react'
import Vision from './Vision/Vision'
import { ProfileCard } from '../Component/Card'
import pic from '../Asset/img/developer.jpeg'
import { Button } from '../Component/Button'
import { AiTwotoneInfoCircle } from "react-icons/ai";
import { BiUser } from 'react-icons/bi'

const AboutPage = () => {
  return (
    <section className='px-1 sm:px-[1rem] lg:px-[3rem] py-[1rem] '>
    <div className=' flex flex-col  gap-[3rem] '>
 
  
<div className='mt-[3rem]'>
<header className='flex flex-col items-center justify-center py-[3rem]'>
       <h1 className='text-3xl font-bold flex items-center gap-5'> <span><BiUser /></span> Our Team <span><BiUser /></span></h1>
       <p className='text-lg text-center'>Individuals that contributed to this great platform</p>
       </header>
    <div className='grid grid-cols-1 md:grid-cols-2  gap-y-8  gap-5
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
    </div>
    </section>
  )
}

export default AboutPage
