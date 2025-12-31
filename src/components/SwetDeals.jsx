import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const SweetDeals = () => {
  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/30 to-black/70 z-10"></div>

      {/* Banner Image */}
      <img
        className="w-full h-full object-cover"
        src={assets.sweet_deals}
        alt="Sweet Deals"
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 md:px-0 z-20">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
          Sweet Deals You Can't Miss
        </h1>
        <p className="text-sm md:text-lg lg:text-xl text-white mb-6 max-w-2xl">
          Enjoy limited-time discounts on the latest laptops, smartphones, and
          accessories. Shop now to grab unbeatable gadget deals before they
          sell out!
        </p>
        <Link to="/shop">
          <button className="px-6 py-3 md:px-8 md:py-4 bg-teal-600 hover:bg-teal-700 transition-colors rounded-lg text-white font-semibold shadow-lg">
            Shop Now
          </button>
        </Link>
      </div>
    </section>
  );
};

export default SweetDeals;
