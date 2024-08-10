import React from 'react'

const Profile = ({img,left}) => {
  return (
    <div className='flex flex-col justify-center gap-1 '>
        <div className={`h-[4rem] w-[4rem] bg-slate-800 rounded-full absolute top-1 shadow-lg ${left}`}>
            <img src={img} alt="img" className='h-full rounded-full  w-full'/>
        </div>
      {/* <a href='/' className='text-sm'>{name}</a> */}
    </div>
  )
}

export default Profile
