// 






// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom'; // <-- Import navigation

// const Leetcode = () => {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);
//   const email = localStorage.getItem('userEmail');
//   const navigate = useNavigate(); // <-- Initialize

//   useEffect(() => {
//     if (!email) return;

//     const fetchData = async () => {
//       try {
//         const res = await axios.get(`http://localhost:5000/api/profile/leetcode?email=${email}`);
//         console.log('Fetched data:', res.data);
//         setData(res.data.leetcode.data);
//       } catch (err) {
//         console.error('LeetCode Error:', err);
//         setError('Failed to load profile.');
//       }
//     };

//     fetchData();
//   }, [email]);

//   const user = data?.matchedUser;
//   const contest = data?.userContestRanking;

//   return (
//     <div className="p-6">
//       {/* Back Arrow Button */}
//       <button
//         onClick={() => navigate(-1)}
//         className="text-yellow-600 hover:text-yellow-800 mb-4 flex items-center"
//       >
//         <span className="text-2xl">&#8592;</span>
//         <span className="ml-2 text-sm">Back</span>
//       </button>

//       <h2 className="text-2xl font-bold text-yellow-600 mb-4 text-center">LeetCode Profile</h2>

//       {error && <p className="text-red-500 text-center">{error}</p>}

//       {data && user ? (
//         <div className="bg-white shadow-md p-6 rounded-lg max-w-md mx-auto space-y-2 text-sm">
//           <img
//             src={user.profile?.userAvatar || 'https://via.placeholder.com/48'}
//             alt="Avatar"
//             className="w-12 h-12 rounded-full mx-auto mb-2"
//           />
//           <p><strong>Username:</strong> {user.username}</p>
//           <p><strong>Problems Solved:</strong> {
//             user.submitStats?.acSubmissionNum?.find(d => d.difficulty === 'All')?.count ?? 'N/A'
//           }</p>
//           <p><strong>Contests:</strong> {contest?.attendedContestsCount ?? 'N/A'}</p>
//           <p><strong>Rating:</strong> {contest?.rating ? Math.round(contest.rating) : 'N/A'}</p>
//           <p><strong>Top %:</strong> {contest?.topPercentage ? `${contest.topPercentage}%` : 'N/A'}</p>
//         </div>
//       ) : (
//         !error && <p className="text-center">Loading profile...</p>
//       )}
//     </div>
//   );
// };

// export default Leetcode;




import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Leetcode = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const email = localStorage.getItem('userEmail');
  const navigate = useNavigate();

  useEffect(() => {
    if (!email) return;

    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/profile/leetcode?email=${email}`);
        setData(res.data.leetcode);
      } catch (err) {
        console.error('LeetCode Error:', err);
        setError('Failed to load profile.');
      }
    };

    fetchData();
  }, [email]);

  const COLORS = ['#4ade80', '#facc15', '#f87171'];

  const pieData = data
    ? [
        { name: 'Easy', value: data.easySolved },
        { name: 'Medium', value: data.mediumSolved },
        { name: 'Hard', value: data.hardSolved },
      ]
    : [];

  const formatTimestamp = (ts) => {
    const date = new Date(ts * 1000);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  };

  return (
    <div className="p-6">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="text-yellow-600 hover:text-yellow-800 mb-4 flex items-center"
      >
        <span className="text-2xl">&#8592;</span>
        <span className="ml-2 text-sm">Back</span>
      </button>

      <h2 className="text-2xl font-bold text-yellow-600 mb-4 text-center">LeetCode Profile</h2>

      {error && <p className="text-red-500 text-center">{error}</p>}

      {data ? (
        <>
          <div className="bg-white shadow-md p-6 rounded-lg max-w-md mx-auto space-y-2 text-sm">
            <img
              src="https://via.placeholder.com/48"
              alt="Avatar"
              className="w-12 h-12 rounded-full mx-auto mb-2"
            />
            <p><strong>Total Solved:</strong> {data.totalSolved}</p>
            <p><strong>Easy:</strong> {data.easySolved} / {data.totalEasy}</p>
            <p><strong>Medium:</strong> {data.mediumSolved} / {data.totalMedium}</p>
            <p><strong>Hard:</strong> {data.hardSolved} / {data.totalHard}</p>
            <p><strong>Ranking:</strong> {data.ranking}</p>
            <p><strong>Reputation:</strong> {data.reputation}</p>
            <p><strong>Contribution Points:</strong> {data.contributionPoint}</p>
            <p><strong>Active Days:</strong> {Object.keys(data.submissionCalendar || {}).length}</p>
          </div>

          {/* Pie Chart */}
          <div className="max-w-md mx-auto mt-6">
            <h3 className="text-center font-semibold mb-2">Problem Difficulty Distribution</h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Recent Submissions */}
          <div className="max-w-md mx-auto mt-6 bg-gray-50 p-4 rounded-lg shadow">
            <h3 className="text-center font-semibold mb-2">Recent Submissions</h3>
            {data.recentSubmissions?.slice(0, 5).map((item, index) => (
              <div key={index} className="border-b py-1">
                <p className="text-sm">
                  <strong>Title:</strong> {item.title || 'Unknown'}
                </p>
                <p className="text-xs text-gray-600">
                  <strong>Time:</strong> {formatTimestamp(item.timestamp)}
                </p>
              </div>
            ))}
          </div>
        </>
      ) : (
        !error && <p className="text-center">Loading profile...</p>
      )}
    </div>
  );
};

export default Leetcode;



