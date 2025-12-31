import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'
import { ShopContext } from '../context/ShopContext'
import Item from './Item'

const LatestArrivals = () => {

         const {products} = useContext(ShopContext)
        const [lastestArrivals,setLatestArrivals]= useState([])

         useEffect(()=>{
             setLatestArrivals(products.slice(0,20))  
         },[])


  return (
    <div className='flex flex-col items-center text-center px-4'>
        <Title title1={'LATEST'}  title2={'ARRIVALS'}/> 
          <p className='text-gray-500 max-w-md text-sm md:text-base'> Discover the latest and top-quality gadgets hand-picked just for you. </p>

          {/* Rendering Latest Collections */}

          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-6 mb-12'>
            {lastestArrivals.map((item,index)=>(
                <Item key={index} name={item.name} id={item._id} image={item.image} description={item.description} storage={item.storage[0]}/>
            ))}
          </div>
    </div>
  )
}

export default LatestArrivals