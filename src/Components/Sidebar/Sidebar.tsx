import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import { routes } from "../../routes/routes";

const Sidebar: React.FC = () => {
  return (
    <aside className="bg-black border-r border-r-[#222222] text-gray flex flex-col justify-between items-center min-h-screen w-[86px] z-10">
      <div className="w-full flex flex-col items-center justify-center gap-8">
        <div className="w-full flex items-center justify-center p-4">
          <button
            id="toggleSidebar"
            className="lg:hidden block fixed top-4 right-4 z-20 p-2 rounded-md shadow-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <NavLink to={routes.default}>
            <img src={Logo} alt="logo" />
          </NavLink>
        </div>
        <div className="w-full space-y-3 text-start">
          <NavLink
            to={routes.default}
            className={({ isActive }) =>
              `p-3 text-2xl block w-full relative text-center ${
                isActive ? "border-l-4 border-l-white fill-white" : ""
              }`
            }
          >
            <i className="ri-pie-chart-line"></i>
          </NavLink>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
