import React from "react";
import GoogleLogo from "../../assets/GoogleLogo.gif";

const Transaction: React.FC = () => {
  return (
    <>
      <div className="p-8">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-2xl font-bold">Transaction</h4>
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
                  Owner
                </th>
                <th scope="col" className="px-6 py-3">
                  Card
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Account
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b border-[#F2F4FA] last:border-0">
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
                <td className="px-6 py-4">
                  <div className="w-9 h-9 bg-gray rounded-full overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                </td>
                <td className="px-6 py-4">Visa **** 1601</td>
                <td className="px-6 py-4">
                  <i className="ri-flight-takeoff-line text-lg me-2"></i>Travel
                </td>
                <td className="px-6 py-4">235345</td>
              </tr>
              <tr className="bg-white border-b border-[#F2F4FA] last:border-0">
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
                <td className="px-6 py-4">
                  <div className="w-9 h-9 bg-gray rounded-full overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                </td>
                <td className="px-6 py-4">Visa **** 1601</td>
                <td className="px-6 py-4">
                  <i className="ri-flight-takeoff-line text-lg me-2"></i>Travel
                </td>
                <td className="px-6 py-4">235345</td>
              </tr>
              <tr className="bg-white border-b border-[#F2F4FA] last:border-0">
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
                <td className="px-6 py-4">
                  <div className="w-9 h-9 bg-gray rounded-full overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                </td>
                <td className="px-6 py-4">Visa **** 1601</td>
                <td className="px-6 py-4">
                  <i className="ri-flight-takeoff-line text-lg me-2"></i>Travel
                </td>
                <td className="px-6 py-4">235345</td>
              </tr>
              <tr className="bg-white border-b border-[#F2F4FA] last:border-0">
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
                <td className="px-6 py-4">
                  <div className="w-9 h-9 bg-gray rounded-full overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                </td>
                <td className="px-6 py-4">Visa **** 1601</td>
                <td className="px-6 py-4">
                  <i className="ri-flight-takeoff-line text-lg me-2"></i>Travel
                </td>
                <td className="px-6 py-4">235345</td>
              </tr>
              <tr className="bg-white border-b border-[#F2F4FA] last:border-0">
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
                <td className="px-6 py-4">
                  <div className="w-9 h-9 bg-gray rounded-full overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                </td>
                <td className="px-6 py-4">Visa **** 1601</td>
                <td className="px-6 py-4">
                  <i className="ri-flight-takeoff-line text-lg me-2"></i>Travel
                </td>
                <td className="px-6 py-4">235345</td>
              </tr>
              <tr className="bg-white border-b border-[#F2F4FA] last:border-0">
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
                <td className="px-6 py-4">
                  <div className="w-9 h-9 bg-gray rounded-full overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                </td>
                <td className="px-6 py-4">Visa **** 1601</td>
                <td className="px-6 py-4">
                  <i className="ri-flight-takeoff-line text-lg me-2"></i>Travel
                </td>
                <td className="px-6 py-4">235345</td>
              </tr>
              <tr className="bg-white border-b border-[#F2F4FA] last:border-0">
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
                <td className="px-6 py-4">
                  <div className="w-9 h-9 bg-gray rounded-full overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                </td>
                <td className="px-6 py-4">Visa **** 1601</td>
                <td className="px-6 py-4">
                  <i className="ri-flight-takeoff-line text-lg me-2"></i>Travel
                </td>
                <td className="px-6 py-4">235345</td>
              </tr>
              <tr className="bg-white border-b border-[#F2F4FA] last:border-0">
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
                <td className="px-6 py-4">
                  <div className="w-9 h-9 bg-gray rounded-full overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                </td>
                <td className="px-6 py-4">Visa **** 1601</td>
                <td className="px-6 py-4">
                  <i className="ri-flight-takeoff-line text-lg me-2"></i>Travel
                </td>
                <td className="px-6 py-4">235345</td>
              </tr>
              <tr className="bg-white border-b border-[#F2F4FA] last:border-0">
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
                <td className="px-6 py-4">
                  <div className="w-9 h-9 bg-gray rounded-full overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                </td>
                <td className="px-6 py-4">Visa **** 1601</td>
                <td className="px-6 py-4">
                  <i className="ri-flight-takeoff-line text-lg me-2"></i>Travel
                </td>
                <td className="px-6 py-4">235345</td>
              </tr>
              <tr className="bg-white border-b border-[#F2F4FA] last:border-0">
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
                <td className="px-6 py-4">
                  <div className="w-9 h-9 bg-gray rounded-full overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                </td>
                <td className="px-6 py-4">Visa **** 1601</td>
                <td className="px-6 py-4">
                  <i className="ri-flight-takeoff-line text-lg me-2"></i>Travel
                </td>
                <td className="px-6 py-4">235345</td>
              </tr>
              <tr className="bg-white border-b border-[#F2F4FA] last:border-0">
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
                <td className="px-6 py-4">
                  <div className="w-9 h-9 bg-gray rounded-full overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                </td>
                <td className="px-6 py-4">Visa **** 1601</td>
                <td className="px-6 py-4">
                  <i className="ri-flight-takeoff-line text-lg me-2"></i>Travel
                </td>
                <td className="px-6 py-4">235345</td>
              </tr>
              <tr className="bg-white border-b border-[#F2F4FA] last:border-0">
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
                <td className="px-6 py-4">
                  <div className="w-9 h-9 bg-gray rounded-full overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                </td>
                <td className="px-6 py-4">Visa **** 1601</td>
                <td className="px-6 py-4">
                  <i className="ri-flight-takeoff-line text-lg me-2"></i>Travel
                </td>
                <td className="px-6 py-4">235345</td>
              </tr>
              <tr className="bg-white border-b border-[#F2F4FA] last:border-0">
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
                <td className="px-6 py-4">
                  <div className="w-9 h-9 bg-gray rounded-full overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                </td>
                <td className="px-6 py-4">Visa **** 1601</td>
                <td className="px-6 py-4">
                  <i className="ri-flight-takeoff-line text-lg me-2"></i>Travel
                </td>
                <td className="px-6 py-4">235345</td>
              </tr>
              <tr className="bg-white border-b border-[#F2F4FA] last:border-0">
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
                <td className="px-6 py-4">
                  <div className="w-9 h-9 bg-gray rounded-full overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                </td>
                <td className="px-6 py-4">Visa **** 1601</td>
                <td className="px-6 py-4">
                  <i className="ri-flight-takeoff-line text-lg me-2"></i>Travel
                </td>
                <td className="px-6 py-4">235345</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Transaction;
