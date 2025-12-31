import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Item = ({ id, name, image, description, storage }) => {
  const { formatNaira, addToCart, products } = useContext(ShopContext);
  const product = products.find(item => item._id === id);
  const navigate = useNavigate();

  if (!product) return null;

  // Price preview logic
const displayPrice =
  product.category === "Smartphone"
    ? storage?.storage?.price || storage?.price || 0
    : product.category === "Laptop"
    ? product.basePrice + (storage?.ram?.price || 0) + (storage?.ssd?.price || 0)
    : product.price;


  return (
    <Link
      to={`/shop/${id}`}
      className="block group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
    >
      {/* Image */}
      <div className="relative overflow-hidden h-48 sm:h-56 md:h-64">
        <img
          src={image[0]}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-2">
        <h2 className="text-xs sm:text-sm md:text-[18px] font-semibold text-gray-900 truncate">
          {name}

          {/* Smartphone */}
          {product.category === "Smartphone" && storage?.size && (
            <span className="text-gray-500 text-sm"> ({storage.size})</span>
          )}

          {/* Laptop */}
          {product.category === "Laptop" && storage?.ram && storage?.ssd && (
            <span className="text-gray-500 text-sm">
              {' '}({storage.ram.size} / {storage.ssd.size})
            </span>
          )}
        </h2>

        <p className="text-gray-500 text-sm line-clamp-2">{description}</p>

        <p className="text-gray-700 font-medium">
          {formatNaira(displayPrice)}
        </p>

        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();

            addToCart(
              product._id,
              product.category === "Smartphone" ? storage?.size : null,
              product.category === "Laptop" ? storage?.ram?.size : null,
              product.category === "Laptop" ? storage?.ssd?.size : null
            );

            navigate('/cart');
          }}
          className="mt-2 bg-teal-600 text-white text-sm font-semibold px-6 py-2 hover:bg-teal-500"
        >
          Add To Cart
        </button>
      </div>
    </Link>
  );
};

export default Item;
