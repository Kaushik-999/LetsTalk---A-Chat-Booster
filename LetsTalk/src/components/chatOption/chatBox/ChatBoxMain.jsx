import React from "react";
import ChatBoxHeader from "./components/ChatBoxHeader";
import ChatBoxWindow from "./components/ChatBoxWindow";

function ChatBoxMain(props) {
  return (
    // Chat Box Main Div
    <div className="fixed bottom-4 right-4 w-1/4 h-4/6 bg-gray-100 border-4 border-sky-600 rounded-xl overflow-y-auto shadow shadow-blue-300">
      {/* Chat Box Header */}
      <ChatBoxHeader toggleFunction={props.toggleFunction}/>
      
      {/* Chat Window */}
      <ChatBoxWindow/>


    </div>
  );
}

export default ChatBoxMain;
