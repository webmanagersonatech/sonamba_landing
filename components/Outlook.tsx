"use client";

import { motion, Variants } from "framer-motion"; // <-- add Variants here

import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrophy,
  faChartBar,
  faGlobe,
  faLightbulb,
  faBriefcase,
  faRocket,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import CountUp from "react-countup";
import { Award, Briefcase, Building2, ShieldCheck } from "lucide-react";

export default function OutlookPage() {
  const features = [
    {
      title: "Top-Ranked Education",
      description: "Ranked 9th Best B-School in Tamil Nadu 2025 by Outlook",
      icon: faTrophy,
      image: "/images/outlook/Top-Ranked.webp"
    },
    {
      title: "Industry-Focused Learning",
      description: "Curriculum designed in collaboration with Fortune 500 companies",
      icon: faChartBar,
      image: "/images/outlook/Industry-Focused.webp"
    },
    {
      title: "Global Network",
      description: "Join 10,000+ alumni across 35+ countries",
      icon: faGlobe,
      image: "/images/outlook/Global.webp"
    },
    {
      title: "Cutting-Edge Facilities",
      description: "AI-powered learning labs and innovation centers",
      icon: faLightbulb,
      image: "/images/outlook/Cutting-Edge.webp"
    },
  ];

  const jefPrograms = [
    {
      title: "Jobs",
      icon: faBriefcase,
      description:
        "98% placement record with 250+ recruiters including Deloitte, Amazon, and Microsoft",
    },
    {
      title: "Entrepreneurship",
      icon: faRocket,
      description: "Incubation center with ₹50L seed funding for student startups",
    },
    {
      title: "Family Business",
      icon: faUsers,
      description: "Specialized tracks for next-gen business leaders",
    },
  ];

  const stats = [
    {
      icon: <Award className="w-10 h-10 text-blue-400" />,
      value: (
        <>
          <CountUp end={9} duration={2} />
          <sup>th</sup>
        </>
      ),
      label: "Outlook B-School Rank (Tamil Nadu)",
    },
    {
      icon: <Briefcase className="w-10 h-10 text-blue-400" />,
      value: (
        <>
          <CountUp end={98} duration={2} />%
        </>
      ),
      label: "Placement Record",
    },
    {
      icon: <Building2 className="w-10 h-10 text-blue-400" />,
      value: (
        <>
          <CountUp end={100} duration={2} />+
        </>
      ),
      label: "Industry Partners",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-blue-400" />,
      value: "A++",
      label: "NAAC Accreditation",
    },
  ];

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1], // cubic-bezier equivalent of "easeOut"
      },
    },
  };


  return (
    <section className="relative min-h-screen py-12 sm:py-16 px-4 sm:px-6 md:px-10 flex flex-col items-center overflow-hidden bg-gradient-to-b from-gray-100 to-white">
      {/* Background Orbs */}
      <motion.div
        className="absolute top-0 left-0 w-40 h-40 sm:w-56 sm:h-56 rounded-full bg-indigo-100 opacity-30 blur-2xl"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-blue-100 opacity-30 blur-2xl"
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
      />

      {/* Header */}
      <motion.div
        className="relative w-full max-w-6xl mb-10 sm:mb-14 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        <motion.h1
          variants={fadeUp}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0b3370]"
        >
          Why Choose Sona?
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
        >
          Sona School of Management is ranked{" "}
          <span className="font-semibold text-[#0b3370]">9<sup>th</sup> in Tamil Nadu</span> by{" "}
          <span className="font-semibold">Outlook MBA Rankings</span>. With{" "}
          <span className="font-semibold text-[#0b3370]">98% placements</span> and strong industry
          partnerships, we deliver future-ready management education.{" "}
          {/* <Link href="/why-choose-sona" className="relative font-semibold italic group">
            <span className="bg-gradient-to-r from-blue-800 via-blue-700 to-blue-800 bg-clip-text text-transparent">
              Read more...
            </span>
  
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-blue-800 via-blue-700 to-blue-800 transition-all duration-300 group-hover:w-full"></span>
          </Link> */}

        </motion.p>

      </motion.div>

      {/* Stats */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        className="mb-10 sm:mb-14 rounded-2xl px-4 py-6 shadow-xl w-full max-w-6xl bg-white"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="flex flex-col items-center p-4 rounded-xl bg-gradient-to-r from-blue-800 via-blue-700 to-blue-800 backdrop-blur-sm shadow-md hover:shadow-lg border border-white/10 cursor-pointer"
            >
              <div className="mb-2">{item.icon}</div>
              <p className="text-xl md:text-2xl font-bold text-white mb-1">{item.value}</p>
              <p className="text-xs md:text-sm text-blue-100">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Features + JEF */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {/* Features */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{
                scale: 1.02,
                y: -4,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg flex flex-col overflow-hidden"
            >
              {/* Image */}
              <div className="h-44 sm:h-48 relative overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-out hover:scale-110"
                />
              </div>
              {/* Text */}
              <div className="p-5 flex flex-col items-center text-center">
                <FontAwesomeIcon icon={feature.icon} className="text-2xl sm:text-3xl text-[#0b3370] mb-2" />
                <h3 className="text-lg sm:text-xl font-semibold text-[#0b3370] mb-1">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* JEF Programs */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="relative"
        >
          <div className="bg-white rounded-xl shadow-xl overflow-hidden h-full flex flex-col">
            {/* Header */}
            <div className="p-6 sm:p-8 text-white bg-gradient-to-r from-[#0b3370] to-blue-500">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3">JEF</h2>
              <p className="mb-4 sm:mb-6 opacity-90 text-sm sm:text-base md:text-lg leading-relaxed">
                Our unique Jobs, Entrepreneurship, Family Business programs create tailored
                pathways for every career aspiration.
              </p>
            </div>
            {/* Programs */}
            <div className="p-6 sm:p-8 flex-1">
              {jefPrograms.map((program, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.2 }}
                  className="mb-5 last:mb-0 flex flex-col sm:flex-row items-start sm:items-center"
                >
                  <FontAwesomeIcon
                    icon={program.icon}
                    className="text-xl sm:text-2xl md:text-3xl text-[#0b3370] mr-3 mb-2 sm:mb-0"
                  />
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800">
                      {program.title}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base">{program.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            {/* Extra */}
            <div className="px-6 sm:px-8">
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
                <span className="font-semibold text-[#0b3370]">JEF</span> helps you build careers,
                launch ventures, and grow family businesses.
              </p>
            </div>
            {/* CTA */}
            <div className="p-6 sm:p-8 mt-auto">
              <div className="h-px bg-gray-100 mb-5"></div>
              <Link
                href="/jef"
                className="block text-center text-maroon font-medium py-3 px-6 rounded-lg transition-all duration-300 bg-gradient-to-r from-yellow-500 to-yellow-300 hover:from-yellow-600 hover:to-yellow-400 text-base md:text-lg"
              >
                Explore JEF →
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Final CTA */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        className="relative mt-12 sm:mt-16 w-full py-8 text-center bg-[radial-gradient(circle_at_center,_#e5e7eb_70%,_#ffffff_100%)]"
      >
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#0b3370] mb-4">
          Ready to Transform Your Future?
        </h2>
        <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
          <Link

            href="https://www.sonabusinessschool.com/online-application?inst_id=ZFSQSGGCPYXQ9589"
            target="_blank"
            className="inline-flex items-center px-5 sm:px-6 md:px-8 py-2 sm:py-3 text-maroon font-semibold rounded-full shadow-lg bg-yellow-400 hover:bg-yellow-500 transition-all"
          >
            Apply Now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2 animate-bounce"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
