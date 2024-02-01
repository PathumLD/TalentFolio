import React from 'react'
import { CgProfile } from "react-icons/cg";

const CandidateSidebar = () => {
  return (
    <>
      <div className='flex flex-col justify-between w-16 h-auto text-center md:h-screen md:w-96'>
        <div className='bg-gray-100'> 
            <button className='flex flex-row items-center justify-start mx-4 my-2'>
                <CgProfile size={32} />
                <h2 className='ml-2'>Profile</h2>
            </button>
            <div className='flex flex-row items-center justify-start mx-4 my-2'>
                <CgProfile size={32} />
                <h2 className='ml-2'>Profile</h2>
            </div>
            <div className='flex flex-row items-center justify-start mx-4 my-2'>
                <CgProfile size={32} />
                <h2 className='ml-2'>Profile</h2>
            </div>
            <div className='flex flex-row items-center justify-start mx-4 my-2'>
                <CgProfile size={32} />
                <h2 className='ml-2'>Profile</h2>
            </div>
            <div className='flex flex-row items-center justify-start mx-4 my-2'>
                <CgProfile size={32} />
                <h2 className='ml-2'>Profile</h2>
            </div>
        </div>

      </div>
    </>
  )
}

export default CandidateSidebar
