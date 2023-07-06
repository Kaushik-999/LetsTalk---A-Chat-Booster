import React, { useState } from "react";
import ChatButton from "./ChatButton";
import ChatBox from "./ChatBox";
function ChatMain() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };
  return (
    <div>
      {isChatOpen ? (
        <ChatBox toggleFunction={toggleChat} />
      ) : (
        <ChatButton toggleFunction={toggleChat} />
      )}
    </div>
  );
}

export default ChatMain;
