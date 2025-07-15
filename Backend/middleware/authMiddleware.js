// // // Backend/middleware/authMiddleware.js
// // const jwt = require('jsonwebtoken');

// // const authenticateToken = (req, res, next) => {
// //   const token = req.header('Authorization')?.split(' ')[1];

// //   if (!token) {
// //     return res.status(401).json({ message: 'Access denied. No token provided.' });
// //   }

// //   try {
// //     const decoded = jwt.verify(token, process.env.JWT_SECRET);
// //     req.user = decoded;
// //     next();
// //   } catch (error) {
// //     res.status(400).json({ message: 'Invalid token.' });
// //   }
// // };

// // module.exports = { authenticateToken };






// const jwt = require('jsonwebtoken');

// const authenticateToken = (req, res, next) => {
//   const token = req.header('Authorization')?.split(' ')[1];

//   if (!token) {
//     return res.status(401).json({ message: 'Access denied. No token provided.' });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.userId = decoded.userId;
//     next();
//   } catch (error) {
//     res.status(400).json({ message: 'Invalid token.' });
//   }
// };

// module.exports = { authenticateToken };




const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {

  const token = req.header('Authorization')?.split(' ')[1];
  console.log(typeof(token))

  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    console.log("hii")
    console.log(process.env.JWT_SECRET)
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    console.log("hii")
    console.log('Decoded token:', decoded); // ✅ Useful for debugging
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(400).json({ message: 'Invalid token.' });
  }
};

module.exports = { authenticateToken };

