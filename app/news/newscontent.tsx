"use client";
import { motion, AnimatePresence } from "framer-motion";
import News from "../../components/Newscontents";
import { useEffect } from "react";
import Link from "next/link";



export default function NewscontentPage() {

    useEffect(() => {
        // Set page title
        document.title = "News | Sona School of Business and Management";

        // Meta description
        let metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
        if (!metaDesc) {
            metaDesc = document.createElement('meta');
            metaDesc.name = 'description';
            document.head.appendChild(metaDesc);
        }
        metaDesc.content =
            "Stay updated with the latest news, events, and achievements from Sona School of Business and Management.";

        // Robots meta
        let metaRobots = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
        if (!metaRobots) {
            metaRobots = document.createElement('meta');
            metaRobots.name = 'robots';
            document.head.appendChild(metaRobots);
        }
        metaRobots.content = "index, follow";

        // Canonical link
        let linkCanonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
        if (!linkCanonical) {
            linkCanonical = document.createElement('link');
            linkCanonical.rel = "canonical";
            document.head.appendChild(linkCanonical);
        }
        linkCanonical.href = "https://www.sonabusinessschool.com/news";
    }, []);


    return (
        <section className="w-full min-h-screen bg-gray-50 py-12 flex flex-col items-center">

            <div className="w-full relative">
                <AnimatePresence mode="wait">
                    <motion.img
                        src="/images/banner/news-event-banners/Sona-News.webp"
                        alt="Corporate Banner"
                        className="w-full h-56 sm:h-64 md:h-80 lg:h-96 object-cover"
                        initial={{ x: "-100%", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: "100%", opacity: 0 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                    />
                </AnimatePresence>


                <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 w-full max-w-7xl px-4 sm:px-6">
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white drop-shadow-lg flex items-center gap-2">
                        News
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

                                <li className="inline-flex items-center text-yellow-500 font-semibold">
                                    News

                                </li>

                            </ol>
                        </nav>
                    </div>
                </div>
            </div>


            {/* ================= Content Section ================= */}
            <div className="w-full max-w-7xl mx-auto mt-8 px-4 sm:px-6 lg:px-8">
                <AnimatePresence mode="wait">
                    <News />
                </AnimatePresence>
            </div>
        </section>
    );
}