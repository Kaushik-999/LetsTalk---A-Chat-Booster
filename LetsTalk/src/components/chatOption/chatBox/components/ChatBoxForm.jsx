import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { ChatContext } from "../../../../context/ChatContext";

function ChatBoxForm() {
  const {isInfoTaken, toggleInfoTaken} = useContext(ChatContext);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      [name]: prevUserInfo[name] !== null ? value : value || "",
    }));
  };

  const handleUserInfoSubmit = (e) => {
    e.preventDefault();
    // Perform any desired action with the form data
    console.log(userInfo);
    if(!isInfoTaken){
        toggleInfoTaken()
    }
  };

  return (
    <div className="bg-slate-800 bg-opacity-10 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0">
      <div className="h h-fit bg-gray-100 rounded-md">
        <div className="h h-2 bg-sky-400 rounded-t-md"></div>
        <div className="px-6 py-3">
          <div className="te text-center mb-2">
            <span className="text-sm ml-auto w-full font-semibold text-gray-400">
              Enter Your Details
            </span>
          </div>

          {/* Name Input */}
          <div className="w-64 mb-1">
            <label className="block font-bold text-xs text-gray-500 ml-2">
              Name
            </label>
            <div className="flex">
              <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faUser}
                  className="text-gray-400 text-sm"
                />
              </div>
              <input
                type="text"
                name="name"
                value={userInfo.name}
                onChange={handleChange}
                placeholder="John Smith"
                className="w-full -ml-10 pl-10 p-1 rounded-lg border-2 border-gray-200 outline-none focus:ring-sky-500 focus:ring-1 text-sm"
              />
            </div>
          </div>

          {/* Email Input */}
          <div className="w-64 mb-2">
            <label className="block font-bold text-xs text-gray-500 ml-1">
              Email
            </label>
            <div className="flex">
              <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-gray-400 text-sm"
                />
              </div>
              <input
                type="text"
                name="email"
                value={userInfo.email}
                onChange={handleChange}
                placeholder="johnsmith@example.com"
                className="w-full -ml-10 pl-10 p-1 rounded-lg border-2 border-gray-200 outline-none focus:ring-sky-500 focus:ring-1 text-sm"
              />
            </div>
          </div>

          {/* Phone Input */}
          <div className="w-64 mb-2">
            <label className="block font-bold text-xs text-gray-500 ml-1">
              Phone
            </label>
            <div className="flex">
              <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-gray-400 text-sm"
                />
              </div>
              <input
                type="text"
                name="phone"
                value={userInfo.phone}
                onChange={handleChange}
                placeholder="9876543210"
                className="w-full -ml-10 pl-10 p-1 rounded-lg border-2 border-gray-200 outline-none focus:ring-sky-500 focus:ring-1 text-sm"
              />
            </div>
          </div>

          {/* button */}
          <div className="flex">
            <button
              type="submit"
              onClick={handleUserInfoSubmit}
              className="mt-4 bg-sky-500 text-white text-sm font-semibold py-2 rounded-md hover:bg-sky-600 grow mr-3"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={() => setUserInfo({ name: "", email: "", phone: "" })}
              className="mt-4 bg-red-500 text-white text-sm font-semibold py-1 rounded-md hover:bg-red-600 grow"
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatBoxForm;
