import React, { useState } from "react";
import axios from "axios";

const ClassificationPage = () => {
  const [formData, setFormData] = useState({
    patientName: "",
    patientAge: "",
  });
  const [selectedImage, setSelectedImage] = useState(null);
  const [result, setResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedImage) {
      setResult("Please select an image.");
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("image", selectedImage);
    formDataToSend.append("patientName", formData.patientName);
    formDataToSend.append("patientAge", formData.patientAge);

    try {
      const response = await axios.post("http://localhost:5000/classify", formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setResult(response.data);
    } catch (error) {
      setResult("Error classifying the image.");
      console.error(error);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Lung Scan Classification</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Patient Name"
          value={formData.patientName}
          onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
          className="border p-2"
        />
        <input
          type="number"
          placeholder="Patient Age"
          value={formData.patientAge}
          onChange={(e) => setFormData({ ...formData, patientAge: e.target.value })}
          className="border p-2"
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setSelectedImage(e.target.files[0])}
          className="border p-2"
        />
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
          Classify
        </button>
      </form>
      {result && <p className="mt-4 text-lg">{result}</p>}
    </div>
  );
};

export default ClassificationPage;
