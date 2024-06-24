import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div className="grid grid-rows-[7rem_1fr]">
      <Sidebar />
      <main className="lg:ml-64 h-screen">
        <Navbar />
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
