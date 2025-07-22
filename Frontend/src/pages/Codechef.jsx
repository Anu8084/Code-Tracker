// // 


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Line } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   LineElement,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   Tooltip,
//   Legend
// } from 'chart.js';

// ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

// const Codechef = () => {
//   const [data, setData] = useState(null);
//   const email = localStorage.getItem('userEmail');

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axios.get(`http://localhost:5000/api/profile/codechef?email=${email}`);
//         if (res.data?.codechef) {
//           setData(res.data.codechef);
//         }
//       } catch (err) {
//         console.error('CodeChef Error:', err);
//       }
//     };
//     fetchData();
//   }, [email]);

//   if (!data) {
//     return <p className="text-center mt-10 text-gray-500">Loading CodeChef Profile...</p>;
//   }

//   // Prepare graph data
//   const ratingData = data.ratingData || [];
//   const labels = ratingData.map(item => item.name);
//   const ratings = ratingData.map(item => parseInt(item.rating));

//   const chartData = {
//     labels,
//     datasets: [
//       {
//         label: 'CodeChef Rating',
//         data: ratings,
//         borderColor: '#7c3aed',
//         backgroundColor: '#ddd6fe',
//         tension: 0.3,
//         fill: true,
//         pointRadius: 3,
//         pointBackgroundColor: '#7c3aed',
//       }
//     ]
//   };

//   const chartOptions = {
//     responsive: true,
//     plugins: {
//       legend: { display: true, position: 'top' },
//       tooltip: { enabled: true },
//     },
//     scales: {
//       y: {
//         beginAtZero: false,
//         ticks: { stepSize: 100 },
//         grid: { color: '#f3f4f6' }
//       },
//       x: {
//         ticks: { display: false }, // hide labels if too crowded
//         grid: { display: false }
//       }
//     }
//   };

//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <h2 className="text-3xl font-bold text-purple-700 mb-6 text-center">CodeChef Profile</h2>

//       <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row items-center gap-6">
//         <img
//           src={data.profile}
//           alt="Profile"
//           className="w-24 h-24 rounded-full border-4 border-purple-500"
//         />
//         <div className="text-sm space-y-1">
//           <p><strong>Name:</strong> {data.name}</p>
//           <p><strong>Current Rating:</strong> {data.currentRating}</p>
//           <p><strong>Highest Rating:</strong> {data.highestRating}</p>
//           <p><strong>Stars:</strong> {data.stars}</p>
//           <p><strong>Country Rank:</strong> {data.countryRank}</p>
//           <p><strong>Global Rank:</strong> {data.globalRank}</p>
//           <p className="flex items-center gap-2">
//             <strong>Country:</strong> {data.countryName}
//             <img src={data.countryFlag} alt="flag" className="w-5 h-5" />
//           </p>
//         </div>
//       </div>

//       <div className="mt-10 bg-white shadow-md rounded-lg p-6">
//         <h3 className="text-xl font-semibold mb-4 text-purple-600">Rating History</h3>
//         {ratings.length > 0 ? (
//           <Line data={chartData} options={chartOptions} />
//         ) : (
//           <p className="text-gray-500">No rating history found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Codechef;





import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
} from 'chart.js';
import { ArrowLeft } from 'lucide-react';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const Codechef = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const email = localStorage.getItem('userEmail');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          'https://code-tracker-1-fo9j.onrender.com/api/profile/codechef',
          { params: { email } }
        );
        if (res.data?.codechef) {
          setData(res.data.codechef);
        }
      } catch (err) {
        console.error('CodeChef Error:', err);
      }
    };
    fetchData();
  }, [email]);

  if (!data) {
    return <p className="text-center mt-10 text-gray-500">Loading CodeChef Profile...</p>;
  }

  // Prepare graph data
  const ratingData = data.ratingData || [];
  const labels = ratingData.map(item => item.name);
  const ratings = ratingData.map(item => parseInt(item.rating, 10));

  const chartData = {
    labels,
    datasets: [
      {
        label: 'CodeChef Rating',
        data: ratings,
        borderColor: '#7c3aed',
        backgroundColor: '#ddd6fe',
        tension: 0.3,
        fill: true,
        pointRadius: 3,
        pointBackgroundColor: '#7c3aed',
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: true, position: 'top' },
      tooltip: { enabled: true },
    },
    scales: {
      y: {
        beginAtZero: false,
        ticks: { stepSize: 100 },
        grid: { color: '#f3f4f6' }
      },
      x: {
        ticks: { display: false },
        grid: { display: false }
      }
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Back button arrow */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-purple-700 hover:text-purple-900 mb-4"
      >
        <ArrowLeft className="w-6 h-6 mr-2" />
        Back
      </button>

      <h2 className="text-3xl font-bold text-purple-700 mb-6 text-center">CodeChef Profile</h2>

      <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row items-center gap-6">
        <img
          src={data.profile}
          alt="Profile"
          className="w-24 h-24 rounded-full border-4 border-purple-500"
        />
        <div className="text-sm space-y-1">
          <p><strong>Name:</strong> {data.name}</p>
          <p><strong>Current Rating:</strong> {data.currentRating}</p>
          <p><strong>Highest Rating:</strong> {data.highestRating}</p>
          <p><strong>Stars:</strong> {data.stars}</p>
          <p><strong>Country Rank:</strong> {data.countryRank}</p>
          <p><strong>Global Rank:</strong> {data.globalRank}</p>
          <p className="flex items-center gap-2">
            <strong>Country:</strong> {data.countryName}
            <img src={data.countryFlag} alt="flag" className="w-5 h-5" />
          </p>
        </div>
      </div>

      <div className="mt-10 bg-white shadow-md rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4 text-purple-600">Rating History</h3>
        {ratings.length > 0 ? (
          <Line data={chartData} options={chartOptions} />
        ) : (
          <p className="text-gray-500">No rating history found.</p>
        )}
      </div>
    </div>
  );
};

export default Codechef;
