"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, } from "lucide-react";
import { GraduationCap } from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

export default function ScholarshipWidget() {
    const [visible, setVisible] = useState(true);
    const [showWidget, setShowWidget] = useState(false);

    useEffect(() => {
        if (visible) {

            setTimeout(() => setShowWidget(true), 100);
        }
    }, [visible]);

    if (!visible) return null;

    return (
        <div className="fixed bottom-4 left-3 sm:bottom-6 sm:left-5 md:bottom-10 md:left-10 z-50">
            <AnimatePresence>
                {showWidget && (
                    <motion.div
                        key="scholarship-widget"
                        initial={{ opacity: 0, y: 40, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 40, scale: 0.9 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="relative"
                    >
                        {/* Neon Animated Border */}
                        <div className="absolute inset-0 rounded-2xl p-[2px] pointer-events-none">
                            <div className="neon-border absolute inset-0 rounded-2xl"></div>
                        </div>

                        {/* Widget Content */}
                        <div className="relative bg-black/60 backdrop-blur-md border border-yellow-400/50 rounded-2xl text-white px-5 sm:px-6 py-5 w-[92vw] sm:w-[480px] md:w-[580px] lg:w-[640px] shadow-[0_0_25px_rgba(255,255,0,0.3)]">
                            {/* Close Button */}
                            <button
                                onClick={() => setShowWidget(false)}
                                className="absolute top-2 right-3 text-gray-300 hover:text-yellow-400 transition"
                                aria-label="Close Scholarship Widget"
                            >
                                <X size={16} />
                            </button>

                            {/* Header */}
                            <h5 className="text-yellow-500 font-semibold mb-4 flex items-center gap-2 relative text-base sm:text-lg md:text-xl lg:text-2xl">
                                <GraduationCap
                                    size={22}
                                    className="text-yellow-500 flex-shrink-0"
                                />
                                <span className="relative font-semibold leading-tight">
                                    Earlybird Scholarships
                                    <motion.span
                                        className="absolute left-0 bottom-[-3px] h-[2px] bg-yellow-500 rounded-full"
                                        initial={{ width: 0, opacity: 0 }}
                                        animate={{ width: ["0%", "100%", "0%"], opacity: [0, 1, 0] }}
                                        transition={{
                                            duration: 3,
                                            ease: "easeInOut",
                                            repeat: Infinity,
                                            repeatDelay: 1.5,
                                        }}
                                    />
                                </span>
                            </h5>

                            {/* Scholarships Section */}
                            <div className="space-y-4 sm:space-y-3">
                                {/* Scholarship 1 */}
                                <div className="flex items-start sm:items-center gap-4 flex-wrap">
                                    <img
                                        src="/images/scholarship/scholarship.webp"
                                        alt="Scholarship 1"
                                        className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-xl object-cover border border-white/20 flex-shrink-0"
                                    />
                                    <div className="flex-1 text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] leading-snug">
                                        <div>
                                            Exclusive scholarships for students with{" "}
                                            <span className="italic font-extrabold bg-gradient-to-r from-yellow-600 to-yellow-400 bg-clip-text text-transparent">
                                                90%+
                                            </span>{" "}
                                            and{" "}
                                            <span className="italic font-extrabold bg-gradient-to-r from-yellow-600 to-yellow-400 bg-clip-text text-transparent">
                                                97%
                                            </span>
                                            <div className="mt-1.5 space-y-1 text-[14px] sm:text-[15px] md:text-[16px] leading-tight">
                                                <p>
                                                    <span className="text-yellow-400">
                                                        MAT (<span className="italic font-bold">85%+</span>):
                                                    </span>{" "}
                                                    ₹60,000
                                                </p>
                                                <p>
                                                    <span className="text-yellow-400">
                                                        TANCET (<span className="italic font-bold">90%+</span>):
                                                    </span>{" "}
                                                    ₹1,00,000
                                                </p>
                                                <p>
                                                    <span className="text-yellow-400">
                                                        TANCET (<span className="italic font-bold">97%+</span>):
                                                    </span>{" "}
                                                    90% Fee Waiver!{" "}
                                                    <Link
                                                        href="/news/scholarships-and-fee-concessions-2026-27"
                                                        className="text-yellow-400 hover:underline transition text-xs"
                                                    >
                                                        Read More...
                                                    </Link>
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* Border Animation */}
                        <style jsx>{`
          .neon-border {
            border: 2px solid transparent;
            border-radius: 16px;
            background: linear-gradient(
              90deg,
              rgba(255, 255, 0, 1),
              rgba(255, 255, 255, 0.2),
              rgba(255, 255, 0, 1)
            );
            background-size: 200% 200%;
            animation: borderMove 3s linear infinite;
            mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            mask-composite: exclude;
            -webkit-mask: linear-gradient(#fff 0 0) content-box,
              linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            padding: 2px;
          }

          @keyframes borderMove {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}</style>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>


    );
}
