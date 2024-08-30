import React from 'react'
import pic from '../../Asset/img/vision.jpg'
import { BiHeart } from 'react-icons/bi'
import { IoMdShareAlt } from "react-icons/io";
import { Link } from 'react-router-dom';
import { CiFacebook, CiInstagram, CiTwitter } from 'react-icons/ci';
import { BlogSingleCard } from '../../Component/Card';
import pic1 from '../../Asset/img/developer.jpeg'
import pic2 from '../../Asset/img/writter.jpeg'
import pic3 from '../../Asset/img/graphics.jpeg'
import pic4 from '../../Asset/img/hike.jpeg'



const SinglePage = () => {
// const topDiv = document.getElementById('topDiv')
// console.log(topDiv)
//   document.addEventListener('scroll',()=>{
//     if(scrollY){
//       console.log('hello')
//     }
//     topDiv.style.top='0'
//     topDiv.style.zIndex='500'
//   })

  return (
    <section className='px-1 mt-0  md:px-[2rem] lg:px-[3rem] py-[1rem] bg-white '>
       <div className='grid grid-cols-1 gap-4 lg:gap-[3rem] md:grid-cols-3 '>


       <div className='col-span-1 md:col-span-2 flex flex-col gap-8 '>
       <p className='flex gap-3 items-center'>
                    <span className='font-semibold text-black text-xs uppercase'>Content Writting</span>
                        <span className='bg-black w-[2px] h-5 inline'></span>
                    <span className='font-semibold text-black/80 text-xs uppercase'> 28 Feb 2024</span>
                </p>
                <h1 className='text-xl font-bold capitalize break-all'>Meet the dog who can find rare 
                sea turle nests at a shocking success rate</h1>

            <div className='h-[30rem] w-full rounded-xl'>
                <img src={pic} className='rounded-xl h-full w-full object-cover object-center'
                 alt="title of the post here" />
            </div>

            <article className='flex flex-col gap-3 '>
                <p className='flex gap-3 items-center'>
                    <span className='font-semibold text-black text-xs uppercase'>Content Writting</span>
                        <span className='bg-black w-[2px] h-5 inline'></span>
                    <span className='font-semibold text-black/80 text-xs uppercase'> 28 Feb 2024</span>
                </p>
                <h1 className='text-lg md:text-xl font-bold capitalize '>Meet the dog who can find rare 
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


        <section id='topDiv' className='rounded-xl 
         overflow-x-scroll md:overflow-y-scroll md:h-[100vh]  md:px-4   flex flex-col gap-1 md:gap-5 mt-4 md:mt-0'>


          <div className='flex flex-row md:flex-col gap-5  md:bg-white  px-1 md:px-3 py-6 md:items-center rounded-lg md:shadow-xl '>
            <h1 className='font-bold text-xl hidden md:block'>Author Info</h1>
          <div className='w-[3rem] h-[3rem] md:w-[7rem] md:h-[7rem] rounded-full'>

            <img src={pic1} alt="author" className='w-full h-full rounded-full object-cover' />
          </div>

<div className='flex flex-col items-center justify-center'>
    <h1 className='text-sm md:text-xl font-bold uppercase'>  Goodie Lily</h1>
    <p className='text-lg text-center hidden md:block' >Hey, I'm a graphic designer, very passionate and ready to work and learn</p>
</div>

<div className='flex flex-col gap-3 items-center justify-center'>
    {/* <h3 className='text-sm md:text-xl font-semibold'>Follow me on:</h3> */}
    <div className='flex gap-3'>
    <Link  to={'/'} className='cursor-pointer text-2xl'><CiFacebook /></Link>
     <Link to={'/'} className='cursor-pointer text-2xl'><CiInstagram/></Link>
    <Link to={'/'} className='cursor-pointer text-2xl'><CiTwitter/></Link>
    </div>
</div>

          </div>

          <div className='mt-1 flex flex-col gap-5 md:bg-white px-1 md:px-3 py-6 items-center rounded-lg shadow-xl '>
            <h1 className='font-bold text-xl'>More from this author</h1>
            <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
<BlogSingleCard img={pic4} title={"Let's RunAway Together"} date={'11/9/2024'} read={'7'} author={'Goody Goody'} />
<BlogSingleCard img={pic3} title={'The Last Subber'} date={'2/9/2024'} read={'3'} author={'Peter Smith'} />
<BlogSingleCard img={pic4} title={'Manifestation of the sons God'} date={'5/9/2024'} read={'10'} author={'John Doe'} />
<BlogSingleCard img={pic2} title={'My Last Meal'} date={'9/9/2024'} read={'5'} author={'Lily Lily'} />
<BlogSingleCard img={pic1} title={"Let's RunAway Together"} date={'11/9/2024'} read={'7'} author={'Goody Goody'} />

            </div>
          </div>
        </section>
       </div>
    </section>
  )
}

export default SinglePage
