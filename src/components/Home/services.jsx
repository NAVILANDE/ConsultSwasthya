import React from "react";
import "./Services.css";

const services = [
  {
    title: "Interactive Blogs",
    subtitle: "📝 Expert-Curated Reads",
    description:
      "Dive into carefully written blogs that simplify stress science, self-awareness, and mindfulness. Updated weekly with fresh, expert content.",
  },
  {
    title: "Mindful Media",
    subtitle: "🎥 Visual Peace & Energy",
    description:
      "From ASMR and meditative visuals to calming animations and motivation talks—immerse yourself in content that soothes the mind and lifts the spirit.",
  },
  {
    title: "Therapeutic Games",
    subtitle: "🎮 Fun Meets Calm",
    description:
      "Enjoy simple games that relieve stress and train your brain for resilience. Engage in breathing games, mood puzzles, and memory boosters.",
  },
  {
    title: "AI Wellness Guide",
    subtitle: "🤖 Personalized Help",
    description:
      "Your smart mental wellness coach! Get AI-driven suggestions based on your mood, behavior, and survey results. Tailored just for you.",
  },
];

const Services = () => {
  return (
    <section className="services-section">
      <div className="services-header">
        <h2>Mental Wellness Services</h2>
        <p>
          Explore our science-backed, user-friendly tools crafted to boost your
          mental health.
        </p>
      </div>
      <div className="services-columns">
        {services.map((service, idx) => (
          <div className="service-card" key={idx}>
            <div className="icon">{service.subtitle}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <span className="read-more">Read More →</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
