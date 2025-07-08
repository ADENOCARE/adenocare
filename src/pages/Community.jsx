import { useState } from "react";

const App = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      name: "Dedan Okware",
      profileImage: "/src/assets/images/image-1.jpg",
      date: "3 days ago",
      content:
        "You are more than your diagnosis—never forget your power.",
      comments: [],
    },
    {
      id: 2,
      name: "Ikechukwu Nnekuwo",
      profileImage: "/src/assets/images/image-1.jpg",
      date: "1 week ago",
      content:
        "Hope is the air that sustains us in the fight against lung cancer.",
      comments: [],
    },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [newPost, setNewPost] = useState({ name: "", content: "" });
  const [activeTab, setActiveTab] = useState("Feed");

  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleCreatePost = () => {
    if (newPost.name && newPost.content) {
      setPosts([
        ...posts,
        {
          id: posts.length + 1,
          name: newPost.name,
          profileImage: "/src/assets/images/user.png",
          date: "Just now",
          content: newPost.content,
          comments: [],
        },
      ]);
      setNewPost({ name: "", content: "" });
      setShowModal(false);
    }
  };

  const handleAddComment = (postId, comment) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? { ...post, comments: [...post.comments, comment] }
          : post
      )
    );
  };

  const daysInMonth = (month, year) =>
    new Date(year, month + 1, 0).getDate();

  const renderCalendar = () => {
    const currentYear = selectedDate.getFullYear();
    const currentMonth = selectedDate.getMonth();

    const days = Array.from(
      { length: daysInMonth(currentMonth, currentYear) },
      (_, i) => i + 1
    );

    return (
      <div className="grid grid-cols-7 gap-2 text-center">
        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
          <div key={day} className="font-semibold text-sm">
            {day}
          </div>
        ))}
        {days.map((day) => (
          <div
            key={day}
            className={`${
              day === selectedDate.getDate()
                ? "bg-blue-500 text-white"
                : "bg-gray-100"
            } p-2 rounded-lg`}
            onClick={() =>
              setSelectedDate(new Date(currentYear, currentMonth, day))
            }
          >
            {day}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto flex flex-col lg:flex-row gap-4 py-6 px-6">
        {/* Left Section */}
        <div className="w-full lg:w-2/3">
          {/* Tabs */}
          <div className="flex space-x-4 border-b">
            <button
              onClick={() => setActiveTab("Feed")}
              className={`py-2 px-4 ${
                activeTab === "Feed"
                  ? "border-b-2 border-blue-500 text-blue-500"
                  : ""
              }`}
            >
              Feed
            </button>
            <button
              onClick={() => setActiveTab("My Posts")}
              className={`py-2 px-4 ${
                activeTab === "My Posts"
                  ? "border-b-2 border-blue-500 text-blue-500"
                  : ""
              }`}
            >
              My Posts
            </button>
          </div>

          {/* Create Post Button */}
          <div className="mt-4 flex justify-between items-center">
            <h2 className="text-lg font-semibold">{activeTab}</h2>
            <button
              onClick={() => setShowModal(true)}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              Create Post
            </button>
          </div>

          {/* Posts */}
          <div className="mt-4 space-y-4">
            {posts.map((post) => (
              <div
                key={post.id}
                className={`bg-white shadow-md rounded-lg p-4 ${
                  activeTab === "Feed" || post.name === "Your Name"
                    ? ""
                    : "hidden"
                }`}
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={post.profileImage}
                    alt="profile"
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h2 className="font-semibold">{post.name}</h2>
                    <p className="text-sm text-gray-500">{post.date}</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-700">{post.content}</p>
                <div className="mt-4">
                  {post.comments.map((comment, index) => (
                    <p
                      key={index}
                      className="bg-gray-100 p-2 rounded-lg mt-2 text-sm text-gray-700"
                    >
                      {comment}
                    </p>
                  ))}
                </div>
                <div className="mt-4 flex">
                  <input
                    type="text"
                    placeholder="Write a comment..."
                    className="flex-1 border rounded-lg px-4 py-2"
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && e.target.value.trim() !== "") {
                        handleAddComment(post.id, e.target.value.trim());
                        e.target.value = "";
                      }
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/3">
          {/* Events */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-4">Events</h2>
            <div className="border-t pt-4">{renderCalendar()}</div>
            <div className="mt-4">
              <p className="text-gray-500">
                Selected Date: {selectedDate.toDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Create Post Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-semibold mb-4">Create Post</h2>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border rounded-lg px-4 py-2 mb-4"
              value={newPost.name}
              onChange={(e) =>
                setNewPost((prev) => ({ ...prev, name: e.target.value }))
              }
            />
            <textarea
              placeholder="What's on your mind?"
              className="w-full border rounded-lg px-4 py-2 mb-4"
              rows="4"
              value={newPost.content}
              onChange={(e) =>
                setNewPost((prev) => ({ ...prev, content: e.target.value }))
              }
            ></textarea>
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-300 px-4 py-2 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleCreatePost}
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
              >
                Post
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
