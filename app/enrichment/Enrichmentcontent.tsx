"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { MdEmojiEvents, MdLibraryBooks, MdForum, MdGroups } from "react-icons/md";


export default function EnrichmentPage() {
    const router = useRouter();
    const searchParams = useSearchParams();

    /** State & Refs */
    const [activeTab, setActiveTab] = useState("workshops");
    const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
    const containerRef = useRef<HTMLDivElement | null>(null);

    /** Sections (Tabs) */
    const sections = [
        {
            id: "workshops",
            title: "Workshops/ FDP/seminars",
            icon: MdLibraryBooks,
        },
        {
            id: "achievements",
            title: "Achievements & Awards",
            icon: MdEmojiEvents,
        },
        {
            id: "departmentalforum",
            title: "Departmental Forum",
            icon: MdForum,
        },
        {
            id: "professionalsocieties",
            title: "Professional Societies",
            icon: MdGroups,
        },

    ];

    /** Banner Images */
    const tabImages: Record<string, string> = {
        workshops:
            "https://res.cloudinary.com/dscqejyxy/image/upload/v1759148787/Workshops_mno9ju.webp",
        achievements: "https://res.cloudinary.com/dscqejyxy/image/upload/v1758953218/Achievements-_-Awards_f7rnpe.webp",
        departmentalforum:
            "https://res.cloudinary.com/dscqejyxy/image/upload/v1759148879/Departmental-Forum_ezv1pw.webp",
        professionalsocieties:
            "https://res.cloudinary.com/dscqejyxy/image/upload/v1758953273/Professional-Societies_kkew3s.webp",
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
        router.replace(`/enrichment?tab=${tabId}`);
    };

    const currentSection = sections.find((s) => s.id === activeTab);

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
                        <nav className="flex flex-wrap text-white text-xs sm:text-sm md:text-base" aria-label="Breadcrumb">


                            <ol className="inline-flex flex-wrap items-center space-x-1 sm:space-x-2">
                                {/* Home */}
                                <li className="inline-flex items-center">
                                    <span className="hover:text-maroon cursor-pointer transition-colors">
                                        Home
                                    </span>
                                    <span className="text-white mx-1">{">"}</span>
                                </li>

                                {/* About */}
                                <li className="inline-flex items-center">
                                    <span className="hover:text-maroon cursor-pointer transition-colors">
                                        Enrichment
                                    </span>
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
                                ref={(el) => { tabsRef.current[index] = el; }}
                                onClick={() => handleTabChange(sec.id)}
                                className={`relative flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base font-medium rounded-md transition-all duration-500 transform ${isActive
                                    ? "text-maroon scale-105"
                                    : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                                    }`}
                            >
                                <Icon
                                    className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-500 ${isActive ? "text-maroon" : "text-gray-500"
                                        }`}
                                />
                                {sec.title}

                                {/* Sliding Underline */}
                                <span
                                    className={`absolute left-0 bottom-0 h-0.5 bg-maroon transition-all duration-500 rounded-full ${isActive ? "w-full" : "w-0"
                                        }`}
                                />

                                {/* Active Tab Arrow */}
                                {isActive && (
                                    <span
                                        className="absolute left-1/2 -bottom-2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-maroon transform -translate-x-1/2"
                                    />
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* ================= Content Section ================= */}
            <div className="w-full max-w-7xl mx-auto mt-8 px-4 sm:px-6 lg:px-8">
                <AnimatePresence mode="wait">

                    {activeTab === "workshops" && (
                        <motion.section
                            key="Workshops"
                            initial={{ x: "-100%", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: "100%", opacity: 0 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className="relative bg-white rounded-2xl p-6 sm:p-8 md:p-12 max-w-7xl mx-auto text-gray-800 overflow-hidden"
                        >
                            {/* Intro Paragraph */}
                            {/* <p className="text-center  mx-auto text-gray-600 mb-8 sm:mb-10 md:mb-12 text-sm sm:text-base md:text-lg leading-relaxed text-justify">
                                Our MBA department frequently organizes{" "}
                                <span className="font-semibold text-maroon">
                                    workshops, faculty development programs (FDP), and seminars
                                </span>{" "}
                                to enhance academic excellence, research exposure, and industry
                                collaboration. These events provide students and faculty with valuable
                                insights into emerging business trends and practical applications.
                            </p> */}

                            {/* Grid Layout */}
                            {/* <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start">
                               
                                <div className="space-y-10">
                                    <div>
                                        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-maroon mb-4 border-b-2 border-yellow-500 pb-2">
                                            Key Highlights
                                        </h3>
                                        <ul className="space-y-3 text-gray-700 text-xs sm:text-sm md:text-base">
                                            {[
                                                "Industry expert guest lectures",
                                                "Hands-on management workshops",
                                                "Research paper presentations",
                                                "Faculty Development Programs (FDPs)",
                                                "Collaborations with reputed institutions",
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-start gap-2">
                                                    <DiamondStar className="h-3 sm:h-4 w-3 sm:w-4 text-maroon/70 mt-1" />
                                                     
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-maroon mb-4 border-b-2 border-yellow-500 pb-2">
                                            Benefits to Students
                                        </h3>
                                        <ul className="space-y-3 text-gray-700 text-xs sm:text-sm md:text-base">
                                            {[
                                                "Exposure to real-world case studies",
                                                "Networking with industry leaders",
                                                "Enhanced research & analytical skills",
                                                "Improved leadership & communication",
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-start gap-2">
                                                    <DiamondStar className="h-3 sm:h-4 w-3 sm:w-4 text-maroon/70 mt-1" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                                    {[
                                        "https://img.freepik.com/free-photo/speaker-talking-business-seminar_107420-63826.jpg?w=740",
                                        "https://img.freepik.com/free-photo/group-people-conference-room_53876-94821.jpg?w=740",
                                        "https://img.freepik.com/premium-photo/group-students-sit-front-screen-that-says-no_1064589-103955.jpg?uid=R139790849&ga=GA1.1.898221838.1748329700&semt=ais_hybrid&w=740&q=80",
                                        "https://img.freepik.com/premium-photo/classroom-with-screen-that-saysxon-it_1064589-104218.jpg?uid=R139790849&ga=GA1.1.898221838.1748329700&semt=ais_hybrid&w=740&q=80",
                                    ].map((src, i) => (
                                        <motion.div
                                            key={i}
                                            className="overflow-hidden rounded-lg shadow-md cursor-pointer transform transition-transform duration-300 hover:scale-105"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.3 + i * 0.1 }}
                                        >
                                            <img
                                                src={src}
                                                alt={`Workshop ${i + 1}`}
                                                className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover rounded-lg"
                                            />
                                        </motion.div>
                                    ))}
                                </div>


                            </div> */}
                            <p>No content has been provided.</p>

                        </motion.section>
                    )}



                    {activeTab === "achievements" && (
                        <motion.section
                            key="achievements"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className="relative bg-white rounded-2xl p-6 sm:p-8 md:p-12 max-w-7xl mx-auto text-gray-800 overflow-hidden"
                        >
                            {/* Intro Paragraph */}
                            {/* <p className="text-center max-w-3xl mx-auto text-gray-600 mb-10 sm:mb-12 md:mb-16 text-sm sm:text-base md:text-lg leading-relaxed text-justify">
                                Celebrating the{" "}
                                <span className="font-semibold text-maroon">remarkable milestones</span>{" "}
                                of our students and faculty in academics, research, and co-curricular
                                excellence.
                            </p> */}

                            {/* Achievements Timeline */}
                            <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
                                {/* Left Side - Students */}
                                {/* <div className="space-y-8 sm:space-y-10">
                                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-maroon mb-4 sm:mb-6 border-b-2 border-yellow-500 pb-2">
                                        Student Achievements
                                    </h3>
                                    <div className="space-y-4 sm:space-y-6">
                                        {[
                                            "University Rank Holders in MBA examinations",
                                            "Winners of national-level business plan competitions",
                                            "Top performers in corporate internships",
                                            "Best paper awards in management conferences",
                                            "Winners in inter-college cultural & sports events",
                                        ].map((item, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ x: -30, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                transition={{ delay: 0.2 + i * 0.1 }}
                                                className="flex items-start gap-2 sm:gap-3"
                                            >
                                                <DiamondStar className="h-3 sm:h-4 w-3 sm:w-4 text-maroon/70 mt-1" />
                                                <p className="text-gray-700 text-xs sm:text-sm md:text-base">
                                                    {item}
                                                </p>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div> */}

                                {/* Right Side - Faculty */}
                                {/* <div className="space-y-8 sm:space-y-10">
                                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-maroon mb-4 sm:mb-6 border-b-2 border-yellow-500 pb-2">
                                        Faculty Achievements
                                    </h3>
                                    <div className="space-y-4 sm:space-y-6">
                                        {[
                                            "Published research in reputed journals",
                                            "Resource persons for FDPs and workshops",
                                            "Recognized with teaching excellence awards",
                                            "Guided Ph.D. scholars and MBA projects",
                                            "Invited speaker at international management conferences",
                                        ].map((item, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ x: 30, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                transition={{ delay: 0.2 + i * 0.1 }}
                                                className="flex items-start gap-2 sm:gap-3"
                                            >
                                                <DiamondStar className="h-3 sm:h-4 w-3 sm:w-4 text-maroon/70 mt-1" />
                                                <p className="text-gray-700 text-xs sm:text-sm md:text-base">
                                                    {item}
                                                </p>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div> */}
                            </div>

                            {/* Image Showcase */}
                            {/* <div className="mt-10 sm:mt-12 md:mt-16 grid sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                                {[
                                    "https://img.freepik.com/free-photo/medium-shot-graduate-student_23-2148950577.jpg?uid=R139790849&ga=GA1.1.898221838.1748329700&semt=ais_hybrid&w=740&q=80",
                                    "https://img.freepik.com/free-photo/best-friends-graduation-ceremony_23-2148505275.jpg?uid=R139790849&ga=GA1.1.898221838.1748329700&semt=ais_hybrid&w=740&q=80",
                                    "https://img.freepik.com/free-photo/graduate-students-wearing-cap-gown_23-2148950539.jpg?uid=R139790849&ga=GA1.1.898221838.1748329700&semt=ais_hybrid&w=740&q=80",
                                    "https://img.freepik.com/premium-photo/graduation-hat-with-golden-trophy-wood-table-3d-render_56345-510.jpg?uid=R139790849&ga=GA1.1.898221838.1748329700&semt=ais_hybrid&w=740&q=80",
                                ].map((src, i) => (
                                    <motion.div
                                        key={i}
                                        className="overflow-hidden rounded-lg shadow-md cursor-pointer transform transition-transform duration-300 hover:scale-105"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.3 + i * 0.1 }}
                                    >
                                        <img
                                            src={src}
                                            alt={`Achievement ${i + 1}`}
                                            className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover"
                                        />
                                    </motion.div>
                                ))}
                            </div> */}
                            <p>No content has been provided.</p>
                        </motion.section>
                    )}



                    {activeTab === "departmentalforum" && (
                        <motion.section
                            key="departmentalforum"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className="relative bg-white rounded-2xl p-6 sm:p-8 md:p-12 max-w-7xl mx-auto text-gray-800 overflow-hidden"
                        >
                            {/* Intro Paragraph */}
                            {/* <p className="text-center max-w-3xl mx-auto text-gray-600 mb-10 sm:mb-12 md:mb-16 text-sm sm:text-base md:text-lg leading-relaxed text-justify">
                                Our <span className="font-semibold text-maroon">Departmental Forum</span>{" "}
                                connects MBA students to activities, workshops, and discussions that build
                                professional skills and industry awareness.
                            </p> */}

                            {/* Modern Split Layout */}
                            {/* <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-12 lg:gap-16 items-start">
                                {[
                                    {
                                        title: "Business Leadership Club",
                                        description:
                                            "Leadership workshops, peer mentoring, and strategy sessions for future managers.",
                                        icon: MdGroups,
                                    },
                                    {
                                        title: "Finance Forum",
                                        description:
                                            "Financial market discussions, corporate finance trends, and practical case studies.",
                                        icon: MdLibraryBooks,
                                    },
                                    {
                                        title: "Marketing & Innovation Forum",
                                        description:
                                            "Brand-building exercises, marketing challenges, and innovation projects.",
                                        icon: MdForum,
                                    },
                                    {
                                        title: "Entrepreneurship Cell",
                                        description:
                                            "Startup planning, business pitching, and incubation guidance.",
                                        icon: MdEmojiEvents,
                                    },
                                    {
                                        title: "HR & Organizational Development",
                                        description:
                                            "HR workshops, employee engagement simulations, and case discussions.",
                                        icon: MdGroups,
                                    },
                                    {
                                        title: "International Business Forum",
                                        description:
                                            "Global trade discussions, cross-cultural management, and business strategy sessions.",
                                        icon: MdLibraryBooks,
                                    },
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        className="flex items-start gap-3 sm:gap-4"
                                        initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 + i * 0.1 }}
                                    >
                                        <div className="flex-shrink-0 p-2 sm:p-3 bg-maroon text-white rounded-full">
                                            <item.icon className="h-4 sm:h-5 md:h-6 w-4 sm:w-5 md:w-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900">
                                                {item.title}
                                            </h3>
                                            <p className="text-gray-600 mt-1 text-xs sm:text-sm md:text-base leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div> */}

                            {/* Optional Simple Image Strip */}
                            {/* <div className="mt-10 sm:mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                                {[
                                    {
                                        src: "https://img.freepik.com/free-photo/business-team-discussing-project_53876-25117.jpg?w=740",
                                        span: "md:col-span-2", // wide but not extra tall
                                    },
                                    {
                                        src: "https://img.freepik.com/free-photo/business-meeting-discussion_53876-25055.jpg?w=740",
                                        span: "",
                                    },
                                    {
                                        src: "https://img.freepik.com/free-photo/team-brainstorming-office_53876-14316.jpg?w=740",
                                        span: "",
                                    },

                                    {
                                        src: "https://img.freepik.com/free-photo/group-discussion-people_53876-144832.jpg?w=740",
                                        span: "",
                                    },
                                    {
                                        src: "https://img.freepik.com/free-photo/team-brainstorming-office_53876-14316.jpg?w=740",
                                        span: "",
                                    }
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        className={`overflow-hidden rounded-xl shadow-md cursor-pointer transform transition-transform duration-300 hover:scale-105 ${item.span}`}
                                        initial={{ opacity: 0, y: 40 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 + i * 0.1 }}
                                    >
                                        <img
                                            src={item.src}
                                            alt={`Forum Activity ${i + 1}`}
                                            className="w-full h-40 sm:h-48 md:h-52 object-cover"
                                        />
                                    </motion.div>
                                ))}
                            </div> */}
                            <p>No content has been provided.</p>


                        </motion.section>
                    )}



                    {activeTab === "professionalsocieties" && (
                        <motion.section
                            key="professionalsocieties"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className="relative bg-white rounded-2xl p-6 sm:p-8 md:p-12 max-w-7xl mx-auto text-gray-800 overflow-hidden"
                        >
                            {/* Intro Paragraph */}
                            {/* <p className="text-center text-gray-600 mb-10 sm:mb-12 md:mb-16 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto text-justify">
                                MBA students actively participate in{" "}
                                <span className="font-semibold text-maroon">professional societies</span>{" "}
                                to enhance skills, network with industry experts, and stay updated on
                                business trends.
                            </p> */}

                            {/* Clean List Layout */}
                            {/* <div className="space-y-8 sm:space-y-10">
                                {[
                                    {
                                        title: "National Management Association (NMA)",
                                        description:
                                            "Participate in national conferences, leadership workshops, and skill-building programs.",
                                        icon: MdGroups,
                                    },
                                    {
                                        title: "Indian Society for Training & Development (ISTD)",
                                        description:
                                            "Engage in HR workshops, training sessions, and networking opportunities.",
                                        icon: MdLibraryBooks,
                                    },
                                    {
                                        title: "Project Management Institute (PMI)",
                                        description:
                                            "Learn modern project management techniques and gain exposure through competitions.",
                                        icon: MdForum,
                                    },
                                    {
                                        title: "Marketing Club of India",
                                        description:
                                            "Join marketing challenges, campaigns, and branding workshops with industry mentors.",
                                        icon: MdEmojiEvents,
                                    },
                                    {
                                        title: "Finance & Investment Society",
                                        description:
                                            "Explore investment strategies, financial modeling, and corporate finance case studies.",
                                        icon: MdGroups,
                                    },
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        className="flex items-start gap-4 sm:gap-5 border-l-4 border-maroon pl-4 sm:pl-6"
                                        initial={{ opacity: 0, x: -30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 + i * 0.1 }}
                                    >
                                        <item.icon className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-maroon mt-1" />
                                        <div>
                                            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-maroon">
                                                {item.title}
                                            </h3>
                                            <p className="text-gray-600 mt-1 text-xs sm:text-sm md:text-base leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div> */}

                            {/* Optional Image Strip */}
                            {/* <div className="mt-10 sm:mt-12 md:mt-16 flex flex-wrap gap-3 sm:gap-4 justify-center">
                                {[
                                    "https://img.freepik.com/free-photo/business-team-discussing-project_53876-25117.jpg?w=740",
                                    "https://img.freepik.com/free-photo/business-meeting-discussion_53876-25055.jpg?w=740",
                                    "https://img.freepik.com/free-photo/team-brainstorming-office_53876-14316.jpg?w=740",
                                    "https://img.freepik.com/free-photo/group-discussion-people_53876-144832.jpg?w=740",
                                ].map((src, i) => (
                                    <motion.img
                                        key={i}
                                        src={src}
                                        alt={`Society Activity ${i + 1}`}
                                        className="w-40 sm:w-48 md:w-56 lg:w-60 h-28 sm:h-32 md:h-36 lg:h-40 object-cover  shadow-md hover:scale-105 transition-transform duration-300"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.3 + i * 0.1 }}
                                    />
                                ))}
                            </div> */}

                            <p>No content has been provided.</p>
                        </motion.section>
                    )}

                </AnimatePresence>
            </div>
        </section>
    );
}
