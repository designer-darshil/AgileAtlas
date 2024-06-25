import React, { useState } from "react";
import UserAvatar from "../../assets/UserAvatar.png";
interface ButtonProps {
  onClick: () => void;
}

interface DropdownMenuProps {
  items: string[];
}
const Navbar: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (index: string) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };
  const NotificationButton: React.FC<ButtonProps> = ({ onClick }) => (
    <button
      onClick={onClick}
      className="rounded-lg w-12 h-12 flex items-center justify-center border-2 border-[#F2F4FA] hover:bg-[#fbfbff]"
    >
      <i className="ri-notification-line text-xl"></i>
    </button>
  );

  const MessageButton: React.FC<ButtonProps> = ({ onClick }) => (
    <button
      onClick={onClick}
      className="rounded-lg w-12 h-12 flex items-center justify-center border-2 border-[#F2F4FA] hover:bg-[#fbfbff]"
    >
      <i className="ri-chat-1-line text-xl"></i>
    </button>
  );
  const UserProfileButton: React.FC<ButtonProps> = ({ onClick }) => (
    <button
      onClick={onClick}
      className="flex items-center justify-start gap-3 cursor-pointer"
    >
      <img src={UserAvatar} alt="" />
      <div className="text-start max-md:hidden">
        <h6 className="text-black font-semibold">Niko Flamini</h6>
        <p className="text-xs">nfilamini@yahoo.com</p>
      </div>
    </button>
  );

  const DropdownMenu: React.FC<DropdownMenuProps> = ({ items }) => (
    <ul className="absolute top-14 w-56 z-10 shadow-lg bg-white rounded-xl text-start">
      {items.map((item, idx) => (
        <li key={idx} className="border-b border-b-gray border-opacity-10">
          <a className="block w-full h-full p-3" href="#">
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
  return (
    <header className="bg-white p-4 lg:px-8 lg:py-4 lg:sticky lg:top-0 lg:z-20 grid grid-cols-2 w-full justify-between">
      <div className="bg-body relative rounded-lg p-4 flex items-center gap-3 w-64">
        <div>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.58329 18.1248C4.87496 18.1248 1.04163 14.2915 1.04163 9.58317C1.04163 4.87484 4.87496 1.0415 9.58329 1.0415C14.2916 1.0415 18.125 4.87484 18.125 9.58317C18.125 14.2915 14.2916 18.1248 9.58329 18.1248ZM9.58329 2.2915C5.55829 2.2915 2.29163 5.5665 2.29163 9.58317C2.29163 13.5998 5.55829 16.8748 9.58329 16.8748C13.6083 16.8748 16.875 13.5998 16.875 9.58317C16.875 5.5665 13.6083 2.2915 9.58329 2.2915Z"
              fill="#747682"
            />
            <path
              d="M18.3333 18.9585C18.175 18.9585 18.0166 18.9002 17.8916 18.7752L16.225 17.1085C15.9833 16.8669 15.9833 16.4669 16.225 16.2252C16.4666 15.9835 16.8666 15.9835 17.1083 16.2252L18.775 17.8919C19.0166 18.1335 19.0166 18.5335 18.775 18.7752C18.65 18.9002 18.4916 18.9585 18.3333 18.9585Z"
              fill="#747682"
            />
          </svg>
        </div>
        <input
          type="text"
          className="w-full bg-body focus:outline-none focus:ring-2 focus:ring-body focus:border-transparent"
          placeholder="Search here.."
        />
      </div>

      <div className="flex items-center justify-end gap-4">
        <ul className="flex items-center gap-4">
          <li className="relative">
            <NotificationButton
              onClick={() => toggleDropdown("notifications")}
            />
            {activeDropdown === "notifications" && (
              <DropdownMenu
                items={["Notification 1", "Notification 2", "Notification 3"]}
              />
            )}
          </li>
          <li className="relative">
            <MessageButton onClick={() => toggleDropdown("messages")} />
            {activeDropdown === "messages" && (
              <DropdownMenu items={["Message 1", "Message 2", "Message 3"]} />
            )}
          </li>
          <li className="relative">
            <UserProfileButton onClick={() => toggleDropdown("userProfile")} />
            {activeDropdown === "userProfile" && (
              <DropdownMenu items={["Profile", "Settings", "Logout"]} />
            )}
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
