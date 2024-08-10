import React from 'react'
import { CiPhone,CiLocationOn,CiMail,CiFacebook,CiInstagram,CiTwitter} from "react-icons/ci";
 
const Contact = () => {
  return (
    <section className='px-[1rem] sm:px-[3rem]  py-[4rem]'>
       <header className='flex flex-col items-center justify-center py-[3rem]'>
       <h1 className='text-3xl font-bold flex items-center gap-5'> <span><CiPhone /></span> Get-In-Touch <span className='rotate-[260deg]'><CiPhone /></span></h1>
       <p className='text-lg'>Get in touch with us through conact info or send a message</p>
       </header>
       <div className="grid grid-cols-2 py-[3rem]">
        <div className='flex flex-col gap-5 contact-info'>
         
            <div>
                <p><CiLocationOn /></p>
                <p>
                    <span>Address </span>
                    <span>Gombe main roundabout, Gombe Gombe State</span>
                </p>
            </div>
            <div>
                <p><CiPhone /></p>
                <p>
                    <span>Phone </span>
                    <span>+234 8163686234</span>
                </p>
            </div>
            <div>
                <p><CiMail /></p>
                <p>
                    <span>E-mail </span>
                    <span>ozumanology@gmail.com</span>
                </p>
            </div>

            <div className='flex flex-col gap-5 mt-[3rem] follows'>
                <header>
                    <h1 className='text-xl font-bold'>Follow Us</h1>
                </header>
              <div className='flex gap-5'>
              <span><CiFacebook /></span>
                <span><CiInstagram/></span>
                <span><CiTwitter/></span>
              </div>
            </div>
        </div>
        <div>
        <header>
                <h1>Send a Message</h1>
            </header>
            <form action="/">
            <div>
                <input type="text" placeholder='Name' />
            </div>
            <div>
                <input type="email" placeholder='Name' />
            </div>
            <div>
               <textarea name="message" id="message" placeholder='Message'></textarea>
            </div>
            </form>
        </div>
       </div>
    </section>
  )
}

export default Contact
