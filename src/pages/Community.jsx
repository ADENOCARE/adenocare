import { useState } from 'react';

function CommunityChat() {
  // State to hold chat messages
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");

  // Handle sending a message
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (messageInput.trim()) {
      // Add new message to the chat
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          text: messageInput,
          sender: "User", // Can be dynamic based on the logged-in user
          timestamp: new Date().toLocaleTimeString(),
        },
      ]);
      setMessageInput(""); // Clear the input field
    }
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">Community Chat</h2>

      {/* Chat Messages */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-lg h-96 overflow-y-auto">
        {messages.length === 0 ? (
          <p className="text-center text-gray-500">Start chatting with others!</p>
        ) : (
          <ul className="space-y-4">
            {messages.map((message) => (
              <li key={message.id} className="bg-white p-4 rounded-lg shadow-md">
                <p className="font-semibold text-blue-600">{message.sender}</p>
                <p>{message.text}</p>
                <small className="text-gray-500">{message.timestamp}</small>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Chat Input Form */}
      <form onSubmit={handleSendMessage} className="mt-6">
        <div className="flex items-center">
          <input
            type="text"
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            placeholder="Type your message..."
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button
            type="submit"
            className="ml-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default CommunityChat;
