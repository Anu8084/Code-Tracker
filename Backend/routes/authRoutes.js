// const express = require('express');
// const { registerUser, loginUser, getUserProfile } = require('../controllers/authcontroller');
// const { authenticateToken } = require('../middleware/authMiddleware'); // ✅ token middleware bhi

// const router = express.Router();

// router.post('/register', registerUser);
// router.post('/login', loginUser);
// router.get('/profile', authenticateToken, getUserProfile,); // ✅ secure profile route

// module.exports = router;
                                

const express = require('express');
const {
  registerUser,
  loginUser,
  getUserProfile,
} = require('../controllers/authcontroller');
const { authenticateToken } = require('../middleware/authMiddleware');

const router = express.Router();

// Public routes
router.post('/register', registerUser);
router.post('/login', loginUser);

// Protected route - needs JWT
router.get('/profile', authenticateToken, getUserProfile);

module.exports = router;
