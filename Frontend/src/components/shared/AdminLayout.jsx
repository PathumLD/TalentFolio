import React from 'react'
import { Outlet } from 'react-router-dom';
import AdminSidebar from '../admin/common/AdminSidebar';
import CompanyNavbar from '../company/common/CompanyNavbar';

const AdminLayout = ({children}) => {
  return (
    <div className="flex w-screen h-screen sm:flex-row ">
      <span className=' hover:flex-auto'>
      {/* <AdminSidebar mobileSidebarOpen={mobileSidebarOpen}/> */}
      <AdminSidebar />
      </span>
      <div className="flex flex-col w-full h-screen ">
        {/* <AdminNavbar toggleMobileSidebar={toggleMobileSidebar}/> */}
        <CompanyNavbar />
        {children}
        <div className="grid h-full min-h-0 p-4 overflow-auto grid-col-6">{<Outlet />}</div>
      </div>
    </div>
  )
}

export default AdminLayout
