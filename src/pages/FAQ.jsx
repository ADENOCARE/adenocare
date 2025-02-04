import { useState } from "react";

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
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Frequently Asked Questions About Cancer
      </h1>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="border border-gray-300 rounded-lg shadow-sm">
            <button
              className="w-full text-left p-4 flex justify-between items-center bg-gray-100 hover:bg-gray-200"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-semibold text-gray-700">{faq.question}</span>
              <span>{openIndex === index ? "▲" : "▼"}</span>
            </button>
            {openIndex === index && (
              <div className="p-4 bg-white border-t border-gray-300">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
