

import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import PrivateRoute from './components/PrivateRoute';
import Footer from './components/Footer';
import Header from './components/Header';
import RegisterPage from './pages/Registerpage'; 
import CodingProfile from './pages/CodingProfile';
// import Codechef from './pages/Codechef';
import Navbar from './components/Navbar';
import Setting from './pages/Setting';
import Profile from './pages/Profile'
// import { Setting } from 'lucide-react';
import Codechef from './pages/Codechef';
import Leetcode from './pages/Leetcode';
import Codeforces from './pages/Codeforces';
import ContestCards from './pages/ContestCards';
import CodeChefContests from './pages/CodechefContests';
import CodeforcesContest from './pages/CodeforcesContest';

const App = () => {
  return (
    <>
      <Header />  {/* Renders on every page */}
      <Navbar/>

      <main className="min-h-screen">  {/* optional: keeps layout neat */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile" element={<CodingProfile />} />
          <Route path="/codechef" element={<Codechef/>}/>
          <Route path="/profile-form" element={<Setting/>}/>
          <Route path="/fetch"element={<Profile/>}/>
          <Route path="/codechef" element={<Codechef/>}/>
          <Route path="/codeforces" element={<Codeforces/>}/>
          <Route path="/leetcode" element={<Leetcode/>}/>
          <Route path="contest" element={<ContestCards/>}/>
          <Route path="codechef-contest" element={<CodeChefContests/>}/>
          <Route path="codeforces-contest"element={<CodeforcesContest/>}/>




          

          <Route
            path="/home"
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />

          <Route path="*" element={<div className="text-center p-4">404 - Page Not Found</div>} />
        </Routes>
      </main>

      <Footer />  {/* Renders on every page */}
    </>
  );
};

export default App;
