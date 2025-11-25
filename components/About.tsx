"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { Md360 } from "react-icons/md";

export default function About() {
  const [counts, setCounts] = useState({
    industry: 0,
    recruiters: 0,
    alumni: 0,
    ceo: 0,
  });

  const { ref: counterRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  // Counter Animation
  useEffect(() => {
    if (inView) {
      const duration = 2000;
      const step = 20;

      const target = {
        industry: 100,
        recruiters: 250,
        alumni: 2500,
        ceo: 300,
      };

      let start = 0;
      const interval = setInterval(() => {
        start += step;
        setCounts({
          industry: Math.min(Math.floor((start / duration) * target.industry), target.industry),
          recruiters: Math.min(Math.floor((start / duration) * target.recruiters), target.recruiters),
          alumni: Math.min(Math.floor((start / duration) * target.alumni), target.alumni),
          ceo: Math.min(Math.floor((start / duration) * target.ceo), target.ceo),
        });
        if (start >= duration) clearInterval(interval);
      }, step);

      return () => clearInterval(interval);
    }
  }, [inView]);

  return (
    <section id="about" className="relative overflow-hidden bg-transparent">
      {/* Decorative Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-y-0 left-0 w-1/4 hidden lg:block bg-[repeating-linear-gradient(135deg,#e5e5e5_0px,#e5e5e5_2px,transparent_2px,transparent_150px)] opacity-40"></div>
        <div className="absolute inset-y-0 right-0 w-1/4 hidden lg:block bg-[repeating-linear-gradient(225deg,#e5e5e5_0px,#e5e5e5_2px,transparent_2px,transparent_150px)] opacity-40"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 md:px-12 py-12 grid gap-10 md:gap-16 md:grid-cols-2 items-start">

        {/* Mobile + Tablet Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="md:hidden w-full text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            <span className="text-yellow-500">About </span>
            <span className="text-maroon">SSBM</span>
          </h2>
        </motion.div>

        {/* Left Column - Image + Badge */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative w-full h-[280px] sm:h-[380px] md:h-full flex flex-col justify-center"
        >
          <div className="relative w-full h-full overflow-hidden">
            <motion.div
              whileHover={{
                scale: 1.02,
                rotate: [-0.5, 0.5, 0],
                transition: { duration: 0.6 },
              }}
              className="relative w-full h-full"
            >
              <Image
                src="/images/about/students.png"
                alt="Sona SSBM Campus"
                fill
                style={{ objectFit: "contain" }}
                priority
              />
            </motion.div>
          </div>

          {/* NAAC Badge */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "backOut" }}
            viewport={{ once: true }}
            className="absolute bottom-6 sm:bottom-20 left-6 w-[clamp(5rem,8vw,10rem)] h-[clamp(5rem,8vw,10rem)] flex flex-col items-center justify-center rounded-full bg-maroon text-[#FFD700] text-center text-[clamp(0.6rem,1vw,1rem)] font-semibold shadow-2xl border-[3px] sm:border-4 border-yellow-500 p-[clamp(0.4rem,1vw,0.8rem)]"
          >
            <img
              src="https://res.cloudinary.com/dscqejyxy/image/upload/v1759821830/naac_ltdiij.png"
              alt="NAAC Accredited"
              className="w-8 h-8 sm:w-10 sm:h-10 mb-1 object-contain"
            />
            <div className="leading-tight">NAAC A++ <br /> Accredited</div>
          </motion.div>

          {/* Mobile + Tablet 360° Button */}
       <div className="mt-4 flex justify-center md:hidden">
  <a
    href="https://www.sonatech.ac.in/campus-360-virtual-tour/MBA/index.htm"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center px-4 py-2 bg-maroon text-yellow-500 font-bold rounded-lg shadow-lg hover:bg-maroon/80 transition-colors duration-300 text-sm sm:text-base"
  >
    <Md360 className="mr-2 w-5 h-5" /> {/* Icon moved to left with right margin */}
    View 360°
  </a>
</div>

        </motion.div>

        {/* Right Column - Text + Counters */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative h-full space-y-6 rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl bg-white/60 backdrop-blur-lg flex flex-col justify-between"
        >
          {/* Mobile Heading */}
         <div className="hidden md:flex flex-col md:flex-row md:justify-between md:items-center text-center md:text-left space-y-2 md:space-y-0">
            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              <span className="text-yellow-500 block md:inline">About </span>
              <span className="text-maroon block md:inline">SSBM</span>
            </h2>

            {/* 360° Button */}
            <a
              href="https://www.sonatech.ac.in/campus-360-virtual-tour/MBA/index.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-4 py-2 bg-maroon text-yellow-500 font-bold rounded-lg shadow-lg hover:bg-maroon/80 transition-colors duration-300 text-sm sm:text-base inline-block"
            >
              View 360°
              <Md360 className="absolute top-0 left-0 w-5 h-5 bg-maroon rounded-full text-yellow-500 -translate-x-1/2 -translate-y-1/2" />
            </a>
          </div>



          {/* Text */}
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg text-justify ">
            The <span className="font-semibold text-maroon"> SSBM(Sona School of  Business and Management)</span> is one of the most sought-after centres of excellence in Tamil Nadu. It has gained global recognition through research, consultancy, teaching, and training. Situated in Salem, the Steel City of Tamil Nadu, the institute offers an MBA program in six specialisations: Business Analytics, Finance, Marketing, HR, Productions, and Family Business.
            <br /><br />
            SSBM offers holistic education giving equal thrust to professional and personal development. It is well connected by Road & Rail 24/7 across different metros. The School is <span className="font-semibold">AICTE approved</span>, <span className="font-semibold">NBA accredited</span>, <span className="font-semibold">NAAC A++ accredited</span>, and <span className="font-semibold">ISO certified</span>. The institute is recognised as <span className="italic">"AICTE – CII Award for Best Industry – Linked Technical Institute in India 2019"</span>. It stands testimony to the commitment of the management to impart quality higher education.
          </p>
          {/* Counters */}
          <motion.div
            ref={counterRef}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-6 text-center"
          >
            {[
              { value: counts.industry, label: "Industry Connect" },
              { value: counts.recruiters, label: "Recruiters" },
              { value: counts.alumni, label: "Managerial Exp. Alumnus" },
              { value: counts.ceo, label: "CEO's Talks" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
              >
                <h3 className="text-xl sm:text-2xl font-bold text-maroon">{item.value}+</h3>
                <p className="text-gray-600 text-xs sm:text-sm">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Know More Button */}
          <Link
            href={{ pathname: "/about" }}
            className="inline-block mt-6 px-6 py-3 bg-yellow-500 text-maroon font-medium rounded-xl shadow-lg hover:bg-yellow-600 transition text-sm sm:text-base text-center"
          >
            Know More →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
