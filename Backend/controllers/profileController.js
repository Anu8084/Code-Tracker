// // 
// const axios =require('axios');
// const Profile = require('../models/Profile');

// const saveProfile = async (req, res) => {
//   const { email, codeforces, codechef, leetcode } = req.body;

//   try {
//     let profile = await Profile.findOne({ email });

//     if (profile) {
//       profile.codeforces = codeforces;
//       profile.codechef = codechef;
//       profile.leetcode = leetcode;
//       await profile.save();
//       console.log("Profile updated:", profile); 
//       console.log("Profile updated:", profile); 
//       return res.status(200).json({ message: 'Profile updated successfully', profile });
//     }

//     profile = new Profile({
//       email,
//       codeforces,
//       codechef,
//       leetcode,
//     });

//     await profile.save();
//     res.status(201).json({ message: 'Profile created successfully', profile });
//   } catch (err) {
//     res.status(500).json({ message: 'Error saving profile', error: err.message });
//   }
// };
// const fetchCodechefData = async (req, res) => {
//   const { email } = req.query;
//   console.log('Received email:', email);

//   try {
//     const profile = await Profile.findOne({ email });
//     console.log('Profile fetched:', profile);
    
//     if (!profile || !profile.codechef) {
//       return res.status(404).json({ message: 'CodeChef handle not found for this email' });
//     }

//     const username = profile.codechef;
//     console.log(username);

//     // Use your provided API
//     // const response = await axios.get('https://codechef-api.vercel.app/handle/${username}');
//     const response = await axios.get(`https://codechef-api.vercel.app/handle/${username}`);
//     console.log("fetching it ");

//     if (!response.data || response.data.status === 'error') {
//       return res.status(404).json({ message: 'CodeChef user not found or API failed' });
//     }

//     res.status(200).json({ codechef: response.data });
//   } catch (err) {
//     res.status(500).json({ message: 'Error fetching CodeChef data', error: err.message });
//   }
// };

// module.exports = { saveProfile,fetchCodechefData};



const axios = require('axios');
const Profile = require('../models/Profile');

// Save or update profile
const saveProfile = async (req, res) => {
  const { email, codeforces, codechef, leetcode } = req.body;

  try {
    let profile = await Profile.findOne({ email });
    console.log(email);

    if (profile) {
      profile.codeforces = codeforces;
      profile.codechef = codechef;
      profile.leetcode = leetcode;
      await profile.save();
      console.log("✅ Profile updated:", profile); 
      return res.status(200).json({ message: 'Profile updated successfully', profile });
    }

    profile = new Profile({ email, codeforces, codechef, leetcode });
    await profile.save();

    console.log("✅ New profile created:", profile);
    res.status(201).json({ message: 'Profile created successfully', profile });

  } catch (err) {
    console.error("❌ Error saving profile:", err);
    res.status(500).json({ message: 'Error saving profile', error: err.message });
  }
};

// Fetch CodeChef data using stored handle
const fetchCodechefData = async (req, res) => {
  const { email } = req.query;
  console.log('📥 Received request for email:', email);

  try {
    const profile = await Profile.findOne({ email });
    console.log('🔍 Profile fetched:', profile);

    if (!profile || !profile.codechef) {
      console.warn('⚠️ CodeChef handle not found for email:', email);
      return res.status(404).json({ message: 'CodeChef handle not found for this email' });
    }

    const username = profile.codechef;
    console.log(`🔗 Sending request to CodeChef API for username: ${username}`);

    // Request to external CodeChef API
    const apiUrl = `https://codechef-api.vercel.app/handle/${username}`;
    console.log("🌐 API URL:", apiUrl);

    const response = await axios.get(apiUrl);

    console.log("✅ API Response received");

    if (!response.data || response.data.status === 'error' || response.data.success === false) {
      console.warn("⚠️ CodeChef user not found or API returned error:", response.data);
      return res.status(404).json({ message: 'CodeChef user not found or API failed', data: response.data });
    }

    res.status(200).json({ codechef: response.data });

  } catch (err) {
    console.error("❌ Error fetching CodeChef data:", err);
    res.status(500).json({ message: 'Error fetching CodeChef data', error: err.message });
  }
};

const fetchLeetcodeData = async (req, res) => {
  const { email } = req.query;
  console.log('📥 Received request for email:', email);

  try {
    const profile = await Profile.findOne({ email });
    console.log('🔍 Profile fetched:', profile);

    if (!profile || !profile.leetcode) {
      console.warn('⚠️ LeetCode handle not found for email:', email);
      return res.status(404).json({ message: 'LeetCode handle not found for this email' });
    }

    const username = profile.leetcode;
    console.log(`🔗 Sending request to LeetCode API for username: ${username}`);

    // Request to external LeetCode API
    const apiUrl = `https://leetcode-api-faisalshohag.vercel.app/${username} `;
    console.log("🌐 API URL:", apiUrl);

    const response = await axios.get(apiUrl);

    console.log("✅ API Response received");

    if (!response.data || response.data.status === 'error' || response.data.success === false) {
      console.warn("⚠️ LeetCode user not found or API returned error:", response.data);
      return res.status(404).json({ message: 'LeetCode user not found or API failed', data: response.data });
    }

    res.status(200).json({ leetcode: response.data });

  } catch (err) {
    console.error("❌ Error fetching LeetCode data:", err);
    res.status(500).json({ message: 'Error fetching LeetCode data', error: err.message });
  }
};




const fetchCodeforcesData = async (req, res) => {
  const { email } = req.query;
  console.log('📥 Received request for email:', email);

  try {
    const profile = await Profile.findOne({ email });
    console.log('🔍 Profile fetched:', profile);

    if (!profile || !profile.codeforces) {
      console.warn('⚠️ Codeforces handle not found for email:', email);
      return res.status(404).json({ message: 'Codeforces handle not found for this email' });
    }

    const username = profile.codeforces;
    console.log(`🔗 Sending request to Codeforces API for username: ${username}`);

    const apiUrl = `https://competeapi.vercel.app/user/codeforces/${username}`;
    console.log("🌐 API URL:", apiUrl);

    const response = await axios.get(apiUrl);

    console.log("✅ API Response received");

    if (!response.data || response.data.status === 'error' || response.data.success === false) {
      console.warn("⚠️ Codeforces user not found or API returned error:", response.data);
      return res.status(404).json({ message: 'Codeforces user not found or API failed', data: response.data });
    }

    res.status(200).json({ codeforces: response.data });

  } catch (err) {
    console.error("❌ Error fetching Codeforces data:", err);
    res.status(500).json({ message: 'Error fetching Codeforces data', error: err.message });
  }
};





const fetchCodechefContests = async (req, res) => {
  try {
    const apiUrl = 'https://www.codechef.com/api/list/contests/all?sort_by=START&sorting_order=asc&offset=0&mode=all';

    console.log("🌐 Fetching contests from:", apiUrl);
    const response = await axios.get(apiUrl);

    if (!response.data) {
      return res.status(500).json({ message: 'No data received from CodeChef contests API' });
    }

    const { future_contests, present_contests, past_contests } = response.data;

    res.status(200).json({
      future: future_contests,
      present: present_contests,
      past: past_contests,
    });
  } catch (err) {
    console.error("❌ Error fetching CodeChef contests:", err.message);
    res.status(500).json({ message: 'Error fetching CodeChef contests', error: err.message });
  }
};


// controllers/profileController.js


const getCodeforcesContests = async (req, res) => {
  try {
    const response = await axios.get('https://codeforces.com/api/contest.list');
    console.log(response);
    const contests = response.data.result;

    const now = Date.now() / 1000;

    const formatContest = (contest) => {
      const startTime = new Date(contest.startTimeSeconds * 1000);
      const endTime = new Date((contest.startTimeSeconds + contest.durationSeconds) * 1000);
      
      return {
        contest_id: contest.id,
        contest_name: contest.name,
        contest_duration: contest.durationSeconds / 60, // in minutes
        contest_start_time: startTime.toISOString(),
        contest_end_time: endTime.toISOString(),
        phase: contest.phase,
        contest_url: `https://codeforces.com/contests/${contest.id}`,
      };
    };

    const future = contests
      .filter(c => c.phase === 'BEFORE')
      .slice(0, 50)
      .map(formatContest);

    const present = contests
      .filter(c => c.phase === 'CODING')
      .map(formatContest);

    const past = contests
      .filter(c => c.phase === 'FINISHED')
      .slice(0, 50)
      .map(formatContest);

    res.json({ future, present, past });
  } catch (error) {
    console.error('Error fetching Codeforces contests:', error.message);
    res.status(500).json({ error: 'Failed to fetch Codeforces contests' });
  }
};











module.exports = { saveProfile, fetchCodechefData,fetchLeetcodeData,fetchCodeforcesData,fetchCodechefContests,getCodeforcesContests };


