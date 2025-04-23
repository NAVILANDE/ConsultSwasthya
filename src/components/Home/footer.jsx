// Footer.jsx
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    // <footer className="footer text-center py-4">
    //   <div>
    //     <img
    //       src="/images/major_logo.jpg"
    //       alt="ConsultSwasthya Logo"
    //       width="100"
    //     />
    //     <h2 className="text-xl font-semibold mt-2">ConsultSwasthya</h2>
    //   </div>
    //   <div className="footer-links">
    //     <a href="#">Our Story</a>
    //     <a href="#">Careers</a>
    //     <a href="#">GitHub</a>
    //     <a href="#">Discord</a>
    //     <a href="#">Privacy Policy</a>
    //     <a href="#">Terms & Conditions</a>
    //   </div>
    //   <p className="text-sm mt-3">
    //     &copy; 2025 ConsultSwasthya™. All rights reserved.
    //   </p>
    // </footer>
    <div className="new">
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section brand">
            <img
              src="/images/major_logo.jpg"
              alt="Mindra Logo"
              className="logo"
            />
             <p>
            At Serenity Space, we are dedicated to supporting your mental health
            journey.
          </p>
          </div>

          <div className="footer-section">
            <h3>Useful Links</h3>
            <ul>
              <li>» Home</li>
              <li>» About</li>
              <li>» Services</li>
              <li>» Doctors</li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Navigation</h3>
            <ul>
              <li>» Blog</li>
              <li>» Contact</li>
              <li>» 404 page</li>
              <li>» Doctor Details</li>
            </ul>
          </div>

          <div className="footer-section contact">
            <h3>Contact Info</h3>
            <ul>
              <li>📞 +88-123-4567</li>
              <li>📧 support@gmail.com</li>
              <li>📍 Serenity Space, Suite 101</li>
              <li>⏰ Monday - Friday: 9 AM - 6 PM</li>
            </ul>
          </div>
          
        </div>
        <div className="footer-bottom">
          <div className="bottom-left">
            <a href="#">Privacy Policy</a> •<a href="#">Terms & Conditions</a>
          </div>
          <div className="bottom-right">
            <span>Follow Us</span>
            <a href="#" className="social-icon white">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#" className="social-icon white">
              <i className="bi bi-twitter-x"></i>
            </a>
            <a href="#" className="social-icon white">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="#" className="social-icon white">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
          
        </div>
       

        <div className="copyright">© 2024 Mindra. All rights reserved.</div>
      </footer>
    </div>
  );
};

export default Footer;
