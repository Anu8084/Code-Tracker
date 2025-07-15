// // 


// import React, { useState, useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Header = () => {
//   const navigate = useNavigate();
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   const email = localStorage.getItem('userEmail');
//   const initial = email ? email.charAt(0).toUpperCase() : '?';

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('userEmail');
//     navigate('/login');
//   };

//   // Close dropdown if clicked outside
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//         setDropdownOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   return (
//     <header className="bg-gray-900 text-white shadow-md">
//       <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//         <h1 className="text-2xl font-bold">CodeTracker</h1>

//         {localStorage.getItem('token') ? (
//           <div className="relative" ref={dropdownRef}>
//             <div
//               className="w-10 h-10 rounded-full bg-yellow-400 text-gray-900 flex items-center justify-center text-lg font-bold cursor-pointer"
//               onClick={() => setDropdownOpen(!dropdownOpen)}
//             >
//               {initial}
//             </div>

//             {dropdownOpen && (
//               <div className="absolute right-0 mt-2 w-44 bg-white rounded-md shadow-lg z-50">
//                 <ul className="py-2 text-sm text-gray-800">
//                   <li
//                     className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                     onClick={() => navigate('/fetch')}
//                   >
//                     Profile
//                   </li>
//                   <li
//                     className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                     onClick={() => navigate('/profile')}
//                   >
//                     Dashboard
//                   </li>
//                   <li
//                     className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                     onClick={() => navigate('/profile-form')}
//                   >
//                     Settings
//                   </li>
//                   <li
//                     className="px-4 py-2 text-red-600 hover:bg-gray-100 cursor-pointer"
//                     onClick={handleLogout}
//                   >
//                     Logout
//                   </li>
//                 </ul>
//               </div>
//             )}
//           </div>
//         ) : (
//           <button
//             onClick={() => navigate('/login')}
//             className="text-white hover:text-yellow-400"
//           >
//             Login
//           </button>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;



import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const email = localStorage.getItem('userEmail');
  const initial = email ? email.charAt(0).toUpperCase() : '?';

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userEmail');
    navigate('/login');
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">CodeTracker</h1>

        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate('/contest')}
            className="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Contest Calendar
          </button>

          {localStorage.getItem('token') ? (
            <div className="relative" ref={dropdownRef}>
              <div
                className="w-10 h-10 rounded-full bg-yellow-400 text-gray-900 flex items-center justify-center text-lg font-bold cursor-pointer"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                {initial}
              </div>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-white rounded-md shadow-lg z-50">
                  <ul className="py-2 text-sm text-gray-800">
                    <li
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => navigate('/fetch')}
                    >
                      Profile
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => navigate('/profile')}
                    >
                      Dashboard
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => navigate('/profile-form')}
                    >
                      Settings
                    </li>
                    <li
                      className="px-4 py-2 text-red-600 hover:bg-gray-100 cursor-pointer"
                      onClick={handleLogout}
                    >
                      Logout
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => navigate('/login')}
              className="text-white hover:text-yellow-400"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;



