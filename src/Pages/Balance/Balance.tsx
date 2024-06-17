import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import AreaChart from "../../Components/Charts/AreaChart/AreaChart";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Balance", "Pending"],
  datasets: [
    {
      data: [18, 15],
      backgroundColor: ["#23C55E", "#FE784B"],
      borderWidth: 1,
    },
  ],
};
const Balance: React.FC = () => {
  return (
    <>
      <main className="lg:ml-64 h-screen">
        <Navbar />
        <div className="p-8">
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-3 rounded-lg">
              <div className="card-header flex items-center justify-between mb-4">
                <h5 className="text-lg">Available Balance</h5>
                <i className="ri-more-fill text-black text-2xl"></i>
              </div>
              <Doughnut data={data} />
            </div>
            <div className="col-span-2 bg-white p-3 rounded-lg">
              <div className="card-header flex items-center justify-between mb-4">
                <h5 className="text-lg">Balance Activity</h5>
                <i className="ri-more-fill text-black text-2xl"></i>
              </div>
              <AreaChart />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Balance;
