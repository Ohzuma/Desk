import React from 'react'
import pic from '../../Asset/img/vision.jpg'
import { BiHeart } from 'react-icons/bi'
import { IoMdShareAlt } from "react-icons/io";
import { Link } from 'react-router-dom';
import { CiFacebook, CiInstagram, CiTwitter } from 'react-icons/ci';
import { BlogCard } from '../../Component/Card';
import pic1 from '../../Asset/img/developer.jpeg'
import pic2 from '../../Asset/img/writter.jpeg'
import pic3 from '../../Asset/img/graphics.jpeg'
import pic4 from '../../Asset/img/hike.jpeg'



const SinglePage = () => {
  return (
    <section className='px-5  md:px-[2rem] lg:px-[3rem] py-[3rem] '>
       <div className='grid grid-cols-1 gap-4 lg:gap-[3rem] md:grid-cols-3 '>
       <div className='col-span-1 md:col-span-2 flex flex-col gap-8'>
            <div className='h-[30rem] w-full rounded-xl'>
                <img src={pic} className='rounded-xl h-full w-full object-cover object-center'
                 alt="title of the post here" />
            </div>

            <article className='flex flex-col gap-3'>
                <p className='flex gap-3 items-center'>
                    <span className='font-semibold text-black text-xs uppercase'>Content Writting</span>
                        <span className='bg-black w-[2px] h-5 inline'></span>
                    <span className='font-semibold text-black/80 text-xs uppercase'> 28 Feb 2024</span>
                </p>
                <h1 className='text-xl font-bold capitalize break-all'>Meet the dog who can find rare 
                sea turle nests at a shocking success rate</h1>

                <p className='text-lg text-black/80 break-all'>Lorem ipsum dolor sit amet consectetur 
                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam suscipit doloribus fugiat natus corrupti! Velit minima iure fugit nam repellat explicabo numquam nostrum commodi architecto veniam repellendus molestias quis quos enim tempore voluptates, excepturi optio recusandae voluptatem! Delectus, sunt ut?</p>
                 <p className='flex gap-3 items-center'>
                    <span className='font-semibold text-black text-xs uppercase'>John Doe</span>
                        <span className='bg-black w-[2px] h-5 inline'></span>
                    <span className='font-semibold text-black/80 text-xs uppercase'> Content Writter</span>
                </p>
            </article>
        </div>
        <section className='bg-white  rounded-xl   overflow-y-scroll
         px-4 py-5'>
          <div className='flex flex-col gap-5  '>
            <h1 className='font-bold text-xl'>Author Info</h1>
          <div className='flex gap-4 '>
            <button className=' flex justify-center items-center gap-1'>
                <span className='text-2xl'><BiHeart/></span> 
            <span className='text-sm'>100</span></button>
            <button className='text-2xl font-bold'><IoMdShareAlt/></button>
          </div>

<div className='flex flex-col '>
    <h1 className='text-xl font-semibold'>  Goodie Lily</h1>
    <p className='text-lg'>Hey, I'm a grapgic designer, very passionate and ready to work and learn</p>
</div>

<div className='flex flex-col gap-3'>
    <h3 className='text-xl font-semibold'>Follow me on:</h3>
    <div className='flex gap-3'>
    <Link  to={'/'} className='cursor-pointer text-2xl'><CiFacebook /></Link>
     <Link to={'/'} className='cursor-pointer text-2xl'><CiInstagram/></Link>
    <Link to={'/'} className='cursor-pointer text-2xl'><CiTwitter/></Link>
    </div>
</div>

          </div>

          <div className='md:h-[700px]'>
            <h1>More from this author</h1>
            <div className=" flex  md:grid md:grid-cols-1 gap-4">
<BlogCard img={pic4} title={"Let's RunAway Together"} date={'11/9/2024'} read={'7'} author={'Goody Goody'} />
<BlogCard img={pic3} title={'The Last Subber'} date={'2/9/2024'} read={'3'} author={'Peter Smith'} />
<BlogCard img={pic4} title={'Manifestation of the sons God'} date={'5/9/2024'} read={'10'} author={'John Doe'} />
<BlogCard img={pic2} title={'My Last Meal'} date={'9/9/2024'} read={'5'} author={'Lily Lily'} />
<BlogCard img={pic1} title={"Let's RunAway Together"} date={'11/9/2024'} read={'7'} author={'Goody Goody'} />

            </div>
          </div>
        </section>
       </div>
    </section>
  )
}

export default SinglePage
