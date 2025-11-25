"use client";

import { useState, useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";
import DiamondStar from "../../components/DiamondStar";
import Link from "next/link";
import JEFSection from "../../components/JEFSection";

import {


    MdWork,
    MdSchool,

    MdBusiness,

} from "react-icons/md";

export default function JefPageContent() {
    const [activeTab, setActiveTab] = useState("jef");



    /** Sections / Tabs */
    const sections = [
        {
            id: "jef",
            title: "Jobs, Entrepreneurship & Family Business (JEF)",
            icon: MdBusiness,
            metaDescription:
                "MBA @ Sona: Empowering Careers in Jobs, Entrepreneurship & Family Business (JEF). Hands-on projects, MAT incubation, workshops, and industry connections for corporate, startup, and family business success.",
            canonical: "jef",
            image: "/images/specilization/speaclization-4.webp",
        },


    ];


    const currentSection = sections.find((s) => s.id === activeTab);

    /** Update SEO dynamically */
    useEffect(() => {
        if (!currentSection) return;
        if (currentSection.id !== "jef") return; // Only for JEF

        // Document title
        document.title = `${currentSection.title} | Sona School of Business & Management`;

        // Meta description
        let metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
        if (!metaDesc) {
            metaDesc = document.createElement("meta");
            metaDesc.name = "description";
            document.head.appendChild(metaDesc);
        }
        metaDesc.content = currentSection.metaDescription;

        // Robots
        let metaRobots = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
        if (!metaRobots) {
            metaRobots = document.createElement("meta");
            metaRobots.name = "robots";
            document.head.appendChild(metaRobots);
        }
        metaRobots.content = "index, follow";

        // Canonical
        let linkCanonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
        if (!linkCanonical) {
            linkCanonical = document.createElement("link");
            linkCanonical.rel = "canonical";
            document.head.appendChild(linkCanonical);
        }
        linkCanonical.href = `https://www.sonabusinessschool.com/jef`;
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
                                        href="/jef"
                                        className=" transition-colors  text-yellow-500 font-semibold"
                                    >
                                        Jef
                                    </Link>

                                </li>

                            </ol>
                        </nav>
                    </div>
                </div>
            </div>



            {/* Content Section */}
            <div className="w-full max-w-7xl mx-auto mt-8 px-4 sm:px-6 lg:px-8">
                <AnimatePresence mode="wait">
                    {activeTab === "jef" && (
                        <motion.section
                            key="jef"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -40 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative max-w-7xl mx-auto p-6 md:p-12 bg-white rounded-2xl overflow-hidden"
                        >
                            {/* Header */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="text-center mb-12"
                            >
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 leading-snug">
                                    Empowering Careers in{" "}
                                    <span className="text-pink-600">J</span>obs,{" "}
                                    <span className="text-green-600">E</span>ntrepreneurship &{" "}
                                    <span className="text-orange-600">F</span>amily Business (JEF)
                                </h2>

                                {/* GRID */}
                                <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-center">

                                    {/* LEFT SIDE */}
                                    <motion.div
                                        initial={{ opacity: 0, x: -40 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.8, ease: "easeOut" }}
                                        viewport={{ once: true }}
                                        className="md:col-span-3 px-4"
                                    >
                                        <p className="text-gray-700 text-sm md:text-base leading-relaxed text-justify">
                                            The MBA program at Sona is thoughtfully designed to meet the evolving career aspirations of
                                            students—whether they aim for corporate roles, entrepreneurial ventures, or the growth of
                                            their family businesses.
                                        </p>
                                    </motion.div>

                                    {/* RIGHT SIDE */}
                                    <motion.div
                                        initial={{ opacity: 0, x: 40 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.8, ease: "easeOut" }}
                                        viewport={{ once: true }}
                                        className="md:col-span-2 flex justify-center px-4"
                                    >
                                        <JEFSection />
                                    </motion.div>

                                </div>
                            </motion.div>


                            {/* Highlight Cards */}
                            <motion.div
                                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-16"
                            >
                                {[
                                    {
                                        icon: <MdWork className="h-10 w-10 text-maroon" />,
                                        title: "Hands-On Learning",
                                        desc: (
                                            <>
                                                To strengthen students’ <strong>JEF capabilities</strong>, the program integrates a comprehensive blend
                                                of <strong>workshops</strong>, expert guest lectures, <strong>CEO talks</strong>, and industry-connect activities.
                                                Students gain hands-on exposure through <strong>sponsored projects</strong> from MSMEs and corporates,
                                                along with mentoring by <strong>seasoned industry professionals</strong>.
                                            </>
                                        ),
                                    },
                                    {
                                        icon: <MdBusiness className="h-10 w-10 text-maroon" />,
                                        title: "High-Impact Events",
                                        desc: (
                                            <>
                                                A series of <strong>high-impact academic and industry events</strong>—such as
                                                <strong> Sales and Marketing (SAM) Summits</strong>, <strong>Logistics Conclaves</strong>,
                                                <strong> Lean Six Sigma workshops</strong>, and <strong>Business Analytics forums</strong>—further enrich
                                                their learning and real-world understanding.
                                            </>
                                        ),
                                    },
                                    {
                                        icon: <MdSchool className="h-10 w-10 text-maroon" />,
                                        title: "High-Impact Events",
                                        desc: (
                                            <>
                                                The unique <strong>Management and Technology (MAT) platform</strong>, powered through the
                                                <strong> SONA GARAGE incubation facility</strong>, acts as a launchpad for innovative ideas.
                                                This ecosystem has successfully supported several <strong>start-ups</strong> and
                                                <strong> family business ventures</strong>, encouraging creativity and sustainable business models.
                                                MAT also champions the concept of <strong>“Earn While You Learn”</strong>, enabling students to gain
                                                practical experience and financial independence during their study period.
                                            </>
                                        ),
                                    },

                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: i * 0.2 }}
                                        className="bg-white py-6 border-b rounded-lg hover:-translate-y-2 transition-all"
                                    >
                                        <div className="flex items-center justify-between relative">
                                            {/* LEFT CURVE BLOCK */}
                                            <div className="w-48 h-14 flex items-center pl-4 text-lg font-semibold text-gray-900">
                                                {item.title}
                                            </div>

                                            {/* RIGHT CIRCLE WITH ICON */}
                                            <div className="text-maroon w-24 h-14 flex items-center justify-center -ml-10">
                                                {item.icon}
                                            </div>
                                        </div>

                                        <p className="text-gray-600 p-4 leading-relaxed text-justify">{item.desc}</p>
                                    </motion.div>
                                ))}
                            </motion.div>





                            {/* Placement Showcase */}
                            <motion.div className="mb-12">

                                <p className="text-gray-700 leading-relaxed text-justify">
                                    This <strong>custom-built, industry-aligned learning model</strong> has empowered
                                    <strong> Sona MBA graduates</strong> to secure opportunities in
                                    <strong> reputed organizations</strong> such as:
                                </p>

                                <div className="flex flex-wrap justify-center gap-8">
                                    {[
                                        { name: "Amazon", src: "data:image/png;base64,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" },
                                        { name: "Zoho", src: "data:image/png;base64,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" },
                                        { name: "TCS", src: "data:image/jpeg;base64,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" },
                                        { name: "City Union Bank", src: "data:image/png;base64,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" },
                                        { name: "Axis Bank", src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAa4AAAB1CAMAAAAhpfXwAAAAk1BMVEX///+AAAB4AAB9AAB6AAB2AAC0e3vj0dHp2Njs29vu3t7TsrKOKyvRrq6ud3eXQUGeVVWGCQnRtbXexMTVu7ulZGTw5+f9+fn58/PGnZ3Ak5P27e379vaHFxeDAACbTEySNzeqa2uKIyO8jY3hy8ueUlK4hYWZSEijXV2+j4+QMzOJHh6UPT2FERGoZ2duAADNpKT09r5PAAAN4UlEQVR4nO1daUPiOhRtmxQYEEFRFnEBRXBwGf//r3tt7m2bplkuKfNgZnK+KFJL0pPcnLskRFFAQEBAQEBAwBljc+oGBByAZdo9dRMC6Fjzj1M3IYCMbhInw1M3IoCKDxbHj7NTtyKAhkESxzHfnroZASTMruIcvH/qhgRQ8MIFXWx86oYEEDAFtuI4mZy6KQFuvDGkiz2fuikBTmySuABfnLoxAS7sWUlXzJanbk2AHd/V5Mqm1/rUzQmw4j6uIQmhw7NGh9foYiF0eM7o19nKptfg1E0KMOOVKXSF0OEZY5KobIXQ4RnjuTG5Mr6mp25VgB4LdeUSaiOEDs8Tc83cikPo8FxxqZtcIXR4pug1dQauXiF0eIbY6W1hPr/mp25bgIob0+QKocNzxKeRrUxt9E7duoA67vQ6A61hCB2eF5Y2tkLosML9qRsg8GXUGYh2tx/8ab7bl+mNzTms493UwVbL0OHD6jjtrOO+OxguhoPJ8YXr9a9rwzvdX2cQ5Vm5JlectAkdLpLkRvvGZjTOsVOLDH48wd9xI8zXa/biVRkxg1eW8hwJH3278gY3cMPx+O1r+33jrGl4N8YGugn/sA2PifigXfG07l7Fp5qaM/La6TMwi/gCbUKHc3No5JWzDPxV+fNe/DkpDM9z/pLfylcMr5JqiLEkdpT0D1NWIOM3WS2s/C6SOPnWv9VNYvZpGbrX4oPSoqT2UnREzUItEmyJ1xoxc5KVIfVffvIUtaH79/DM0/rT3grhw56LXl7kVzGJrtlYtd7pm5WAoZIl57HJ2kUYPDUk+jK6YsbMNRHX4oOSki7Rv6v6NZfQeP7gZ7Fe7LKw7fSCFLWh+xNsutxyTLvx0ttT6bq/KFqcD1L4ja9sfA0bXUzvjBeLCgj+U/teV7TNrJTddM2esHtPfpnfqdsU5t374XXzDGPRZG54PGuYSbvqL/NH8YFJFapU6RphWXjy8PT1tmIcu29pA9KV2cGEI7+pyX5iBYS+ag/oilNTHNVJ1xSHWnJpaa4NY6fOyDvqe/eyztQUeWyQMwYCpfVMoWuIw3MHNmkOeTqeWpxDoIvfdLuTYecKuTMoDnwevKN7E+mKU+27brq6MVP7exg2LhEPjff2DwvVqe9+6USUPSwqHSV2FbreYbpWSrHLYs4vbSsB0JXiJS/iIwyh0LKMWbsFp6ArTvSLg4OuaxBIjHkrAV3GvwHvwSCpTlMZAQqLFbxCU1RLitbp6os7yuYzWwGtZKl0Ycgt0U6v0qlht5p3u1V3VjpzYafrrp3IiErLYgd78L19dFXdxBQqEGzECSxue3XqRCpd8MR4belxeVIKXWCBtYJBcmp0RbEVXTG70kw/K13rQmR4m6oZRRW2UPEwjtFeGwL7MF3iJBcz9amGqNMF1opblHgTKl23+R35i+ZKyEyAydKIF4muzKQ1vVwLXfejliIjapTt6sFUN5YMCB2z8TP8MFy1APN2US4cit2s0/UDrn47pB0qXeIx6iJrOLxAr2rKVJAuNJjN+Wmma/reUmTk9yDpjMR73yvUf/AliLfEFHOBTHY22lEmKhpbkRp4kdlxakKl68swu5YMh4JY0dm+cQFa4hckrOG9GenqsrYiI8MTScQbNJ0bYObyUSyWMMXGVcD8DRsBbeoip9B1h8ZzTB9FKl2fhslzWTzta4M7jG7yZvqJfCmWzUQXSgT20GbH94Q0uZh34TWMhtzjAnluiPSWCzxc/qB+nuomgzaJWfo0JC7aCl3oLDQuAzsrhqeQPE2JhXRNovkKV6L6QmGg6wUl4a5VvuyBJOK9T0SBaBJUUgnLzd5Nl75Va2hTkKl0La+w3Ywnb9eUwVSnawCvmv2CPQIingEjubHQlHRl7jSus3tZlmrper9Fe9BCZETFEu9ArgA8AbPgU/wO88cU6JY2lmnWpEaIdz4qW84S/uVOQwBdSXfa720We2hK00vG4QUNAMMcK4NBoivqwJRhj5KB09LVNpIBmJNEvFEfODGs2X/gzrijpdhOoVPPDboyc8Z4aRlY+uxS9RgzTNK0CBoyjSyEJl5BEyHao8oRma5ogXzx6hHp6RLwS5dUMJTt1nGYYJYBeZlSXUFlnCHQHZUnDugieRq6otniIZEIW9mX8GZEPt41JjoOr8JGgmVU2lOjq6z2q+yqhS5/d0igTwsWesdLIC+TliNvVeoOHXr4QHUyVEdXhs0lKxljxgC7gIaubHrWhQ8Or9L292B61debOl1RD/M3aTEKLXTZcwZOjEgi3rtIYwnebNVEtC4Gr6BUPZoIioGuDJN1UhCRmpbFHEUCBVB+VK1zOLyqj79ltUcvoNAVLQvnF1dCA12sNV83pMn16H1/6GwqdRadYe10XUvDvzH/zHTlRjHGf7UdmYkJlMVwOPy+274Vs1L2cjEAIz3RviZ8otIVzTC0xHdiyTPQVUYLzU10oIq9WuBfYAimhMmmBDZNaB/7tTR2eGO1tNGVYYsr/srcGhTy5TrURRUuUfzVnEvwsGuORYOubNFFKp7zu+vpmkadlnxZy3YLtCjf/YCp9H1TYbKHIdCM9BZRDRhCjWXIQVex4ltqw9WoRqHqqg7i8BpNpAZ/w4QbSTfS0FUOl7hvCUJdtuJrScr4+5+rUZhaLgPHQLPFoEKSnz10/hV16KIL4/im+oJIR1e0rhtr3IDDNA2WydHRFQ2Rr+zP5hBvYQ93kQfWFJ1hzFC5Yd0hoYqJLVjJVZk/UbrkpAvKTZi5wlZDF0S3OVp7zS766jFIVXdauqIJLyq6JuYEypc/Xz2aiPc+E+rbNnnVQHdXqoaC7KTi/6t09Sfbuu8+E6PD4tho6ILAfuEHvtuGr7SC6+mK+oX2+6ivgLX05BuhBkgPd9lubDUuDmDSkzUB3a8FIbDMESpjitx/re5KpmvaGfEkUStbHsTHmT16HV3QR4ha4PAyNbjSxwa6oiUWOGEH9dnksSdfhLLduAj2+QBt2sVIxQfG3OWLsbANJ0+Vqqwg07VMxYtV7fMgnKbNDgPMxlB4azMcvY32jiAuVe33NdEVzZ4k7Waq1Xj14mv2SGHLmO1wYpk2SSnaD7Zdcmm/wRSWwcSnZrFGzRiCYaiXPWL209xgDV3oFwoxhVJFE4JFIssckpGusjjXRle08+GLVrbrJWEEIPyX6p5esZGsjPRiPrtygJZoT6TVqUbXsFkINcVnak4mNekCeQNmDoaX3pqAw1OOHgtdRZ2Tja6iovUQvmhlu/47XEE6GLxWHMhlpPcZNXx1BVhq9lnF7utSA5rHx+X73UdN9VQdips8mxRlLsLFg+GlDwngyloUudnoigYFX5Yq3sP5eiPpDP9U2koyMw3gYSscI01Q2lN3x2+B0UqW1+kaFF7pXf5Q7rvo0DT2ecgAuljnJcN2fcETOYiHw6tZmCGwqDkJVrqiDbdKjRyz1YHxQ1rZrv/pDBBQMsq0n0AGSLuJzi++x9qZ0pgqQv6rCN7nD6d48tIOCA0wxCuc4HIXRMxB0ODwMuX1MNQCDNjpiqZXFiEPmO0P4+uClPH3z3xi90yJl8K65O/jVEuV7CKSWG4qUP2ucdOa2zbxRNoESvaxUEgHARjzDhtcLMGpc9AVzffcQVd0f3EIX1YPtuy9/8lCC3n2mC8QT3+nr3xC/Vi6vY2oxjatDzmWjuwefZOuagsfzOXUnN98gAvEeHDRBWPJvr9rjnXulPjGvdpuLfwz/nPcgWop+XkUV2Tdv4Nrm0ma2TtcglNcvEpk69rbpWXWivH03ZU4GKa1WGCS8tchLnUL8Zat6gX/WVjOrvjdWtXcSSW6EtFBZVWdP0Az0lHjn1VsSSJ+NKBgqFnfBpedDJe253cDlyxm6474RbPo9C7hLSB9K17UzfOPlx3LKy9Svu+4x9YG7pdju10MJpLXBo1Y25Zq+Md1zkF/bWpyhUVa0jWEf1WvWGJz1raUao4+ScTz6a4+HPVIT3xqwbLX7Z3j6Zg3v471dT+0vXcdLJB0IZw+pMfmSHTRynbje+peB//IRwABtL13uWSak3hNDtq2E3AYaGW74N7TBL//Pr0AF5aUuVWKeJI77Z8TC3CBVrZbuKPE7SnhW4h+E4yn7dbnSymNaSryHI4g+ytB23tXpWRpPlr4FqLfA8tpuxKupIAJMQJyui79zbAW+5RzRY4eEeOL4SjR3wCfsl2SmI8/w7cQHR1EEa8sRDQxb65ACvDEmjK5GjKPeGDUOcZZ/2h0aSK+4USR6jps9dABPqDtvWuGKIhVU0HMHxWksl1tAJAm5lf/d4f+asxIe++0dZykg3pbnL0R0ESbsl3SCXrhK0WPiCntFDzDabt70rIXvlL0aGhXthvE/P+LDcmcmct2b0li3vu4lIA6SNbMUrZLFPPepYkBMmin7drKdmlKxbAlIOAg0MLq1rpUoph31TgGEHCM03Zpm2Pj8/gusj8afZqId9Qx0raeex8CG1Dg9SgP2vl9bAL+RywHAGzHe1Sw7OpF0MR8uxP7Aohlu26RQDyU6E/7jskzw/FO26XVDvjv4gsoN5M6YNyVWwPtLI4g5luAVrZL+967a1pRbxDz3qBt0kqJZdM0Md/uqPR/Gruj1jHRTmlzeXABJtDKdulfOO786vIcYYeeL4592u6cZlu9T/76t0GT3ofE0Ul3bHGu3r8M4lw4qOSMJOZ158wFuDBOEzfSw3LAN78I90x+hR16h6Pbo+BAN6n3g4BeoCsgICAgIOCvxn8ydLvFktWj2gAAAABJRU5ErkJggg==" },
                                        { name: "HDFC", src: "data:image/png;base64,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" },
                                    ].map((item, i) => (
                                        <motion.div
                                            key={i}
                                            className="p-4 bg-white
                           hover:shadow-xl hover:-translate-y-2 transition-all w-32 h-20
                           flex items-center justify-center"
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: i * 0.1 }}
                                        >
                                            <img
                                                src={item.src}
                                                alt={item.name}
                                                className="max-h-12 object-contain"
                                            />
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
                        </motion.section>
                    )}







                </AnimatePresence>
            </div>
        </section>
    );
}
