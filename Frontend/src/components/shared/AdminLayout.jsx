import React from 'react'
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div className="flex flex-row w-screen h-screen sm:flex-row ">
      <span className='max-sm:hidden hover:flex-auto'>
      {/* <AdminSidebar mobileSidebarOpen={mobileSidebarOpen}/> */}
      <AdminSidebar />
      </span>
      <div className="flex flex-col w-full h-screen ">
        {/* <AdminNavbar toggleMobileSidebar={toggleMobileSidebar}/> */}
        <AdminNavbar />
        {children}
        <div className="grid h-full min-h-0 p-4 overflow-auto grid-col-6">{<Outlet />}</div>
      </div>
    </div>
  )
}

export default AdminLayout
