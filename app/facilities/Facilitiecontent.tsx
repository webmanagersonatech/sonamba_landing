"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { MdPeople, MdLibraryBooks, MdMusicNote, MdSportsSoccer } from "react-icons/md";
import { Laptop, School } from "lucide-react";
import { FaDesktop, FaLaptop, FaFileAlt, FaCogs, FaChalkboardTeacher, FaBookOpen } from "react-icons/fa";
import DiamondStar from "../../components/DiamondStar";
import Link from "next/link";

export default function FacilitiePage() {
    const router = useRouter();
    const searchParams = useSearchParams();

    /** State & Refs */
    const [activeTab, setActiveTab] = useState("computingfacilities");
    const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [selectedImage, setSelectedImage] = useState<any>(null);

    const images = [
        "/images/sports/swimming.webp",
        "/images/sports/gym.webp",
        "/images/sports/sport.webp",
    ];
    /** Sections (Tabs) */
    const sections = [
        {
            id: "computingfacilities",
            title: "Computing Facility",
            icon: Laptop, // 💻
        },
        {
            id: "blackboard",
            title: "Blackboard",
            icon: School, // 🏫
        },
        {
            id: "sports",
            title: "Sports",
            icon: MdSportsSoccer, // ⚽
        },
        {
            id: "hostel",
            title: "Hostel",
            icon: MdPeople, // 👥
        },
        {
            id: "musicclub",
            title: "Music Club",
            icon: MdMusicNote, // 🎵
        },
        {
            id: "library",
            title: "Library",
            icon: MdLibraryBooks, // 📚
        },
    ];

  

    /** Banner Images */
    const tabImages: Record<string, string> = {
        computingfacilities:
            "/images/banner/facilities-banners/computing.webp",
        blackboard:
            "/images/banner/facilities-banners/blackborad.webp",
        sports:
            "/images/banner/facilities-banners/sports.webp",
        hostel:
            "/images/banner/facilities-banners/hostel.webp",
        musicclub: "/images/banner/facilities-banners/music.jpg",
        library: "/images/banner/facilities-banners/library.webp",

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
        router.replace(`/facilities?tab=${tabId}`);
    };

    const currentSection = sections.find((s) => s.id === activeTab);

    useEffect(() => {
        if (!currentSection) return;

        const tabId = currentSection.id;

        // Title
        document.title = `Facilities | ${currentSection.title} | Sona School of Business and Management`;

        // Meta description
        let metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
        if (!metaDesc) {
            metaDesc = document.createElement('meta');
            metaDesc.name = "description";
            document.head.appendChild(metaDesc);
        }
        metaDesc.content = `Details about ${currentSection.title} at Sona School of Business and Management.`;

        // Robots
        let metaRobots = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
        if (!metaRobots) {
            metaRobots = document.createElement('meta');
            metaRobots.name = "robots";
            document.head.appendChild(metaRobots);
        }
        metaRobots.content = "index, follow";

        // Canonical
        let linkCanonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
        if (!linkCanonical) {
            linkCanonical = document.createElement('link');
            linkCanonical.rel = "canonical";
            document.head.appendChild(linkCanonical);
        }
        linkCanonical.href = `https://www.sonabusinessschool.com/facilities/?tab=${tabId}`;
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
                                        href="/facilities"
                                        className="hover:text-maroon cursor-pointer transition-colors text-white"
                                    >
                                        Facilities
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
                    {activeTab === "computingfacilities" && (
                        <motion.div
                            key="computingfacilities"
                            initial={{ x: "-100%", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: "100%", opacity: 0 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className="relative bg-white rounded-2xl p-6 md:p-10 max-w-7xl mx-auto text-gray-800"
                        >


                            {/* MBA Computer Lab */}
                            <h3 className="text-xl md:text-2xl font-semibold text-maroon border-b border-gray-300 pb-2 mb-6">
                                MBA Computer Lab – 1
                            </h3>

                            {/* Hardware Section */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                {/* Server System */}
                                <div className="bg-gray-50 p-6  shadow hover:shadow-xl transition transform hover:-translate-y-1">
                                    <div className="flex items-center gap-2 mb-4">
                                        <FaDesktop className="text-2xl text-maroon" />
                                        <h4 className="font-semibold text-gray-700 uppercase">
                                            Server System Configuration - 1 No
                                        </h4>
                                    </div>
                                    <ul className="space-y-1 text-gray-600">
                                        <li className="flex items-start gap-2">
                                            <DiamondStar className="h-4 w-4 text-maroon/70  mt-1" />
                                            Lenovo Think Server TD350
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <DiamondStar className="h-4 w-4 text-maroon/70 mt-1" />
                                            Intel Xeon E5 (Octa Core)
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <DiamondStar className="h-4 w-4 text-maroon/70 mt-1" />
                                            1866Mhz 1 X 8 GB 1 X 1 TB SATA 7200 RPM 3.5”
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <DiamondStar className="h-4 w-4 text-maroon/70  mt-1" />
                                            RAID 0, 1, 10
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <DiamondStar className="h-4 w-4 text-maroon/70  mt-1" />
                                            SL. No : PCONGDCB
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <DiamondStar className="h-4 w-4 text-maroon/70  mt-1" />
                                            Lenovo E2054 – 19.5” Monitor
                                        </li>
                                    </ul>
                                </div>

                                {/* System Configuration */}
                                <div className="bg-gray-50 p-6  shadow hover:shadow-xl transition transform hover:-translate-y-1">
                                    <div className="flex items-center gap-2 mb-4">
                                        <FaLaptop className="text-2xl text-maroon" />
                                        <h4 className="font-semibold text-gray-700 uppercase">
                                            System Configuration - 16 Nos
                                        </h4>
                                    </div>
                                    <ul className="space-y-1 text-gray-600">
                                        {[
                                            "Dell OptiPlex 7070 SFF X CTO",
                                            "Intel Core i5-9500 @3.00 GHz",
                                            "8 GB DDR4 RAM @2666 MHz",
                                            "1 TB HDD",
                                            '19.5" E2016 TFT Monitor',
                                            "USB Keyboard & Mouse",
                                            "Windows 10 Pro 64 Bit",
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-2">
                                                <DiamondStar className="h-4 w-4 text-maroon/70  mt-1" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Software Section */}
                            <h3 className="text-xl md:text-2xl font-semibold text-maroon border-b border-gray-300 pb-2 mb-6">
                                Software Details
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* System Software */}
                                <div className="bg-gray-50 p-6  shadow hover:shadow-xl transition transform hover:-translate-y-1">
                                    <div className="flex items-center gap-2 mb-4">
                                        <FaLaptop className="text-2xl text-maroon" />
                                        <h4 className="font-semibold text-gray-700 uppercase">System Software</h4>
                                    </div>
                                    <ul className="space-y-1 text-gray-600">
                                        <li className="flex items-start gap-2">
                                            <DiamondStar className="h-4 w-4 text-maroon/70  mt-1" />
                                            Windows 10 Pro
                                        </li>
                                    </ul>
                                </div>

                                {/* Office Automation */}
                                <div className="bg-gray-50 p-6  shadow hover:shadow-xl transition transform hover:-translate-y-1">
                                    <div className="flex items-center gap-2 mb-4">
                                        <FaFileAlt className="text-2xl text-maroon" />
                                        <h4 className="font-semibold text-gray-700 uppercase">
                                            Office Automation Package
                                        </h4>
                                    </div>
                                    <ul className="space-y-1 text-gray-600">
                                        <li className="flex items-start gap-2">
                                            <DiamondStar className="h-4 w-4 text-maroon/70  mt-1" />
                                            Office 365
                                        </li>
                                    </ul>
                                </div>

                                {/* Advanced Software */}
                                <div className="bg-gray-50 p-6 shadow  hover:shadow-xl transition transform hover:-translate-y-1 md:col-span-2">
                                    <div className="flex items-center gap-2 mb-4">
                                        <FaCogs className="text-2xl text-maroon" />
                                        <h4 className="font-semibold text-gray-700 uppercase">
                                            Advanced Software Packages
                                        </h4>
                                    </div>
                                    <ul className="space-y-1 text-gray-600">
                                        <li className="flex items-start gap-2">
                                            <DiamondStar className="h-4 w-4 text-maroon/70  mt-1" />
                                            IBM SPSS Statistics Base – 28
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <DiamondStar className="h-4 w-4 text-maroon/70  mt-1" />
                                            Centre for Monitoring Indian Economy CMIE Online Data Base (PROWESS)
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {activeTab === "blackboard" && (
                        <motion.div
                            key="blackboard"
                            initial={{ x: "-100%", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: "100%", opacity: 0 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className="relative bg-white rounded-2xl p-6 sm:p-8 md:p-10 max-w-7xl mx-auto text-gray-800 overflow-hidden"
                        >
                            {/* Description */}
                            <div className="space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed text-justify">
                                <p className=" text-justify">

                                    SBM is one of the pioneering b-schools to use an effective,
                                    interactive LMS <span className="font-semibold">Blackboard (BB)</span>.
                                    It enables students and faculty to share knowledge through PPTs,
                                    videos, research papers, and e-books. Blackboard also supports
                                    discussion forums, competitions, group activities, and class
                                    engagement. Assessments like quizzes and tests are instantly graded
                                    with automatic marking facilities.
                                </p>

                                <p className="flex items-start gap-3">
                                    <FaBookOpen className="text-maroon text-base sm:text-lg mt-1 flex-shrink-0" />
                                    BB enhances student enthusiasm for academic activities and provides
                                    tracking and monitoring features. Faculty can evaluate performance
                                    using course activity overviews, while assignments are checked by
                                    built-in plagiarism detection, ensuring quality and authenticity.
                                </p>
                            </div>

                            {/* Highlights / Key Points */}
                            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                {[
                                    "Interactive LMS for students and faculty",
                                    "Discussion forums and group activities",
                                    "Automatic marking and grading",
                                    "Plagiarism detection for assignments",
                                ].map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 + idx * 0.1 }}
                                        className="flex items-start gap-3 bg-gray-50 hover:bg-gray-100 p-4 shadow-sm transition"
                                    >
                                        <DiamondStar className="h-5 w-5 text-maroon/70  mt-1 flex-shrink-0" />
                                        <p className="text-gray-700 text-sm sm:text-base font-medium">
                                            {item}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}


                    {activeTab === "sports" && (
                        <motion.div
                            key="sports"
                            initial={{ x: "-100%", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: "100%", opacity: 0 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className="relative bg-white rounded-2xl p-6 sm:p-8 md:p-10 max-w-7xl mx-auto text-gray-800 overflow-hidden"
                        >
                            {/* Header */}
                            <motion.h2
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-2xl sm:text-3xl font-bold text-maroon mb-4 sm:mb-6"
                            >
                                Sports & Fitness Facilities
                            </motion.h2>

                            {/* Two Column Layout */}
                            <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-start">
                                {/* Left Column */}
                                <div className="space-y-6">
                                    <p className="text-sm sm:text-base leading-relaxed">
                                        No man is an island. No student can achieve excellence without an
                                        all-round personality. Our college encourages{" "}
                                        <span className="font-semibold text-maroon">
                                            sports, music, and extracurricular activities
                                        </span>{" "}
                                        to develop students' skills. We provide modern fitness centers, sports
                                        equipment, and musical instruments.
                                    </p>

                                    {/* Outdoors */}
                                    <div>
                                        <h3 className="text-lg sm:text-xl font-semibold mb-1 text-gray-900">
                                            Outdoors Games
                                        </h3>
                                        <p className="text-gray-600 text-sm sm:text-base">
                                            Football, Hockey, Tennis, Cricket, Basketball, and Badminton.
                                        </p>
                                    </div>

                                    {/* Indoors */}
                                    <div>
                                        <h3 className="text-lg sm:text-xl font-semibold mb-1 text-gray-900">
                                            Indoors Games
                                        </h3>
                                        <p className="text-gray-600 text-sm sm:text-base">
                                            Table Tennis, Carom, Chess, Martial Arts (Karate, Silambam), and
                                            Yoga classes.
                                        </p>
                                    </div>



                                    <div className="grid sm:grid-cols-2 gap-4">
                                        {/* Common Gym */}
                                        <div className="bg-gray-50 p-3 sm:p-4 shadow">
                                            <h4 className="font-semibold text-sm sm:text-base mb-2">
                                                Common Gym Facilities
                                            </h4>
                                            <ul className="space-y-2 text-gray-600 text-xs sm:text-sm">
                                                {[
                                                    "Power Gym Cycle",
                                                    "Twister",
                                                    "Multi Exer Bench",
                                                    "Push-up Bar",
                                                    "Squat Stand",
                                                    "Rowing Machine",
                                                    "Dumbbells (Steel)",
                                                    "Power Stepper",
                                                    "Tread Mill (Manual)",
                                                ].map((item, i) => (
                                                    <li key={i} className="flex items-start gap-2">
                                                        <DiamondStar className="h-4 w-4 text-maroon/70 mt-1" />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Girl Students */}
                                        <div className="bg-gray-50 p-3 sm:p-4 shadow">
                                            <h4 className="font-semibold text-sm sm:text-base mb-2">
                                                For Girl Students
                                            </h4>
                                            <ul className="space-y-2 text-gray-600 text-xs sm:text-sm">
                                                {["Power Gym Cycle", "Twister", "Power Stepper"].map((item, i) => (
                                                    <li key={i} className="flex items-start gap-2">
                                                        <DiamondStar className="h-4 w-4 text-maroon/70 mt-1" />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                </div>

                                {/* Right Column (Images) */}
                                <>
                                    {/* Collage Grid */}
                                    <div className="grid grid-cols-6 grid-rows-2 gap-3 h-full">
                                        {images.map((src, i) => {
                                            // Define custom spans for collage effect
                                            let spanClasses = "";
                                            if (i === 0) spanClasses = "col-span-4 row-span-2"; // big image
                                            if (i === 1) spanClasses = "col-span-2 row-span-1"; // top-right
                                            if (i === 2) spanClasses = "col-span-2 row-span-1"; // bottom-right

                                            return (
                                                <motion.img
                                                    key={i}
                                                    src={src}
                                                    alt={`Sports ${i + 1}`}
                                                    className={`w-full h-full object-cover cursor-pointer ${spanClasses}`}
                                                    initial={{ opacity: 0, scale: 0.95 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: 0.2 + i * 0.2 }}
                                                    onClick={() => setSelectedImage(src)}
                                                />
                                            );
                                        })}
                                    </div>

                                    {/* Lightbox Popup */}
                                    <AnimatePresence>
                                        {selectedImage && (
                                            <motion.div
                                                className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                onClick={() => setSelectedImage(null)}
                                            >
                                                <motion.img
                                                    src={selectedImage}
                                                    alt="Full view"
                                                    className="max-h-full max-w-full "
                                                    initial={{ scale: 0.8, opacity: 0 }}
                                                    animate={{ scale: 1, opacity: 1 }}
                                                    exit={{ scale: 0.8, opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    onClick={(e) => e.stopPropagation()}
                                                />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </>




                            </div>
                        </motion.div>
                    )}

                    {activeTab === "hostel" && (
                        <motion.div
                            key="hostel"
                            initial={{ x: "-100%", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: "100%", opacity: 0 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className="relative bg-white rounded-2xl p-6 sm:p-8 md:p-10 max-w-7xl mx-auto text-gray-800 overflow-hidden"
                        >
                            {/* Title */}
                            <motion.h2
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-2xl sm:text-3xl font-bold text-maroon mb-6"
                            >
                                Hostel Facilities
                            </motion.h2>

                            {/* Key Points */}
                            <div className="space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
                                <div className="flex items-start gap-3">
                                    <DiamondStar className="h-4 w-4 text-maroon mt-1 flex-shrink-0" />
                                    <p>
                                        Room and board are available for boys and girls in separate hostels. Each room has a{" "}
                                        <span className="font-semibold">table, chair, cot, and fan</span>, ensuring comfort.
                                    </p>
                                </div>

                                <div className="flex items-start gap-3">
                                    <DiamondStar className="h-4 w-4 text-maroon mt-1 flex-shrink-0" />
                                    <p>
                                        We care for your <span className="font-semibold">on-campus living</span>. A new international hostel complex is coming up with an investment of ₹20 million, in addition to the existing facilities, including a{" "}
                                        <span className="font-semibold">world-class swimming pool</span>.
                                    </p>
                                </div>

                                <div className="flex items-start gap-3">
                                    <DiamondStar className="h-4 w-4 text-maroon mt-1 flex-shrink-0" />
                                    <p>
                                        A dedicated staff of Warden, Deputy Warden, Assistant Warden, Residential Tutors, and Mess Representatives provide{" "}
                                        <span className="font-semibold">round-the-clock support</span>.
                                    </p>
                                </div>
                            </div>




                            {/* Image Gallery */}
                            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {[
                                    "/images/hostel/hostel.webp",
                                    "/images/hostel/hostel-2.webp",
                                    "/images/hostel/hostel-3.webp",
                                ].map((src, idx) => (
                                    <motion.img
                                        key={idx}
                                        src={src}
                                        alt={`Hostel ${idx + 1}`}
                                        className=" shadow-md w-full h-48 sm:h-56 md:h-64 object-cover"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.3 + idx * 0.2 }}
                                    />
                                ))}
                            </div>

                            <div className="py-8 px-4 mx-auto sm:py-16 lg:px-6 bg-gray-100 mt-8">
                                <div className="mx-auto max-w-screen-md text-center">
                                    <h2 className="mb-4 text-3xl tracking-tight font-bold leading-tight text-maroon">
                                        Explore MBA Opportunities with Us
                                    </h2>
                                    <p className="mb-6 text-gray-700 md:text-lg">
                                        Join a community of future business leaders. Gain access to world-class faculty, modern infrastructure, and career-oriented programs.
                                    </p>

                                    <a
                                        href="https://www.sonabusinessschool.com/online-application?inst_id=ZFSQSGGCPYXQ9589"
                                        target="_blank"
                                        className="inline-flex items-center justify-center px-6 py-3 mr-3 text-base font-medium text-center text-maroon rounded-lg bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:ring-maroon">
                                        Apply Now
                                        <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {activeTab === "musicclub" && (
                        <motion.div
                            key="musicclub"
                            initial={{ x: "-100%", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: "100%", opacity: 0 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className="relative bg-white rounded-3xl p-6 sm:p-10 max-w-7xl mx-auto text-gray-800 overflow-hidden"
                        >
                            {/* Header */}
                            <h2 className="text-2xl sm:text-3xl font-bold text-maroon mb-6">
                                Music Club
                            </h2>

                            {/* Layout Grid */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                                {/* Text Content */}
                                <div className="space-y-6 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed text-justify">
                                    <p>
                                        If music were one’s soul of interest, then be a Louis Armstrong with one’s Blues on a saxophone.
                                        Kill the stress of a high-strung future execution by practising music.
                                        The college has invested considerably in instruments to encourage talent.
                                    </p>

                                    {/* Training Options */}
                                    <div>
                                        <h3 className="font-semibold text-maroon mb-3">Students can train in:</h3>
                                        <ul className="space-y-2">
                                            {[
                                                "Vocal light music",
                                                "Vocal classical music",
                                                "Instrumental music",
                                                "Keyboard, Guitar, Violin, Flute, Rhythm Pad ",
                                                "Drums, Trumpet, Saxophone, Clarinet, Shenoy"
                                            ].map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-2">
                                                    <DiamondStar className="h-4 w-4 text-maroon/70 mt-1" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Teachers */}
                                    <div>
                                        <h3 className="font-semibold text-maroon mb-3">Music Teachers</h3>
                                        <ul className="space-y-2">
                                            <li className="flex items-start gap-2">
                                                <DiamondStar className="h-4 w-4 text-maroon/70 mt-1" /> Vocal music – 1
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <DiamondStar className="h-4 w-4 text-maroon/70 mt-1" /> Instrumental music – 2
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Sound Machines */}
                                    <div>
                                        <h3 className="font-semibold text-maroon mb-3">Sound Machines</h3>
                                        <p>
                                            Audio systems – Mixer, Amplifier, Speakers, Microphones, Tape recorder, and a separate music room.
                                        </p>
                                    </div>
                                </div>

                                {/* Image */}
                                <div className="relative">
                                    <img
                                        src="https://res.cloudinary.com/dscqejyxy/image/upload/v1759149908/IMG-20250515-WA0039_u2ovul.jpg"
                                        alt="Music Club"
                                        className="shadow-lg w-full object-cover"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {activeTab === "library" && (
                        <motion.div
                            key="library"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -40 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="relative bg-white rounded-3xl p-6 sm:p-10 max-w-7xl mx-auto text-gray-800"
                        >
                            {/* Intro Section */}
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div className="space-y-4 text-sm sm:text-base leading-relaxed text-justify">
                                    <h2 className="text-2xl sm:text-3xl font-bold text-maroon mb-4">
                                        Library
                                    </h2>
                                    <p>
                                        Sona School of Business & Management Library is housed in an
                                        independent building of 252.18 sq.m. spread across two levels. Its
                                        collection comprises predominantly literature on Business, Management,
                                        and allied areas.
                                    </p>
                                    <p>
                                        With over <span className="font-bold">89,000+</span> documents,
                                        journals, and e-resources, the library provides students and faculty
                                        access to global knowledge through DELNET, inter-library loans, and
                                        high-speed internet access.
                                    </p>
                                </div>
                                <img
                                    src="https://res.cloudinary.com/dscqejyxy/image/upload/v1759598008/Libraries-images-2_xmosfg.webp"
                                    alt="Library Reading Hall"
                                    className=" shadow-lg object-cover"
                                />
                            </div>

                            {/* Facilities */}
                            <div className="mt-12">
                                <h3 className="text-xl font-semibold text-maroon mb-6">Facilities</h3>
                                <div className="grid sm:grid-cols-2 gap-6 text-sm sm:text-base">
                                    {[
                                        "Member of DELNET – access to resources from other major institutions",
                                        "36 computer terminals with 100 Mbps internet",
                                        "Inter Library Loan (ILL) with IIM-A, IIM-B and others",
                                        "Reference, photocopy & scanning services",
                                    ].map((item, i) => (
                                        <div
                                            key={i}
                                            className="flex items-start gap-3 p-4 bg-gray-50 "
                                        >
                                            <span className="text-maroon">✦</span>
                                            <p>{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* e-Journals */}
                            <div className="mt-12">
                                <h3 className="text-xl font-semibold text-maroon mb-6">e-Journals</h3>
                                <div className="grid sm:grid-cols-2 gap-6 text-sm sm:text-base">
                                    {[
                                        "17,032+ volumes and 36 journals on Management",
                                        "NPTEL video courses available on campus LAN",
                                        "National & International Journals, Handbooks",
                                        "Video cassettes, CD-ROMs, leased internet connection",
                                    ].map((item, i) => (
                                        <div
                                            key={i}
                                            className="flex items-start gap-3 p-4 bg-gray-50  shadow-sm"
                                        >
                                            <span className="text-maroon">✦</span>
                                            <p>{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Statistics */}
                            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[
                                    { num: 169, label: "IEEE ASPP", color: "bg-blue-200", iconColor: "text-blue-700" },
                                    { num: 275, label: "Science Direct", color: "bg-green-200", iconColor: "text-green-700" },
                                    { num: 1078, label: "EBSCO", color: "bg-purple-200", iconColor: "text-purple-700" },
                                    { num: 260, label: "NPTEL Courses", color: "bg-yellow-200", iconColor: "text-yellow-700" },
                                    { num: 12, label: "Sage", color: "bg-pink-200", iconColor: "text-pink-700" },
                                    { num: 21, label: "e-Books", color: "bg-red-200", iconColor: "text-red-700" },
                                ].map((stat, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex items-center p-5 bg-white shadow-md rounded-xl"
                                    >
                                        {/* Icon Circle */}
                                        <div
                                            className={`flex flex-shrink-0 items-center justify-center ${stat.color} h-14 w-14 rounded-lg`}
                                        >
                                            <svg
                                                className={`w-6 h-6 fill-current ${stat.iconColor}`}
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11V9H9v4h2zm0-6V5H9v2h2z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>

                                        {/* Stats */}
                                        <div className="flex-grow flex flex-col ml-4">
                                            <span className="text-xl font-bold text-gray-800">{stat.num}</span>
                                            <span className="text-gray-500 text-sm">{stat.label}</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                        </motion.div>
                    )}




                </AnimatePresence>
            </div>
        </section>
    );
}
