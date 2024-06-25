import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import AreaChart from "../../Components/Charts/AreaChart/AreaChart";
import NeedHelp from "../../assets/NeedHelp.png";

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
      <div className="p-8">
        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-6 mb-6">
          <div className="bg-white p-3 rounded-lg">
            <div className="card-header flex items-center justify-between mb-4">
              <h5 className="text-lg">Available Balance</h5>
              <button className="p-2">
                <i className="ri-more-fill text-black text-2xl"></i>
              </button>
            </div>
            <div>
              <Doughnut data={data} className="w-full" />
            </div>
          </div>
          <div className="col-span-2 bg-white p-3 rounded-lg">
            <div className="card-header flex items-center justify-between mb-4">
              <h5 className="text-lg">Balance Activity</h5>
              <i className="ri-more-fill text-black text-2xl"></i>
            </div>
            <div>
              <AreaChart />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-6">
          <div className="col-span-2 max-md:w-full bg-white p-3 rounded-lg">
            <div className="card-header flex items-center justify-between mb-4">
              <h5 className="text-lg">Recent Transaction</h5>
              <i className="ri-more-fill text-black text-2xl"></i>
            </div>
            <div>
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                  <tbody>
                    <tr className="bg-white border-b border-b-[#F2F4FA]">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                      >
                        Load Balance
                      </th>
                      <td className="px-6 py-4">8 July, 2023</td>
                      <td className="px-6 py-4">
                        <div className="badge bg-primary/10 text-primary inline-block px-4 py-3 rounded-lg">
                          Now
                        </div>
                      </td>
                      <td className="px-6 py-4">$150.00</td>
                    </tr>
                    <tr className="bg-white border-b border-b-[#F2F4FA]">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                      >
                        Digital Ocean
                      </th>
                      <td className="px-6 py-4">8 July, 2023</td>
                      <td className="px-6 py-4">
                        <div className="badge bg-red-500/10 text-red-500 inline-block px-4 py-3 rounded-lg">
                          Today
                        </div>
                      </td>
                      <td className="px-6 py-4">$150.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="bg-white max-md:w-full p-6 rounded-lg">
            <div className="max-w-sm w-full mx-auto">
              <img src={NeedHelp} className="mx-auto mb-4" alt="" />
              <div>
                <h1 className="text-2xl font-semibold mb-2">Need Help?</h1>
                <p className="text-gray mb-4">
                  Our customer support team is available 24/7. For any quaries,
                  please visit our Support Portal or view our FAQ
                </p>
                <button className="bg-primary text-white w-full p-3 rounded-lg hover:opacity-90">
                  View FAQ
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Balance;
