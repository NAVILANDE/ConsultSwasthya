import { useNavigate } from 'react-router-dom';

import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function IntegratedDashboard() {
  const [quote, setQuote] = useState("");

  const quoteOfTheDay =
    "Every day may not be good… but there’s something good in every day. – Alice Morse Earle";

  useEffect(() => {
    setQuote(quoteOfTheDay);
  }, []);

  const moodData = [
    { name: "Mon", mood: 2 },
    { name: "Tue", mood: 3 },
    { name: "Wed", mood: 3 },
    { name: "Thu", mood: 4 },
    { name: "Fri", mood: 3 },
    { name: "Frz", mood: 4 },
  ];
  const navigate = useNavigate();

  const handleViewReports = () => {
    navigate('/services');
  };
  const nevigate = () => {
    navigate('/survey/normal_user');
  };

  return (
    <div style={styles.page}>
      <h2 style={styles.greeting}>Hi, Alex! 👋</h2>
      <p>Here’s a quick summary of your mental well-being journey today.</p>

      <div style={styles.alertBox}>
        ⚠️ <strong>Mild Depression Detected</strong>
        <br />
        Based on your PHQ-9 result. Explore personalized suggestions below.
      </div>

      <div style={styles.card}>
        <h3>🧠 ML Prediction Result</h3>
        <p>
          Our analysis suggests a <strong>moderate likelihood</strong> of
          needing professional support.
        </p>
        <div style={styles.progress}>
          <div style={{ ...styles.progressFill, width: "60%" }} />
        </div>
        <p>60%</p>
      </div>

      <div style={styles.card}>
        <h3>📋 Recommendations for You</h3>
        <ul>
          <li>Take a 30-minute walk today</li>
          <li>Practice 10 mins of mindfulness</li>
          <li>Talk to someone you trust</li>
          <li>Reach out to a professional if needed</li>
        </ul>
      </div>

      <div style={styles.card}>
        <h3>📈 Mood Level Chart</h3>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={moodData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis domain={[0, 5]} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="mood"
              stroke="#8884d8"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div style={styles.card}>
        <h3>🎯 Score Breakdown</h3>
        <p>Anxiety Score: 3 / 6</p>
        <p>Depression Score: 4 / 9</p>
      </div>

      <div style={styles.card}>
        <h3>🛠️ Tools to Help You</h3>
        <ul>
          <li>⭐ Play Therapy Game</li>
          <li>❤️ Daily Affirmation</li>
          <li>😊 Mood Journal</li>
          <li>📘 Explore Blogs</li>
        </ul>
      </div>

      <div style={styles.quoteBox}>
        <p style={{ fontStyle: "italic", color: "#222" }}>{quote}</p>
      </div>

      <div style={styles.actions}>
      <button style={styles.button} onClick={handleViewReports}>
        📄 View Reports
      </button>
        <button style={styles.button} onClick={nevigate}>🔁 Retake Survey</button>
      </div>
    </div>
  );
}

const styles = {
  page: {
    fontFamily: "Segoe UI, sans-serif",
    padding: "20px",
    backgroundColor: "#f9fbfd",
    color: "#333",
  },
  greeting: {
    marginBottom: "8px",
  },
  alertBox: {
    backgroundColor: "#fff3cd",
    padding: "12px",
    borderRadius: "6px",
    color: "#856404",
    marginBottom: "20px",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "16px",
    marginBottom: "20px",
    borderRadius: "10px",
    boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
  },
  progress: {
    width: "100%",
    backgroundColor: "#e9ecef",
    borderRadius: "6px",
    overflow: "hidden",
    height: "10px",
    marginBottom: "8px",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#28a745",
  },
  quoteBox: {
    backgroundColor: "#dbeafe",
    padding: "16px",
    borderRadius: "8px",
    marginBottom: "20px",
  },
  actions: {
    display: "flex",
    gap: "12px",
  },
  button: {
    padding: "10px 16px",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};
