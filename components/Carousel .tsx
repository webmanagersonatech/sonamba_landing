"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface NewsItem {
  title: string;
  image: string;
  date: string;
  content?: string;
}

interface NewsSwiperProps {
  news: NewsItem[];
  memberName?: string;
  onSelect?: (news: NewsItem & { author?: string }) => void;
}

export default function NewsSwiper({ news, memberName, onSelect }: NewsSwiperProps) {
  return (
    <div className="w-full">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={16}
        loop={true}
        autoplay={{ delay: 2800, disableOnInteraction: false, pauseOnMouseEnter: true }}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1, centeredSlides: true },     // Mobile
          640: { slidesPerView: 2, centeredSlides: false },   // Tablet / small laptop
          1024: { slidesPerView: 3, centeredSlides: false },  // Large screens
        }}
        className="custom-swiper pb-12"
      >
        {news.map((n, i) => (
          <SwiperSlide key={i}>
            <button
              onClick={() => onSelect && onSelect({ ...n, author: memberName })}
              className="w-full text-left bg-gray-50 hover:bg-gray-100 rounded-xl border overflow-hidden shadow-sm transition focus:outline-none focus:ring-2 focus:ring-maroon/30"
            >
              <div className="w-full h-36 md:h-40 overflow-hidden">
                <img
                  src={n.image}
                  alt={n.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-3">
                <p className="text-sm font-semibold text-gray-900 line-clamp-2">{n.title}</p>
                <p className="text-xs text-gray-500 mt-1">{n.date}</p>
              </div>
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
