import React, { useEffect, useRef, useState } from "react";

function ChatBoxWindow() {
  const [messages, setMessages] = useState([
    { sender: "me", text: "Hello!" },
    { sender: "other", text: "Hi there!" },
    { sender: "me", text: "How are you?" },
    { sender: "other", text: "I'm good, thanks!" },
    { sender: "me", text: "How are you?" },
    { sender: "other", text: "I'm good, thanks!" },
    { sender: "me", text: "How are you?" },
    { sender: "other", text: "I'm good, thanks!" },
    { sender: "me", text: "How are you?" },
    { sender: "other", text: "I'm good, thanks!" },
    { sender: "me", text: "How are you?" },
    { sender: "other", text: "I'm good, thanks!" },
    { sender: "me", text: "How are you?" },
    { sender: "other", text: "I'm good, thanks!" },
    { sender: "me", text: "How are you?" },
    { sender: "other", text: "I'm good, thanks!" },
    { sender: "me", text: "How are you?" },
    { sender: "other", text: "I'm good, thanks!" },
    { sender: "me", text: "How are you?" },
    { sender: "other", text: "I'm good, thanks!" },
    {
      sender: "me",
      text: "How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? ",
    },
    {
      sender: "other",
      text: "I'm good, thanks! How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? How are you? ",
    },
    { sender: "other", text: "I'm good, thanks!" },
    { sender: "other", text: "I'm good, thanks!" },
  ]);

  const chatWindowRef = useRef(null);

  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, []);

  return (
    <div
      className="bg-gray-100 p-4 w-full h-3/4 overflow-y-scroll"
      ref={chatWindowRef}
    >
      {messages.map((message, index) => (
        <div key={index}>
          <p className={`${message.sender === "me" ? "text-end" : ""} font-bold ml-3 mr-3 text-xs`}>
            {message.sender === "me" ? "User" : "Admin"}
          </p>
          <div
            className={`pb-2 pl-3 pr-3 pt-2 mb-3 rounded-lg ${
              message.sender === "me"
                ? "bg-sky-700 text-white ml-auto"
                : "bg-gray-300 text-slate-800 font-medium"
            } w-fit max-w-[60%]`}
          >
            {message.text}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ChatBoxWindow;
