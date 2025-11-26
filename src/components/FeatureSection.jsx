"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import imag1 from "../../public/marketplace.jpg";

export default function FeatureSection() {
  const slides = [
    {
      category: "Crop Marketplace",
      bg: "bg-green-100/70",
      image: imag1.src,
      items: [
        {
          icon: "🧑‍🌾",
          title: "Add Crops",
          desc: "Farmers can add fresh crops and sell.",
        },
        {
          icon: "👀",
          title: "Show Interest",
          desc: "Users can show interest in crop items.",
        },
        {
          icon: "🌾",
          title: "Crop Details",
          desc: "View full details of crop information.",
        },
      ],
    },
    {
      category: "Farm Knowledge",
      bg: "bg-yellow-100/70",
      image: "/images/feature-bg.jpg",
      items: [
        {
          icon: "💡",
          title: "Daily Tips",
          desc: "Get daily cultivation and care tips.",
        },
        {
          icon: "📰",
          title: "Agriculture News",
          desc: "Latest updates and market news.",
        },
        {
          icon: "☁",
          title: "Weather Forecast",
          desc: "Get today's farming weather.",
        },
      ],
    },
    {
      category: "Smart Farming Tech",
      bg: "bg-blue-100/70",
      image: "/images/feature-bg.jpg",
      items: [
        {
          icon: "🤖",
          title: "AI Pest Detection",
          desc: "Find pests using AI tools.",
        },
        {
          icon: "💧",
          title: "Smart Irrigation",
          desc: "Water-saving irrigation support.",
        },
        {
          icon: "🧪",
          title: "Soil Test Guide",
          desc: "Know your soil nutrient values.",
        },
      ],
    },
  ];

  return (
    <div className="w-full px-4 py-8">
      <h1 className="text-2xl font-bold mb-4 text-green-700">🌿 Features</h1>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className={`${slide.bg} p-6 rounded-2xl shadow-lg relative overflow-hidden`}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-30"
                style={{ backgroundImage: `url(${slide.image})` }}
              ></div>

              {/* Content */}
              <div className="relative z-10">
                <h2 className="text-xl font-bold mb-4">{slide.category}</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {slide.items.map((item, i) => (
                    <div
                      key={i}
                      className="p-4 bg-white/80 border rounded-xl shadow-sm flex items-start gap-3"
                    >
                      <span className="text-3xl">{item.icon}</span>
                      <div>
                        <h3 className="font-semibold text-lg">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
