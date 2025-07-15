// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-6 mt-10">
      <p className="text-lg font-semibold">Code • Tracker</p>
      <p className="text-sm mt-2 text-gray-400">© {new Date().getFullYear()} All rights reserved</p>
    </footer>
  );
};

export default Footer;
