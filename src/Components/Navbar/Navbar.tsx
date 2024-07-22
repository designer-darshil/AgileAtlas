import React from "react";

const Navbar: React.FC = () => {
  return (
    // <header className="border-b border-b-[#222222] p-6 flex w-full justify-between items-center">
    //   <h4 className="font-bold text-lg">Dashboard</h4>

    //   <input type="date" className="inline bg-[#17191C] py-4 px-6 rounded-lg" />
    // </header>
    <header className="sticky top-0 z-30 flex p-6 items-center gap-4 border-b border-b-gray-20 bg-dark-mode sm:static sm:h-auto sm:px-6">
      <button
        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 w-9 sm:hidden"
        type="button"
        aria-haspopup="dialog"
        aria-expanded="false"
        aria-controls="radix-:Rmb9uuuuu6ja:"
        data-state="closed"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-panel-left h-5 w-5"
        >
          <rect width="18" height="18" x="3" y="3" rx="2"></rect>
          <path d="M9 3v18"></path>
        </svg>
        <span className="sr-only">Toggle Menu</span>
      </button>
      <nav aria-label="breadcrumb" className="hidden md:flex">
        <ol className="flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5">
          <li className="inline-flex items-center gap-1.5">
            <a className="transition-colors hover:text-foreground" href="#">
              Dashboard
            </a>
          </li>
        </ol>
      </nav>
      <div className="relative ml-auto flex-1 md:grow-0">
        <input
          type="date"
          className="inline bg-[#17191C] py-4 px-6 rounded-lg"
        />
      </div>
    </header>
  );
};

export default Navbar;
