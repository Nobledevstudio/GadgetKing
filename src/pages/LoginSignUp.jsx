import React, { useState } from 'react'
import { assets } from '../assets/assets'

const LoginSignUp = () => {
  const [currentState, setCurrentState] = useState('Login')

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    // handle login/signup logic here
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="bg-white w-full max-w-md p-8 rounded-lg shadow-lg">
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">{currentState}</h2>
          <p className="text-gray-500 mt-2">
            {currentState === 'Login'
              ? 'Welcome back! Please login to your account.'
              : 'Create your account to get started.'}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={onSubmitHandler} className="flex flex-col gap-4">
          {/* Name field only for Sign Up */}
          {currentState === 'Sign Up' && (
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Full Name"
            />
          )}

          <input
            type="email"
            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Email"
          />
          <input
            type="password"
            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Password"
          />

          {/* Forgot & Toggle */}
          <div className="flex justify-between items-center text-sm text-gray-500">
            {currentState === 'Login' && (
              <p className="hover:text-blue-500 cursor-pointer">Forgot Password?</p>
            )}
            <p
              className="hover:text-blue-500 cursor-pointer"
              onClick={() =>
                setCurrentState(currentState === 'Login' ? 'Sign Up' : 'Login')
              }
            >
              {currentState === 'Login' ? 'Create Account' : 'Login Here'}
            </p>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="mt-4 w-full bg-black text-white py-3 rounded font-medium hover:bg-gray-800 transition"
          >
            {currentState === 'Login' ? 'Login' : 'Sign Up'}
          </button>

          {/* Divider */}
          <div className="flex items-center my-4">
            <hr className="flex-1 border-gray-300" />
            <span className="mx-2 text-gray-400 text-sm">OR</span>
            <hr className="flex-1 border-gray-300" />
          </div>

          {/* Social login (optional) */}
          <div className="flex flex-col gap-3">
           <button className="w-full py-3 border rounded flex items-center justify-center gap-3 hover:bg-gray-100 transition cursor-pointer">
              <img src={assets.google} alt="Google" className="w-5 h-5" />
              Continue with Google
            </button>

          <button className="w-full py-3 border rounded flex items-center justify-center gap-3 hover:bg-gray-100 transition cursor-pointer">
            <img src={assets.facebook} alt="Facebook" className="w-5 h-5" />
            Continue with Facebook
          </button>

          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginSignUp
