
import { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";

const AdminChat = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const socket = useRef(null);
  const selectedUserRef = useRef(null); // ✅ Track selected user in ref

  // Keep selectedUserRef updated
  useEffect(() => {
    selectedUserRef.current = selectedUser;
  }, [selectedUser]);

  // Initialize socket connection once
  useEffect(() => {
    socket.current = io(import.meta.env.VITE_API_URL);

    socket.current.on("receive_message", (msg) => {
      // ✅ Always compare with updated selectedUser
      if (msg.userId === selectedUserRef.current?._id) {
        setMessages((prev) => [...prev, msg]);
      }
    });

    return () => {
      socket.current.disconnect();
    };
  }, []);

  // Fetch all users once on load
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

  // Fetch messages for selected user
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

  const handleSend = async () => {
    if (!newMessage.trim()) return;

    const newMsg = {
      userId: selectedUser._id,
      sender: "admin",
      text: newMessage,
    };

    try {
      // Save to DB
      await fetch(`${import.meta.env.VITE_API_URL}/userChat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newMsg),
      });

      // Emit via socket
      socket.current.emit("send_message", newMsg);
      setMessages((prev) => [...prev, newMsg]);
      setNewMessage("");
    } catch (err) {
      console.error("Send failed", err);
    }
  };

  if (!selectedUser) {
    return (
      <div className="w-full h-screen flex items-center justify-center text-gray-500">
        Loading users...
      </div>
    );
  }

  return (
    <div className="w-full h-screen flex bg-gray-100 py-25">
      {/* Sidebar: User List */}
      <div className="w-1/4 bg-white border-r shadow-sm p-4">
        <h2 className="text-xl font-bold mb-4">Users</h2>
        <ul className="space-y-2 overflow-y-auto max-h-[80vh]">
          {users.map((user) => (
            <li
              key={user._id}
              onClick={() => setSelectedUser(user)}
              className={`p-2 rounded cursor-pointer hover:bg-gray-200 ${
                selectedUser._id === user._id
                  ? "bg-blue-100 font-semibold"
                  : ""
              }`}
            >
              {user.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Chat Area */}
      <div className="w-3/4 flex flex-col">
        <div className="bg-blue-600 text-white p-4 font-bold">
          Chat with {selectedUser.name}
        </div>

        <div className="flex-1 p-4 space-y-4 overflow-y-auto">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${
                msg.sender === "admin" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`px-4 py-2 rounded-lg max-w-xs ${
                  msg.sender === "admin"
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
    </div>
  );
};

export default AdminChat;
