// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const ContestCards = () => {
//   const navigate = useNavigate();

//   const contests = [
//     {
//       name: 'CodeChef',
//       description: 'Participate in CodeChef programming contests and improve your competitive coding skills.',
//       route: '/codechef-contest',
//     },
//     {
//       name: 'Codeforces',
//       description: 'Join Codeforces contests and solve challenging problems from around the world.',
//       route: '/codeforces-contest',
//     },
//     {
//       name: 'LeetCode',
//       description: 'Test your coding skills on LeetCode with timed contests and interviews.',
//       route: '/leetcode-contest',
//     },
//   ];

//   return (
//     <div className="flex flex-wrap justify-center gap-6 p-6">
//       {contests.map((contest, index) => (
//         <div
//           key={index}
//           className="bg-white rounded-2xl shadow-md p-6 w-80 transform transition duration-300 hover:scale-105 hover:shadow-xl"
//         >
//           <h2 className="text-2xl font-bold text-gray-800 mb-3">{contest.name}</h2>
//           <p className="text-gray-600 mb-4">{contest.description}</p>
//           <button
//             onClick={() => navigate(contest.route)}
//             className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
//           >
//             Contest Page
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ContestCards;





import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Trophy, ArrowRight } from 'lucide-react'; // Optional icons

const ContestCards = () => {
  const navigate = useNavigate();

  const contests = [
    {
      name: 'CodeChef',
      description:
        'Participate in CodeChef programming contests and improve your competitive coding skills.',
      route: '/codechef-contest',
    },
    {
      name: 'Codeforces',
      description:
        'Join Codeforces contests and solve challenging problems from around the world.',
      route: '/codeforces-contest',
    },
    {
      name: 'LeetCode',
      description:
        'Test your coding skills on LeetCode with timed contests and interviews.',
      route: '/leetcode-contest',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-200 py-12 px-4 sm:px-8">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
        🔥 Explore Coding Contests
      </h1>
      <div className="flex flex-wrap justify-center gap-8">
        {contests.map((contest, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-xl p-6 w-80 transform transition-transform hover:scale-105 hover:shadow-2xl border border-gray-200"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-semibold text-gray-800">{contest.name}</h2>
              <Trophy className="text-yellow-500" size={28} />
            </div>
            <p className="text-gray-600 mb-6">{contest.description}</p>
            <button
              onClick={() => navigate(contest.route)}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-4 py-2 rounded-lg transition font-medium shadow"
            >
              Visit Contest <ArrowRight size={18} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContestCards;
