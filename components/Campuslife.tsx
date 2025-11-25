"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const campusLife = {
  subtitle:
    "Experience a vibrant blend of academics, culture, and recreation that makes student life at SSBM unforgettable.",
  highlights: [
    { id: 6,  href:"/sona-lights-on", src: "/images/campus-life/Lights-on.webp", desc: "Sona Lights On" },
    { id: 8, src: "/images/campus-life/IV.webp", desc: "Industrial Visits & Practical Exposure" },
    { id: 1, src: "/images/campus-life/cultural-events-festivals.webp", desc: "Cultural Events & Festivals" },
    { id: 3, href: "/facilities?tab=sports", src: "/images/campus-life/modern-library-study-spaces.jpg", desc: "Modern Library & Study Spaces" },
    { id: 3, href: "/facilities?tab=sports", src: "/images/campus-life/sports-fitness-facilities.jpg", desc: "Sports & Fitness Facilities" },
    { id: 4, href: "/facilities?tab=hostel", src: "/images/campus-life/hostel-student-housing.webp", desc: "Hostel & Student Housing" },
    { id: 5, src: "/images/campus-life/modern-infrastructure.jpg", desc: "Modern Infrastructure" },
    { id: 7, src: "https://www.sonatech.ac.in/photo-gallery/cafeteria/images/sona-cafeteria.jpg", desc: "Cafeteria & Student Hangouts" },
  ],
};

export default function CampusLife() {
  return (
    <section className="px-6 lg:px-20  bg-gradient-to-b from-white to-gray-100">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6"
      >
        <span className="text-yellow-500">SSBM</span>{" "}
        <span className="text-maroon">Campus Life</span>
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="text-gray-700 text-center max-w-3xl mx-auto mb-14 text-lg sm:text-xl"
      >
        {campusLife.subtitle}
      </motion.p>

      {/* Image Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
        {campusLife.highlights.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative group rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-500"
          >
            <Link href={item.href || "#" as any} className="block w-full h-full">
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="relative w-full h-64 sm:h-72 lg:h-60 overflow-hidden rounded-xl"
              >
                <Image
                  src={item.src}
                  alt={item.desc}
                  fill
                  className="object-cover rounded-xl transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white text-center py-2 text-sm sm:text-base font-medium">
                  {item.desc}
                </div>
              </motion.div>
            </Link>
          </motion.div>
        ))}

      </div>
    </section>
  );
}
