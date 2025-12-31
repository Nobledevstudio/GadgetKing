import React, { useContext, useEffect, useState } from 'react'
import Shop from '../pages/Shop'
import { ShopContext } from '../context/ShopContext';
import Item from './Item';
import Title from './Title';

const RelatedProducts = ({category, subCategory}) => {

     const {products} = useContext(ShopContext);
     const [related, setRelated] = useState([]);

     useEffect(()=>{
        
        if (products.length > 0 ) {
             let productCopy = products.slice();
             productCopy = productCopy.filter((item) => category === item.category);
             productCopy = productCopy.filter((item)=>subCategory === item.subCategory)
             setRelated(productCopy.slice(0,5));
             
        }


     },[products])


  return (
       <div className='mt-4'>
                  
            <div className='text-3xl text-center py-2'>
                  <Title title1={'RELATED'} title2={'PRODUCTS'}/>
            </div>
        
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-6 mb-12'>
               { related.map((item,index)=>(
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
                    />
           ))}
         </div>
       </div>
  )
}

export default RelatedProducts