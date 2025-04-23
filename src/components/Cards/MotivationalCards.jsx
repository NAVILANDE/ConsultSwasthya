import React, { useState } from 'react';

const cardsData = Array.from({ length: 30 }, (_, i) => ({
  title: `Motivational Video ${i + 1}`,
  description: [
    "Unlock your inner drive to achieve greatness.",
    "Push through your limits and break barriers.",
    "Take charge of your destiny with courage.",
    "Fuel your ambition with daily inspiration.",
    "Every setback is a setup for a comeback.",
    "Believe in yourself when no one else does.",
    "Rise above doubt and reach your potential.",
    "Success starts with the right mindset.",
    "Get motivated to take the next big step.",
    "Turn your vision into unstoppable action.",
    "Master your habits, master your life.",
    "Embrace the grind, the glory will follow.",
    "You are capable of more than you know.",
    "Focus, fight, and forge your path.",
    "Confidence is built through discipline.",
    "Redefine failure and keep moving forward.",
    "Energy flows where attention goes.",
    "Greatness requires consistent effort.",
    "Find purpose in your daily actions.",
    "Inspiration is the spark of change.",
    "Face fears head-on and conquer them.",
    "Visualize success, then chase it.",
    "Stay hungry, stay passionate.",
    "Let your hustle make the noise.",
    "Clarity leads to confidence.",
    "Use adversity as your advantage.",
    "Discipline is your strongest ally.",
    "Be bold enough to dream big.",
    "Motivation begins with a decision.",
    "Start strong, finish stronger."
  ][i],
  image: `/video_images/${i + 1}.png`,
}));  

const MotivationalCards = () => {
  const [viewAll, setViewAll] = useState(false);

  const visibleCards = viewAll ? cardsData : cardsData.slice(0, 6);

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Motivational Videos</h1>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {visibleCards.map((card, index) => (
          <div className="col" key={index}>
            <div className="card h-100">
              <img src={card.image} className="card-img-top" alt={card.title} />
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.description}</p>
                <a href="#" className="btn btn-primary">View</a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {!viewAll && (
        <div className="text-center mt-4">
          <button className="btn btn-outline-primary" onClick={() => setViewAll(true)}>
            View All
          </button>
        </div>
      )}
    </div>
  );
};

export default MotivationalCards;
