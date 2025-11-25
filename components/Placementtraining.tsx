import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TrainingSection() {
  const [activeYear, setActiveYear] = useState("2020-21");

  const trainingData = {
    "2020-21": [
      { date: "20.7.2020", topic: "Simplification & Approximation", trainer: "R. Balaji" },
      { date: "21.7.2020", topic: "Number Properties 1", trainer: "R. Sakthi" },
      { date: "23.7.2020", topic: "Verbal & Communication", trainer: "C. Shahn Banu" },
      { date: "24.7.2020", topic: "Data Arrangement - Linear", trainer: "P.S. Nithin" },
    ],
    "2019-20": [
      { date: "10.5.2020", topic: "Number Properties", trainer: "In-house Trainers" },
      { date: "11.5.2020", topic: "Time / Speed / Distance", trainer: "In-house Trainers" },
      { date: "12.5.2020", topic: "Time & Work", trainer: "In-house Trainers" },
    ],
    "2018-19": [
      { date: "19.7.2018", topic: "NSE/BSE Certifications for Finance", trainer: "Prof. K. Srinivasan" },
      { date: "21.7.2018", topic: "Soft-skills", trainer: "Mr. Saravana Perumal" },
      { date: "28.7.2018", topic: "Basic Aptitude", trainer: "Mr. Kaviya Surya" },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-4 ">
      {/* Header */}

      <p className="text-center text-gray-600 text-sm sm:text-base md:text-lg dark:text-gray-400 max-w-3xl mx-auto mb-10">
        Placement Training is given to students in Quantitative Aptitude, Verbal Aptitude,
        Logical Reasoning, and Recruitment Essentials like Group Discussions,
        Resume Writing, and Personal Interviews.
      </p>

      {/* Year Tabs */}
      <div className="flex justify-center gap-4 mb-8">
        {Object.keys(trainingData).map((year) => (
          <button
            key={year}
            onClick={() => setActiveYear(year)}
            className={`relative rounded-full px-4 sm:px-6 py-1.5 sm:py-2 text-sm sm:text-base font-medium transition 
        ${activeYear === year
                ? "text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"}`}
            style={{ WebkitTapHighlightColor: "transparent" }}
          >
            {activeYear === year && (
              <motion.span
                layoutId="bubble-year"
                className="absolute inset-0 z-10 bg-maroon"
                style={{ borderRadius: 9999 }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-20">{year}</span>
          </button>
        ))}
      </div>


      {/* Sessions */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeYear}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          {trainingData[activeYear as keyof typeof trainingData].map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="flex items-start bg-white  p-5 rounded-xl shadow-md hover:shadow-lg"
            >
              <span className="text-maroon font-semibold w-28">{s.date}</span>
              <div className="flex-1">
                <p className="font-medium text-gray-800 ">{s.topic}</p>
                <p className="text-sm text-gray-500 ">{s.trainer}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
