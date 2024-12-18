"use client";
import { PanelRightClose } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/Components/ui/button";
import { Calendar } from "@/Components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/Components/ui/popover";

const Navbar: React.FC = () => {
  const [date, setDate] = React.useState<Date>();

  return (
    <header className="sticky top-0 z-30 flex p-6 items-center gap-4 border-b border-b-gray-20 bg-dark-mode sm:static sm:h-auto sm:px-6">
      <button
        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border bg-dark-mode border-gray-20 shadow-sm hover:bg-accent hover:text-accent-foreground h-9 w-9 sm:hidden"
        type="button"
        aria-haspopup="dialog"
        aria-expanded="false"
        aria-controls="radix-:Rmb9uuuuu6ja:"
        data-state="closed"
      >
        <PanelRightClose className="lucide lucide-panel-left h-5 w-5" />
        <span className="sr-only">Toggle Menu</span>
      </button>
      <nav aria-label="breadcrumb" className="hidden md:flex">
        <ol className="flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5">
          <li className="inline-flex items-center gap-1.5">
            <a className="text-xl font-bold text-white" href="#">
              Dashboard
            </a>
          </li>
        </ol>
      </nav>
      <div className="relative ml-auto flex-1 md:grow-0">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-[240px] justify-start text-left font-normal bg-gray-10 hover:bg-gray-20 hover:text-white border-transparent p-3 h-14 text-dark-gray",
                !date && "text-muted-foreground"
              )}
            >
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 2.5V5.5"
                  stroke="#868686"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 2.5V5.5"
                  stroke="#868686"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.5 9.58984H20.5"
                  stroke="#868686"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 9V17.5C21 20.5 19.5 22.5 16 22.5H8C4.5 22.5 3 20.5 3 17.5V9C3 6 4.5 4 8 4H16C19.5 4 21 6 21 9Z"
                  stroke="#868686"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.6947 14.1992H15.7037"
                  stroke="#868686"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.6947 17.1992H15.7037"
                  stroke="#868686"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.9955 14.1992H12.0045"
                  stroke="#868686"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.9955 17.1992H12.0045"
                  stroke="#868686"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.29431 14.1992H8.30329"
                  stroke="#868686"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.29431 17.1992H8.30329"
                  stroke="#868686"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
};

export default Navbar;
