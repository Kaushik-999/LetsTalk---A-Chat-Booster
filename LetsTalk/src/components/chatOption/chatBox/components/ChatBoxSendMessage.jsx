import React, {useState, useContext} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { ChatContext } from "../../../../context/ChatContext";

function ChatBoxSendMessage() {
  
  const {onSendMessage} = useContext(ChatContext)

  // use state variable 
  const [message, setMessage] = useState("");

  // update message use state function
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      onSendMessage(message.trim());
      setMessage("");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };
  
  return (
    <div className="flex items-center p-2 ">
      <input
        type="text"
        value={message}
        onChange={handleMessageChange}
        onKeyDown={handleKeyDown}
        placeholder="Type your message..."
        className="flex-grow p-2 mr-2 rounded-full focus:outline-none"
      />
      <button
        onClick={handleSendMessage}
        className="px-4 py-2 font-medium text-white bg-sky-600 rounded-full hover:bg-sky-500 focus:outline-none"
      >
        <FontAwesomeIcon icon={faPaperPlane}/>
      </button>
    </div>
  );
}

export default ChatBoxSendMessage;
