"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { placements } from "../data/placementstudentdata";

export default function PlacementTable() {
    const [activeYear, setActiveYear] = useState<number>(2024);
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 10;

    const data = placements[activeYear] || [];
    const totalPages = Math.ceil(data.length / rowsPerPage);
    const currentData = data.slice(
        (currentPage - 1) * rowsPerPage,
        currentPage * rowsPerPage
    );

    return (
        <div className="py-4 ">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-blue-900">
                Placement Records
            </h2>

            {/* Tabs */}


            <div className="flex gap-2 sm:gap-3 mb-6 flex-wrap">
                {[2024, 2022, 2021, 2020, 2019, 2018].map((year) => (
                    <motion.button
                        key={year}
                        onClick={() => {
                            setActiveYear(year);
                            setCurrentPage(1);
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-3 sm:px-4 py-2 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 
      ${activeYear === year
                                ? "bg-yellow-500 text-maroon-md"  // active button
                                : "bg-gray-100 text-gray-600 hover:bg-gray-200" // inactive button
                            }`}
                    >
                        Placement {year}
                    </motion.button>
                ))}

            </div>


            {/* Table */}
            <div className="overflow-x-auto shadow-lg rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 text-xs sm:text-sm md:text-base">
                    <thead className="bg-gray-200 text-maroon">
                        <tr>
                            <th className="px-3 sm:px-4 py-2 text-left">S.No</th>
                            <th className="px-3 sm:px-4 py-2 text-left">University Serial No</th>
                            <th className="px-3 sm:px-4 py-2 text-left">Student Name</th>
                            <th className="px-3 sm:px-4 py-2 text-left">Discipline</th>
                            <th className="px-3 sm:px-4 py-2 text-left">Year</th>
                            <th className="px-3 sm:px-4 py-2 text-left">Campus</th>
                            <th className="px-3 sm:px-4 py-2 text-left">Employer</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentData.length > 0 ? (
                            currentData.map((row, index) => (
                                <tr
                                    key={row.id}
                                    className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"
                                        } hover:bg-gray-100 transition`}
                                >
                                    <td className="px-3 sm:px-4 py-2">
                                        {(currentPage - 1) * rowsPerPage + index + 1}
                                    </td>
                                    <td className="px-3 sm:px-4 py-2">{row.universityNo}</td>
                                    <td className="px-3 sm:px-4 py-2 font-medium">{row.name}</td>
                                    <td className="px-3 sm:px-4 py-2">{row.discipline}</td>
                                    <td className="px-3 sm:px-4 py-2">{row.year}</td>
                                    <td className="px-3 sm:px-4 py-2">{row.campus}</td>
                                    <td className="px-3 sm:px-4 py-2">{row.employer}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan={7}
                                    className="text-center py-6 text-gray-500 italic"
                                >
                                    No placement data available for {activeYear}
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="flex justify-between items-center mt-4 text-sm sm:text-base">
                    <button
                        onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                        disabled={currentPage === 1}
                        className="px-3 sm:px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
                    >
                        Prev
                    </button>

                    <span className="text-gray-700">
                        Page {currentPage} of {totalPages}
                    </span>

                    <button
                        onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="px-3 sm:px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
}
