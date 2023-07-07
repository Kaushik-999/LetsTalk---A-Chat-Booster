import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import manAvatar from "../../../../images/manPNG.png";
import { ChatContext } from "../../../../context/ChatContext";


function ChatBoxHeader() {
  const { toggleChatBox } = useContext(ChatContext);
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
      <div className="bg-white rounded-full hover:scale-110  transition-transform duration-300 ease-in-out">
        <img
          src={manAvatar}
          alt="man avatar"
          className="w-9 h-9 outline-white m-1 bg-sky-600 rounded-full"
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
