import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    question: "What is cancer?",
    answer:
      "Cancer is a group of diseases where cells grow uncontrollably and spread to other parts of the body.",
  },
  {
    question: "What are the most common types of cancer?",
    answer:
      "The most common types include breast cancer, lung cancer, prostate cancer, colorectal cancer, and skin cancer.",
  },
  {
    question: "What causes cancer?",
    answer:
      "Cancer can be caused by genetic mutations, lifestyle factors (such as smoking and diet), environmental exposures, and infections.",
  },
  {
    question: "What are the early signs of cancer?",
    answer:
      "Unexplained weight loss, persistent fatigue, changes in skin appearance, lumps, chronic pain, and unusual bleeding may be early signs of cancer.",
  },
  {
    question: "How can I reduce my risk of cancer?",
    answer:
      "Maintain a healthy diet, exercise regularly, avoid tobacco and excessive alcohol, and get regular medical checkups.",
  },
  {
    question: "Can cancer be cured?",
    answer:
      "Some cancers can be cured if detected early and treated effectively. Others can be managed with treatment to prolong life.",
  },
  {
    question: "How is cancer diagnosed?",
    answer:
      "Cancer is diagnosed through physical exams, imaging tests (MRI, CT scans), biopsies, and laboratory tests.",
  },
  {
    question: "Is cancer hereditary?",
    answer:
      "Some cancers have a genetic component, meaning they can run in families. However, most cancers are caused by lifestyle and environmental factors.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Frequently Asked Questions About Cancer
      </h1>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg shadow-lg overflow-hidden"
          >
            <button
              className="w-full text-left p-5 flex justify-between items-center bg-gradient-to-r from-blue-400 to-blue-700 hover:from-blue-200 hover:to-blue-600 transition duration-300"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-semibold text-gray-800 text-lg">
                {faq.question}
              </span>
              <span className="text-gray-700 text-xl">
                {openIndex === index ? "▲" : "▼"}
              </span>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-5 bg-white border-t border-gray-300"
                >
                  <p className="text-gray-600 text-base leading-relaxed">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
