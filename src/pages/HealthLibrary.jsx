import  { useState } from 'react';
import { motion } from 'framer-motion';

const HealthLibraryPage = () => {
  // State to manage expanded sections
  const [expanded, setExpanded] = useState(null);

  // Function to toggle expanded sections
  const toggleExpand = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  // Data for common cancers in Kenya
  const cancers = [
    {
      id: 1,
      name: "Breast Cancer",
      icon: "👩‍⚕️",
      description: "Breast cancer is the most common cancer among women in Kenya, affecting both young and older women. Early detection through regular screenings can significantly improve outcomes.",
      causes: "Genetic mutations (BRCA1 and BRCA2), hormonal factors, lifestyle choices (e.g., alcohol consumption, lack of exercise), and environmental factors.",
      riskFactors: "Family history of breast cancer, obesity, alcohol consumption, lack of physical activity, late menopause, and hormone replacement therapy.",
      symptoms: "Lump in the breast or underarm, changes in breast shape or size, nipple discharge, skin dimpling, and redness or flaky skin around the nipple.",
      prevention: "Regular self-exams, mammograms, maintaining a healthy weight, limiting alcohol, and breastfeeding.",
    },
    {
      id: 2,
      name: "Cervical Cancer",
      icon: "🦠",
      description: "Cervical cancer is a leading cause of cancer-related deaths among women in Kenya, often linked to HPV infection. Vaccination and regular screenings can prevent most cases.",
      causes: "Human papillomavirus (HPV) infection, smoking, weakened immune system, and long-term use of oral contraceptives.",
      riskFactors: "Early sexual activity, multiple sexual partners, lack of HPV vaccination, smoking, and poor access to healthcare.",
      symptoms: "Abnormal vaginal bleeding, pelvic pain, pain during intercourse, unusual discharge, and bleeding after menopause.",
      prevention: "HPV vaccination, regular Pap smears, practicing safe sex, and quitting smoking.",
    },
    {
      id: 3,
      name: "Prostate Cancer",
      icon: "👨‍⚕️",
      description: "Prostate cancer is the most common cancer among men in Kenya, typically affecting older men. Early detection through PSA testing can improve survival rates.",
      causes: "Age, genetic predisposition, hormonal changes, and lifestyle factors.",
      riskFactors: "Family history of prostate cancer, obesity, high-fat diet, and African ancestry.",
      symptoms: "Difficulty urinating, blood in urine or semen, erectile dysfunction, bone pain, and weakness in the legs.",
      prevention: "Regular screenings (PSA tests), maintaining a healthy diet, exercising, and avoiding smoking.",
    },
    {
      id: 4,
      name: "Esophageal Cancer",
      icon: "🍵",
      description: "Esophageal cancer is prevalent in Kenya, often linked to dietary and lifestyle factors. Early diagnosis is challenging due to vague symptoms.",
      causes: "Tobacco use, alcohol consumption, hot beverage consumption, poor diet (low in fruits and vegetables), and gastroesophageal reflux disease (GERD).",
      riskFactors: "Smoking, alcohol abuse, obesity, GERD, and a diet high in processed meats.",
      symptoms: "Difficulty swallowing, weight loss, chest pain, chronic cough, hoarseness, and indigestion.",
      prevention: "Quitting smoking, limiting alcohol, eating a balanced diet, and managing GERD.",
    },
    {
      id: 5,
      name: "Colorectal Cancer",
      icon: "🩺",
      description: "Colorectal cancer affects the colon or rectum and is increasingly common in Kenya. Screening can detect precancerous polyps early.",
      causes: "Genetic mutations, inflammatory bowel disease (e.g., Crohn's disease), poor diet (high in red meat and low in fiber), and sedentary lifestyle.",
      riskFactors: "Family history of colorectal cancer, high red meat consumption, lack of fiber, obesity, and smoking.",
      symptoms: "Changes in bowel habits, blood in stool, abdominal pain, unexplained weight loss, and fatigue.",
      prevention: "Regular colonoscopies, eating a high-fiber diet, exercising, and avoiding processed meats.",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      <div className="container mx-auto">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-blue-800 mb-4">
            Health Library
          </h1>
          <p className="text-lg text-gray-600">
            Learn about the most common types of cancer in Kenya, their causes, risk factors, symptoms, and prevention strategies. 
            Explore trusted resources for more information.
          </p>
        </motion.div>

        {/* Cancer Sections */}
        <div className="space-y-6">
          {cancers.map((cancer) => (
            <motion.div
              key={cancer.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <span className="text-3xl">{cancer.icon}</span>
                  <h2 className="text-2xl font-semibold text-blue-800">
                    {cancer.name}
                  </h2>
                </div>
                <button
                  onClick={() => toggleExpand(cancer.id)}
                  className="text-blue-600 hover:text-blue-800 transition duration-300"
                >
                  {expanded === cancer.id ? "Collapse" : "Expand"}
                </button>
              </div>
              {expanded === cancer.id && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="mt-4 space-y-4"
                >
                  <p className="text-gray-700">{cancer.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-semibold text-gray-800">Common Causes</h3>
                      <p className="text-gray-600">{cancer.causes}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Risk Factors</h3>
                      <p className="text-gray-600">{cancer.riskFactors}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Signs & Symptoms</h3>
                      <p className="text-gray-600">{cancer.symptoms}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Prevention</h3>
                      <p className="text-gray-600">{cancer.prevention}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* External Resources Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <h2 className="text-3xl font-bold text-blue-800 mb-6">
            Explore More Resources
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            For more in-depth information, visit these trusted sources:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.knccp.org"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
            >
              Kenya National Cancer Control Program (KNCCP)
            </a>
            <a
              href="https://www.who.int"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition duration-300"
            >
              World Health Organization (WHO)
            </a>
            <a
              href="https://www.kemri.org"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition duration-300"
            >
              Kenya Medical Research Institute (KEMRI)
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HealthLibraryPage;