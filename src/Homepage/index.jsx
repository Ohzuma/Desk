import React from 'react'
import Nav from '../Navbar/Nav'
import {Button} from '../Component/Button'
// import Hike from '../Asset/img/hike.jpeg'
const Index = () => {
  return (
    <div>
      <Nav/>
      <section className='h-[90vh] w-full bg-white  px-[1rem] sm:px-[3rem] '>
    <div className='parent-home rounded-xl sm:rounded-3xl relative h-full w-full bg-blue-300 flex flex-col items-center '>
    <div className='box-1 w-[30rem] xs:w-[30rem] sm:w-[35rem] md:w-[50rem] flex justify-center items-center  h-16 xs:h-28 sm:rounded-br-[2rem] 
     sm:rounded-bl-[2rem]  relative  first-line: bg-white  px-3'>
      <h1 className='text-[1.5rem] xs:text-[2rem] md:text-[3rem] px-[1rem] font-extrabold hike'>Desk, Everyone's Desk</h1>
    </div>
    <div className=' box-2 w-[21rem] xs:w-[30rem] sm:w-[30rem] md:w-[43rem]     
    h-32 xs:h-28 rounded-br-[2rem]    rounded-bl-[2rem]
     relative bg-white px-2 xs:px-[2rem] md:px-[5.2rem] break-keep flex items-center justify-center'>
      <h1 className='text-[1rem] sm:text-lg text-center'>
Join our community of hikers and find the perfect trail for get expert advice,detailed trail guides, and suppoer frok adventures at every step

      </h1>
    </div>
    <div className=' box-3 w-[17rem] sm:w-[20rem] md:w-[35rem]
     h-20 xs:h-28 rounded-br-[2rem] xs:-mt-[1rem]  
     rounded-bl-[2rem] relative bg-white flex items-center justify-center '>
<Button text={'Join Our Community'} />
    </div>
 

    </div>
      </section>
    </div>
  )
}

export default Index
