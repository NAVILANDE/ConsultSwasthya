import React from "react";
import { Card, CardContent } from "../Dashboard/card";

const blogs = [
  {
    title: "How to Cope with Work Stress",
    summary:
      "Simple mindfulness practices to help you ease your daily work anxiety.",
  },
  {
    title: "The Science Behind Daily Affirmations",
    summary: "Learn how repeating positive thoughts can improve your mood.",
  },
];

export default function BlogPreview() {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Mental Health Reads</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {blogs.map((blog, index) => (
          <Card key={index} className="hover:shadow-md transition">
            <CardContent className="p-4">
              <h3 className="text-lg font-bold">{blog.title}</h3>
              <p className="text-gray-600 mt-2">{blog.summary}</p>
              <button className="mt-3 text-sm text-indigo-600 hover:underline">
                Read more →
              </button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
