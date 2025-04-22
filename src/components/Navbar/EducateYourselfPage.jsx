import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./EducateYourselfPage.css";

const EducateYourselfPage = () => {
  return (
    <div className="educate-page">
      <section className="statistics-section py-5 text-white">
        <div className="container">
          <h2 className="text-center mb-5">Mental Health Facts</h2>
          <div className="row g-4">
            {[
              "Mental health refers to cognitive, behavioral, and emotional well-being.",
              "Conditions such as stress, depression, and anxiety can affect one's mental health.",
              "We must help promote the mental well-being of individuals and support those with mental disorders.",
              "Around 1 in 5 children and adolescents have a mental disorder.",
              "264 million people globally are affected by depression.",
              "Half of mental health disorders begin before age fourteen.",
              "Every 40 seconds, one person dies from suicide.",
              "People with severe mental disorders die 10-20 years earlier than the general population.",
              "Mental health workers are under 0.00002% in low-income countries.",
              "The global economy loses $1 trillion annually due to depression and anxiety.",
              "Over 40% of countries have no mental health policy.",
              "Up to 60% of people with depression can recover with proper treatment.",
              "One billion people globally suffer from a mental or substance-use disorder.",
              "Mental health issues are more prevalent among women and the poor.",
              "Nine out of ten people say stigma negatively affects their lives.",
            ].map((fact, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div className="fact-card p-3 rounded shadow-sm h-100 bg-dark-blue">
                  <i className="bi bi-info-circle-fill me-2"></i>
                  <span>{fact}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="stories-section py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Listen to Their Stories</h2>
          <div className="row g-4">
            {[
              {
                quote: "I felt disgusted every time I looked in the mirror...",
                name: "Sarah, age 24.",
              },
              {
                quote:
                  "I didn't know who would be there for me if I told them what I was going through...",
                name: "Barry, age 37.",
              },
              {
                quote:
                  "I felt guilty when I struggled with these things and felt like everyone else was better at coping...",
                name: "Hazel, age 24.",
              },
              {
                quote:
                  "Standing up and saying you deserve better is the first step to helping yourself.",
                name: "Michael, age 25.",
              },
            ].map((story, index) => (
              <div className="col-md-6" key={index}>
                <div className="quote-card p-4 bg-white rounded shadow">
                  <p className="fst-italic">“{story.quote}”</p>
                  <span className="fw-bold d-block mt-2">- {story.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="call-to-action-section py-5 text-white">
        <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between">
          <div className="cta-text">
            <h2>What can you do now?</h2>
            <a href="help-yourself.html" className="cta-link">
              Protect your mental health
            </a>
            <a href="help-others.html" className="cta-link">
              Help others with their mental health
            </a>
          </div>
          <div className="cta-buttons mt-4 mt-md-0">
            <a href="sign-up.html" className="btn btn-primary btn-lg me-3">
              Get Started
            </a>
            <a
              href="spread-the-word.html"
              className="btn btn-outline-light btn-lg"
            >
              Spread Awareness
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EducateYourselfPage;
