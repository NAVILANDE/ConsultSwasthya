import React from 'react';

const GameCards = () => {
  const games = [
    {
      category: "Color & Creativity Games",
      items: [
        {
          name: "Color Tap: Coloring by Numbers",
          link: "https://www.crazygames.com/game/color-tap-coloring-by-numbers",
          image: "/game_images/1.jpeg",
        },
        {
          name: "Color Pixel Art Classic",
          link: "https://www.crazygames.com/game/color-pixel-art-classic",
          image: "/game_images/2.jpeg",
        },
        {
          name: "I Love Hue",
          link: "https://play.google.com/store/apps/details?id=com.zutgames.ilovehue",
          image: "/game_images/3.png",
        },
        {
          name: "Happy Color",
          link: "https://play.google.com/store/apps/details?id=com.pixel.art.coloring.color.number",
          image: "/game_images/4.jpeg",
        },
        {
          name: "Blend It 3D",
          link: "https://play.google.com/store/apps/details?id=com.blendergame.blendit3d",
          image: "/game_images/5.jpeg",
        },
      ],
    },
    {
      category: "Puzzle & Focus Games",
      items: [
        {
          name: "Light Line",
          link: "https://www.crazygames.com/game/light-line",
          image: "/game_images/6.jpeg",
        },
        {
          name: "2048",
          link: "https://www.crazygames.com/game/2048",
          image: "/game_images/7.jpeg",
        },
        {
          name: "Infinity Loop",
          link: "https://play.google.com/store/apps/details?id=com.balysv.loop",
          image: "/game_images/8.jpeg",
        },
        {
          name: "Zen Puzzle",
          link: "https://zenpuzzlegame.com/",
          image: "/game_images/9.jpeg",
        },
        {
          name: "Flow Free",
          link: "https://play.google.com/store/apps/details?id=com.bigduckgames.flow",
          image: "/game_images/10.jpeg",
        },
        {
          name: "Kami 2",
          link: "https://apps.apple.com/us/app/kami-2/id1133161444",
          image: "/game_images/11.jpeg",
        },
      ],
    },
    {
      category: "Bubble & Match Games",
      items: [
        {
          name: "Bubble Shooter",
          link: "https://www.silvergames.com/en/bubble-shooter",
          image: "/game_images/12.jpeg",
        },
        {
          name: "Smarty Bubbles",
          link: "https://www.crazygames.com/game/smarty-bubbles",
          image: "/game_images/13.jpeg",
        },
        {
          name: "Bubble Shooter Extreme",
          link: "https://www.crazygames.com/game/bubble-shooter-extreme",
          image: "/game_images/14.jpeg",
        },
        {
          name: "Candy Crush Saga",
          link: "https://king.com/game/candycrush",
          image: "/game_images/15.jpeg",
        },
        {
          name: "Bejeweled Classic",
          link: "https://www.ea.com/games/bejeweled/bejeweled-classic",
          image: "/game_images/16.jpeg",
        },
      ],
    },
    {
      category: "Calming & Soothing Games",
      items: [
        {
          name: "Calm the Game",
          link: "https://calmthegame.com/",
          image: "/game_images/17.jpeg",
        },
        {
          name: "Viridi",
          link: "https://store.steampowered.com/app/375950/Viridi/",
          image: "/game_images/18.jpeg",
        },
      ],
    },
  ];

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Relaxing & Creative Games</h1>
      {games.map((group, groupIndex) => (
        <div key={groupIndex} className="mb-5">
          <h3 className="mb-4">{group.category}</h3>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {group.items.map((game, index) => (
              <div className="col" key={index}>
                <div className="card h-100 shadow-sm">
              <img
                src={game.image}
                className="card-img-top"
                alt={game.name}
                style={{ height: '200px', objectFit: 'cover' }}
              />
                  <div className="card-body">
                    <h5 className="card-title">{game.name}</h5>
                    <a href={game.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                      Play Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GameCards;
