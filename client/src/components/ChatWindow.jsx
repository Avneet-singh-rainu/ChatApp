import React from "react";
import Message from "./Message";
import "../App.css";

const ChatWindow = ({ messages }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        height: "300px",
        overflowY: "auto",
      }}
    >
        {messages.map((message, index) => (
          <Message key={index} text={message.text} sender={message.sender} />
        ))}
      </div>
  );
};

export default ChatWindow;
