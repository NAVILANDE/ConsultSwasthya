import React, { useState } from "react";
import "./ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (

    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>Have questions? We'd love to hear from you.</p>

      <div className="contact-content">
        <form onSubmit={handleSubmit} className="contact-form">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <h3>Our Office</h3>
          <p>123 Street, City, Country</p>
          <p>Email: support@example.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
