// // // import React, { useEffect, useState } from 'react';
// // // import axios from 'axios';

// // // const CodeChefContests = () => {
// // //   const [contests, setContests] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState(null);

// // //   useEffect(() => {
// // //     axios
// // //       .get('https://www.codechef.com/api/list/contests/all?sort_by=START&sorting_order=asc&offset=0&mode=all')
// // //       .then((response) => {
// // //         console.log('Status:', response.status);
// // //     console.log('Data:', response.data);
// // //         if (response.data.status === 'success') {
// // //           // Combine present, future and past contests into one array
// // //           const allContests = [
// // //             ...response.data.present_contests,
// // //             ...response.data.future_contests,
// // //             ...response.data.past_contests,
// // //           ];
// // //           setContests(allContests);
// // //         } else {
// // //           setError('Failed to load contests');
// // //         }
// // //       })
// // //       .catch(() => {
// // //         setError('Error fetching contests');
// // //       })
// // //       .finally(() => setLoading(false));
// // //   }, []);

// // //   if (loading) return <p>Loading contests...</p>;
// // //   if (error) return <p>{error}</p>;

// // //   return (
// // //     <div className="flex flex-wrap justify-center gap-6 p-6">
// // //       {contests.map((contest) => (
// // //         <div
// // //           key={contest.contest_code}
// // //           className="bg-white rounded-2xl shadow-md p-6 w-80 transform transition duration-300 hover:scale-105 hover:shadow-xl"
// // //         >
// // //           <h2 className="text-2xl font-bold text-gray-800 mb-3">{contest.contest_name}</h2>
// // //           <p className="text-gray-600 mb-2">
// // //             Start: {new Date(contest.contest_start_date_iso).toLocaleString()}
// // //           </p>
// // //           <p className="text-gray-600 mb-4">
// // //             End: {new Date(contest.contest_end_date_iso).toLocaleString()}
// // //           </p>
// // //           <p className="text-gray-500 text-sm">Duration: {contest.contest_duration} minutes</p>
// // //         </div>
// // //       ))}
// // //     </div>
// // //   );
// // // };

// // // export default CodeChefContests;













// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';

// // const CodeChefContests = () => {
// //   const [contests, setContests] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     axios
// //       .get('http://localhost:5000/api/profile/codechef/contests') // ✅ calling your backend route
// //       .then((response) => {
// //         console.log('Response:', response.data);
// //         if (response.data.success) {
// //           setContests(response.data.contests);
// //         } else {
// //           setError('Failed to load contests');
// //         }
// //       })
// //       .catch((err) => {
// //         console.error("❌ Frontend fetch error:", err);
// //         setError('Error fetching contests');
// //       })
// //       .finally(() => setLoading(false));
// //   }, []);

// //   if (loading) return <p>Loading contests...</p>;
// //   if (error) return <p>{error}</p>;

// //   return (
// //     <div className="flex flex-wrap justify-center gap-6 p-6">
// //       {contests.map((contest) => (
// //         <div
// //           key={contest.contest_code}
// //           className="bg-white rounded-2xl shadow-md p-6 w-80 transform transition duration-300 hover:scale-105 hover:shadow-xl"
// //         >
// //           <h2 className="text-2xl font-bold text-gray-800 mb-3">{contest.contest_name}</h2>
// //           <p className="text-gray-600 mb-2">
// //             Start: {new Date(contest.contest_start_date_iso).toLocaleString()}
// //           </p>
// //           <p className="text-gray-600 mb-4">
// //             End: {new Date(contest.contest_end_date_iso).toLocaleString()}
// //           </p>
// //           <p className="text-gray-500 text-sm">Duration: {contest.contest_duration} minutes</p>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default CodeChefContests;





// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const CodeChefContests = () => {
//   const [contests, setContests] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     axios
//       .get('http://localhost:5000/api/profile/codechef/contests')
//       .then((response) => {
//         console.log('API Response:', response.data);

//         // Extract the three arrays directly from the response
//         const { present = [], future = [], past = [] } = response.data;

//         // Merge into a single array
//         const allContests = [
//           ...present,
//           ...future,
//           ...past
//         ];

//         setContests(allContests);
//       })
//       .catch((err) => {
//         console.error('❌ Frontend fetch error:', err);
//         setError('Error fetching contests');
//       })
//       .finally(() => setLoading(false));
//   }, []);

//   if (loading) return <p>Loading contests...</p>;
//   if (error)   return <p className="text-red-600">{error}</p>;

//   return (
//     <div className="flex flex-wrap justify-center gap-6 p-6 bg-gray-50 min-h-screen">
//       {contests.map((contest) => (
//         <div
//           key={contest.contest_code}
//           className="bg-white rounded-2xl shadow-lg p-6 w-80 transition-transform transform hover:scale-105 hover:shadow-2xl"
//         >
//           <h2 className="text-2xl font-semibold text-gray-800 mb-2">
//             {contest.contest_name}
//           </h2>
//           <p className="text-gray-600 mb-1">
//             <span className="font-medium">Code:</span> {contest.contest_code}
//           </p>
//           <p className="text-gray-600 mb-1">
//             <span className="font-medium">Start:</span>{' '}
//             {new Date(contest.contest_start_date_iso).toLocaleString()}
//           </p>
//           <p className="text-gray-600 mb-3">
//             <span className="font-medium">End:</span>{' '}
//             {new Date(contest.contest_end_date_iso).toLocaleString()}
//           </p>
//           <p className="text-gray-500 text-sm">
//             Duration: {contest.contest_duration} minutes
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CodeChefContests;




// 







// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const ITEMS_PER_PAGE = 4;

// const ContestSection = ({ title, contests }) => {
//   const [currentPage, setCurrentPage] = useState(1);

//   const totalPages = Math.ceil(contests.length / ITEMS_PER_PAGE);
//   const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
//   const visibleContests = contests.slice(startIdx, startIdx + ITEMS_PER_PAGE);

//   const changePage = (direction) => {
//     setCurrentPage((prev) =>
//       direction === 'next'
//         ? Math.min(prev + 1, totalPages)
//         : Math.max(prev - 1, 1)
//     );
//   };

//   return (
//     <div className="mb-12 w-full max-w-6xl">
//       <h2 className="text-3xl font-bold mb-4 text-center text-blue-700">{title}</h2>
//       <div className="flex flex-wrap justify-center gap-6">
//         {visibleContests.map((contest) => (
//           <div
//             key={contest.contest_code}
//             className="bg-white rounded-2xl shadow-lg p-6 w-80 transition-transform transform hover:scale-105 hover:shadow-2xl"
//           >
//             <h3 className="text-xl font-semibold text-gray-800 mb-2">
//               {contest.contest_name}
//             </h3>
//             <p className="text-gray-600 mb-1">
//               <strong>Code:</strong> {contest.contest_code}
//             </p>
//             <p className="text-gray-600 mb-1">
//               <strong>Start:</strong>{' '}
//               {new Date(contest.contest_start_date_iso).toLocaleString()}
//             </p>
//             <p className="text-gray-600 mb-1">
//               <strong>End:</strong>{' '}
//               {new Date(contest.contest_end_date_iso).toLocaleString()}
//             </p>
//             <p className="text-gray-500 text-sm">
//               Duration: {contest.contest_duration} minutes
//             </p>

//             <a
//               href={`https://www.codechef.com/${contest.contest_code}`}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-block mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
//             >
//               View Contest
//             </a>
//           </div>
//         ))}
//       </div>

//       {contests.length > ITEMS_PER_PAGE && (
//         <div className="flex justify-center mt-6 space-x-4">
//           <button
//             className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
//             onClick={() => changePage('prev')}
//             disabled={currentPage === 1}
//           >
//             ⬅️ Previous
//           </button>
//           <span className="text-gray-700 font-semibold">
//             Page {currentPage} of {totalPages}
//           </span>
//           <button
//             className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
//             onClick={() => changePage('next')}
//             disabled={currentPage === totalPages}
//           >
//             Next ➡️
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// const CodeChefContests = () => {
//   const [future, setFuture] = useState([]);
//   const [present, setPresent] = useState([]);
//   const [past, setPast] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     axios
//       .get('http://localhost:5000/api/profile/codechef/contests')
//       .then((response) => {
//         const { future = [], present = [], past = [] } = response.data;
//         setFuture(future);
//         setPresent(present);
//         setPast(past);
//       })
//       .catch((err) => {
//         console.error('❌ Error fetching data:', err);
//         setError('Error fetching contests');
//       })
//       .finally(() => setLoading(false));
//   }, []);

//   if (loading) return <p className="text-center mt-10 text-xl">Loading contests...</p>;
//   if (error) return <p className="text-center mt-10 text-red-600">{error}</p>;

//   const totalContests = [...present, ...future];

//   return (
//     <div className="bg-gray-50 min-h-screen p-8 flex flex-col items-center">
//       <ContestSection title="🔮 Upcoming Contests" contests={future} />
//       <ContestSection title="📅 Total Active & Upcoming Contests" contests={totalContests} />
//       <ContestSection title="⏳ Past Contests" contests={past} />
//     </div>
//   );
// };

// export default CodeChefContests;







import React, { useEffect, useState } from 'react';

const CodeforcesContest = () => {
  const [contests, setContests] = useState({
    future: [],
    present: [],
    past: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchContests = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/profile/codeforces/contests');
        if (!response.ok) {
          throw new Error('Failed to fetch contests');
        }
        const data = await response.json();
        setContests(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchContests();
  }, []);

  const renderContests = (list) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {list.map((contest) => (
        <div
          key={contest.contest_id}
          className="bg-white p-5 rounded-2xl shadow hover:shadow-xl transition duration-200 border border-gray-200"
        >
          <h3 className="text-xl font-bold text-indigo-700 mb-2">{contest.contest_name}</h3>
          <p className="text-gray-700 mb-1">
            <strong>Start:</strong> {new Date(contest.contest_start_time).toLocaleString()}
          </p>
          <p className="text-gray-700 mb-1">
            <strong>End:</strong> {new Date(contest.contest_end_time).toLocaleString()}
          </p>
          <p className="text-gray-700 mb-3">
            <strong>Duration:</strong> {contest.contest_duration} minutes
          </p>
          <a
            href={contest.contest_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition text-sm"
          >
            Go to Contest
          </a>
        </div>
      ))}
    </div>
  );

  if (loading) return <p className="text-center text-lg mt-10">Loading contests...</p>;
  if (error) return <p className="text-center text-red-600 mt-10">{error}</p>;

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-extrabold mb-8 text-center text-indigo-800">
        🏆 Codeforces Contests Dashboard
      </h1>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-green-600">🚀 Upcoming Contests</h2>
        {contests.future.length ? renderContests(contests.future) : <p>No upcoming contests.</p>}
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-yellow-600">🔥 Ongoing Contests</h2>
        {contests.present.length ? renderContests(contests.present) : <p>No ongoing contests.</p>}
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">📜 Past Contests</h2>
        {contests.past.length ? renderContests(contests.past) : <p>No past contests available.</p>}
      </div>
    </div>
  );
};

export default CodeforcesContest;

