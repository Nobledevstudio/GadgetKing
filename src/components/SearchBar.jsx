import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);

   const [visible, setVisible] = useState(false)
   const location = useLocation();

   useEffect(()=>{
      if (location.pathname.includes('shop') && showSearch) {
          setVisible(true)
      }else{
           setVisible(false)
      }
       
   },[location])

  return showSearch && visible ? (
    <div className="border-t border-b bg-gray-50 py-4">
      <div className="max-w-md mx-auto flex items-center gap-3">
        
        {/* SEARCH INPUT BOX */}
        <div className="flex flex-1 items-center gap-3 border border-gray-300 bg-white px-4 py-2 rounded-full shadow-sm">
          <img src={assets.search_icon} className="w-4 opacity-70" alt="search icon" />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search products..."
            className="flex-1 outline-none text-sm bg-transparent"
          />

          {search && (
            <button
              onClick={() => setSearch('')}
              className="text-gray-500 hover:text-gray-700 text-xs"
            >
              Clear
            </button>
          )}
        </div>

        {/* CLOSE ICON */}
        <img
          onClick={()=>setShowSearch(false)}
          src={assets.close_icon}
          alt="close search"
          className="w-5 cursor-pointer opacity-60 hover:opacity-100"
        />
      </div>
    </div>
  ) : null
};

export default SearchBar;
