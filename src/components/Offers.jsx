import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'

const Offers = () => {

    const { navigate } = useContext(ShopContext);

    const goToCategory =(cat)=>{
         // Navigate to Shop with Category query parameter
         navigate(`/shop?category=${cat}`)
         
    }



  return (
    <div>
     <div>
      <hr className='mt-20 text-gray-200' />

      {/* Features grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-12'>

        {/* Home Delivery */}
        <div className='flex items-center gap-6'>
          <div className="bg-[#E8F3F5] rounded-full aspect-square flex items-center justify-center p-2">
            <img
              className="w-3/4 h-3/4 object-contain"
              src={assets.home_delivery}
              alt="home_delivery"
            />
          </div>
          <div>
            <h1 className="text-xl font-semibold">Home Delivery</h1>
            <p className="text-sm text-gray-500">Delivery Across Lagos</p>
          </div>
        </div>

        {/* Customer Service */}
        <div className='flex items-center gap-6'>
          <div className="bg-[#E8F3F5] rounded-full aspect-square flex items-center justify-center p-2">
            <img
              className="w-3/4 h-3/4 object-contain"
              src={assets.customer_service}
              alt="customer_service"
            />
          </div>
          <div>
            <h1 className="text-xl font-semibold">Customer Service</h1>
            <p className="text-sm text-gray-500">24/7 Customer Service</p>
          </div>
        </div>

        {/* Discount Offers */}
        <div className='flex items-center gap-6'>
          <div className="bg-[#E8F3F5] rounded-full aspect-square flex items-center justify-center p-2">
            <img
              className="w-3/4 h-3/4 object-contain"
              src={assets.discount_offer}
              alt="discount-offer"
            />
          </div>
          <div>
            <h1 className="text-xl font-semibold">Discount Offers</h1>
            <p className="text-sm text-gray-500">Discount Available</p>
          </div>
        </div>

        {/* Online Payment */}
        <div className='flex items-center gap-6'>
          <div className="bg-[#E8F3F5] rounded-full aspect-square flex items-center justify-center p-2">
            <img
              className="w-3/4 h-3/4 object-contain"
              src={assets.card_payment}
              alt="online_payment"
            />
          </div>
          <div>
            <h1 className="text-xl font-semibold">Online Payment</h1>
            <p className="text-sm text-gray-500">Powered by Paystack</p>
          </div>
        </div>

      </div>

      <hr className='mb-20 mt-12 text-gray-200' />
    </div>


    {/* Offer bottom */}

     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
  {/* Card 1 */}
  <div className="relative w-full overflow-hidden shadow-lg rounded-lg">
    <img className="object-cover w-full h-64" src={assets.smartphones} alt="smartphones" />
    <div className="absolute inset-0 flex flex-col justify-center items-start text-left p-6 bg-linear-to-b from-black/60 via-black/50 to-black/40">
      <h1 className="text-white text-2xl lg:text-3xl font-bold mb-2">SMARTPHONES</h1>
      <p className="text-white text-sm mb-4">Shop all models of Samsungs and Apple Devices Such As iPhones, iWatches, iPads and Galaxy Watches</p>
      <button onClick={()=> goToCategory('Smartphone')} className="bg-transparent border border-gray-50 text-white px-6 py-2 rounded-lg hover:bg-[#028C9C] hover:border-none transition-colors duration-300 cursor-pointer">Shop Now</button>
    </div>
  </div>

  {/* Card 2 */}
  <div className="relative w-full overflow-hidden shadow-lg rounded-lg">
    <img className="object-cover w-full h-64" src={assets.laptops} alt="laptops" />
    <div className="absolute inset-0 flex flex-col justify-center items-start text-left p-6 bg-linear-to-b from-black/60 via-black/50 to-black/40">
      <h1 className="text-white text-2xl lg:text-3xl font-bold mb-2">LAPTOPS</h1>
      <p className="text-white text-sm mb-4">Shop HP, Dell, Samsung, and Apple laptops, including Spectre, XPS, Galaxy Book, and MacBook series.</p>
      <button onClick={()=> goToCategory('Laptop')} className="bg-transparent border border-gray-50 text-white px-6 py-2 rounded-lg hover:bg-[#028C9C] hover:border-none transition-colors duration-300 cursor-pointer">Buy Now</button>
    </div>
  </div>

  {/* Card 3 */}
  <div className="relative w-full overflow-hidden shadow-lg rounded-lg">
    <img className="object-cover w-full h-64" src={assets.accessories} alt="accessories" />
    <div className="absolute inset-0 flex flex-col justify-center items-start text-left p-6 bg-linear-to-b from-black/60 via-black/50 to-black/40">
      <h1 className="text-white text-2xl lg:text-3xl font-bold mb-2">ACCESSORIES</h1>
      <p className="text-white text-sm mb-4">Explore a wide range of essential accessories for laptops and phones, including chargers, cases, cables, and more</p>
      <button  onClick={()=> goToCategory('Accessories')} className="bg-transparent border border-gray-50 text-white px-6 py-2 rounded-lg hover:bg-[#028C9C] hover:border-none transition-colors duration-300 cursor-pointer">Explore Now</button>
    </div>
  </div>
</div>


    </div>
  )
}

export default Offers
