

function LandingPage() {

    const cancers = [
      {
        type: "Lung Cancer",
        description:
          "Lung cancer is one of the leading causes of cancer-related deaths worldwide, often linked to smoking and environmental factors.",
        deaths: "1.8M+",
        image: "https://jnj-content-lab2.brightspotcdn.com/dims4/default/eeed922/2147483647/strip/true/crop/1184x666+128+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fjnj-production-jnj.s3.us-east-1.amazonaws.com%2Fbrightspot%2F1b%2F32%2F2e138abbf1792e49103c9e3516a8%2Fno-one-would-believe-me-when-i-suspected-i-had-lung-cancer-0923-new.jpg",
      },
      {
        type: "Breast Cancer",
        description:
          "Breast cancer is the most common cancer in women, with early detection significantly improving survival rates.",
        deaths: "685K+",
        image: "https://cdn.sanity.io/images/0vv8moc6/cancernetwork/a1542ea0059bfdab711ce79a7af6aec29f717704-7000x5000.jpg?fit=crop&auto=format",
      },
      {
        type: "Colorectal Cancer",
        description:
          "Colorectal cancer affects the colon or rectum and is often preventable with regular screenings and a healthy lifestyle.",
        deaths: "935K+",
        image: "https://www.iarc.who.int/wp-content/uploads/2022/07/Colorectal_banner.jpg",
      },
    ];
  return (
    <div>

      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center py-32 text-white"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto relative z-10 px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              Raising Cancer Awareness
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Join us in spreading awareness about cancer, its symptoms, prevention, and available treatments. 
              Get expert guidance and connect with a supportive community.
            </p>
            <div className="flex gap-4">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition duration-300 shadow-lg">
                Learn More
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition duration-300">
                Join Community
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="container mx-auto py-16 px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            <img
              src="https://res.cloudinary.com/broadcastmed/image/fetch/ar_16:9,c_fill,g_auto,f_auto,q_auto,w_1300/https%3A%2F%2F55933-bcmed.s3.amazonaws.com%2Fbcp%2Fimages%2FdmImage%2FSourceImage%2Fpancreatic-cancer-header2.jpg"
              alt="Cancer Awareness"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1599045118108-bf9954418b76?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Cancer Support"
              className="absolute -bottom-8 -right-8 w-48 h-48 bg-white p-2 shadow-lg rounded-lg border-4 border-white"
            />
          </div>

          {/* Text Section */}
          <div>
            <span className="bg-blue-100 text-blue-600 py-1 px-3 rounded-full text-sm font-semibold">
              About Us
            </span>
            <h1 className="text-4xl font-bold text-gray-800 mt-4 mb-6">
              Supporting Cancer Patients & Spreading Awareness
            </h1>
            <div className="bg-gray-100 border-l-4 border-blue-600 p-4 mb-6">
              <p className="text-gray-700 mb-2">
                Our mission is to provide resources, support, and a community for individuals affected by cancer. We strive to educate, empower, and connect patients, caregivers, and healthcare professionals.
              </p>
              <span className="text-blue-600 font-semibold">Elizabeth & Bahati, Founders</span>
            </div>
            <p className="text-gray-700 mb-6">
              Through early detection, research, and patient support, we aim to fight cancer effectively. Join us in raising awareness and helping those in need.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-blue-600 text-white py-3 px-6 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition"
              >
                Learn More
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </a>
              <a
                href="#"
                className="bg-transparent border-2 border-blue-600 text-blue-600 py-3 px-6 rounded-lg flex items-center gap-2 hover:bg-blue-600 hover:text-white transition"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* cancer types section*/}
      <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-xl mx-auto mb-8">
          <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm uppercase">
            Cancer Awareness
          </span>
          <h2 className="text-3xl font-bold mt-4">Common Types of Cancer</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {cancers.map((cancer, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={cancer.image}
                alt={cancer.type}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 text-center">
                <h3 className="text-xl font-semibold mb-2">{cancer.type}</h3>
                <p className="text-gray-600 mb-4">{cancer.description}</p>
                <div className="bg-blue-700 p-3 rounded-lg">
                  <span className="text-white font-medium text-lg">
                    {cancer.deaths} <small className="text-white">deaths</small>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
      {/*ending */}
      {/* What We Offer Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-700 mb-8">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white shadow-xl rounded-lg p-8 hover:shadow-2xl transition-all duration-300">
              <div className="text-blue-600 text-5xl mb-4">
                <i className="material-icons">library_books</i>
              </div>
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">Educational Resources</h3>
              <p className="text-gray-600 text-lg">
                Learn about different types of cancer, early detection, prevention strategies, and treatment options through our expertly curated articles and guides.
              </p>
            </div>
            <div className="bg-white shadow-xl rounded-lg p-8 hover:shadow-2xl transition-all duration-300">
              <div className="text-blue-600 text-5xl mb-4">
                <i className="material-icons">forum</i>
              </div>
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">Community Support</h3>
              <p className="text-gray-600 text-lg">
                Connect with other cancer patients, survivors, caregivers, and medical professionals in our supportive community forum.
              </p>
            </div>
            <div className="bg-white shadow-xl rounded-lg p-8 hover:shadow-2xl transition-all duration-300">
              <div className="text-blue-600 text-5xl mb-4">
                <i className="material-icons">health_and_safety</i>
              </div>
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">Medical Chatbot</h3>
              <p className="text-gray-600 text-lg">
                Get real-time answers to your questions about cancer symptoms, treatments, and self-care through our AI-powered medical chatbot.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
