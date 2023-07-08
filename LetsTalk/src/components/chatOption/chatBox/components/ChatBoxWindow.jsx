import React, { useEffect, useContext } from "react";
import { ChatContext } from "../../../../context/ChatContext";

function ChatBoxWindow() {
  const {
    messages,
    selectedDropDownOption,
    chatWindowRef,
    scrollToBottomOfChatWindow,
  } = useContext(ChatContext);

  // code to start the chatbox from the last or bottom-most message
  // const chatWindowRef = useRef(null);
  useEffect(() => {
    scrollToBottomOfChatWindow();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    console.log(selectedDropDownOption);
  }, [selectedDropDownOption]);

  return (
    // messages unlooping
    <div
      className="bg-gray-100 p-4 w-full h-3/4 overflow-y-scroll"
      ref={chatWindowRef}
    >
      {/* 
      looping through each message
      checking whether it belongs to "admin" or "user"
      and applying appropiate classes
      */}
      {messages.map((message, index) => (
        <div key={index}>
          <p
            className={`${
              message.sender === "user" ? "text-end" : ""
            } font-bold ml-3 mr-3 text-xs select-none`}
          >
            {message.sender === "user" ? "User" : "Admin"}
          </p>
          <div
            className={`pb-2 pl-3 pr-3 pt-2 mb-3 rounded-lg ${
              message.sender === "user"
                ? "bg-sky-700 text-white ml-auto"
                : "bg-gray-300 text-slate-800 font-medium"
            } w-fit max-w-[75%] break-words`}
          >
            {message.text}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ChatBoxWindow;
