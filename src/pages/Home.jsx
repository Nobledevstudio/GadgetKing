import React from 'react'
import Hero from '../components/Hero'
import Offers from '../components/Offers'
import LatestArrivals from '../components/LatestArrivals'
import SwetDeals from '../components/SwetDeals'
import BestSeller from '../components/BestSeller'
import NewsLetter from '../components/NewsLetter'
import Testimonials from '../components/Testimonials'

const Home = () => {
  return (
    <div>
         <div className='w-screen relative left-1/2 right-1/2 -mx-[50vw]'>
       <Hero/>
         </div>
         <Offers/>
         <LatestArrivals/>
           <div className='w-screen relative left-1/2 right-1/2 -mx-[50vw]'>
         <SwetDeals/>
         </div>
         <BestSeller/>
         <NewsLetter/>
          <div className='w-screen relative left-1/2 right-1/2 -mx-[50vw]'>
              <Testimonials/>
          </div>      
    </div>
  )
}

export default Home