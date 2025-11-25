"use client";

import { useState, useEffect } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaClipboardCheck,
  FaTimes,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingSidebar() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [active, setActive] = useState<string | null>(null);
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const items = [
    {
      id: "apply",
      icon: FaClipboardCheck,
      label: "Apply Online",
      href: "https://www.sonabusinessschool.com/online-application?inst_id=ZFSQSGGCPYXQ9589",
    },
    {
      id: "phone",
      icon: FaPhone,
      label: "+91 9900016900",
      href: "tel:+9900016900",
    },
    {
      id: "email",
      icon: FaEnvelope,
      label: "admission@sonabusinessschool.com",
      href: "mailto:admission@sonabusinessschool.com",
    },
    {
      id: "whatsapp",
      icon: FaWhatsapp,
      label: "WhatsApp",
      href: "https://wa.me/9900016900",
    },
  ];

  // SSR-safe mounting and mobile detection
  useEffect(() => {
    setMounted(true);

    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!mounted) return null; // prevent SSR errors

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ x: 120, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 120, opacity: 0 }}
          transition={{ duration: 0.15, ease: "easeOut" }} // faster
          className="fixed top-1/3 right-0 z-50 flex flex-col"
        >
          <div className="relative flex flex-col bg-[#0b3370] rounded-l-xl p-2 max-h-[80vh] overflow-visible">
            {/* Close Button */}
            <button
              onClick={() => setVisible(false)}
              className="absolute -top-4 -left-4 w-10 h-10 flex items-center justify-center
                         rounded-full bg-yellow-500 text-[#0b3370] shadow-lg hover:bg-white transition z-20"
              aria-label="Close Sidebar"
            >
              <FaTimes className="text-lg sm:text-base" />
            </button>

            {/* Vertical Banner */}
            <div className="text-yellow-500 font-bold px-2 py-3 rotate-180 mt-10">
              <span className="[writing-mode:vertical-rl] tracking-widest text-xs sm:text-sm md:text-base">
                ADMISSIONS OPEN 2026-27
              </span>
            </div>

            {/* Sidebar Items */}
            {items.map(({ id, icon: Icon, label, href }) => (
              <div
                key={id}
                className="relative flex items-end mt-3"
                onMouseEnter={() => !isMobile && setHovered(id)}
                onMouseLeave={() => !isMobile && setHovered(null)}
              >
                {/* Tooltip */}
                <AnimatePresence>
                  {(hovered === id || active === id) && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15 }} // faster tooltip
                      className="absolute right-12 bg-yellow-500 text-[#0b3370] px-3 py-2 rounded-l-lg shadow 
                                 text-xs sm:text-sm font-medium whitespace-nowrap"
                    >
                      {label}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Icon Button */}
                <button
                  aria-label={label}
                  className="text-white p-2 sm:p-2.5 md:p-3 rounded-full 
                             hover:bg-yellow-500 hover:text-[#0b3370] transition"
                  onClick={() => {
                    if (
                      id === "apply" ||
                      id === "phone" ||
                      id === "email" ||
                      id === "whatsapp"
                    ) {
                      window.open(href, "_blank");
                    } else if (isMobile) {
                      setActive(active === id ? null : id);
                    }
                  }}
                >
                  <Icon className="text-base md:text-lg lg:text-xl" />
                </button>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
