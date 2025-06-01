import UserImage from '../assets/user.png';
import RobotImage from '../assets/robot.png';


function ChatMessage({message, sender}) {

  return (
    <div className={
      sender === 'user' 
      ? 'chat-message-user' 
      : 'chat-message-robot'
    }>
      { sender === 'robot' && (
        <img src={RobotImage} className="chat-message-profile" />
      )}
      <div className="chat-message-text">
        {message}
      </div>
      { sender === 'user' && (
        <img src={UserImage} className="chat-message-profile" />
      )}
    </div>
  );

}

export default ChatMessage;