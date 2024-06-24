import React, { useState } from "react";
import GoogleLogo from "../../assets/GoogleLogo.gif";
import Modal from "../../Components/Modal/Modal";

const Employees: React.FC = () => {
  const [isIntigrationDropdown, setisIntigrationDropdown] = useState(false);
  const [activeTab, setActiveTab] = useState("EmployeeList");

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <div className="p-8">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-2xl font-bold">Employees</h4>
          <button
            onClick={openModal}
            className="bg-primary text-white text-base py-3 px-4 rounded-lg hover:shadow-md hover:opacity-80"
          >
            <i className="ri-add-line me-2"></i>
            <span>Add New</span>
          </button>
        </div>
        <div className="tab-buttons flex gap-2 mb-5 overflow-x-auto flex-nowrap">
          <button
            className={`p-3 text-lg text-nowrap focus-visible:outline-none ${
              activeTab === "EmployeeList"
                ? "border-b-2 border-b-primary text-[#272B30]"
                : "border-b-2 border-transparent text-[#747682]"
            }`}
            onClick={() => openTab("EmployeeList")}
          >
            Employee List
          </button>
          <button
            className={`p-3 text-lg text-nowrap focus-visible:outline-none ${
              activeTab === "IntigrationStore"
                ? "border-b-2 border-b-primary text-[#272B30]"
                : "border-b-2 border-transparent text-[#747682]"
            }`}
            onClick={() => openTab("IntigrationStore")}
          >
            Intigration Store
          </button>
        </div>
        <div className="tab-content">
          <div
            id="EmployeeList"
            className={`tab-content ${
              activeTab === "EmployeeList" ? "block" : "hidden"
            } py-4`}
          >
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
                        <label
                          htmlFor="checkbox-all-search"
                          className="sr-only"
                        >
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
                          <h6 className="font-medium text-black text-lg">
                            Google
                          </h6>
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
          <div
            id="IntigrationStore"
            className={`tab-content ${
              activeTab === "IntigrationStore" ? "block" : "hidden"
            } py-4`}
          >
            <div className="grid grid-cols-1 gap-10 text-start">
              <div className="mb-4">
                <h6 className="text-lg font-semibold mb-6">Discovery</h6>
                <div className="grid grid-cols-4 gap-6">
                  <div className="bg-white p-6 rounded-lg grid gap-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="bg-white w-14 h-14 rounded-lg overflow-hidden flex items-center justify-center shadow">
                          G
                        </div>
                        <div>
                          <h6 className="font-semibold text-base">
                            Google Meet
                          </h6>
                          <p>App Emirates</p>
                        </div>
                      </div>
                      <div className="relative">
                        <button
                          onClick={() =>
                            setisIntigrationDropdown(!isIntigrationDropdown)
                          }
                        >
                          <i className="ri-more-fill text-black text-2xl"></i>
                        </button>
                        <ul
                          className={`absolute right-0 w-40 z-10 shadow-lg bg-white rounded-xl ${
                            isIntigrationDropdown ? "block" : "hidden"
                          }`}
                        >
                          <li className="p-3 px-4 border-b border-b-[#EDF2F6]">
                            <a href="#">Option 1</a>
                          </li>
                          <li className="p-3 px-4 border-b border-b-[#EDF2F6]">
                            <a href="#">Option 2</a>
                          </li>
                          <li className="p-3 px-4 border-b border-b-[#EDF2F6]">
                            <a href="#">Option 3</a>
                          </li>
                          <li className="p-3 px-4 border-b border-b-[#EDF2F6]">
                            <a href="#">Option 4</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <p>
                      At Vero eos et acoasms et gusto olio pianissimos dubious
                      qui balanitis presentism voluptatum.
                    </p>
                    <button className="border-2 border-primary w-full p-3 text-primary hover:bg-primary hover:text-white rounded-lg transition ease-in-out duration-300">
                      Learn More
                      <i className="ri-arrow-right-up-line ms-2"></i>
                    </button>
                  </div>
                  <div className="bg-white p-6 rounded-lg">asdasdasd</div>
                  <div className="bg-white p-6 rounded-lg">asdasdasd</div>
                  <div className="bg-white p-6 rounded-lg">asdasdasd</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} title="Add New Contact">
        <div className="mb-4">
          <h6 className="text-base font-semibold mb-4">General Information</h6>
          <div className="grid grid-rows-2 gap-6">
            <div className="col-span-2">
              <label className="required" htmlFor="">
                Name
              </label>
              <select
                name=""
                id=""
                className="p-3 rounded-lg w-full bg-[#F8F8F8] border border-[#EDF2F6] mt-2"
              >
                <option value="" selected disabled>
                  Access Permission
                </option>
                <option value="">Option 1</option>
                <option value="">Option 2</option>
                <option value="">Option 3</option>
                <option value="">Option 4</option>
              </select>
            </div>
            <div>
              <label className="required" htmlFor="">
                First Name
              </label>
              <input
                type="text"
                className="p-3 rounded-lg bg-[#F8F8F8] border border-[#EDF2F6] w-full mt-2"
              />
            </div>
            <div>
              <label className="required" htmlFor="">
                Last Name
              </label>
              <input
                type="text"
                className="p-3 rounded-lg bg-[#F8F8F8] border border-[#EDF2F6] w-full mt-2"
              />
            </div>
            <div className="col-span-2">
              <label className="required" htmlFor="">
                Company Name
              </label>
              <input
                type="text"
                className="p-3 rounded-lg bg-[#F8F8F8] border border-[#EDF2F6] w-full mt-2"
              />
            </div>
          </div>
        </div>
        <div className="mb-4">
          <h6 className="text-base font-semibold mb-4">Contact Information</h6>
          <div className="grid grid-rows-1 gap-6">
            <div>
              <label className="required" htmlFor="">
                Email
              </label>
              <input
                type="text"
                className="p-3 rounded-lg bg-[#F8F8F8] border border-[#EDF2F6] w-full mt-2"
              />
            </div>
            <div>
              <label className="required" htmlFor="">
                Phone Number
              </label>
              <input
                type="text"
                className="p-3 rounded-lg bg-[#F8F8F8] border border-[#EDF2F6] w-full mt-2"
              />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Employees;
