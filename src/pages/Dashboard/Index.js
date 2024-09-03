import React from 'react'
import {
    Route,
    Routes,
  } from "react-router-dom";
import Dashboard from './Dashboard';
import SNav from './SideNav';
const Index = () => {
  return (
    <div className=' flex gap-2 md:gap-8 '>      
    <SNav/>
      <Routes>
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/dashboard/addPost' element={<p>Add Post</p>} />
      
      </Routes>
   
 
    </div>
  )
}

export default Index
