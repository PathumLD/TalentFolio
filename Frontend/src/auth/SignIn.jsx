import React from 'react';
import signin from '../assets/signin.svg';
import { FaGoogle, FaFacebookF, FaLinkedinIn } from "react-icons/fa6";

const SignIn = () => {
  return (
    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>

      <div className='flex items-center justify-center h-full sm:order-first'> {/* Image container with order-first class for small screens */}
        <div className='flex items-center justify-center w-full h-screen-96 sm:h-screen sm:bg-background'>
          <img
            src={signin}
            alt='signup'
            className='w-full h-full mt-6 sm:mt-0 sm:rounded-lg'
          />
        </div>
      </div>

      <div className='pr-3 mt-6 sm:order-last'> {/* Start of the form content, with order-last class for small screens */}
        <h1 className="flex justify-center mt-6 text-5xl font-bold leading-7 text-blue sm:mt-10 ">Sign In</h1>
        <form action="#" method="POST" className="max-w-xl px-5 py-16 mt-16 space-y-6 lg:border-opacity-0 md:mr-3 sm:mt-20 sm:space-y-5 lg:mx-auto lg:rounded-xl lg:border-x-2 lg:border-t-2 lg:border-b-8 lg:border-blue/20">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-6">
              
              
  
              <div className=" sm:col-span-6">
                <label htmlFor="email" className="block text-sm font-medium leading-5 text-gray-700">Email</label>
                <div className="mt-1 rounded-md shadow-sm">
                  <input
                    id="email"
                    type="email"
                    required
                    className="block w-full py-1 transition duration-150 ease-in-out rounded-md md:py-2 form-input sm:text-sm sm:leading-5 ring-1 focus:ring-blue focus:ring-offset-2 focus:outline-none focus:ring-2"
                  />
                </div>
              </div>
  
              <div className="sm:col-span-6">
                <label htmlFor="password" className="block text-sm font-medium leading-5 text-gray-700">Password</label>
                <div className="mt-1 rounded-md shadow-sm">
                  <input
                    id="password"
                    type="password"
                    required
                    className="block w-full py-1 transition duration-150 ease-in-out rounded-md md:py-2 form-input sm:text-sm sm:leading-5 ring-1 focus:ring-blue focus:ring-offset-2 focus:outline-none focus:ring-2"
                  />
                </div>
              </div>
  
              </div>
          <div className="flex justify-center">
            <button className="px-12 py-3 my-4 text-lg font-semibold text-white bg-blue rounded-xl" type="submit">
              Sign In
            </button>
          </div>
          <hr className='my-6' />

          <h3 className='flex justify-center font-medium'>or SignIn with </h3>

          <div className='flex justify-center gap-8'>
            <button className="px-5 py-5 text-lg font-semibold text-white rounded-full bg-blue" type="submit">
              <FaGoogle />
            </button>
            <button className="px-5 py-5 text-lg font-semibold text-white rounded-full bg-blue" type="submit">
              <FaFacebookF />
            </button>
            <button className="px-5 py-5 text-lg font-semibold text-white rounded-full bg-blue" type="submit">
              <FaLinkedinIn />
            </button>
          </div>

          <h3 className='flex justify-center text-20'>Don't have an account? <span className='ml-3 font-semibold hover:underline text-blue hover:text-decoration-line:'><a href="/"> SignUp</a></span></h3>
        </form>
      </div>

      
    </div>
  );
}

export default SignIn;