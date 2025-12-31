import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { testimonials, assets } from "../assets/assets";

const Testimonials = () => {
  return (
    <section className="relative py-20 px-6 md:px-12 mt-10 lg:px-24">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${assets.testimonial_bg})` }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Side */}
        <div className="md:w-1/3 text-white text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Tech Lovers Everywhere
          </h1>
          <p className="mb-6 text-gray-200">
            See why customers across Nigeria choose Elegance Gadgets for laptops, smartphones,
            and accessories. Real reviews. Real experiences.
          </p>
          <Link to="/shop">
            <button className="px-6 py-3 md:px-8 md:py-4 bg-teal-600 hover:bg-teal-700 transition-colors rounded-lg text-white font-semibold shadow-lg">
              All Testimonials
            </button>
          </Link>
        </div>

        {/* Right Side - Slider */}
        <div className="md:w-2/3 w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">
            What Our Customers Say
          </h2>

          <Swiper
            modules={[Autoplay]}
            spaceBetween={40}
            slidesPerView={2}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-6 md:p-10 rounded-xl shadow-xl flex flex-col items-center text-center transition-transform transform hover:-translate-y-3 hover:scale-105 duration-300">
                  <p className="text-gray-800 mb-6 text-base md:text-lg font-medium">
                    "{testimonial.text}"
                  </p>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                    {testimonial.name}
                  </h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
