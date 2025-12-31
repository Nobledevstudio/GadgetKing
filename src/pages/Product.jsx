import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const { productId } = useParams();
  const { products, formatNaira, addToCart ,navigate, selectedStorage,setSelectedStorage, 
    selectedSsd, setSelectedSsd, selectedRam, setSelectedRam} = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [mainImage, setMainImage] = useState('');
 

  // Fetch product data
  const fetchProductData = () => {
    const product = products.find(item => item._id === productId);
    if (!product) 
      return;
    setProductData(product);
    setMainImage(product?.image?.[0] || '');

    // Set default storage & size
    if (product.storage?.length > 0) {
      const firstStorage = product.storage[0];
      setSelectedStorage({
        ...firstStorage,
        size: Array.isArray(firstStorage.size) ? firstStorage.size[0] : firstStorage.size
      });
    }

        // ✅ Laptop default RAM & SSD
    if (product.category === "Laptop") {
      if (product.ramOptions?.length > 0) {
        const firstRam = product.ramOptions[0];
        setSelectedRam({
          ...firstRam,
          size: Array.isArray(firstRam.size)
            ? firstRam.size[0]
            : firstRam.size
        });
      }

        if (product.storageOptions?.length > 0) {
          const firstSsd = product.storageOptions[0];
          setSelectedSsd({
            ...firstSsd,
            size: Array.isArray(firstSsd.size)
              ? firstSsd.size[0]
              : firstSsd.size
          });
        }
      };
    };

  // Find the price for a size
  const findPrice = (sizeItem) => {
    if (!productData) return 0;
    const storageObj = productData.storage.find(s => s.size.includes(sizeItem));
    return storageObj ? storageObj.price : 0;
  };

  // Handle size selection
  const handleSizeClick = (sizeItem) => {
    setSelectedStorage({
      ...selectedStorage,
      size: sizeItem,
      price: findPrice(sizeItem)
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId]);

  if (!productData) return <div className='opacity-0'></div>;

  return (
    <div className='border-t pt-10 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] transition-opacity ease-in duration-500 opacity-100'>
      
      <div className='flex flex-col sm:flex-row gap-12'>
        
        {/* Product Images */}
        <div className='flex flex-col sm:flex-row gap-3 sm:w-[60%]'>

          {/* Thumbnails */}
          <div className='flex flex-row sm:flex-col gap-3 overflow-x-auto sm:overflow-y-auto w-full sm:w-[18%]'>
            {productData.image.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`thumbnail-${index}`}
                className='w-[24%] sm:w-full shrink-0 cursor-pointer rounded-md border border-gray-200'
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>

          {/* Main Image */}
          <div className='flex-1 sm:w-[82%]'>
            <img
              src={mainImage}
              alt='main product'
              className='w-full h-auto rounded-md border border-gray-200'
            />
          </div>
        </div>

        {/* Product Info */}
        <div className='flex-1 sm:w-[40%] flex flex-col gap-4'>
          
          {/* Product Name & Selected Size */}
        <h1 className='font-semibold text-3xl'>
          {productData.name} 
          {productData.category === "Smartphone" && selectedStorage?.size ?
            `(${selectedStorage?.size})` : productData.category === "Laptop" && selectedRam?.size && selectedSsd?.size ? `(${selectedRam?.size} / ${selectedSsd?.size})`:  null}
      </h1>


          {/* Ratings */}
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} alt='star' className='w-3.5' />
            <img src={assets.star_icon} alt='star' className='w-3.5' />
            <img src={assets.star_icon} alt='star' className='w-3.5' />
            <img src={assets.star_icon} alt='star' className='w-3.5' />
            <img src={assets.star_dull_icon} alt='star' className='w-3.5' />
            <p>(122)</p>
          </div>

       <p className='text-xl font-bold'>
        {formatNaira(
          productData.category === "Smartphone"
            ? selectedStorage?.price || 0
            : productData.category === "Laptop"
              ? productData.basePrice 
               + (selectedRam?.price || 0) 
              + (selectedSsd?.price || 0)
              : productData.price || 0
        )}
      </p>


          {/* Description */}
          <p className='mt-5 text-gray-500 md:w-4/5'>
            {productData.description}
          </p>

          {/* Size Selector */}
          <div className='flex flex-col gap-2 my-8'>
            {productData.category === "Smartphone" || productData.category === "Laptop" ? <p>Select Size</p> : null} 
            <div className='flex gap-2 flex-wrap'>
              {productData.storage?.flatMap(s => s.size)?.map((sizeItem, index) => (
                <button
                  key={index}
                  onClick={() => handleSizeClick(sizeItem)}
                  className={`px-3 py-2 border border-gray-300 rounded-md cursor-pointer ${
                    selectedStorage?.size === sizeItem ? 'border-orange-500' : ''
                  }`}
                >
                  {sizeItem}
                </button>
              ))}
            </div>
          
            <div className='flex gap-2 flex-wrap'>
              {productData.storageOptions?.map((ssd, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedSsd(ssd)}
                  className={`px-3 py-2 border border-gray-300 rounded-md cursor-pointer ${
                    selectedSsd?.size === ssd.size ? 'border-orange-500' : ''
                  }`}
                >
                  {ssd.size}
                </button>
              ))}
            </div>
          {productData.category === "Laptop" ? <p>Select Ram</p> : null}
            <div className='flex gap-2 flex-wrap'>
              {productData.ramOptions?.map((ram, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedRam(ram)}
                  className={`px-3 py-2 border border-gray-300 rounded-md cursor-pointer ${
                    selectedRam?.size === ram.size ? 'border-orange-500' : ''
                  }`}
                >
                  {ram.size}
                </button>
              ))}
            </div>
          </div>
             <button onClick={()=>{
                      addToCart(
                      productData._id,
                      selectedStorage?.size, // for phones
                      selectedRam?.size,  // for laptops, if you implement
                      selectedSsd?.size,  // for laptops
            );
                  navigate('/cart')}
              } className="mt-2 bg-black text-white text-sm sm:text-base md:text-sm font-semibold px-10 sm:px-11 md:px-12 py-2 hover:bg-gray-700 transtion-colors duration-300 cursor-pointer self-start">
            Add To Cart
          </button>
          <hr className='mt-8 sm: w-4/5 text-gray-300'/>
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
              <p>100% Original product</p>
              <p>Cash on delivery is availavle on this product</p>
              <p>Easy return and exchange policy within 7 days</p>
          </div>
        </div>
      </div>


       {/*------------------ Desscription and review section------------------  */}
           <div className='mt-20'>
              <div className='flex'>
                <b className='border border-gray-300 px-5 py-3 text-sm'>Description</b>
                <p className='border border-gray-300 px-5 py-3 text-sm'>Reviews (122)</p>
              </div>
              <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-600">
                 <p>Explore and shop all the latest models of HP, Dell, Samsung, and Apple laptops, meticulously designed to cater to every computing need, from everyday productivity to high-end creative workflows and immersive gaming. Discover ultra-premium selections such as the innovative HP Spectre x360 convertible and versatile Envy series, the masterfully crafted Dell XPS 13, 14, and 16 with stunning InfinityEdge displays</p>
                 <p>Alienware gaming rigs with cutting-edge GPUs like the NVIDIA GeForce RTX 5070, the sleek, AI-powered Samsung Galaxy Book5 Pro 360 and Galaxy Book4 Ultra series featuring vibrant AMOLED touchscreens and S Pen support, and the legendary Apple MacBook Air and MacBook Pro lineup, driven by the latest 2025 M4 and M5 series chips for unrivaled speed, power efficiency, and all-day battery life</p>
              </div>
           </div>

      {/* ------Display Related Products------------ */}
        <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>
    </div>
  );
};

export default Product;
