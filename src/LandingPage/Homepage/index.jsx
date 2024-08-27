import React from 'react'
 
import {Button} from '../../Component/Button'
import Contributors from '../contributors/Contributors'
// import Hike from '../Asset/img/hike.jpeg'
const Index = () => {
  return (
    <div>
      <section className='h-[90vh] w-full bg-white  px-[1rem] sm:px-[3rem] '>
    <div className='parent-home rounded-xl sm:rounded-3xl relative h-full w-full bg-blue-300 flex flex-col items-center '>
    <div className='box-1 overflow-y-hidden w-[30rem] sm:w-[35rem] md:w-[50rem] flex justify-center items-center  h-16 sm:h-25 rounded-br-[2rem] 
     rounded-bl-[2rem]  relative bg-white  px-3'>
      <h1 className='text-[1.5rem] sm:text-[2rem] md:text-[3rem] px-[1rem] font-extrabold hike'>Desk, Everyone's Desk</h1>
    </div>
    <div className=' box-2 w-[25rem] sm:w-[30rem] md:w-[43rem]     
    h-32 sm:h-28 rounded-br-[2rem]    rounded-bl-[2rem]
     relative bg-white px-2 sm:px-[1.5rem] md:px-[5.2rem] break-keep flex items-center justify-center'>
      <h1 className='text-[1rem] sm:text-lg text-center'>
Join our community of hikers and find the perfect trail for get expert advice,detailed trail guides, and suppoer frok adventures at every step

      </h1>
    </div>
    <div className=' box-3 w-[22rem] sm:w-[22rem] md:w-[35rem]
     h-20 sm:h-25 rounded-br-[2rem] xs:-mt-[1rem]  
     rounded-bl-[2rem] relative bg-white flex items-center justify-center '>
<Button text={'Get Started'} />
    </div>
 

    </div>
      </section>
      <Contributors/>
    </div>
  )
}

export default Index
