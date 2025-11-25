"use client";

import { motion, Variant } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaChartLine,
  FaBriefcase,
  FaLightbulb,
  FaGlobe,
  FaDatabase,
  FaCogs,
} from "react-icons/fa";

// Program list
const programs = [
  { title: "Finance", icon: <FaChartLine size={40} className="text-white" />, href: "/specialization/?tab=finance" },
  { title: "Marketing", icon: <FaLightbulb size={40} className="text-white" />, href: "/specialization/?tab=marketing" },
  { title: "Human Resources", icon: <FaBriefcase size={40} className="text-white" />, href: "/specialization/?tab=hr" },
  { title: "Family Business", icon: <FaGlobe size={40} className="text-white" />, },
  { title: "Business Analytics", icon: <FaDatabase size={40} className="text-white" />, href: "/specialization/?tab=businessanalytics" },
  { title: "Production", icon: <FaCogs size={40} className="text-white" />, },
];

// ✅ Strictly typed variants
const hidden: Variant = { opacity: 0, x: -40 };

const visible: Variant = (i: number = 0) => ({
  opacity: 1,
  x: 0,
  transition: {
    type: "spring",
    stiffness: 120,
    damping: 14,
    delay: i * 0.15,
  },
});

const hover: Variant = {
  scale: 1.08,
  transition: { type: "spring", stiffness: 250 },
};

const cardVariants = { hidden, visible, hover };

export default function Programs() {
  return (
    <section
      id="programs"
      className="relative py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-gray-100 to-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10 px-4 ">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12">

          {/* Left: Heading + Cards */}
          <motion.div
            className="flex-1 w-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
          >
            <div className="text-left mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                MBA Specializations
              </h2>
              <p className="mt-2 text-gray-700 text-justify text-sm sm:text-base md:text-lg">
                Explore our MBA tracks and choose the path that aligns with your
                career goals. Each program offers hands-on projects, mentorship,
                and career support.
              </p>
            </div>

            {/* Icons grid */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {programs.map((p, i) => {
                const CardContent = (
                  <motion.div
                    className="flex flex-col items-center justify-center p-4 bg-maroon rounded-xl cursor-pointer shadow-lg hover:shadow-2xl transition-transform duration-300"
                    variants={cardVariants}
                    custom={i}
                    whileHover="hover"
                  >
                    {p.icon}
                    <h3 className="mt-2 text-xs sm:text-sm font-medium text-white text-center">
                      {p.title}
                    </h3>
                  </motion.div>
                );

                if (p.href) {
                  // Internal link
                  if (p.href.startsWith("/")) {
                    return (
                      <Link key={p.title} href={p.href as any}>
                        {CardContent}
                      </Link>
                    );
                  }
                  // External link
                  return (
                    <a
                      key={p.title}
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {CardContent}
                    </a>
                  );
                }

                // No link
                return <div key={p.title}>{CardContent}</div>;
              })}
            </motion.div>

          </motion.div>

          {/* Right: Image with button */}
          <motion.div
            className="flex-1 w-full h-64 sm:h-80 lg:h-96 relative overflow-hidden rounded-xl shadow-lg mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
          >
            <motion.div
              className="w-full h-full"
              initial={{ scale: 1.05 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1 }}
            >
              <Image
                src="/images/mba-specialization/mba-specializations.webp"
                alt="MBA Specializations"
                fill
                className="object-cover rounded-xl"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 80%, 0% 100%)" }}
                priority
              />
            </motion.div>

            <Link
              href="/contact"
              className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-maroon text-white font-semibold px-3 py-2 sm:px-4 sm:py-2 rounded-full shadow-lg hover:bg-maroon/80 transition"
            >
              Need Guideline
            </Link>
          </motion.div>
        </div>
      </div>
    </section>


  );
}
