import React from 'react'

export const Button = ({text}) => {
  return (
    <>
             <button className='bg-black h-[3rem] text-sm w-48 text-white px-3 py-2 rounded-full'>{text}</button>

    </>
  )
}
 
export const BoxButton = ({text}) => {
    return (
      <>
               <button className='bg-black h-[3rem] w-32 text-sm  flex items-center justify-center justify-self-end rounded-md text-white px-3 py-2'>{text}</button>
  
      </>
    )
  }
   