"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
    Award,

} from "lucide-react";



export default function RankingPage() {
    const router = useRouter();
    const searchParams = useSearchParams();

    /** State & Refs */
    const [activeTab, setActiveTab] = useState("rank2024");
    const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
    const containerRef = useRef<HTMLDivElement | null>(null);

    /** Sections (Tabs) */
    const sections = [
        { id: "rank2026", title: "Ranking 2026", icon: Award },

        { id: "rank2025", title: "Ranking 2025", icon: Award },

        { id: "rank2024", title: "Ranking 2024", icon: Award },
        { id: "rank2023", title: "Ranking 2023", icon: Award },
        { id: "rank2020", title: "Ranking 2020", icon: Award },
        { id: "rank2019", title: "Ranking 2019", icon: Award },
        { id: "rank2017", title: "Ranking 2017", icon: Award },
        { id: "rank2016", title: "Ranking 2016", icon: Award },
        { id: "rank2015", title: "Ranking 2015", icon: Award },
        { id: "rank2014", title: "Ranking 2014", icon: Award },
        { id: "rank2013", title: "Ranking 2013", icon: Award },
    ];
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
        router.replace(`/ranking?tab=${tabId}`);
    };

    const currentSection = sections.find((s) => s.id === activeTab);
    useEffect(() => {
        if (!currentSection) return;

        const tabId = currentSection.id;

        // Document title
        document.title = `Ranking | ${currentSection.title} | Sona School of Business and Management`;

        // Meta description
        let metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
        if (!metaDesc) {
            metaDesc = document.createElement('meta');
            metaDesc.name = 'description';
            document.head.appendChild(metaDesc);
        }
        metaDesc.content = `Information about ${currentSection.title} rankings at Sona School of Business and Management.`;

        // Robots meta
        let metaRobots = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
        if (!metaRobots) {
            metaRobots = document.createElement('meta');
            metaRobots.name = 'robots';
            document.head.appendChild(metaRobots);
        }
        metaRobots.content = 'index, follow';

        // Canonical link
        let linkCanonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
        if (!linkCanonical) {
            linkCanonical = document.createElement('link');
            linkCanonical.rel = 'canonical';
            document.head.appendChild(linkCanonical);
        }
        linkCanonical.href = `https://www.sonabusinessschool.com/ranking?tab=${tabId}`;
    }, [currentSection]);


    return (
        <section className="w-full min-h-screen bg-gray-50 py-12 flex flex-col items-center">

            {/* ================= Banner ================= */}
            <div className="w-full relative">
                <AnimatePresence mode="wait">
                    <motion.img
                        key="static-banner"
                        src="/images/banner/ranking-banners/ranking.webp"
                        alt="Corporate Banner"
                        className="w-full h-auto max-h-96 object-contain"
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
                                {/* Home */}
                                <li className="inline-flex items-center">
                                    <Link
                                        href="/"
                                        className="hover:text-maroon cursor-pointer transition-colors text-white"
                                    >
                                        Home
                                    </Link>
                                    <span className="text-white mx-1">{">"}</span>
                                </li>

                                {/* About */}
                                <li className="inline-flex items-center">
                                    <Link
                                        href="/ranking"
                                        className="hover:text-maroon cursor-pointer transition-colors text-white"
                                    >
                                        Ranking
                                    </Link>
                                    <span className="text-white mx-1">{">"}</span>
                                </li>

                                {/* Current Section */}
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

                    {activeTab === "rank2026" && (
                        <motion.div
                            key="rank2026"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -40 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative bg-white  rounded-2xl p-8 sm:p-12 max-w-7xl mx-auto "
                        >




                            <div className="grid gap-8 sm:gap-10">


                                {/* Card 2 - OUTLOOK Magazine */}
                                <div className="flex flex-col sm:flex-row items-center sm:items-start bg-gray-50 border transition p-6 gap-6">
                                    {/* Logo */}
                                    <div className="flex-shrink-0">
                                        <img
                                            src="/images/ranking/outlook-2026.webp"
                                            alt="Outlook Magazine"
                                            className="w-32 sm:w-40 object-contain"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="text-center sm:text-left space-y-3">
                                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                                            Sona School of Business and Management has been ranked{" "}
                                            <span className="text-maroon font-bold">No. 1</span> among{" "}
                                            <span className="font-semibold">private affiliated colleges in Tamil Nadu</span>{" "}
                                            and <span className="text-maroon font-bold">No. 9</span> among{" "}
                                            <span className="font-semibold">private affiliated colleges across India</span>{" "}
                                            in the Outlook Magazine Rankings 2026.
                                        </p>

                                        <a
                                            href="https://www.outlookindia.com/education/private-affiliated-colleges"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block text-maroon hover:text-amber-600 font-medium text-sm transition"
                                        >
                                            ➝ Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {activeTab === "rank2025" && (
                        <motion.div
                            key="rank2025"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -40 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative bg-white  rounded-2xl p-8 sm:p-12 max-w-7xl mx-auto "
                        >

                            <div className="grid gap-8 sm:gap-10">

                                {/* Card 2 - OUTLOOK Magazine */}
                                <div className="flex flex-col sm:flex-row items-center sm:items-start bg-gray-50 border transition p-6 gap-6">
                                    {/* Logo */}
                                    <div className="flex-shrink-0">
                                        <img
                                            src="/images/ranking/outlook-2025.webp"
                                            alt="Outlook Magazine"
                                            className="w-32 sm:w-40 object-contain"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="text-center sm:text-left space-y-3">
                                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                                            Sona School of Business and Management has been ranked{" "}
                                            <span className="text-maroon font-bold">Top 9</span> among{" "}
                                            <span className="font-semibold">private B-Schools in the South Zone</span> by{" "}
                                            <span className="font-semibold">Outlook Magazine Rankings 2025</span>.
                                        </p>


                                        {/* <a
                                            href="https://www.outlookindia.com/education/private-affiliated-colleges"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block text-maroon hover:text-amber-600 font-medium text-sm transition"
                                        >
                                            ➝ Read More
                                        </a> */}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}


                    {activeTab === "rank2024" && (
                        <motion.div
                            key="rank2024"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -40 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative bg-white rounded-2xl p-10 sm:p-14 max-w-7xl mx-auto"
                        >
                            {/* Logo */}
                            <div className="flex justify-center mb-6">
                                <img
                                    src="/images/ranking/HER_logo.png"
                                    alt="Higher Education Review"
                                    className="w-36 sm:w-48 md:w-56 object-contain"

                                />
                            </div>

                            {/* Recognition Text */}
                            <p className="text-center text-lg sm:text-xl text-gray-700 font-serif leading-relaxed mb-6">
                                Honored among the{" "}
                                <span className="text-maroon font-bold">
                                    TOP 10 Promising MBA Colleges in India – 2024
                                </span>{" "}
                                by <span className="font-semibold">Higher Education Review</span>.
                            </p>

                            {/* Divider */}
                            <div className="h-1 w-24 bg-amber-400 mx-auto rounded-full mb-6"></div>

                            {/* Read More (opens PDF in new tab) */}
                            <div className="flex justify-center">
                                <a
                                    href="/images/ranking/HIGHER%20EDUCATION%20Review%20TOP%2010%20PROMISING.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-maroon hover:text-amber-600 font-medium text-base transition"
                                >
                                    ➝ Read More
                                </a>
                            </div>
                        </motion.div>
                    )}


                    {activeTab === "rank2023" && (
                        <motion.div
                            key="rank2023"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -40 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative bg-white  rounded-2xl p-8 sm:p-12 max-w-7xl mx-auto "
                        >




                            <div className="grid gap-8 sm:gap-10">
                                {/* Card 1 - OPEN Magazine */}
                                <div className="flex flex-col sm:flex-row items-center sm:items-start bg-gray-50  border transition p-6 gap-6">
                                    {/* Logo */}
                                    <div className="flex-shrink-0">
                                        <img
                                            src="/images/ranking/open-magazine-logo.jpg"
                                            alt="Open Magazine"
                                            className="w-32 sm:w-40 object-contain"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="text-center sm:text-left space-y-3">
                                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                                            Sona School of Business and Management has achieved{" "}
                                            <span className="text-maroon font-bold">8th rank</span> among{" "}
                                            <span className="font-semibold">Best B-Schools 2023</span> in{" "}
                                            <span className="font-semibold">Open Magazine</span> across Tamil Nadu.
                                        </p>
                                        <a
                                            href="/images/ranking/best-b-school-sona-mba-open-magazine-2023.pdf"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block text-maroon hover:text-amber-600 font-medium text-sm transition"
                                        >
                                            ➝ Read More
                                        </a>
                                    </div>
                                </div>

                                {/* Card 2 - OUTLOOK Magazine */}
                                <div className="flex flex-col sm:flex-row items-center sm:items-start bg-gray-50 border transition p-6 gap-6">
                                    {/* Logo */}
                                    <div className="flex-shrink-0">
                                        <img
                                            src="/images/ranking/outlook.jpg"
                                            alt="Outlook Magazine"
                                            className="w-32 sm:w-40 object-contain"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="text-center sm:text-left space-y-3">
                                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                                            Sona School of Business  and Management has achieved{" "}
                                            <span className="text-maroon font-bold">11th rank</span> among{" "}
                                            <span className="font-semibold">Best B-Schools 2023</span> in{" "}
                                            <span className="font-semibold">Outlook Magazine</span> across Tamil Nadu.
                                        </p>
                                        <a
                                            href="/images/ranking/Outlook-MBA-Ranking-2023.pdf"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block text-maroon hover:text-amber-600 font-medium text-sm transition"
                                        >
                                            ➝ Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {activeTab === "rank2020" && (
                        <motion.div
                            key="rank2020"
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 40 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="relative bg-white rounded-xl  p-6 sm:p-8 max-w-7xl mx-auto"
                        >
                            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-6">
                                {/* Logo in circle frame */}
                                <div className="flex-shrink-0">
                                    <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-lg border-4 border-amber-400 flex items-center justify-center bg-white shadow">
                                        <img
                                            src="/images/ranking/MU-2020.jpg"
                                            alt="MBA Universe"
                                            className="w-20 sm:w-28 object-contain"
                                        />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 text-center sm:text-left">
                                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
                                        Sona School of Business and Management –{" "}
                                        <span className="text-maroon font-bold">
                                            Among the top B-Schools in Tamil Nadu (2020)
                                        </span>{" "}
                                        as recognized by <span className="font-semibold">MBAUniverse.com</span>.
                                    </p>

                                    {/* Read More button */}
                                    <a
                                        href="https://www.mbauniverse.com/mba-ranking-mbauniverse"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block text-maroon hover:text-amber-600 font-medium text-sm transition"
                                    >
                                        ➝ Read More
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    )}
                    {activeTab === "rank2019" && (
                        <motion.div
                            key="rank2019"
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 40 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="relative bg-white rounded-xl p-6 sm:p-8 max-w-7xl mx-auto"
                        >
                            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-6">
                                {/* Logo in circle frame */}
                                <div className="flex-shrink-0">
                                    <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-lg border-4 border-amber-400 flex items-center justify-center bg-white shadow">
                                        <img
                                            src="https://img.freepik.com/free-vector/top-10-best-podium-award_23-2148750207.jpg?uid=R139790849&ga=GA1.1.898221838.1748329700&semt=ais_hybrid&w=740&q=80"
                                            alt="Business India 2019"
                                            className="w-20 sm:w-28 object-contain"
                                        />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 text-center sm:text-left">
                                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
                                        <span className="font-semibold">Sona School of Management</span>
                                        received an overall <span className="text-maroon font-bold">37th Rank</span> by
                                        Business India 2019 and was recognized for{" "}
                                        <span className="text-maroon font-bold">
                                            Outstanding B-school of Excellence in India
                                        </span>. It ranked <span className="font-semibold">12th in India</span>
                                        and <span className="font-semibold">5th in Tamil Nadu</span> by CSR,
                                        thanks to its excellent placement, living experience, IIM &
                                        top-institution faculty, corporate experts, strong research &
                                        development, and industry-immersed curriculum.
                                    </p>

                                    {/* Read More button */}
                                    {/* <a
                                        href="https://www.sonabusinessschool.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block text-maroon hover:text-amber-600 font-medium text-sm transition"
                                    >
                                        ➝ Read More
                                    </a> */}
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {activeTab === "rank2017" && (
                        <motion.div
                            key="rank2017"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="relative bg-white border-l-4 border-maroon rounded-lg p-6 max-w-7xl mx-auto"
                        >
                            <div className="flex flex-col sm:flex-row items-start gap-6">
                                {/* Left side image */}
                                <div className="flex-shrink-0">
                                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-md overflow-hidden shadow">
                                        <img
                                            src="/images/ranking/business-india-2016.jpg"
                                            alt="Business India 2017"
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold text-maroon mb-2">
                                        Business India Survey 2017
                                    </h3>
                                    <p className="text-gray-700 text-base leading-relaxed mb-4">
                                        <span className="font-semibold">Sona School of Management</span>
                                        was ranked <span className="text-maroon font-bold">38th among all B-Schools </span>
                                        across India in the Business India Survey 2017.
                                    </p>

                                    {/* Read More link */}
                                    <a
                                        href="/images/ranking/business-today-ranking-2017.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block text-sm font-medium text-maroon hover:text-amber-600 transition"
                                    >
                                        ➝ Read More
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {activeTab === "rank2016" && (
                        <motion.div
                            key="rank2016"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="relative bg-white border-l-4 border-maroon rounded-lg p-6 max-w-7xl mx-auto"
                        >
                            {/* Business Today */}
                            <div className="flex items-start gap-4 border-b pb-4">
                                <img
                                    src="/images/ranking/business-today-logo.jpg"
                                    alt="Business Today 2016"
                                    className="w-20 h-16 object-contain flex-shrink-0"
                                />
                                <div>
                                    <p className="text-gray-700 leading-relaxed">
                                        <span className="font-semibold">Sona School of Management</span>
                                        achieved <span className="text-maroon font-bold">54th Rank</span>
                                        among all B-Schools across India in
                                        <span className="font-semibold"> Business Today survey 2016</span>.
                                    </p>
                                    <a
                                        href="/images/ranking/business-today-ranking-2016.pdf"
                                        className="text-sm font-medium text-maroon hover:text-amber-600 transition"
                                        target="_blank"
                                    >
                                        ➝ Read More
                                    </a>
                                </div>
                            </div>

                            {/* Business India */}
                            <div className="flex items-start gap-4 border-b pb-4">
                                <img
                                    src="/images/ranking/business-india-2016.jpg"
                                    alt="Business India 2016"
                                    className="w-20 h-16 object-contain flex-shrink-0"
                                />
                                <div>
                                    <p className="text-gray-700 leading-relaxed">
                                        Ranked <span className="text-maroon font-bold">42nd</span> among all B-Schools
                                        across India in the <span className="font-semibold">Business India survey 2016</span>.
                                    </p>
                                    <a
                                        href="/images/ranking/Business%20India%20B%20School%20Survey%202016.pdf"
                                        className="text-sm font-medium text-maroon hover:text-amber-600 transition"
                                        target="_blank"
                                    >
                                        ➝ Read More
                                    </a>
                                </div>
                            </div>

                            {/* Competition Success Review */}
                            <div className="flex items-start gap-4 border-b pb-4">
                                <img
                                    src="/images/ranking/csr-2016.jpg"
                                    alt="CSR 2016"
                                    className="w-20 h-16 object-contain flex-shrink-0"
                                />
                                <div>
                                    <p className="text-gray-700 leading-relaxed">
                                        Ranked <span className="text-maroon font-bold">10th in India</span> under
                                        "Outstanding B-School of Excellence" and
                                        <span className="text-maroon font-bold"> 2nd in Tamil Nadu</span>
                                        by <span className="font-semibold">Competition Success Review 2016</span>.
                                    </p>
                                    <a
                                        href="/images/ranking/csr-survey-2016.pdf"
                                        className="text-sm font-medium text-maroon hover:text-amber-600 transition"
                                        target="_blank"
                                    >
                                        ➝ Read More
                                    </a>
                                </div>
                            </div>

                            {/* Silicon India */}
                            <div className="flex items-start gap-4 border-b pb-4">
                                <img
                                    src="/images/ranking/silicon-logo.jpg"
                                    alt="Silicon India 2016"
                                    className="w-20 h-16 object-contain flex-shrink-0"
                                />
                                <div>
                                    <p className="text-gray-700 leading-relaxed">
                                        Achieved <span className="text-maroon font-bold">22nd overall ranking</span>,
                                        <span className="font-semibold"> 10th in placement</span>,
                                        <span className="font-semibold"> 7th in ROI</span>, and emerged as the
                                        <span className="font-semibold"> 8th best B-school in South Zone</span> by
                                        <span className="font-semibold">Silicon India 2016</span>.
                                    </p>
                                    <a
                                        href="/images/ranking/B%20School%20%20Ranking%20Silicon%20India%20march%202016%20.pdf"
                                        className="text-sm font-medium text-maroon hover:text-amber-600 transition"
                                        target="_blank"
                                    >
                                        ➝ Read More
                                    </a>
                                </div>
                            </div>

                            {/* Higher Education Review */}
                            <div className="flex items-start gap-4">
                                <img
                                    src="/images/ranking/higher-education-review-2016.jpg"
                                    alt="Higher Education Review 2016"
                                    className="w-20 h-16 object-contain flex-shrink-0"
                                />
                                <div>
                                    <p className="text-gray-700 leading-relaxed">
                                        Ranked <span className="text-maroon font-bold">53rd among top B-schools</span>
                                        in India by <span className="font-semibold">Higher Education Review 2016</span>.
                                    </p>
                                    <a
                                        href="/images/ranking/B%20School%20-%20Higher%20Education%20April%202016%20Ranking.pdf"
                                        className="text-sm font-medium text-maroon hover:text-amber-600 transition"
                                        target="_blank"
                                    >
                                        ➝ Read More
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {activeTab === "rank2015" && (
                        <motion.div
                            key="rank2015"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="relative bg-white border-l-4 border-maroon rounded-lg p-6 max-w-7xl mx-auto"
                        >
                            {/* Business India */}
                            <div className="flex items-start gap-4 border-b pb-4">
                                <img
                                    src="/images/ranking/business-india.jpg"
                                    alt="Business India 2015"
                                    className="w-20 h-16 object-contain flex-shrink-0"
                                />
                                <div>
                                    <p className="text-gray-700 leading-relaxed">
                                        <span className="font-semibold">Sona School of Management</span>{" "}
                                        emerged as one of the{" "}
                                        <span className="text-maroon font-bold">Top B-Schools in India</span>{" "}
                                        – <span className="font-semibold">90th Rank</span> by Business World
                                        B-School Survey 2015.
                                    </p>
                                    <a
                                        href="/images/ranking/Business%20World%20B%20School%20Survey.pdf"
                                        className="text-sm font-medium text-maroon hover:text-amber-600 transition"
                                        target="_blank"
                                    >
                                        ➝ Read More
                                    </a>
                                </div>
                            </div>

                            {/* Chronicle B-School Survey */}
                            <div className="flex items-start gap-4 border-b pb-4">
                                <img
                                    src="/images/ranking/chronicle-b-school-survey-2015.jpg"
                                    alt="Chronicle 2015"
                                    className="w-20 h-16 object-contain flex-shrink-0"
                                />
                                <div>
                                    <p className="text-gray-700 leading-relaxed">
                                        One of the few B-Schools in Tamil Nadu with an{" "}
                                        <span className="font-semibold">'A' Category</span> rating given by{" "}
                                        <span className="font-semibold">Chronicle B-School Survey 2015</span>.
                                    </p>
                                    <a
                                        href="/images/ranking/chronicle-survey-2015-sona-school-mba.pdf"
                                        className="text-sm font-medium text-maroon hover:text-amber-600 transition"
                                        target="_blank"
                                    >
                                        ➝ Read More
                                    </a>
                                </div>
                            </div>

                            {/* Competition Success Review */}
                            <div className="flex items-center gap-4 border-b pb-4">
                                <img
                                    src="/images/ranking/competition-success-review.jpg"
                                    alt="CSR 2015"
                                    className="w-20 h-16 object-contain flex-shrink-0"
                                />
                                <div>
                                    <p className="text-gray-700 leading-relaxed">
                                        <span className="font-semibold">Competition Success Review</span> –{" "}
                                        <span className="text-maroon font-bold">4th Rank in Tamil Nadu</span>{" "}
                                        and <span className="text-maroon font-bold">25th Rank in India</span>{" "}
                                        as an{" "}
                                        <span className="font-semibold">
                                            Outstanding B-School of Excellence (2015)
                                        </span>
                                        .
                                    </p>
                                    {/* <a
                                        href="/images/ranking/competition-success-review-2015.html"
                                        className="text-sm font-medium text-maroon hover:text-amber-600 transition"
                                        target="_blank"
                                    >
                                        ➝ Read More
                                    </a> */}
                                </div>
                            </div>

                            {/* Business Today */}
                            <div className="flex items-start gap-4">
                                <img
                                    src="/images/ranking/business-tdoay.jpg"
                                    alt="Business Today 2015"
                                    className="w-20 h-16 object-contain flex-shrink-0"
                                />
                                <div>
                                    <p className="text-gray-700 leading-relaxed">
                                        <span className="font-semibold">SONA MBA</span> achieved{" "}
                                        <span className="text-maroon font-bold">109th Rank</span> in{" "}
                                        <span className="font-semibold">Business Today B-School Survey</span>{" "}
                                        – <span className="font-semibold">9th in Tamil Nadu</span> (2015).
                                    </p>
                                    <a
                                        href="https://www.businesstoday.in/bt-schools?year=2015"
                                        className="text-sm font-medium text-maroon hover:text-amber-600 transition"
                                        target="_blank"
                                    >
                                        ➝ Read More
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {activeTab === "rank2014" && (
                        <motion.div
                            key="rank2014"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="relative bg-white border-l-4 border-maroon rounded-lg p-6 max-w-7xl mx-auto"
                        >
                            {/* Outlook Survey */}
                            <div className="flex items-center gap-4 border-b pb-4">
                                <img
                                    src="/images/ranking/outlook.jpg"
                                    alt="Outlook 2014"
                                    className="w-20 h-16 object-contain flex-shrink-0"
                                />
                                <div>
                                    <p className="text-gray-700 leading-relaxed">
                                        In the All India survey conducted by{" "}
                                        <span className="font-semibold">Outlook</span>,{" "}
                                        <span className="font-semibold">Sona School of Management</span> achieved{" "}
                                        <span className="text-maroon font-bold">99th Rank</span> in{" "}
                                        <span className="font-semibold">Best B-School Survey 2014 (India)</span>.
                                    </p>
                                    {/* <a
                                        href="#"
                                        className="text-sm font-medium text-maroon hover:text-amber-600 transition"
                                        target="_blank"
                                    >
                                        ➝ Read More
                                    </a> */}
                                </div>
                            </div>

                            {/* Business Today */}
                            <div className="flex items-center gap-4 border-b pb-4">
                                <img
                                    src="/images/ranking/business-tdoay.jpg"
                                    alt="Business Today 2014"
                                    className="w-20 h-16 object-contain flex-shrink-0"
                                />
                                <div>
                                    <p className="text-gray-700 leading-relaxed">
                                        In the All India survey conducted by{" "}
                                        <span className="font-semibold">Business Today</span>,{" "}
                                        <span className="font-semibold">Sona School of Management</span> achieved{" "}
                                        <span className="text-maroon font-bold">112th Rank</span> in{" "}
                                        <span className="font-semibold">Best B-School Survey 2014 (India)</span>.
                                    </p>
                                    {/* <a
                                        href="#"
                                        className="text-sm font-medium text-maroon hover:text-amber-600 transition"
                                        target="_blank"
                                    >
                                        ➝ Read More
                                    </a> */}
                                </div>
                            </div>

                            {/* Competition Success Review */}
                            <div className="flex items-center gap-4 border-b pb-4">
                                <img
                                    src="/images/ranking/competition-success-review.jpg"
                                    alt="CSR 2014"
                                    className="w-20 h-16 object-contain flex-shrink-0"
                                />
                                <div>
                                    <p className="text-gray-700 leading-relaxed">
                                        <span className="font-semibold">Competition Success Review</span> –{" "}
                                        <span className="font-semibold">Sona School of Management</span> achieved{" "}
                                        <span className="text-maroon font-bold">74th Rank in Best Private B-School Survey 2014</span>{" "}
                                        in India and <span className="text-maroon font-bold">2nd Rank in Tamil Nadu</span>.
                                    </p>
                                    {/* <a
                                        href="#"
                                        className="text-sm font-medium text-maroon hover:text-amber-600 transition"
                                        target="_blank"
                                    >
                                        ➝ Read More
                                    </a> */}
                                </div>
                            </div>

                            {/* Career Connect */}
                            <div className="flex items-center gap-4 border-b pb-4">
                                <img
                                    src="/images/ranking/careerconnect.jpg"
                                    alt="Career Connect 2014"
                                    className="w-20 h-16 object-contain flex-shrink-0"
                                />
                                <div>
                                    <p className="text-gray-700 leading-relaxed">
                                        <span className="font-semibold">Career Connect</span> – Ranked among{" "}
                                        <span className="text-maroon font-bold">Top 55 Private B-Schools in India</span> (2014).
                                    </p>
                                    <a
                                        href="/images/ranking/careers-connect-ranking-2014.pdf"
                                        className="text-sm font-medium text-maroon hover:text-amber-600 transition"
                                        target="_blank"
                                    >
                                        ➝ Read More
                                    </a>
                                </div>
                            </div>

                            {/* AIMA */}
                            <div className="flex items-center gap-4">
                                <img
                                    src="/images/ranking/indian-management.jpg"
                                    alt="AIMA 2014"
                                    className="w-20 h-16 object-contain flex-shrink-0"
                                />
                                <div>
                                    <p className="text-gray-700 leading-relaxed">
                                        <span className="font-semibold">AIMA - Indian Management</span> rated{" "}
                                        <span className="text-maroon font-bold">‘A8’</span> in{" "}
                                        <span className="font-semibold">May 2014</span>.
                                    </p>
                                    <a
                                        href="/images/ranking/aiima-rankings-2014.pdf"
                                        className="text-sm font-medium text-maroon hover:text-amber-600 transition"
                                        target="_blank"
                                    >
                                        ➝ Read More
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    )}


                    {activeTab === "rank2013" && (
                        <motion.div
                            key="rank2013"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="relative bg-white border-l-4 border-maroon rounded-lg p-6 max-w-7xl mx-auto"
                        >
                            {/* Business India */}
                            <div className="flex items-center gap-4 border-b pb-4">
                                <img
                                    src="/images/ranking/business-india.jpg"
                                    alt="Business India 2013"
                                    className="w-20 h-16 object-contain flex-shrink-0"
                                />
                                <div>
                                    <p className="text-gray-700 leading-relaxed">
                                        <span className="font-semibold">Business India</span> – Secured{" "}
                                        <span className="text-maroon font-bold">A+ Rating</span> among{" "}
                                        <span className="font-semibold">B-Schools in India (2013)</span>.
                                    </p>
                                    {/* <a
                                        href="#"
                                        className="text-sm font-medium text-maroon hover:text-amber-600 transition"
                                        target="_blank"
                                    >
                                        ➝ Read More
                                    </a> */}
                                </div>
                            </div>

                            {/* Careers 360 */}
                            <div className="flex items-center gap-4 border-b pb-4">
                                <img
                                    src="/images/ranking/careers360.jpg"
                                    alt="Careers 360 2013"
                                    className="w-20 h-16 object-contain flex-shrink-0"
                                />
                                <div>
                                    <p className="text-gray-700 leading-relaxed">
                                        <span className="font-semibold">Careers 360</span> ranked{" "}
                                        <span className="text-maroon font-bold">36th in India</span> &{" "}
                                        <span className="text-maroon font-bold">AAA rating</span> in Tamil Nadu{" "}
                                        (Nov 2013).
                                    </p>
                                    <a
                                        href="/images/ranking/career-360-ranking-2013.pdf"
                                        className="text-sm font-medium text-maroon hover:text-amber-600 transition"
                                        target="_blank"
                                    >
                                        ➝ Read More
                                    </a>
                                </div>
                            </div>

                            {/* Competition Success Review */}
                            <div className="flex items-center gap-4 border-b pb-4">
                                <img
                                    src="/images/ranking/competition-success-review.jpg"
                                    alt="CSR 2013"
                                    className="w-20 h-16 object-contain flex-shrink-0"
                                />
                                <div>
                                    <p className="text-gray-700 leading-relaxed">
                                        <span className="font-semibold">Competition Success Review</span> ranked{" "}
                                        <span className="text-maroon font-bold">43rd in India</span>{" "}
                                        (Nov 2013).
                                    </p>
                                    {/* <a
                                        href="#"
                                        className="text-sm font-medium text-maroon hover:text-amber-600 transition"
                                        target="_blank"
                                    >
                                        ➝ Read More
                                    </a> */}
                                </div>
                            </div>

                            {/* Business Today */}
                            <div className="flex items-center gap-4 border-b pb-4">
                                <img
                                    src="/images/ranking/business-today-logo.jpg"
                                    alt="Business Today 2013"
                                    className="w-20 h-16 object-contain flex-shrink-0"
                                />
                                <div>
                                    <p></p>
                                    <p className="text-gray-700 leading-relaxed">
                                        <span className="font-semibold">Business Today</span> – Secured{" "}
                                        <span className="text-maroon font-bold">113th Rank</span> in{" "}
                                        <span className="font-semibold">All India B-School Survey 2013</span>.
                                    </p>
                                    {/* <a
                                        href="#"
                                        className="text-sm font-medium text-maroon hover:text-amber-600 transition"
                                        target="_blank"
                                    >
                                        ➝ Read More
                                    </a> */}
                                </div>
                            </div>

                            {/* The Week */}
                            <div className="flex items-center gap-4 border-b pb-4">
                                <img
                                    src="/images/ranking/the-week.jpg"
                                    alt="The Week 2013"
                                    className="w-20 h-16 object-contain flex-shrink-0"
                                />
                                <div>
                                    <p className="text-gray-700 leading-relaxed">
                                        <span className="font-semibold">The Week</span> – Ranked{" "}
                                        <span className="text-maroon font-bold">11th in Tamil Nadu</span>{" "}
                                        (Nov 2013).
                                    </p>
                                    {/* <a
                                        href="#"
                                        className="text-sm font-medium text-maroon hover:text-amber-600 transition"
                                        target="_blank"
                                    >
                                        ➝ Read More
                                    </a> */}
                                </div>
                            </div>

                            {/* Silicon India */}
                            <div className="flex items-center gap-4 border-b pb-4">
                                <img
                                    src="/images/ranking/silicon-logo.jpg"
                                    alt="Silicon India 2013"
                                    className="w-20 h-16 object-contain flex-shrink-0"
                                />
                                <div>
                                    <p className="text-gray-700 leading-relaxed">
                                        <span className="font-semibold">Silicon India</span> B-School Survey 2013 –{" "}
                                        <span className="text-maroon font-bold">22nd in India</span> and{" "}
                                        <span className="text-maroon font-bold">3rd in Tamil Nadu</span>.
                                    </p>
                                    {/* <a
                                        href="#"
                                        className="text-sm font-medium text-maroon hover:text-amber-600 transition"
                                        target="_blank"
                                    >
                                        ➝ Read More
                                    </a> */}
                                </div>
                            </div>

                            {/* AIMA */}
                            <div className="flex items-center gap-4">
                                <img
                                    src="/images/ranking/indian-management.jpg"
                                    alt="AIMA 2013"
                                    className="w-20 h-16 object-contain flex-shrink-0"
                                />
                                <div>
                                    <p className="text-gray-700 leading-relaxed">
                                        <span className="font-semibold">AIMA (All India Management Association)</span> –{" "}
                                        Indian Management Magazine Survey 2013 ranked{" "}
                                        <span className="font-semibold">Sona College of Technology</span> in{" "}
                                        <span className="text-maroon font-bold">B1 Category</span>, scoring high in{" "}
                                        <span className="font-semibold">Admissions, Placements, and Scale of Operations</span>.
                                    </p>
                                    {/* <a
                                        href="#"
                                        className="text-sm font-medium text-maroon hover:text-amber-600 transition"
                                        target="_blank"
                                    >
                                        ➝ Read More
                                    </a> */}
                                </div>
                            </div>
                        </motion.div>
                    )}



                </AnimatePresence>
            </div>
        </section>
    );
}
