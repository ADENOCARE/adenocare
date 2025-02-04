import  { useState, useEffect } from "react";

const images = [
  "/images/image-1.jpg",
  "/images/lung1.png",
  "/images/image-1.jpg",
];

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="relative w-full h-96 overflow-hidden">
        <img
          src={images[currentImage]}
          alt="Cancer Awareness"
          className="absolute w-full h-full object-cover transition-opacity duration-1000"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-4xl font-bold">Welcome to Cancer Awareness Platform</h1>
          <p className="mt-4 text-lg">Empowering lives through knowledge and support</p>
        </div>
      </header>

      <section className="py-16 px-8 flex flex-col md:flex-row items-center">
        <img
          src="/public/images/image-1.jpg"
          alt="Cancer Awareness"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
        <div className="md:ml-8 text-center md:text-left">
          <h2 className="text-3xl font-semibold">Why Awareness Matters</h2>
          <p className="mt-4 text-gray-700 max-w-3xl">
            Understanding cancer helps in early detection, prevention, and treatment. Our platform provides the necessary
            knowledge and support to navigate through this journey.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-blue-50 shadow-lg rounded-lg text-center">
            <h3 className="text-2xl font-semibold">Types of Cancer</h3>
            <p className="mt-2">Learn about different types of cancer, their causes, and treatments.</p>
          </div>
          <div className="p-6 bg-blue-50 shadow-lg rounded-lg text-center">
            <h3 className="text-2xl font-semibold">Medical Chatbot</h3>
            <p className="mt-2">Ask our AI-powered chatbot any questions regarding symptoms and prevention.</p>
          </div>
          <div className="p-6 bg-blue-50 shadow-lg rounded-lg text-center">
            <h3 className="text-2xl font-semibold">Health Library</h3>
            <p className="mt-2">Access our extensive library with valuable resources on cancer awareness.</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-8 text-center">
        <h2 className="text-3xl font-semibold">Join Our Community</h2>
        <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
          Be part of a supportive network where survivors, caregivers, and medical professionals come together to share knowledge, 
          offer guidance, and inspire hope. Join discussions, participate in events, and contribute to spreading awareness.
        </p>
        <button className="mt-6 bg-blue-600 text-white py-2 px-6 rounded-lg shadow-md">Join Now</button>
      </section>

     
    </div>
  );
};

export default Home;
