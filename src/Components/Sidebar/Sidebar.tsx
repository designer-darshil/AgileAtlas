import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "@/assets/Logo.svg";
// import { routes } from "@/routes/routes";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/Components/ui/tooltip";
import { routes } from "@/routes/routes";

const Sidebar: React.FC = () => {
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-20 flex-col items-center border-r border-r-gray-20 bg-background sm:flex bg-base-black">
      <nav className="flex flex-col items-center gap-4 w-full h-full">
        <div className="p-5 w-full flex items-center justify-center">
          <NavLink
            to="#"
            className="group flex h-24 w-24 shrink-0 items-center justify-center gap-2 rounded-full text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
          >
            <img src={Logo} alt="logo" />
            <span className="sr-only">Acme Inc</span>
          </NavLink>
        </div>
        <div className="flex items-center gap-8 flex-col w-full">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <NavLink
                  to={routes.default}
                  className={({ isActive }) =>
                    `relative ${
                      isActive
                        ? "stroke-white after:bg-white after:w-[2px] after:absolute after:h-full after:top-0 after:-left-10"
                        : "stroke-dark-gray-80"
                    }`
                  }
                >
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    stroke="stroke-current"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.82 12.4992C21.42 12.4992 22.5 11.4992 21.54 8.2192C20.89 6.0092 18.99 4.1092 16.78 3.4592C13.5 2.4992 12.5 3.5792 12.5 6.1792V9.0592C12.5 11.4992 13.5 12.4992 15.5 12.4992H18.82Z"
                      stroke="stroke-current"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20.4999 15.1998C19.5699 19.8298 15.1299 23.1898 10.0799 22.3698C6.28993 21.7598 3.23993 18.7098 2.61993 14.9198C1.80993 9.88977 5.14993 5.44977 9.75993 4.50977"
                      stroke="stroke-current"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <span className="sr-only">Dashboard</span>
                </NavLink>
              </TooltipTrigger>
              <TooltipContent side="right">Dashboard</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <NavLink
                  to={routes.projects}
                  className={({ isActive }) =>
                    `relative ${
                      isActive
                        ? "stroke-white after:bg-white after:w-[2px] after:absolute after:h-full after:top-0 after:-left-10"
                        : "stroke-dark-gray-80"
                    }`
                  }
                >
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    stroke="stroke-current"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.1602 10.9405L21.1802 15.1205C20.3402 18.7305 18.6802 20.1905 15.5602 19.8905C15.0602 19.8505 14.5202 19.7605 13.9402 19.6205L12.2602 19.2205C8.09018 18.2305 6.80018 16.1705 7.78018 11.9905L8.76018 7.8005C8.96018 6.9505 9.20018 6.2105 9.50018 5.6005C10.6702 3.1805 12.6602 2.5305 16.0002 3.3205L17.6702 3.7105C21.8602 4.6905 23.1402 6.7605 22.1602 10.9405Z"
                      stroke="stroke-current"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15.5603 19.8896C14.9403 20.3096 14.1603 20.6596 13.2103 20.9696L11.6303 21.4896C7.66034 22.7696 5.57034 21.6996 4.28034 17.7296L3.00034 13.7796C1.72034 9.80961 2.78034 7.70961 6.75034 6.42961L8.33034 5.90961C8.74034 5.77961 9.13034 5.66961 9.50034 5.59961C9.20034 6.20961 8.96034 6.94961 8.76034 7.79961L7.78034 11.9896C6.80034 16.1696 8.09034 18.2296 12.2603 19.2196L13.9403 19.6196C14.5203 19.7596 15.0603 19.8496 15.5603 19.8896Z"
                      stroke="stroke-current"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13.1396 9.0293L17.9896 10.2593"
                      stroke="stroke-current"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.1602 12.9004L15.0602 13.6404"
                      stroke="stroke-current"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <span className="sr-only">Project Overview</span>
                </NavLink>
              </TooltipTrigger>
              <TooltipContent side="right">Project Overview</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <NavLink
                  to={routes.inbox}
                  className={({ isActive }) =>
                    `relative ${
                      isActive
                        ? "stroke-white after:bg-white after:w-[2px] after:absolute after:h-full after:top-0 after:-left-10"
                        : "stroke-dark-gray-80"
                    }`
                  }
                >
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    stroke="stroke-current"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.5 22.5H15.5C20.5 22.5 22.5 20.5 22.5 15.5V9.5C22.5 4.5 20.5 2.5 15.5 2.5H9.5C4.5 2.5 2.5 4.5 2.5 9.5V15.5C2.5 20.5 4.5 22.5 9.5 22.5Z"
                      stroke="stroke-current"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2.5 13.5002H6.26C7.02 13.5002 7.71 13.9302 8.05 14.6102L8.94 16.4002C9.5 17.5002 10.5 17.5002 10.74 17.5002H14.27C15.03 17.5002 15.72 17.0702 16.06 16.3902L16.95 14.6002C17.29 13.9202 17.98 13.4902 18.74 13.4902H22.48"
                      stroke="stroke-current"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <span className="sr-only">Inbox</span>
                </NavLink>
              </TooltipTrigger>
              <TooltipContent side="right">Inbox</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <NavLink
                  to={routes.notifications}
                  className={({ isActive }) =>
                    `relative ${
                      isActive
                        ? "stroke-white after:bg-white after:w-[2px] after:absolute after:h-full after:top-0 after:-left-10"
                        : "stroke-dark-gray-80"
                    }`
                  }
                >
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    stroke="stroke-current"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.5206 3.41016C9.21058 3.41016 6.52058 6.10016 6.52058 9.41016V12.3002C6.52058 12.9102 6.26058 13.8402 5.95058 14.3602L4.80058 16.2702C4.09058 17.4502 4.58058 18.7602 5.88058 19.2002C10.1906 20.6402 14.8406 20.6402 19.1506 19.2002C20.3606 18.8002 20.8906 17.3702 20.2306 16.2702L19.0806 14.3602C18.7806 13.8402 18.5206 12.9102 18.5206 12.3002V9.41016C18.5206 6.11016 15.8206 3.41016 12.5206 3.41016Z"
                      stroke="stroke-current"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                    />
                    <path
                      d="M14.3699 3.69945C14.0599 3.60945 13.7399 3.53945 13.4099 3.49945C12.4499 3.37945 11.5299 3.44945 10.6699 3.69945C10.9599 2.95945 11.6799 2.43945 12.5199 2.43945C13.3599 2.43945 14.0799 2.95945 14.3699 3.69945Z"
                      stroke="stroke-current"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15.5195 19.5605C15.5195 21.2105 14.1695 22.5605 12.5195 22.5605C11.6995 22.5605 10.9395 22.2205 10.3995 21.6805C9.85953 21.1405 9.51953 20.3805 9.51953 19.5605"
                      stroke="stroke-current"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                    />
                  </svg>

                  <span className="sr-only">Notifications</span>
                </NavLink>
              </TooltipTrigger>
              <TooltipContent side="right">Notifications</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <NavLink
                  to={routes.profile}
                  className={({ isActive }) =>
                    `relative ${
                      isActive
                        ? "stroke-white after:bg-white after:w-[2px] after:absolute after:h-full after:top-0 after:-left-10"
                        : "stroke-dark-gray-80"
                    }`
                  }
                >
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    stroke="stroke-current"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.6207 13.2805C12.5507 13.2705 12.4607 13.2705 12.3807 13.2805C10.6207 13.2205 9.2207 11.7805 9.2207 10.0105C9.2207 8.20047 10.6807 6.73047 12.5007 6.73047C14.3107 6.73047 15.7807 8.20047 15.7807 10.0105C15.7707 11.7805 14.3807 13.2205 12.6207 13.2805Z"
                      stroke="stroke-current"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M19.2398 19.8805C17.4598 21.5105 15.0998 22.5005 12.4998 22.5005C9.89977 22.5005 7.53977 21.5105 5.75977 19.8805C5.85977 18.9405 6.45977 18.0205 7.52977 17.3005C10.2698 15.4805 14.7498 15.4805 17.4698 17.3005C18.5398 18.0205 19.1398 18.9405 19.2398 19.8805Z"
                      stroke="stroke-current"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.5 22.5C18.0228 22.5 22.5 18.0228 22.5 12.5C22.5 6.97715 18.0228 2.5 12.5 2.5C6.97715 2.5 2.5 6.97715 2.5 12.5C2.5 18.0228 6.97715 22.5 12.5 22.5Z"
                      stroke="stroke-current"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <span className="sr-only">Profile</span>
                </NavLink>
              </TooltipTrigger>
              <TooltipContent side="right">Profile</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <NavLink
                  to={routes.settings}
                  className={({ isActive }) =>
                    `relative ${
                      isActive
                        ? "stroke-white after:bg-white after:w-[2px] after:absolute after:h-full after:top-0 after:-left-10"
                        : "stroke-dark-gray-80"
                    }`
                  }
                >
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    stroke="stroke-current"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.5 15.5C14.1569 15.5 15.5 14.1569 15.5 12.5C15.5 10.8431 14.1569 9.5 12.5 9.5C10.8431 9.5 9.5 10.8431 9.5 12.5C9.5 14.1569 10.8431 15.5 12.5 15.5Z"
                      stroke="stroke-current"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2.5 13.3794V11.6194C2.5 10.5794 3.35 9.71945 4.4 9.71945C6.21 9.71945 6.95 8.43945 6.04 6.86945C5.52 5.96945 5.83 4.79945 6.74 4.27945L8.47 3.28945C9.26 2.81945 10.28 3.09945 10.75 3.88945L10.86 4.07945C11.76 5.64945 13.24 5.64945 14.15 4.07945L14.26 3.88945C14.73 3.09945 15.75 2.81945 16.54 3.28945L18.27 4.27945C19.18 4.79945 19.49 5.96945 18.97 6.86945C18.06 8.43945 18.8 9.71945 20.61 9.71945C21.65 9.71945 22.51 10.5694 22.51 11.6194V13.3794C22.51 14.4194 21.66 15.2794 20.61 15.2794C18.8 15.2794 18.06 16.5594 18.97 18.1294C19.49 19.0394 19.18 20.1994 18.27 20.7194L16.54 21.7094C15.75 22.1794 14.73 21.8994 14.26 21.1094L14.15 20.9194C13.25 19.3494 11.77 19.3494 10.86 20.9194L10.75 21.1094C10.28 21.8994 9.26 22.1794 8.47 21.7094L6.74 20.7194C5.83 20.1994 5.52 19.0294 6.04 18.1294C6.95 16.5594 6.21 15.2794 4.4 15.2794C3.35 15.2794 2.5 14.4194 2.5 13.3794Z"
                      stroke="stroke-current"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <span className="sr-only">Settings</span>
                </NavLink>
              </TooltipTrigger>
              <TooltipContent side="right">Settings</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className="mt-auto mb-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <NavLink
                  to={routes.faqs}
                  className={({ isActive }) =>
                    `relative ${
                      isActive
                        ? "fill-white after:bg-white after:w-[2px] after:absolute after:h-full after:top-0 after:-left-10"
                        : "fill-dark-gray-80"
                    }`
                  }
                >
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      opacity="0.4"
                      cx="10.5"
                      cy="10.5"
                      r="10"
                      fill="fill-current"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.5 6.25C9.80964 6.25 9.25 6.80964 9.25 7.5C9.25 7.91421 8.91421 8.25 8.5 8.25C8.08579 8.25 7.75 7.91421 7.75 7.5C7.75 5.98122 8.98122 4.75 10.5 4.75C12.0188 4.75 13.25 5.98122 13.25 7.5C13.25 8.04634 13.0899 8.55757 12.8138 8.98663C12.6409 9.25537 12.4387 9.51194 12.2523 9.74363C12.2182 9.78601 12.1847 9.82749 12.1518 9.86825C11.9971 10.0597 11.8551 10.2354 11.7239 10.4158C11.4003 10.8605 11.25 11.1947 11.25 11.5V12C11.25 12.4142 10.9142 12.75 10.5 12.75C10.0858 12.75 9.75 12.4142 9.75 12V11.5C9.75 10.7007 10.1424 10.0398 10.511 9.53325C10.6667 9.31923 10.8373 9.10814 10.9925 8.91619C11.0236 8.87775 11.054 8.84007 11.0836 8.80329C11.2688 8.57313 11.4265 8.37065 11.5524 8.17495C11.6774 7.98068 11.75 7.74996 11.75 7.5C11.75 6.80964 11.1904 6.25 10.5 6.25Z"
                      fill="fill-current"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.5 13.75C10.9142 13.75 11.25 14.0858 11.25 14.5V15.5C11.25 15.9142 10.9142 16.25 10.5 16.25C10.0858 16.25 9.75 15.9142 9.75 15.5V14.5C9.75 14.0858 10.0858 13.75 10.5 13.75Z"
                      fill="fill-current"
                    />
                  </svg>

                  <span className="sr-only">
                    <i className="fa fa-square" aria-hidden="true"></i>
                  </span>
                </NavLink>
              </TooltipTrigger>
              <TooltipContent side="right">
                <i className="fa fa-square" aria-hidden="true"></i>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
