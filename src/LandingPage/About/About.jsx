import React from 'react'
import pic from '../../Asset/img/about.jpg'
import {Button} from '../../Component/Button'
const About = ({mt}) => {
  return (
    <section  className={`about px-[1rem] sm:px-[3rem] py-[1rem] ${mt}`}>
     <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center place-content-center justify-items-center'>
        <div data-aos="zoom-in-left" className=' mb-[5rem] h-[25rem] w-full md:h-[30rem] sm:w-full md:max-w-full rounded-[2rem]'>
            <img src={pic} alt="about our company" className='h-full w-full rounded-[1rem] object-cover' />
        </div>
        <div data-aos="zoom-in-right" className='flex flex-col gap-5'>
            <h1 className='text-3xl font-bold'>About Us</h1>
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
  )
}

export default About
