import React from "react";

const Dashboard: React.FC = () => {
  return (
    <>
      <div className="p-8">
        <div className="text-start mb-6">
          <h1 className="text-2xl text-black font-semibold">Dashboard</h1>
          <h6 className="text-lg">Here is the summary of overall data</h6>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-white rounded-lg shadow p-4 text-start">
            <div className="flex items-center gap-3 mb-5">
              <h2 className="text-xl font-semibold">$984,86.00</h2>
              <h2 className="text-xl text-gray">February Spend</h2>
            </div>
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold">$984,86.00</h2>
              <h2 className="text-xl font-semibold text-success">+4,85%</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
