import './index.css'
import Index from './Homepage'; 
import About from './About/About';
import Service from './Service/Service';
import Blog from './Blog/Blog';
import Contact from './Contact/Contact';
import Footer from './Component/Footer/Footer';
import Nav from './Component/Navbar/Nav'
import Vision from './Vision/Vision';
// import { createRoot } from "react-dom/client";
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   Link,
// } from "react-router-dom";

function App() {
  return (
    <div className='relative'>
      <Nav/>
<Index />

<About/>
<Service/>
<Blog/>
<Vision/>
<Contact/>
<Footer/>
    </div>
  );
}

export default App;
