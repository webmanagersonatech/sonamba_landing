"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Events from "../../components/Eventscontent";
import {
    MdEventAvailable,
    MdUpcoming,
} from "react-icons/md";


export default function EventcontentPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    /** State & Refs */
    const [activeTab, setActiveTab] = useState("events");

    const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
    const containerRef = useRef<HTMLDivElement | null>(null);

    /** Sections (Tabs) */
    const sections = [

        { id: "events", title: "Events", icon: MdEventAvailable },
        { id: "upcomingevents", title: "Upcoming Events", icon: MdUpcoming },

    ];

    /** Banner Images */
    const tabImages: Record<string, string> = {
        events:
            "/images/banner/news-event-banners/upcoming-event.webp",
        upcomingevents:
            "/images/banner/news-event-banners/upcoming-event.webp",

    };


    /** Load tab from URL */
    useEffect(() => {
        const tab = searchParams.get("tab");
        if (tab && sections.some((s) => s.id === tab.toLowerCase())) {
            setActiveTab(tab.toLowerCase());
        }
    }, [searchParams]);



    /** Tab change handler */
    const handleTabChange = (tabId: string) => {
        setActiveTab(tabId);
        router.replace(`/events?tab=${tabId}`);
    };

    const currentSection = sections.find((s) => s.id === activeTab);


    // 🌐 SEO + Title Effect
    useEffect(() => {
        const pageTitle = currentSection
            ? `Events | ${currentSection.title} | Sona School of Business and Management`
            : "Sona School of Business and Management";

        // ✅ Set dynamic page title
        document.title = pageTitle;

        // ✅ Set or update meta description
        let metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
        if (!metaDesc) {
            metaDesc = document.createElement("meta");
            metaDesc.name = "description";
            document.head.appendChild(metaDesc);
        }
        metaDesc.content = currentSection
            ? `Discover ${currentSection.title} and other exciting events at Sona School of Business and Management.`
            : "Stay updated with the latest events and happenings at Sona School of Business and Management.";

        // ✅ Add canonical URL for SEO
        let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
        if (!canonical) {
            canonical = document.createElement("link");
            canonical.rel = "canonical";
            document.head.appendChild(canonical);
        }
        canonical.href = `https://www.sonabusinessschool.com/events?tab=${currentSection?.id || "overview"}`;

        // ✅ Ensure robots meta tag exists
        let robots = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
        if (!robots) {
            robots = document.createElement("meta");
            robots.name = "robots";
            document.head.appendChild(robots);
        }
        robots.content = "index, follow";
    }, [currentSection]);


    return (
        <section className="w-full min-h-screen bg-gray-50 py-12 flex flex-col items-center">
            {/* ================= Banner ================= */}
            <div className="w-full relative">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={tabImages[activeTab]}
                        src={tabImages[activeTab] || ""}
                        alt="Corporate Banner"
                        className="w-full h-56 sm:h-64 md:h-80 lg:h-96 object-cover"
                        initial={{ x: "-100%", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: "100%", opacity: 0 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                    />
                </AnimatePresence>

                {/* Banner Text & Breadcrumb */}
                <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 w-full max-w-7xl px-4 sm:px-6">
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white drop-shadow-lg flex items-center gap-2">
                        {currentSection?.title}
                    </h1>

                    <div className="mt-3 sm:mt-4 w-full">
                        <nav
                            className="flex flex-wrap text-white text-xs sm:text-sm md:text-base"
                            aria-label="Breadcrumb"
                        >
                            <ol className="inline-flex flex-wrap items-center space-x-1 sm:space-x-2">
                                <li className="inline-flex items-center">
                                    <Link
                                        href="/"
                                        className="hover:text-maroon cursor-pointer transition-colors text-white"
                                    >
                                        Home
                                    </Link>
                                    <span className="text-white mx-1">{">"}</span>
                                </li>

                                <li className="inline-flex items-center">
                                    <Link
                                        href="/events"
                                        className="hover:text-maroon cursor-pointer transition-colors text-white"
                                    >
                                        Events
                                    </Link>
                                    <span className="text-white mx-1">{">"}</span>
                                </li>

                                <li className="inline-flex items-center text-yellow-500 font-semibold">
                                    {currentSection?.title}
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>

            {/* ================= Tabs ================= */}
            <div className="w-full relative border-b border-gray-300 mt-6">
                <div
                    ref={containerRef}
                    className="relative flex flex-wrap justify-center gap-2 sm:gap-4 w-full max-w-7xl mx-auto px-2 sm:px-0"
                >
                    {sections.map((sec, index) => {
                        const Icon = sec.icon;
                        const isActive = activeTab === sec.id;

                        return (
                            <button
                                key={sec.id}
                                ref={(el) => {
                                    tabsRef.current[index] = el;
                                }}
                                onClick={() => handleTabChange(sec.id)}
                                className={`relative flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base font-medium rounded-md transition-all duration-500 transform ${isActive
                                    ? "text-maroon scale-105"
                                    : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                                    }`}
                            >
                                {/* Icon */}
                                <Icon
                                    className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-500 ${isActive ? "text-maroon" : "text-gray-500"
                                        }`}
                                />

                                {/* Text wrapper with underline + arrow */}
                                <span className="relative flex flex-col items-center">
                                    <span>{sec.title}</span>

                                    {/* Underline */}
                                    <span
                                        className={`block h-0.5 bg-maroon transition-all duration-500 rounded-full ${isActive ? "w-full" : "w-0"
                                            }`}
                                    ></span>

                                    {/* Arrow */}
                                    {isActive && (
                                        <span
                                            className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-maroon -mt-px"
                                        ></span>
                                    )}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* ================= Content Section ================= */}
            <div className="w-full max-w-7xl mx-auto mt-8 px-4 sm:px-6 lg:px-8">
                <AnimatePresence mode="wait">

                    {activeTab === "events" && (
                        <Events title={activeTab} />
                    )}
                    {activeTab === "upcomingevents" && (
                        <Events title={activeTab} />
                    )}

                </AnimatePresence>
            </div>
        </section>
    );
}