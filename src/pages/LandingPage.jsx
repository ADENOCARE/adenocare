
function LandingPage() {
  return (
    <div className="bg-gray-100 py-16">
    <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center">
      {/* Text Section */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 float-start">
          AdenoCare - Comprehensive Health Platform
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          Empowering patients and caregivers with modern tools and support for advanced adenocarcinoma care.
        </p>
        <a
          href="#services"
          className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-blue-700 transition duration-300"
        >
          Learn More
        </a>
      </div>
      {/* Image Section */}
      <div className="md:w-1/2 mt-8 md:mt-0">
  <img
    src="/src/assets/images/lung1.png"
    alt="AdenoCare Building"
    className="w-100 h-auto rounded-lg float-right "  // Adjusted the size to medium using w-64 for width and h-auto for auto height
  />
</div>

    </div>
  

      {/* About Us Section */}
      <section className="py-16 px-6 bg-white">
  <div className="container mx-auto flex flex-col md:flex-row items-center">
    {/* Text Section */}
    <div className="md:w-1/2 md:pr-10 text-center md:text-left">
      <h2 className="text-4xl font-bold text-blue-700 mb-6">About Us</h2>
      <p className="text-lg text-gray-700 leading-relaxed">
        AdenoCare is a comprehensive platform designed to provide cutting-edge solutions for adenocarcinoma patients. 
        Our mission is to empower patients, caregivers, and healthcare providers with reliable information, modern tools, 
        and a supportive community. We are dedicated to improving the lives of patients and advancing the understanding of 
        lung cancer treatment. 
      </p>
      <p className="text-lg text-gray-700 leading-relaxed mt-4">
        Through our platform, we aim to achieve the following:
      </p>
      <ul className="list-disc list-inside text-lg text-gray-700 mt-4">
        <li>Helping in the early diagnosis of lung cancer through AI-powered diagnostic tools.</li>
        <li>Providing a platform for patients to interact with doctors and healthcare professionals in real-time.</li>
        <li>Offering personalized treatment plans based on individual health needs and progress.</li>
        <li>Providing access to a community of fellow patients, caregivers, and experts for emotional and informational support.</li>
        <li>Educating patients on healthy lifestyles and dietary changes that may aid in cancer prevention and treatment.</li>
      </ul>
    </div>
  
          {/* Image Section */}
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src="/src/assets/images/image-1.jpg"
              alt="About Us"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-700 mb-8">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Offer 1 */}
            <div className="bg-white shadow-xl rounded-lg p-8 hover:shadow-2xl transition-all duration-300">
              <div className="text-blue-600 text-5xl mb-4">
                <i className="material-icons">medical_services</i>
              </div>
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                Advanced Diagnosis
              </h3>
              <p className="text-gray-600 text-lg">
                Utilize our AI-driven diagnosis tools for accurate
                adenocarcinoma detection and analysis, improving early
                detection and treatment planning.
              </p>
            </div>
            {/* Offer 2 */}
            <div className="bg-white shadow-xl rounded-lg p-8 hover:shadow-2xl transition-all duration-300">
              <div className="text-blue-600 text-5xl mb-4">
                <i className="material-icons">chat</i>
              </div>
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                Medical Chatbot
              </h3>
              <p className="text-gray-600 text-lg">
                Get real-time support and guidance on treatments, recovery,
                lifestyle changes, and more from our AI-powered medical chatbot.
              </p>
            </div>
            {/* Offer 3 */}
            <div className="bg-white shadow-xl rounded-lg p-8 hover:shadow-2xl transition-all duration-300">
              <div className="text-blue-600 text-5xl mb-4">
                <i className="material-icons">group</i>
              </div>
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                Community Support
              </h3>
              <p className="text-gray-600 text-lg">
                Join our community to connect with other patients, caregivers,
                and healthcare professionals to share experiences and find support.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
