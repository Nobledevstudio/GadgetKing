import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-300 pt-16 pb-10 px-6 md:px-16 lg:px-24">

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 mb-14">

        {/* BRAND SECTION */}
        <div className="space-y-6">
          <img src={assets.logo} alt="Logo" className="w-52" />

          <p className="text-sm leading-6 text-gray-400">
            We provide premium-quality laptops, smartphones, and accessories 
            to keep you connected, productive, and entertained.
          </p>
            <div className="flex items-center gap-4 mt-4">
              <img className="w-15 opacity-75 hover:opacity-100 transition" src={assets.visa} />
              <img className="w-15 opacity-75 hover:opacity-100 transition" src={assets.master_card} />
              <img className="w-15 opacity-75 hover:opacity-100 transition" src={assets.flutterwave} />
              <img className="w-15 opacity-75 hover:opacity-100 transition" src={assets.paystack} />
            </div>

        </div>

        {/* CUSTOMER SERVICE */}
        <div>
         <h2 className="mt-2 text-xl font-semibold text-black mb-5 tracking-wide">
            Customer Service
          </h2>

          <ul className="space-y-3 text-gray-400">
            <li className="footer-link cursor-pointer ">My Account</li>
            <li className="footer-link cursor-pointer "cursor-pointer>Help Center</li>
            <li className="footer-link cursor-pointer">Shipping & Returns</li>
            <li className="footer-link cursor-pointer">Track Your Order</li>
            <li className="footer-link cursor-pointer">Warranty Info</li>
          </ul>
        </div>

        {/* USEFUL LINKS */}
        <div>
          <h2 className="mt-2 text-xl font-semibold text-black mb-5 tracking-wide">
            Useful Links
          </h2>

          <ul className="space-y-3 text-gray-400">
            <li className="footer-link cursor-pointer">Home</li>
            <li className="footer-link cursor-pointer">Shop</li>
            <li className="footer-link cursor-pointer">About Us</li>
            <li className="footer-link cursor-pointer">Contact Us</li>
            <li className="footer-link cursor-pointer">FAQs</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
         <h2 className="mt-2 text-xl font-semibold text-black mb-5 tracking-wide">
            Contact Us
          </h2>

          <ul className="space-y-4 text-sm text-gray-400 leading-6">

            <li className="flex gap-3 items-start">
              <img src={assets.location_icon} className="w-5 mt-1 opacity-90" />
              Beside Adebayo Hall, Ikoyi, Lekki, Lagos
            </li>

            <li className="flex gap-3 items-start">
              <img src={assets.email_icon} className="w-5 mt-1 opacity-90" />
              info@gadgetking.com
            </li>

            <li className="flex gap-3 items-start">
              <img src={assets.office_line_icon} className="w-5 mt-1 opacity-90" />
              0807 768 7645
            </li>

            <li className="flex gap-3 items-start">
              <img src={assets.phone_icon} className="w-5 mt-1 opacity-90" />
              0908 875 6435
            </li>

            <li className="flex gap-3 items-start">
              <img src={assets.clock_icon} className="w-5 mt-1 opacity-90" />
              We’re available 7 days a week • 10am – 6pm
            </li>

          </ul>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400 tracking-wide">
        &copy; {new Date().getFullYear()} GadgetKing. All rights reserved.
      </div>

    </footer>
  )
}

export default Footer
