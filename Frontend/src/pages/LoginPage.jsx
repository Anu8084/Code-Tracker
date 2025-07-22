// 


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert('Please enter both email and password');
      return;
    }

    try {
      const res = await axios.post('https://code-tracker-1-fo9j.onrender.com/api/auth/login', {
        email,
        password,
      });
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('userEmail', email); // ✅ Store email for profile display
      navigate('/home');
    } catch (err) {
      console.error('Login failed:', err);
      alert('Invalid credentials');
    }
  };

  // const handleRegister = async () => {
  //   if (!email || !password) {
  //     alert('Please enter both email and password');
  //     return;
  //   }

  //   try {
  //     const res = await axios.post('http://localhost:5000/api/auth/register', {
  //       email,
  //       password,
  //     });
  //     alert('Account created successfully!');
  //     localStorage.setItem('token', res.data.token);
  //     localStorage.setItem('userEmail', email); // ✅ Store email for profile display
  //     navigate('/register');
  //   } catch (err) {
  //     console.error('Registration failed:', err);
  //     alert('Account creation failed. Try a different email.');
  //   }
  // };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-800 to-blue-600">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Login
        </h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800 transition duration-200 font-semibold mb-3"
        >
          Login
        </button>

        <button
          type="button"
          onClick={() => navigate('/register')}

          className="w-full bg-gray-200 text-blue-800 py-3 rounded-lg hover:bg-gray-300 transition duration-200 font-semibold"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
