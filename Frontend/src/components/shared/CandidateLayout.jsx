import React, { useState } from 'react';
import CandidateNavbar from '../candidate/CandidateNavbar';
import CandidateSidebar from '../candidate/CandidateSidebar';
import { Outlet } from 'react-router-dom';

const CandidateLayout = ({ children }) => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const toggleMobileSidebar = () => {
    setMobileSidebarOpen(!mobileSidebarOpen);
    console.log(mobileSidebarOpen);
  };
  
  return (
    <div className="flex flex-row w-screen h-screen sm:flex-row ">
    <span className='max-sm:hidden hover:flex-auto'>
    <CandidateSidebar mobileSidebarOpen={mobileSidebarOpen}/>
    </span>
    <div className="flex flex-col w-full h-screen ">
      <CandidateNavbar toggleMobileSidebar={toggleMobileSidebar}/>
      {children}
      <div className="grid h-full min-h-0 p-4 overflow-auto grid-col-6">{<Outlet />}</div>
    </div>
  </div>
  );
};

export default CandidateLayout;
