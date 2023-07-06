import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";

function ChatButton(props) {
  return (
    <div>
      <button
        onClick={props.toggleFunction}
        className="fixed bottom-5 right-5 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 hover:scale-110  transition-transform duration-300 ease-in-out p-4 rounded-full"
      >
        <FontAwesomeIcon className="text-white text-2xl" icon={faMessage} />
      </button>
    </div>
  );
}

export default ChatButton;
