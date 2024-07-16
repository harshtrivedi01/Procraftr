
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import ProfilePage from './Profile';
import { FaBars } from 'react-icons/fa'; // Import hamburger icon

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      <div className="w-full shadow-md">
        <ProfilePage />
      </div>
      <div className="flex flex-1 w-full  mt-4 bg-white shadow-md rounded-lg overflow-hidden">
        {/* Hamburger icon for mobile view */}
        <div className="md:hidden">
          <button onClick={toggleSidebar} className="p-4 focus:outline-none">
            <FaBars className="text-2xl" />
          </button>
        </div>

        {/* Sidebar */}
        <div className={`md:w-64 flex-shrink-0 md:block ms-40 ${isSidebarOpen ? 'block' : 'hidden'}`}>
          <Sidebar onClose={closeSidebar} />
        </div>

        {/* Content area */}
        <div className="flex-1 w-full max-w-8xl p-4 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
