import React, { useContext } from "react";
import ChatBoxHeader from "./components/ChatBoxHeader";
import ChatBoxWindow from "./components/ChatBoxWindow";
import ChatBoxSendMessage from "./components/ChatBoxSendMessage";
import { ChatContext } from "../../../context/ChatContext";
import ChatBoxForm from "./components/ChatBoxForm";
function ChatBoxMain() {
  const { isInfoTaken } = useContext(ChatContext);
  const chatComponent = isInfoTaken ? (
    <>
      {/* Chat Window - contains messages of admin and user */}
      <ChatBoxWindow />
      {/* Send Message - contains a text area to send message and send button */}
      <ChatBoxSendMessage />
    </>
  ) : (
    // Form that takes user details
    <ChatBoxForm />
  );
  return (
    // Chat Box Main Div
    <div className="fixed bottom-4 right-4 w-1/4 h-4/6 bg-gray-100 border-4 border-sky-600 rounded-xl overflow-y-hidden shadow shadow-blue-300 flex flex-col">
      {/* Chat Box Header - contains back-icon, user avatar, menu icon */}
      <ChatBoxHeader />
      {/* Chat Component - chat window, chat send message box, chat form */}
      {chatComponent}
    </div>
  );
}

export default ChatBoxMain;
