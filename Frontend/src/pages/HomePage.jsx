// // src/pages/HomePage.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';

// const HomePage = () => {
//   return (
//     <main className="bg-gray-100 min-h-screen text-gray-800">
//       {/* Hero Section */}
//       <section className="bg-white py-20 shadow-sm">
//         <div className="container mx-auto px-4 text-center">
//           <h1 className="text-4xl font-extrabold mb-4 text-gray-900">
//             Track Your Coding Journey
//           </h1>
//           <p className="text-lg text-gray-600 mb-6">
//             Easily view your progress on <span className="font-medium text-purple-600">LeetCode</span>, <span className="font-medium text-yellow-500">CodeChef</span>, and <span className="font-medium text-blue-500">Codeforces</span>.
//           </p>
//           <Link
//             to="/login"
//             className="bg-purple-600 text-white px-6 py-3 rounded-xl shadow hover:bg-purple-700 transition"
//           >
//             Get Started
//           </Link>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-16 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-12">Why CodeTracker?</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//             <div className="bg-white p-6 rounded-lg shadow text-center hover:shadow-lg transition">
//               <h3 className="text-xl font-semibold mb-2">Unified Dashboard</h3>
//               <p>See all your coding stats from different platforms in one place.</p>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow text-center hover:shadow-lg transition">
//               <h3 className="text-xl font-semibold mb-2">Live Updates</h3>
//               <p>Your stats are fetched live from LeetCode, CodeChef, and Codeforces.</p>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow text-center hover:shadow-lg transition">
//               <h3 className="text-xl font-semibold mb-2">Track Progress</h3>
//               <p>Monitor your problem-solving streaks, rating changes, and more.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="text-center py-12 bg-purple-600 text-white">
//         <h2 className="text-2xl font-semibold mb-4">Ready to start tracking?</h2>
//         <Link
//           to="/login"
//           className="inline-block bg-white text-purple-600 font-medium px-6 py-3 rounded-xl hover:bg-gray-100 transition"
//         >
//           Login to Your Dashboard
//         </Link>
//       </section>
//     </main>
//   );
// };

// export default HomePage;







// src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <main className="bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 py-20 shadow-md">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-extrabold mb-4 text-white drop-shadow-md">
            Track Your Coding Journey
          </h1>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Stay motivated and track your progress on
            <span className="font-bold text-yellow-300 mx-1">LeetCode</span>,
            <span className="font-bold text-orange-300 mx-1">CodeChef</span>, and
            <span className="font-bold text-blue-300 mx-1">Codeforces</span> in one place.
          </p>
          <Link
            to="/login"
            className="bg-white text-purple-700 font-semibold px-8 py-3 rounded-full shadow-md hover:bg-gray-100 transition duration-300"
          >
            🚀 Get Started
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Why CodeTracker?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              {
                title: '📊 Unified Dashboard',
                desc: 'All your coding stats across platforms, shown neatly together.',
              },
              {
                title: '⚡ Live Updates',
                desc: 'Your coding activity is synced live from competitive platforms.',
              },
              {
                title: '📈 Progress Insights',
                desc: 'Track streaks, ratings, problems solved, and more at a glance.',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 text-center"
              >
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-14 bg-indigo-700 text-white">
        <h2 className="text-2xl font-semibold mb-4">Ready to start tracking?</h2>
        <Link
          to="/login"
          className="inline-block bg-white text-indigo-700 font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition"
        >
          🔐 Login to Your Dashboard
        </Link>
      </section>
    </main>
  );
};

export default HomePage;

