import React from "react";
import Sidebar from "@/Components/Sidebar/Sidebar";
import Navbar from "@/Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import RightBar from "@/Components/RightBar/RightBar";

const Layout: React.FC = () => {
  return (
    <div className="grid grid-cols-[86px_1fr_320px] h-screen">
      <Sidebar />
      <main className="h-full">
        <Navbar />
        <div className="p-6">
          <Outlet />
        </div>
      </main>
      <RightBar />
    </div>
  );
};

export default Layout;
