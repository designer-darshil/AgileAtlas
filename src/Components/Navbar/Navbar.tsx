import React from "react";

const Navbar: React.FC = () => {
  return (
    <header className="bg-white p-4 lg:px-8 lg:py-4 lg:sticky lg:top-0 lg:z-20 flex justify-between">
      <div className="flex items-center">
        <div className="w-1/2">
          <input
            type="text"
            className="w-full border rounded p-2"
            placeholder="Search Items for your use..."
          />
        </div>
      </div>
      <div className="flex items-center mt-4 lg:mt-0">
        <div className="ml-4 lg:ml-0">
          <button className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600">
            Notifications
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
