// const express = require('express');
// const { saveProfile, getProfile } = require('../controllers/profileController');

// const router = express.Router();

// // Save or Update Profile
// router.post('/', saveProfile);

// // Fetch Profile
// router.get('/:email', getProfile);

// module.exports = router;




const express = require('express');
const { saveProfile,fetchCodechefData,fetchLeetcodeData, fetchCodeforcesData,fetchCodechefContests,getCodeforcesContests} = require('../controllers/profileController');
const { authenticateToken } = require('../middleware/authMiddleware'); 
const router = express.Router();

// Route to save or update profile
router.post('/', saveProfile);
router.get('/codechef', fetchCodechefData);
router.get('/leetcode',fetchLeetcodeData);
router.get('/codeforces',fetchCodeforcesData);
router.get('/codechef/contests', fetchCodechefContests);
router.get('/codeforces/contests',getCodeforcesContests);

module.exports = router;
