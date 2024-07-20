import React from "react";

const RightBar: React.FC = () => {
  return (
    <>
      <div className="dark:bg-base-black bg-base-white border-l border-l-gray-20 text-white flex flex-col justify-start gap-4 items-center min-h-screen w-80 z-10 p-6">
        <div className="bg-gray-10 p-4 rounded-lg w-full">
          Right Bar Content goes here.
        </div>
        <div className="bg-gray-10 p-4 rounded-lg w-full">
          Right Bar Content goes here.
        </div>
      </div>
    </>
  );
};

export default RightBar;
