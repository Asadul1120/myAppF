import { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";
import { useAuth } from "../AuthContext";

const UserChat = () => {
  const { auth } = useAuth();

  if (!auth?.user) {
    return (
      <div className="w-full h-screen flex items-center justify-center text-gray-500">
        Loading user data...
      </div>
    );
  }

  const userId = auth.user.id;
  const socket = useRef(null);
  

  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  // Initialize socket only once
  useEffect(() => {
    socket.current = io(`${import.meta.env.VITE_API_URL}`);

    socket.current.on("receive_message", (msg) => {
      if (msg.userId === userId || msg.sender === "admin") {
        setMessages((prev) => [...prev, msg]);
      }
    });

    return () => {
      socket.current.disconnect();
    };
  }, [userId]);

  // Fetch old messages
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/userChat/${userId}`);
        const data = await res.json();
        setMessages(data);
      } catch (error) {
        console.error("Failed to fetch messages", error);
      }
    };

    fetchMessages();
  }, [userId]);

  // Send message
  const handleSend = async () => {
    if (!newMessage.trim()) return;

    const messageData = {
      sender: auth.user.role || "user",
      text: newMessage,
      userId,
    };

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/userChat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${auth.token}` // optional
        },
        body: JSON.stringify(messageData),
      });

      const savedMessage = await res.json();

      socket.current.emit("send_message", savedMessage);
      setMessages((prev) => [...prev, savedMessage]);
      setNewMessage("");
    } catch (err) {
      console.error("Send failed", err);
    }
  };

  return (
    <div className="w-full h-screen flex flex-col bg-gray-100 py-25">
      <div className="bg-blue-600 text-white p-4 font-bold shadow">
        Chat with Admin
      </div>

      <div className="flex-1 p-4 space-y-4 overflow-y-auto">
        {messages.map((msg) => (
          <div
            key={msg._id || msg.id}
            className={`flex ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-4 py-2 rounded-lg max-w-xs ${
                msg.sender === "user"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-black"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 border-t bg-white flex items-center gap-2">
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          className="flex-1 border border-gray-300 rounded-lg p-2 focus:outline-none"
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default UserChat;
