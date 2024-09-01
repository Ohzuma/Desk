import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RxDashboard } from "react-icons/rx";
import { MdOutlineCreate } from "react-icons/md";
import { MdManageAccounts } from "react-icons/md";
import { FaLessThan } from "react-icons/fa";

const Dashboard = () => {
const [sideNav,setSideNav] = useState(false)




  return (
    <section className=''>
        <div className='flex gap-2 md:gap-8 h-screen'>
            <div  className={`${sideNav?'w-[17rem] transition-all ':'w-[4rem] md:w-[7rem] transition-all'} transition-all bg-white h-full  shadow-xl px-3 md:px-12 py-10`}>
                <nav className='flex flex-col justify-between relative h-full'>
                    <ul className='flex flex-col gap-4'>
                        <li><Link to={'/'} className='flex flex-row items-center gap-5 text-lg text-black/80 hover:bg-black hover:transition-all transition-all '>  <span><RxDashboard/></span><span className={`${sideNav?'inline':'hidden'}`}>Dashboard</span> </Link></li>
                        <li><Link to={'/'} className='flex flex-row items-center gap-5 text-lg text-black/80 hover:bg-black hover:transition-all transition-all '> <span><MdOutlineCreate/></span><span className={`${sideNav?'inline':'hidden'}`}>Create Post</span> </Link></li>
                        <li><Link to={'/'} className='flex flex-row items-center gap-5 text-lg text-black/80 hover:bg-black hover:transition-all transition-all '> <span><MdManageAccounts/></span><span className={`${sideNav?'inline':'hidden'}`}>Manage Acct.</span> </Link></li>
                        
                    </ul>

                    <div onClick={()=> setSideNav(!sideNav)} className='absolute bottom-14 w-[2rem] h-[2rem]   bg-black text-white rounded-full flex justify-center items-center'> 
                        <span className='text-lg '><FaLessThan/></span>
                    </div>
                </nav>
            </div>
            <div className='bg-slate-200  md:w-full px-3 py-5 rounded-lg '>

            <div className="overflow-x-scroll mx-auto w-full">
        <h1 className="text-lg font-bold mb-4">ALL POST</h1>
        <table className="min-w-full w-full  overflow-x-scroll  border-collapse border border-gray-200">
            <thead className="bg-gray-100">
                <tr>
                    <th className="border border-gray-200 px-4 py-2 text-left">ID</th>
                    <th className="border border-gray-200 px-4 py-2 text-left">Name</th>
                    <th className="border border-gray-200 px-4 py-2 text-left">Age</th>
                    <th className="border border-gray-200 px-4 py-2 text-left">Country</th>
                </tr>
            </thead>
            <tbody>
                <tr className="bg-white">
                    <td className="border border-gray-200 px-4 py-2">1</td>
                    <td className="border border-gray-200 px-4 py-2">John Doe</td>
                    <td className="border border-gray-200 px-4 py-2">28</td>
                    <td className="border border-gray-200 px-4 py-2">USA</td>
                </tr>
                <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2">2</td>
                    <td className="border border-gray-200 px-4 py-2">Jane Smith</td>
                    <td className="border border-gray-200 px-4 py-2">32</td>
                    <td className="border border-gray-200 px-4 py-2">Canada</td>
                </tr>
                <tr className="bg-white">
                    <td className="border border-gray-200 px-4 py-2">3</td>
                    <td className="border border-gray-200 px-4 py-2">Bob Johnson</td>
                    <td className="border border-gray-200 px-4 py-2">45</td>
                    <td className="border border-gray-200 px-4 py-2">UK</td>
                </tr>
            </tbody>
        </table>
    </div>

            </div>
        </div>
    </section>
  )
}

export default Dashboard
