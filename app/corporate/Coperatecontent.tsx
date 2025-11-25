"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import * as Icons from "lucide-react";
import Link from "next/link";
import {
    MdOutlineWorkspacePremium,
    MdPeople, MdPhone, MdEmail
} from "react-icons/md";
import {
    FaRegNewspaper,
    FaChalkboardTeacher,
    FaUsersCog,
    FaUserGraduate,
    FaUniversity,
    FaBookOpen,
    FaClock,
} from "react-icons/fa";
import DiamondStar from "../../components/DiamondStar";

export default function CorporatePage() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [activeTab, setActiveTab] = useState("distinguishedvisitors");
    const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
    const containerRef = useRef<HTMLDivElement | null>(null);

    /** Sections (Tabs) */
    const sections = [
        { id: "distinguishedvisitors", title: "Distinguished Visitors", icon: MdOutlineWorkspacePremium },
        { id: "industryassociates", title: "Industry Associates", icon: FaRegNewspaper },
        { id: "consulting", title: "Consulting", icon: FaRegNewspaper },
        { id: "industryinterface", title: "Industry Interface", icon: FaRegNewspaper },
    ];
    const tabVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
    };

    /** Banner Images */
    const tabImages: Record<string, string> = {
        distinguishedvisitors: "/images/banner/corporate-banners/distinguished-visitors.webp",
        industryassociates: "/images/banner/corporate-banners/industry-associates.webp",
        consulting: "/images/banner/corporate-banners/consulting.webp",
        industryinterface: "/images/banner/corporate-banners/industry-interface.webp",
    };

    const visitors = [
        {
            name: "T.R. Parasuraman",
            title: "Deputy Managing Director, Toyota Industries Engine India Pvt. Ltd.",
            img: "/images/corporate/parasuraman.jpg",

        },

        {
            name: "Kamal Bali",
            title: "President & Managing Director at Volvo Group, India, Bengaluru",
            img: "/images/corporate/kamal-bali.jpg",

        },
        {
            "name": "Mr. Sasi Enuamanu",
            "title": "Former AVP HP, Manager Emirates Airlines",
            "img": "/images/corporate/sasi-enuamanu.webp"
        },
        {
            "name": "Mr. Akhil Narayan",
            "title": "Human Resources, Maxburn, India",
            "img": "/images/corporate/akhil-narayan.webp"
        },
        {
            "name": "Mr. G. Girinarayanan",
            "title": "Sr. Partner, OD Consultant, Your HR Buddy, Ex-Tata Group, GE, Mercedes, Siemens",
            "img": "/images/corporate/g-girinarayanan.webp"
        },
        {
            "name": "GP Capt R. Vijaya Kumar",
            "title": "Executive Director, Madras Management Association",
            "img": "/images/corporate/gp-capt-r-vijaya-kumar.webp"
        },
        {
            "name": "Mr. A. Alauddin",
            "title": "Trainer (OBT)",
            "img": "/images/corporate/a-alauddin.webp"
        },
        {
            "name": "Ms. Kalpana",
            "title": "Alumnus of 2014 batch, Founder, The HR Scope",
            "img": "/images/corporate/ms-kalpana.webp"
        },
        {
            "name": "Mr. Braj Kishor Gupta",
            "title": "Founder and Chief Mentor, GiantStep",
            "img": "/images/corporate/braj-kishor-gupta.webp"
        },
        {
            "name": "Mr. Suresh G. Rao",
            "title": "Business Consultant – Strategy Projects, Sona Star Innovation",
            "img": "/images/corporate/suresh-g-rao.webp"
        },
        {
            "name": "Dr. Sheelan Misra",
            "title": "CEO, Unithink Education International",
            "img": "/images/corporate/dr-sheelan-misra.webp"
        },
        {
            "name": "Mr. K. Krishna Mohan",
            "title": "Visiting Professor, ISB & IIMB, Former General Manager & Global Head – Software Quality experience (SQX), Stellantis",
            "img": "/images/corporate/k-krishna-mohan.webp"
        },
        {
            "name": "Mr. Yash, CII",
            "title": "Director, Sharma Group of Companies",
            "img": "/images/corporate/yash-cii.webp"
        }


    ];

    const industryAssociates = [
        {
            name: "Vee Technologies",
            logo: "/images/corporate/vee-technologies.webp",
        },
        {
            name: "Janalakshmi Financial Services",
            logo: "/images/corporate/Janalakshmi.webp",
        },
        {
            name: "Triveni Cars Private Ltd",
            logo: "/images/corporate/thriveni-cars.webp",
        },
        {
            name: "JSW Steel Ltd",
            logo: "/images/corporate/jsw-steels.webp",
        },
        {
            name: "Fibro Foods",
            logo: "/images/corporate/fubro-foods.webp",
        },
        {
            name: "Sri Jayashree Food Products",
            logo: "/images/corporate/farm-harvest.webp",
        },
        {
            name: "My Play Factory",
            logo: "/images/corporate/my-play-factory.webp",
        },
        {
            name: "Sona STAR",
            logo: "/images/corporate/sona-star.webp",
        },
    ];



    /** Stats Example */
    const stats = [
        { icon: FaChalkboardTeacher, value: "30", label: "Management Development Programmes" },
        { icon: FaUsersCog, value: "6", label: "Research Workshops" },
        { icon: FaUserGraduate, value: "6", label: "Faculty Development" },
        { icon: FaBookOpen, value: "3", label: "National Seminars" },
        { icon: FaUniversity, value: "1", label: "Conferences" },
        { icon: FaClock, value: "4", label: "Short Term Programmes" },
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
        router.replace(`/corporate?tab=${tabId}`);
    };
    const services = [
        { name: "Market Research", icon: "BarChart3" },
        { name: "Financial Performance Analysis", icon: "TrendingUp" },
        { name: "Human Resource Management", icon: "Users" },
        { name: "Total Quality Management & ISO", icon: "BadgeCheck" },
        { name: "Retail Management", icon: "ShoppingBag" },
        { name: "Rural Marketing", icon: "TreePine" },
        { name: "Project Management", icon: "ClipboardList" },
        { name: "Lean Manufacturing", icon: "Factory" },
        { name: "Innovation & Creativity Management", icon: "Lightbulb" },
        { name: "Business Process Re-engineering & MIS", icon: "Workflow" },
    ];

    const currentSection = sections.find((s) => s.id === activeTab);
    
    useEffect(() => {
        if (!currentSection) return;

        const tabId = currentSection.id;

        // Document title
        document.title = `Corporate | ${currentSection.title} | Sona School of Business and Management`;

        // Meta description
        let metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
        if (!metaDesc) {
            metaDesc = document.createElement('meta');
            metaDesc.name = 'description';
            document.head.appendChild(metaDesc);
        }
        metaDesc.content = `Details about ${currentSection.title} at Sona School of Business and Management.`;

        // Robots
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
        linkCanonical.href = `https://www.sonabusinessschool.com/corporate?tab=${tabId}`;
    }, [currentSection]);


    return (
        <section className="w-full min-h-screen bg-gray-50 py-12 flex flex-col items-center">
            {/* Banner */}
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

                <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 w-full max-w-7xl px-4 sm:px-6">
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white drop-shadow-lg flex items-center gap-2">
                        {currentSection?.title}
                    </h1>



                    <div className="mt-3 sm:mt-4 w-full">
                        <nav className="flex flex-wrap text-white text-xs sm:text-sm md:text-base" aria-label="Breadcrumb">


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
                                        href="/corporate"
                                        className="hover:text-maroon cursor-pointer transition-colors text-white"
                                    >
                                        Corporate
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




            {/* Content Section */}
            <div className="w-full max-w-7xl mx-auto mt-8 px-4 sm:px-6 lg:px-8">
                <AnimatePresence mode="wait">

                    {activeTab === "distinguishedvisitors" && (
                        <motion.div
                            key="distinguishedvisitors"
                            variants={tabVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{ duration: 0.5 }}
                            className="bg-white rounded-3xl p-6 md:p-12 flex flex-col gap-12 max-w-7xl mx-auto text-gray-800"
                        >
                            <div className="relative max-w-6xl mx-auto flex flex-col gap-10">
                                {visitors.map((visitor, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8, ease: "easeOut", delay: idx * 0.1 }}
                                        viewport={{ once: true, amount: 0.2 }}
                                        className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10"
                                    >
                                        {/* Avatar */}
                                        <div className="flex-shrink-0 mx-auto md:mx-0">
                                            {visitor.img ? (
                                                <img
                                                    src={visitor.img}
                                                    alt={visitor.name}
                                                    className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-gold shadow-lg object-cover"
                                                />
                                            ) : (
                                                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gray-200 flex items-center justify-center text-2xl font-bold text-gray-500">
                                                    V
                                                </div>
                                            )}
                                        </div>

                                        {/* Card */}
                                        <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-200  p-6  hover:shadow-xl transition-transform transform hover:-translate-y-2 flex-1">
                                            <h3 className="text-xl md:text-2xl font-semibold text-maroon">{visitor.name}</h3>
                                            <p className="text-sm md:text-base text-gray-600">{visitor.title}</p>

                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}



                    {activeTab === "industryassociates" && (
                        <motion.div
                            key="industryassociates"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.6 }}
                            className="bg-white rounded-2xl p-6 md:p-10 max-w-7xl mx-auto text-gray-800"
                        >


                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 items-center">
                                {industryAssociates.map((company, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                                        viewport={{ once: true }}
                                        className="flex flex-col items-center justify-center"
                                    >
                                        {/* Logo with hover animation */}
                                        <motion.img
                                            src={company.logo}
                                            alt={company.name}
                                            className="h-20 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                                            whileHover={{ scale: 1.15, rotate: 2 }}
                                        />

                                        {/* Name under logo */}
                                        <p className="mt-4 text-sm md:text-base  text-maroon  transition-colors duration-300">
                                            {company.name}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {activeTab === "consulting" && (
                        <motion.div
                            key="consulting"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.6 }}
                            className="bg-white rounded-2xl p-6 md:p-10 max-w-7xl mx-auto text-gray-800"
                        >


                            {/* Services Grid */}
                            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                                {services.map((service, idx) => {
                                    const Icon = (Icons as any)[service.icon];
                                    return (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                                            viewport={{ once: true }}
                                            className="h-[9em] w-full max-w-[15em] bg-white m-auto rounded-[1em] overflow-hidden relative group px-4 py-3 z-0 shadow-md flex flex-col justify-center items-center text-center"
                                        >
                                            {/* Expanding Circle Animation */}
                                            <div className="absolute h-[5em] w-[5em] -top-[2.5em] -right-[2.5em] rounded-full bg-gray-300 group-hover:scale-[800%] duration-500 z-[-1]" />

                                            {/* Icon */}
                                            <Icon className="h-8 w-8 text-maroon mb-2 group-hover:text-maroon duration-500" />

                                            {/* Title */}
                                            <h1 className="z-20 font-semibold group-hover:text-maroon duration-500 text-sm md:text-base leading-snug">
                                                {service.name}
                                            </h1>
                                        </motion.div>
                                    );
                                })}
                            </div>


                            {/* Industry Sponsored Projects */}
                            <div className="mt-16 text-start">
                                <h3 className="text-xl md:text-2xl font-bold text-maroon mb-6">
                                    Industry Sponsored & CSR Projects
                                </h3>
                                <p className="text-gray-700  mx-auto leading-relaxed">
                                    Sona School of Business and Management also undertakes{" "}
                                    <span className="font-semibold">Industry Sponsored Research Projects</span>
                                    and <span className="font-semibold">CSR Projects</span>.
                                    <br></br>It presently works on the ICSSR project titled:
                                </p>
                                <blockquote className="mt-6 border-l-4 border-maroon pl-6 italic text-gray-600">
                                    “Voices of Tradition: Exploring the Social Dynamics of Handloom Weaving
                                    Communities in Tamil Nadu”
                                </blockquote>
                            </div>
                        </motion.div>
                    )}


                    {activeTab === "industryinterface" && (
                        <motion.div
                            key="industryinterface"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.6 }}
                            className="relative bg-white to-gray-100 rounded-2xl p-6 md:p-10 max-w-7xl mx-auto text-gray-800 "
                        >


                            {/* Objectives */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="bg-white/70 backdrop-blur-md shadow-sm p-6 mb-8 border border-gray-100"
                            >
                                <h3 className="text-xl font-semibold text-maroon mb-4 flex items-center gap-2">
                                    <Icons.Target className="h-5 w-5 text-maroon" /> Objectives
                                </h3>
                                <p className="leading-relaxed text-gray-700 text-justify">
                                    To offer <span className="font-semibold">Management Development Programmes (MDPs)</span>,{" "}
                                    <span className="font-semibold">Faculty Development Programmes (FDPs)</span> and{" "}
                                    <span className="font-semibold">Business / Management Consultancy Services</span> to Organisations.
                                </p>
                            </motion.div>

                            {/* Activities + Our Team in one flex container */}
                            <div className="flex flex-col md:flex-row gap-8">
                                {/* Activities */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    viewport={{ once: true }}
                                    className="flex-1 bg-white/70 backdrop-blur-md  shadow-sm p-6 border border-gray-100"
                                >
                                    <h3 className=" font-semibold text-maroon mb-4 flex items-center gap-2">
                                        <Icons.Activity className="h-5 w-5 text-maroon" /> Activities
                                    </h3>
                                    <ul className="space-y-4 text-gray-700">
                                        {[
                                            "Customised Management Development Programmes (MDPs)",
                                            "Management & Faculty Development Programmes (FDPs)",
                                            "Need-based Courses on Management",
                                            "Consultancy Services in: Market Research, Financial Performance Analysis, HRM, TQM & ISO, Retail Management, Rural Marketing, Project Management, Lean Manufacturing, Innovation & Creativity Management, BPR & MIS",
                                            "Industry Sponsored Research Projects",
                                            "CSR Projects",
                                        ].map((item, idx) => (
                                            <motion.li
                                                key={idx}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                                                viewport={{ once: true }}
                                                className="flex items-start gap-3 text-justify leading-relaxed"
                                            >
                                                {/* DiamondStar bullet */}
                                                <motion.div
                                                    transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
                                                    className="mt-1 text-maroon shrink-0"
                                                >
                                                    <DiamondStar className="h-4 w-4 text-maroon/70 fill-maroon" />
                                                </motion.div>
                                                <span className="flex-1">{item}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </motion.div>

                                {/* Our Team */}
                                {/* <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                    viewport={{ once: true }}
                                    className="flex-1 bg-white/70 backdrop-blur-md  shadow-sm p-6 border border-gray-100"
                                >
                                    <h3 className="text-xl font-semibold text-maroon mb-6 flex items-center gap-2">
                                        <MdPeople className="h-5 w-5 text-maroon" /> Our Team
                                    </h3>

                                    <div className="space-y-6">
                                    
                                        <div className="space-y-2">
                                            <h4 className="font-semibold text-lg text-gray-800">Team Head</h4>
                                            <p className="text-gray-700">Dr. D. Immanuel, Head – Industry Interface</p>
                                            <p className="text-gray-600 flex items-center gap-2">
                                                <MdPhone className="h-4 w-4 text-maroon" /> 0427 4099818
                                            </p>
                                            <p className="text-gray-600 flex items-center gap-2 flex-wrap">
                                                <MdEmail className="h-4 w-4 text-maroon" />
                                                <a href="mailto:immanuel@sonamgmt.org" className="text-maroon hover:underline">
                                                    immanuel@sonamgmt.org
                                                </a>
                                                /
                                                <a href="mailto:placement@sonamgmt.org" className="text-maroon hover:underline">
                                                    placement@sonamgmt.org
                                                </a>
                                            </p>
                                        </div>

                                  
                                        <div className="space-y-2">
                                            <h4 className="font-semibold text-lg text-gray-800">Core Team</h4>
                                            <p className="text-gray-700">Mr. G. Padmanaban, Assistant Professor</p>
                                            <p className="text-gray-600 flex items-center gap-2">
                                                <MdPhone className="h-4 w-4 text-maroon" /> 0427 4099818
                                            </p>
                                        </div>
                                    </div>
                                </motion.div> */}
                            </div>
                        </motion.div>
                    )}






                </AnimatePresence>
            </div>
        </section>
    );
}
