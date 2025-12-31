import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, useLocation } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { ChevronDown, ChevronRight} from "lucide-react";
import Title from '../components/Title';
import Item from '../components/Item';
import SearchBar from '../components/SearchBar';

const Shop = () => {


       const { products, search, showSearch } = useContext(ShopContext);
       const [showFilter, setShowFilter] = useState(true);
       const [filteredProducts, setFilteredProducts] = useState(products);
      const [category,setCategory] = useState([])
      const [subCategory,setSubCategory] = useState([])
      const [sortType,setSortType] = useState('relevant')
      const location = useLocation();
 
      const toggleCategory =(e)=>{
           
         if (category.includes(e.target.value)) {
               //if category already selected -> remove it
               setCategory(prev=>prev.filter(item => item !== e.target.value ))
         }
         else{
                 //if not selected -> remove it
             setCategory(prev=>[...prev,e.target.value])
         }

      }
      const toggleSubCategory =(e)=>{
            
         //if SubCategory already selected -> remove it
         if (subCategory.includes(e.target.value)) {
               setSubCategory(prev=>prev.filter(item => item !== e.target.value ))
         }
         else{
            //if not selected -> remove it
             setSubCategory(prev=>[...prev,e.target.value])
         }

      }

      const applyFilter=()=>{
          let productCopy = products.slice()

          if (showSearch && search) {
             productCopy = productCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
          }

          if (category.length > 0) {
              productCopy = productCopy.filter((item)=> category.includes(item.category))
          }

           if (subCategory.length > 0) {
            productCopy = productCopy.filter(item => subCategory.includes(item.subCategory));
           }

          setFilteredProducts(productCopy)
      }


      const getProductPrice = (product) => {
          if (product.category === 'Smartphone') {
            return product.storage?.[0]?.price || 0;
          }

          if (product.category === 'Laptop') {
            const base = product.basePrice || 0;
            const ram = product.ramOptions?.[0]?.price || 0;
            const ssd = product.storageOptions?.[0]?.price || 0;
            return base + ram + ssd;
          }

          if (product.category === 'Accessories') {
            return product.price || 0;
          }

          return 0;
    };



          const sortProduct = () => {
            let fpCopy = [...filteredProducts];

            switch (sortType) {
              case 'low-high':
                setFilteredProducts(
                  fpCopy.sort((a, b) => getProductPrice(a) - getProductPrice(b))
                );
                break;

              case 'high-low':
                setFilteredProducts(
                  fpCopy.sort((a, b) => getProductPrice(b) - getProductPrice(a))
                );
                break;

              default:
                applyFilter();
                break;
            }
          };


          useEffect(()=>{

             const params = new URLSearchParams(location.search)
             const cat = params.get('category')
               if (cat) {
                    setCategory([cat])
                }
          },[location.search])

         useEffect(()=>{
             applyFilter()
         },[category,subCategory,search,showSearch])

        useEffect(()=>{
          sortProduct()
        },[sortType])

  return (
   <div>

  {/* Banner */}
  <div className="w-screen relative h-[50vh] sm:h-[70vh] left-1/2 right-1/2 -mx-[50vw]">
    <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/30 to-black/70 z-10"></div>
    <img className="w-full h-full object-cover" src={assets.shop_banner} alt="Shop-banner" />

    <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-20">
      <h1 className="text-4xl sm:text-5xl font-bold mb-4">Shop Products</h1>

      <p className="flex items-center gap-2 text-lg font-semibold">
        <Link to="/" className="flex items-center gap-1">
          <img className="w-7" src={assets.home_icon} alt="Home-icon" />
          <i>HOME</i>
        </Link>
         <span className='mx-2'>|</span>
        <span className="flex items-center gap-1">
          <img className="w-7" src={assets.shop_icon} alt="shop-icon" />
          <i>SHOP</i>
        </span>
      </p>
    </div>
  </div>

      <SearchBar/>

  {/* MOBILE FILTER BUTTON */}
  <div className="md:hidden px-4 mt-6">
    <button
      className="bg-teal-600 text-white px-4 py-2 rounded-md"
      onClick={() => setShowFilter(!showFilter)}
    >
      {showFilter ? "Hide Filters" : "Show Filters"}
    </button>
  </div>

  {/* MAIN LAYOUT */}
  <div className="flex flex-col md:flex-row gap-6 px-4 mt-6 sm:px-[3vw] md:px-[6vw] lg:px-[9vw]">


    {/* SIDEBAR */}
    <div className={`bg-white shadow-md rounded-xl p-5 border h-fit w-full md:w-64 ${showFilter ? "block" : "hidden md:block"}`}>
      
      <div
        className="flex justify-between items-center cursor-pointer mb-4"
        onClick={() => setShowFilter(!showFilter)}
      >
        <p className="font-semibold text-lg">Filters</p>
        {showFilter ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
      </div>

      {showFilter && (
        <div className="space-y-6">

          {/* CATEGORY */}
          <div>
            <p className="font-medium text-gray-700 mb-2">Categories</p>
            <div className="flex flex-col gap-3 text-sm text-gray-600">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4"  value='Smartphone' onChange={toggleCategory} /> Smartphone
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4"  value={'Laptop'}  onChange={toggleCategory} /> Laptops
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" value={'Accessories'} onChange={toggleCategory} /> Accessories
              </label>
            </div>
          </div>

          {/* TYPES */}
          <div>
            <p className="font-medium text-gray-700 mb-2">Type</p>
            <div className="flex flex-col gap-3 text-sm text-gray-600">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" value={'Premium'} onChange={toggleSubCategory} /> Premium
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" value={'Mid-Range'} onChange={toggleSubCategory} /> Mid-Range
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" value={'Affordable'} onChange={toggleSubCategory}/> Affordable
              </label>
            </div>
          </div>

        </div>
      )}
    </div>

    {/* PRODUCT AREA */}
    <div className="flex-1">

      {/* TITLE + SORT */}
      <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4'>
        <Title title1="Our" title2="Products" className="mt-0" />

        <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-gray-300 px-2 py-1 rounded-md mt-3 sm:mt-0'>
          <option value="relevant">Sort By: Relevant</option>
          <option value="low-high">Low → High</option>
          <option value="high-low">High → Low</option>
        </select>
      </div>

      {/* PRODUCTS */}
      <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'>
        {filteredProducts.map((item, index) => (
        <Item
              key={index}
              id={item._id}
              name={item.name}
              image={item.image}
              description={item.description}
              storage={
                item.category === "Smartphone"
                  ? { storage: item.storage?.[0]}
                  : item.category === "Laptop"
                  ? {
                   ram: item.ramOptions?.[0],
                      ssd: item.storageOptions?.[0],
                    }
                  : null
              }
          />
        ))}
      </div>

    </div>

  </div>

</div>
  )
}

export default Shop