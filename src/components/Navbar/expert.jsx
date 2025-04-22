import React, { useState } from "react";
import { motion } from "framer-motion";

const experts = [
  {
    name: "Dr. Liam Patel",
    specialty: "Psychiatry",
    description:
      "Specializes in medication management and holistic mental health approaches",
    image: "https://via.placeholder.com/300x400?text=Dr.+Liam+Patel",
    details:
      "Dr. Liam focuses on personalized treatment plans that combine therapy and medication. He has 10+ years experience working with adults and teens.",
  },
  {
    name: "Dr. James Taylor",
    specialty: "Family Therapy",
    description:
      "Expert in guiding families through emotional challenges and improving relationships",
    image: "https://via.placeholder.com/300x400?text=Dr.+James+Taylor",
    details:
      "Dr. Taylor helps families build stronger bonds and communication using effective family-centered approaches.",
  },
  {
    name: "Dr. Emily Nguyen",
    specialty: "Clinical Psychology",
    description:
      "Works with individuals to manage anxiety, depression, and behavioral issues",
    image: "https://via.placeholder.com/300x400?text=Dr.+Emily+Nguyen",
    details:
      "Dr. Nguyen uses evidence-based practices like CBT and DBT to treat mood disorders and trauma.",
  },
  {
    name: "Dr. Sarah Singh",
    specialty: "Cognitive Behavioral Therapy",
    description:
      "Helps individuals identify and change destructive thought patterns",
    image: "https://via.placeholder.com/300x400?text=Dr.+Sarah+Singh",
    details:
      "Certified CBT expert with deep focus on anxiety, stress, and burnout recovery.",
  },
  {
    name: "Dr. Ethan Clark",
    specialty: "Child Psychology",
    description: "Supports children with developmental and emotional concerns",
    image: "https://via.placeholder.com/300x400?text=Dr.+Ethan+Clark",
    details:
      "Dr. Clark specializes in play therapy and developmental assessments for children.",
  },
  {
    name: "Dr. Aisha Mehta",
    specialty: "Stress Management",
    description:
      "Guides clients to achieve mental clarity and resilience through therapy",
    image: "https://via.placeholder.com/300x400?text=Dr.+Aisha+Mehta",
    details:
      "Uses mindfulness and relaxation strategies for reducing daily stress and anxiety.",
  },
];

const ExpertCard = ({ expert, onClick }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="expert-card"
    onClick={onClick}
  >
    <img src={expert.image} alt={expert.name} className="expert-image" />
    <div className="expert-info">
      <h3 className="expert-name">{expert.name}</h3>
      <p className="expert-specialty">{expert.specialty}</p>
      <p className="expert-description">{expert.description}</p>
    </div>
  </motion.div>
);

const ExpertModal = ({ expert, onClose }) => {
  if (!expert) return null;
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose} className="close-button">
          &times;
        </button>
        <img src={expert.image} alt={expert.name} className="modal-image" />
        <h2 className="modal-name">{expert.name}</h2>
        <p className="modal-specialty">{expert.specialty}</p>
        <p className="modal-details">{expert.details}</p>
      </div>
    </div>
  );
};

const ExpertTeam = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedExpert, setSelectedExpert] = useState(null);

  const visibleExperts = showAll ? experts : experts.slice(0, 3);

  return (
    <div className="expert-team-container" id="expert-team">
      <h1 className="team-heading">Meet Our Dedicated Mental Health Experts</h1>

      <div className="card-wrapper">
        {visibleExperts.map((expert, index) => (
          <ExpertCard
            key={index}
            expert={expert}
            onClick={() => setSelectedExpert(expert)}
          />
        ))}
      </div>

      {!showAll && (
        <div className="view-all-container">
          <button onClick={() => setShowAll(true)} className="view-all-button">
            View All
          </button>
        </div>
      )}

      <ExpertModal
        expert={selectedExpert}
        onClose={() => setSelectedExpert(null)}
      />

      {/* CSS Styling */}
      <style>{`
        .expert-team-container {
          min-height: 100vh;
          background: linear-gradient(to bottom right, #ebf8ff, #c3dafe);
          padding: 60px 20px;
          color: #1a202c;
          text-align: center;
        }

        .team-heading {
          font-size: 2rem;
          font-weight: 800;
          margin-bottom: 40px;
          color: #2c5282;
        }

        .card-wrapper {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
        }

        .expert-card {
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          width: 280px;
          cursor: pointer;
          overflow: hidden;
          transition: transform 0.3s ease;
        }

        .expert-card:hover {
          transform: scale(1.05);
        }

        .expert-image {
          width: 100%;
          height: 250px;
          object-fit: cover;
        }

        .expert-info {
          padding: 15px;
          text-align: left;
        }

        .expert-name {
          font-size: 1.1rem;
          font-weight: bold;
        }

        .expert-specialty {
          color: #2b6cb0;
          font-weight: 600;
          font-size: 0.9rem;
          margin-top: 4px;
        }

        .expert-description {
          font-size: 0.85rem;
          color: #4a5568;
          margin-top: 8px;
        }

        .view-all-container {
          margin-top: 20px;
        }

        .view-all-button {
          background-color: #2b6cb0;
          color: white;
          padding: 10px 20px;
          border-radius: 999px;
          border: none;
          font-weight: bold;
          cursor: pointer;
        }

        .view-all-button:hover {
          background-color: #2c5282;
        }

        .modal-overlay {
          position: fixed;
          inset: 0;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .modal-content {
          background: white;
          padding: 24px;
          border-radius: 10px;
          max-width: 500px;
          width: 90%;
          position: relative;
          text-align: left;
        }

        .close-button {
          position: absolute;
          top: 10px;
          right: 16px;
          font-size: 24px;
          font-weight: bold;
          background: none;
          border: none;
          cursor: pointer;
        }

        .modal-image {
          width: 100%;
          height: 250px;
          object-fit: cover;
          border-radius: 8px;
          margin-bottom: 16px;
        }

        .modal-name {
          font-size: 1.3rem;
          font-weight: bold;
          margin-bottom: 6px;
        }

        .modal-specialty {
          font-weight: bold;
          color: #2b6cb0;
          margin-bottom: 10px;
        }

        .modal-details {
          color: #4a5568;
          font-size: 0.95rem;
        }

        @media screen and (max-width: 600px) {
          .expert-card {
            width: 90%;
          }
        }
      `}</style>
    </div>
  );
};

export default ExpertTeam;
