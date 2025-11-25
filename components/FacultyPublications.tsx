"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { publications, Publication } from "../data/facultypublications";

export default function FacultyPublications() {
  const [openYear, setOpenYear] = useState<string | null>("2025-26");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const filteredPubs: Publication[] = useMemo(() => {
    if (!openYear) return [];
    return publications[openYear].filter(
      (pub) =>
        pub.authors.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [openYear, searchQuery]);

  const totalPages = Math.ceil(filteredPubs.length / pageSize);
  const currentPubs = filteredPubs.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const handleYearChange = (year: string) => {
    setOpenYear(openYear === year ? null : year);
    setSearchQuery("");
    setCurrentPage(1);
  };

  return (
    <div className="space-y-6">
      {/* Year Buttons */}
      <div className="flex flex-wrap justify-center gap-3">
        {Object.keys(publications).map((year) => {
          const isActive = openYear === year;
          return (
            <button
              key={year}
              onClick={() => handleYearChange(year)}
              className={`relative px-6 py-2 rounded-lg font-semibold transition ${
                isActive ? "bg-maroon text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Academic Year {year}
            </button>
          );
        })}
      </div>

      {/* Search Box */}
      {openYear && (
        <div className="flex justify-end">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by author or title..."
            className="px-4 py-2 border border-gray-300 rounded-lg w-full max-w-sm focus:outline-none focus:ring-2 focus:ring-maroon"
          />
        </div>
      )}

      {/* Animated Table */}
      <AnimatePresence mode="wait">
        {openYear && (
          <motion.div
            key={openYear}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="overflow-x-auto border border-gray-200 rounded-lg shadow mt-3">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-maroon text-white">
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-semibold">Authors</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold">Title</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold">Journal</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold">Date</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold">Link</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {currentPubs.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="px-4 py-4 text-center text-gray-500">
                        No publications found.
                      </td>
                    </tr>
                  ) : (
                    currentPubs.map((pub, idx) => (
                      <tr key={idx} className="hover:bg-gray-50">
                        <td className="px-4 py-2 text-sm text-gray-800">{pub.authors}</td>
                        <td className="px-4 py-2 text-sm text-gray-800">{pub.title}</td>
                        <td className="px-4 py-2 text-sm text-gray-600 italic">{pub.journal}</td>
                        <td className="px-4 py-2 text-sm text-gray-800">{pub.date}</td>
                        <td className="px-4 py-2 text-sm">
                          {pub.link ? (
                            <a
                              href={pub.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-maroon hover:underline"
                            >
                              🔗 View
                            </a>
                          ) : (
                            "-"
                          )}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-3 mt-4">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-3 py-1 rounded-lg border border-gray-300 text-gray-700 disabled:opacity-50"
                >
                  Prev
                </button>
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => handlePageChange(i + 1)}
                    className={`px-3 py-1 rounded-lg border ${
                      currentPage === i + 1
                        ? "bg-maroon text-white border-maroon"
                        : "border-gray-300 text-gray-700"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-3 py-1 rounded-lg border border-gray-300 text-gray-700 disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
