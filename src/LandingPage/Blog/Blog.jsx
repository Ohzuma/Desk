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
       <h1 className='text-[3rem] font-bold flex items-center gap-5'>   Stories  </h1>
       <p className='text-3xl text-center'>Some Our Article From Different Writters</p>
       </header>

       <div className='grid blog grid-cols-1 sm:grid-cols-2 gap-[3rem] place-content-center place-items-center'>

 
        <BlogCard desc={' Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, tempora!'} img={pic1} title={'The Last Subber'} date={'2/9/2024'} read={'3'} author={'Peter Smith'} />

        <BlogCard desc={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, tempora!'} img={pic2} title={'Manifestation of the sons God'} date={'5/9/2024'} read={'10'} author={'John Doe'} />

        <BlogCard desc={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, tempora!'} img={pic3} title={'My Last Meal'} date={'9/9/2024'} read={'5'} author={'Lily Lily'} />

        <BlogCard desc={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, tempora!'} img={pic4} title={"Let's RunAway Together"} date={'11/9/2024'} read={'7'} author={'Goody Goody'} />


        <BlogCard desc={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, tempora!'}  img={pic3} title={'The Last Subber'} date={'2/9/2024'} read={'3'} author={'Peter Smith'} />

        <BlogCard desc={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, tempora!'} img={pic4} title={'Manifestation of the sons God'} date={'5/9/2024'} read={'10'} author={'John Doe'} />

        <BlogCard desc={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, tempora!'} img={pic2} title={'My Last Meal'} date={'9/9/2024'} read={'5'} author={'Lily Lily'} />

        <BlogCard desc={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, tempora!'} img={pic1} title={"Let's RunAway Together"} date={'11/9/2024'} read={'7'} author={'Goody Goody'} />
      

        <BlogCard desc={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, tempora!'} img={pic3} title={'My Last Meal'} date={'9/9/2024'} read={'5'} author={'Lily Lily'} />

        <BlogCard desc={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, tempora!'} img={pic2} title={'Manifestation of the sons God'} date={'5/9/2024'} read={'10'} author={'John Doe'} />

        <BlogCard desc={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, tempora!'} img={pic1} title={'The Last Subber'} date={'2/9/2024'} read={'3'} author={'Peter Smith'} />

        <BlogCard desc={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, tempora!'} img={pic4} title={"Let's RunAway Together"} date={'11/9/2024'} read={'7'} author={'Goody Goody'} />
       </div>
    </section>
  )
}

export default Blog
