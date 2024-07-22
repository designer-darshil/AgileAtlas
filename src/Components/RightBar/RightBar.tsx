import React from "react";

const RightBar: React.FC = () => {
  return (
    <>
      <div className="fixed inset-y-0 right-0 z-10 hidden w-96 flex-col border-l border-l-gray-20 bg-background sm:flex dark:bg-base-black">
        <div className="p-6 flex flex-col items-start justify-start gap-3">
          <div className="bg-gray-10 p-4 rounded-lg w-full">
            Notifications Content goes here.
          </div>
          <div className="bg-gray-10 p-4 rounded-lg w-full">
            Recent Activity Content goes here.
          </div>
        </div>
      </div>
    </>
  );
};

export default RightBar;
