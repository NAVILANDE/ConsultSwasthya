import React from "react";

export default function TherapyGame() {
  return (
    <div className="game-container">
      <h2 className="game-heading">🎮 Relaxing Game</h2>
      <p className="game-desc">
        Take a short break and enjoy this calming game.
      </p>
      <div className="game-iframe-wrapper">
        <iframe
          src="https://www.crazygames.com/embed/color-tunnel"
          title="Color Tunnel"
          allowFullScreen
          frameBorder="0"
          className="game-iframe"
        ></iframe>
      </div>
    </div>
  );
}
