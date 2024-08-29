import React from 'react';
import ReactDOM from 'react-dom/client';
 
import { BrowserRouter as Router,RouterProvider } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import AOS from 'aos';
// import 'aos/dist/aos.css'; 
import ScrollToTop from './Component/ScrollToTop'

// AOS.init({
//   // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
//   offset: 700, // offset (in px) from the original trigger point
//   delay: 200, // values from 0 to 3000, with step 50ms
//   duration: 400, // values from 0 to 3000, with step 50ms
//   easing: 'ease', // default easing for AOS animations
//   once: false, // whether animation should happen only once - while scrolling down
//   mirror: false, // whether elements should animate out while scrolling past them
//   anchorPlacement: 'top-center', // defines which position of the element regarding to window should trigger the animation

// });

 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    {/* <RouterProvider> */}
    <ScrollToTop/>
    <App />
    {/* </RouterProvider> */}
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
