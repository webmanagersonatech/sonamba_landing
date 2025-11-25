"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { newsData } from "../data/newsdata";

const News = () => {

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");


  const itemsPerPage = 4;
  const categories = ["All", "Academics", "Research"];

  const filteredNews = newsData.filter((news) => {
    const matchesSearch =
      news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      news.content.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || news.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Pagination
  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);
  const paginatedNews = filteredNews.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <motion.section
      key="News"
      initial={{ x: "-100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="relative bg-white rounded-xl p-6 sm:p-8 md:p-12 max-w-7xl mx-auto text-gray-800 overflow-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* ===== Sidebar ===== */}
        <aside className="md:col-span-1 space-y-6">
          <h3 className="text-lg font-medium text-maroon border-b pb-2">
            Recent News
          </h3>


          <div className="space-y-4">
            {newsData.slice(0, 5).map((news) => (
              <Link key={news.id} href={`/news/${news.slug}`} className="block">
                <div className="flex items-center gap-3 cursor-pointer group bg-gray-50 p-2 hover:bg-gray-100 transition">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-14 h-14 object-cover rounded-md shadow-sm group-hover:scale-105 transition"
                  />
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-700 group-hover:text-maroon line-clamp-2">
                      {news.title}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      {new Date(news.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                      <span className="px-2 py-0.5 bg-maroon/10 text-maroon">
                        {news.category}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </aside>

        {/* ===== Main Content ===== */}
        <div className="md:col-span-3">
          {/* Search + Filters */}
          <div className="mb-6 flex flex-col sm:flex-row justify-end items-center gap-3">
            {/* Category Select */}
            <select
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                setCurrentPage(1);
              }}
              className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-maroon focus:outline-none w-full sm:w-48"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

            {/* Search */}
            <input
              type="text"
              placeholder="Search news..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1); 
              }}

              className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-maroon focus:outline-none w-full sm:w-64"
            />
          </div>

          {/* News List */}


          <div className="space-y-6">
            {paginatedNews.map((news) => (
              <div
                key={news.id}
                className="flex flex-col md:flex-row gap-4 cursor-pointer bg-gray-50 hover:bg-gray-100 shadow-md overflow-hidden transition transform hover:-translate-y-1 hover:shadow-lg"
              >
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full md:w-1/3 h-48 object-cover"
                />
                <div className="flex-1 p-4">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    📅{" "}
                    {new Date(news.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                    <span className="px-2 py-0.5 bg-maroon/10 text-maroon text-xs ">
                      {news.category}
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-2 hover:text-maroon">
                    {news.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-3">
                    {news.excerpt}
                  </p>
                  <span className="mt-3 inline-block text-sm font-medium text-maroon">
                    <Link href={`/news/${news.slug}`}>
                      Read More →
                    </Link>
                  </span>
                </div>
              </div>
            ))}
          </div>


          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-end items-center gap-3 mt-6">
              <button
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 border rounded-lg text-sm disabled:opacity-50 hover:bg-gray-100"
              >
                Prev
              </button>
              <span className="text-sm font-medium">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-3 py-1 border rounded-lg text-sm disabled:opacity-50 hover:bg-gray-100"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>


    </motion.section>
  );
};

export default News;
