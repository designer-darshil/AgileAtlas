import React from "react";

const RightBar: React.FC = () => {
  return (
    <>
      <div className="bg-black border-l border-l-[#222222] text-gray flex flex-col justify-start gap-4 items-center min-h-screen w-80 z-10 p-6">
        <div className="bg-slate-800 p-4 rounded-lg w-full">
          Right Bar Content goes here.
        </div>
        <div className="bg-slate-800 p-4 rounded-lg w-full">
          Right Bar Content goes here.
        </div>
      </div>
    </>
  );
};

export default RightBar;
