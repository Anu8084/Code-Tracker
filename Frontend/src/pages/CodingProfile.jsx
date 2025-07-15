import React from 'react';
import { useNavigate } from 'react-router-dom';

const CodingProfile = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Explore Your Coding Profiles
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* CodeChef Card */}
        <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition">
          <h2 className="text-3xl font-bold mb-4 text-blue-800">CodeChef</h2>
          <p className="text-gray-600 mb-6">
            Practice and compete in coding challenges to sharpen your skills. CodeChef hosts a variety of contests every month.
          </p>
          <button
            onClick={() => navigate('/codechef')}
            className="bg-blue-700 text-white py-2 px-6 rounded-lg hover:bg-blue-800 transition duration-300"
          >
            View CodeChef Profile
          </button>
        </div>

        {/* LeetCode Card */}
        <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition">
          <h2 className="text-3xl font-bold mb-4 text-yellow-600">LeetCode</h2>
          <p className="text-gray-600 mb-6">
            Prepare for coding interviews and master data structures and algorithms with a wide variety of problems on LeetCode.
          </p>
          <button
            onClick={() => navigate('/leetcode')}
            className="bg-yellow-500 text-white py-2 px-6 rounded-lg hover:bg-yellow-600 transition duration-300"
          >
            View LeetCode Profile
          </button>
        </div>

        {/* Codeforces Card */}
        <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition">
          <h2 className="text-3xl font-bold mb-4 text-purple-700">Codeforces</h2>
          <p className="text-gray-600 mb-6">
            Join one of the biggest competitive programming communities and test your skills in rated contests and virtual arenas.
          </p>
          <button
            onClick={() => navigate('/codeforces')}
            className="bg-purple-700 text-white py-2 px-6 rounded-lg hover:bg-purple-800 transition duration-300"
          >
            View Codeforces Profile
          </button>
        </div>

      </div>
    </div>
  );
};

export default CodingProfile;
