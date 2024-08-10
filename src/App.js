import './index.css'
import Index from './Homepage'; 
import Contributors from './contributors/Contributors';
import About from './About/About';
import Service from './Service/Service';
import Blog from './Blog/Blog';
import Contact from './Contact/Contact';
function App() {
  return (
    <div className='relative'>
<Index />
<Contributors/>
<About/>
<Service/>
<Blog/>
<Contact/>
    </div>
  );
}

export default App;
