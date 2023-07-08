import React, { createContext, useState, useEffect, useRef } from "react";

// create chat context
const ChatContext = createContext();

function ChatProvider({ children }) {
  // used to toggle between Button and chatbox
  const [isChatOpen, setIsChatOpen] = useState(true);
  const toggleChatBox = () => {
    setIsChatOpen(!isChatOpen);
  };

  // reference and function to scroll to the bottom of the chat window
  const chatWindowRef = useRef(null);
  const scrollToBottomOfChatWindow = () => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  };

  // contains the message list to be display in the chat window
  const [messages, setMessages] = useState([
    { sender: "admin", text: "Hi there!" },
    // { sender: "admin", text: "FAQ - How to check laptop's accessory compatiblility?" },
    // { sender: "admin", text: "FAQ - What are essential laptop accessories?" },
    // { sender: "admin", text: "FAQ - How do I clean laptop accessories?" },
    // { sender: "admin", text: "FAQ - Can I connect my laptop to an external monitor?" },
    // { sender: "admin", text: "FAQ - Are there warranty options for laptop accessories?" },
    // { sender: "admin", text: "FAQ - Send Any Message You Want" },
  ]);

  // updates the message list to be display in the chat window
  const onSendMessage = (message) => {
    setMessages([...messages, { sender: "user", text: message }]);
  };

  // dropdown option - ChatBoxHeader.jsx
  const [selectedDropDownOption, setSelectedDropDownOption] = useState(null);
  const updateSetSelectedDropDownOption = (option) => {
    setSelectedDropDownOption(option);
  };

  // update messages useState array according to selectedDropDownOption useState
  useEffect(() => {
    if (selectedDropDownOption === "faq") {
      setMessages([
        ...messages,
        {
          sender: "admin",
          text: "FAQ - How to check laptop's accessory compatiblility?",
        },
        {
          sender: "admin",
          text: "FAQ - What are essential laptop accessories?",
        },
        {
          sender: "admin",
          text: "FAQ - How do I clean laptop accessories?",
        },
        {
          sender: "admin",
          text: "FAQ - Can I connect my laptop to an external monitor?",
        },
        {
          sender: "admin",
          text: "FAQ - Are there warranty options for laptop accessories?",
        },
      ]);
      setTimeout(() => {
        scrollToBottomOfChatWindow();
      }, 10);
    } else if (selectedDropDownOption === "form") {
      setMessages([
        ...messages,
        { sender: "admin", text: "Click to get Form" },
      ]);
      setTimeout(() => {
        scrollToBottomOfChatWindow();
      }, 10);
    } else if (selectedDropDownOption === "reviewProduct") {
      setMessages([
        ...messages,
        { sender: "admin", text: "Click to Review Product" },
      ]);
      setTimeout(() => {
        scrollToBottomOfChatWindow();
      }, 10);
    } else if (selectedDropDownOption === "clearChat") {
      const response = window.confirm("Confirm Clear Chat");
      if (response) {
        setMessages([]);
      }
    }
    // eslint-disable-next-line
  }, [selectedDropDownOption]);

  return (
    <ChatContext.Provider
      value={{
        messages,
        onSendMessage,
        isChatOpen,
        toggleChatBox,
        selectedDropDownOption,
        updateSetSelectedDropDownOption,
        chatWindowRef,
        scrollToBottomOfChatWindow,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export { ChatContext, ChatProvider };