const { exec } = require('child_process');
const ClassificationResult = require('../models/ClassificationResult');

// Classify Image
exports.classifyImage = async (req, res) => {
  try {
    const imagePath = req.file.path;

    // Here, you can invoke the Hugging Face model locally using Python or similar
    // Example of invoking a Python script:
    exec(`python classify.py ${imagePath}`, async (error, stdout) => {
      if (error) {
        console.error('Error running classification script:', error);
        return res.status(500).send('Error classifying image.');
      }

      const result = stdout.trim(); // Get the model's classification result
      const { patientName, patientAge } = req.body;

      // Save result to MongoDB
      const newResult = new ClassificationResult({
        patientName,
        patientAge,
        imagePath,
        result,
      });
      await newResult.save();

      res.status(200).send(`Classification Result: ${result}`);
    });
  } catch (error) {
    res.status(500).send('Error processing classification.');
  }
};
