import React, { useState } from "react";
import axios from "axios";
import "./survey.css"; // Keep the same styling

const Survey2 = () => {
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
      <h2 className="survey-title">Depression Survey for Students</h2>

      <form onSubmit={handleSubmit}>
        <div className="question-block">
          <p className="question-text">
            1. How often do you feel overwhelmed with academic workload?
          </p>
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
            2. How do you usually cope with stress?
          </p>
          {["Exercise", "Music/Art", "Socializing", "Avoidance"].map(
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
            3. How frequently do you take breaks while studying?
          </p>
          {["Every hour", "Few times a day", "Rarely", "Never"].map(
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
            4. Do you have a strong support system?
          </p>
          {["Yes, family & friends", "Yes, peers", "Not really", "No"].map(
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
            5. Do you feel motivated in your studies?
          </p>
          {["Always", "Sometimes", "Rarely", "Never"].map((option, idx) => (
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

export default Survey2;
