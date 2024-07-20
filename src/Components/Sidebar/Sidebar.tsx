import React from "react";
import { NavLink } from "react-router-dom";
// import Logo from "@/assets/Logo.svg";
// import { routes } from "@/routes/routes";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/Components/ui/dropdown-menu";
// import { useTheme } from "../ThemeProvider";
// import { Button } from "../ui/button";
import {
  Home,
  LineChart,
  Package,
  Package2,
  Settings,
  ShoppingCart,
  Users2,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/Components/ui/tooltip";

const Sidebar: React.FC = () => {
  // const { setTheme } = useTheme();
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 py-4">
        <NavLink
          to="#"
          className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
        >
          <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
          <span className="sr-only">Acme Inc</span>
        </NavLink>
        <Tooltip>
          <TooltipTrigger asChild>
            <NavLink
              to="#"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
            >
              <Home className="h-5 w-5" />
              <span className="sr-only">Dashboard</span>
            </NavLink>
          </TooltipTrigger>
          <TooltipContent side="right">Dashboard</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <NavLink
              to="#"
              className="flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Orders</span>
            </NavLink>
          </TooltipTrigger>
          <TooltipContent side="right">Orders</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <NavLink
              to="#"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
            >
              <Package className="h-5 w-5" />
              <span className="sr-only">Products</span>
            </NavLink>
          </TooltipTrigger>
          <TooltipContent side="right">Products</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <NavLink
              to="#"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
            >
              <Users2 className="h-5 w-5" />
              <span className="sr-only">Customers</span>
            </NavLink>
          </TooltipTrigger>
          <TooltipContent side="right">Customers</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <NavLink
              to="#"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
            >
              <LineChart className="h-5 w-5" />
              <span className="sr-only">Analytics</span>
            </NavLink>
          </TooltipTrigger>
          <TooltipContent side="right">Analytics</TooltipContent>
        </Tooltip>
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-4">
        <Tooltip>
          <TooltipTrigger asChild>
            <NavLink
              to="#"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
            >
              <Settings className="h-5 w-5" />
              <span className="sr-only">Settings</span>
            </NavLink>
          </TooltipTrigger>
          <TooltipContent side="right">Settings</TooltipContent>
        </Tooltip>
      </nav>
    </aside>

    // <aside className="dark:bg-base-black bg-base-white border-r border-r-gray-20 text-gray flex flex-col justify-between items-center min-h-screen w-[86px] z-10">
    //   <div className="w-full flex flex-col items-center justify-center gap-8">
    //     <div className="w-full flex items-center justify-center p-4">
    //       <button
    //         id="toggleSidebar"
    //         className="lg:hidden block fixed top-4 right-4 z-20 p-2 rounded-md shadow-md"
    //       >
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="h-6 w-6"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="black"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             d="M4 6h16M4 12h16M4 18h16"
    //           />
    //         </svg>
    //       </button>
    //       <NavLink to={routes.default}>
    //         <img src={Logo} alt="logo" />
    //       </NavLink>
    //     </div>
    //     <div className="w-full space-y-3 text-center">
    //       <NavLink
    //         to={routes.default}
    //         className={({ isActive }) =>
    //           `p-3 text-2xl block w-full relative text-center ${
    //             isActive ? "border-l-4 border-l-white fill-white" : ""
    //           }`
    //         }
    //       >
    //         <i className="ri-pie-chart-line"></i>
    //       </NavLink>
    //       <DropdownMenu>
    //         <DropdownMenuTrigger asChild>
    //           <Button variant="outline" size="icon">
    //             <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
    //             <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    //             <span className="sr-only">Toggle theme</span>
    //           </Button>
    //         </DropdownMenuTrigger>
    //         <DropdownMenuContent align="start" alignOffset={0}>
    //           <DropdownMenuItem onClick={() => setTheme("light")}>
    //             Light
    //           </DropdownMenuItem>
    //           <DropdownMenuItem onClick={() => setTheme("dark")}>
    //             Dark
    //           </DropdownMenuItem>
    //         </DropdownMenuContent>
    //       </DropdownMenu>
    //     </div>
    //   </div>
    // </aside>
  );
};

export default Sidebar;
