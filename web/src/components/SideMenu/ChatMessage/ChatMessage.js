import React from "react";
import './ChatMessage.css';
import Avatar from "../../../assets/Avatar";

// {
//   user: 'gpt';
//   message: 'crie um nome do artigo';
// }
//user user or gpt
//message - vai estar o prompt
export const ChatMessage = ({ message }) => {
  return (
    <div className=
      {`chat-message ${message.user === 'gpt'} && "chatgpt"`}
    >
      <div className="chat-message-center">
        <div className={`avatar ${message.user === 'gpt' && 'gpt' && "chatgpt"}`}>
          {message.user === 'gpt' && (
            <Avatar />
          )}
        </div>

        <div className="message">
          {message.message}

        </div>

      </div>
    </div>
  )
}