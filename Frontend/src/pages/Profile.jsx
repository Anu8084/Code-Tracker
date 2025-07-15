// 

import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row justify-center items-start gap-8 p-6 flex-wrap">

      {/* CodeChef */}
      <div className="bg-white shadow-xl rounded-2xl p-6 w-full md:w-80 border border-gray-200 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
        <h2 className="text-2xl font-bold mb-4 text-center text-purple-700">CodeChef</h2>
        <button
          onClick={() => navigate('/codechef')}
          className="bg-purple-600 text-white px-5 py-3 rounded-xl font-medium transition duration-300 hover:bg-purple-700 hover:scale-105 w-full"
        >
          Fetch Profile
        </button>
      </div>

      {/* LeetCode */}
      <div className="bg-white shadow-xl rounded-2xl p-6 w-full md:w-80 border border-gray-200 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
        <h2 className="text-2xl font-bold mb-4 text-center text-yellow-500">LeetCode</h2>
        <button
          onClick={() => navigate('/leetcode')}
          className="bg-yellow-500 text-white px-5 py-3 rounded-xl font-medium transition duration-300 hover:bg-yellow-600 hover:scale-105 w-full"
        >
          Fetch Profile
        </button>
      </div>

      {/* Codeforces */}
      <div className="bg-white shadow-xl rounded-2xl p-6 w-full md:w-80 border border-gray-200 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">Codeforces</h2>
        <button
          onClick={() => navigate('/codeforces')}
          className="bg-blue-600 text-white px-5 py-3 rounded-xl font-medium transition duration-300 hover:bg-blue-700 hover:scale-105 w-full"
        >
          Fetch Profile
        </button>
      </div>

    </div>
  );
};

export default Profile;
