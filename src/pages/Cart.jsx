import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';

const Cart = () => {
  const { products, cartItems, formatNaira, updateQuantity, navigate } = useContext(ShopContext);

  // Convert cartItems object into an array for mapping
  const cartArray = Object.keys(cartItems).map(cartKey => {
    const entry = cartItems[cartKey];
    const product = products.find(p => p._id === entry.productId);
    if (!product) return null;

    return {
      _id: cartKey,
      name: product.name,
      category: product.category,
      quantity: entry.quantity,
      selectedStorage: entry.selectedStorage || null,
      selectedRam: entry.selectedRam || null,
      selectedSsd: entry.selectedSsd || null,
      unitPrice: entry.unitPrice,
      image: product.image[0] || ''
    };
  }).filter(item => item !== null); // remove nulls if any product not found

  if (!cartArray.length) {
    return (
      <div className='pt-14 text-center text-gray-700'>
        <Title title1="YOUR" title2="CART" />
        <p className='mt-5 text-lg'>Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className='pt-14'>
      <div className='text-2xl mb-3'>
        <Title title1='YOUR' title2='CART' />
      </div>

      <div>
        {cartArray.map((item, index) => {
          const totalPrice = item.unitPrice * item.quantity;

          return (
            <div
              key={index}
              className='py-4 border-t text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'
            >
              {/* Product Info */}
              <div className='flex items-start gap-6'>
                <img className='w-16 sm:w-20' src={item.image} alt={item.name} />
                <div>
                  <p className='text-xs sm:text-lg font-medium'>{item.name}</p>
                  <div className={`flex items-center gap-5 mt-2 ${item.category === 'Laptop' ? 'flex-col sm:flex-row' : ''}`}>
                    <p>{formatNaira(totalPrice)}</p>
                     <p className='px-2 sm:px-3 border border-gray-300 bg-slate-50'>
                        {item.category === 'Smartphone'
                          ? item.selectedStorage
                          : item.category === 'Laptop'
                          ? `${item.selectedRam} / ${item.selectedSsd}`
                          : null}
                    </p>
                  </div>
                </div>
              </div>

              {/* Quantity Input */}
              <input
                type='number'
                min={1}
                value={item.quantity}
                onChange={e => updateQuantity(item._id, Number(e.target.value))}
                className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1'
              />

              {/* Delete Button */}
              <img
                onClick={() => updateQuantity(item._id, 0)}
                className='w-4 mr-4 sm:w-5 cursor-pointer'
                src={assets.bin_icon}
                alt='Remove item'
              />
            </div>
          );
        })}
      </div>

      {/* Cart Total */}
      <div className='flex justify-end my-20'>
        <div className='w-full sm:w-[450px]'>
          <CartTotal />
          <div className='w-full text-end'>
            <button
              onClick={() => navigate('/place-order')}
              className='bg-black text-white text-sm px-8 py-3 my-5'
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
