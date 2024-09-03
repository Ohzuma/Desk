import './index.css'
 import LandingPage from './LandingPage/LandingPage';
import Footer from './Component/Footer/Footer';
import Nav from './Component/Navbar/Nav'

import BlogPage from './pages/BlogPage'
import AboutPage from './LandingPage/AboutPage'
import {
  Route,
  Routes,
  // createRoutesFromElements,
  // useLocation
} from "react-router-dom";
import Login from './pages/auth/Login';
import Signup from './pages/auth/SignUp';
import SinglePage from './pages/SinglePage/SinglePage';
import { useEffect } from 'react';
import UserProfile from './pages/UserProfile/UserProfile';
 
import Dashboard from './pages/Dashboard/Dashboard';
import DashboardLayout from './pages/Dashboard/DashboardLayout';
import AddPost from './pages/Dashboard/AddPost';


function App() {

  return (
    
    <div className=''>      
      <Nav/>
{/* <createRoutesFromElements/> */}
       
      <Routes>
        <Route  path='/' element={<LandingPage/>} />
        <Route path='/article' element={<BlogPage/>} />
        <Route path='/article:id' element={<SinglePage/>} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/user/:name' element={<UserProfile/>} />
     

            <Route path='/dashboard' element={<DashboardLayout/>}>
            <Route index element={<Dashboard/>}/>
            <Route path='addPost' element={<AddPost/>}/>
            </Route>



      </Routes>
      
      {/* <createRoutesFromElements/> */}
<Footer/>
    </div>
  );
}

export default App;
