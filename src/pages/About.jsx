import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import NewsLetter from '../components/NewsLetter'

const About = () => {
  return (
    <div>
          {/* Banner */}
           <div className="w-screen relative h-[50vh] sm:h-[70vh] left-1/2 right-1/2 -mx-[50vw]">
             <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/30 to-black/70 z-10"></div>
             <img className="w-full h-full object-cover" src={assets.about_banner} alt="About-banner" />
         
             <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-20">
               <h1 className="text-4xl sm:text-5xl font-bold mb-4">About Us</h1>
         
               <p className="flex items-center gap-2 text-lg font-semibold">
                 <Link to="/" className="flex items-center gap-1">
                   <img className="w-7" src={assets.home_icon} alt="Home-icon" />
                   <i>HOME</i>
                 </Link>
                 <span className='mx-2'>|</span>
                 <span className="flex items-center gap-1">
                   <img className="w-7" src={assets.about_icon} alt="about-icon" />
                   <i>ABOUT</i>
                 </span>
               </p>
             </div>
           </div>

          {/* About Content */}
          <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16 px-4 md:px-20 py-12 md:py-24">

            {/* Image section */}
            <div className="w-full flex justify-center">
              <img
                src={assets.about_image}
                alt="About GadgetKing"
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>

            {/* Text section */}
            <div className="w-full text-center md:text-left">
              <h1 className="text-xl md:text-2xl font-semibold text-gray-700 mb-5">
                Your Trusted Destination for Laptops, Phones & Accessories
              </h1>

              <p className="text-gray-600 leading-relaxed">
                At <span className="font-semibold">GadgetKing</span>, technology rules. We specialize in providing
                high-quality laptops, smartphones, and essential tech accessories designed to keep you connected,
                productive, and ahead of the curve. Our mission is to make reliable and modern technology accessible
                to everyone.
                <br /><br />
               We carefully source genuine products from trusted global brands, ensuring every device meets our
              standards for quality and performance—all at competitive prices. Whether you’re a student, a
              professional, or a tech enthusiast, GadgetKing delivers solutions that fit your lifestyle and ambitions. 
              </p>
            </div>

          </div>

  <div className="flex flex-col md:flex-row gap-8 md:gap-6 px-4 md:px-20 py-12 md:py-24">

  {/* Vision Card */}
  <div className="bg-gray-100 text-gray-800 shadow-md rounded-2xl p-8 flex flex-col items-center text-center md:text-left md:flex-1 transform transition duration-300 hover:scale-105 hover:shadow-lg">
    <div className="bg-gray-200 rounded-full p-4 mb-4">
      <img src={assets.vision_icon} alt="Vision Icon" className="w-10 h-10" />
    </div>
    <h2 className="text-2xl font-bold mb-3">Our Vision</h2>
    <p className="leading-relaxed">
      Our vision is to become the most trusted destination for gadget shopping—online and offline—by delivering innovative, affordable technology and an exceptional customer experience that enhances everyday life.
    </p>
  </div>

  {/* History Card */}
  <div className="bg-gray-100 text-gray-800 shadow-md rounded-2xl p-8 flex flex-col items-center text-center md:text-left md:flex-1 transform transition duration-300 hover:scale-105 hover:shadow-lg">
    <div className="bg-gray-200 rounded-full p-4 mb-4">
      <img src={assets.history_icon} alt="History Icon" className="w-10 h-10" />
    </div>
    <h2 className="text-2xl font-bold mb-3">Our History</h2>
    <p className="leading-relaxed">
      At GadgetKing, our values drive everything we do. We deliver only genuine, high-quality products from trusted brands and ensure reliability and durability. With friendly support, expert guidance, and a seamless shopping experience, customer satisfaction is always our priority.
    </p>
  </div>

  {/* Mission Card */}
  <div className="bg-gray-100 text-gray-800 shadow-md rounded-2xl p-8 flex flex-col items-center text-center md:text-left md:flex-1 transform transition duration-300 hover:scale-105 hover:shadow-lg">
    <div className="bg-gray-200 rounded-full p-4 mb-4">
      <img src={assets.mission_icon} alt="Mission Icon" className="w-10 h-10" />
    </div>
    <h2 className="text-2xl font-bold mb-3">Our Mission</h2>
    <p className="leading-relaxed">
      Our mission is to make modern technology accessible to all. We offer high-quality laptops, smartphones, and accessories for every budget, helping individuals and businesses stay connected, work smarter, and enjoy the best of tech.
    </p>
  </div>

</div>


  <NewsLetter/>



    </div>
  )
}

export default About