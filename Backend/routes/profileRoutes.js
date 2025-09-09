const express = require('express');
const {
  saveProfile,
  fetchCodechefData,
  fetchLeetcodeData,
  fetchCodeforcesData,
  fetchCodechefContests,
  getCodeforcesContests
} = require('../controllers/profileController');
const { authenticateToken } = require('../middleware/authMiddleware');

const router = express.Router();

// ✅ All routes below require login

// Save or update profile
router.post('/', authenticateToken, saveProfile);

// Fetch data from competitive programming platforms
router.get('/codechef', authenticateToken, fetchCodechefData);
router.get('/leetcode', authenticateToken, fetchLeetcodeData);
router.get('/codeforces', authenticateToken, fetchCodeforcesData);

// Fetch contest details
router.get('/codechef/contests', authenticateToken, fetchCodechefContests);
router.get('/codeforces/contests', authenticateToken, getCodeforcesContests);

module.exports = router;
