

// import { Routes, Route } from 'react-router-dom';
// import HomePage from './pages/HomePage';
// import LoginPage from './pages/LoginPage';
// import PrivateRoute from './components/PrivateRoute';
// import Footer from './components/Footer';
// import Header from './components/Header';
// import RegisterPage from './pages/Registerpage'; 
// import CodingProfile from './pages/CodingProfile';
// // import Codechef from './pages/Codechef';
// import Navbar from './components/Navbar';
// import Setting from './pages/Setting';
// import Profile from './pages/Profile'
// // import { Setting } from 'lucide-react';
// import Codechef from './pages/Codechef';
// import Leetcode from './pages/Leetcode';
// import Codeforces from './pages/Codeforces';
// import ContestCards from './pages/ContestCards';
// import CodeChefContests from './pages/CodechefContests';
// import CodeforcesContest from './pages/CodeforcesContest';

// const App = () => {
//   return (
//     <>
//       <Header />  {/* Renders on every page */}
//       <Navbar/>

//       <main className="min-h-screen">  {/* optional: keeps layout neat */}
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/register" element={<RegisterPage />} />
//           <Route path="/profile" element={<CodingProfile />} />
//           <Route path="/codechef" element={<Codechef/>}/>
//           <Route path="/profile-form" element={<Setting/>}/>
//           <Route path="/fetch"element={<Profile/>}/>
//           <Route path="/codechef" element={<Codechef/>}/>
//           <Route path="/codeforces" element={<Codeforces/>}/>
//           <Route path="/leetcode" element={<Leetcode/>}/>
//           <Route path="contest" element={<ContestCards/>}/>
//           <Route path="codechef-contest" element={<CodeChefContests/>}/>
//           <Route path="codeforces-contest"element={<CodeforcesContest/>}/>




          

//           <Route
//             path="/home"
//             element={
//               <PrivateRoute>
//                 <HomePage />
//               </PrivateRoute>
//             }
//           />

//           <Route path="*" element={<div className="text-center p-4">404 - Page Not Found</div>} />
//         </Routes>
//       </main>

//       <Footer />  {/* Renders on every page */}
//     </>
//   );
// };

// export default App;








import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import PrivateRoute from './components/PrivateRoute';
import Footer from './components/Footer';
import Header from './components/Header';
import RegisterPage from './pages/Registerpage';
import CodingProfile from './pages/CodingProfile';
import Navbar from './components/Navbar';
import Setting from './pages/Setting';
import Profile from './pages/Profile';
import Codechef from './pages/Codechef';
import Leetcode from './pages/Leetcode';
import Codeforces from './pages/Codeforces';
import ContestCards from './pages/ContestCards';
import CodeChefContests from './pages/CodechefContests';
import CodeforcesContest from './pages/CodeforcesContest';

const App = () => {
  return (
    <>
      <Header />
      <Navbar />

      <main className="min-h-screen">
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* Protected Routes */}
          <Route
            path="/"
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <CodingProfile />
              </PrivateRoute>
            }
          />
          <Route
            path="/codechef"
            element={
              <PrivateRoute>
                <Codechef />
              </PrivateRoute>
            }
          />
          <Route
            path="/codeforces"
            element={
              <PrivateRoute>
                <Codeforces />
              </PrivateRoute>
            }
          />
          <Route
            path="/leetcode"
            element={
              <PrivateRoute>
                <Leetcode />
              </PrivateRoute>
            }
          />
          <Route
            path="/contest"
            element={
              <PrivateRoute>
                <ContestCards />
              </PrivateRoute>
            }
          />
          <Route
            path="/codechef-contest"
            element={
              <PrivateRoute>
                <CodeChefContests />
              </PrivateRoute>
            }
          />
          <Route
            path="/codeforces-contest"
            element={
              <PrivateRoute>
                <CodeforcesContest />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile-form"
            element={
              <PrivateRoute>
                <Setting />
              </PrivateRoute>
            }
          />
          <Route
            path="/fetch"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />

          {/* Catch-all Route */}
          <Route
            path="*"
            element={
              <div className="text-center p-4">404 - Page Not Found</div>
            }
          />
        </Routes>
      </main>

      <Footer />
    </>
  );
};

export default App;
