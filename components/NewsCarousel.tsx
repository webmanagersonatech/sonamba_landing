"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NewsItem {
  title: string;
  date: string;
  image: string;
  content?: string;
}

interface NewsCarouselProps {
  news: NewsItem[];
  onSelect?: (newsItem: NewsItem) => void;
}

export default function NewsCarousel({ news, onSelect }: NewsCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [visibleItems, setVisibleItems] = useState(3);
  const [isHovered, setIsHovered] = useState(false);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  /** 🧩 Responsive items count */
  useEffect(() => {
    const updateVisibleItems = () => {
      const width = window.innerWidth;
      if (width >= 1024) setVisibleItems(3);
      else if (width >= 768) setVisibleItems(2);
      else setVisibleItems(1);
    };

    updateVisibleItems();
    window.addEventListener("resize", updateVisibleItems);
    return () => window.removeEventListener("resize", updateVisibleItems);
  }, []);

  /** 🕒 Auto-slide handler */
  const startAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % news.length);
    }, 4000);
  };

  /** 🎬 Start auto-slide (pause on hover) */
  useEffect(() => {
    if (!isHovered) startAutoSlide();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovered, news]);

  /** 🛑 Pause & Resume on Hover */
  const handleMouseEnter = () => {
    setIsHovered(true);
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
  };

  const handleMouseLeave = () => {
    resumeTimeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 5000);
  };

  if (!news || news.length === 0) return null;

  const totalPages = news.length;
  const currentPage = current % totalPages;

  /** 🧮 Compute visible items with wrap-around */
  const visibleNews = Array.from({ length: visibleItems }).map((_, i) => {
    const index = (current + i) % news.length;
    return news[index];
  });

  /** 🧭 Navigation handlers */
  const goNext = () => setCurrent((prev) => (prev + 1) % news.length);
  const goPrev = () =>
    setCurrent((prev) => (prev - 1 + news.length) % news.length);

  /** ✅ UI */
  return (
    <div
      className="relative overflow-hidden w-full px-4 py-1"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* ← Left Arrow */}
      <button
        onClick={goPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800/60 text-white hover:bg-gray-500 transition p-2 z-20 "
        aria-label="Previous"
      >
        ←
      </button>

      {/* Carousel Container */}
      <div className="relative flex w-full justify-center items-center overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={current}
            className="flex gap-6 justify-center"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            {visibleNews.map((item, idx) => (
              <motion.button
                key={item.title + idx}
                onClick={() => onSelect?.(item)}
                className="flex-shrink-0 w-full sm:w-[90%] md:w-[48%] lg:w-[31%] bg-gray-50 hover:bg-gray-100 rounded-xl border shadow-sm overflow-hidden transition focus:outline-none focus:ring-2 focus:ring-yellow-400/50"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <div className="w-full h-36 md:h-44 lg:h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-3">
                  <p className="text-sm font-semibold text-gray-900 line-clamp-2">
                    {item.title}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{item.date}</p>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* → Right Arrow */}
      <button
        onClick={goNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800/60 text-white hover:bg-gray-500 transition p-2 z-20 "
        aria-label="Next"
      >
        →
      </button>

      {/* 🟡 Pagination Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: totalPages }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              idx === currentPage
                ? "bg-maroon scale-110"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
