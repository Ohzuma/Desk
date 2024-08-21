import React from 'react'
import { BsSignpost2 } from "react-icons/bs";
import { BlogCard } from '../../Component/Card';
import pic1 from '../../Asset/img/developer.jpeg'
import pic2 from '../../Asset/img/writter.jpeg'
import pic3 from '../../Asset/img/graphics.jpeg'
import pic4 from '../../Asset/img/hike.jpeg'

const Blog = () => {
 
  return (
    <section className='px-3 sm:px-[3rem]  py-[4rem]'>
        <header className='flex flex-col items-center justify-center py-[3rem]'>
       <h1 className='text-3xl font-bold flex items-center gap-5'> <span><BsSignpost2 /></span> Our Blog <span><BsSignpost2 /></span></h1>
       <p className='text-lg text-center'>Some Our Article From Different Writters</p>
       </header>

       <div className='grid blog grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
        <BlogCard img={pic1} title={'The Last Subber'} date={'2/9/2024'} read={'3'} author={'Peter Smith'} />
        <BlogCard img={pic2} title={'Manifestation of the sons God'} date={'5/9/2024'} read={'10'} author={'John Doe'} />
        <BlogCard img={pic3} title={'My Last Meal'} date={'9/9/2024'} read={'5'} author={'Lily Lily'} />
        <BlogCard img={pic4} title={"Let's RunAway Together"} date={'11/9/2024'} read={'7'} author={'Goody Goody'} />

        <BlogCard img={pic3} title={'The Last Subber'} date={'2/9/2024'} read={'3'} author={'Peter Smith'} />
        <BlogCard img={pic4} title={'Manifestation of the sons God'} date={'5/9/2024'} read={'10'} author={'John Doe'} />
        <BlogCard img={pic2} title={'My Last Meal'} date={'9/9/2024'} read={'5'} author={'Lily Lily'} />
        <BlogCard img={pic1} title={"Let's RunAway Together"} date={'11/9/2024'} read={'7'} author={'Goody Goody'} />
      
        <BlogCard img={pic3} title={'My Last Meal'} date={'9/9/2024'} read={'5'} author={'Lily Lily'} />
        <BlogCard img={pic2} title={'Manifestation of the sons God'} date={'5/9/2024'} read={'10'} author={'John Doe'} />
        <BlogCard img={pic1} title={'The Last Subber'} date={'2/9/2024'} read={'3'} author={'Peter Smith'} />
        <BlogCard img={pic4} title={"Let's RunAway Together"} date={'11/9/2024'} read={'7'} author={'Goody Goody'} />
       </div>
    </section>
  )
}

export default Blog
