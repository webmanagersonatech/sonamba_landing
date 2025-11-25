"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion, Variants, Transition } from "framer-motion";
import { FaCalendarAlt, FaBullhorn } from "react-icons/fa";
import Link from "next/link";
import ScholarshipWidget from "../components/ScholarshipWidget";

// Define a cubic bezier easing that TS accepts
const cubicEase: Transition["ease"] = [0.25, 0.1, 0.25, 1];

// Animation Variants
const leftIn: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: cubicEase },
  },
};

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: cubicEase },
  },
};

const buttonIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: cubicEase, delay: 0.2 },
  },
};

const slides = [
  {
    id: 1,
    image: `/images/hero/hero-1.webp`,
    title: "Empower Your Career Journey with an MBA",
    subtitle:
      "Learn from industry leaders, work on real problems, and join a network of high-impact alumni.",
    primary: { label: "Start Application →", href: "#contact" },
    focus: "object-center",
  },
  {
    id: 2,
    image: `/images/hero/hero-2.webp`,
    title: "Global Learning, Local Impact",
    subtitle:
      "Our MBA prepares you to lead with confidence in an interconnected world.",
    primary: { label: "Apply Now →", href: "https://www.sonabusinessschool.com/online-application?inst_id=ZFSQSGGCPYXQ9589" },
    focus: "object-top",
  },
  {
    id: 3,
    image: `/images/hero/hero-3.webp`,
    title: "Shape the Future of Business",
    subtitle:
      "Choose your specialization: Finance, Marketing, HR, Operations, or General MBA.",
    primary: { label: "View Specializations →", href: "#programs" },
    focus: "object-center",
  },
  {
    id: 4,
    image: `/images/hero/hero-4.webp`,
    title: "Join a Network of Alumni",
    subtitle:
      "Connect with alumni from around the world and learn from their experiences.",
    primary: { label: "Connect with Alumni →", href: "https://sonatptalumni.org/" },
    focus: "object-bottom",
  },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="home" className="relative w-full min-h-[100dvh]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 8000, disableOnInteraction: false }}
        loop
        className="w-full h-full"
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full min-h-[100dvh] flex items-center justify-center overflow-hidden">
              {/* Background Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className={`absolute inset-0 w-full h-full object-cover ${slide.focus}`}
                loading="lazy"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/50" />

              {/* Text Content */}
              <motion.div
                key={activeIndex}
                initial="hidden"
                animate="visible"
                className="container relative z-10 text-white max-w-3xl flex flex-col justify-center items-center sm:items-start text-center sm:text-left px-3 sm:px-6 md:px-10 pt-16 sm:pt-24 md:pt-32 pb-20 sm:pb-28 md:pb-32"
              >
                <motion.h1
                  variants={leftIn}
                  className="mt-3 sm:mt-6 text-xl sm:text-3xl md:text-6xl font-bold leading-snug sm:leading-tight drop-shadow-lg"
                >
                  {slide.title}
                </motion.h1>

                <motion.p
                  variants={fadeIn}
                  className="mt-2 sm:mt-4 text-xs sm:text-base md:text-xl text-gray-200"
                >
                  {slide.subtitle}
                </motion.p>

                <motion.a
                  variants={buttonIn}
                  href={slide.primary.href}
                  target={slide.id === 3 ? "_self" : "_blank"}
                  className="mt-4 sm:mt-6 md:mt-8 btn btn-primary px-3 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm md:text-base whitespace-nowrap shadow-xl hover:scale-105 transition-transform"
                >
                  {slide.primary.label}
                </motion.a>
              </motion.div>

              {/* Bottom Right Badge */}
              <motion.div
                initial={{ opacity: 0, x: 50, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute bottom-3 right-2 sm:bottom-6 sm:right-4 md:bottom-10 md:right-10 z-50 border border-white/20 text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 rounded-xl shadow-lg max-w-[200px] sm:max-w-[240px] md:max-w-xs w-full text-[9px] sm:text-xs md:text-sm flex flex-col space-y-4  pointer-events-auto"
              >
                {/* Announcements */}
                <div className="space-y-2">
                  <h5 className="text-yellow-500 font-semibold text-[10px] sm:text-[12px] md:text-sm flex items-center">
                    <FaBullhorn className="mr-2" /> Announcements
                  </h5>
                  <ul className="list-disc list-inside text-[9px] sm:text-[11px] md:text-xs space-y-1 pl-2">
                    <li>
                      <a
                        href="https://www.sonabusinessschool.com/online-application?inst_id=ZFSQSGGCPYXQ9589"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline hover:text-yellow-400 transition cursor-pointer"
                      >
                        MBA Admissions Open 2026-27
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Events */}
                <div className="space-y-2 border-t border-white/20 pt-2">
                  <h5 className="text-yellow-500 font-semibold text-[10px] sm:text-[12px] md:text-sm flex items-center">
                    <FaCalendarAlt className="mr-2" /> Recent News & Events
                  </h5>
                  <ul className="list-disc list-inside text-[9px] sm:text-[11px] md:text-xs space-y-1 pl-2">

                    <li>
                      <Link
                        href="/events/sona-cricket-premier-league-2026"
                        className="hover:underline hover:text-yellow-400 transition cursor-pointer"
                      >
                        Sona Cricket Premier League - 2026
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/events/cii-skills-summit-2025"
                        className="hover:underline hover:text-yellow-400 transition cursor-pointer"
                      >
                        CII Skills Summit – 2025
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/events/mma-change-readiness-2025"
                        className="hover:underline hover:text-yellow-400 transition cursor-pointer"
                      >
                        MMA Session on Change Readiness
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>


            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <ScholarshipWidget />
    </section>
  );
}
