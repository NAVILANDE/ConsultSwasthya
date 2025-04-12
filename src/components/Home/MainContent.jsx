import React from "react";
import { useNavigate } from "react-router-dom";
import "./Main.css";

const Main = () => {
  const navigate = useNavigate();

  const userTypes = [
    {
      title: "🧑 Normal User",
      desc: "Discover mental health resources tailored for everyday life.",
      route: "/survey/normal_user",
    },
    {
      title: "🎓 Student",
      desc: "Find stress management tips and academic wellness tools.",
      route: "/survey/student",
    },
    {
      title: "💼 Professional",
      desc: "Enhance work-life balance with expert mental health support.",
      route: "/survey/professional",
    },
  ];

  return (
    <div className="main-wrapper">
      {/* Hero Section */}
      <section className="hero-section text-center">
        <h1>
          Welcome to <span className="brand-name">ConsultSwasthya</span>
        </h1>
        <p>Your trusted platform for mental wellness and self-care guidance.</p>
        <p>
          At ConsultSwasthya, we combine expert insights with technology to
          provide a supportive space for mental well-being. Whether you're
          feeling stressed, overwhelmed, or simply want to improve your mental
          fitness, our platform offers calming content, personalized guidance,
          and interactive tools to help you feel better—every day.
        </p>
      </section>

      {/* Bubble Background Animation */}
      <div className="bubble-bg">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
      </div>

      {/* User Type Section */}
      <section className="user-section container text-center py-5">
        <h2 className="section-title mb-4">Choose Your Journey</h2>
        <div className="row justify-content-center g-4">
          {userTypes.map((user, index) => (
            <div className="col-sm-10 col-md-4" key={index}>
              <div className="user-card">
                <h3>{user.title}</h3>
                <p>{user.desc}</p>
                <button
                  className="btn btn-success"
                  onClick={() => navigate(user.route)}
                >
                  Start Survey
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Main;
