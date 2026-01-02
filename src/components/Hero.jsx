import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade, Parallax } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const HeroCarousel = () => {
  return (
    <div className="w-full m-0">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade, Parallax]}
        effect="fade"
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        parallax={true}
        slidesPerView={1}
        className="w-full h-[60vh] sm:h-screen"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative w-full h-full">

            {/* Image with Parallax */}
            <img
              src={assets.slide_1}
              data-swiper-parallax="-200"
              className="absolute w-full h-full object-cover"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/70"></div>

            {/* Text + Button */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5">
              <h1 className="text-white text-3xl sm:text-5xl md:text-7xl font-bold opacity-0 animate-fadeInUp">
                Discover Premium Gadgets
              </h1>
              <p className="text-white text-base sm:text-lg md:text-xl mt-3 sm:mt-4 opacity-0 animate-fadeInUp delay-300">
                Upgrade your tech life with the latest devices
              </p>

               <Link to={'/shop'} > 
                <button className="mt-5 sm:mt-6 bg-white text-black px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-base sm:text-lg hover:bg-gray-200 transition-all opacity-0 animate-fadeInUp delay-500 cursor-pointer">
                   Shop Now
                </button>  
               </Link>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative w-full h-full">

            <img
              src={assets.slide_2}
              data-swiper-parallax="-200"
              className="absolute w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-linear-to-r from-black/50 to-black/70"></div>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5">
              <h1 className="text-white text-3xl sm:text-5xl md:text-7xl font-bold opacity-0 animate-fadeInUp">
                Best Deals Guaranteed
              </h1>
                 <p className="text-white text-base sm:text-lg md:text-xl mt-3 sm:mt-4 opacity-0 animate-fadeInUp delay-300">
                Save big on every purchase
              </p>

               <Link to={'/shop'} > 
                <button className="mt-5 sm:mt-6 bg-white text-black px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-base sm:text-lg hover:bg-gray-200 transition-all opacity-0 animate-fadeInUp delay-500 cursor-pointer">
                  View Deals
                </button>
               </Link>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative w-full h-full">

            <img
              src={assets.slide_3}
              data-swiper-parallax="-200"
              className="absolute w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-linear-to-tr from-black/40 to-black/80"></div>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5">
              <h1 className="text-white text-3xl sm:text-5xl md:text-7xl font-bold opacity-0 animate-fadeInUp">
                Nationwide Delivery
              </h1>
                 <p className="text-white text-base sm:text-lg md:text-xl mt-3 sm:mt-4 opacity-0 animate-fadeInUp delay-300">
                Fast, safe & secure delivery anywhere
              </p>

               <Link to={'/shop'} > 
                  <button className="mt-5 sm:mt-6 bg-white text-black px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-base sm:text-lg hover:bg-gray-200 transition-all opacity-0 animate-fadeInUp delay-500 cursor-pointer">
                    Order Now
                  </button>
               </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroCarousel;
