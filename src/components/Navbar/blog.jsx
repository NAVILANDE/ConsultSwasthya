import React, { useState, useEffect } from "react";
import "./Blog.css";

const Blog = () => {
  const [articles, setArticles] = useState([]);
  const apiKey = "6426d5420fc0f43ba07c40b5474145c5"; // Your Mediastack API key

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch(
        `http://api.mediastack.com/v1/news?access_key=${apiKey}&categories=health&languages=en&limit=12`
      );
      const data = await response.json();
      setArticles(data.data || []);
    };

    fetchArticles();
  }, []);

  return (
    <div className="blog-container">
      <h1 className="blog-heading">Latest Health Blogs</h1>
      <div className="blog-grid">
        {articles.map((article) => (
          <div key={article.url} className="blog-card">
            <img
              src={
                article.image ||
                "https://via.placeholder.com/300x180?text=No+Image"
              }
              alt={article.title}
              className="blog-image"
            />
            <h2 className="blog-title">{article.title}</h2>
            <p className="blog-description">{article.description}</p>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="blog-link"
            >
              Read more →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
