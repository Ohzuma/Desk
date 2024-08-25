import React from 'react'
import { CiPhone,CiLocationOn,CiMail,CiFacebook,CiInstagram,CiTwitter} from "react-icons/ci";
import { Link } from 'react-router-dom';
 
 
const Contact = () => {
  return (
    <section className='contact px-[1rem] md:px-[2rem] lg:px-[5rem]  py-[3rem]'>
       <header className='flex flex-col items-center justify-center py-[3rem]'>
       <h1 className='text-3xl font-bold flex items-center gap-5'> <span><CiPhone /></span> Get-In-Touch <span className='rotate-[260deg]'><CiPhone /></span></h1>
       <p className='text-lg text-center'>Get in touch with us through conact info or send a message</p>
       </header>
       <div className="grid grid-cols-1  lg:grid-cols-2 py-[3rem] gap-9  ">
        <div data-aos="fade-up" className=' bg-white rounded-lg h-auto px-5 md:px-[2rem] py-[3rem]  mb-auto flex flex-col gap-5 contact-info'>
         
            <div className=''>
                <p><CiLocationOn /></p>
                <p>
                    <span>Address </span>
                    <span>Gombe main roundabout, Gombe Gombe State</span>
                </p>
            </div>
            <div className=''>
                <p><CiPhone /></p>
                <p>
                    <span>Phone </span>
                    <span>+234 8163686234</span>
                </p>
            </div>
            <div className=''>
                <p><CiMail /></p>
                <p>
                    <span>E-mail </span>
                    <span>ozumanology@gmail.com</span>
                </p>
            </div>

            <section data-aos="fade-up" className='h-[5rem] flex flex-col gap-5 mt-[3rem] follows'>
                <header>
                    <h1 className='text-xl font-bold'>Follow Us</h1>
                </header>
              <p className='flex gap-5'>
                <Link to={'/'} className='cursor-pointer'><CiFacebook /></Link>
                <Link to={'/'} className='cursor-pointer'><CiInstagram/></Link>
                <Link to={'/'} className='cursor-pointer'><CiTwitter/></Link>
              </p>
            </section>
        </div>
        <div data-aos="fade-up" className=' bg-white h-[30rem] mb-auto text-black px-5 md:px-[2rem] py-[3rem] rounded-2xl
        flex flex-col gap-5 ' >
        <header>
                <h1 className='text-2xl font-bold text-black'>Send a Message</h1>
            </header>
            <form action="/" className='flex flex-col gap-5'>
            <div className='h-[3rem]'>
                <input type="text" placeholder='Name' />
            </div>
            <div className='h-[3rem]'>
                <input type="email" placeholder='Name' />
            </div>
            <div className='h-[6rem]'>
               <textarea name="message" id="message" placeholder='Message'></textarea>
            </div>
            <button className='border-2 border-black bg-black text-white hover:bg-black transition-all hover:transition-all hover:text-white h-[3rem] font-medium  flex justify-center items-center text-lg w-32 px-3 py-2 rounded-lg'>Submit</button>

            </form>
        </div>
       </div>
    </section>
  )
}

export default Contact
