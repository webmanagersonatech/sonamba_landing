"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type AlumniStory = {
  name: string;
  role: string;
  image: string;
  story: string;
};

export default function AlumniStoriesPage() {
  const stories: AlumniStory[] = [
    {
      name: "Rakshitha - 2007 - 2009",
      role: "Sr. IT Recruiter, USA",
      image: "/images/alumni/rakshitha.webp",
      story:
        "The MBA program at Sona gave me global exposure and leadership skills that shaped my career path at Amazon.",
    },
    {
      name: "Bigyan Gupta - 2014 - 2016",
      role: "Pedal, Founder & CEO, Nepal",
      image: "/images/alumni/bigyan-gupta.webp",
      story:
        "From ideation to execution, the mentorship here helped me launch a successful FinTech startup in Bangalore.",
    },
    {
      name: "Ms. Prakriti Koirala - 2011 - 2013",
      role: "Human Resource, USA",
      image:
        "/images/alumni/prakriti-koirala.webp",
      story:
        "The case-study based learning approach prepared me for real consulting challenges at McKinsey.",
    },
    {
      name: "Yuvaraj S - 2002 - 2004",
      role: "Tremenous, Associate Vice President, Chennai",
      image: "/images/alumni/yuvaraj.webp",
      story:
        "With strong guidance, I modernized our 40-year-old family business and expanded into new markets.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-12 px-4 sm:px-8 flex flex-col items-center">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0b3370]">
          Alumni Stories
        </h1>
        <p className="text-gray-600 mt-2 text-base sm:text-lg md:text-xl">
          Inspiring journeys of{" "}
          <span className="font-bold text-[#0b3370]">our alumni</span>
        </p>
      </motion.div>

      {/* Stories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">
        {stories.map((a, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4, ease: "easeOut" }}
            className="bg-white/80 backdrop-blur-md rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl hover:scale-105 transition-transform duration-300 border border-gray-100"
          >
            <Image
              src={a.image}
              alt={a.name}
              width={90}
              height={90}
              className="rounded-full object-cover mb-3 shadow"
            />
            <h3 className="text-sm sm:text-base font-semibold text-[#0b3370]">
              {a.name}
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 mb-3">{a.role}</p>
            <p className="text-xs sm:text-sm text-gray-700 italic leading-relaxed">
              “{a.story}”
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
