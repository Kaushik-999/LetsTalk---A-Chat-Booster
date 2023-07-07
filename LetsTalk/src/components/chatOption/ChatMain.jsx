import React, { useState } from "react";
import ChatButton from "./ChatButton";
import ChatBoxMain from "./chatBox/ChatBoxMain";

function ChatMain() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div>
      {isChatOpen ? (
        <ChatBoxMain toggleFunction={toggleChat} />
      ) : (
        <ChatButton toggleFunction={toggleChat} />
      )}
    </div>
  );
}

export default ChatMain;
