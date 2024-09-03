import React from 'react'
import { Outlet } from 'react-router'
import SNav from './SideNav'

const DashboardLayout = () => {
  return (
    <div className='flex gap-2 md:gap-8 h-screen w-full'>
        <SNav/>
        <div className='w-full'>

    <Outlet />
        </div>
    </div>
  )
}

export default DashboardLayout
