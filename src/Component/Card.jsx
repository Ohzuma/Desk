import React from 'react'
import { AiOutlineRead } from "react-icons/ai";
import { CiCalendarDate,CiTimer,CiUser } from "react-icons/ci";
 import { BoxButton } from './Button'
import { Link } from 'react-router-dom';
import {   BiLogoFacebookSquare,  BiLogoInstagramAlt, BiLogoTwitter } from 'react-icons/bi';


export const Card = ({pic,title,desc}) => {
  return (
    <>
        <div className=' hover:scale-105 hover:transition-all transition-all  max-w-[23rem] h-auto sm:h-[30rem]  rounded-lg shadow-2xl bg-white'>
        <div className='h-[15rem] w-full rounded-lg'>
            <img src={pic} alt="Content Writing" className='h-full w-full rounded-lg object-cover' />
        </div>
        <article className='px-3 py-5 flex flex-col gap-5'>
        <h1 className='text-xl font-bold'>{title}</h1>
           <p className='text-[1rem] text-wrap break-all'>
                 {desc}
              </p>
              <BoxButton  text={'Contact-Us'}/>
        </article>
       </div>
     
    </>
  )
}

 export const BlogCard =({mt,title,img,date,read,author})=>{
    return(
        <>
        <div className={`h-[30rem] md:h-[31rem]  bg-black relative rounded-2xl group overflow-hidden ${mt}`}>
          <img src={img} alt="pic"  className='h-full w-full  object-cover rounded-2xl' />
          <div className='absolute  h-full w-full bg-black/0 top-0 left-0 right-0 rounded-2xl'></div>
          <div className='absolute bottom-0 md:-bottom-[30rem] md:group-hover:bottom-0 transition-all delay-100 group-hover:transition-all left-0 right-0 
           bg-black/90 rounded-br-2xl rounded-bl-2xl
            text-white h-[12rem] md:h-[10rem] px-3 py-4 flex flex-col gap-1 justify-center'>
              <p className='flex items-center gap-2'> 
                <span className='font-bold text-lg'><CiCalendarDate /></span> 
                <span className='font-thin text-[1.1rem]  '>{date}</span></p>
              
              <h1 className='flex items-center gap-2 text-xl break-all md:text-[1rem] lg:text-xl font-bold capitalize'>
                <span><AiOutlineRead />
                </span> <span >{title}</span>
                </h1>
                
           <div className='flex flex-col md:flex-row items-start md:items-center gap-2'>
           <p className='flex items-center gap-2'> 
                <span className='font-bold text-lg'><CiTimer /></span> 
                <span className='font-thin text-[1.1rem] '>{read} Minute Read</span></p>
              <p className='flex items-center gap-2'>
                <span className='font-bold text-lg'><CiUser /></span>
               
                <span className='font-thin text-[1.1rem] capitalize '> {author}</span> 
              </p>
           </div>
            </div>
        </div>
        </>
    )
 }



export const ProfileCard = ({pic,name,fb,ig,x,desc}) => {
  return (
    <>
        <div className=' hover:scale-105 hover:transition-all transition-all w-full  sm:max-w-[21rem] sm:w-[20rem] h-auto sm:h-[28rem]  rounded-lg shadow-2xl bg-white'>
        <div className=' flex items-center justify-center bg-black rounded-lg relative h-[11rem] w-full'>
            <img src={pic} alt="Content Writing" className='h-[10rem] w-[10rem]
             rounded-full  absolute top-20  border-4 border-white' />
        </div>
        <article className='px-3 py-5 flex flex-col gap-3 mt-[4rem] items-center justify-center'>
        <h1 className='text-xl font-bold'>{name}</h1>
        <p className='text-center'>{desc}</p>
        <div className="social flex gap-4">
          <Link to={'/'}>
         <span> <BiLogoFacebookSquare/></span> 
          </Link>
          <Link to={'/'}>
         <span> <BiLogoInstagramAlt/></span> 
          </Link>
          <Link to={'/'}>
          <span><BiLogoTwitter/></span> 
          </Link>
        </div>
        </article>
       </div>
     
    </>
  )
}
