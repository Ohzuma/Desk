import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RxDashboard } from "react-icons/rx";
import { MdOutlineCreate } from "react-icons/md";
import { MdManageAccounts } from "react-icons/md";
import { FaLessThan } from "react-icons/fa";
import date from 'date-and-time';

const Dashboard = () => {
const [sideNav,setSideNav] = useState(false)


const now = new Date();
 


  return (
    <section className='w-full'>
        <div className='h-screen w-full'>
           
            <div className='bg-slate-200  md:w-full px-3 py-5 rounded-lg flex flex-col gap-8'>
            <header>
                <h1 className='flex flex-row gap-3 text-2xl'>
                    <span>Welcome Back,</span>
                    <span>John Doe</span>
                </h1>
            </header>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5  place-content-center'>
                <div className='bg-slate-300 shadow-2xl h-[10rem] w-full sm:max-w-[30rem]'>
                    <p className='flex flex-col gap-3'>
                       <span>{date.format(now, 'ddd, MMM DD YYYY')}</span>
                        <span>{date.format(now, 'hh:mm A [GMT]', true)}</span>

                    </p>
                    <h1>What Would You Love To Do Today?</h1>
                </div>
                <div className='bg-slate-300 shadow-2xl h-[10rem] w-full sm:max-w-[30rem]'></div>
            </div>
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
