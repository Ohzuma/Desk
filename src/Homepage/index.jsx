import React from 'react'
import Nav from '../Navbar/Nav'
// import Hike from '../Asset/img/hike.jpeg'
const Index = () => {
  return (
    <div>
      <Nav/>
      <section className='h-[90vh] w-full bg-white mb-[5rem] px-[3rem]'>
    <div className='parent-home rounded-3xl relative h-full w-full bg-blue-300 flex flex-col items-center '>
    <div className='box-1 w-[50rem] h-24 rounded-br-[2.5rem] rounded-bl-[2.5rem] relative  bg-white outline-8'></div>
    <div className=' box-2 w-[40rem] h-24 rounded-br-[2rem] -mt-[1rem] outline-8 rounded-bl-[2rem] relative bg-white'>

    </div>
    <div className=' box-3 w-[30rem] h-24 rounded-br-[2rem] -mt-[1rem] outline-8 rounded-bl-[2rem] relative bg-white'>

    </div>
 

    </div>
      </section>
    </div>
  )
}

export default Index
