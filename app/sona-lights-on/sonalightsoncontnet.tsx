"use client";

import { motion, AnimatePresence } from "framer-motion";
import { sonalightsonData } from "../../data/sonalightsondata";
import LightsOnEventsSection from "../../components/LightsOnEventsSection";
import { useEffect } from "react";
import Link from "next/link"


export default function SonalightsonPage() {
    useEffect(() => {
        const pageTitle = "Sona Lights On | Sona School of Business and Management";
        document.title = pageTitle;

        // ✅ Meta description for better SEO
        let metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
        if (!metaDesc) {
            metaDesc = document.createElement("meta");
            metaDesc.name = "description";
            document.head.appendChild(metaDesc);
        }
        metaDesc.content =
            "Explore Sona Lights On — insights, innovations, and success stories from Sona School of Business and Management.";

        // ✅ Canonical link (prevents duplicate content issues)
        let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
        if (!canonical) {
            canonical = document.createElement("link");
            canonical.rel = "canonical";
            document.head.appendChild(canonical);
        }
        canonical.href = "https://www.sonabusinessschool.com/sona-lights-on/";

        // ✅ Robots meta to ensure indexing
        let robots = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
        if (!robots) {
            robots = document.createElement("meta");
            robots.name = "robots";
            document.head.appendChild(robots);
        }
        robots.content = "index, follow";
    }, []);


    return (
        <section className="w-full min-h-screen bg-gray-50 py-12 flex flex-col items-center">

            {/* ================= Banner ================= */}
            <div className="w-full relative">
                <AnimatePresence mode="wait">
                    <motion.img
                        src="/images/banner/sona-lights-on-banners/lights-on.webp"
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
                        Sona Lights On
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
                                <li className="inline-flex items-center text-yellow-500 font-semibold">
                                    Sona Lights On
                                </li>


                            </ol>
                        </nav>
                    </div>
                </div>
            </div>

            <LightsOnEventsSection events={sonalightsonData} />
        </section>
    );
}
