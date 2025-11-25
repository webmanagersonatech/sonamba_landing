"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { lectures } from "../data/lecturedata";
const GuestLectures: React.FC = () => {

    const years = Object.keys(lectures);
    const [activeYear, setActiveYear] = useState(years[0]);
    const [pages, setPages] = useState<Record<string, number>>({});
    const rowsPerPage = 10;

    function formatKey(key: string) {
        if (!key) return "";
        if (key.toLowerCase() === "sno") return "S. no";
        const withSpaces = key.replace(/([a-z])([A-Z])/g, "$1 $2");
        return withSpaces.charAt(0).toUpperCase() + withSpaces.slice(1).toLowerCase();
    }

    return (
        <div className="space-y-8">
            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-3 relative">
                {years.map((year) => {
                    const isActive = activeYear === year;
                    return (
                        <button
                            key={year}
                            onClick={() => setActiveYear(year)}
                            className="relative px-5 py-2 text-sm font-semibold transition-all duration-300 rounded-lg"
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="activeTabBackground"
                                    className="absolute inset-0 rounded-lg bg-maroon/90"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                            <span
                                className={`relative z-10 ${isActive ? "text-white" : "text-gray-700"
                                    }`}
                            >
                                Academic Year {year}
                            </span>
                        </button>
                    );
                })}
            </div>

            {/* Tables with Motion Animation */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeYear}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="space-y-4"
                >
                    <h2 className="text-lg font-bold text-maroon">
                        Academic Year {activeYear}
                    </h2>

                    {/* Table */}
                    <div className="overflow-x-auto border border-gray-200 rounded-lg shadow-sm">
                        <table className="w-full border-collapse">
                            <thead className="bg-maroon text-white">
                                <tr>
                                    {Object.keys(lectures[activeYear][0] || {}).map((key) => (
                                        <th
                                            key={key}
                                            className="px-4 py-2 text-left text-sm font-semibold border border-gray-300"
                                        >
                                            {formatKey(key)}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {(() => {
                                    const page = pages[activeYear] || 1;
                                    const totalPages = Math.ceil(
                                        lectures[activeYear].length / rowsPerPage
                                    );
                                    const startIndex = (page - 1) * rowsPerPage;
                                    const currentRows = lectures[activeYear].slice(
                                        startIndex,
                                        startIndex + rowsPerPage
                                    );

                                    return currentRows.map((row, idx) => (
                                        <tr key={idx} className="hover:bg-gray-50 transition">
                                            {Object.entries(row).map(([key, value]) => (
                                                <td
                                                    key={key}
                                                    className="px-4 py-2 text-sm text-gray-700 border border-gray-200"
                                                >
                                                    {Array.isArray(value)
                                                        ? value.join(", ")
                                                        : String(value)}
                                                </td>
                                            ))}
                                        </tr>
                                    ));
                                })()}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    {lectures[activeYear].length > rowsPerPage && (() => {
                        const page = pages[activeYear] || 1;
                        const totalPages = Math.ceil(
                            lectures[activeYear].length / rowsPerPage
                        );
                        return (
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-600">
                                    Page {page} of {totalPages}
                                </span>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() =>
                                            setPages((prev) => ({
                                                ...prev,
                                                [activeYear]: Math.max(page - 1, 1),
                                            }))
                                        }
                                        disabled={page === 1}
                                        className="px-3 py-1 bg-gray-200 text-gray-700 rounded-lg disabled:opacity-50 hover:bg-gray-300 transition"
                                    >
                                        Prev
                                    </button>
                                    <button
                                        onClick={() =>
                                            setPages((prev) => ({
                                                ...prev,
                                                [activeYear]: Math.min(page + 1, totalPages),
                                            }))
                                        }
                                        disabled={page === totalPages}
                                        className="px-3 py-1 bg-maroon text-white rounded-lg disabled:opacity-50 hover:bg-maroon/90 transition"
                                    >
                                        Next
                                    </button>
                                </div>
                            </div>
                        );
                    })()}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default GuestLectures;
