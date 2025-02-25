import React, { useState, useEffect } from "react";

const API_URL = "http://localhost:5000/chat"; // Backend API endpoint

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    welcomeMessage();
  }, []);

  const welcomeMessage = async () => {
    setLoading(true);
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: "Hello" }),
    });

    const data = await response.json();
    setMessages([{ sender: "AI", text: data.reply }]);
    setLoading(false);
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "User", text: input };
    setMessages([...messages, userMessage]);

    setLoading(true);
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input }),
    });

    const data = await response.json();
    setMessages((prevMessages) => [...prevMessages, { sender: "AI", text: data.reply }]);
    setLoading(false);
    setInput("");
  };

  return (
    <div className="chatbot-container">
      <h2>Chatbot</h2>

      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            <p><strong>{msg.sender}:</strong> {msg.text}</p>
          </div>
        ))}
        {loading && <p>Typing...</p>}
      </div>
      <div className="input-box">
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="Type a message..." 
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
