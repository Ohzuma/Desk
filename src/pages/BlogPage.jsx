import React from 'react'
import pic1 from '../Asset/img/developer.jpeg'
import pic2 from '../Asset/img/writter.jpeg'
import pic3 from '../Asset/img/graphics.jpeg'
import pic4 from '../Asset/img/hike.jpeg'

import {BlogCard} from '../Component/Card'
const BlogPage = () => {
  return (
    <section className='px-[1rem] sm:px-[3rem] py-[3rem] '>
    <div className=' flex flex-col gap-[3rem]  '>
{/* <div className='bg-black/90 h-[13rem] flex flex-col gap-[3rem] justify-center items-center rounded-2xl'> */}
<h1 className='text-2xl font-bold flex  text-black text-center justify-center items-center'>Latest Blog</h1>
<form action="" className='flex gap-5 justify-center'>
  <input type="text" name="search" id="search" placeholder='Search...' 
  className='w-[40rem]  h-[3rem]     placeholder:text-black/90 border-2 rounded-lg border-black px-3 text-lg focus:outline-none focus:shadow-lg'  />
    <button type='submit' className='bg-black text-white flex justify-center items-center text-lg 
 rounded-lg h-[3rem] w-[6rem] px-5'>Search</button>
</form>

{/* </div> */}
<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-5'>
        <BlogCard img={pic1} title={'The Last Subber'} date={'2/9/2024'} read={'3'} author={'Peter Smith'} />
        <BlogCard mt={'mt-[2rem]'} img={pic2} title={'Manifestation of the sons God'} date={'5/9/2024'} read={'10'} author={'John Doe'} />
        <BlogCard img={pic3} title={'My Last Meal'} date={'9/9/2024'} read={'5'} author={'Lily Lily'} />
        <BlogCard mt={'mt-[2rem]'} img={pic4} title={"Let's RunAway Together"} date={'11/9/2024'} read={'7'} author={'Goody Goody'} />

        <BlogCard img={pic3} title={'The Last Subber'} date={'2/9/2024'} read={'3'} author={'Peter Smith'} />
        <BlogCard mt={'mt-[2rem]'} img={pic4} title={'Manifestation of the sons God'} date={'5/9/2024'} read={'10'} author={'John Doe'} />
        <BlogCard img={pic2} title={'My Last Meal'} date={'9/9/2024'} read={'5'} author={'Lily Lily'} />
        <BlogCard mt={'mt-[2rem]'} img={pic1} title={"Let's RunAway Together"} date={'11/9/2024'} read={'7'} author={'Goody Goody'} />
      
        <BlogCard img={pic3} title={'My Last Meal'} date={'9/9/2024'} read={'5'} author={'Lily Lily'} />
        <BlogCard mt={'mt-[2rem]'} img={pic2} title={'Manifestation of the sons God'} date={'5/9/2024'} read={'10'} author={'John Doe'} />
        <BlogCard img={pic1} title={'The Last Subber'} date={'2/9/2024'} read={'3'} author={'Peter Smith'} />
        <BlogCard mt={'mt-[2rem]'} img={pic4} title={"Let's RunAway Together"} date={'11/9/2024'} read={'7'} author={'Goody Goody'} />
       </div>
    </div>
    </section>
  )
}

export default BlogPage
