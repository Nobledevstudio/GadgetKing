import React from 'react';
import Title from './Title';

const NewsLetter = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 mb-0 md:px-12 lg:px-24 flex flex-col items-center text-center">
      {/* Section Title */}
      <Title title1="Our Latest News" title2="& Articles" />
      <p className="text-gray-600 max-w-3xl text-sm md:text-base mt-4 mb-8">
        Stay updated with the latest tech trends, gadget reviews, and buying guides from Elegance Gadgets.  
        Our blog helps you make smarter choices when shopping for laptops, smartphones, and accessories.
      </p>

     {/* Subscription Box */}
      <div className="bg-white shadow-md rounded-lg p-6 md:p-8 w-full max-w-lg flex flex-col items-center justify-center gap-4">
        <div className="flex-1 w-full">
          <p className="text-gray-700 font-semibold mb-2 text-center md:text-left">
            Subscribe Now and Get <span className="text-teal-600">20% Off</span>
          </p>

          <form className="flex flex-col sm:flex-row w-full gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-md sm:rounded-l-md sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-teal-600 text-white rounded-md sm:rounded-l-none sm:rounded-r-md hover:bg-teal-700 transition-colors font-semibold"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>


      <p className="text-gray-400 text-xs mt-4 max-w-xs">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </section>
  );
};

export default NewsLetter;
