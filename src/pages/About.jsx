

const AboutPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-purple-600 text-white text-center py-20">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="mt-4 text-lg">
          Our platform is dedicated to raising awareness about cancer, providing educational resources, and offering support to those affected.
        </p>
      </section>

      {/* Mission and Vision */}
      <section className="py-16 px-6 md:px-20">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg">
              Our mission is to educate people on cancer types, prevention, and early detection, while providing a platform for community support and medical guidance.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p className="text-lg">
              Our vision is to create a world where cancer is not a death sentence, but a challenge that can be overcome through awareness, support, and advanced medical care.
            </p>
          </div>
        </div>
      </section>

      {/* Community and Doctor Interaction */}
      <section className="bg-gray-200 py-16">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Join Our Community</h2>
          <p className="text-lg mb-8">
            Connect with others affected by cancer, share your story, and interact with doctors to get advice on your health concerns. Our platform is here to help and support you every step of the way.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Medical Chatbot</h3>
              <p className="text-lg">Ask our chatbot about symptoms, treatment options, and ways to prevent cancer. It’s like having a medical professional in your pocket.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Community Section</h3>
              <p className="text-lg">Engage with others, share insights, and discuss your experiences in our community forum. You&apos;re not alone in this journey.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Book an Appointment</h3>
              <p className="text-lg">Find and book appointments with top cancer specialists. Get the diagnosis and care you need in a seamless, easy-to-use interface.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">Take Action Today</h2>
        <p className="text-lg mb-8">Empower yourself with knowledge and support. Join us in the fight against cancer.</p>
        <a href="/signup" className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold">
          Get Started
        </a>
      </section>
    </div>
  );
};

export default AboutPage;
