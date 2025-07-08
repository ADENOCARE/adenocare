const { spawn } = require("child_process");
const path = require("path");

const classifyImage = (imagePath) => {
  return new Promise((resolve, reject) => {
    const pythonProcess = spawn("python", [
      path.join(__dirname, "../classify.py"),
      imagePath,
    ]);

    let result = "";
    let error = "";

    pythonProcess.stdout.on("data", (data) => {
      result += data.toString();
    });

    pythonProcess.stderr.on("data", (data) => {
      error += data.toString();
    });

    pythonProcess.on("close", (code) => {
      if (code === 0) {
        resolve(result.trim());
      } else {
        reject(`Python script error: ${error}`);
      }
    });
  });
};

module.exports = { classifyImage };
