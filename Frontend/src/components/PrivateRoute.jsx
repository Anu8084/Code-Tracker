// PrivateRoute.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  if (!token) {
    navigate('/login'); // Redirect to login page if not logged in
    return null; // Or a loading spinner
  }

  return children;
};

export default PrivateRoute;
