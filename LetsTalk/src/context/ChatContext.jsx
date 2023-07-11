import React, { createContext, useState, useEffect, useRef } from "react";

// create chat context
const ChatContext = createContext();

function ChatProvider({ children }) {
  // used to toggle between Button and chatbox
  const [isChatOpen, setIsChatOpen] = useState(false);
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
    { sender: "admin", text: "Click Here to get FAQ" },
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
      pushFAQ();
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
    }
    // eslint-disable-next-line
  }, [selectedDropDownOption]);

  //  insert dummy FAQ
  const pushFAQ = () => {
    const updatedMessage = messages.filter(
      (message) => message.text !== "Click Here to get FAQ"
    );

    setMessages([
      ...updatedMessage,
      {
        sender: "admin",
        text: "FAQ: How to check laptop's accessory compatiblility?",
      },
      {
        sender: "admin",
        text: "FAQ: What are essential laptop accessories?",
      },
      {
        sender: "admin",
        text: "FAQ: How do I clean laptop accessories?",
      },
      {
        sender: "admin",
        text: "FAQ: Can I connect my laptop to an external monitor?",
      },
      {
        sender: "admin",
        text: "FAQ: Are there warranty options for laptop accessories?",
      },
    ]);

    // drop down option set to null, else it wont display FAQ again. DONT TOUCH THIS ANYWAY!!!!!!
    setSelectedDropDownOption(null);
  };

  // dummy answer of dummy FAQ
  const getFAQAnswer = (question) => {
    let answer;

    switch (question.toLowerCase()) {
      case "how to check laptop's accessory compatiblility?":
        answer =
          "Refer to the product specifications or consult the manufacturer's website.";
        break;
      case "what are essential laptop accessories?":
        answer =
          "Laptop bag, mouse, charger, and USB hub are essential accessories.";
        break;
      case "how do i clean laptop accessories?":
        answer =
          "Use a soft cloth and mild cleaning solution to wipe the accessories gently.";
        break;
      case "can i connect my laptop to an external monitor?":
        answer =
          "Yes, using the appropriate cable, you can connect your laptop to an external monitor.";
        break;
      case "are there warranty options for laptop accessories?":
        answer =
          "Warranty options may vary, check with the manufacturer or retailer for warranty details.";
        break;
      default:
        answer = "Sorry, I don't have an answer for that question.";
        break;
    }

    return answer;
  };

  // handle individual faq click and return answer
  const handleFaqAnswer = (faq) => {
    // find the selected FAQ in the messages array
    const selectedFaq = messages.find(
      (message) => message.text.toLowerCase() === `faq: ${faq.toLowerCase()}`
    );

    console.log(selectedFaq);

    if (selectedFaq) {
      // remove the selected FAQ from the list
      const updatedMessage = messages.filter(
        (message) => !message.text.startsWith("FAQ:")
      );
      const faqAnswer = getFAQAnswer(faq);

      setMessages([
        ...updatedMessage,
        { sender: "user", text: selectedFaq.text.replace(/^FAQ:/, "") },
        { sender: "admin", text: faqAnswer },
      ]);
    }
  };

  // clear chat modal use State
  const [isClearChatModalOpen, setIsClearChatModalOpen] = useState(false);
  const toggleClearChatModal = () => {
    setIsClearChatModalOpen(!isClearChatModalOpen);
  };

  // clear chat window - chat header
  const clearChatWindow = () => {
    setMessages([{ sender: "admin", text: "Click menu for more options " }]);
  };

  // global state for displaying form
  const [isInfoTaken, setIsInfoTaken] = useState(false);
  const toggleInfoTaken = () => {
    setIsInfoTaken(!isInfoTaken);
  };
  useEffect(() => {
    console.log(isInfoTaken); 
  
    
  }, [isInfoTaken])
  

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
        pushFAQ,
        handleFaqAnswer,
        isClearChatModalOpen,
        toggleClearChatModal,
        clearChatWindow,
        isInfoTaken,
        toggleInfoTaken,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export { ChatContext, ChatProvider };
