import React from "react";
import { useNavigate } from "react-router-dom";

const ChatIcon = () => {
  const navigate = useNavigate();

  return (
    <div
      className="chat-icon"
      onClick={() => navigate("/chatbot")}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "60px",
        height: "60px",
        backgroundColor: "#007bff",
        color: "white",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "24px",
        cursor: "pointer",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
      }}
    >
      <i className="fas fa-comments"></i>
    </div>
  );
};

export default ChatIcon;