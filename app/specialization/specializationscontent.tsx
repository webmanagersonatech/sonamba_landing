"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import DiamondStar from "../../components/DiamondStar";
import Link from "next/link";
import { SiPython, SiSqlite, SiTableau, SiPowerbi, SiR } from "react-icons/si";
import {
    MdHowToReg,
    MdDataUsage,
    MdTrendingUp,
    MdPeople,
    MdInsights,
    MdSettings,
    MdLocalShipping,
    MdAnalytics,
    MdStar,
    MdWork,
    MdSchool,
    MdVerified,
    MdBusiness,
    MdCurrencyRupee,

} from "react-icons/md";

export default function SpecializationPageContent() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [activeTab, setActiveTab] = useState("marketing");
    const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
    const containerRef = useRef<HTMLDivElement | null>(null);

    /** Sections / Tabs */
    const sections = [
        {
            id: "finance",
            title: "Finance",
            icon: MdCurrencyRupee,
            metaDescription:
                "MBA in Finance at Sona School: Master corporate finance, investments, and strategic financial skills for a successful career.",
            canonical: "Finance",
            image: "/images/specilization/speaclization-5.webp",
        },
        {
            id: "marketing",
            title: "Marketing",
            icon: MdHowToReg,
            metaDescription:
                "Explore the MBA Marketing specialization at Sona School of Business & Management. Gain practical skills in branding, digital marketing, analytics & strategy.",
            canonical: "marketing",
            image: "/images/specilization/speaclization-1.webp",
        },
        {
            id: "businessanalytics",
            title: "Business Analytics",
            icon: MdDataUsage,
            metaDescription:
                "Master MBA Business Analytics at Sona School of Business & Management. Learn data-driven decision making, analytics, visualization, and predictive modeling.",
            canonical: "businessanalytics",
            image: "/images/specilization/speaclization-2.webp",
        },
        {
            id: "hr",
            title: "Human Resource ",
            icon: MdPeople, // or MdGroup, MdPersonSearch, whichever you want
            metaDescription:
                "Build expertise in recruiting, training, talent management, organizational behavior, and HR strategy with the MBA HR specialization at Sona School.",
            canonical: "hr",
            image: "/images/specilization/speaclization-3.webp",
        },
    ];

    /** Load tab from URL */
    useEffect(() => {
        const tab = searchParams.get("tab");
        if (tab && sections.some((s) => s.id === tab.toLowerCase())) {
            setActiveTab(tab.toLowerCase());
        }
    }, [searchParams]);

    /** Handle tab change */
    const handleTabChange = (tabId: string) => {
        setActiveTab(tabId);
        router.replace(`/specialization?tab=${tabId}`);
    };

    const currentSection = sections.find((s) => s.id === activeTab);

    /** Update SEO dynamically */
    useEffect(() => {
        if (!currentSection) return;

        // Document title
        document.title = `${currentSection.title} | MBA Specialization | Sona School of Business & Management`;

        // Meta description
        let metaDesc = document.querySelector(
            'meta[name="description"]'
        ) as HTMLMetaElement | null;
        if (!metaDesc) {
            metaDesc = document.createElement("meta");
            metaDesc.name = "description";
            document.head.appendChild(metaDesc);
        }
        metaDesc.content = currentSection.metaDescription;

        // Robots
        let metaRobots = document.querySelector(
            'meta[name="robots"]'
        ) as HTMLMetaElement | null;
        if (!metaRobots) {
            metaRobots = document.createElement("meta");
            metaRobots.name = "robots";
            document.head.appendChild(metaRobots);
        }
        metaRobots.content = "index, follow";

        // Canonical
        let linkCanonical = document.querySelector(
            'link[rel="canonical"]'
        ) as HTMLLinkElement | null;
        if (!linkCanonical) {
            linkCanonical = document.createElement("link");
            linkCanonical.rel = "canonical";
            document.head.appendChild(linkCanonical);
        }
        linkCanonical.href = `https://www.sonabusinessschool.com/specialization?tab=${currentSection.canonical}`;
    }, [currentSection]);

    return (
        <section className="w-full min-h-screen bg-gray-50 py-12 flex flex-col items-center">
            {/* Banner */}
            <div className="w-full relative">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={currentSection?.image}
                        src={currentSection?.image || ""}
                        alt={`${currentSection?.title} Banner`}
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
                                        href="/specialization"
                                        className="hover:text-maroon cursor-pointer transition-colors text-white"
                                    >
                                        Specializations
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

            {/* Tabs */}
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
                                <Icon
                                    className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-500 ${isActive ? "text-maroon" : "text-gray-500"
                                        }`}
                                />
                                <span className="relative flex flex-col items-center">
                                    <span>{sec.title}</span>
                                    <span
                                        className={`block h-0.5 bg-maroon transition-all duration-500 rounded-full ${isActive ? "w-full" : "w-0"
                                            }`}
                                    ></span>
                                    {isActive && (
                                        <span className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-maroon -mt-px"></span>
                                    )}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Content Section */}
            <div className="w-full max-w-7xl mx-auto mt-8 px-4 sm:px-6 lg:px-8">
                <AnimatePresence mode="wait">
                    {activeTab === "marketing" && (
                        <motion.section
                            key="marketing"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative bg-white p-6 md:p-10 rounded-3xl max-w-7xl mx-auto  overflow-hidden"
                        >
                            {/* Hero Header */}
                            <motion.div
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8 }}
                                className="text-center mb-10"
                            >
                                {/* You can add heading text here if needed */}
                            </motion.div>



                            {/* Timeline-style Description */}
                            <div className="relative ml-4">
                                {[
                                    {
                                        icon: <MdSchool className="text-maroon h-6 w-6" />,

                                        content: (
                                            <>
                                                The <span className="font-semibold text-maroon">MBA in Marketing</span> is designed for students who are
                                                curious about people, passionate about brands, and eager to understand what truly drives customer choices.
                                                This specialization helps future marketers build <span className="font-semibold text-maroon">confidence, creativity, and strategic mindset</span>
                                                needed to make a real impact in today’s fast-moving business world.
                                            </>
                                        ),
                                    },
                                    {
                                        icon: <MdWork className="text-maroon h-6 w-6" />,

                                        content: (
                                            <>
                                                Through this program, students explore <span className="font-semibold text-maroon">consumer behavior</span>,
                                                how brands grow, and how companies create value in competitive markets. The curriculum blends essential marketing foundations
                                                with modern areas such as <span className="font-semibold text-maroon">digital marketing, branding, storytelling, analytics, customer experience, and sales strategy</span>.
                                                It encourages students to think openly, experiment with ideas, and develop <span className="font-semibold text-maroon">solutions that matter</span>.
                                            </>
                                        ),
                                    },
                                    {
                                        icon: <MdHowToReg className="text-maroon h-6 w-6" />,

                                        content: (
                                            <>
                                                Learning goes beyond textbooks. Students engage in <span className="font-semibold text-maroon">live projects, workshops, industry interactions, and real-time case discussions</span>.
                                                giving them practical exposure to how marketing works in the real world. They learn to interpret market trends, design meaningful campaigns, understand customer needs, and use data to drive smarter decisions
                                            </>
                                        ),
                                    },
                                    {
                                        icon: <MdStar className="text-maroon h-6 w-6" />,

                                        content: (
                                            <>
                                                The specialization opens doors to exciting career paths in brand  <span className="font-semibold text-maroon">management, advertising, digital marketing, product management, business development, retail marketing, and market research.</span>  Whether it’s building a brand’s identity, creating a digital presence, or understanding customer insights, students graduate ready to contribute with clarity and confidence.
                                            </>
                                        ),
                                    },
                                    {
                                        icon: <MdVerified className="text-maroon h-6 w-6" />,

                                        content: (
                                            <>
                                                The MBA in Marketing aims not only to shape skilled professionals but also <span className="font-semibold text-maroon"> thoughtful, empathetic, and innovative </span> individuals who understand the art of communication—and the importance of building relationships that last.
                                            </>
                                        ),
                                    },
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        className="mb-8 relative"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: i * 0.15 }}
                                    >
                                        <div className="absolute -left-10 top-0 flex flex-col items-center">
                                            <div className="w-8 h-8 rounded-full bg-maroon/20 flex items-center justify-center mb-2">
                                                {item.icon}
                                            </div>
                                            <div className="w-1 bg-maroon flex-1"></div>
                                        </div>
                                        <div className="bg-gray-50 border-l-4 border-yellow-500 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">

                                            <p className="text-gray-700 text-sm md:text-base leading-relaxed">{item.content}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>


                            {/* CTA Button */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="text-center my-10 bg-gray-50 py-2 border"
                            >
                                <h2 className="text-3xl font-bold mb-3 text-[#0B3370]">
                                    Ready to Transform Your Career?
                                </h2>
                                <p className="text-gray-600 max-w-lg mx-auto">
                                    Join SSBM and unlock global opportunities with world-class learning.

                                </p>
                                <motion.div
                                    className="flex justify-center"
                                    animate={{ y: [0, 10, 0] }}
                                    transition={{ repeat: Infinity, duration: 1 }}
                                >
                                    <svg
                                        className="w-6 h-6 text-blue-600"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </motion.div>

                                <a
                                    href="https://www.sonabusinessschool.com/online-application?inst_id=ZFSQSGGCPYXQ9589"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <motion.button
                                        whileHover={{ scale: 1.06 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="mt-4  items-center gap-3 
      bg-gradient-to-r from-blue-600 to-maroon
      text-white font-semibold
      px-8 py-3 rounded-xl shadow-md
      hover:shadow-lg transition-transform duration-300"
                                    >
                                        Apply Now
                                    </motion.button>
                                </a>

                            </motion.div>

                            <motion.div

                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                            >
                                {/* Center Heading */}
                                <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
                                    Club Activities
                                </h3>

                                <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6 text-center ">
                                    Designed to build creativity, customer understanding, and market intelligence.
                                </p>

                                {/* Activities */}


                                {/* Outcomes + Image side-by-side */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10 items-start">

                                    {/* Activities */}
                                    <div>


                                        <div className="space-y-4">
                                            {[
                                                {
                                                    title: "Bazar (Marketing Fair)",
                                                    desc: "Students create, market, and sell products to understand real customer behavior."
                                                },
                                                {
                                                    title: "Brand-Selling Activitie",
                                                    desc: "Practical selling and persuasion activities"
                                                },
                                                {
                                                    title: "Marketing Workshop",
                                                    desc: "Sessions by industry experts on branding, digital marketing, and consumer insight"
                                                }
                                            ].map((item, i) => (
                                                <motion.div
                                                    key={i}
                                                    className="flex items-start gap-3"
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.4, delay: i * 0.1 }}
                                                >
                                                    <DiamondStar className="text-maroon/70 h-5 w-5 mt-1 flex-shrink-0" />

                                                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                                                        <span className="text-maroon font-medium">{item.title}</span>
                                                        {" – "}
                                                        {item.desc}
                                                    </p>

                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Outcomes */}
                                    <div>
                                        <h4 className="text-xl font-semibold text-gray-800 mb-4">Outcomes</h4>

                                        <div className="space-y-4">
                                            {[
                                                "Ability to design and execute marketing strategies through hands-on activities.",
                                                "Improved persuasion, selling, and customer-interaction skills.",
                                                "Enhanced creativity in branding and promotional planning",
                                                "Practical exposure to market analysis and consumer behaviour."
                                            ].map((item, i) => (
                                                <motion.div
                                                    key={i}
                                                    className="flex items-start gap-3"
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.4, delay: i * 0.1 }}
                                                >
                                                    <DiamondStar className="text-maroon/70 h-5 w-5 mt-1 flex-shrink-0" />

                                                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                                                        {item}
                                                    </p>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>

                                </div>
                                {/* Two Images Section */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.7 }}
                                    className="mt-14"
                                >
                                    {/* Center Title */}
                                    <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">
                                        Branding-selling activities
                                    </h2>

                                    {/* Two Images Side-by-Side */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                                        {/* Image 1 */}
                                        <motion.div
                                            initial={{ opacity: 0, x: -40 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6 }}
                                            className="flex justify-center"
                                        >
                                            <div className="rounded-xl overflow-hidden  border border-gray-200 transition-all duration-300">
                                                <img
                                                    src="/images/specilization/club/marketing-1.png"
                                                    alt="Marketing Bazaar"
                                                    className="w-full md:w-[420px] object-cover hover:scale-105 transition-transform duration-500"
                                                />
                                            </div>
                                        </motion.div>

                                        {/* Image 2 */}
                                        <motion.div
                                            initial={{ opacity: 0, x: 40 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6 }}
                                            className="flex justify-center"
                                        >
                                            <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300">
                                                <img
                                                    src="/images/specilization/club/marketing-2.png"
                                                    alt="Brand Selling"
                                                    className="w-full md:w-[420px] object-cover hover:scale-105 transition-transform duration-500"
                                                />
                                            </div>
                                        </motion.div>

                                    </div>

                                </motion.div>

                            </motion.div>

                        </motion.section>
                    )}

                    {activeTab === "finance" && (
                        <motion.section
                            key="finance"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -40 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative max-w-7xl mx-auto p-6 md:p-12 bg-white rounded-2xl  overflow-hidden"
                        >
                            {/* Hero */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="text-center mb-12"
                            >

                                <p className="text-gray-700  text-sm md:text-base text-justify mx-auto">
                                    The MBA in Finance is a two-year postgraduate program designed to develop strong financial, analytical and managerial competencies required for success in the dynamic world of finance. The program equips students with the understanding of financial markets, manage corporate finances, analyse investments and make strategic financial decisions that drive organizational growth.
                                </p>
                            </motion.div>

                            {/* Program Overview */}
                            <motion.div
                                className="bg-blue-50 p-6 md:p-10 rounded-t-2xl mb-12 transition-shadow"
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <h3 className="text-2xl font-semibold text-maroon mb-4">Program Overview</h3>
                                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                                    In today’s competitive global economy, financial expertise is essential for organizational success. The MBA in Finance provides a comprehensive understanding of corporate finance, banking, financial services, investments, risk management and financial analytics. The curriculum blends foundational management concepts with advanced financial techniques, ensuring students gain both analytical depth and strategic perspective.
                                </p>
                            </motion.div>

                            {/* Key Highlights */}
                            <motion.div className="mb-12">
                                <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Key Highlights</h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {[
                                        "Industry-driven curriculum covering Corporate Finance, Investment Analysis, Banking & Financial Services, Derivatives, Taxation and Risk Management",
                                        "Training for NISM certifications to enhance financial market proficiency",
                                        "CPBFI (Certificate Programme in Banking, Finance & Insurance) for strong banking domain exposure",
                                        "Hands-on learning through case studies, live trading simulations and financial modelling exercises",
                                        "Internship opportunities with leading banks, NBFCs, and financial institutions and Strong placement support in finance and BFSI roles",
                                        "Practical exposure using EBSCO and CMIE financial databases",
                                    ].map((item, i) => (
                                        <motion.div
                                            key={i}
                                            className="bg-white  p-5 flex items-start gap-3 border-b cursor-pointer"
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: i * 0.1 }}
                                        >
                                            <span className="text-green-500 text-xl">✔︎</span>
                                            <p className="text-gray-700 text-sm md:text-base">{item}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Career Opportunities */}
                            <motion.div className="mb-12">
                                <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Career Opportunities</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {[
                                        { title: "Financial Analyst", icon: <MdAnalytics className="text-maroon h-6 w-6" /> },
                                        { title: "Equity Research Associate", icon: <MdTrendingUp className="text-maroon h-6 w-6" /> },
                                        { title: "Credit Analyst / Risk Analyst", icon: <MdInsights className="text-maroon h-6 w-6" /> },
                                        { title: "Investment Banker", icon: <MdCurrencyRupee className="text-maroon h-6 w-6" /> },
                                        { title: "Portfolio & Wealth Manager", icon: <MdBusiness className="text-maroon h-6 w-6" /> },
                                        { title: "Corporate Finance Executive", icon: <MdWork className="text-maroon h-6 w-6" /> },
                                        { title: "Banking Officer / Relationship Manager", icon: <MdVerified className="text-maroon h-6 w-6" /> },
                                    ].map((role, i) => (
                                        <motion.div
                                            key={i}
                                            className="flex items-center gap-3 p-4 bg-gray-50 "
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: i * 0.1 }}
                                        >
                                            <div className="bg-gray-200 text-maroon rounded-full w-8 h-8 flex items-center justify-center">
                                                {role.icon}
                                            </div>

                                            <p className="text-gray-700">{role.title}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>


                            {/* Why Choose Our MBA */}
                            <motion.div className="mb-12">
                                <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Why Choose Our MBA in Finance?</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {[
                                        "Contemporary curriculum aligned with financial industry standards",
                                        "Strong academic–industry linkage through expert talks, bank collaborations and industry immersion",
                                        "Exposure to financial markets through NISM training and simulations",
                                        "Mentorship from finance professionals and market practitioners across BFSI",
                                        "Holistic development through value-added programs, certifications and real-time financial projects",
                                        "Proven placement track with opportunities across top banks, NBFCs and financial services companies",
                                    ].map((item, i) => (
                                        <motion.div
                                            key={i}
                                            className="flex items-start gap-3 p-4 bg-gray-50 "
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: i * 0.1 }}
                                        >
                                            <MdVerified className="text-maroon h-6 w-6 mt-1 flex-shrink-0" />
                                            <p className="text-gray-700">{item}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* CTA */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="text-center my-10 bg-gray-50 py-2 border"
                            >
                                <h2 className="text-3xl font-bold mb-3 text-[#0B3370]">
                                    Ready to Transform Your Career?
                                </h2>
                                <p className="text-gray-600 max-w-lg mx-auto">
                                    Join SSBM and unlock global opportunities with world-class learning.

                                </p>
                                <motion.div
                                    className="flex justify-center"
                                    animate={{ y: [0, 10, 0] }}
                                    transition={{ repeat: Infinity, duration: 1 }}
                                >
                                    <svg
                                        className="w-6 h-6 text-blue-600"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </motion.div>

                                <a
                                    href="https://www.sonabusinessschool.com/online-application?inst_id=ZFSQSGGCPYXQ9589"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <motion.button
                                        whileHover={{ scale: 1.06 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="mt-4  items-center gap-3 
      bg-gradient-to-r from-blue-600 to-maroon
      text-white font-semibold
      px-8 py-3 rounded-xl shadow-md
      hover:shadow-lg transition-transform duration-300"
                                    >
                                        Apply Now
                                    </motion.button>
                                </a>

                            </motion.div>




                            <motion.div

                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                            >
                                {/* Center Heading */}
                                <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
                                    Club Activities
                                </h3>

                                <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6 text-center ">
                                    Enhances financial decision-making and analytical skills
                                </p>

                                {/* Activities */}


                                {/* Outcomes + Image side-by-side */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10 items-start">

                                    {/* Activities */}
                                    <div>


                                        <div className="space-y-4">
                                            {[
                                                {
                                                    title: "Stock Analysis Workshops",
                                                    desc: "Understanding market movements and investment decision-making."
                                                },
                                                {
                                                    title: "Budget Discussions",
                                                    desc: "Hands-on budgeting and cost-control exercises."
                                                },
                                                {
                                                    title: "Finance Quiz Competitions",
                                                    desc: "Tests on financial concepts, markets, and applications."
                                                }
                                            ].map((item, i) => (
                                                <motion.div
                                                    key={i}
                                                    className="flex items-start gap-3"
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.4, delay: i * 0.1 }}
                                                >
                                                    <DiamondStar className="text-maroon/70 h-5 w-5 mt-1 flex-shrink-0" />

                                                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                                                        <span className="text-maroon font-medium">{item.title}</span>
                                                        {" – "}
                                                        {item.desc}
                                                    </p>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Outcomes */}
                                    <div>
                                        <h4 className="text-xl font-semibold text-gray-800 mb-4">Outcomes</h4>

                                        <div className="space-y-4">
                                            {[
                                                "Improved financial literacy and analytical skills in stock market and budgeting.",
                                                "Ability to interpret financial data and make informed decisions.",
                                                "Strengthened problem-solving skills through quizzes and discussions.",
                                                "Better understanding of capital markets, risk, and investment strategies."
                                            ].map((item, i) => (
                                                <motion.div
                                                    key={i}
                                                    className="flex items-start gap-3"
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.4, delay: i * 0.1 }}
                                                >
                                                    <DiamondStar className="text-maroon/70 h-5 w-5 mt-1 flex-shrink-0" />

                                                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                                                        {item}
                                                    </p>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>

                                </div>

                            </motion.div>



                        </motion.section>
                    )}


                    {activeTab === "businessanalytics" && (
                        <motion.section
                            key="businessanalytics"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -40 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative bg-white rounded-3xl p-6 md:p-14 max-w-7xl mx-auto overflow-hidden"
                        >
                            {/* Hero Header */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8 }}
                                className="text-center mb-12"
                            >

                                <p className="text-gray-700 text-justify mx-auto">
                                    The MBA in Business Analytics is a two-year postgraduate program designed to equip students with the strategic, analytical, and managerial skills needed to make data-driven business decisions. The program blends core management concepts with advanced analytical techniques, preparing graduates to thrive in today’s competitive, technology-driven business environment.
                                </p>
                            </motion.div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Program Overview</h3>
                            {/* Program Overview */}
                            <motion.div
                                className="relative border-l-4 border-maroon/30 ml-4 mb-12"
                            >

                                {[
                                    `In a world where data powers every industry, the MBA in Business Analytics enables students to turn information into insight. The curriculum covers statistical analysis, predictive modeling, data visualization, machine learning basics, and business strategy—ensuring a perfect balance between technical expertise and managerial understanding.`,
                                    `The program empowers students to solve complex business problems, optimize organizational performance, and contribute to high-impact decision-making.`
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        className="mb-6 relative"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: i * 0.15 }}
                                    >
                                        <div className="absolute -left-6 top-1 w-4 h-4 rounded-full bg-maroon border-2 border-white flex items-center justify-center">
                                            <DiamondStar className="text-maroon h-5 w-5" />
                                        </div>
                                        <p className="text-gray-700 text-sm md:text-base leading-relaxed px-2 text-justify">
                                            {item}
                                        </p>
                                    </motion.div>
                                ))}

                            </motion.div>

                            {/* Key Highlights */}
                            <motion.div className="mb-12">
                                <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Key Highlights</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {[
                                        {
                                            text: (
                                                <span>
                                                    Industry-aligned curriculum covering analytics tools like

                                                    {/* Python */}
                                                    <span className="inline-flex items-center gap-1 ml-2">
                                                        <SiPython className="text-blue-500 h-5 w-5" />
                                                        <strong>Python</strong>,
                                                    </span>

                                                    {/* R */}
                                                    <span className="inline-flex items-center gap-1 ml-2">
                                                        <SiR className="text-indigo-600 h-5 w-5" />
                                                        <strong>R</strong>,
                                                    </span>

                                                    {/* SQL */}
                                                    <span className="inline-flex items-center gap-1 ml-2">
                                                        <SiSqlite className="text-orange-500 h-5 w-5" />
                                                        <strong>SQL</strong>,
                                                    </span>

                                                    {/* Tableau */}
                                                    <span className="inline-flex items-center gap-1 ml-2">
                                                        <SiTableau className="text-blue-700 h-5 w-5" />
                                                        <strong>Tableau</strong>,
                                                    </span>

                                                    {/* Power BI */}
                                                    <span className="inline-flex items-center gap-1 ml-2">
                                                        <SiPowerbi className="text-yellow-500 h-5 w-5" />
                                                        <strong>Power BI</strong>
                                                    </span>
                                                </span>

                                            ),

                                        },
                                        { text: "Hands-on learning through case studies, live projects, and data-driven simulations", icon: <DiamondStar className="text-maroon/70 h-5 w-5" /> },
                                        { text: "Expert faculty from academia and industry", icon: <DiamondStar className="text-maroon/70 h-5 w-5" /> },
                                        { text: "Internship opportunities with leading companies", icon: <DiamondStar className="text-maroon/70 h-5 w-5" /> },
                                        { text: "Focus on real-world applications in marketing, finance, supply chain, HR, and operations", icon: <DiamondStar className="text-maroon/70 h-5 w-5" /> },
                                        { text: "Strong placement support in analytics-driven roles", icon: <DiamondStar className="text-maroon/70 h-5 w-5" /> },
                                    ].map((item, i) => (
                                        <motion.div
                                            key={i}
                                            className="flex items-start gap-4 p-5 bg-gray-50"
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: i * 0.1 }}
                                        >
                                            <div className="flex-shrink-0 mt-1">{item.icon}</div>
                                            <p className="text-gray-700">{item.text}</p>
                                        </motion.div>
                                    ))}
                                </div>

                            </motion.div>
                            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
                                {/* Career Opportunities */}
                                <motion.div
                                    className="relative border-l-4 border-maroon/30 pl-6"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <h3 className="text-2xl font-semibold text-gray-800 mb-6">Career Opportunities</h3>

                                    {[
                                        { title: "Business Analyst", icon: <MdBusiness className="text-maroon/70 h-5 w-5" /> },
                                        { title: "Data Analyst", icon: <MdDataUsage className="text-maroon/70 h-5 w-5" /> },
                                        { title: "Marketing Analyst", icon: <MdTrendingUp className="text-maroon/70 h-5 w-5" /> },
                                        { title: "Financial Analyst", icon: <MdCurrencyRupee className="text-maroon/70 h-5 w-5" /> },
                                        { title: "Business Intelligence Specialist", icon: <MdInsights className="text-maroon/70 h-5 w-5" /> },
                                        { title: "Data Strategy Consultant", icon: <MdSettings className="text-maroon/70 h-5 w-5" /> },
                                        { title: "Operations & Supply Chain Analyst", icon: <MdLocalShipping className="text-maroon/70 h-5 w-5" /> },
                                        { title: "Product Analyst", icon: <MdAnalytics className="text-maroon/70 h-5 w-5" /> },
                                    ].map((item, i) => (
                                        <motion.div
                                            key={i}
                                            className="mb-4 relative flex items-start gap-3"
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: i * 0.1 }}
                                        >
                                            {/* ICON HERE */}
                                            <div className="absolute -left-5 top-1">
                                                {item.icon}
                                            </div>

                                            <p className="text-gray-700 text-sm md:text-base pl-2">
                                                {item.title}
                                            </p>
                                        </motion.div>
                                    ))}

                                    <p className="text-gray-700 mt-4">
                                        Organizations across <span className="font-semibold text-maroon">IT, BFSI, e-commerce, consulting, healthcare, and manufacturing</span>
                                        actively hire analytics professionals.
                                    </p>
                                </motion.div>


                                {/* Why Choose MBA */}
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center md:text-left">Why Choose Our MBA in Business Analytics?</h3>
                                    {[
                                        "Contemporary course design aligned with industry trends",
                                        "Strong academic-industry collaboration",
                                        "Exposure to cutting-edge analytics platforms",
                                        "Mentorship from industry leaders",
                                        "Holistic development through seminars, workshops, and internships",
                                    ].map((item, i) => (
                                        <motion.div
                                            key={i}
                                            className="flex items-start gap-4 p-4 bg-gray-50  mb-4 "
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: i * 0.1 }}
                                        >
                                            <DiamondStar className="text-maroon/70 h-5 w-5 mt-1 flex-shrink-0" />
                                            <p className="text-gray-700">{item}</p>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="text-center my-10 bg-gray-50 py-2 border"
                            >
                                <h2 className="text-3xl font-bold mb-3 text-[#0B3370]">
                                    Ready to Transform Your Career?
                                </h2>
                                <p className="text-gray-600 max-w-lg mx-auto">
                                    Join SSBM and unlock global opportunities with world-class learning.

                                </p>
                                <motion.div
                                    className="flex justify-center"
                                    animate={{ y: [0, 10, 0] }}
                                    transition={{ repeat: Infinity, duration: 1 }}
                                >
                                    <svg
                                        className="w-6 h-6 text-blue-600"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </motion.div>

                                <a
                                    href="https://www.sonabusinessschool.com/online-application?inst_id=ZFSQSGGCPYXQ9589"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <motion.button
                                        whileHover={{ scale: 1.06 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="mt-4  items-center gap-3 
      bg-gradient-to-r from-blue-600 to-maroon
      text-white font-semibold
      px-8 py-3 rounded-xl shadow-md
      hover:shadow-lg transition-transform duration-300"
                                    >
                                        Apply Now
                                    </motion.button>
                                </a>

                            </motion.div>


                            <motion.div

                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                            >
                                {/* Center Heading */}
                                <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
                                    Club Activities
                                </h3>

                                <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6 text-center ">
                                    Promotes data-driven thinking and analytical competency.
                                </p>

                                {/* Activities */}


                                {/* Outcomes + Image side-by-side */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10 items-start">

                                    {/* Activities */}
                                    <div>


                                        <div className="space-y-4 ">
                                            {[
                                                {
                                                    title: "Hackathons",
                                                    desc: "Real-world data problem-solving challenges"
                                                },
                                                {
                                                    title: "Decision-Making Activities",
                                                    desc: "Using analytics to improve managerial decision-making"
                                                },
                                                {
                                                    title: "Analytics Quiz ",
                                                    desc: "Tests on data tools, trends, and business intelligence."
                                                }
                                            ].map((item, i) => (
                                                <motion.div
                                                    key={i}
                                                    className="flex items-start gap-3 "
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.4, delay: i * 0.1 }}
                                                >
                                                    <DiamondStar className="text-maroon/70 h-5 w-5 mt-1 flex-shrink-0" />

                                                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                                                        <span className="text-maroon font-medium">{item.title}</span>
                                                        {" – "}
                                                        {item.desc}
                                                    </p>

                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Outcomes */}
                                    <div>
                                        <h4 className="text-xl font-semibold text-gray-800 mb-4">Outcomes</h4>

                                        <div className="space-y-4">
                                            {[
                                                "Ability to work with real data for informed decision-making",
                                                "Enhanced competency in analytical tools and problem-solving techniques",
                                                "Development of structured thinking through hackathons and analytics challenges.",
                                                "Improved interpretation and communication of data-driven insights."
                                            ].map((item, i) => (
                                                <motion.div
                                                    key={i}
                                                    className="flex items-start gap-3"
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.4, delay: i * 0.1 }}
                                                >
                                                    <DiamondStar className="text-maroon/70 h-5 w-5 mt-1 flex-shrink-0" />

                                                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                                                        {item}
                                                    </p>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>

                                </div>


                            </motion.div>

                        </motion.section>
                    )}

                    {activeTab === "hr" && (
                        <motion.section
                            key="hr"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative bg-white rounded-3xl p-6 md:p-14 max-w-7xl mx-auto overflow-hidden"
                        >
                            {/* Hero */}
                            <motion.div
                                className="text-center mb-8"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8 }}
                            >
                                <p className="text-gray-700  mx-auto text-sm md:text-base leading-relaxed text-justify">
                                    Students pursuing the HR specialization gain strategic insight and people‑centric expertise, preparing them for leadership roles across industries. They master talent acquisition, employee relations, performance management, and organizational development. The curriculum integrates real‑world case studies, interactive workshops, and a capstone project with leading companies across sectors. Faculty are seasoned HR practitioners who bring current trends and best practices into every classroom. Graduates emerge equipped to design inclusive cultures, drive employee engagement, and shape future‑ready HR strategies. The program also offers a global immersion module, giving them a perspective on international HR challenges. They step into HR leadership roles, aligning business objectives with a thriving, high‑performing workforce.
                                </p>
                            </motion.div>

                            {/* HR Sections 2 per row */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="text-center my-10 bg-gray-50 py-2 border"
                            >
                                <h2 className="text-3xl font-bold mb-3 text-[#0B3370]">
                                    Ready to Transform Your Career?
                                </h2>
                                <p className="text-gray-600 max-w-lg mx-auto">
                                    Join SSBM and unlock global opportunities with world-class learning.

                                </p>
                                <motion.div
                                    className="flex justify-center"
                                    animate={{ y: [0, 10, 0] }}
                                    transition={{ repeat: Infinity, duration: 1 }}
                                >
                                    <svg
                                        className="w-6 h-6 text-blue-600"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </motion.div>

                                <a
                                    href="https://www.sonabusinessschool.com/online-application?inst_id=ZFSQSGGCPYXQ9589"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <motion.button
                                        whileHover={{ scale: 1.06 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="mt-4  items-center gap-3 
      bg-gradient-to-r from-blue-600 to-maroon
      text-white font-semibold
      px-8 py-3 rounded-xl shadow-md
      hover:shadow-lg transition-transform duration-300"
                                    >
                                        Apply Now
                                    </motion.button>
                                </a>

                            </motion.div>

                            <motion.div

                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                            >
                                {/* Center Heading */}
                                <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
                                    Club Activities
                                </h3>

                                <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6 text-center ">
                                    Focused on developing people-management skills, the HR Club offers:
                                </p>

                                {/* Activities */}


                                {/* Outcomes + Image side-by-side */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10 items-start">

                                    {/* Activities */}
                                    <div>


                                        <div className="space-y-4">
                                            {[
                                                {
                                                    title: "Payroll Workshop",
                                                    desc: "Hands-on sessions on payroll processing and compliance"
                                                },
                                                {
                                                    title: "Team-Building Activitie",
                                                    desc: "Interactive exercises to strengthen leadership and collaboration"
                                                },
                                                {
                                                    title: "HR Simulation Games",
                                                    desc: "Real-time decision-making activities based on workplace situations"
                                                }
                                            ].map((item, i) => (
                                                <motion.div
                                                    key={i}
                                                    className="flex items-start gap-3"
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.4, delay: i * 0.1 }}
                                                >
                                                    <DiamondStar className="text-maroon/70 h-5 w-5 mt-1 flex-shrink-0" />

                                                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                                                        <span className="text-maroon font-medium">{item.title}</span>
                                                        {" – "}
                                                        {item.desc}
                                                    </p>

                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Outcomes */}
                                    <div>
                                        <h4 className="text-xl font-semibold text-gray-800 mb-4">Outcomes</h4>

                                        <div className="space-y-4">
                                            {[
                                                "Students gain practical knowledge of payroll management and HR operations.",
                                                "Enhanced ability to handle team dynamics and resolve people-related issues.",
                                                "Improved decision-making skills through real-time HR simulation activities",
                                                "Better understanding of employee engagement and organizational behavior."
                                            ].map((item, i) => (
                                                <motion.div
                                                    key={i}
                                                    className="flex items-start gap-3"
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.4, delay: i * 0.1 }}
                                                >
                                                    <DiamondStar className="text-maroon/70 h-5 w-5 mt-1 flex-shrink-0" />

                                                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                                                        {item}
                                                    </p>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>

                                </div>


                            </motion.div>
                        </motion.section>
                    )}




                </AnimatePresence>
            </div>
        </section>
    );
}
