import React from 'react'
import pic1 from '../Asset/img/developer.jpeg'
import pic2 from '../Asset/img/writter.jpeg'
import pic3 from '../Asset/img/graphics.jpeg'
import pic4 from '../Asset/img/hike.jpeg'

import {BlogCard} from '../Component/Card'
import { BiBook,BiSearch } from 'react-icons/bi'
const BlogPage = () => {
  return (
    <section className='px-3 sm:px-[3rem] py-[3rem] mt-[4rem]'>
    <div className=' flex flex-col gap-[3rem]  '>
{/* <div className='bg-black/90 h-[13rem] flex flex-col gap-[3rem] justify-center items-center rounded-2xl'> */}

<header className='flex flex-col items-center justify-center py-2'>
       <h1 className='text-3xl sm:text-[3rem] font-bold flex items-center gap-5'>   Latest Stories  </h1>
       <p className='text-3xl hidden text-center'>Search through to read your favourite article from your favorite writter</p>
<form action="" className='hidden  justify-center items-center max-w-[40rem] w-[20rem] md:w-[30rem] h-[3rem] mb-1 border-2 rounded-full border-black  '>
  <input type="text" name="search" id="search" placeholder='Search...'
  className='w-full h-full bg-white   placeholder:text-black/90 rounded-full px-3 text-lg focus:outline-none'  />
    <button type='submit' className='bg-black text-white flex justify-center items-center text-2xl 
 rounded-full h-[3rem] w-[4rem] border-none outline-none '><BiSearch/></button>
</form>
 </header>

{/* </div> */}
<div className='grid blog grid-cols-1 sm:grid-cols-2  gap-5'>
        <BlogCard img={pic1} title={'The Last Subber'} date={'2/9/2024'} read={'3'} author={'Peter Smith'} />
        <BlogCard img={pic2} title={'Manifestation of the sons God'} date={'5/9/2024'} read={'10'} author={'John Doe'} />
        <BlogCard img={pic3} title={'My Last Meal'} date={'9/9/2024'} read={'5'} author={'Lily Lily'} />
        <BlogCard img={pic4} title={"Let's RunAway Together"} date={'11/9/2024'} read={'7'} author={'Goody Goody'} />

        <BlogCard img={pic3} title={'The Last Subber'} date={'2/9/2024'} read={'3'} author={'Peter Smith'} />
        <BlogCard img={pic4} title={'Manifestation of the sons God'} date={'5/9/2024'} read={'10'} author={'John Doe'} />
        <BlogCard img={pic2} title={'My Last Meal'} date={'9/9/2024'} read={'5'} author={'Lily Lily'} />
        <BlogCard img={pic1} title={"It okay to get angry sometimes"} date={'11/9/2024'} read={'7'} author={'Goody Goody'} />
      
        <BlogCard img={pic3} title={'My Last Meal'} date={'9/9/2024'} read={'5'} author={'Lily Lily'} />
        <BlogCard img={pic2} title={'Manifestation of the sons God'} date={'5/9/2024'} read={'10'} author={'John Doe'} />
        <BlogCard img={pic1} title={'The Last Subber'} date={'2/9/2024'} read={'3'} author={'Peter Smith'} />
        <BlogCard img={pic4} title={"Let's RunAway Together"} date={'11/9/2024'} read={'7'} author={'Goody Goody'} />
       </div>
    </div>
    </section>
  )
}

export default BlogPage
