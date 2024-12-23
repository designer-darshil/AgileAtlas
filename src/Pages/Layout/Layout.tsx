import React from "react";
import Sidebar from "@/Components/Sidebar/Sidebar";
import Navbar from "@/Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import RightBar from "@/Components/RightBar/RightBar";
import { useLocation } from "react-router-dom";

const Layout: React.FC = () => {
  const location = useLocation();
  const isDefaultPage = location.pathname === "/";
  return (
    <>
      <div>
        <Sidebar />
        <main
          className={`h-full ${
            isDefaultPage ? "sm:pl-20 sm:pr-96" : "sm:pl-20"
          }`}
        >
          {isDefaultPage && <Navbar />}

          <div>
            <Outlet />
          </div>
        </main>
        {isDefaultPage && <RightBar />}
      </div>
    </>
  );
};

export default Layout;
