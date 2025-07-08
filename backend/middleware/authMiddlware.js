const jwt = require("jsonwebtoken");

// Middleware to protect routes
const authenticateToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).send("Access Denied");

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach user data to request
    next();
  } catch (err) {
    res.status(403).send("Invalid Token");
  }
};

module.exports = { authenticateToken };
