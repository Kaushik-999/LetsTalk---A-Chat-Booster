import React, { useContext } from "react";
import { ChatContext } from "../../../../context/ChatContext";

function ClearChatModal() {
  const { toggleClearChatModal, clearChatWindow } = useContext(ChatContext);

  const handleButtonClick = (option) => {
    if (option === "Clear") {
      clearChatWindow();
      toggleClearChatModal();
    } else {
      toggleClearChatModal();
    }
  };
  return (
    <div className="bg-slate-800 bg-opacity-10 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0">
      <div className="bg-white px-8 py-6 rounded-md text-center">
        <h1 className="text-x text-base mb-4 font-bold text-slate-500">
          Clear Chat?
        </h1>
        <button
          className="bg-red-500 hover:bg-red-400 px-4 py-2 rounded-md text-sm text-white font-semibold"
          onClick={() => handleButtonClick("cancel")}
        >
          Cancel
        </button>
        <button
          className="bg-sky-500 hover:bg-sky-400 px-7 py-2 ml-2 rounded-md text-sm text-white font-semibold"
          onClick={() => handleButtonClick("Clear")}
        >
          Clear
        </button>
      </div>
    </div>
  );
}

export default ClearChatModal;
