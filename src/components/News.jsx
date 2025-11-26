"use client";

import React from "react";

const newsItems = [
  {
    title: "New Organic Farming Techniques Introduced",
    description:
      "Farmers are now adopting innovative organic methods to increase crop yield and reduce chemical use...",
    image: "/news1.avif", // put your images in public folder
  },
  {
    title: "Government Announces Subsidy for Rice Farmers",
    description:
      "The government has announced a new subsidy program to support rice cultivation this season...",
    image: "/news2.avif",
  },
  {
    title: "Climate Change Impact on Wheat Production",
    description:
      "Experts warn that climate variations could reduce wheat yields in several regions if no precautions are taken...",
    image: "/news3.avif",
  },
];

const News = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Agriculture News</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {newsItems.map((news, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="w-full h-48 overflow-hidden">
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{news.title}</h3>
              <p className="text-gray-600 mb-4">{news.description}</p>
              <button className="text-green-700 font-semibold hover:underline">
                Read More &rarr;
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
