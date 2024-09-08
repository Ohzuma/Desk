import React from 'react'
import pic from '../../Asset/img/vision.jpg'
import {Button} from '../../Component/Button'
import { BiRevision } from 'react-icons/bi'
const Vision = () => {
  return (
    <section className='px-3 sm:px-[3rem] py-[1rem] bg-white w-full '>
   <header className='flex flex-col items-center justify-center py-[3rem] w-full'>
       <h1 className='text-[2rem] sm:text-[3rem] font-bold flex items-center gap-5'> <span><BiRevision /></span> Our Vision <span><BiRevision /></span></h1>
       <p className='text-3xl text-center'>Our vision why this platform is created</p>
       </header>
   
     <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center place-content-center justify-items-center'>
        <div data-aos="zoom-in-right" className=' h-[25rem] w-full md:h-[30rem] sm:w-full md:max-w-full rounded-[2rem]'>
            <img src={pic} alt="about our company" className='h-full w-full rounded-[1rem] object-cover' />
        </div>
        <div data-aos="zoom-in-left" className='flex flex-col gap-5'>
            <h1 className='text-3xl font-bold'>Our Vision</h1>
            <p className='text-[1rem] md:text-lg break-all'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
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
  )
}

export default Vision
