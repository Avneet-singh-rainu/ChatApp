import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import ChatWindow from "../components/ChatWindow";
import MessageInput from "../components/MessageInput";
import { useLocation } from "react-router-dom";

const socket = io("http://localhost:3000"); // Update the URL based on your server

const ChatApp = () => {
  const location = useLocation();
  const user = location.state;
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("message", (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const addMessage = (text, sender) => {
    const newMessage = { text, sender };
    setMessages([...messages, newMessage]);

    // Send the message to the server
    socket.emit("message", newMessage);
  };

  return (
    <div>
      <h1>React Chat App with Socket.IO</h1>
        <ChatWindow messages={messages} />
      <MessageInput addMessage={addMessage} user={user.user} />
    </div>
  );
};

export default ChatApp;
