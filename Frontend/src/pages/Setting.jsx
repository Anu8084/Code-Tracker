// 


import React, { useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [email, setEmail] = useState('');
  const [codeforces, setCodeforces] = useState('');
  const [codechef, setCodechef] = useState('');
  const [leetcode, setLeetcode] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/api/profile', {
        email,
        codeforces,
        codechef,
        leetcode,
      });

      // Save email to localStorage after successful profile save
      localStorage.setItem('email', email);

      alert(res.data.message);
    } catch (err) {
      console.error('Profile update failed:', err.response?.data || err.message);
      alert('Failed to update profile');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Update Coding Profiles</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
          required
        />
        <input
          type="text"
          placeholder="Codeforces Handle"
          value={codeforces}
          onChange={(e) => setCodeforces(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="text"
          placeholder="CodeChef Handle"
          value={codechef}
          onChange={(e) => setCodechef(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="text"
          placeholder="LeetCode Handle"
          value={leetcode}
          onChange={(e) => setLeetcode(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Save Profile
        </button>
      </form>
    </div>
  );
};

export default Profile;
