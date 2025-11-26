"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import imag1 from "../../public/marketplace.jpg";
import imag2 from "../../public/knowledge.jpg";
import imag3 from "../../public/tech.jpg";

export default function FeatureSection() {
  const slides = [
    {
      category: "Crop Marketplace",
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
      image: imag2.src,
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
      image: imag3.src,
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
    <div className="w-full px-4 py-10">
      <h1 className="text-5xl font-bold mb-6 text-black">
        🌿 Featured Sections
      </h1>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              ></div>

              {/* Light Gradient Overlay (clear background visible) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

              {/* Content */}
              <div className="relative z-10 p-7 text-black">
                <h2 className="text-3xl font-bold mb-5 drop-shadow">
                  {slide.category}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {slide.items.map((item, i) => (
                    <div
                      key={i}
                      className="p-4 bg-white/30 rounded-xl shadow-lg flex items-start gap-3"
                    >
                      <span className="text-3xl">{item.icon}</span>
                      <div>
                        <h3 className="font-semibold text-lg text-black">
                          {item.title}
                        </h3>
                        <p className="text-sm text-black">{item.desc}</p>
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
