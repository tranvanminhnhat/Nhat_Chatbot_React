import { useState } from 'react';
import ChatInput from './components/ChatInput';
import './App.css';
import ChatMessages from './components/ChatMessages';
      
function App(){
  const [chatMessages, setChatMessages] = useState(
    [{
      message: 'hello',
      sender: 'user',
      id: 'id1'
    }, {
      message: 'hi',
      sender: 'robot',
      id: 'id2'
    }]
  );
  return (
    <div className="app-container">
      <ChatMessages 
        chatMessages={chatMessages}
      />
      <ChatInput 
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}


export default App
