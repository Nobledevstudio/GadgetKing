import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import Shop from './pages/Shop'
import Product from './pages/Product'
import About from './pages/About'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Orders from './pages/Orders'
import PlaceOrder from './pages/PlaceOrder'
import LoginSignUp from './pages/LoginSignUp'
import NoPaddingLayout from './layouts/NoPaddingLayout'
import PaddingLayout from './layouts/PaddingLayout'

const App = () => {
  return (
    <div>
      {/* Navbar stays global */}
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <Navbar />
      </div>

      <Routes>
        {/*  SHOP LAYOUT (NO PADDING) */}
        <Route element={<NoPaddingLayout />}>
             <Route path="/shop" element={<Shop />} />
             <Route path="/shop/:productId" element={<Product />} />
             <Route path="/about" element={<About />} />
        </Route>

        {/* DEFAULT LAYOUT (WITH PADDING) */}
        <Route element={<PaddingLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login-signup" element={<LoginSignUp />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/place-order" element={<PlaceOrder />} />
        </Route>
      </Routes>

      {/* Footer stays global */}
      <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw]">
        <Footer />
      </div>
    </div>
  )
}

export default App
