import React from 'react';
import ReactDOM from 'react-dom/client';
 
import { BrowserRouter as Router,RouterProvider } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import ScrollToTop from './Component/ScrollToTop'



AOS.init();

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
