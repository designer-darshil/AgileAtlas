import React from "react";

const Navbar: React.FC = () => {
  return (
    <div className="bg-white text-black fixed w-screen top-0 left-0 ml-[320px] p-4">
      <div>
        <input
          type="search"
          placeholder="Search Here"
          className="bg-[#fafafa] p-3 rounded-lg"
        />
      </div>
    </div>
  );
};

export default Navbar;
