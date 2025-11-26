"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const experts = [
  {
    name: "Dr. jomma",
    dept: "Agriculture",
    image: "/expert3.jpg",
  },

  {
    name: "Dr. Karim jbed",
    dept: "Soil Science",
    image: "/expert1.jpg",
  },
  {
    name: "Dr. Ahsan monjo",
    dept: "Plant Pathology",
    image: "/expert4.webp",
  },
];

const ExpertMarquee = () => {
  return (
    <div>
      <div className="flex flex-col items-center py-10">
        <h1 className="text-2xl font-semibold">Our Expert Team</h1>
        <h1 className="text-7xl font-bold">
          Expert Team <br />
          <span className="flex justify-center">Members</span>
        </h1>
      </div>
      <div className="w-full py-10 bg-gray-100">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={2} // 2 cards visible
          spaceBetween={20} // space between cards
          loop={true} // infinite loop
          autoplay={{
            delay: 1, // very small delay for continuous effect
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={2000} // speed of scrolling
        >
          {experts.map((expert, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center">
                <div className="w-full h-full mb-4 overflow-hidden  rounded-[10px]">
                  <img
                    src={expert.image}
                    alt={expert.name}
                    className="w-full h-full object-cover rounded-[20]"
                  />
                </div>
                <h3 className="text-[20px] font-semibold">{expert.name}</h3>
                <p className="text-gray-500 text-[15px] font-semibold">
                  {expert.dept}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ExpertMarquee;
