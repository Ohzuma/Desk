import React from 'react'
import pic from '../../Asset/img/vision.jpg'
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
        <div className='bg-red-500 md:h-screen   overflow-y-scroll'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ex commodi animi illum dicta quasi odit cum, laboriosam, officia atque dolore natus ut amet ad. Beatae quisquam officia commodi distinctio, repellendus vel eum voluptatum! Reiciendis ratione at laboriosam dolor adipisci.
        </div>
       </div>
    </section>
  )
}

export default SinglePage
