import './index.css'
 import LandingPage from './LandingPage/LandingPage';
import Footer from './Component/Footer/Footer';
import Nav from './Component/Navbar/Nav'
import { BrowserRouter as Router } from 'react-router-dom';
import BlogPage from './pages/BlogPage'
import {
  Route,
  Routes,
  Link,
} from "react-router-dom";

function App() {
  return (
    <div className='relative'>
      <Nav/>


      <Routes>
        <Route path='/' element={<LandingPage/>} />
      </Routes>
      <Routes>
        <Route path='/blog' element={<BlogPage/>} />
      </Routes>
<Footer/>
    </div>
  );
}

export default App;
