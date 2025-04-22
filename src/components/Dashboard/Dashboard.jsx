// import React, { useState, useEffect } from "react";

// export default function IntegratedDashboard() {
//   const [userType, setUserType] = useState("normal");
//   const [quote, setQuote] = useState("");
//   const [blogs, setBlogs] = useState([]);

//   // Motivational Quotes
//   const quoteList = [
//     "You are stronger than you think.",
//     "This too shall pass.",
//     "Small steps every day lead to big changes.",
//   ];

//   useEffect(() => {
//     // Set random quote
//     const random = Math.floor(Math.random() * quoteList.length);
//     setQuote(quoteList[random]);

//     // Fetch blogs from News API
//     fetch(
//       `https://gnews.io/api/v4/search?q=mental%20health&lang=en&max=3&apikey=YOUR_GNEWS_API_KEY`
//     )
//       .then((res) => res.json())
//       .then((data) => setBlogs(data.articles || []))
//       .catch((err) => console.error("Blog fetch error:", err));
//   });

//   return (
//     <div style={styles.page}>
//       {/* User Type Filter */}
//       <div style={styles.filterBox}>
//         <label style={styles.label}>Select User Type:</label>
//         <select
//           value={userType}
//           onChange={(e) => setUserType(e.target.value)}
//           style={styles.select}
//         >
//           <option value="normal">Normal</option>
//           <option value="student">Student</option>
//           <option value="professional">Working Professional</option>
//         </select>
//       </div>

//       {/* Dashboard */}
//       <div style={styles.card}>
//         <h2 style={styles.heading}>📊 Dashboard Summary</h2>
//         <p>PHQ-9 Survey Taken | Mild Depression Detected</p>
//         <div style={styles.statusBox}>
//           <strong>Recommendation:</strong> Practice mindfulness 10 mins/day
//         </div>
//       </div>

//       {/* Scores */}
//       <div style={styles.card}>
//         <h3 style={styles.heading}>🎯 Mood Scores</h3>
//         <p>Anxiety: 3/6</p>
//         <div style={styles.progress}>
//           <div style={{ width: "50%" }} />
//         </div>
//         <p>Depression: 4/9</p>
//         <div style={styles.progress}>
//           <div style={{ width: "44%" }} />
//         </div>
//       </div>

//       {/* Quote */}
//       <div style={styles.card}>
//         <h3 style={styles.heading}>💬 Quote of the Day</h3>
//         <p style={{ fontStyle: "italic", color: "#555" }}>{quote}</p>
//       </div>

//       {/* Blog Preview */}
//       <div style={styles.card}>
//         <h3 style={styles.heading}>🧠 Latest Mental Health Blogs</h3>
//         {blogs.length > 0 ? (
//           blogs.map((blog, idx) => (
//             <div key={idx} style={styles.blog}>
//               <h4 style={{ margin: "4px 0" }}>{blog.title}</h4>
//               <p style={{ marginBottom: 4 }}>{blog.description}</p>
//               <a
//                 href={blog.url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 style={styles.linkBtn}
//               >
//                 Read More →
//               </a>
//             </div>
//           ))
//         ) : (
//           <p>Loading blogs...</p>
//         )}
//       </div>

//       {/* Therapy Game */}
//       <div style={styles.card}>
//         <h3 style={styles.heading}>🎮 Therapy Game</h3>
//         <div style={styles.iframeWrapper}>
//           <iframe
//             src="https://www.crazygames.com/embed/color-tunnel"
//             title="Therapy Game"
//             allowFullScreen
//             style={styles.iframe}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// // Pure CSS via JS styles
// const styles = {
//   page: {
//     padding: "20px",
//     fontFamily: "Segoe UI, sans-serif",
//     backgroundColor: "#f5f7fa",
//     color: "#333",
//   },
//   heading: {
//     fontSize: "20px",
//     marginBottom: "8px",
//     color: "#222",
//   },
//   filterBox: {
//     marginBottom: "20px",
//   },
//   label: {
//     fontWeight: "bold",
//     marginRight: "10px",
//   },
//   select: {
//     padding: "6px 10px",
//     fontSize: "16px",
//   },
//   card: {
//     backgroundColor: "#fff",
//     padding: "16px",
//     marginBottom: "24px",
//     borderRadius: "10px",
//     boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
//   },
//   statusBox: {
//     marginTop: "10px",
//     padding: "10px",
//     backgroundColor: "#fffae6",
//     borderRadius: "6px",
//     color: "#a67c00",
//   },
//   progress: {
//     width: "100%",
//     height: "10px",
//     backgroundColor: "#ddd",
//     borderRadius: "5px",
//     marginBottom: "10px",
//     overflow: "hidden",
//   },
//   blog: {
//     paddingBottom: "12px",
//     borderBottom: "1px solid #eee",
//     marginBottom: "12px",
//   },
//   linkBtn: {
//     padding: "6px 12px",
//     backgroundColor: "#007bff",
//     color: "#fff",
//     textDecoration: "none",
//     borderRadius: "4px",
//     display: "inline-block",
//   },
//   iframeWrapper: {
//     position: "relative",
//     paddingBottom: "56.25%",
//     height: 0,
//     overflow: "hidden",
//     borderRadius: "10px",
//   },
//   iframe: {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     width: "100%",
//     height: "100%",
//     border: "none",
//   },
// };

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
        <button style={styles.button}>📄 View Reports</button>
        <button style={styles.button}>🔁 Retake Survey</button>
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
