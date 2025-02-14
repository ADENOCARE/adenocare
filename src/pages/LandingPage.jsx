

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
<section className="relative bg-gradient-to-r from-red-600 via-blue-600 to-pink-400 text-white py-20 px-6">
  <div className="container mx-auto flex flex-col md:flex-row items-center">
    
    {/* Text Section */}
    <div className="md:w-1/2 text-center md:text-left" data-aos="fade-right">
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
        Raising Cancer Awareness
      </h1>
      <p className="text-lg md:text-2xl md:justify-center mb-6 max-w-2xl">
        Join us in spreading awareness about cancer, its symptoms, prevention, and available treatments. 
        Get expert guidance and connect with a supportive community.
      </p>
      <div className="flex justify-center md:justify-start space-x-4">
        <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition duration-300 shadow-lg">
          Learn More
        </button>
        <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition duration-300">
          Join Community
        </button>
      </div>
    </div>

    {/* Image Section */}
    <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center" data-aos="fade-left">
      <img
        src="/src/assets/images/lung1.png" // Replace with your actual image path
        alt="Cancer Awareness"
        className="rounded-lg w-full max-w-md "
      />
    </div>

  </div>
</section>


      {/* About Us Section */}
      <section className="container mx-auto py-10 px-6">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Image Section */}
        <div className="relative h-[400px]">
          <img
            src="/src/assets/images/image-1.jpg"
            alt="Cancer Awareness"
            className="w-full h-full object-cover rounded-lg"
          />
          <img
            src="/src/assets/images/therapy.webp"
            alt="Cancer Support"
            className="absolute top-0 right-0 w-40 h-40 bg-white p-2 shadow-lg rounded-lg"
          />
        </div>

        {/* Text Section */}
        <div>
          <span className="bg-secondary text-primary py-1 px-3 rounded-full text-sm font-semibold">
            About Us
          </span>
          <h1 className="text-4xl font-bold text-gray-800 mt-4 mb-6">
            Supporting Cancer Patients & Spreading Awareness
          </h1>
          <div className="bg-gray-100 border-l-4 border-primary p-4 mb-6">
            <p className="text-gray-700 mb-2">
              Our mission is to provide resources, support, and a community for individuals affected by cancer. We strive to educate, empower, and connect patients, caregivers, and healthcare professionals.
            </p>
            <span className="text-primary font-semibold">Elizabeth&Bahati, Founder</span>
          </div>
          <p className="text-gray-700 mb-6">
            Through early detection, research, and patient support, we aim to fight cancer effectively. Join us in raising awareness and helping those in need.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="bg-primary text-black py-2 px-4 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition"
            >
              Learn More
              <i className="fa fa-arrow-right"></i>
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
