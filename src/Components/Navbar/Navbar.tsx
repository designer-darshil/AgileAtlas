import React from "react";

const Navbar: React.FC = () => {
  return (
    <header className="border-b border-b-[#222222] p-6 flex w-full justify-between items-center">
      <h4 className="font-bold text-lg">Dashboard</h4>

      <input type="date" className="inline bg-[#17191C] py-4 px-6 rounded-lg" />
    </header>
  );
};

export default Navbar;
