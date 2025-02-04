

const cancers = [
  {
    name: "Breast Cancer",
    description: "A type of cancer that forms in the cells of the breasts.",
    stages: ["Stage 0: Non-invasive", "Stage 1: Early-stage", "Stage 2: Localized", "Stage 3: Advanced", "Stage 4: Metastatic"],
    symptoms: ["Lump in the breast", "Change in size/shape of the breast", "Nipple discharge", "Pain in the breast"],
    prevention: ["Regular screening", "Healthy diet", "Avoiding alcohol and smoking", "Exercise"],
  },
  {
    name: "Lung Cancer",
    description: "A type of cancer that begins in the lungs, often caused by smoking.",
    stages: ["Stage 0: Localized", "Stage 1: Small tumor", "Stage 2: Larger tumor", "Stage 3: Spread to lymph nodes", "Stage 4: Spread to distant organs"],
    symptoms: ["Persistent cough", "Shortness of breath", "Chest pain", "Coughing up blood"],
    prevention: ["Quit smoking", "Avoid secondhand smoke", "Eat a balanced diet", "Exercise regularly"],
  },
  {
    name: "Skin Cancer",
    description: "A type of cancer that develops from the skin cells, often due to UV exposure.",
    stages: ["Stage 0: Localized", "Stage 1: Small tumor", "Stage 2: Larger tumor", "Stage 3: Spread to lymph nodes", "Stage 4: Spread to other organs"],
    symptoms: ["Unusual skin growth", "Moles that change color/size", "Itchy or bleeding skin patches"],
    prevention: ["Use sunscreen", "Wear protective clothing", "Avoid tanning beds", "Regular skin checkups"],
  },
];

const HealthLibrary = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Header Section */}
      <section className="bg-blue-600 text-white text-center py-10">
        <h1 className="text-4xl font-bold">Health Library</h1>
        <p className="mt-4 text-lg">Explore different types of cancer, their symptoms, stages, and prevention.</p>
      </section>

      {/* Cancer List Section */}
      <section className="max-w-6xl mx-auto mt-8">
        {cancers.map((cancer, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-bold text-blue-700">{cancer.name}</h2>
            <p className="text-lg text-gray-700 mt-2">{cancer.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
              {/* Stages */}
              <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800">Stages</h3>
                <ul className="mt-2 list-disc list-inside">
                  {cancer.stages.map((stage, i) => (
                    <li key={i} className="text-gray-700">{stage}</li>
                  ))}
                </ul>
              </div>

              {/* Symptoms */}
              <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800">Symptoms</h3>
                <ul className="mt-2 list-disc list-inside">
                  {cancer.symptoms.map((symptom, i) => (
                    <li key={i} className="text-gray-700">{symptom}</li>
                  ))}
                </ul>
              </div>

              {/* Prevention */}
              <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800">Prevention</h3>
                <ul className="mt-2 list-disc list-inside">
                  {cancer.prevention.map((prevention, i) => (
                    <li key={i} className="text-gray-700">{prevention}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* External Link Section */}
      <section className="text-center mt-10">
        <h2 className="text-2xl font-semibold">Want to Learn More?</h2>
        <p className="text-lg mt-2">
          Visit the <a href="https://www.cancer.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">American Cancer Society</a> for more information.
        </p>
      </section>
    </div>
  );
};

export default HealthLibrary;
