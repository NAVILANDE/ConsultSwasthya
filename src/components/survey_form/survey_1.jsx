import React, { useState } from "react";
import axios from "axios";
import "./survey.css"; // 👈 Import here

const Survey1 = () => {
  const [formData, setFormData] = useState({
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
  });
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/predict",
        formData
      );
      setResult(response.data.depression);
    } catch (error) {
      console.error("Error submitting survey", error);
    }
  };

  return (
    <div className="survey-container">
      <h2 className="survey-title">Depression Survey for Normal Users</h2>

      <form onSubmit={handleSubmit}>
        <div className="question-block">
          <p className="question-text">1. How often do you feel sad or down?</p>
          {["Never", "Rarely", "Sometimes", "Often"].map((option, idx) => (
            <label key={idx} className="option">
              <input
                type="radio"
                name="q1"
                value={option}
                onChange={handleChange}
                required
              />
              {option}
            </label>
          ))}
        </div>

        <div className="question-block">
          <p className="question-text">
            2. How many hours of sleep do you get daily?
          </p>
          {["Less than 4", "4-6 hours", "6-8 hours", "More than 8"].map(
            (option, idx) => (
              <label key={idx} className="option">
                <input
                  type="radio"
                  name="q2"
                  value={option}
                  onChange={handleChange}
                  required
                />
                {option}
              </label>
            )
          )}
        </div>

        <div className="question-block">
          <p className="question-text">
            3. How stressed do you feel on an average day?
          </p>
          {["Not at all", "Mildly", "Moderately", "Very stressed"].map(
            (option, idx) => (
              <label key={idx} className="option">
                <input
                  type="radio"
                  name="q3"
                  value={option}
                  onChange={handleChange}
                  required
                />
                {option}
              </label>
            )
          )}
        </div>

        <div className="question-block">
          <p className="question-text">
            4. How frequently do you socialize with others?
          </p>
          {["Daily", "Few times a week", "Occasionally", "Rarely/Never"].map(
            (option, idx) => (
              <label key={idx} className="option">
                <input
                  type="radio"
                  name="q4"
                  value={option}
                  onChange={handleChange}
                  required
                />
                {option}
              </label>
            )
          )}
        </div>

        <div className="question-block">
          <p className="question-text">
            5. What is your current mood most of the time?
          </p>
          {["Happy", "Neutral", "Sad", "Irritated"].map((option, idx) => (
            <label key={idx} className="option">
              <input
                type="radio"
                name="q5"
                value={option}
                onChange={handleChange}
                required
              />
              {option}
            </label>
          ))}
        </div>

        <button type="submit" className="submit-btn">
          Submit Survey
        </button>
      </form>

      {result && (
        <div className="result-message">
          Predicted Depression Status: {result}
        </div>
      )}
    </div>
  );
};

export default Survey1;
