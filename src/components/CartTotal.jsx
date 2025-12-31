import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';

    const CartTotal = () => {
    const { delivery_fee, getCartAmount, formatNaira } = useContext(ShopContext);

    const subtotal = getCartAmount();
    const total = subtotal === 0 ? 0 : subtotal + delivery_fee;

    return (
        <div className="w-full">
        <div className="text-2xl">
            <Title title1={"CART"} title2={"TOTALS"} />
        </div>

        <div className="flex flex-col gap-2 mt-4 text-sm">
            <div className="flex justify-between">
            <p>Subtotal</p>
            <p>{formatNaira(subtotal)}</p>
            </div>

            <hr />

            <div className="flex justify-between">
            <p>Shipping Fee</p>
            <p>{formatNaira(delivery_fee)}</p>
            </div>

            <hr />

            <div className="flex justify-between">
            <b>Total</b>
            <b>{formatNaira(total)}</b>
            </div>
        </div>
        </div>
    );
    };

export default CartTotal