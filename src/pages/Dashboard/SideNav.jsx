import React, { useState } from 'react'
import { RxDashboard } from "react-icons/rx";
import { MdOutlineCreate } from "react-icons/md";
import { MdManageAccounts } from "react-icons/md";
import { FaLessThan } from "react-icons/fa";
import { Link } from 'react-router-dom';
const SNav = () => {
    const [sideNav,setSideNav] = useState(false)



  return (
    <div  className={`${sideNav?'w-[17rem] transition-all ':'w-[4rem] md:w-[7rem] transition-all'} h-screen transition-all bg-white h-full  shadow-xl px-3 md:px-12 py-10`}>
    <nav className='flex flex-col justify-between relative h-full'>
        <ul className='flex flex-col gap-4'>
            <li><Link to={'/dashboard'} className='flex flex-row items-center gap-5 text-lg text-black/80 hover:bg-black hover:transition-all transition-all '>  <span><RxDashboard/></span><span className={`${sideNav?'inline':'hidden'}`}>Dashboard</span> </Link></li>
            <li><Link to={'/dashboard/addPost'} className='flex flex-row items-center gap-5 text-lg text-black/80 hover:bg-black hover:transition-all transition-all '> <span><MdOutlineCreate/></span><span className={`${sideNav?'inline':'hidden'}`}>Create Post</span> </Link></li>
            <li><Link to={'/'} className='flex flex-row items-center gap-5 text-lg text-black/80 hover:bg-black hover:transition-all transition-all '> <span><MdManageAccounts/></span><span className={`${sideNav?'inline':'hidden'}`}>Manage Acct.</span> </Link></li>
        </ul>

        <div onClick={()=> setSideNav(!sideNav)} className='absolute bottom-14 w-[2rem] h-[2rem]   bg-black text-white rounded-full flex justify-center items-center'> 
            <span className='text-lg '><FaLessThan/></span>
        </div>
    </nav>
</div>
  )
}

export default SNav
