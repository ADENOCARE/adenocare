const express = require("express");
const router = express.Router();
const { authenticateToken } = require("../middleware/authMiddleware");
const { classifyImage } = require("../services/classifyService");
//const upload = require("../middleware/multerConfig");
const upload = require("../middleware/multerConfig"); // Import the Multer configuration

router.post("/", authenticateToken, upload.single("image"), async (req, res) => {
  try {
    const { path: imagePath } = req.file;
    const { patientName, patientAge } = req.body;

    // Call the Python classification script
    const result = await classifyImage(imagePath);

    // Save to DB or return the result
    res.send(
      `Patient: ${patientName}, Age: ${patientAge}, Classification Result: ${result}`
    );
  } catch (err) {
    console.error(err);
    res.status(500).send("Error processing the image");
  }
});

module.exports = router;
