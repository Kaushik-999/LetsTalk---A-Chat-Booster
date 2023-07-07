import React, { createContext, useState } from "react";

// create chat context
const ChatContext = createContext();

function ChatProvider({ children }) {
  // used to toggle between Button and chatbox
  const [isChatOpen, setIsChatOpen] = useState(false);
  const toggleChatBox = () => {
    setIsChatOpen(!isChatOpen);
  };

  // contains the message list to be display in the chat window
  const [messages, setMessages] = useState([
    { sender: "admin", text: "Hi there!" },
    { sender: "admin", text: "FAQ - How to check laptop's accessory compatiblility?" },
    { sender: "admin", text: "FAQ - What are essential laptop accessories?" },
    { sender: "admin", text: "FAQ - How do I clean laptop accessories?" },
    { sender: "admin", text: "FAQ - Can I connect my laptop to an external monitor?" },
    { sender: "admin", text: "FAQ - Are there warranty options for laptop accessories?" },
    // { sender: "admin", text: "FAQ - Send Any Message You Want" },
  ]);

  // updates the message list to be display in the chat window
  const onSendMessage = (message) => {
    setMessages([...messages, { sender: "user", text: message }]);
  };

  return (
    <ChatContext.Provider
      value={{ messages, onSendMessage, isChatOpen, toggleChatBox }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export { ChatContext, ChatProvider };
