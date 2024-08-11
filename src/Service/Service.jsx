import React from 'react'
import { RiCustomerServiceLine } from "react-icons/ri";
import writter from '../Asset/img/writter.jpeg'
import Graphic from '../Asset/img/graphics.jpeg'
import Developer from '../Asset/img/developer.jpeg'


import { Card } from '../Component/Card'
const Service = () => {
  return (
    <section className='px-[1rem] sm:px-[3rem] py-[4rem]  service'>
       <header className='flex flex-col items-center justify-center py-[3rem]'>
       <h1 className='text-3xl font-bold flex items-center gap-5 '><span><RiCustomerServiceLine /></span> Our Services <span><RiCustomerServiceLine /></span> </h1>
       <p className='text-lg text-center'>Get In Touch With Us For Any Of Our Service</p>
       </header>
    <div className='grid grid-cols-1 gap-5 lg:gap-0 sm:grid-cols-2 lg:grid-cols-3  place-items-centers'>

<Card pic={writter} title={'Content Writting'} 
desc={`Lorem ipsum dolor, sit amet consectetur 
adipisicing elie  Quo deserunt blanditiis ex
 cum repudiandae et, distinctio`}/>

   <Card pic={Developer} title={'Web Development'} 
desc={`Lorem ipsum dolor, sit amet consectetur 
adipisicing elie  Quo deserunt blanditiis ex
 cum repudiandae et, distinctio`}/>

 <Card pic={Graphic} title={'Graphic Design'} 
desc={`Lorem ipsum dolor, sit amet consectetur 
adipisicing elie  Quo deserunt blanditiis ex
 cum repudiandae et, distinctio`}/>  

    
     
    </div>
   </section>
  )
}

export default Service
