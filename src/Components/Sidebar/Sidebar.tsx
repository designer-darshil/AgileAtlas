import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "@/assets/Logo.svg";
// import { routes } from "@/routes/routes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import { useTheme } from "@/Components/ThemeProvider";
import { Button } from "@/Components/ui/button";
import { Home, Moon, Sun } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/Components/ui/tooltip";

const Sidebar: React.FC = () => {
  const { setTheme } = useTheme();
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-20 flex-col items-center border-r border-r-gray-20 bg-background sm:flex dark:bg-base-black">
      <nav className="flex flex-col items-center gap-4 px-2 py-4">
        <NavLink
          to="#"
          className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
        >
          <img src={Logo} alt="logo" />
          <span className="sr-only">Acme Inc</span>
        </NavLink>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
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
        </TooltipProvider>
      </nav>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="link" size="icon">
            <Sun className="h-[1.2rem] w-[1.2rem] dark:text-white text-dark-gray-50 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] dark:text-white text-dark-gray-50 w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" alignOffset={0}>
          <DropdownMenuItem onClick={() => setTheme("light")}>
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            Dark
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </aside>
  );
};

export default Sidebar;
