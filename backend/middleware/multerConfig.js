const multer = require("multer");
const path = require("path");

// Configure storage for uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Save files to the 'uploads/' folder
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// File type validation
const fileFilter = (req, file, cb) => {
  const allowedFileTypes = /jpeg|jpg|png/; // Allowed file types
  const isValidExt = allowedFileTypes.test(path.extname(file.originalname).toLowerCase());
  const isValidMime = allowedFileTypes.test(file.mimetype);

  if (isValidExt && isValidMime) {
    cb(null, true); // Accept the file
  } else {
    cb(new Error("Only JPG and PNG image files are allowed"));
  }
};

// Multer configuration
const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }, // Limit file size to 5MB
});

module.exports = upload;
