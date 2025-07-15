// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';

// // const Codeforces = () => {
// //   const [profile, setProfile] = useState(null);
// //   const [ratings, setRatings] = useState([]);
// //   const email = localStorage.getItem('userEmail');

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       console.log("Codeforces – localStorage userEmail is:", email);
// //       if (!email) {
// //         console.warn("No email in localStorage, skipping Codeforces fetch");
// //         return;
// //       }

// //       try {
// //         const { data } = await axios.get(
// //           'http://localhost:5000/api/profile/codeforces',
// //           { params: { email } }
// //         );
// //         console.log("Raw CF response:", data);

// //         // Grab the array whether it's at top-level or under `codeforces`
// //         const arr = Array.isArray(data)
// //           ? data
// //           : Array.isArray(data.codeforces)
// //             ? data.codeforces
// //             : [];

// //         if (arr.length >= 1) {
// //           setProfile(arr[0]);                      // profile object
// //         }
// //         if (arr.length >= 2) {
// //           setRatings(arr[1].ratings || []);        // ratings array
// //         }
// //       } catch (err) {
// //         console.error("Failed to fetch Codeforces data:", err);
// //       }
// //     };

// //     fetchData();
// //   }, [email]);

// //   return (
// //     <div className="p-6">
// //       <h2 className="text-2xl font-bold text-blue-600 mb-4 text-center">
// //         Codeforces Profile
// //       </h2>

// //       {profile ? (
// //         <div className="bg-white shadow-md p-6 rounded-lg max-w-md mx-auto space-y-2 text-sm text-black">
// //           <img
// //             src={profile.avatar}
// //             alt="Avatar"
// //             className="w-20 h-20 rounded-full mx-auto mb-4"
// //           />
// //           <p><strong>Handle:</strong> {profile.handle}</p>
// //           <p><strong>Rating:</strong> {profile.rating}</p>
// //           <p><strong>Rank:</strong> {profile.rank}</p>
// //           <p><strong>Max Rating:</strong> {profile.maxRating}</p>
// //           <p><strong>Max Rank:</strong> {profile.maxRank}</p>
// //           <p><strong>Contribution:</strong> {profile.contribution}</p>
// //           <p><strong>Friends:</strong> {profile.friendOfCount}</p>
// //         </div>
// //       ) : (
// //         <p className="text-center">Loading profile...</p>
// //       )}

// //       {ratings.length > 0 && (
// //         <div className="mt-10 max-w-3xl mx-auto">
// //           <h3 className="text-xl font-semibold mb-4 text-center text-gray-700">
// //             Rating History
// //           </h3>
// //           <table className="w-full border border-gray-300 text-sm text-center">
// //             <thead className="bg-blue-100">
// //               <tr>
// //                 <th className="border px-2 py-1">Contest</th>
// //                 <th className="border px-2 py-1">Old Rating</th>
// //                 <th className="border px-2 py-1">New Rating</th>
// //                 <th className="border px-2 py-1">Rank</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {ratings.map((entry, idx) => (
// //                 <tr key={idx} className="hover:bg-gray-100">
// //                   <td className="border px-2 py-1">{entry.contestName}</td>
// //                   <td className="border px-2 py-1">{entry.oldRating}</td>
// //                   <td className="border px-2 py-1">{entry.newRating}</td>
// //                   <td className="border px-2 py-1">{entry.rank}</td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Codeforces;






// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import {
//   ResponsiveContainer,
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
// } from 'recharts';

// const Codeforces = () => {
//   const [profile, setProfile] = useState(null);
//   const [ratings, setRatings] = useState([]);
//   const email = localStorage.getItem('userEmail');

//   useEffect(() => {
//     const fetchData = async () => {
//       console.log("Codeforces – localStorage userEmail is:", email);
//       if (!email) {
//         console.warn("No email in localStorage, skipping Codeforces fetch");
//         return;
//       }

//       try {
//         const { data } = await axios.get(
//           'http://localhost:5000/api/profile/codeforces',
//           { params: { email } }
//         );
//         console.log("Raw CF response:", data);

//         // Extract array whether top-level or under `codeforces`
//         const arr = Array.isArray(data)
//           ? data
//           : Array.isArray(data.codeforces)
//           ? data.codeforces
//           : [];

//         if (arr.length >= 1) setProfile(arr[0]);
//         if (arr.length >= 2) setRatings(arr[1].ratings || []);
//       } catch (err) {
//         console.error("Failed to fetch Codeforces data:", err);
//       }
//     };

//     fetchData();
//   }, [email]);

//   // Prepare data for recharts
//   const chartData = ratings.map(entry => ({
//     name: entry.contestName,
//     rating: entry.newRating,
//   }));

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold text-blue-600 mb-4 text-center">
//         Codeforces Profile
//       </h2>

//       {profile ? (
//         <div className="bg-white shadow-md p-6 rounded-lg max-w-md mx-auto space-y-2 text-sm text-black">
//           <img
//             src={profile.avatar}
//             alt="Avatar"
//             className="w-20 h-20 rounded-full mx-auto mb-4"
//           />
//           <p><strong>Handle:</strong> {profile.handle}</p>
//           <p><strong>Rating:</strong> {profile.rating}</p>
//           <p><strong>Rank:</strong> {profile.rank}</p>
//           <p><strong>Max Rating:</strong> {profile.maxRating}</p>
//           <p><strong>Max Rank:</strong> {profile.maxRank}</p>
//           <p><strong>Contribution:</strong> {profile.contribution}</p>
//           <p><strong>Friends:</strong> {profile.friendOfCount}</p>
//         </div>
//       ) : (
//         <p className="text-center">Loading profile...</p>
//       )}

//       {ratings.length > 0 && (
//         <div className="mt-10 max-w-4xl mx-auto">
//           <h3 className="text-xl font-semibold mb-4 text-center text-gray-700">
//             Rating History
//           </h3>
//           <ResponsiveContainer width="100%" height={300}>
//             <LineChart data={chartData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="name" interval={0} angle={-45} textAnchor="end" />
//               <YAxis />
//               <Tooltip />
//               <Line type="monotone" dataKey="rating" stroke="#8884d8" dot={true} />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Codeforces;







import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import { ArrowLeft } from 'lucide-react';

const Codeforces = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const [ratings, setRatings] = useState([]);
  const email = localStorage.getItem('userEmail');
  console.log(email);

  useEffect(() => {
    const fetchData = async () => {
      console.log("Codeforces – localStorage userEmail is:", email);
      if (!email) {
        console.warn("No email in localStorage, skipping Codeforces fetch");
        return;
      }

      try {
        const { data } = await axios.get(
          'http://localhost:5000/api/profile/codeforces',
          { params: { email } }
        );
        console.log("Raw CF response:", data);

        // Extract array whether top-level or under `codeforces`
        const arr = Array.isArray(data)
          ? data
          : Array.isArray(data.codeforces)
          ? data.codeforces
          : [];

        if (arr.length >= 1) setProfile(arr[0]);
        if (arr.length >= 2) setRatings(arr[1].ratings || []);
      } catch (err) {
        console.error("Failed to fetch Codeforces data:", err);
      }
    };

    fetchData();
  }, [email]);

  // Prepare data for recharts
  const chartData = ratings.map(entry => ({
    name: entry.contestName,
    rating: entry.newRating,
  }));

  return (
    <div className="p-6">
      {/* Back button arrow */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-blue-600 hover:text-blue-800 mb-4"
      >
        <ArrowLeft className="w-6 h-6 mr-1" />
        Back
      </button>

      <h2 className="text-2xl font-bold text-blue-600 mb-4 text-center">
        Codeforces Profile
      </h2>

      {profile ? (
        <div className="bg-white shadow-md p-6 rounded-lg max-w-md mx-auto space-y-2 text-sm text-black">
          <img
            src={profile.avatar}
            alt="Avatar"
            className="w-20 h-20 rounded-full mx-auto mb-4"
          />
          <p><strong>Handle:</strong> {profile.handle}</p>
          <p><strong>Rating:</strong> {profile.rating}</p>
          <p><strong>Rank:</strong> {profile.rank}</p>
          <p><strong>Max Rating:</strong> {profile.maxRating}</p>
          <p><strong>Max Rank:</strong> {profile.maxRank}</p>
          <p><strong>Contribution:</strong> {profile.contribution}</p>
          <p><strong>Friends:</strong> {profile.friendOfCount}</p>
        </div>
      ) : (
        <p className="text-center">Loading profile...</p>
      )}

      {ratings.length > 0 && (
        <div className="mt-10 max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold mb-4 text-center text-gray-700">
            Rating History
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" interval={0} angle={-45} textAnchor="end" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="rating" stroke="#8884d8" dot={true} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default Codeforces;
