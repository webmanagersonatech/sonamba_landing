"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import DiamondStar from "../../components/DiamondStar";
import NewsCarousel from "../../components/NewsCarousel";
import Link from "next/link";
import { FiInfo, FiEye, FiBook, FiClock, FiUsers, FiX, FiMaximize } from "react-icons/fi";
import {
    FaInstagram,
    FaTwitter,
    FaLinkedin,
    FaFacebook,

} from 'react-icons/fa';
export default function AboutPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [activeTab, setActiveTab] = useState("about");
    const [selectedNews, setSelectedNews] = useState<any | null>(null);
    const [newsIndex, setNewsIndex] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [underlineProps, setUnderlineProps] = useState({ left: 0, width: 0 });
    const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
    const containerRef = useRef<HTMLDivElement | null>(null);

    const sections = [
        { id: "about", title: "About Us", icon: FiInfo },
        { id: "vision", title: "Vision & Mission", icon: FiEye },
        { id: "history", title: "History", icon: FiClock },
        { id: "chairman", title: "Chairman's Books", icon: FiBook },
        { id: "management", title: "Management Profile", icon: FiUsers },
    ];


    useEffect(() => {
        const interval = setInterval(() => {
            setNewsIndex((prev) => prev + 1);
        }, 5000);
        return () => clearInterval(interval);
    }, []);


    useEffect(() => {
        const tab = searchParams.get("tab");
        if (tab && sections.some((s) => s.id === tab.toLowerCase())) {
            setActiveTab(tab.toLowerCase());
        }
    }, [searchParams]);

    // Update underline position
    useEffect(() => {
        const updateUnderline = () => {
            const index = sections.findIndex((s) => s.id === activeTab);
            const currentTab = tabsRef.current[index];
            const container = containerRef.current;
            if (currentTab && container) {
                const tabRect = currentTab.getBoundingClientRect();
                const containerRect = container.getBoundingClientRect();
                setUnderlineProps({
                    left: tabRect.left - containerRect.left,
                    width: tabRect.width,
                });
            }
        };
        updateUnderline();
        window.addEventListener("resize", updateUnderline);
        return () => window.removeEventListener("resize", updateUnderline);
    }, [activeTab]);



    const handleTabChange = (tabId: string) => {
        setActiveTab(tabId);
        router.replace(`/about?tab=${tabId}` as any);
    };

    const managementData: any[] = [
        {
            name: "Mr. C. Valliappa",
            role: "Chairman",
            image: "/images/about/valliappa-chairman-sona-gro.jpg",
            fullBio:
                "Mr. C. Valliappa , is the Chairman of this institution and the illustrious son of Founder Chairman. His passion and commitment to the cause of education, able guidance and devoted care of the various needs of this institution has established SONA as a  veritable haven of educational brilliance which is moving towards greater heights of achievement and glory.",
            socials: [],

        },
        {
            name: "Mr. Chocko Valliappa",
            role: "Vice Chairman",
            image: "/images/about/chocko-valliappa.jpg",
            fullBio:
                "Mr. Chocko Valliappa, the Vice Chairman of this institution and he has made a triumphant venture into the highly competitive IT industry and has accumulated a vast experience in developing and exploring innovative technologies. He is a passionate and a multifaceted industrialist who co-founded the incubation company, Valliappa Software Techpark. He is the founder of Vee Technologies, which has become a gold standard Global services company focused in Revenue Cycle Management, Healthcare and Engineering services and it features in information Week List – 100 Top Global Outsourcing Compaines.",
            socials: [
                { type: "facebook", url: "https://www.facebook.com/Chockolite" },
                { type: "instagram", url: "https://www.instagram.com/chockolite?igsh=MTFlYTdkajhlam45aQ==" },
                { type: "linkedin", url: "https://www.linkedin.com/in/veechocko/" },
                { type: "twitter", url: "https://x.com/ChockoValliappa" },
            ],
            news: [
                {
                    title: "TN Private University Amendment Bill may strip 13,000 staff of govt benefits",
                    date: "29-10-2024",
                    image: "/images/about/tn-private-university-bill.webp",
                    content: "This Times of India article highlights concerns from teachers’ associations after the Tamil Nadu Assembly passed the Private Universities (Amendment) Bill. The amendment could convert 163 government-aided colleges into private Brownfield universities, potentially affecting nearly 13,000 staff including 9,000 teachers. Experts warn that employees may lose key government-backed benefits such as pensions, salaries, and gratuity, causing a major job security crisis. Associations argue that without clarity on financial responsibility, protections under the TN Private Colleges Regulation Act might cease. Supporters, however, say the reform can boost autonomy, infrastructure, and global competitiveness in education."
                },


                {
                    title: "Global majors should list and thrive in India",
                    date: "07-10-2024",
                    image: "/images/about/global-majors-should-list-and-thrive-in-india.jpeg",
                    content: "Authored by Chocko Valliappa, this Outlook article emphasizes India’s emergence as a dynamic capital destination and advocates for global technology giants like Google, Microsoft, and Meta to list on Indian stock exchanges. It discusses India’s rapid economic growth, strong stock market performance, and initiatives like 'Make in India' and the Production Linked Incentive (PLI) scheme. The article argues that listing in India would allow global firms to participate more deeply in the country’s economic expansion and offer Indian investors a stake in their growth."
                },

                {
                    title: "Mr. Chocko Valliappa receives Enterprising Edupreneur Award",
                    date: "08-09-2023",
                    image: "/images/about/chocko-ptr-thyagarajan-ict-award.webp",
                    content: "Chocko Valliappa honored with the Enterprising Edupreneur Award for his innovative contributions to education and industry partnerships."
                },
                {
                    title: "Driving India's Ambition for the Next 50 Years!",
                    date: "18-08-2023",
                    image: "/images/about/OUTLOOK-Magazine-Article.jpg",
                    content: "Featured in Outlook Magazine, highlighting leadership initiatives in digital transformation and higher education development."
                },
                {
                    title: "Breaking Barriers and Shaping the Futures of Generation Next",
                    date: "20-06-2023",
                    image: "/images/about/breaking-barriers-sona.png",
                    content: "Showcasing Sona College's mentorship and support programs empowering the next generation of innovators."
                },
                {
                    title: "Vee Tech CEO Chocko Valliappa nominated as member of Syndicate of Anna University",
                    date: "15-05-2023",
                    image: "/images/about/member-syndicate-anna-university.jpg",
                    content: "Coverage of Chocko Valliappa’s nomination to the Syndicate of Anna University, highlighting his role in shaping academic governance."
                },
                {
                    title: "Game Changer in Higher Education",
                    date: "03-04-2023",
                    image: "/images/about/chocko-valliappa-sona-chocko.jpg",
                    content: "Celebrating Chocko Valliappa’s transformative initiatives at Sona College, redefining higher education excellence."
                },
                {
                    title: "Chocko Valliappa calls for fairness in the NIRF Ranking for engineering institutions",
                    date: "12-11-2023",
                    image: "/images/about/chocko-article-bloncampus-nirf-ranking-banner.webp",
                    content: "Article highlighting Chocko Valliappa’s advocacy for equitable evaluation in NIRF rankings for engineering colleges."
                }
            ]

        },
        {
            name: "Mr. Thyagu Valliappa",
            role: "Vice Chairman",
            image: "/images/about/thyagu-valliappa.jpg",
            fullBio:
                "Mr. Thyagu Valliappa is a prominent leader in the education and business sectors. He serves as Vice Chairman of Sona Institutions and CEO of Sona Star. In addition to these roles, he founded the Sona Accelerator and Incubation Foundation. Thyagu Valliappa also holds the position of President of the Madras Management Association in Salem, and he is a Management Trustee of the Sona College of Naturopathy and Yogic Science. Previously, he served as the President of the Bangalore Chamber of Industry and Commerce. His extensive experience and leadership across these diverse organizations reflect his commitment towards growth and development..",
            socials: [
                { type: "linkedin", url: "https://www.linkedin.com/in/thyagu-valliappa-3616a97/" },
                { type: "twitter", url: "https://x.com/ThyaguValliappa" },
                { type: "facebook", url: "https://www.facebook.com/thyagu.valliappaa" },
                { type: "instagram", url: "https://www.instagram.com/thyaags?igsh=MWszbmI2MHY4YXdtNw==" },
            ],
            news: [

                {
                    title: "Students from Sona Biz School win Think Tank quiz contest",
                    date: "29-10-2024",
                    image: "/images/about/sona-biz-school-think-tank-quiz.webp",
                    content: "MBA students from the Sona School of Business and Management secured top positions in the Think Tank quiz competition organised by the Madras Management Association. Four MBA teams represented the college, with two of them winning first and third place. Around 27 teams from leading institutions took part in the contest, showcasing strong participation and competitive spirit."
                },


                {
                    title: "Unveiling Potential, Embracing Innovation & Research and Fostering Leadership!",
                    date: "21-08-2023",
                    image: "/images/about/thyagu-open-magazine-articles-mba.webp",
                    content: "An in-depth feature in Open Magazine highlighting Thyagu Valliappa's insights on management education and MBA innovations."
                },
                {
                    title: "Breaking Barriers and Shaping the Futures of Generation Next",
                    date: "20-06-2023",
                    image: "/images/about/breaking-barriers-sona.png",
                    content: "Sona College initiative empowering students through mentorship and seed support for startups across manufacturing and AI."
                },
                {
                    title: "Mr. Thyagu Valliappa assumes Chairmanship for MMA Salem Chapter",
                    date: "13-03-2023",
                    image: "/images/about/thyagu-mma-salem-chapter-chairman-tamil-news.webp",
                    content: "Coverage in Tamil news on Thyagu Valliappa’s appointment as Chairman of the MMA Salem Chapter."
                },
                {
                    title: "The Future of Technology and Engineering Educaion",
                    date: "22-10-2023",
                    image: "/images/about/thyagu-valliappa-open-mag-article-banner.webp",
                    content: "Open Magazine article discussing emerging trends in technology and engineering education with insights from Thyagu Valliappa."
                }
            ]

        },
    ];
    const tabImages: any = {
        about: "/images/banner/about-banners/about-us.webp",
        vision: "/images/banner/about-banners/Vision-mission.webp",
        history: "/images/banner/about-banners/history.webp",
        chairman: "/images/banner/about-banners/chairmans-books.webp",
        management: "/images/banner/about-banners/management-profile.webp"
    };



    const tabVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
    };

    const currentSection = sections.find((s) => s.id === activeTab);

    useEffect(() => {
        if (!currentSection) return;

        const tabId = currentSection.id;

        // Set document title
        document.title = `About | ${currentSection.title} | Sona School of Business and Management`;

        // Meta description
        let metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
        if (!metaDesc) {
            metaDesc = document.createElement('meta');
            metaDesc.name = 'description';
            document.head.appendChild(metaDesc);
        }
        metaDesc.content = `Information about ${currentSection.title} at Sona School of Business and Management.`;


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
        linkCanonical.href = `https://www.sonabusinessschool.com/about?tab=${tabId}`;
    }, [currentSection]);


    const cardVariants = {
        hidden: { opacity: 0, y: 32 },
        visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.4 } }),
    };

    return (
        <>


            <section className="w-full min-h-screen bg-gray-50 py-12 flex flex-col items-center">

                <div className="w-full relative">
                    <AnimatePresence mode="wait">
                        {/* <motion.img
                        key={tabImages[activeTab]} // re-triggers animation when activeTab changes
                        src={tabImages[activeTab] || ""}
                        alt="Corporate Banner"
                        className="w-full h-56 sm:h-64 md:h-80 lg:h-96 object-cover"
                        initial={{ x: "-100%", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: "100%", opacity: 0 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                    /> */}
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
                                            href="/about"
                                            className="hover:text-maroon cursor-pointer transition-colors text-white"
                                        >
                                            About
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
                        {/* About Section */}
                        {activeTab === "about" && (
                            <motion.div
                                key="about"
                                variants={tabVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                transition={{ duration: 0.5 }}
                                className="bg-white rounded-2xl p-6 md:p-10 flex flex-col gap-12 max-w-7xl mx-auto "
                            >
                                {/* Introduction */}
                                <div className="flex flex-col gap-6">
                                    <h3 className="text-2xl md:text-3xl text-center font-bold text-maroon leading-snug">
                                        SONA <span className="font-semibold">School of Business & Management (SBM)</span>
                                    </h3>
                                    <p className="text-gray-700 text-sm md:text-base leading-relaxed text-justify">
                                        Sona MBA is one of the most sought after centres of excellence in Tamil Nadu. It has made its presence in global context as well through its involvement in research, consultancy, teaching and training. Sona MBA is situated in green salubrious Salem, Steel City of Tamil Nadu. The institute offers Master of Business Administration (MBA) program in six specialisations namely<strong> Business Analytics, Finance, Marketing, HR, Productions and Family Business</strong>. Sona MBA offers holistic education giving equal thrust to professional and personal development. It is well connected by Road & Rail 24/7 across different metros. The School is<strong> AICTE approved, NBA accredited, NAAC A++ accredited and ISO certified.</strong> The institute is recognised as "AICTE – CII Award for Best Industry – Linked Technical Institute in India 2019". It stands testimony to the commitment of the management to impart quality higher education.
                                    </p>
                                    <p className="text-gray-700 text-sm md:text-base leading-relaxed text-justify">
                                        The Sona MBA has a state-of-the-art infrastructure and a conducive learning environment. The classrooms are designed to meet the modern-day learning environment with<strong> Air-conditioned facilities, Projectors, audio systems, internet facilities</strong> and ergonomically designed furniture. To encourage digital learning the students are provided with iPad / laptops / Tablets, Wi-Fi facility, fully digitalized library, Blackboard learning system, Moodle, CMS and lecture capturing facility that put Sona as par with few IIMs.
                                    </p>
                                    <p className="text-gray-700 text-sm md:text-base leading-relaxed text-justify">
                                        The vision & mission of the institute is to become a top-tier business school of eminence with excellence in Management Education, Research and Practice and also to build competencies through continuous learning with global mindset.
                                    </p>
                                    <p className="text-gray-700 text-sm md:text-base leading-relaxed text-justify">
                                        Established in 1998, Sona MBA cherishes <strong>27 years of legacy</strong> in creating talented, responsible and society centric management graduates who experience and believe that leadership can be nurtured with human touch.
                                    </p>

                                    <p className="text-gray-700 text-sm md:text-base leading-relaxed text-justify">
                                        Sona MBA is ranked 8th in Private Institutions in Tamilnadu and 37th in private Institutions in South India. among all the B Schools under the category <strong>“BEST B-SCHOOL Ranking issue”</strong> by THE WEEK
                                    </p>

                                    <p className="text-gray-700 text-sm md:text-base leading-relaxed text-justify">
                                        Sona MBA ranked Top 11 th rank in private Affiliated colleges in <strong>All India and ranked Top 25th in The private B-Schools in South zone </strong> as per “BEST B-SCHOOL Ranking issue 2021 by OUTLOOK.  </p>
                                </div>



                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 px-4 sm:px-0">
                                    {[
                                        {
                                            title: "South Zone B-Schools Ranking",
                                            text: "Ranked Top 9th in The private B-Schools in South Zone by OUTLOOK",
                                            image: "https://res.cloudinary.com/dscqejyxy/image/upload/v1759905963/Outlook-2025_vol2uv.jpg",
                                        },
                                        {
                                            title: "All India Ranking",
                                            text: "Ranked Top 11th in private Affiliated colleges in All India",
                                            image: "/images/about/mag-1.webp",
                                        },
                                        {
                                            title: "South India Ranking",
                                            text: "Ranked 37th in private Institutions in South India",
                                            image: "/images/about/mag-3.webp",
                                        },
                                    ].map((item, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            whileHover={{ scale: 1.05 }}
                                            className="relative overflow-visible rounded-2xl shadow-lg 
        group cursor-pointer transition-all duration-500 
        min-h-[320px] sm:min-h-[340px] md:min-h-[360px] 
        pb-44 sm:pb-32" // <-- Increased bottom padding for mobile
                                        >
                                            {/* Full Background Image */}
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl z-0"
                                            />

                                            {/* Floating Content Box */}
                                            <div
                                                className="absolute bottom-0 left-1/2 
          -translate-x-1/2 translate-y-1/3 sm:translate-y-1/2
          w-[95%] sm:w-[85%] max-w-xs sm:max-w-sm md:max-w-md 
          bg-white rounded-xl shadow-xl 
          p-4 text-center border border-gray-200 z-10 
          min-h-[120px] flex flex-col justify-center
          mb-16 sm:mb-0" // <-- Margin bottom for mobile spacing
                                            >
                                                <h4 className="text-sm sm:text-base md:text-lg font-semibold text-maroon break-words">
                                                    {item.title}
                                                </h4>
                                                <p className="text-gray-700 text-xs sm:text-sm md:text-base mt-2 leading-snug break-words">
                                                    {item.text}
                                                </p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>







                            </motion.div>
                        )}





                        {activeTab === "vision" && (
                            <motion.div
                                key="vision"
                                variants={tabVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                transition={{ duration: 0.5 }}
                                className="bg-white rounded-2xl p-6 md:p-10 flex flex-col gap-10 max-w-7xl mx-auto"
                            >


                                {/* Vision & Mission */}
                                <div className="flex flex-col gap-8">
                                    <div className="flex-1 flex flex-col gap-4 text-left">
                                        {/* Vision */}
                                        <h3 className="text-xl md:text-2xl font-medium text-maroon leading-snug">
                                            Vision
                                        </h3>
                                        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                                            To become a top-tier business school of eminence with excellence in
                                            Management Education, Research and Practice.
                                        </p>

                                        {/* Mission */}
                                        <h3 className="text-xl md:text-2xl font-medium text-maroon leading-snug mt-4">
                                            Mission
                                        </h3>
                                        <ul className="space-y-2 text-gray-700 text-sm md:text-base leading-relaxed">
                                            {[
                                                "To build competencies through continuous learning with global mindset.",
                                                "By nurturing and shaping human capital through quality education, training, research, consulting support, and entrepreneurial mindset.",
                                                "Regular benchmarking with the best of the league.",
                                                "By fostering culture of learning and reflection, achievement orientation, creativity, interdependence, and respect for diversity.",
                                                "Branding through creating value for money, concern for ethics, society and environment.",
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-start gap-2">
                                                    <DiamondStar className="w-4 h-4 text-maroon/70 mt-1 flex-shrink-0" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* PEOs Section */}
                                <div>
                                    <h3 className="text-xl md:text-2xl font-medium text-maroon mb-4">
                                        PEOs Statements
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        {[
                                            "Practice professional skills in management in the workplace and beyond to imbibe lifelong learning.",
                                            "Be innovative and emerge as successful leaders/managers/entrepreneurs with relevant management tools.",
                                            "Adapt to the changing world and become socially responsible citizens with moral values for sustainable development.",
                                        ].map((peo, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                whileHover={{ scale: 1.03 }}
                                                className="relative p-4  border border-gray-200 shadow-md bg-white cursor-pointer group transition-all duration-500"
                                            >
                                                <span className="absolute inset-0 bg-maroon scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 "></span>
                                                <p className="relative z-10 text-gray-800 group-hover:text-white text-sm md:text-base transition-colors duration-500">
                                                    {peo}
                                                </p>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* Program Outcomes */}
                                <div>
                                    <h3 className="text-xl md:text-2xl font-medium text-maroon mb-4">
                                        Program Outcomes
                                    </h3>
                                    <ul className="space-y-2 text-gray-700 text-sm md:text-base leading-relaxed">
                                        {[
                                            "Apply knowledge of management theories and practices to solve business problems.",
                                            "Foster analytical and critical thinking abilities for data-based decision making.",
                                            "Develop value-based leadership ability.",
                                            "Ability to lead themselves and others in the achievement of organizational goals, contributing effectively to a team environment.",
                                            "Ability to lead themselves and others in the achievement of organizational goals, contributing effectively to a team environment.",
                                            "Develop business ideas and prepare project proposals to start a new venture.",
                                        ].map((po, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <DiamondStar className="w-4 h-4 text-maroon/70 mt-1 flex-shrink-0" />
                                                <span>{po}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        )}





                        {activeTab === "history" && (
                            <motion.div
                                key="history"
                                variants={tabVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                transition={{ duration: 0.5 }}
                                className="bg-white rounded-2xl p-6 md:p-10 flex flex-col gap-12 max-w-7xl mx-auto"
                            >

                                <p className="text-justify">The <strong>Sona Group </strong> is steeped in more than <strong>100 years</strong> of success and tradition tracing back to pre-Independence. The group was founded by the doyen of textile industries of the early twentieth century, <strong>Karumuttu Thiagarajar Chettiar.</strong> He oozed passion and patriotism for his motherland and fought for Her freedom along with other great freedom fighters of this nation. Karumuttu Thiagarajar Chettiar’s prominence is etched in the tapestry of our nation by the role he played in the transformation of Mohandas Karamchand Gandhi to Gandhiji, The Father of our Nation. This defining moment played out in 1938, within the walls of Karumuttu Thiagarajar Chettiar’s home when <strong>Gandhiji visited Madurai</strong>. Gandhiji wore his trademark Loin cloth, vowing not to wear a shirt every again after seeing daily wage workers who could not afford one.</p>
                                {/* Section 1: Two Columns (Responsive, Centered) */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {/* Left */}
                                    <div className="flex flex-col items-center text-center">
                                        <div className="w-[220px] h-[280px] sm:w-[260px] sm:h-[340px] md:w-[295px] md:h-[378px] flex items-center justify-center bg-white rounded-xl shadow-lg overflow-hidden mb-4">
                                            <img
                                                src="/images/about/karumuttu-thiagarajan-chettiar.webp"
                                                alt="Karumuttu Thiagarajar Chettiar"
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-justify">
                                            <strong>Karumuttu Thiagarajan Chettiar,</strong> saw the plight of workers in the plantations and fought for their liberation. His idea of liberation was to set people free and even to a higher level of setting minds free through education. He envisioned an Indian nation that would stand tall in the global stage built on its robust educated society with its traditional values and wealth. He set this idea in motion by establishing Thiagarajar Engineering College in Madurai, and Thiagarajar Polytechnic College, Salem, and sowed the seeds of quality technical education in India. Those seeds now stand as a global brand called ‘Sona’ whose roots run deep into education, textile, IT, research, manufacturing, outsourcing, logistics and many more. The Sona Group’s quest to cater quality higher education has led to its banyan tree like growth with Thiagarajar Polytechnic College, Sona College of Technology, Sona School of Business and Management, Sona College of Arts and Science , Sona Valliappa Public School and Sona Medical College of Naturopathy and Yoga.
                                        </p>
                                    </div>

                                    {/* Right */}
                                    <div className="flex flex-col items-center text-center">
                                        <div className="w-[220px] h-[280px] sm:w-[260px] sm:h-[340px] md:w-[295px] md:h-[378px] flex items-center justify-center bg-white rounded-xl shadow-lg overflow-hidden mb-4">
                                            <img
                                                src="/images/about/chockalingam-founder-sonaco.jpg"
                                                alt="Shri M.S. Chokalingam"
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-justify">
                                            <strong>Shri. M.S. Chokalingam,</strong> a textile wizard and philanthropist, who always evinced an abiding interest in professional education as a means to industrial and economic growth and prosperity of the country, founded Sona College of Technology. The vision of Sona’s Founder Chairman was to have a vibrant Engineering and Management Institution that is equal in educational excellence to the best in the world that is why this institution has gathered momentum to reach phenomenal height today.
                                        </p>
                                    </div>
                                </div>


                            </motion.div>
                        )}

                        {activeTab === "management" && (
                            <div className="bg-white rounded-2xl p-6 md:p-10 flex flex-col gap-10 max-w-7xl mx-auto">


                                {/* Zig-Zag Cards */}
                                <div className="flex flex-col gap-10">
                                    {managementData.map((member, i) => {

                                        return (
                                            <motion.div
                                                key={member.name}
                                                custom={i}
                                                variants={cardVariants}
                                                initial="hidden"
                                                whileInView="visible"
                                                viewport={{ once: true, amount: 0.2 }}
                                                className=" border border-gray-200 shadow-sm overflow-hidden bg-white  py-2"
                                            >
                                                {/* Top: Image + Text */}
                                                <div className="flex flex-col md:flex-row md:gap-x-4">

                                                    <div className="md:w-3/12 w-full p-4 flex items-center justify-center">
                                                        <div className="w-40 h-40 md:w-56 md:h-56 shadow-lg overflow-hidden">
                                                            <img src={member.image} alt={member.name} className="w-full h-full object-contain" />
                                                        </div>
                                                    </div>


                                                    <div className="md:w-9/12 w-full p-5 flex flex-col gap-4">
                                                        <div>
                                                            <h3 className="text-2xl font-bold text-maroon">{member.name}</h3>
                                                            <p className="text-gray-700 font-medium">{member.role}</p>
                                                            <p className="text-gray-600 mt-2 text-justify">{member.fullBio}</p>
                                                        </div>


                                                        {member.socials?.length > 0 && (
                                                            <div className="flex gap-4">
                                                                {member.socials.map((s: any, idx: number) => {
                                                                    let Icon: any = FiUsers;
                                                                    let hoverColor = "";

                                                                    if (s.type === "linkedin") {
                                                                        Icon = FaLinkedin;
                                                                        hoverColor = "hover:text-[#0A66C2]";
                                                                    } else if (s.type === "twitter") {
                                                                        Icon = FaTwitter;
                                                                        hoverColor = "hover:text-[#1DA1F2]";
                                                                    } else if (s.type === "instagram") {
                                                                        Icon = FaInstagram;
                                                                        hoverColor = "hover:text-[#E1306C]";
                                                                    } else if (s.type === "facebook") {
                                                                        Icon = FaFacebook;
                                                                        hoverColor = "hover:text-[#1877F2]";
                                                                    }

                                                                    return (
                                                                        <a
                                                                            key={idx}
                                                                            href={s.url}
                                                                            target="_blank"
                                                                            rel="noopener noreferrer"
                                                                            className="group"
                                                                        >
                                                                            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100/70 shadow-sm hover:shadow-md transition-all duration-300">
                                                                                <Icon
                                                                                    className={`w-5 h-5 text-slate-500 transition-colors duration-300 ${hoverColor}`}
                                                                                />
                                                                            </div>
                                                                        </a>
                                                                    );
                                                                })}
                                                            </div>
                                                        )}


                                                    </div>
                                                </div>

                                                {member.news?.length > 0 && (
                                                    <NewsCarousel
                                                        news={member.news}
                                                        onSelect={(item) => setSelectedNews({ ...item, author: member.name })}
                                                    />
                                                )}

                                                {/* Bottom: Latest News - full width */}


                                            </motion.div>
                                        );
                                    })}

                                </div>

                                {/* News Modal (selected news only) */}
                                <AnimatePresence>
                                    {selectedNews && (
                                        <motion.div
                                            key="news-modal"
                                            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            onClick={() => setSelectedNews(null)}
                                        >
                                            <motion.div
                                                initial={{ y: "100%", opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                exit={{ y: "100%", opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className={`relative w-full ${isFullscreen ? "h-full max-w-full" : "max-w-2xl"
                                                    } bg-white  shadow-2xl overflow-hidden`}
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                {/* Close button */}
                                                <button
                                                    onClick={() => {
                                                        setSelectedNews(null);
                                                        setIsFullscreen(false);
                                                    }}
                                                    className="absolute top-3 right-3 p-2 rounded-full bg-white/80 text-gray-700 hover:text-maroon shadow z-10"
                                                    aria-label="Close"
                                                >
                                                    <FiX className="w-6 h-6" />
                                                </button>

                                                {/* Fullscreen toggle button (if you want a separate icon) */}
                                                {!isFullscreen && (
                                                    <button
                                                        onClick={() => setIsFullscreen(true)}
                                                        className="absolute top-3 right-14 p-2 rounded-full bg-white/80 text-gray-700 hover:text-maroon shadow z-10"
                                                        aria-label="Fullscreen"
                                                    >
                                                        <FiMaximize className="w-6 h-6" />
                                                    </button>
                                                )}

                                                {/* Image */}
                                                <div className={`${isFullscreen ? "w-full h-full flex items-center justify-center bg-black" : "w-full relative flex justify-center bg-gray-100"}`}>
                                                    <img
                                                        src={selectedNews.image}
                                                        alt={selectedNews.title}
                                                        className={`${isFullscreen ? "w-full h-full object-contain" : "w-full h-auto max-h-[60vh] object-contain"}`}
                                                    />
                                                </div>

                                                {/* Content (hide in fullscreen) */}
                                                {!isFullscreen && (
                                                    <div className="p-5 md:p-6 max-h-[70vh] overflow-y-auto">
                                                        <p className="text-xs text-gray-500 mb-1">By {selectedNews.author}</p>
                                                        <h3 className="text-xl md:text-2xl font-bold text-maroon">{selectedNews.title}</h3>
                                                        <p className="text-xs md:text-sm text-gray-500 mt-1">{selectedNews.date}</p>
                                                        <p className="text-gray-700 text-sm md:text-base leading-relaxed mt-3 whitespace-pre-line">
                                                            {selectedNews.content}
                                                        </p>
                                                    </div>
                                                )}
                                            </motion.div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>




                            </div>

                        )
                        }
                        {activeTab === "chairman" && (
                            <motion.div
                                key="chairman"
                                variants={tabVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                transition={{ duration: 0.5 }}
                                className="bg-white rounded-2xl p-6 md:p-10 flex flex-col gap-10 max-w-7xl mx-auto"
                            >
                                {/* Books Section */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
                                    {/* Book 1 */}
                                    <div className="flex flex-col items-center gap-4 ">
                                        <a
                                            href="https://www.sonatech.ac.in/about-sona/read/?book=verum-vizhudhugalum"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="relative   block group"
                                        >
                                            <img
                                                src="/images/about/verum-vizhuthugalum.webp"
                                                alt="Verum Vizhuthugalum"
                                                className=" h-[350px] rounded-md shadow-lg transition-transform duration-300 group-hover:scale-105 object-cover"
                                            />
                                            {/* Spine effect */}
                                            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-r from-gray-300 to-transparent rounded-l-md"></div>
                                            {/* Page edges effect */}
                                            <div className="absolute top-0 right-0 w-3 h-full bg-gradient-to-l from-gray-200 to-transparent rounded-r-md"></div>
                                        </a>
                                        <p className="text-gray-800 text-center text-sm md:text-base leading-relaxed">
                                            <strong>Verum Vizhuthugalum:</strong> The Inspiring Biography of Mr. C. Valliappa (Tamil).
                                        </p>
                                    </div>

                                    {/* Book 2 */}
                                    <div className="flex flex-col items-center gap-4 ">
                                        <a
                                            href="https://www.sonatech.ac.in/about-sona/read/?book=the-sona-story"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="relative   block group"
                                        >
                                            <img
                                                src="/images/about/the-sona-story.webp"
                                                alt="The Sona Story"
                                                className=" h-[350px] transition-transform duration-300 group-hover:scale-105 object-cover"
                                            />
                                            {/* Spine effect */}
                                            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-r from-gray-300 to-transparent rounded-l-md"></div>
                                            {/* Page edges effect */}
                                            <div className="absolute top-0 right-0 w-3 h-full bg-gradient-to-l from-gray-200 to-transparent rounded-r-md"></div>
                                        </a>
                                        <p className="text-gray-800 text-center text-sm md:text-base leading-relaxed">
                                            <strong>The Sona Story:</strong> The Textile to Tech Journey of Chettiar Industrialist C. Valliappa.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        )}

















                    </AnimatePresence >
                </div >


            </section>

        </>
    );
}
