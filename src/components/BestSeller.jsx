import { useContext, useEffect } from 'react'
import Title from './Title'
import { ShopContext } from '../context/ShopContext'
import { useState } from 'react';
import Item from './Item';

const BestSeller = () => {

    const {products} = useContext(ShopContext);

    const [bestSeller,setBestSeller] = useState([])

      useEffect(()=>{
          const bestProducts = products.slice(9,38).filter((item) => item.bestseller === true);
          setBestSeller(bestProducts);
      },[products])


  return (
    <div className='flex flex-col items-center text-center px-4'>
      <Title title1={'BEST'} title2={'SELLER'}/> 
     <p className='text-gray-500 max-w-md text-sm md:text-base'> Shop our exclusive collection of gadgets that are loved by thousands—your next favorite is here!. </p>
  
      {/* Rendering Best Seller */}

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-6 mb-12'>
             {bestSeller.map((item,index)=>(
                     <Item key={index}
                         name={item.name}
                         id={item._id}
                         image={item.image}
                         description={item.description}
                         storage={
                         item.category === "Smartphone"
                         ? item.storage?.[0] // first storage for phones
                         : item.category === "Laptop"
                         ? item.storageOptions?.[0] // first storage for laptops
                         : null
                         }
                    />))}
        </div>
    </div>
  )
}

export default BestSeller