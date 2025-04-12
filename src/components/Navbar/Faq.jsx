import React, { useState } from "react";
import "./Faq.css";

const faqs = [
  {
    question: "How do I register as a professional?",
    answer:
      "To register, go to the signup page, provide your credentials, and complete the verification process.",
  },
  {
    question: "How do I receive payments?",
    answer:
      "You can receive payments via PayPal or direct bank transfer after completing the verification process.",
  },
  {
    question: "Can I update my profile details?",
    answer:
      "Yes, you can update your profile details, including certifications and specializations, in your dashboard.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span className="toggle-icon">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            <div className={`faq-answer ${openIndex === index ? "open" : ""}`}>
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
