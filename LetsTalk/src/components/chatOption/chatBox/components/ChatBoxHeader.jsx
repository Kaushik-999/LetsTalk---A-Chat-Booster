import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import manAvatar from "../../../../images/manPNG.png";

function ChatBoxHeader(props) {
  return (
    // Chat Box Header
    <div className="flex justify-between items-center bg-sky-600 text-white p-3">
      {/* Chat Box Header Back Icon*/}
      <FontAwesomeIcon
        onClick={props.toggleFunction}
        className="cursor-pointer ml-1 pl-2 pr-2 text-xl transition-transform duration-300 hover:-translate-x-1"
        icon={faArrowLeft}
      />
      {/* Chat Box Header Avatar*/}
      <div className="bg-white rounded-full hover:scale-110  transition-transform duration-300 ease-in-out">
        <img
          src={manAvatar}
          alt="man avatar"
          className="w-10 h-10 outline-white m-1 bg-sky-600 rounded-full"
        />
      </div>
      {/* Chat Box Header Menu Icon*/}
      <FontAwesomeIcon
        className="cursor-pointer mr-2 pl-2 pr-2 text-xl hover:scale-110  transition-transform duration-300 ease-in-out"
        icon={faEllipsisVertical}
      />
    </div>
  );
}

export default ChatBoxHeader;
