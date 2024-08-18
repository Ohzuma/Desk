import './index.css'
import Index from './Homepage'; 
import Contributors from './contributors/Contributors';
import About from './About/About';
import Service from './Service/Service';
import Blog from './Blog/Blog';
import Contact from './Contact/Contact';
import Footer from './Component/Footer/Footer';
import Nav from './Component/Navbar/Nav'
function App() {
  return (
    <div className='relative'>
      <Nav/>
<Index />
<Contributors/>
<About/>
<Service/>
<Blog/>
<Contact/>
<Footer/>
    </div>
  );
}

export default App;
