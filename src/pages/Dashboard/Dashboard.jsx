import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RxDashboard } from "react-icons/rx";
import { MdOutlineCreate } from "react-icons/md";
import { MdManageAccounts } from "react-icons/md";
import { FaLessThan } from "react-icons/fa";
import date from 'date-and-time';
import { IoBookOutline } from 'react-icons/io5';
const Dashboard = () => {
const [sideNav,setSideNav] = useState(false)




  return (
    <section className='w-full'>
        <div className='h-screen w-full'>
           
            <div className='bg-slate-200  md:w-full px-3 py-5 rounded-lg flex flex-col gap-8'>
            <header>
                <h1 className='flex flex-row gap-3 text-2xl font-bold'>
                    <span>Welcome Back,</span>
                    <span>John Doe</span>
                </h1>
            </header>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5  place-content-center'>
                <div className='flex flex-col justify-center items-center text-center gap-2 bg-black rounded-xl px-5 py-6 text-white shadow-2xl h-[13rem] w-full sm:max-w-[30rem]'>
                   <p className='text-white flex flex-col gap-2'>
                    <span className='font-bold text-xl'>{date.format(new Date(), 'ddd, MMM DD YYYY')}</span>
                    <span className='font-bold text-xl'>{date.format(new Date(), 'hh:mm A [GMT]Z', true)}</span>
                   </p>
                   <h1 className='text-2xl font-bold'>What would you like to do?</h1>

            
                </div>
                <div className='flex flex-col justify-center items-center text-center gap-2 bg-black rounded-xl text-white shadow-2xl h-[13rem] w-full sm:max-w-[30rem]'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='flex flex-col gap-2 items-center font-bold'>
                            <span className='text-4xl'><IoBookOutline/></span>
                            <span className='text-2xl '>Total Posts</span>
                            </h1>
                            <p className='text-xl font-semibold'>75 Articles Written</p>
                    </div>
                </div>
            </div>
            <div className="overflow-x-scroll mx-auto w-full">
        <h1 className="text-lg font-bold mb-4">ALL POST</h1>
        <table className="min-w-full w-full  overflow-x-scroll  border-collapse border border-gray-200">
            <thead className="bg-gray-100">
                <tr>
                    <th className="border border-gray-200 px-4 py-2 text-left">ID</th>
                    <th className="border border-gray-200 px-4 py-2 text-left">Title</th>
                    <th className="border border-gray-200 px-4 py-2 text-left">Desc</th>
             
                </tr>
            </thead>
            <tbody>
                <tr className="bg-white">
                    <td className="border border-gray-200 px-4 py-2">1</td>
                    <td className="border border-gray-200 px-4 py-2">John Doe</td>
                    <td className="border border-gray-200 px-4 py-2">28</td>
                   
                </tr>
                <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2">2</td>
                    <td className="border border-gray-200 px-4 py-2">Jane Smith</td>
                    <td className="border border-gray-200 px-4 py-2">32</td>
               
                </tr>
                <tr className="bg-white">
                    <td className="border border-gray-200 px-4 py-2">3</td>
                    <td className="border border-gray-200 px-4 py-2">Bob Johnson</td>
                    <td className="border border-gray-200 px-4 py-2">45</td>
                    
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
