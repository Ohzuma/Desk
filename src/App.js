import './index.css'
 import LandingPage from './LandingPage/LandingPage';
import Footer from './Component/Footer/Footer';
import Nav from './Component/Navbar/Nav'
import { BrowserRouter as Router } from 'react-router-dom';
import BlogPage from './pages/BlogPage'
import AboutPage from './pages/AboutPage'
import {
  Route,
  Routes,
  Link,
} from "react-router-dom";
import Login from './pages/auth/Login';
import Signup from './pages/auth/SignUp';

function App() {
  return (
    <div className='relative'>
      <Nav/>


      <Routes>
        <Route path='/' element={<LandingPage/>} />
      </Routes>
      <Routes>
        <Route path='/blog' element={<BlogPage/>} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
     
      </Routes>
<Footer/>
    </div>
  );
}

export default App;
