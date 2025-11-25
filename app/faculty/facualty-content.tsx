"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FaChalkboardTeacher, FaUserGraduate, FaBookOpen, FaFileAlt } from "react-icons/fa";
import { Mail, Phone, Linkedin } from "lucide-react";
import DiamondStar from "../../components/DiamondStar";
import { facultyMembers } from "../../data/facultymembers";
import Link from "next/link";
import GuestLectures from "../../components/Guestlectures";
import FacultyPublications from "../../components/FacultyPublications";
import Notiflix from "notiflix";
export default function FacualtyPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [activeTab, setActiveTab] = useState("facultyinfo");
    const [selectedFaculty, setSelectedFaculty] = useState<any>(null);
    const [isOpen, setIsOpen] = useState(false);
    const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
    const [openYear, setOpenYear] = useState<string | null>("2024-25");
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [openTeaching2, setOpenTeaching2] = useState(false);
    const [openTeaching3, setOpenTeaching3] = useState(false);
    const [openTeaching, setOpenTeaching] = useState(false);
    const sections = [
        { id: "facultyinfo", title: "Faculty Information", icon: FaChalkboardTeacher },
        { id: "guest", title: "Guest Lecture", icon: FaUserGraduate },
        { id: "teaching", title: "Teaching Learning Initiative", icon: FaBookOpen },
        // { id: "publications", title: "Faculty publications", icon: FaFileAlt },
    ];

    useEffect(() => {
        const tab = searchParams.get("tab");
        if (tab && sections.some((s) => s.id === tab.toLowerCase())) {
            setActiveTab(tab.toLowerCase());
        }

        // 👇 open faculty popup if query exists
        const facultyName = searchParams.get("faculty");
        if (facultyName) {
            const found = facultyMembers.find(
                (f) => f.name.toLowerCase() === facultyName.toLowerCase()
            );
            if (found) {
                setSelectedFaculty(found);
            }
        }
    }, [searchParams]);









    // Sample data for Adhoc Faculty
    const adhocFaculty = [
        {
            sno: 1,
            name: "M.Priyanka",
            designation: "Adhoc Faculty",
        },
        {
            sno: 2,
            name: "U.Vigneshwar",
            designation: "Adhoc Faculty",
        },
    ];
    // Sample data for Non-Teaching Staff
    const nonTeachingStaff = [
        {
            sno: 1,
            name: "P.Gokulanathan",
            designation: "Lab Technician",
            qualification: "BBA",
        },
        {
            sno: 2,
            name: "R.Prakash",
            designation: "Administrative Assistant",
            qualification: "B.Sc(Physics)",
        },
        {
            sno: 3,
            name: "P J.Jesuraj",
            designation: "Secretarial Assistant",
            qualification: "B.Com",
        },
    ];

    useEffect(() => {
        const tab = searchParams.get("tab");
        if (tab && sections.some((s) => s.id === tab.toLowerCase())) {
            setActiveTab(tab.toLowerCase());
        }
    }, [searchParams]);

    const handleTabChange = (tabId: string) => {
        setActiveTab(tabId);
        router.replace(`/faculty?tab=${tabId}`);
    };

    const tabImages: Record<string, string> = {
        facultyinfo: "/images/banner/faculty-banners/faculty-information.webp",
        guest: "/images/banner/faculty-banners/guest-lecture.webp",
        teaching: "/images/banner/faculty-banners/teaching-learning.webp",
        publications: "/images/banner/faculty-banners/"
    };

    const currentSection = sections.find((s) => s.id === activeTab);

    useEffect(() => {
        if (!currentSection) return;

        // Faculty name from selectedFaculty or URL param
        const facultyName = selectedFaculty?.name || searchParams.get("faculty") || "";
        const tabId = currentSection.id;

        // Document title
        document.title = `Faculty | ${currentSection.title}${facultyName ? ` | ${facultyName}` : ""} | Sona School of Business and Management`;

        // Meta description
        let metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
        if (!metaDesc) {
            metaDesc = document.createElement('meta');
            metaDesc.name = 'description';
            document.head.appendChild(metaDesc);
        }
        metaDesc.content = facultyName
            ? `Profile of ${facultyName} in ${currentSection.title} at Sona School of Business and Management.`
            : `Information about ${currentSection.title} faculty at Sona School of Business and Management.`;

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

        // Encode faculty name for URL safety
        const encodedFaculty = encodeURIComponent(facultyName);
        linkCanonical.href = facultyName
            ? `https://www.sonabusinessschool.com/faculty?tab=${tabId}&faculty=${encodedFaculty}`
            : `https://www.sonabusinessschool.com/faculty?tab=${tabId}`;
    }, [currentSection, selectedFaculty, searchParams]);



    useEffect(() => {
        const handleEsc = (e: any) => {
            if (e.key === "Escape") setSelectedFaculty(null);
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, []);

    const handleTeaching1 = () => {
        setOpenTeaching(!openTeaching);
        setOpenTeaching2(false);
        setOpenTeaching3(false);
    };

    const handleTeaching2 = () => {
        setOpenTeaching(false);
        setOpenTeaching2(!openTeaching2);
        setOpenTeaching3(false);
    };

    const handleTeaching3 = () => {
        setOpenTeaching(false);
        setOpenTeaching2(false);
        setOpenTeaching3(!openTeaching3);
    };

    const tabVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
    };

    return (
        <section className="w-full min-h-screen bg-gray-50 py-12 flex flex-col items-center">
            {/* Top Image with Title */}
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
                                        href="/faculty"
                                        className="hover:text-maroon cursor-pointer transition-colors text-white"
                                    >
                                        Faculty
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






            {/* Content */}
            <div className="w-full max-w-7xl mx-auto mt-6 sm:mt-8 md:mt-10 relative flex flex-col gap-6 sm:gap-8 md:gap-10 px-4 sm:px-6 lg:px-6">
                <AnimatePresence mode="wait">
                    {/* You can render section-specific content here using Framer Motion */}

                    {/* Faculty Information */}
                    {activeTab === "facultyinfo" && (
                        <motion.div
                            key="facultyinfo"
                            variants={tabVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{ duration: 0.5 }}
                            className="bg-white rounded-2xl p-6 md:p-10 flex flex-col gap-12"
                        >
                            {/* Section: Regular Faculty */}
                            <section>
                                <h2 className="text-xl md:text-2xl font-bold text-maroon text-center mb-4">
                                    Faculty Team
                                </h2>
                                <p className="text-gray-700 text-center  text-sm sm:text-base md:text-lg max-w-3xl mx-auto mb-8">
                                    Our highly experienced faculty bring a wealth of industry and research knowledge,
                                    enriching the classroom experience.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {facultyMembers.map((faculty, index) => (
                                        <motion.div
                                            key={index}
                                            whileHover={{ scale: 1.05 }}
                                            onClick={() => setSelectedFaculty(faculty)}
                                            className="relative cursor-pointer bg-white  overflow-hidden  hover:shadow-2xl transition-all flex flex-col text-center"
                                        >
                                            {/* Banner background (maroon -> white gradient) */}
                                            <div className="w-full h-24 bg-gradient-to-r from-white via-gray-100 to-white"></div>


                                            {/* Profile image */}
                                            <div className="relative -mt-12 flex justify-center">
                                                <img
                                                    src={faculty.photo}
                                                    alt={faculty.name}
                                                    className="w-40 h-40 rounded-full object-cover border-4 border-yellow-400 shadow-md"

                                                />

                                            </div>

                                            {/* Main text content */}
                                            <div className="p-4">
                                                <h3 className="font-semibold text-lg md:text-xl text-maroon">{faculty.name}</h3>
                                                <p className="text-gray-700 text-sm md:text-base">{faculty.designation}</p>
                                                <p className="text-gray-600 text-xs md:text-sm italic">{faculty.department}</p>
                                            </div>

                                        </motion.div>
                                    ))}



                                </div>
                            </section>


                            {/* Section: Adhoc Faculty */}
                            <section >
                                <h2 className="text-xl md:text-2xl font-bold text-maroon text-center mb-6">
                                    Adhoc Faculty
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                                    {adhocFaculty.map((person: any, index: number) => (
                                        <div
                                            key={index}
                                            className="relative bg-white overflow-hidden transition hover:shadow-2xl"
                                        >
                                            {/* Gradient Top Bar */}
                                            <div className="w-full h-20 bg-gradient-to-r from-white via-gray-100 to-white"></div>

                                            {/* Profile image / fallback */}
                                            <div className="relative -mt-12 flex justify-center">
                                                <div className="w-24 h-24 flex items-center justify-center rounded-full border-4 border-yellow-400 bg-gray-200 text-maroon text-2xl font-bold shadow-md">
                                                    {person.name.charAt(0)}
                                                </div>
                                            </div>

                                            {/* Main text content */}
                                            <div className="p-4 text-center">
                                                <h3 className="font-semibold text-lg md:text-xl text-maroon">
                                                    {person.name}
                                                </h3>
                                                <p className="text-gray-700 text-sm md:text-base">
                                                    {person.designation}
                                                </p>
                                                {person.qualification && (
                                                    <p className="text-gray-500 text-xs md:text-sm italic">
                                                        {person.qualification}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Section: Non-Teaching Staff */}
                            <section>
                                <h2 className="text-xl md:text-2xl font-bold text-maroon text-center mb-6">
                                    Non-Teaching Staff
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                                    {nonTeachingStaff.map((person: any, index: number) => (
                                        <div
                                            key={index}
                                            className="relative bg-white overflow-hidden transition hover:shadow-2xl"
                                        >
                                            {/* Gradient Top Bar */}
                                            <div className="w-full h-20 bg-gradient-to-r from-white via-gray-100 to-white"></div>

                                            {/* Profile image / fallback */}
                                            <div className="relative -mt-12 flex justify-center">
                                                <div className="w-24 h-24 flex items-center justify-center rounded-full border-4 border-yellow-400 bg-gray-200 text-maroon text-2xl font-bold shadow-md">
                                                    {person.name.charAt(0)}
                                                </div>
                                            </div>

                                            {/* Main text content */}
                                            <div className="p-4 text-center">
                                                <h3 className="font-semibold text-lg md:text-xl text-maroon">
                                                    {person.name}
                                                </h3>
                                                <p className="text-gray-700 text-sm md:text-base">
                                                    {person.designation}
                                                </p>
                                                {person.qualification && (
                                                    <p className="text-gray-500 text-xs md:text-sm italic">
                                                        {person.qualification}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>




                            {/* Faculty Modal */}
                            <AnimatePresence>
                                {selectedFaculty && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 sm:p-6"
                                    >
                                        <motion.div
                                            initial={{ x: 100, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            exit={{ x: -100, opacity: 0 }}
                                            transition={{ duration: 0.5, ease: "easeInOut" }}
                                            className="bg-white rounded-2xl w-full max-w-md sm:max-w-2xl md:max-w-3xl shadow-2xl relative flex flex-col"
                                        >
                                            {/* Close button */}
                                            <motion.button
                                                onClick={() => setSelectedFaculty(null)}
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{ duration: 0.3, ease: "backOut" }}
                                                className="absolute -top-4 -right-4 sm:-top-5 sm:-right-5 bg-white text-blue-900 rounded-full shadow-lg w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center hover:bg-maroon hover:text-white transition z-20"
                                            >
                                                ✕
                                            </motion.button>

                                            {/* Banner with profile and contacts */}
                                            <motion.div
                                                initial={{ x: "-100%" }}
                                                animate={{ x: 0 }}
                                                transition={{ duration: 0.7, ease: "easeOut" }}
                                                className="h-32 sm:h-40 w-full bg-gradient-to-r from-gray-600 to-gray-300 relative flex flex-col sm:flex-row items-center sm:items-center"
                                            >
                                                {/* Profile image */}
                                                <div className="absolute left-1/2 -bottom-12 sm:left-6 sm:bottom-[-3.5rem] transform -translate-x-1/2 sm:translate-x-0">
                                                    <img
                                                        src={selectedFaculty.photo}
                                                        alt={selectedFaculty.name}
                                                        className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full object-cover border-4 border-yellow-400 shadow-xl"
                                                    />

                                                </div>

                                                {/* Contact details */}
                                                {/* Contact details (desktop only) */}
                                                <div className="hidden sm:block mt-2 sm:mt-4 sm:ml-auto sm:pr-6 text-maroon text-xs sm:text-sm space-y-2 text-right">
                                                    <div className="flex items-center gap-2 justify-end">
                                                        <Mail className="w-4 h-4 sm:w-5 sm:h-5 bg-white/20 p-1 rounded-md" />
                                                        <a href={`mailto:${selectedFaculty.email}`} className="hover:underline truncate max-w-[160px] sm:max-w-none">
                                                            {selectedFaculty.email || "sonastaff@gmail.com"}
                                                        </a>
                                                    </div>
                                                    <div className="flex items-center gap-2 justify-end">
                                                        <a
                                                            href={`tel:${selectedFaculty.phone || "892829929"}`}
                                                            className="flex items-center gap-2 hover:text-maroon transition-colors"
                                                        >
                                                            <Phone className="w-4 h-4 sm:w-5 sm:h-5 bg-white/20 p-1 rounded-md" />
                                                            <span className="truncate">{selectedFaculty.phone || "892829929"}</span>
                                                        </a>
                                                    </div>

                                                    <div className="flex items-center gap-2 justify-end">
                                                        <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 bg-white/20 p-1 rounded-md" />
                                                        <a href={selectedFaculty.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                                            LinkedIn
                                                        </a>
                                                    </div>
                                                </div>

                                            </motion.div>

                                            {/* Content */}
                                            <div className="pt-16 sm:pt-20 px-4 sm:px-6 pb-6 text-center">
                                                <h3 className="text-lg sm:text-2xl font-bold text-maroon">
                                                    {selectedFaculty.name}
                                                </h3>

                                                {/* Contact details (mobile only) */}
                                                <div className="block sm:hidden  space-y-2 text-xs text-gray-700">
                                                    <div className="flex items-center gap-2 justify-center">
                                                        <Mail className="w-4 h-4 bg-gray-200 p-1 rounded-md" />
                                                        <a href={`mailto:${selectedFaculty.email}`} className="hover:underline truncate max-w-[200px]">
                                                            {selectedFaculty.email || "sonastaff@gmail.com"}
                                                        </a>
                                                    </div>
                                                    <div className="flex items-center gap-2 justify-center">
                                                        <Phone className="w-4 h-4 bg-gray-200 p-1 rounded-md" />
                                                        <span>{selectedFaculty.phone || "892829929"}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2 justify-center">
                                                        <Linkedin className="w-4 h-4 bg-gray-200 p-1 rounded-md" />
                                                        <a href={selectedFaculty.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                                            LinkedIn
                                                        </a>
                                                    </div>
                                                </div>

                                                <span className="inline-block bg-yellow-200 text-yellow-800 text-xs sm:text-sm font-semibold px-3 py-1 rounded-full mt-1">
                                                    {selectedFaculty.designation}
                                                </span>
                                                <p className="text-gray-600 mt-1 text-xs sm:text-base">{selectedFaculty.department}</p>

                                                <p className="text-gray-600 text-xs  sm:text-sm mt-4 sm:mt-6 leading-relaxed text-justify">
                                                    {selectedFaculty.description}
                                                </p>



                                                <div className="flex justify-center">
                                                    <button
                                                        onClick={() => {
                                                            if (selectedFaculty?.cvcontent) {
                                                                setIsOpen(true);
                                                            } else {
                                                                Notiflix.Notify.failure("No CV content available for this faculty.");
                                                            }
                                                        }}
                                                        className="mt-6 px-8 py-2 bg-maroon text-white rounded-lg shadow-md hover:bg-maroon/80 transition flex items-center gap-2"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="w-5 h-5"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h7l5 5v12a2 2 0 01-2 2z"
                                                            />
                                                        </svg>
                                                        <span>CV</span>
                                                    </button>
                                                </div>


                                            </div>
                                        </motion.div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <AnimatePresence>
                                {isOpen && selectedFaculty && (
                                    <motion.div
                                        className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    >
                                        <motion.div
                                            className="bg-white rounded-none  w-full md:w-3/4 lg:w-2/3 xl:w-1/2 h-full overflow-y-auto p-6"
                                            initial={{ y: "100%", opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            exit={{ y: "100%", opacity: 0 }}
                                            transition={{ duration: 0.4, ease: "easeInOut" }}
                                        >
                                            {/* Close Button */}
                                            <div className="flex justify-end sticky top-0 z-10 pb-2">
                                                <button
                                                    onClick={() => setIsOpen(false)}
                                                    className="text-gray-600 hover:text-maroon text-2xl font-bold"
                                                >
                                                    ✕
                                                </button>
                                            </div>

                                            {/* CV Content */}
                                            <h2 className="text-2xl font-bold mb-4 text-maroon">Curriculum Vitae</h2>

                                            {selectedFaculty.cvcontent ? (
                                                <div
                                                    className="space-y-6 text-gray-800 prose max-w-none text-sm"
                                                    dangerouslySetInnerHTML={{ __html: selectedFaculty.cvcontent }}
                                                />
                                            ) : (
                                                <p className="text-gray-500 italic">
                                                    No CV content available for this faculty.
                                                </p>
                                            )}
                                        </motion.div>
                                    </motion.div>
                                )}
                            </AnimatePresence>


                        </motion.div>
                    )}





                    {/* Guest Lecture */}
                    {activeTab === "guest" && (
                        <div className="space-y-8">
                            <GuestLectures />

                        </div>
                    )}


                    {activeTab === "teaching" && (
                        <div className="space-y-8">

                            {/* ------------------------ EVENT 2 ------------------------ */}
                            <div className="max-w-7xl mx-auto bg-white border border-gray-200 overflow-hidden">
                                {/* Header */}
                                <div className="bg-gray-50 px-5 py-3 flex justify-between items-center">
                                    <span className="text-xs font-semibold text-gray-500">EVENT</span>
                                    <span className="text-sm text-gray-600 flex items-center gap-1">
                                        📅 September 30, 2025
                                    </span>
                                </div>

                                {/* Body */}
                                <div className="p-6 space-y-3">
                                    <h3 className="text-lg font-bold text-maroon">
                                        Industrial Relations and Labour Welfare
                                    </h3>
                                    <p className="text-gray-700">
                                        Moot Court Presentation
                                    </p>
                                    <button
                                        onClick={handleTeaching2}
                                        className="text-blue-700 hover:underline font-medium text-sm"
                                    >
                                        {openTeaching2 ? "Hide details <<" : "Read more >>"}
                                    </button>
                                </div>


                                {/* Expanded Content 2 */}
                                <AnimatePresence>
                                    {openTeaching2 && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            transition={{ duration: 0.5, ease: "easeInOut" }}
                                            className="max-w-7xl mx-auto bg-white  p-6 space-y-12"
                                        >
                                            <h3 className="text-2xl font-bold text-maroon text-center">
                                                Industrial Relations and Labour Welfare – Moot Court Presentation
                                            </h3>

                                            <div className="flex flex-col md:flex-row items-start gap-6">
                                                <div className="md:w-3/5 text-justify text-gray-600 leading-relaxed text-sm sm:text-base">
                                                    This activity simulates real-world industrial relations scenarios,
                                                    preparing students for careers in <strong>HR</strong>, <strong>Industrial Relations (IR)</strong>,
                                                    or <strong>Labour Laws</strong>.
                                                </div>
                                                <img
                                                    src="https://res.cloudinary.com/dscqejyxy/image/upload/v1760007086/Picture2_biswxp.jpg"
                                                    className="md:w-2/5 h-full object-cover shadow-md"
                                                    alt="Moot Court Presentation"
                                                />
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>


                            {/* ------------------------ EVENT 3 ------------------------ */}
                            <div className="max-w-7xl mx-auto bg-white border border-gray-200 overflow-hidden">
                                {/* Header */}
                                <div className="bg-gray-50 px-5 py-3 flex justify-between items-center">
                                    <span className="text-xs font-semibold text-gray-500">EVENT</span>
                                    <span className="text-sm text-gray-600 flex items-center gap-1">
                                        📅 October 2025
                                    </span>
                                </div>

                                {/* Body */}
                                <div className="p-6 space-y-3">
                                    <h3 className="text-lg font-bold text-maroon">
                                        Mapping Current Events to Sustainable Development Goals (SDGs)
                                    </h3>
                                    <p className="text-gray-700">
                                        P23MBA302 – Environment, Social and Governance
                                    </p>
                                    <button
                                        onClick={handleTeaching3}
                                        className="text-blue-700 hover:underline font-medium text-sm"
                                    >
                                        {openTeaching3 ? "Hide details <<" : "Read more >>"}
                                    </button>
                                </div>

                                <AnimatePresence>
                                    {openTeaching3 && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            transition={{ duration: 0.5, ease: "easeInOut" }}
                                            className="max-w-7xl mx-auto bg-white p-6 space-y-12"
                                        >
                                            <h3 className="text-2xl font-bold text-maroon text-center">
                                                Mapping Current Events to Sustainable Development Goals (SDGs)
                                            </h3>

                                            <div className="flex flex-col md:flex-row items-start gap-6">
                                                <div className="md:w-3/5 text-gray-700 text-sm sm:text-base leading-relaxed space-y-3">
                                                    <p>
                                                        <strong>Title of the Initiative:</strong> Mapping Current Events to Sustainable Development Goals (SDGs)
                                                    </p>
                                                    <p>
                                                        <strong>Course code and Course Name:</strong> P23MBA302 - Environment, Social and Governance
                                                    </p>
                                                    <p>
                                                        <strong>Objectives:</strong> To help students understand how real-world events and actions relate to the UN Sustainable Development Goals (SDGs) and the broader Environmental, Social, and Governance (ESG) framework.
                                                    </p>

                                                    <p><strong>Description: Instructions:</strong></p>

                                                    <ul className="space-y-2">
                                                        <li className="flex items-start gap-2">
                                                            <DiamondStar className="w-4 h-4 text-maroon mt-1" />
                                                            <span>Find at least 3 recent newspaper clippings (print or online) from credible sources.</span>
                                                        </li>

                                                        <li className="flex items-start gap-2">

                                                            <span>
                                                                Articles should relate to environmental protection, social responsibility, or governance issues.
                                                                Can also choose more diverse topics within ESG, like:
                                                            </span>
                                                        </li>

                                                        <ul className="ml-6 space-y-2">
                                                            <li className="flex items-start gap-2">
                                                                <DiamondStar className="w-3 h-3 text-maroon mt-1" />
                                                                <span>Corporate diversity policies (Social)</span>
                                                            </li>
                                                            <li className="flex items-start gap-2">
                                                                <DiamondStar className="w-3 h-3 text-maroon mt-1" />
                                                                <span>Anti-corruption measures (Governance)</span>
                                                            </li>
                                                            <li className="flex items-start gap-2">
                                                                <DiamondStar className="w-3 h-3 text-maroon mt-1" />
                                                                <span>Renewable energy investments (Environmental)</span>
                                                            </li>
                                                        </ul>

                                                        <li className="flex items-start gap-2">
                                                            <DiamondStar className="w-4 h-4 text-maroon mt-1" />
                                                            <span>Paste each news cutting neatly on an A4 or chart paper.</span>
                                                        </li>

                                                        <li className="flex items-start gap-2">
                                                            <DiamondStar className="w-4 h-4 text-maroon mt-1" />
                                                            <span>
                                                                Below each article, write:<br />
                                                                a) The relevant SDG(s) it connects to (at least one, can be more).<br />
                                                                b) A brief description of the SDG goal (2–3 sentences).<br />
                                                                c) Your explanation of how the news relates to the SDG (4–5 sentences).
                                                            </span>
                                                        </li>

                                                        <li className="flex items-start gap-2">
                                                            <DiamondStar className="w-4 h-4 text-maroon mt-1" />
                                                            <span>Can provide suggestions to improve the SDGs and green strategies for the news.</span>
                                                        </li>

                                                        <li className="flex items-start gap-2">
                                                            <DiamondStar className="w-4 h-4 text-maroon mt-1" />
                                                            <span>Include proper citations for news sources.</span>
                                                        </li>

                                                        <li className="flex items-start gap-2">
                                                            <DiamondStar className="w-4 h-4 text-maroon mt-1" />
                                                            <span>Submit it as physical copy.</span>
                                                        </li>
                                                    </ul>

                                                    <p className="mt-4 font-semibold">Evaluation Criteria:</p>
                                                    <ul className="space-y-2">
                                                        <li className="flex items-start gap-2">
                                                            <DiamondStar className="w-4 h-4 text-maroon mt-1" />
                                                            <span>Relevance of news to SDGs. (5 marks)</span>
                                                        </li>
                                                        <li className="flex items-start gap-2">
                                                            <DiamondStar className="w-4 h-4 text-maroon mt-1" />
                                                            <span>Clarity of mapping. (5 marks)</span>
                                                        </li>
                                                        <li className="flex items-start gap-2">
                                                            <DiamondStar className="w-4 h-4 text-maroon mt-1" />
                                                            <span>Quality of explanation. (5 marks)</span>
                                                        </li>
                                                        <li className="flex items-start gap-2">
                                                            <DiamondStar className="w-4 h-4 text-maroon mt-1" />
                                                            <span>Presentation neatness. (5 marks)</span>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <img
                                                    src="https://res.cloudinary.com/dscqejyxy/image/upload/v1760007095/Picture1_u0slks.jpg"
                                                    className="md:w-2/5 h-full object-cover shadow-md"
                                                    alt="SDG Mapping Activity"
                                                />
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>



                            {/* ------------------------ EVENT 1 ------------------------ */}
                            <div className="max-w-7xl mx-auto bg-white border border-gray-200 overflow-hidden">
                                {/* Header */}
                                <div className="bg-gray-50 px-5 py-3 flex justify-between items-center">
                                    <span className="text-xs font-semibold text-gray-500">EVENT</span>
                                    <span className="text-sm text-gray-600 flex items-center gap-1">
                                        📅 May 22, 2022
                                    </span>
                                </div>

                                {/* Body */}
                                <div className="p-6 space-y-3">
                                    <h3 className="text-lg font-bold text-maroon">
                                        Business Analytics (P19MBA770)
                                    </h3>
                                    <p className="text-gray-700">
                                        Towards Zero Accidents in Thoppur Ghat Section.
                                    </p>
                                    <button
                                        onClick={handleTeaching1}
                                        className="text-blue-700 hover:underline font-medium text-sm"
                                    >
                                        {openTeaching ? "Hide details <<" : "Read more >>"}
                                    </button>
                                </div>

                                {/* Expanded Content 1 */}
                                <AnimatePresence>
                                    {openTeaching && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            transition={{ duration: 0.5, ease: "easeInOut" }}
                                            className="max-w-7xl mx-auto bg-white  p-6 space-y-12"
                                        >
                                            {/* Article Title */}
                                            <h3 className="text-2xl font-bold text-maroon text-center">
                                                Towards Zero Accidents in Thoppur Ghat Section
                                            </h3>

                                            {/* Section 1 */}
                                            <div className="flex flex-col md:flex-row items-start gap-6">
                                                <div className="md:w-3/5 text-justify text-gray-600 leading-relaxed text-sm sm:text-base">
                                                    Initially we presented our report on <strong>"Road Accidents in Thoppur"</strong>
                                                    in the presence of DSP-Thoppur, Inspector of Police, RTO, Deputy Transport Commissioner,
                                                    Officials of RTO, and L & T Toll Management Officials. It was a great time discussing
                                                    the accident patterns over the past ten years, factors influencing road accidents, and
                                                    preventive measures. Based on their inputs, the final report was redrafted.
                                                </div>
                                                <img
                                                    src="/images/faculty/thoppur-ghat-section.jpg"
                                                    className="md:w-2/5 h-56 object-cover  shadow-md"
                                                    alt="Lecture"
                                                />
                                            </div>

                                            {/* Section 2 */}
                                            <div className="flex flex-col md:flex-row-reverse items-start gap-6">
                                                <div className="md:w-3/5 text-justify text-gray-600 leading-relaxed text-sm sm:text-base">
                                                    The Review Report titled <strong>"Towards Zero Accidents at Thoppur Ghat Section"</strong>
                                                    was presented to the District Collector, Tmt. D. Divyadharshini. We analyzed patterns
                                                    in the 10-year accident data and were extremely elated to receive appreciation from the
                                                    District Collector as <em>"an impressive work"</em>. The session concluded with constructive
                                                    proposals to control accidents in the Thoppur Ghat Section. It was fulfilling to contribute
                                                    to society and governance in our small way.
                                                </div>
                                                <img
                                                    src="/images/faculty/thoppur-ghat-section-dsp.jpg"
                                                    className="md:w-2/5 h-56 object-cover  shadow-md"
                                                    alt="Thoppur Ghat"
                                                />
                                            </div>

                                            {/* Section 3 */}
                                            <div className="flex flex-col md:flex-row items-start gap-6">
                                                <div className="md:w-3/5 text-justify text-gray-600 leading-relaxed text-sm sm:text-base">
                                                    Some key focal points are:


                                                    <ul className="mt-2 space-y-2">
                                                        <li className="flex items-start gap-2">
                                                            <DiamondStar className="w-4 h-4 text-maroon mt-1" />
                                                            <span className="text-gray-700 text-justify">
                                                                473 accidents occurred within 3KM of Thoppur Ghat Section.
                                                            </span>
                                                        </li>

                                                        <li className="flex items-start gap-2">
                                                            <DiamondStar className="w-4 h-4 text-maroon mt-1" />
                                                            <span className="text-gray-700 text-justify">
                                                                1 in 4 injuries leads to death.
                                                            </span>
                                                        </li>

                                                        <li className="flex items-start gap-2">
                                                            <DiamondStar className="w-4 h-4 text-maroon mt-1" />
                                                            <span className="text-gray-700 text-justify">
                                                                Weekends cause more accidents, possibly due to higher traffic intensity and drunk driving.
                                                            </span>
                                                        </li>

                                                        <li className="flex items-start gap-2">
                                                            <DiamondStar className="w-4 h-4 text-maroon mt-1" />
                                                            <span className="text-gray-700 text-justify">
                                                                Accidents may be due to negligence; introducing a separate lane for 2-wheelers may reduce incidents.
                                                            </span>
                                                        </li>

                                                        <li className="flex items-start gap-2">
                                                            <DiamondStar className="w-4 h-4 text-maroon mt-1" />
                                                            <span className="text-gray-700 text-justify">
                                                                High penalties can be imposed, especially in accident-prone zones.
                                                            </span>
                                                        </li>

                                                        <li className="flex items-start gap-2">
                                                            <DiamondStar className="w-4 h-4 text-maroon mt-1" />
                                                            <span className="text-gray-700 text-justify">
                                                                Vehicles with high center of gravity roll over more easily.
                                                            </span>
                                                        </li>

                                                        <li className="flex items-start gap-2">
                                                            <DiamondStar className="w-4 h-4 text-maroon mt-1" />
                                                            <span className="text-gray-700 text-justify">
                                                                30% of accidents occur on full moon/new moon days — gravitational effects could be reviewed by experts.
                                                            </span>
                                                        </li>

                                                        <li className="flex items-start gap-2">
                                                            <DiamondStar className="w-4 h-4 text-maroon mt-1" />
                                                            <span className="text-gray-700 text-justify">
                                                                Poor road construction or maintenance may affect vehicle stability.
                                                            </span>
                                                        </li>

                                                        <li className="flex items-start gap-2">
                                                            <DiamondStar className="w-4 h-4 text-maroon mt-1" />
                                                            <span className="text-gray-700 text-justify">
                                                                Vehicle repairs handled improperly may contribute to accidents; repeated incidents should be investigated.
                                                            </span>
                                                        </li>
                                                    </ul>

                                                </div>
                                                <img
                                                    src="/images/faculty/thoppur-ghat-section-explain-project.jpg"
                                                    className="md:w-2/5 h-56 object-cover  shadow-md"
                                                    alt="Group work"
                                                />
                                            </div>

                                            {/* Section 4 */}
                                            <div className="flex flex-col md:flex-row-reverse items-start gap-6">
                                                <div className="md:w-3/5 text-justify text-gray-600 leading-relaxed text-sm sm:text-base">
                                                    We hope that these proposals lead to tangible improvements in road safety at Thoppur Ghat Section.
                                                    Being able to contribute insights and solutions to governance and society, even in a small way,
                                                    was a rewarding experience for both students and faculty.
                                                </div>
                                                <img
                                                    src="/images/faculty/thoppur-ghat-section-meet-collector.jpg"
                                                    className="md:w-2/5 h-56 object-cover  shadow-md"
                                                    alt="Class discussion"
                                                />
                                            </div>


                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>






                        </div>
                    )}


                    {/* {activeTab === "publications" && (
                        <div className="space-y-8">
                            <FacultyPublications />

                        </div>
                    )} */}


                </AnimatePresence>
            </div>
        </section>
    );
}
