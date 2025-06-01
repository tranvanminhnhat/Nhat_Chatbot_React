import { useState } from 'react';
import { Chatbot } from 'supersimpledev';

function ChatInput({chatMessages, setChatMessages}) {

  const [inputText, setInputText] = useState('');

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  function SendMessage() {

    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: 'user',
        id: crypto.randomUUID()
      }
    ]

    setChatMessages(newChatMessages);

    const response = Chatbot.getResponse(inputText);
      setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: 'robot',
        id: crypto.randomUUID()
      }
    ]);
    setInputText('');
  }

  return (
    <div className="chat-input-container">
      <input
        placeholder="Send a message to Chatbot"
        size="30" 
        className="chat-input"
        onChange={saveInputText}
        value={inputText}
      />
      <button className="send-button" onClick={SendMessage}>Send</button>  
    </div>
  );
}

export default ChatInput;