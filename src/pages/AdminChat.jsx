
import { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";

const AdminChat = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const socket = useRef(null);
  const selectedUserRef = useRef(null);

  // Keep selectedUser updated
  useEffect(() => {
    selectedUserRef.current = selectedUser;
  }, [selectedUser]);

  // Initialize socket
  useEffect(() => {
    socket.current = io(import.meta.env.VITE_API_URL);

    socket.current.on("receive_message", (msg) => {
      if (msg.userId === selectedUserRef.current?._id) {
        setMessages((prev) => [...prev, msg]);
      }
    });

    return () => {
      socket.current.disconnect();
    };
  }, []);

  // Fetch users
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/user`);
        const data = await res.json();
        setUsers(data);
        if (data.length > 0) setSelectedUser(data[0]);
      } catch (err) {
        console.error("Failed to fetch users", err);
      }
    };

    fetchUsers();
  }, []);

  // Load messages for selected user
  useEffect(() => {
    if (!selectedUser) return;

    const fetchMessages = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/userChat/${selectedUser._id}`
        );
        const data = await res.json();
        setMessages(data);
      } catch (err) {
        console.error("Failed to fetch messages", err);
      }
    };

    fetchMessages();
  }, [selectedUser]);

  // Send message
  const handleSend = async () => {
    if (!newMessage.trim()) return;

    const msgData = {
      userId: selectedUser._id,
      sender: "admin",
      text: newMessage,
    };

    try {
      await fetch(`${import.meta.env.VITE_API_URL}/userChat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(msgData),
      });

      socket.current.emit("send_message", msgData);

      setMessages((prev) => [...prev, msgData]);
      setNewMessage("");
    } catch (err) {
      console.error("Send failed", err);
    }
  };

  if (!selectedUser) {
    return (
      <div className="w-full h-screen flex items-center justify-center text-gray-400 bg-gray-900">
        Loading users...
      </div>
    );
  }

  return (
    <div className="w-full h-screen flex bg-gray-900 pt-24">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-800 border-r border-gray-700 p-4 shadow-xl">
        <h2 className="text-gray-200 text-xl font-semibold mb-4">Users</h2>

        <ul className="space-y-2 overflow-y-auto max-h-[80vh] pr-2 custom-scrollbar">
          {users.map((user) => (
            <li
              key={user._id}
              onClick={() => setSelectedUser(user)}
              className={`p-3 rounded-lg cursor-pointer transition border border-transparent ${
                selectedUser._id === user._id
                  ? "bg-blue-600 text-white border-blue-400"
                  : "bg-gray-700 text-gray-200 hover:bg-gray-600"
              }`}
            >
              {user.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Chat Area */}
      <div className="w-3/4 flex flex-col bg-gray-900">
        {/* Header */}
        <div className="bg-gray-800 text-gray-200 p-4 border-b border-gray-700 text-lg font-semibold shadow-md">
          💬 Chat with {selectedUser.name}
        </div>

        {/* Messages */}
        <div className="flex-1 p-5 space-y-4 overflow-y-auto">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${
                msg.sender === "admin" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`px-4 py-2 max-w-xs rounded-xl shadow ${
                  msg.sender === "admin"
                    ? "bg-blue-600 text-white rounded-br-none"
                    : "bg-gray-700 text-gray-200 rounded-bl-none"
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

export default AdminChat;
