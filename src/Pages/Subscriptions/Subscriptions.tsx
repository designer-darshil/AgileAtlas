import React from "react";
import GoogleLogo from "../../assets/GoogleLogo.gif";
import { NavLink } from "react-router-dom";
import { routes } from "../../routes/routes";
const Subscriptions: React.FC = () => {
  return (
    <>
      <div className="p-8">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-2xl font-bold">Subscription</h4>
          <NavLink
            to={routes.addsubscription}
            className="bg-primary text-white text-base py-3 px-4 rounded-lg hover:shadow-md hover:opacity-80"
          >
            <i className="ri-add-line me-2"></i>
            <span>Add New</span>
          </NavLink>
        </div>
        <div className="relative overflow-x-auto bg-white sm:rounded-lg p-8">
          <div className="pb-4">
            <label htmlFor="table-search" className="sr-only">
              Search
            </label>
            <div className="relative mt-1">
              <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-[#747682]"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="table-search"
                className="block p-4 ps-10 text-[#747682] border border-[#EDF2F6] rounded-lg w-80 focus:ring-primary focus:border-primary"
                placeholder="Search here"
              />
            </div>
          </div>
          <table className="w-full text-left rounded-lg overflow-hidden">
            <thead className="text-xs text-gray-700 uppercase bg-[#F6FAFD] border border-[#F2F4FA]">
              <tr>
                <th scope="col" className="p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-all-search"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label htmlFor="checkbox-all-search" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Amount
                </th>
                <th scope="col" className="px-6 py-3">
                  Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Last Transection
                </th>
                <th scope="col" className="px-6 py-3">
                  Card
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b border-[#F2F4FA]">
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="checkbox-table-search-1"
                      className="sr-only"
                    >
                      checkbox
                    </label>
                  </div>
                </td>
                <th scope="row" className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 bg-gray rounded-full overflow-hidden">
                      <img
                        src={GoogleLogo}
                        className="w-full h-full object-cover"
                        alt=""
                      />
                    </div>
                    <div>
                      <h6 className="font-medium text-black text-lg">Google</h6>
                      <p className="font-normal text-gray-500">
                        Monthly payment
                      </p>
                    </div>
                  </div>
                </th>
                <td className="px-6 py-4">$25,000.00</td>
                <td className="px-6 py-4">Jul 8, 2023</td>
                <td className="px-6 py-4">No Transection</td>
                <td className="px-6 py-4">Visa **** 1601</td>
                <td className="px-6 py-4">
                  <a href="#">
                    <i className="ri-more-2-fill"></i>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Subscriptions;
