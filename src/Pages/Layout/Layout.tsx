import React from "react";
import Sidebar from "@/Components/Sidebar/Sidebar";
import Navbar from "@/Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import RightBar from "@/Components/RightBar/RightBar";

const Layout: React.FC = () => {
  return (
    <div className="grid grid-rows-[86px_1fr_1fr]">
      <Sidebar />
      <main className="ml-[86px] mr-80 h-screen">
        <Navbar />
        <Outlet />
      </main>
      <RightBar />
    </div>
  );
};

export default Layout;
