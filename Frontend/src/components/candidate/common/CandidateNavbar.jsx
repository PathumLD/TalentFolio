import { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon } from '@heroicons/react/24/outline'
import dp from '../../../assets/dp.jpg'
import { FaBars } from "react-icons/fa";


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  
   

const CandidateNavbar = ({ toggleMobileSidebar }) => {
  


  return (
    <Disclosure as='nav' className='w-full h-16 bg-white border-b-2 shadow-md sm:h-20 border-b-gray-100'>
    <>
      <div className='right-0 px-2 mx-auto sm:px-6 lg:px-8'>
        <div className='relative flex items-center justify-between h-16 sm:justify-end'>
          <button onClick={toggleMobileSidebar} className='flex text-blue sm:hidden'>
            <FaBars />
          </button>

             
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="relative p-1 bg-white rounded-full text-primary-text hover:text-blue focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only ">View notifications</span>
                  <BellIcon className="w-6 sm:w-8" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex mt-0 text-sm bg-gray-800 rounded-full sm:mt-2 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue">
                      <span className="absolute -inset-1.5 " />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="w-12 h-12 rounded-full sm:w-14 sm:h-14"
                        src= {dp}
                        alt="Profile Picture"
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          
        </>
    </Disclosure>
    
  )
}

export default CandidateNavbar
