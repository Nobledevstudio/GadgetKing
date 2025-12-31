import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import NewsLetter from '../components/NewsLetter'

const Contact = () => {
  return (
    <div>
           {/* Banner */}
           <div className="w-screen relative h-[50vh] sm:h-[70vh] left-1/2 right-1/2 -mx-[50vw]">
             <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/30 to-black/70 z-10"></div>
             <img className="w-full h-full object-cover" src={assets.contact_banner} alt="Contact-banner" />
         
             <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-20">
               <h1 className="text-4xl sm:text-5xl font-bold mb-4">Get In Touch</h1>
         
               <p className="flex items-center gap-2 text-lg font-semibold">
                 <Link to="/" className="flex items-center gap-1">
                   <img className="w-7" src={assets.home_icon} alt="Home-icon" />
                   <i>HOME</i>
                 </Link>
                  <span className='mx-2'>|</span>
                 <span className="flex items-center gap-1">
                   <img className="w-7" src={assets.contact_icon} alt="contact-icon" />
                   <i>CONTACT</i>
                 </span>
               </p>
             </div>
           </div>


           <div className="flex flex-col md:flex-row gap-8 md:gap-12 mt-10">

        {/* Left side - Contact Info */}
        <div className="flex-1 bg-gray-100 px-8 md:px-14 py-12 md:py-16 rounded-xl flex flex-col">
          <h1 className="text-4xl md:text-5xl font-bold text-center md:text-left mb-4">Contact Us</h1>
          <p className="text-gray-500 text-sm md:text-md mb-6">
            We will respond to your inquiries as soon as possible. Our customer support agents are always ready to help.
          </p>

          {/* Email */}
          <div className="flex items-center gap-4 border border-gray-300 px-4 py-3 rounded-lg mb-4">
            <img src={assets.email_icon} alt="email" className="w-8 h-8" />
            <div>
              <h3 className="font-semibold text-gray-700">Email Address</h3>
              <p className="text-gray-500 text-sm">support@gadgetking.com</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4 border border-gray-300 px-4 py-3 rounded-lg mb-4">
            <img src={assets.phone_icon} alt="phone" className="w-8 h-8" />
            <div>
              <h3 className="font-semibold text-gray-700">Phone</h3>
              <p className="text-gray-500 text-sm">+2349077654342</p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <img className="w-10 h-10 cursor-pointer hover:scale-110 transition-transform" src={assets.facebook} alt="Facebook" />
            <img className="w-10 h-10 cursor-pointer hover:scale-110 transition-transform" src={assets.twitter} alt="Twitter" />
            <img className="w-10 h-10 cursor-pointer hover:scale-110 transition-transform" src={assets.instagram} alt="Instagram" />
            <img className="w-10 h-10 cursor-pointer hover:scale-110 transition-transform" src={assets.whatsapp} alt="WhatsApp" />
          </div>
        </div>

          {/* Right side - Contact Form */}
          <div className="flex-1 bg-white px-6 md:px-12 py-8 md:py-12 rounded-xl shadow-md">
            <form className="flex flex-col gap-4">
              
              {/* Name */}
              <div className="flex flex-col">
                <label className="text-gray-700 font-medium mb-1">Name</label>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label className="text-gray-700 font-medium mb-1">Email</label>
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col">
                <label className="text-gray-700 font-medium mb-1">Message</label>
                <textarea 
                  placeholder="Your Message" 
                  rows={5}
                  className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="mt-2 bg-teal-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-teal-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>


        </div>

          {/* Map */}
         <div className="w-full h-64 md:h-96 mt-8 rounded-xl overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3586.810835351907!2d3.251281074480833!3d6.5777058225321205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9aa8b06d0f81%3A0xd932bcf4a266c31e!2s2%20Ifelodun%20St%2C%20Ikotun%2C%20Lagos%20102213%2C%20Lagos!5e1!3m2!1sen!2sng!4v1766052134791!5m2!1sen!2sng"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="GadgetKing Location"
          ></iframe>
        </div>




    </div>
  )
}

export default Contact