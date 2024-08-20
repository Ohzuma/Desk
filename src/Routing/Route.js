import React from 'react'
import BlogPage from '../pages/BlogPage'
import {
    Route,
    Routes,
    Link,
  } from "react-router-dom";
  
const Routing = () => {
  return (
    <div>
   <Routes>
    <Route path='/blog' element={<BlogPage/>}/>
   </Routes>
    </div>
  )
}

export default Routing
