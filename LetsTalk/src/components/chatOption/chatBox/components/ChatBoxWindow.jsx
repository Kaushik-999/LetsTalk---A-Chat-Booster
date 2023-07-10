import React, { useEffect, useContext } from "react";
import { ChatContext } from "../../../../context/ChatContext";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

function ChatBoxWindow() {
  const {
    messages,
    chatWindowRef,
    scrollToBottomOfChatWindow,
    pushFAQ,
    handleFaqAnswer,
  } = useContext(ChatContext);

  // code to start the chatbox from the last or bottom-most message
  // const chatWindowRef = useRef(null);
  useEffect(() => {
    scrollToBottomOfChatWindow();
    // eslint-disable-next-line
  }, []);

  // get the FAQ in the chatbox
  const handleGetFAQ = () => {
    pushFAQ();
  };

  // get the answer of individual FAQ
  const handleFaqClick = (faq) => {
    handleFaqAnswer(faq.trim().toLowerCase());
    console.log(faq.trim().toLowerCase());
  };

  /*
    DONT TOUCH THE BELOW CODE ANYWAY
    I DON'T EVEN KNOW HOW ITS WORKING
    ONLY ME AND GOD KNOWS as on (11-July-2023)
    IF U ARE READING THIS AFTER THE ABOVE DATE, ONLY GOD KNOWS NOW
  */
  // Group messages by sender
  const groupedMessages = messages.reduce((accumulator, message) => {
    if (
      accumulator.length === 0 ||
      accumulator[accumulator.length - 1].sender !== message.sender
    ) {
      // Add new group for a different sender
      accumulator.push({ sender: message.sender, messages: [message] });
    } else {
      // Add message to the existing group
      accumulator[accumulator.length - 1].messages.push(message);
    }
    return accumulator;
  }, []);

  return (
    <div
      className="bg-gray-100 p-4 w-full h-3/4 overflow-y-scroll"
      ref={chatWindowRef}
    >
      {groupedMessages.map((group, index) => (
        <div key={index}>
          <p
            className={`font-bold ml-3 mr-3 text-xs select-none ${
              group.sender === "user" ? "text-end" : ""
            }`}
          >
            {group.sender === "user" ? "User" : "Admin"}
          </p>
          {group.messages.map((message, messageIndex) => {
            if (message.sender === "admin" && message.text.startsWith("FAQ:")) {
              // FAQ chat design
              return (
                <div
                  key={messageIndex}
                  className="pb-2 pl-3 pr-3 pt-2 mb-3 rounded-lg border-2 border-sky-600 w-fit max-w-[75%] break-words  text-slate-800 font-medium hover:bg-sky-600 hover:text-white transition-all duration-300 cursor-pointer"
                  onClick={() =>
                    handleFaqClick(message.text.replace("FAQ:", ""))
                  }
                >
                  {message.text.replace("FAQ:", "")}
                </div>
              );
            } else if (
              message.sender === "admin" &&
              message.text === "Click Here to get FAQ"
            ) {
              // "Click here to get FAQ" chat design
              return (
                <div
                  key={messageIndex}
                  className="pb-2 pl-3 pr-3 pt-2 mb-3 rounded-lg bg-gray-300 text-slate-800 font-medium w-fit max-w-[75%] break-words cursor-pointer hover:bg-gray-500 hover:text-white transition-all duration-300"
                  onClick={handleGetFAQ}
                >
                  Click Here to get <span className="underline">FAQ</span> !!!
                </div>
              );
            } else {
              // Normal Chat
              return (
                <div
                  key={messageIndex}
                  className={`pb-2 pl-3 pr-3 pt-2 mb-3 rounded-lg ${
                    message.sender === "user"
                      ? "bg-sky-700 text-white ml-auto"
                      : "bg-gray-300 text-slate-800 font-medium"
                  } w-fit max-w-[75%] break-words`}
                >
                  {message.text}
                </div>
              );
            }
          })}
        </div>
      ))}
    </div>
  );
}

export default ChatBoxWindow;
