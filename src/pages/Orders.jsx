import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'

const Orders = () => {
  const { products, formatNaira } = useContext(ShopContext)

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      
      {/* Page Title */}
      <div className="text-2xl mb-6">
        <Title title1="MY" title2="ORDERS" />
      </div>

      {/* Orders List */}
      <div className="space-y-6">
        {products.slice(1,4).map((item, index) => (
          <div 
            key={index} 
            className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center md:items-stretch gap-6"
          >
            {/* Left: Product Info */}
            <div className="flex items-start gap-6 flex-1">
              <img className="w-20 h-20 object-cover rounded" src={item.image[0]} alt={item.name} />
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-lg font-semibold text-gray-800">{item.name}</p>
                  <div className="flex flex-wrap items-center gap-4 mt-2 text-gray-600">
                    <p className='text-lg'>{formatNaira(item.storage[0].price)}</p>
                    <p>Quantity: 1</p>
                    <p>Size: {item.storage[0].size}</p>
                  </div>
                  <p className="mt-3 text-sm text-gray-400">
                    Date: <span className="text-gray-500">25 July, 2025</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Status & Actions */}
            <div className="md:w-1/3 flex flex-col justify-between items-center gap-4 h-full">
              {/* Status */}
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
                <span className="text-gray-700 font-medium">Ready to Ship</span>
              </div>

              {/* Track Button */}
              <button className="border border-gray-300 text-gray-700 px-5 py-2 rounded-lg hover:bg-gray-100 transition cursor-pointer">
                Track Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Orders
