import React, { useContext } from "react";
import ChatButton from "./ChatButton";
import ChatBoxMain from "./chatBox/ChatBoxMain";
import { ChatContext } from "../../context/ChatContext";

function ChatMain() {
  const { isChatOpen } = useContext(ChatContext);

  return <div>{isChatOpen ? <ChatBoxMain /> : <ChatButton />}</div>;
}

export default ChatMain;
