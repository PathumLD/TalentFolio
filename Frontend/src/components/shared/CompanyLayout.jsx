import React, { useState } from 'react';
import CompanyNavbar from '../company/common/CompanyNavbar';
import CompanySidebar from '../company/common/CompanySidebar';
import { Outlet } from 'react-router-dom';

const CompanyLayout = ({ children }) => {
  // const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  // const toggleMobileSidebar = () => {
  //   setMobileSidebarOpen(!mobileSidebarOpen);
  //   console.log(mobileSidebarOpen);
  // };
  
  return (
    <div className="flex flex-row w-screen h-screen sm:flex-row ">
    <span className='max-sm:hidden hover:flex-auto'>
    {/* <CompanySidebar mobileSidebarOpen={mobileSidebarOpen}/> */}
    <CompanySidebar />
    </span>
    <div className="flex flex-col w-full h-screen ">
      {/* <CompanyNavbar toggleMobileSidebar={toggleMobileSidebar}/> */}
      <CompanyNavbar />
      {children}
      <div className="grid h-full min-h-0 p-4 overflow-auto grid-col-6">{<Outlet />}</div>
    </div>
  </div>
  );
};

export default CompanyLayout;