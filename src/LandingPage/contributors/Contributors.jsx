import React from 'react'
import Profile from '../../Component/Profile'
import pro1 from '../../Asset/img/pro1.jpg'
import pro2 from '../../Asset/img/pro2.jpg'
import pro3 from '../../Asset/img/pro3.jpg'
const Contributors = () => {
  return (
    <section className=' flex flex-col gap-1 px-[1rem] sm:px-[3rem] py-[1rem] relative'>
      <h4 className='text-xl font-medium'>Contributors</h4>
     <div className='flex gap-4 items-center  relative'>
     <Profile name={'Peter '} img={pro1}/>
      <Profile name={'John '} left={'left-[3rem]'} img={pro2}/>
      <Profile name={'Lily '} left={'left-[6rem]'} img={pro3}/>
     </div>
    </section>
  )
}

export default Contributors
