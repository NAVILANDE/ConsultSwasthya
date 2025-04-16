import React, { useState, useEffect } from "react";

const Blog = () => {
  const [articles, setArticles] = useState([]);
  const apiKey = "6426d5420fc0f43ba07c40b5474145c5"; // Replace with your Mediastack API key

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch(
        `http://api.mediastack.com/v1/news?access_key=${apiKey}&categories=general&languages=en`
      );
      const data = await response.json();
      setArticles(data.data);
    };

    fetchArticles();
  }, []);

  return (
    <div className="p-5">
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {articles.map((article) => (
          <div key={article.url} className="border p-4 rounded-md shadow-lg">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold">{article.title}</h2>
            <p className="text-sm text-gray-600">{article.description}</p>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline mt-2 block"
            >
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
