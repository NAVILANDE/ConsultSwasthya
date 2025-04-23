

import React from "react";
import "./ContactSection.css";

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        
        {/* Right - Form */}
        <div className="contact-form">
          <h2>Get in Touch with Us</h2>
          <p>We're here to help you on your mental wellness journey.</p>
          <form>
            <div className="form-group">
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email" required />
            </div>
            <div className="form-group">
              <input type="tel" placeholder="Phone Number" required />
              <input type="text" placeholder="Company Name (Optional)" />
            </div>
            <textarea placeholder="Your Message" rows="4" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
