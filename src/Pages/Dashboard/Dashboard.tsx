import React from "react";
import SendMoney from "../../assets/SendMoney.svg";
import UpProgress from "../../assets/UpProgress.svg";
import CompanyProfit from "../../assets/CompanyProfit.svg";
import AllocatedBudget from "../../assets/AllocatedBudget.svg";
import TotalCashback from "../../assets/AllocatedBudget.svg";
import DownProgress from "../../assets/DownProgress.svg";
import BarChart from "../../Components/Charts/BarChart";
import LineChart from "../../Components/Charts/LineChart";

const Dashboard: React.FC = () => {
  return (
    <>
      <div className="w-full h-[100%-88px] p-8">
        <div className="text-start mb-6">
          <h1 className="text-2xl max-md:text-lg text-black font-semibold">
            Dashboard
          </h1>
          <h6 className="text-lg max-md:text-sm">
            Here is the summary of overall data
          </h6>
        </div>
        <div className="grid grid-cols-4 max-xl:grid-cols-2 max-lg:grid-cols-2 max-md:grid-cols-1 gap-4 mb-10">
          <div className="bg-white rounded-lg p-4 text-start">
            <div className="flex items-center gap-3 mb-5">
              <img src={SendMoney} alt="" />

              <h1 className="text-gray">February Spend</h1>
            </div>
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">$984,86.00</h2>
              <div className="flex items-center gap-2">
                <img src={UpProgress} alt="" />
                <span className="text-lg text-success">+4,85%</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-4 text-start">
            <div className="flex items-center gap-3 mb-5">
              <img src={CompanyProfit} alt="" />

              <h1 className="text-gray">Companies Profit</h1>
            </div>
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">$582,87.00</h2>
              <div className="flex items-center gap-2">
                <img src={UpProgress} alt="" />
                <span className="text-lg text-success">+2,02%</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-4 text-start">
            <div className="flex items-center gap-3 mb-5">
              <img src={AllocatedBudget} alt="" />

              <h1 className="text-gray">February Spend</h1>
            </div>
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">$736,41.00</h2>
              <div className="flex items-center gap-2">
                <img src={DownProgress} alt="" />
                <span className="text-lg text-danger">+3,74%</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-4 text-start">
            <div className="flex items-center gap-3 mb-5">
              <img src={TotalCashback} alt="" />

              <h1 className="text-gray">February Spend</h1>
            </div>
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">$798,15.00</h2>
              <div className="flex items-center gap-2">
                <img src={UpProgress} alt="" />
                <span className="text-lg text-success">+2,74%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 max-lg:grid-cols-1 max-md:grid-cols-1 gap-4">
          <div className="bg-white rounded-lg p-4 text-start">
            <div className="flex items-center justify-between gap-3 mb-5">
              <h1 className="text-black text-xl font-bold">Monthly Spend</h1>
              <h1 className="text-gray">Monthly</h1>
            </div>
            <BarChart />
          </div>
          <div className="bg-white rounded-lg p-4 text-start">
            <div className="flex items-center gap-3 mb-5">
              <h1 className="text-black text-xl font-bold">Balance</h1>
              <h1 className="text-gray">February Spend</h1>
            </div>
            <LineChart />
          </div>
          <div className="bg-white rounded-lg p-4 text-start">
            <div className="flex items-center justify-between gap-3 mb-5">
              <h1 className="text-black text-xl font-bold">Monthly Spend</h1>
              <h1 className="text-gray">Monthly</h1>
            </div>
            <BarChart />
          </div>
          <div className="bg-white rounded-lg p-4 text-start">
            <div className="flex items-center gap-3 mb-5">
              <h1 className="text-black text-xl font-bold">Balance</h1>
              <h1 className="text-gray">February Spend</h1>
            </div>
            <LineChart />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
