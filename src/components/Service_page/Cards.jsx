import React from "react";
import "./cards.css";
import { useNavigate } from "react-router-dom";

const Cards = () => {
  const navigate = useNavigate();

  const cardData = [
    {
      image: "/images/analysis.jpg",
      title: "Analysis",
      description:
        "Passionate about creating intuitive and beautiful digital experiences. Specializing in user-centered design and design systems.",
    },
    {
      image: "/images/motivation.jpg",
      title: "Motivational Blogs",
      description:
        "Passionate about creating intuitive and beautiful digital experiences. Specializing in user-centered design and design systems.",
    },
    {
      image: "/images/games.jpg", // Replace with another image path
      title: "Stress reliving games",
      description:
        "Experienced in web design, UI/UX, and creating visually appealing websites.",
    },
    {
      image: "/images/video.jpg", // Replace with another image path
      title: "Motivational Videos",
      description:
        "Expert in full-stack development, building robust and scalable web applications.",
    },
    {
      image: "/images/other.jpg", // Replace with another image path
      title: "Other",
      description:
        "Specialized in digital marketing strategies, SEO, and social media growth.",
    },
  ];

  return (
    <div className="bg-light min-vh-100 d-flex align-items-center justify-content-center flex-column py-5">
      <div class="text-center mb-5">
        <h1 class="section-heading display-4 mb-3">Discover Features</h1>
        <p class="text-muted lead">
          Explore our powerful tools designed to enhance your workflow
        </p>
      </div>
      {cardData.map((card, index) => (
        <div className="container" style={{ marginBottom: "2cm" }} key={index}>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="contact-card bg-white rounded-4 shadow-sm overflow-hidden">
                <div className="row g-0">
                  <div
                    className="col-md-4 d-flex align-items-center justify-content-center p-4"
                    style={{
                      backgroundImage: `url(${card.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      height: "300px", // Adjust as necessary
                    }}
                  >
                    {/* This can be empty or you can add any content you like */}
                  </div>

                  <div className="col-md-8">
                    <div className="card-body p-4">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <h3 className="card-title mb-0 text-primary fw-bold">
                          {card.title}
                        </h3>
                        
                      </div>
                      <p className="card-text text-muted mb-4">
                        {card.description}
                      </p>
                      <div className="d-flex gap-3 mb-4">
                      <button
      className="btn btn-outline-primary px-4 rounded-pill"
      onClick={() => {
        if (card.title === "Analysis") {
          navigate("/table");
        } else if (card.title === "Stress reliving games") {
          window.location.href = "https://www.crazygames.com";
        } else if (card.title === "Motivational Videos") {
          navigate("/c1"); // Now handled by navigate
        }else if (card.title === "Motivational Blogs") {
          navigate("/c1/expertblog"); // Now handled by navigate
        }
      }}
    >
                          <i className="fas fa-user-plus me-2"></i>Follow
                        </button>
                      </div>
                      <div className="border-top pt-3">
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="d-flex gap-3">
                            <i className="fab fa-twitter fa-lg social-icon text-primary"></i>
                            <i className="fab fa-linkedin fa-lg social-icon text-primary"></i>
                            <i className="fab fa-dribbble fa-lg social-icon text-primary"></i>
                          </div>
                          <span className="text-muted small">
                            <i className="fas fa-map-marker-alt me-2"></i>San
                            Francisco, CA
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
