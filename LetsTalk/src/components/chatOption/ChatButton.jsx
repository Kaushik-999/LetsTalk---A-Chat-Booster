import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { ChatContext } from "../../context/ChatContext";

function ChatButton() {
  const { toggleChatBox } = useContext(ChatContext);
  return (
    <div>
      <button
        onClick={toggleChatBox}
        className="fixed bottom-5 right-5 bg-gradient-to-r from-sky-600 via-sky-500 to-sky-400 hover:scale-110  transition-transform duration-300 ease-in-out p-4 rounded-full"
      >
        <FontAwesomeIcon className="text-white text-2xl" icon={faMessage} />
      </button>
    </div>
  );
}

export default ChatButton;
