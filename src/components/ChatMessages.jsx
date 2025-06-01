import { useRef, useEffect } from "react";
import ChatMessage from "./ChatMessage";

function ChatMessages ( {chatMessages} ) {

  const chatMessagesRef = useRef(null);

  useEffect(() => {
    const containerElem = chatMessagesRef.current;
    if (containerElem){
      containerElem.scrollTop = containerElem.scrollHeight;
    }
    
  }, [chatMessages]);

  return (
    <div 
      className="chat-messages-container"
      ref={chatMessagesRef}  
    >
      {chatMessages.map((chatMessaege) => {

        return(
          <ChatMessage
            message={chatMessaege.message}
            sender={chatMessaege.sender} 
            key={chatMessaege.id}
          />
        );
        })
      }
    </div>
  );
}

export default ChatMessages;