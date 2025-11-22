import { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";
import { useAuth } from "../AuthContext";

const UserChat = () => {
  const { auth } = useAuth();

  if (!auth?.user) {
    return (
      <div className="w-full h-screen flex items-center justify-center text-gray-400 bg-gray-900">
        Loading user data...
      </div>
    );
  }

  const userId = auth.user.id;
  const socket = useRef(null);

  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  // socket initialize
  useEffect(() => {
    socket.current = io(import.meta.env.VITE_API_URL, {
      transports: ["websocket"],
    });

    socket.current.on("receive_message", (msg) => {
      if (msg.userId === userId || msg.sender === "admin") {
        setMessages((prev) => [...prev, msg]);
      }
    });

    return () => {
      if (socket.current) socket.current.disconnect();
    };
  }, [userId]);

  // Load previous messages
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/userChat/${userId}`
        );
        const data = await res.json();
        setMessages(data);
      } catch (error) {
        console.error("Failed to fetch messages:", error);
      }
    };

    fetchMessages();
  }, [userId, messages, socket, newMessage]);

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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(messageData),
      });

      const savedMessage = await res.json();
      socket.current.emit("send_message", savedMessage);

      setMessages((prev) => [...prev, savedMessage]);
      setNewMessage("");
    } catch (err) {
      console.error("Send failed:", err);
    }
  };

  return (
    <div className="w-full h-screen flex flex-col bg-gray-800 px-3 pt-35 pb-3">
      <div className="flex-1 flex flex-col border bg-gray-900 border-gray-700 rounded-xl shadow-xl overflow-hidden ">
        {/* Header */}
        <div className="bg-gray-800 text-white font-semibold text-lg p-4 border-b border-gray-700">
          💬 Chat with Admin
        </div>

        {/* Messages Area */}
        <div className="flex-1 p-4 space-y-4 overflow-y-auto">
          {messages.map((msg) => (
            <div
              key={msg._id || msg.id}
              className={`flex ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`px-4 py-2 rounded-xl max-w-xs shadow ${
                  msg.sender === "user"
                    ? "bg-blue-600 text-white rounded-br-none"
                    : "bg-gray-700 text-gray-100 rounded-bl-none"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="p-4 bg-gray-800 border-t border-gray-700 flex items-center gap-3">
          <input
            type="text"
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            className="flex-1 bg-gray-700 text-gray-200 placeholder-gray-400 border border-gray-600 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={handleSend}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow transition"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserChat;
