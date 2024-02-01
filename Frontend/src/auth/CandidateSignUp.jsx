import React from 'react';
import signup from '../assets/signup.svg';
import { FaGoogle, FaFacebookF, FaLinkedinIn } from "react-icons/fa6";

const CandidateSignUp = () => {
  return (
    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
      <div className='flex items-center justify-center h-full sm:order-first'> {/* Image container with order-first class for small screens */}
        <div className='flex items-center justify-center w-full py-4 h-screen-96 sm:h-screen sm:bg-background'>
          <img
            src={signup}
            alt='signup'
            className='w-full h-full mt-6 sm:mt-0 sm:rounded-lg'
          />
        </div>
      </div>


      <div className='pr-3'>
        <h1 className="flex justify-center mt-2 text-5xl font-bold leading-7 text-blue sm:mt-14 ">Sign Up</h1>
        <form action="#" method="POST"  className="max-w-2xl px-5 py-8 mt-6 space-y-6 lg:border-opacity-0 md:mr-3 sm:mt-12 sm:space-y-5 lg:mx-auto lg:rounded-xl lg:border-x-2 lg:border-t-2 lg:border-b-8 lg:border-blue/20 md:border-b-8 md:border-blue/20">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-6">
              
              <div className=" sm:col-span-3">
                <label htmlFor="first_name" className="block text-sm font-medium leading-5 text-gray-700">First name</label>
                <div className="mt-1 rounded-md shadow-sm">
                  <input
                    id="first_name"
                    type="text"
                    required
                    className="block w-full py-1 transition duration-150 ease-in-out rounded-md md:py-2 form-input sm:text-sm sm:leading-5 ring-1 focus:ring-blue focus:ring-offset-2 focus:outline-none focus:ring-2"
                  />
                </div>
              </div>
  
              <div className="sm:col-span-3">
                <label htmlFor="last_name" className="block text-sm font-medium leading-5 text-gray-700">Last name</label>
                <div className="mt-1 rounded-md shadow-sm">
                  <input
                    id="last_name"
                    type="text"
                    required
                    className="block w-full py-1 transition duration-150 ease-in-out rounded-md md:py-2 form-input sm:text-sm sm:leading-5 ring-1 focus:ring-blue focus:ring-offset-2 focus:outline-none focus:ring-2"
                  />
                </div>
              </div>
  
              <div className="sm:col-span-6">
                <label htmlFor="address" className="block text-sm font-medium leading-5 text-gray-700">Address</label>
                <div className="mt-1 rounded-md shadow-sm">
                  <input
                    id="address"
                    type="text"
                    required
                    className="block w-full py-1 transition duration-150 ease-in-out rounded-md md:py-2 form-input sm:text-sm sm:leading-5 ring-1 focus:ring-blue focus:ring-offset-2 focus:outline-none focus:ring-2"
                  />
                </div>
              </div>
  
              <div className="sm:col-span-3">
                <label htmlFor="phone" className="block text-sm font-medium leading-5 text-gray-700">Mobile Number</label>
                <div className="mt-1 rounded-md shadow-sm">
                  <input
                    id="phone1"
                    type="phone"
                    required
                    className="block w-full py-1 transition duration-150 ease-in-out rounded-md md:py-2 form-input sm:text-sm sm:leading-5 ring-1 focus:ring-blue focus:ring-offset-2 focus:outline-none focus:ring-2"
                  />
                </div>
              </div>
  
              <div className="sm:col-span-3">
                <label htmlFor="phone" className="block text-sm font-medium leading-5 text-gray-700">Fixed Number</label>
                <div className="mt-1 rounded-md shadow-sm">
                  <input
                    id="phone2"
                    type="phone"
                    required
                    className="block w-full py-1 transition duration-150 ease-in-out rounded-md md:py-2 form-input sm:text-sm sm:leading-5 ring-1 focus:ring-blue focus:ring-offset-2 focus:outline-none focus:ring-2"
                  />
                </div>
              </div>
  
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
  
              <div className="sm:col-span-3">
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
  
              <div className="sm:col-span-3">
                <label htmlFor="password" className="block text-sm font-medium leading-5 text-gray-700">Confirm Password</label>
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
              Sign Up
            </button>
          </div>

          <hr className='my-6' />

          <h3 className='flex justify-center font-medium'>or SignUp with </h3>

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

          <h3 className='flex justify-center text-20'>Already have an account? <span className='ml-3 font-semibold hover:underline text-blue hover:text-decoration-line:'><a href="/login"> SignIn</a></span></h3>
        </form>
      </div>
    </div>
  );
};

export default CandidateSignUp;