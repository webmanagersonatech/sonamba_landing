"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";

export default function ImpactFacts() {
  const stats = [
    { id: 1, label: "Industry Connect", value: 100, suffix: "+" },
    { id: 2, label: "Recruiters", value: 250, suffix: "+" },
    { id: 3, label: "Managerial Exp. Alumnus", value: 2500, suffix: "+" },
    { id: 4, label: "CEO's Talks", value: 300, suffix: "+" },
  ];

  return (
    <section className="relative w-full text-white py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/banner/mba_slider_1.webp" // 👉 keep your MBA related image here in /public/images
          alt="MBA Background"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b3370]/90 to-[#091e40]/95"></div>
      </div>

      {/* Floating light glow (3D effect) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-1/4 left-1/3 w-72 h-72 bg-blue-400/30 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.3, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
      />

      <div className="container relative z-10">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-3xl md:text-4xl font-bold mb-14"
        >
          Impactful <span className="text-yellow-300">Facts</span>
        </motion.h2>

        {/* Grid Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl shadow-2xl bg-white/10 backdrop-blur-xl border border-white/20"
            >
              <h3 className="text-4xl md:text-5xl font-extrabold text-yellow-300 drop-shadow-lg">
                <CountUp end={stat.value} duration={3} />
                {stat.suffix}
              </h3>
              <p className="mt-3 text-lg font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
