import React, { useContext } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const PlaceOrder = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col lg:flex-row gap-10 p-6 bg-gray-50 min-h-screen">
      
      {/* ------------------ Left Side: Delivery Info ------------------ */}
      <div className="flex-1 bg-white p-6 rounded-lg shadow-md space-y-6">
        <Title title1="DELIVERY" title2="INFO" />

        {/* Name */}
        <div className="flex flex-col sm:flex-row gap-4">
          <input 
            className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500" 
            type="text" 
            placeholder="First Name" 
          />
          <input 
            className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500" 
            type="text" 
            placeholder="Last Name" 
          />
        </div>

        {/* Email */}
        <input 
          className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500" 
          type="email" 
          placeholder="Email" 
        />

        {/* Street */}
        <input 
          className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500" 
          type="text" 
          placeholder="Street Address" 
        />

        {/* City & State */}
        <div className="flex flex-col sm:flex-row gap-4">
          <input 
            className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500" 
            type="text" 
            placeholder="City" 
          />
          <input 
            className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500" 
            type="text" 
            placeholder="State" 
          />
        </div>

        {/* Zipcode & Country */}
        <div className="flex flex-col sm:flex-row gap-4">
          <input 
            className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500" 
            type="number" 
            placeholder="Zipcode" 
          />
          <input 
            className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500" 
            type="text" 
            placeholder="Country" 
          />
        </div>

        {/* Phone */}
        <input 
          className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500" 
          type="tel" 
          placeholder="Phone Number" 
        />
      </div>

      {/* ------------------ Right Side: Cart + Payment ------------------ */}
      <div className="flex-1 space-y-8">
        
        {/* Cart Total */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <CartTotal />
        </div>

        {/* Payment Method */}
        <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
           <div className='flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start'> 
              <Title title1="PAYMENT" title2="METHOD" />
          </div>

          <div className="flex flex-col gap-4">

            {/* Paystack */}
            <label className="flex items-center justify-between border rounded-lg p-4 cursor-pointer hover:shadow-md transition">
              <div className="flex items-center gap-4">
                <input type="radio" name="payment" className="w-5 h-5 accent-blue-500" />
                <img src={assets.paystack} alt="Paystack" className="h-6 object-contain" />
                <span className="text-gray-700 font-medium">Paystack</span>
              </div>
              <span className="hidden sm:block text-gray-500 text-sm">Online Payment</span>
            </label>

            {/* Flutterwave */}
            <label className="flex items-center justify-between border rounded-lg p-4 cursor-pointer hover:shadow-md transition">
              <div className="flex items-center gap-4">
                <input type="radio" name="payment" className="w-5 h-5 accent-blue-500" />
                <img src={assets.flutterwave} alt="Flutterwave" className="h-6 object-contain" />
                <span className="text-gray-700 font-medium">Flutterwave</span>
              </div>
              <span className="hidden sm:block text-gray-500 text-sm">Online Payment</span>
            </label>

            {/* Cash on Delivery */}
            <label className="flex items-center justify-between border rounded-lg p-4 cursor-pointer hover:shadow-md transition">
              <div className="flex items-center gap-4">
                <input type="radio" name="payment" className="w-5 h-5 accent-blue-500" />
                <span className="text-gray-700 font-medium">Cash on Delivery</span>
              </div>
              <span className="hidden sm:block text-gray-500 text-sm">Pay when you receive</span>
            </label>

          </div>

          {/* Place Order Button */}
          <div className="w-full text-end mt-4">
            <button 
              onClick={() => navigate('/orders')} 
              className="bg-black text-white px-6 py-3 text-sm rounded hover:bg-gray-900 transition cursor-pointer"
            >
              PLACE ORDER
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default PlaceOrder
