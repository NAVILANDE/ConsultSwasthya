import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./blog.css"; // Custom styles for additional styling

const BlogSection = () => {
  // Dummy blog data
  const blogs = [
    {
      id: 1,
      title: "Make ADHD Your Superpower",
      description:
        "This article aims to teach you how to utilize a practical framework to advocate for the support you need from coaches and other support providers.",
      category: "Uncategorized",
      image: "https://source.unsplash.com/400x250/?lego,toys",
      authorImage: "https://randomuser.me/api/portraits/men/32.jpg",
      date: "January 30, 2022",
    },
    {
      id: 2,
      title: "Women and Low Sex Drive: Why it Happens and What You Should Know",
      description:
        "Do you know those happy couples on Instagram who seem like they have it all together? They have one thing in common: little to no sexual...",
      category: "Psychology",
      image: "https://source.unsplash.com/400x250/?woman,bed",
      authorImage: "https://randomuser.me/api/portraits/women/44.jpg",
      date: "December 10, 2021",
    },
    {
      id: 3,
      title: "Establishing Healthy Friendships (And Knowing When to Move On)",
      description:
        "Unfortunately, we often do not learn enough about what makes a relationship healthy. Even if we do, the lesson does not always stick when it comes...",
      category: "Psychology",
      image: "https://source.unsplash.com/400x250/?friends,happy",
      authorImage: "https://randomuser.me/api/portraits/women/50.jpg",
      date: "December 10, 2021",
    },
  ];

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">
        Find compelling articles worth{" "}
        <span className="text-primary">reading</span>
      </h1>

      <div className="row">
        {blogs.map((blog) => (
          <div className="col-md-4" key={blog.id}>
            <div className="card blog-card">
              <img src={blog.image} className="card-img-top" alt={blog.title} />
              <div className="card-body">
                <span className="badge bg-success">{blog.category}</span>
                <div className="author-avatar">
                  <img src={blog.authorImage} alt="Author" />
                </div>
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-text">{blog.description}</p>
              </div>
              <div className="card-footer text-muted text-center">
                {blog.date}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
