// src/components/Footer/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2024 ExamAssist. All rights reserved.</p>
        <div className="mt-4">
          <a href="#" className="text-white hover:underline mx-2">Privacy Policy</a>
          <a href="#" className="text-white hover:underline mx-2">Terms of Service</a>
          <a href="#" className="text-white hover:underline mx-2">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;