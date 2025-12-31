import { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const {setShowSearch, getCartCount} = useContext(ShopContext);

  return (
    <div className="flex items-center justify-between relative">
      {/* Logo */}
      <Link to={"/"}>
        <img src={assets.logo} className="w-64 cursor-pointer" alt="logo" />
      </Link>

      {/* Desktop Menu */}
      <div>
        <ul className="hidden sm:flex justify-between gap-5 text-sm text-gray-700">
          <NavLink to={"/"}>
            <p>HOME</p>
            <hr className="hidden w-full h-[1.5px] bg-gray-500" />
          </NavLink>
          <NavLink to={"/shop"}>
            <p>SHOP</p>
            <hr className="hidden w-full h-[1.5px] bg-gray-500" />
          </NavLink>
          <NavLink to={"/about"}>
            <p>ABOUT</p>
            <hr className="hidden w-full h-[1.5px] bg-gray-500" />
          </NavLink>
          <NavLink to={"/contact"}>
            <p>CONTACT</p>
            <hr className="hidden w-full h-[1.5px] bg-gray-500" />
          </NavLink>
        </ul>
      </div>

      {/* Right Icons */}
      <div className="flex items-center justify-between gap-5">
        <img
          className="w-5 cursor-pointer"
          src={assets.search_icon}
          onClick={()=> setShowSearch(true)}
          alt="search-icon"
        />

        {/* Profile Dropdown */}
        <div className="group relative z-20">
           <Link to={'/login-signup'}>
           <img
            className="w-5 cursor-pointer"
            src={assets.profile_icon}
            alt="profile-icon"
          /></Link>
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-200 text-gray-400 rounded-2xl">
              <p className="group-hover:text-black cursor-pointer">My Profile</p>
              <Link to={'/orders'}><p className="group-hover:text-black cursor-pointer">Orders</p></Link>
              <p className="group-hover:text-black cursor-pointer">Logout</p>
            </div>
          </div>
        </div>

        {/* Cart */}
        <Link to={"/cart"} className="relative">
          <img
            className="w-5 cursor-pointer"
            src={assets.cart_icon}
            alt="cart-icon"
          />
          <p className="absolute right-[-5px] bottom-[-5px] bg-black aspect-square leading-4 rounded-full text-white text-center w-4 text-[8px]">
            {getCartCount()}
          </p>
        </Link>

        {/* Hamburger Icon */}
        <img
          onClick={() => setOpenMenu(true)}
          className="sm:hidden w-6 cursor-pointer"
          src={assets.menu_icon}
          alt="menu-icon"
        />
      </div>

      {/* Mobile Menu Overlay */}
      {openMenu && (
        <div className="fixed inset-0 bg-black/40 z-40" onClick={() => setOpenMenu(false)}></div>
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-60 bg-white shadow-lg z-50 p-6 transform transition-transform duration-300 ${
          openMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <img
          src={assets.close_icon}
          onClick={() => setOpenMenu(false)}
          className="w-6 mb-6 ml-45 cursor-pointer"
        />

        <ul className="flex flex-col gap-6 text-gray-700 text-lg">
          <NavLink onClick={() => setOpenMenu(false)} to={"/"}>
            <p>HOME</p>
          </NavLink>

          <NavLink onClick={() => setOpenMenu(false)} to={"/shop"}>
            <p>SHOP</p>
          </NavLink>

          <NavLink onClick={() => setOpenMenu(false)} to={"/about"}>
            <p>ABOUT</p>
          </NavLink>

          <NavLink onClick={() => setOpenMenu(false)} to={"/contact"}>
            <p>CONTACT</p>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
