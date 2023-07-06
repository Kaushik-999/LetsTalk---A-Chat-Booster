import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import manAvatar from "../../images/manPNG.png";

function ChatBox(props) {
  return (
    <div className="fixed bottom-4 right-4 w-1/4 h-4/6 bg-gray-100 border-4 border-blue-600 rounded-xl overflow-y-auto shadow shadow-blue-300">
      {/* Chat box content */}

      <div className="flex justify-between items-center bg-blue-600 text-white p-3">
        <div className="flex items-center">
          <FontAwesomeIcon
            onClick={props.toggleFunction}
            className="cursor-pointer ml-2 text-xl"
            icon={faArrowLeft}
          />
        </div>
        <div className="bg-white rounded-full hover:scale-110  transition-transform duration-300 ease-in-out">
          <img
            src={manAvatar}
            alt="man avatar"
            className="w-10 h-10 outline-white m-1 bg-blue-600 rounded-full"
          />
        </div>
        <FontAwesomeIcon
          className="cursor-pointer mr-2 pl-2 pr-2 text-xl"
          icon={faEllipsisVertical}
        />
      </div>
    </div>
  );
}

export default ChatBox;
