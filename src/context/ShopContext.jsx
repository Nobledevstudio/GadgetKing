import { createContext, useState } from "react";
import { products, } from "../assets/assets";
import { useNavigate } from "react-router-dom";



export const ShopContext = createContext();

const ShopContextProvider =(props)=>{

          const formatNaira = (amount) =>
               Intl.NumberFormat("en-NG", {
                style: "currency",
                currency: "NGN",
            }).format(amount);

            

        const delivery_fee = 5000; 
        const [search, setSearch] =  useState('');
        const [showSearch, setShowSearch]  = useState(false)
        const [cartItems, setCartItems] = useState({})
        const navigate = useNavigate()
        const [selectedStorage, setSelectedStorage] = useState(null);
        const [selectedSsd, setSelectedSsd] = useState(null);
        const [selectedRam, setSelectedRam] = useState(null);
        
     
        

         // Add to Cart Logic
        const addToCart = (ItemId, selectedStorage = null,selectedRam = null, selectedSsd = null) => {
                
            //Look for the product by Id and return null if not find
              const product = products.find(p=> p._id === ItemId);
               if(!product) 
                return null;
            let unitPrice = 0;

            if(product.category === 'Smartphone'){
                if (!selectedStorage) 
                    return       
                const storage  = product.storage.find( s => s.size === selectedStorage);
                if(!storage)
                return
              unitPrice = storage.price
            }
            if (product.category === "Laptop") {
            selectedStorage = null;
            }

            if (product.category === "Smartphone") {
            selectedRam = null;
            selectedSsd = null;
            }

            if (product.category === "Accessories") {
                selectedStorage = null;
                selectedRam = null;
                selectedSsd = null;
                }
            if(product.category === 'Laptop'){
                if(!selectedRam || !selectedSsd ) 
                    return;
              const ram = product.ramOptions.find( r => r.size === selectedRam)
              const ssd = product.storageOptions.find( s => s.size === selectedSsd)
               if(!ram || !ssd) 
                 return
              unitPrice = product.basePrice + ram.price + ssd.price             
            } 

            if(product.category === "Accessories"){
                unitPrice = product.price
            }
            const cartKey = product.category === 'Smartphone' ? `${ItemId}_${selectedStorage}` : product.category === "Laptop"
            ?`${ItemId}_${selectedRam}_${selectedSsd}` : ItemId;

            let cartData = structuredClone(cartItems);

            if (cartData[cartKey]) {
                cartData[cartKey].quanity += 1;
            } else {
                cartData[cartKey] = {
                    productId: ItemId,
                    name: product.name,
                    category: product.category,
                    selectedStorage,
                    selectedRam,
                    selectedSsd,
                    unitPrice,
                    quantity: 1
                };
            }
            setCartItems(cartData);
                
        }


         const getCartCount = () => {
            let total = 0;
            for (const key in cartItems) {
                total += cartItems[key].quantity;
            }
            return total;
        };



        const updateQuantity = (cartKey, quantity) => {
        const data = structuredClone(cartItems);

        if (!data[cartKey]) return;

        if (quantity <= 0) {
            delete data[cartKey];
        } else {
            data[cartKey].quantity = quantity;
        }

        setCartItems(data);
        };


        const getCartAmount = () => {
            let totalAmount = 0;

            for (const key in cartItems) {
                const item = cartItems[key];
                totalAmount += item.unitPrice * item.quantity;
            }

            return totalAmount;
    };

      const value ={
             formatNaira,
             products,
             search,
             setSearch,
             showSearch,
             setShowSearch,
             cartItems,
             addToCart,
             getCartCount,
             updateQuantity,
             getCartAmount,
             delivery_fee,
             navigate,
             selectedStorage,
             setSelectedStorage,
            selectedSsd,
            setSelectedSsd,
            selectedRam,
            setSelectedRam,

      }

  
    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
} 

export default ShopContextProvider

