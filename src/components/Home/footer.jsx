// Footer.jsx
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer text-center py-4">
      <div>
        <img
          src="/images/major_logo.jpg"
          alt="ConsultSwasthya Logo"
          width="100"
        />
        <h2 className="text-xl font-semibold mt-2">ConsultSwasthya</h2>
      </div>
      <div className="footer-links">
        <a href="#">Our Story</a>
        <a href="#">Careers</a>
        <a href="#">GitHub</a>
        <a href="#">Discord</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms & Conditions</a>
      </div>
      <p className="text-sm mt-3">
        &copy; 2025 ConsultSwasthya™. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
