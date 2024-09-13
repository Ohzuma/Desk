import {Button} from '../../Component/Button'
import Contributors from '../contributors/Contributors'
 
// import Hike from '../Asset/img/hike.jpeg'
const Index = () => {
  return (
    <div>
      <section className='h-[100vh] w-full bg-white py-[1rem] mt-[4rem]   md:px-[2rem] '>
      <div className='parent-home  relative h-full w-full flex flex-col md:rounded-3xl items-center justify-center '>
    <div className='bg-black/70 absolute w-full  h-full top-0 left-0 right-0 bottom-0 md:rounded-3xl '></div>
<div className='flex flex-col justify-center items-center max-w-[45rem] z-10 gap-3 px-3'>
<h1 className='text-[1.7rem] text-white   md:text-[3rem] lg:text-[4rem]  font-extrabold hike'>Desk, Everyone's Desk</h1>
    

    <p className='text-[1.1rem] sm:text-xl text-center text-white'>
Join our community of hikers and find the perfect trail for get expert advice,detailed trail guides, and suppoer frok adventures at every step

      </p>
 
      <button className='btn relative flex flex-col items-center justify-center bg-white h-[3rem] text-xl font-bold w-48 text-black px-3 py-2 rounded-full'>Get Started</button>

   
</div>
 

    </div>
      </section>
      <Contributors/>
    </div>



  )
}

export default Index
