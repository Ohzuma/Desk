import React from 'react'
import Profile from '../../Component/Profile'
import Pic from '../../Asset/img/hike.jpeg'
const Contributors = () => {
  return (
    <section className=' flex flex-col gap-1 px-[1rem] sm:px-[3rem] py-[1rem] relative'>
      <h4 className='text-xl font-medium'>Contributors</h4>
     <div className='flex gap-4 items-center  relative'>
     <Profile name={'Peter '} img={Pic}/>
      <Profile name={'John '} left={'left-[3rem]'} img={Pic}/>
      <Profile name={'Lily '} left={'left-[6rem]'} img={Pic}/>
     </div>
    </section>
  )
}

export default Contributors
