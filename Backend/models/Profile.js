// const mongoose = require('mongoose');

// const profileSchema = new mongoose.Schema({
//   email: { type: String, required: true, unique: true },
//   codeforcesUsername: { type: String },
//   codechefUsername: { type: String },
//   leetcodeUsername: { type: String },
// }, { timestamps: true });

// module.exports = mongoose.model('Profile', profileSchema);


// const mongoose = require('mongoose');

// const profileSchema = new mongoose.Schema({
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//   codeforces: { type: String },
//   codechef: { type: String },
//   leetcode: { type: String },
// }, { timestamps: true });

// module.exports = mongoose.model('Profile', profileSchema);


const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  codeforces: String,
  codechef: String,
  leetcode: String,
});

module.exports = mongoose.model('Profile', profileSchema);
