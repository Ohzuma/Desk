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


function App() {

  return (
    
    <div className=''>      
      <Nav/>
{/* <createRoutesFromElements/> */}
      <Routes>
        <Route  path='/' element={<LandingPage/>} />
      </Routes>
      <Routes>
        <Route path='/article' element={<BlogPage/>} />
        <Route path='/article:id' element={<SinglePage/>} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
     
      </Routes>
      {/* <createRoutesFromElements/> */}
<Footer/>
    </div>
  );
}

export default App;
