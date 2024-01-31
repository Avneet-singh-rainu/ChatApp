import React from "react";
import "../App.css";

const Message = ({ text, sender }) => {
  return (
    <div
      style={{
        marginBottom: "10px",
        padding: "5px",
        background: "#f0f0f0",
        borderRadius: "5px",
      }}
    >
      <strong>{sender}:</strong> {text}
    </div>
  );
};

export default Message;
