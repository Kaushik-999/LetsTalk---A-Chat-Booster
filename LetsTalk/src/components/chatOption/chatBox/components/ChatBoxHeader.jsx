import React, { useContext, useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import manAvatar from "../../../../images/manPNG.png";
import { ChatContext } from "../../../../context/ChatContext";

function ChatBoxHeader() {
  // use to open and close the entire chatbox
  const { toggleChatBox, updateSetSelectedDropDownOption } =
    useContext(ChatContext);

  // display dropdown options on clicking 3-dot icon
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleIconClick = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  // remove(disappear) dropdown if clicked anywhere else - ref is sent on the dropdown component below
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleDropdownOptionClick = (option) => {
    setIsDropdownOpen(false);
    updateSetSelectedDropDownOption(option);
  };

  return (
    // Chat Box Header
    <div className="flex justify-between items-center bg-sky-600 text-white p-3">
      {/* Chat Box Header Back Icon*/}
      <FontAwesomeIcon
        onClick={toggleChatBox}
        className="cursor-pointer ml-1 pl-2 pr-2 text-xl transition-transform duration-300 hover:-translate-x-1"
        icon={faArrowLeft}
      />
      {/* Chat Box Header Avatar*/}
      <div className="bg-white rounded-full hover:scale-110  transition-transform duration-300 ease-in-out select-none">
        <img
          src={manAvatar}
          alt="man avatar"
          className="w-9 h-9 outline-white m-1 bg-sky-600 rounded-full"
        />
      </div>
      {/* Chat Box Header Menu Icon*/}
      <FontAwesomeIcon
        onClick={handleIconClick}
        className="cursor-pointer mr-2 pl-2 pr-2 text-xl hover:scale-110  transition-transform duration-300 ease-in-out"
        icon={faEllipsisVertical}
      />

      {/* Dropdown containing - FAQ, Form, Customer Review */}
      {isDropdownOpen && (
        <div
          ref={dropdownRef}
          className="absolute right-0 top-12 mt-2 py-2 w-40 bg-white rounded-md shadow-lg shadow-gray-700 z-20 "
        >
          <svg
            className="absolute bottom-full right-6"
            width="12"
            height="8"
            viewBox="0 0 30 20"
            // xmlns="http://www.w3.org/2000/svg"
          >
            <polygon points="15, 0 30, 20 0, 20" fill="#FFFFFF" />
          </svg>
          <a
            className="block px-4 py-2 text-sm rounded-lg capitalize text-gray-700 hover:bg-blue-500 hover:text-white cursor-pointer font-semibold select-none"
            onClick={() => handleDropdownOptionClick("faq")}
          >
            FAQ
          </a>
          <a
            className="block px-4 py-2 text-sm rounded-lg capitalize text-gray-700 hover:bg-blue-500 hover:text-white cursor-pointer font-semibold select-none"
            onClick={() => handleDropdownOptionClick("form")}
          >
            Details Form
          </a>
          <a
            className="block px-4 py-2 text-sm rounded-lg capitalize text-gray-700 hover:bg-blue-500 hover:text-white cursor-pointer font-semibold select-none"
            onClick={() => handleDropdownOptionClick("reviewProduct")}
          >
            Review Product
          </a>
          <a
            className="block px-4 py-2 text-sm rounded-lg capitalize text-gray-700 hover:bg-blue-500 hover:text-white cursor-pointer font-semibold select-none"
            onClick={() => handleDropdownOptionClick("clearChat")}
          >
            Clear Chat
          </a>
        </div>
      )}
    </div>
  );
}

export default ChatBoxHeader;
