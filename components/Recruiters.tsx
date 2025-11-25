"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function RecruitersPage() {
  const recruiters = [
    "/images/recruiters/acs.png",
    "/images/recruiters/avr-express.png",
    "/images/recruiters/axis.png",
    "/images/recruiters/bajaj-allianz.png",
    "/images/recruiters/bny.png",
    "/images/recruiters/careernet.png",
    "/images/recruiters/decathlon.png",
    "/images/recruiters/gsk.png",
    "/images/recruiters/icici-logo.png",
    "/images/recruiters/idea.png",
    "/images/recruiters/samsung.png",
    "/images/recruiters/zoho.png"
  ];

  // Function to extract alt text from file name
  const getAltText = (url: string) => {
    const name = url.split("/").pop()?.replace(".webp", "") || "Recruiter";
    return name.replace(/-/g, " ").toUpperCase();
  };

  return (
    <section className="bg-gray-50 flex flex-col items-center w-full">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-8 px-4"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-[#0b3370]">
          Our Recruiters
        </h1>
        <p className="text-gray-600 mt-2 text-base md:text-lg">
          Over <span className="font-bold text-[#0b3370]">100+ recruiters</span> connect with us every year
        </p>
      </motion.div>

      {/* Infinite Scroller */}
      <div className="overflow-hidden w-full bg-white shadow-inner py-6">
        <motion.ul
          className="flex items-center gap-4 sm:gap-6 whitespace-nowrap"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 35,
          }}
        >
          {[...recruiters, ...recruiters].map((logo, i) => (
            <li key={i} className="flex items-center">
              <motion.div
                className="flex items-center justify-center min-w-[120px] sm:min-w-[160px] group"
                animate={{
                  y: [0, -6, 0, 6, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  delay: i * 0.15,
                }}
              >
                <Image
                  src={logo}
                  alt={getAltText(logo)}
                  width={120}
                  height={60}
                  loading="lazy"
                  className="object-contain max-h-14 sm:max-h-20 transition-transform duration-300 group-hover:scale-125"
                />
              </motion.div>

              {/* Slash Divider */}
              {i !== recruiters.length * 2 - 1 && (
                <span className="text-gray-300 text-lg mx-2 sm:mx-3 select-none">/</span>
              )}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
